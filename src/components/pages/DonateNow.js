// import React from "react";
// import "../../App.css";
import React from "react";
import "../../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./DonateNow.css";

let DefaultIcon = L.icon({
  iconUrl:
    "https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [12, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
});
L.Marker.prototype.options.icon = DefaultIcon;

function DonateNow() {
  return (
    <div id="donate-page">
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
        <Marker position={[37.35195780902774, -121.97778450650924]}>
          <Popup>
            Goodwill of Silicon Valley <br />
            2800 El Camino Real, Santa Clara, CA 95051
          </Popup>
        </Marker>
        <Marker position={[37.37884984674245, -121.95836798746598]}>
          <Popup>
            HOPE Services <br />
            3080 Alfred St, Santa Clara, CA 95054
          </Popup>
        </Marker>
        <Marker position={[37.356362702151884, -121.95643384065751]}>
          <Popup>
            Hidaya Foundation <br />
            1765 Scott Blvd Stage, Santa Clara, CA 95050
          </Popup>
        </Marker>
        <Marker position={[37.41340402884782, -121.95210112185049]}>
          <Popup>
            Second Harvest of Silicon Valley <br />
            4001 N First St, San Jose, CA 95134
          </Popup>
        </Marker>
        <Marker position={[37.36944735875137, -121.96161190650872]}>
          <Popup>
            Mission City Charities, Inc. <br />
            2120 Walsh Ave, Santa Clara, CA 95050
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{ marginLeft: "40px" }} id="donate-list">
        <h1 id="donate-title">Local Donation Sites in Santa Clara</h1>
        <ul>
          <li>
            Hidaya Foundation <br />
            1765 Scott Blvd Stage, Santa Clara, CA 95050
          </li>
          <br />
          <li>
            Second Harvest of Silicon Valley <br />
            4001 N First St, San Jose, CA 95134
          </li>
          <br />
          <li>
            Mission City Charities, Inc. <br />
            2120 Walsh Ave, Santa Clara, CA 95050
          </li>
        </ul>
      </div>
    </div>
  );
}
export default DonateNow;
