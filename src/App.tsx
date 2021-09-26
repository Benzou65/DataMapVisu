import React, { ChangeEvent, useState } from "react";
import Map from "./components/Map";
import Settings from "./components/Settings";
import { FeatureCollection } from "geojson";
import { parse, ParseResult } from "papaparse";

// Styles
import "./App.css";

import europeImport from "./europe.json";
const europeFile = JSON.stringify(europeImport);
const europe: FeatureCollection = JSON.parse(europeFile);

export interface TFrData {
  admin_name: string;
  capital: string;
  city: string;
  country: string;
  iso2: string;
  lat: string;
  lng: string;
  population: string;
  population_proper: string;
  address: string;
}

function App(): JSX.Element {
  const cityData: TFrData[] = [];
  const [city, setcity] = useState<TFrData[]>();
  const onFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    parse(e.target.files?.[0] as File, {
      header: true,
      complete: (results: ParseResult<TFrData>) => {
        const city: TFrData[] = results.data;
        for (let i = 0; i < 30; i++) {
          cityData.push(city[i]);
        }
        setcity(cityData);
        console.log("results: ", results);
        console.log(`cityData`, cityData);
      },
    });
  };

  return (
    <div className="App">
      <Map data={europe} city={city} />
      {/* <Settings data={europe} /> */}
      <div className="csvInput">
        <input
          type="file"
          id="csv-input"
          name="csv"
          accept=".csv"
          onChange={onFileChange}
        />
      </div>
    </div>
  );
}

export default App;
