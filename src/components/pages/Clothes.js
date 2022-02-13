// import React from "react";
// import "../../App.css";
import React from "react";
import "../../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Clothes.css";

let DefaultIcon = L.icon({
  iconUrl:
    "https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [12, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
});
L.Marker.prototype.options.icon = DefaultIcon;

function Clothes() {
  return (
    <div id="container" style={{ flex: "1" }}>
      <div style={{ border: "2mm ridge #557A95" }}>
        <MapContainer
          center={[37.34402, -121.95268]}
          zoom={13}
          style={{ height: "100%", width: "500px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[37.37699163774345, -121.96037552255402]}>
            <Popup>
              Helping Hand For Relief <br />
              3068 Scott Blvd, Santa Clara, CA 95054
            </Popup>
          </Marker>
          <Marker position={[37.337353464193114, -121.98414928931686]}>
            <Popup>
              The Salvation Army Citadel <br />
              3090 Homestead Rd, Santa Clara, CA 95051
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div style={{ marginLeft: "40px" }} id="food-list">
        <h1 id="clothes-title">Possible Donation Sites</h1>
        <ul>
          <li>
            Helping Hand For Relief <br />
            3068 Scott Blvd, Santa Clara, CA 95054
          </li>
          <br />
          <li>
            The Salvation Army Citadel <br />
            3090 Homestead Rd, Santa Clara, CA 95051
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Clothes;
