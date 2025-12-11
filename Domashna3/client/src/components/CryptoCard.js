import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CryptoCard(props) {
    const [details, setDetails] = useState();
    const [name, setName] = useState("");

    useEffect(() => {
        setDetails(props.details);
    }, [])

    return (
        <>
            <Link
                to={`/details/${props.id}`}
                state={{details}}
                className="no-underline">

                <div className="w-full bg-white p-4 rounded-3xl flex shadow-md hover:bg-neutral-50">
                    <span className="w-1/6 sm:w-1/4 md:w-1/12 font-bold">{details?.marketCapRank}.</span>
                    <span className="w-1/6 sm:w-1/4 md:w-1/12">
                        <img className="w-[35px]" src={details?.image}/>
                    </span>
                    <span className="w-1/6 sm:w-1/3 md:w-1/6 font-bold">{details?.name}</span>
                    <span className="w-1/6 sm:w-1/4 md:w-1/8">${details?.currentPrice}</span>
                    <span className="w-1/6 sm:w-1/3 md:w-1/6">{details?.totalVolume}</span>
                    <span className="w-1/6 sm:w-1/4 md:w-1/6">{details?.totalSupply}</span>
                    <span className="w-1/6 sm:w-1/4 md:w-1/6">{details?.circulatingSupply}</span>
                    <span className="w-1/6 sm:w-1/4 md:w-1/6">${details?.marketCap}</span>
                </div>
            </Link>

        </>
    )
}