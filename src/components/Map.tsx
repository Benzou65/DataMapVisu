import { FeatureCollection, Feature } from "geojson";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import logo from "./assets/marker-declique.png";
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

const myIcon = L.icon({
  iconUrl: logo,
  iconRetinaUrl: logo,
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0],
  shadowUrl: logo,
  shadowRetinaUrl: logo,
  shadowSize: [0, 0],
  shadowAnchor: [0, 0],
});

export default function Map(props: { data: FeatureCollection }): JSX.Element {
  const { data } = props;
  return (
    <MapContainer
      center={[43.6, 1.45]}
      zoom={5}
      scrollWheelZoom={false}
      className={styles.map}
    >
      {/* <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      {data.features.map((country: Feature) => (
        <GeoJSON
          data={country}
          key={country.properties?.iso_a3 + "-" + country.properties?.name}
          pathOptions={{
            color: "grey",
            fillColor: "#585858",
            opacity: 1,
            weight: 1,
          }}
        />
      ))}

      <Marker position={[43.6, 1.45]} icon={myIcon}>
        <Popup>
          TOULOUSE <br /> Bien ou bien ?!
        </Popup>
      </Marker>
    </MapContainer>
  );
}
