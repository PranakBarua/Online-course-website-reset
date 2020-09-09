import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;