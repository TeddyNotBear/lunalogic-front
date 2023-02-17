import eth_icon from '../images/eth_icon.png';
import { Auction } from '../pages/Auction';

export interface IMetadata {
    image: string,
    name: string,
    description: string,
    attributes?: Array<Object>,
}

function NFTCard(props: { owner: string; metadata: IMetadata; current_bid: string }) {

    return (
        <div className="w-72">
            <div>
                <img className="" src={props.metadata.image} alt="" />
            </div>
            <div className="border p-4">
                <div className="grid pb-4">
                    <span className="font-sans font-semibold">{ props.metadata.name }</span>
                    <span className="font-sans font-light text-sm">Created by : { props.owner }</span>
                </div>
                <div className="flex justify-between">
                    <div className="grid">
                        <span className="font-sans font-extralight text-sm">Current bid</span>
                        <div className='flex items-center'>
                            <img className='h-4' src={eth_icon} alt="" />
                            <span className="font-sans font-semibold pl-1">{ props.current_bid }</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className="bg-black text-white py-2 px-6 font-medium cursor-pointer">Place bid</span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export { NFTCard };
