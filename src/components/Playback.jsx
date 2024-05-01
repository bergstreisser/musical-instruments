import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Playback(props) {

    return (
        <div className='playback'>
            <img className='img' src="img/playback.jpg" alt="playback" />
            <h4 className='title'>MP3 Playback Titel</h4>
            <h5 className='beschreibung'>MP3 Playback Beschreibung...</h5>
            <AudioPlayer
                src="mp3/AUDIO.mp3"
                onPlay={e => console.log("onPlay")}
            />
        </div>
    );
}

export default Playback;