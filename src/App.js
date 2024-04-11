import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="header"><Header /></div>
      <div className="wrapper">
        <div className="content">
          <h1>Die besten MP3-Playbacks</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
