import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { ConnectButton } from "@rainbow-me/rainbowkit";




function Header(props: { }) {

    const Menu = [
        { title: "Discover", path: "discorver" },
        { title: "Marketplace", path: "marketplace" },
        { title: "Activity", path: "activity" },
    ];

    return (
        <div className="flex justify-around items-center h-20">
            <div>
                <img className='h-10' src={logo} alt="logo"/>
            </div>
            <ul className='flex gap-10'>
                {
                    Menu.map((menu, index) => (
                        <>
                            <li key={index} className="">
                                <Link className='font-medium' to={``}>{ menu.title }</Link>
                            </li>
                        </>
                    ))
                }
            </ul>
            <div className='flex items-center gap-14'>
                <ConnectButton chainStatus={"full"} />
            </div>
        </div>
    );

}

export { Header };