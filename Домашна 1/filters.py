import requests
import pandas as pd
import time
import sqlite3
import datetime
from concurrent.futures import ThreadPoolExecutor

all_symbols = set()


def create_database():
    connect = sqlite3.connect("crypto_data.db")
    cursor = connect.cursor()
    # data table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS ohlcv (
            symbol TEXT,
            open_time INTEGER,
            open REAL,
            high REAL,
            low REAL,
            close REAL,
            volume REAL,
            last_price_24h REAL,
            volume_24h REAL,
            high_24h REAL,
            low_24h REAL,
            PRIMARY KEY(symbol, open_time)
        )
    """)
    # metadata table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS symbol_metadata (
            symbol TEXT PRIMARY KEY,
            earliest_timestamp INTEGER,
            latest_timestamp INTEGER
        )
    """)

    connect.commit()
    connect.close()


def filter1():
    stable_quotes = ["USDT", "BUSD", "USDC"]

    url = "https://api.binance.com/api/v3/ticker/24hr"
    data = requests.get(url).json()
    df = pd.DataFrame(data)
    df = df[df['quoteVolume'].astype(float) > 0]
    df = df[df['lastPrice'].astype(float) >= 0.01]
    df = df.sort_values(by='quoteVolume', ascending=False)
    symbols = df['symbol'].tolist()

    filtered_symbols = []
    for symbol in symbols:
        if any(s in symbol for s in stable_quotes):
            filtered_symbols.append(symbol)

    # return filtered_symbols[:1000]

    final_symbols = filtered_symbols[:1000]
    pd.DataFrame(final_symbols, columns=["symbol"]).to_csv("filtered_symbols.csv", index=False)


def save_database(rows):
    if not rows:
        return
    connect = sqlite3.connect("crypto_data.db")
    cursor = connect.cursor()
    cursor.executemany("""
        INSERT OR REPLACE INTO ohlcv(symbol, open_time, open, high, low, close, volume,
                                     last_price_24h, volume_24h, high_24h, low_24h)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, rows)
    connect.commit()
    connect.close()


def update_metadata(symbol, earliest_timestamp=None, latest_timestamp=None):
    connect = sqlite3.connect("crypto_data.db")
    cursor = connect.cursor()
    cursor.execute("SELECT * FROM symbol_metadata WHERE symbol=?", (symbol,))
    result = cursor.fetchone()

    if result:
        result_earliest, result_latest = result[1], result[2]
        earliest_timestamp = min(result_earliest, earliest_timestamp) if earliest_timestamp else result_earliest
        latest_timestamp = max(result_latest, latest_timestamp) if latest_timestamp else result_latest
        cursor.execute("UPDATE symbol_metadata SET earliest_timestamp=?, latest_timestamp=? WHERE symbol=?",
                       (earliest_timestamp, latest_timestamp, symbol))
    else:
        cursor.execute("INSERT INTO symbol_metadata(symbol, earliest_timestamp, latest_timestamp) VALUES (?, ?, ?)",
                       (symbol, earliest_timestamp or 0, latest_timestamp or 0))

    connect.commit()
    connect.close()


def get_metadata(symbol):
    connect = sqlite3.connect("crypto_data.db")
    cursor = connect.cursor()
    cursor.execute("SELECT earliest_timestamp, latest_timestamp FROM symbol_metadata WHERE symbol=?", (symbol,))
    result = cursor.fetchone()
    connect.close()
    if result:
        return {"earliest_timestamp": result[0], "latest_timestamp": result[1]}
    return {"earliest_timestamp": None, "latest_timestamp": None}


def fetch_info(symbol, start_time=None):
    url_klines = "https://api.binance.com/api/v3/klines"
    rows = []

    url_24h = "https://api.binance.com/api/v3/ticker/24hr"
    data_24h = requests.get(url_24h, params={"symbol": symbol}).json()
    last_price = float(data_24h.get("lastPrice", 0))
    volume = float(data_24h.get("volume", 0))
    high_price = float(data_24h.get("highPrice", 0))
    low_price = float(data_24h.get("lowPrice", 0))

    while True:
        parameters = {"symbol": symbol, "interval": "1d", "limit": 1000}
        if start_time:
            parameters["startTime"] = start_time
        response = requests.get(url_klines, params=parameters).json()
        if not response:
            break

        for cell in response:
            open_time = cell[0]
            row = [symbol, open_time, float(cell[1]), float(cell[2]), float(cell[3]), float(cell[4]), float(cell[5]),
                   last_price, volume, high_price, low_price]
            rows.append(row)
        start_time = response[-1][0] + 1

        if len(response) < 1000:
            break
        time.sleep(0.1)

    return rows


def process_symbol(symbol):
    print(f"Symbol: {symbol}")
    metadata = get_metadata(symbol)
    start_time = metadata['latest_timestamp'] + 1 if metadata['latest_timestamp'] else None

    rows = fetch_info(symbol, start_time)
    if not rows:
        print(f"No data for {symbol}")
        return

    all_symbols.add(symbol)
    save_database(rows)

    earliest_timestamp = min(row[1] for row in rows)
    latest_timestamp = max(row[1] for row in rows)
    update_metadata(symbol, earliest_timestamp, latest_timestamp)

    print(f"Added {len(rows)} rows")


if __name__ == "__main__":
    create_database()
    start_time = time.time()

    filter1()
    df = pd.read_csv("filtered_symbols.csv")
    symbols = df["symbol"].tolist()

    with ThreadPoolExecutor(max_workers=5) as executor:
        for symbol in symbols:
            executor.submit(process_symbol, symbol)

    end_time = time.time()
    seconds = end_time - start_time
    time = str(datetime.timedelta(seconds=int(seconds)))
    print(f"Finished in {time}")
