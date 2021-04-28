import React from "react";
import Map from "./components/Map";
import Settings from "./components/Settings";
// Data
import europe from "./europe.geo.json";
// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Map />
      <Settings data={europe} />
    </div>
  );
}

export default App;
