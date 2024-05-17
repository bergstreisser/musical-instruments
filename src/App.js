import React from "react";
import Header from "./components/Header";
import "./scss/app.scss";
import violine from "../src/assets/img/violin1.png";
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
            <Instrument img={violine} alt="violine" title="Violine" description="Eine sehr schöne Violine..." price={1500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
