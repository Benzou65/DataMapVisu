import { GeoJsonTypes } from "geojson";
import React from "react";

// Data
import europe from "../europe.geo.json";
// Styles
import styles from "./Settings.module.scss";

console.log(europe);

export default function Settings(props: { data: GeoJsonTypes }) {
  //   const europeJSON = europe.features;
  const { data } = props;
  console.log(data);

  return (
    <div className={styles.settings}>
      <ul>
        {/* {data.map((country: any) => (
          <li key={country.properties.iso_a3}>{country.properties.name}</li>
        ))} */}
      </ul>
    </div>
  );
}
