import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Instrument from "./components/Instrument";
import add from "../src/assets/add.png"
import data from "./data/db.json";
import "./scss/app.scss";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="wrapper">
        <div className="content">
          <div className="categories">
            <Categories />
          </div>
          <h1>Musik-Instrumente</h1>
          <div className="instruments">
            {data.map((obj) => <Instrument key={obj.id} {...obj} add={add} />)} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
