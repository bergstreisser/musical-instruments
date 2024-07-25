import React from 'react';
import header from "../assets/header.jpg";
import { Link } from 'react-router-dom';


function Header() {

    return (
        <Link to='/musical-instruments/'>
            <header>
                <div>
                    <img src={header} alt="header" />
                </div>
            </header>
        </Link>
    );
}

export default Header;