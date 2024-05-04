import React from 'react';

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
                    <img className='add' src='img/add.png' alt='add' />
                    <p className='number'>5</p>
                </div>
            </div>
        </div>
    );
}

export default Instrument;