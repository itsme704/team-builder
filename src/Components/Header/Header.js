import React from 'react';
import './Header.css';
import logo from '../../images/images.jpg';
const Header = () => {
    return (
        <div>
           <div className="header" >
            <nav>
            <img className="logo" src={logo} alt=""/>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">All Team</a>
            </nav>
            </div>
        </div>
    );
};

export default Header;