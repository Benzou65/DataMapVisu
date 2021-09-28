import { FeatureCollection, Feature } from "geojson";
import React from "react";
import { MapContainer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import logo from "./assets/marker-declique.png";
// GeoJSON https://geojson-maps.ash.ms/
// Types
import { TFrData } from "../App";
// Styles
import styles from "./Map.module.scss";

const myIcon = L.icon({
  iconUrl: logo,
  iconRetinaUrl: logo,
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [-10, -20],
  shadowUrl: logo,
  shadowRetinaUrl: logo,
  shadowSize: [0, 0],
  shadowAnchor: [0, 0],
});

export default function Map(props: {
  data: FeatureCollection;
  city?: TFrData[];
}): JSX.Element {
  const { data, city } = props;

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

      {city &&
        city.map((city: TFrData) => (
          <Marker key={city.city} position={[city.lat, city.lng]} icon={myIcon}>
            <Popup>{city.city}</Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
