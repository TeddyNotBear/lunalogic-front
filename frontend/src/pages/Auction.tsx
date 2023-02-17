import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { IMetadata } from "../components/NFTCard";

function Auction(props: { owner: string; metadata: IMetadata; current_bid: string }) {
    return (
        <>
            <Header />
            <hr/>
            <div className="container mx-auto flex h-full items-center pt-28">
                <div className="w-6/12 pb-6">

                </div>
                <div className="grid justify-items-center">
                    <img className="w-4/5" src={props.metadata.image} alt="" />
                </div>
            </div>
        </>
    );
}

export { Auction };
