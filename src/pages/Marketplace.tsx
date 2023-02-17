import logo from '../images/logo.png';
import { NFTCard, IMetadata } from '../components/NFTCard';
import nft from '../images/nft.png'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SimpleGrid } from '@chakra-ui/react';

function Marketplace(props: { }) {

    const metadata: IMetadata = {
        image: nft,
        name: "3D Human Concept",
        description: ""
    }
    
    return (
        <>
            <Header />
            <hr/>
            <div className='grid justify-items-center container mx-auto'>
                <div className='text-5xl pt-24 pb-16 font-serif font-medium'>Marketplace</div>
                <div className='flex gap-6'>
                    <SimpleGrid spacing={10} columns={4} >
                        <NFTCard owner="Hardoah Pro" metadata={metadata} current_bid="0.43" />
                        <NFTCard owner="Hardoah Pro" metadata={metadata} current_bid="0.43" />
                        <NFTCard owner="Hardoah Pro" metadata={metadata} current_bid="0.43" />
                        <NFTCard owner="Hardoah Pro" metadata={metadata} current_bid="0.43" />
                        <NFTCard owner="Hardoah Pro" metadata={metadata} current_bid="0.43" />
                    </SimpleGrid>
                </div>
            </div>
            <Footer />
        </>
       
    );

}

export { Marketplace };