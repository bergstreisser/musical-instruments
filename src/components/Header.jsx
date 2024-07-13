import React from 'react';
import header from "../assets/header.jpg";

function Header() {

    return (
        <header>
            <div>
                <img src={header} alt="header" />
            </div>
        </header>
    );
}

export default Header;