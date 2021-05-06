import React from "react";
import { FeatureCollection, Feature } from "geojson";

// Styles
import styles from "./Settings.module.scss";

export default function Settings(props: {
  data: FeatureCollection;
}): JSX.Element {
  const { data } = props;

  return (
    <div className={styles.settings}>
      <ul>
        {data.features.map((country: Feature) => (
          <li key={country.properties?.iso_a3}>{country.properties?.name}</li>
        ))}
      </ul>
    </div>
  );
}
