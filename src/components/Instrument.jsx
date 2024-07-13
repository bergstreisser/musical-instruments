import React from 'react';

function Instrument({ img, alt, title, description, price, add }) {
    const [instrumentCount, setInstrumentCount] = React.useState(0); 

    const onClickAddButton = () => {
        setInstrumentCount(instrumentCount + 1);
    }

    return (
        <div className='instrument'>
            <img className='img' src={img} alt={alt} />
            <h4 className='title'>{title}</h4>
            <p className='description'>{description}</p>
            <div onClick={onClickAddButton} className='priseAndNumber'>
                <div>
                    <p className='price'>Preis: {price} €</p>
                </div>
                <div className='buy'>
                    <img className='add' src={add} alt='add' />
                    <p className='number'>{instrumentCount}</p>
                </div>
            </div>
        </div>
    );
}

export default Instrument;