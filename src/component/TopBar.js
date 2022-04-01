import React from 'react';
import { LogoutOutlined,SearchOutlined, CompassOutlined} from '@ant-design/icons';

function TopBar(props) {
    const { isLoggedIn, handleLogout } = props;
    return (
        <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <span className="App-title">Travellers in NewYork</span>
            {
                isLoggedIn ?
                    <SearchOutlined className='explore'/>
                    :
                    null
            }
            {
                isLoggedIn ?
                    <CompassOutlined className='routes' />
                    :
                    null
            }
            {
                isLoggedIn ?
                    <LogoutOutlined className='logout' onClick={handleLogout}/>
                    :
                    null
            }
        </header>
    );
}

export default TopBar;