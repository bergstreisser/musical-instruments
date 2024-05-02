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
            <Instrument />
            <Instrument />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
