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
                state={{ details }}
                className="no-underline">

                <div className="w-full bg-slate-600 p-4 rounded-md">
                    <h3 className="font-bold">{details?.market_cap_rank}. {details?.name}</h3>
                    <p>Market cap: {details?.market_cap}</p>
                </div>
            </Link>

        </>
    )
}