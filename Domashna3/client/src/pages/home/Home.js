import { useEffect, useState } from "react";
import { url } from "../../shared";
import CryptoCard from "../../components/CryptoCard";

export default function Home() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(
            `${url}`,
        )
            .then((response) => {
                // console.log(response);
                if (response.status === 404) return;
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setResults(data);
            });
    }, []);

    return (
        <>
            <h1 className="m-3 text-xl font-bold">Cryptocurrencies</h1>

            {results ? (
                <div className="bg-sky-200 p-6 rounded-3xl">
                    <div className="flex flex-col gap-3 justify-between">
                        <div className="w-full bg-zinc-200 p-4 rounded-3xl font-bold flex shadow-md">
                            <span className="w-1/6 sm:w-1/4 md:w-1/12">No.</span>
                            <span className="w-1/6 sm:w-1/4 md:w-1/12">Logo</span>
                            <span className="w-1/6 sm:w-1/3 md:w-1/6">Coin</span>
                            <span className="w-1/6 sm:w-1/4 md:w-1/8">Current Price</span>
                            <span className="w-1/6 sm:w-1/3 md:w-1/6">Total Volume</span>
                            <span className="w-1/6 sm:w-1/4 md:w-1/6">Total Supply</span>
                            <span className="w-1/6 sm:w-1/4 md:w-1/6">Circulating Supply</span>
                            <span className="w-1/6 sm:w-1/4 md:w-1/6">Market Cap</span>
                        </div>

                        {results.map((crypto) => (
                            <CryptoCard
                                details={crypto}
                                key={crypto.symbol}
                                id={crypto.symbol}
                            />
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
}
