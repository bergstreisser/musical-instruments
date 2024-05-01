import React from "react";
import Header from "./components/Header";
import "./scss/app.scss"
import Playback from "./components/Playback";

function App() {
  return (
    <div>
      <div className="header"><Header /></div>
      <div className="wrapper">
        <div className="content">
          <h1>Alle MP3-Playbacks</h1>
          <Playback />
          <Playback />
          <Playback />
        </div>
      </div>
    </div>
  );
}

export default App;
