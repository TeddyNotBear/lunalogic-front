

function Header(props: { }) {

    const Menu = [
        { title: "Marketplace" },
    ];

    return (
        <div className="flex justify-between items-center h-12">
            <div>BRAND LOGO</div>
            <ul>
                {
                    Menu.map((menu, index) => (
                        <>
                            <li key={index}>
                                <span>{ menu.title }</span>
                            </li>
                        </>
                    ))
                }
            </ul>
            <div>CONNECT WALLET</div>
        </div>
    );

}

export { Header };
