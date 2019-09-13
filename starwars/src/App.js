import React from "react";
import "./App.css";
import SWAPIData from "./components/DataList";

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">Charaters of Star Wars</h1>
      <SWAPIData />
    </div>
  );
};

export default App;
