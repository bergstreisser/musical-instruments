import React from 'react';

function Instrument(props) {

    return (
        <div className='instrument'>
            <img className='img' src="img/violin1.png" alt="violin" />
            <h4 className='title'>Bezeichnung</h4>
            <h5 className='beschreibung'>Beschreibung...</h5>
        </div>
    );
}

export default Instrument;