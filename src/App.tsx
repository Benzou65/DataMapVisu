import React from "react";
import Map from "./components/Map";
import Settings from "./components/Settings";
import { FeatureCollection } from "geojson";

// Styles
import "./App.css";

import europeImport from "./europe.json";
const europeFile = JSON.stringify(europeImport);
const europe: FeatureCollection = JSON.parse(europeFile);

function App(): JSX.Element {
  return (
    <div className="App">
      <Map data={europe} />
      <Settings data={europe} />
    </div>
  );
}

export default App;
