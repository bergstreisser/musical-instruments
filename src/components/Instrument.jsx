import React from 'react';
import add from "../assets/img/add.png";

function Instrument({ img, alt, title, description, price }) {

    return (
        <div className='instrument'>
            <img className='img' src={img} alt={alt} />
            <h4 className='title'>{title}</h4>
            <p className='description'>{description}</p>
            <div className='priseAndNumber'>
                <div>
                    <p className='price'>Preis: {price} €</p>
                </div>
                <div className='buy'>
                    <img className='add' src={add} alt='add' />
                    <p className='number'>5</p>
                </div>
            </div>
        </div>
    );
}

export default Instrument;