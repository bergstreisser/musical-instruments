import React from 'react';
import header from "../assets/img/header.jpg";

function Header(props) {


    return (
        <header>
            <div>
                <img src={header} alt="header" />
            </div>
        </header>
    );
}

export default Header;