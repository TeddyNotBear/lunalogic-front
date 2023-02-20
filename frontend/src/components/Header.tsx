import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header(props: { }) {

    const Menu = [
        { title: "Discover", path: "discover" },
        { title: "Galleries", path: "galleries" },
        { title: "Marketplace", path: "marketplace" },
        { title: "Activity", path: "activity" },
    ];

    return (
        <div className="flex justify-around items-center h-20">
            <div>
                <Link to={'/home'}><img className='h-10' src={logo} alt="logo"/></Link>
            </div>
            <ul className='flex gap-10'>
                {
                    Menu.map((menu, index) => (
                        <>
                            <li key={index} className="">
                                <Link className='font-medium' to={`/${menu.path}`}>{ menu.title }</Link>
                            </li>
                        </>
                    ))
                }
            </ul>
            
            <div className='flex items-center gap-14'>
                <Button colorScheme="blue" variant="outline">Create</Button>
                {/* <ConnectButton /> */}
            </div>
        </div>
    );

}

export { Header };