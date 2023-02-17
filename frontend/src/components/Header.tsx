import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

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
                <div className='bg-black text-white py-2 px-6 font-medium cursor-pointer'>Connect</div>
            </div>
        </div>
    );

}

export { Header };