import React from 'react'
import AppContext from '../context';

import Instrument from "../components/Instrument";
import add from "../assets/add.png"
import { Link } from 'react-router-dom';
import "../scss/app.scss";

export const Home = () => {
    const { data, category = [] } = React.useContext(AppContext);
    
    let categoryData = [];

    if(category.length === 0) {
        categoryData = data;
    } else {
        categoryData = category;
    }

    return (
        <div>
            <div className="title">
                <div className="home">
                    <h1>Musik-Instrumente</h1>
                </div>
                <Link to='/cart'>
                    <div className="cart">
                        <img src="img/cart.svg" alt="cart"></img>
                        <div className="betrag">2000.00 €</div>
                    </div>
                </Link>
            </div>

            <div className="instruments">
                {categoryData.map((obj) => <Instrument key={obj.id} {...obj} add={add} />)}
            </div>
        </div>
    )
}
