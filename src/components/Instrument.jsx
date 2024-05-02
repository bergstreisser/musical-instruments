import React from 'react';

function Instrument(props) {

    return (
        <div className='instrument'>
            <img className='img' src={props.img} alt={props.alt} />
            <h4 className='title'>{props.title}</h4>
            <h5 className='beschreibung'>{props.description}</h5>
        </div>
    );
}

export default Instrument;