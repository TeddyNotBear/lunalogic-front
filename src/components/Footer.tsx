import white_logo from '../images/white_logo.png';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Footer(props: { }) {
    return (
        <div>
            <div className="flex flex-row my-14 bg-black justify-between p-6">
                <div className="basis-2/6 grid content-center">
                    <img className="h-12" src={white_logo} alt="brand_logo" />
                    <p className="text-left text-white my-4">Discorver Rare Collections Of Art & NFTs.</p>
                    <div className="text-left">
                        <SocialIcon className="mr-6" network="discord" bgColor="gray" style={{ height: 30, width: 30 }}/>
                        <SocialIcon className="mr-6" network="twitter" bgColor="gray" style={{ height: 30, width: 30 }}/>
                        <SocialIcon className="mr-6" network="github" bgColor="gray" style={{ height: 30, width: 30 }}/>
                        <SocialIcon className="mr-6" network="telegram" bgColor="gray" style={{ height: 30, width: 30 }}/>
                    </div>
                </div>
                <div className="basis-1/6 flex flex-col text-lg text-left">
                    <p className="font-bold text-lg pt-3 text-white">Support</p>
                    <Link className='pt-4 text-sm text-white' to={'/documentation'}>Documentation</Link>
                    <Link className='pt-4 text-sm text-white' to={'/api_status'}>API Status</Link>
                </div>
                <div className="basis-1/6 flex flex-col text-lg text-left">
                    <p className="font-bold text-lg pt-3 text-white">Company</p>
                    <Link className='pt-4 text-sm text-white' to={'/about'}>About</Link>
                    <Link className='pt-4 text-sm text-white' to={'/jobs'}>Jobs</Link>
                    <Link className='pt-4 text-sm text-white' to={'/press'}>Press</Link>
                </div>
                <div className="basis-1/6 flex flex-col text-lg text-left">
                    <p className="font-bold text-lg pt-3 text-white">Legal</p>
                    <Link className='pt-4 text-sm text-white' to={'/terms'}>Terms</Link>
                </div>
            </div>
        </div>  
    );

}

export { Footer };