import React from 'react';
import { LogoutOutlined,SearchOutlined, CompassOutlined} from '@ant-design/icons';

function TopBar(props) {
    const { isLoggedIn, handleLogout } = props;
    return (
        // <header className="App-header">
        //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
        //     <span className="App-title">Travellers in NewYork</span>
        //     {
        //         isLoggedIn ?
        //             <SearchOutlined className='explore'/>
        //             :
        //             null
        //     }
        //     {
        //         isLoggedIn ?
        //             <CompassOutlined className='routes' />
        //             :
        //             null
        //     }

        // </header>
        <nav className='nav-wrapper red darken-3'>
            <div className="App-header">
                <a href='/' className="title">Traveller in NewYork</a>
                {
                    isLoggedIn ?
                        <ul className='url'>
                            <li><a href='/explore'>Explore</a></li>
                            <li><a href='/routes'>Routes</a></li>
                        </ul>
                        :
                        null
                        }
                {
                    isLoggedIn ?
                        <LogoutOutlined className='logout' onClick={handleLogout}/>
                        :
                        null
                }
            </div>
        </nav>
    );
}

export default TopBar;