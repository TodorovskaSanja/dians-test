import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import OhlcvChart from "../../components/OhlcvChart.js";

export default function Crypto(props) {
    const { id } = useParams();
    const location = useLocation();
    const [details, setDetails] = useState(location.state?.details || null);
    const [ohlcv, setOhlcv] = useState([]);

    useEffect(() => {
        console.log(id)
        if (!details) {
            fetch(`https://localhost:8080/api/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(id)
                    console.log(data)
                    setDetails(data);
                })
                .catch((e) => console.log(e));
        }
    }, [id, details]);

    useEffect(() => {
        // https dava ERR_CONNECTION_RESET
        fetch(`http://localhost:8080/api/${id}/ohlcv`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setOhlcv(data);
            })
            .catch((e) => console.log(e));
    }, [id]);


    return (

        <>

            <div className="flex flex-col gap-2 ms-2">
                <div className="flex items-center">
                    <div className="inline-block">
                        <h2 className="font-bold md:text-xl m-3">Details for {details?.name}</h2>
                        <img src={`${details?.image}`} className="min-w-[330px]" />
                    </div>

                    <div className="inline-block ms-7">
                        <h1 className="mt-4 mb-4 text-3xl font-bold tracking-tight text-heading md:text-3xl lg:text-5xl">{details?.name}</h1>

                        <table className="text-body">
                            <tr>
                                <td className="font-bold min-w-[120px]">Current price:</td>
                                <td>${details?.currentPrice}</td>
                            </tr>
                            <tr>
                                <td className="font-bold min-w-[120px]">Market cap:</td>
                                <td>{details?.marketCap}</td>
                            </tr>
                            <tr>
                                <td className="font-bold min-w-[120px]">High:</td>
                                <td>${details?.high24h}</td>
                            </tr>
                            <tr>
                                <td className="font-bold min-w-[120px]">Low:</td>
                                <td>${details?.low24h}</td>
                            </tr>
                            <tr>
                                <td className="font-bold min-w-[120px]">Total volume:</td>
                                <td>{details?.totalVolume}</td>
                            </tr>
                            <tr>
                                <td className="font-bold min-w-[120px]">Total supply:</td>
                                <td>{details?.totalSupply}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="mt-10 p-20">
                    <h3 className="text-xl font-bold mb-4 text-center">OHLCV Chart (Last 3 Months)</h3>
                    {ohlcv.length > 0 ? (
                        <OhlcvChart data={ohlcv} />
                    ) : (
                        <p>Loading chart...</p>
                    )}
                </div>
            </div>
        </>
    );
}