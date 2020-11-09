import React from "react";
//Styles
import "./styles/app.scss";
//Components
import Player from "./components/Player";
import Song from "./components/Song";
//Import util
import data from "./util";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
