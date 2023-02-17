import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import nft from '../images/nft.png';

function Home(props: { }) {
    return (
        <>
            <Header />
            <div className="container mx-auto flex h-full items-center pt-28">
                <div className="w-6/12 pb-6">
                    <div className="font-serif font-medium text-5xl pb-12">
                        <div>Discover Authentic</div>
                        <div>Collections Of Art & NFTs</div>
                    </div>
                    <div className="pb-6">
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div>Voluptatem blanditiis exercitationem asperiores illo ad accusantium.</div>
                    </div>
                    <div className="flex gap-10 items-center">
                        <div className='flex items-center gap-14'>
                            <div className='bg-black text-white py-4 px-8 font-medium cursor-pointer'>Discover</div>
                        </div>
                        <Link className="underline underline-offset-4 cursor-pointer" to={'/marketplace'}>Marketplace</Link>
                    </div>
                </div>
                <div className="grid justify-items-center">
                    <img className="w-4/5" src={nft} alt="" />
                </div>
            </div>
        </>
    );
}

export { Home };
