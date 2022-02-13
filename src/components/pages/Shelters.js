// import React from "react";
// import "../../App.css";
import React from "react";
import "../../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Shelters.css";

let DefaultIcon = L.icon({
  iconUrl:
    "https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [12, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
});
L.Marker.prototype.options.icon = DefaultIcon;

function Shelters() {
  return (
    <div id="shelters-page">
      <MapContainer
        center={[37.34402, -121.95268]}
        zoom={13}
        style={{ height: "500px", width: "500px" }}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.35412694720872, -121.94133450835902]}>
          <Popup>
            Bill Wilson Center <br />
            3490 The Alameda, Santa Clara, CA 95050
          </Popup>
        </Marker>
        <Marker position={[37.39664090960878, -121.95508926047965]}>
          <Popup>
            Sobrato Family Living Center <br />
            1509 Agnew Rd, Santa Clara, CA 95054
          </Popup>
        </Marker>
        <Marker position={[37.35208756660826, -121.96327560705285]}>
          <Popup>
            Covenant House of California <br />
            2250 El Camino Real, Santa Clara, CA 95050
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{ marginLeft: "40px" }} id="shelters-list">
        <h1>Local Shelters in Santa Clara</h1>
        <ul>
          <li>
            Bill Wilson Center <br />
            3490 The Alameda, Santa Clara, CA 95050
          </li>
          <br />
          <li>
            Sobrato Family Living Center <br />
            1509 Agnew Rd, Santa Clara, CA 95054
          </li>
          <br />
          <li>
            Covenant House of California <br />
            2250 El Camino Real, Santa Clara, CA 95050
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Shelters;
