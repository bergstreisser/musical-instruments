import React from "react";
import Header from "./components/Header";
import "./scss/app.scss"
import Instrument from "./components/Instrument";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="wrapper">
        <div className="content">
          <h1>Alle Musik-Instrumente</h1>
          <div className="instruments">
            <Instrument img="img/violin1.png" alt="violin" title="Violine" description="Eine sehr schöne Violine..." price={1500} />
            <Instrument img="img/drums.png" alt="drums" title="Drums" description="Drums..." />
            <Instrument img="img/saxophone.png" alt="saxophone" title="Saxophone" description="Saxofon ..." />
            <Instrument img="img/piano.png" alt="piano" title="Piano" description="Ein schönes Klavier..." />
            <Instrument img="img/acoustic-guitar.png" alt="guitar" title="Gitarre" description="Schöne Gitarre..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
