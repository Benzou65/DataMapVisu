import { FeatureCollection, Feature } from "geojson";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
// GeoJSON https://geojson-maps.ash.ms/

// Styles
import styles from "./Map.module.scss";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Map(props: { data: FeatureCollection }): JSX.Element {
  const { data } = props;
  return (
    <MapContainer
      center={[43.6, 1.45]}
      zoom={5}
      scrollWheelZoom={false}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.features.map((country: Feature) => (
        <GeoJSON
          data={country}
          key={country.properties?.iso_a3}
          pathOptions={{ color: getRandomColor() }}
        />
      ))}

      <Marker position={[43.6, 1.45]}>
        <Popup>
          TOULOUSE <br /> Bien ou bien ?!
        </Popup>
      </Marker>
    </MapContainer>
  );
}
