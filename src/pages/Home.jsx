import React from 'react'

import Instrument from "../components/Instrument";
import add from "../assets/add.png"
import data from "../data/db.json";
import "../scss/app.scss";
import Skeleton from "../components/Skeleton";
import { Link } from 'react-router-dom';

export const Home = () => {
    const [isLoading, setIsloading] = React.useState(false);

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
                {
                    data.map((obj) => isLoading ? <Skeleton key={obj.id} /> : <Instrument key={obj.id} {...obj} add={add} />)
                }
            </div>
        </div>
    )
}
