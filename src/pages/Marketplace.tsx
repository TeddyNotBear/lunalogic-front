import logo from '../images/logo.png';
import { NFTCard, IMetadata } from '../components/NFTCard';
import nft from '../images/nft.png'
import { Input } from '@chakra-ui/react';

function Marketplace(props: { }) {

    const metadata: IMetadata = {
        image: nft,
        name: "3D Human Concept",
        description: ""
    }
    
    return (
        <div className='grid justify-items-center container mx-auto'>
            <div className='text-5xl pt-24 pb-16 font-serif font-medium'>Marketplace</div>
            <div className='flex gap-6'>
                <NFTCard owner="Hardoah Pro" metadata={metadata} current_bid="0.43" />
                <NFTCard owner="Hardoah Pro" metadata={metadata} current_bid="0.43" />
                <NFTCard owner="Hardoah Pro" metadata={metadata} current_bid="0.43" />
                <NFTCard owner="Hardoah Pro" metadata={metadata} current_bid="0.43" />
            </div>
        </div>
    );

}

export { Marketplace };