import React from 'react';
import img from './img/Captain_logo.png';

const Header = () => {
    return <div className="head">
        <div className="logo">
            <img src={img} height={'100%'} alt="" />
            <h1>CAPTAINS TODO</h1>
        </div>
    </div>;
}

export default Header;
