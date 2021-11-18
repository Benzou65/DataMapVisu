import React, { useState } from "react";
import { FeatureCollection, Feature } from "geojson";

// Styles
import styles from "./Settings.module.scss";

export default function Settings(props: {
  data: FeatureCollection;
}): JSX.Element {
  const { data } = props;
  const [isVisible, setIsVisible] = useState(true);

  document.addEventListener("mousemove", openSettings);
  function openSettings(e: MouseEvent) {
    window.innerWidth - e.clientX < 100 && setIsVisible(true);
  }

  return (
    <div
      className={styles.settings}
      style={{ right: isVisible ? "0px" : "-400px" }}
    >
      <button onClick={() => setIsVisible(false)}>Fermer</button>
      <ul>
        {data.features.map((country: Feature) => (
          <li key={country.properties?.iso_a3 + "-" + country.properties?.name}>
            {country.properties?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
