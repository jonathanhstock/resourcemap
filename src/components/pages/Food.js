// import React from "react";
// import "../../App.css";
import React from "react";
import "../../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Food.css";

let DefaultIcon = L.icon({
  iconUrl:
    "https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [12, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
});
L.Marker.prototype.options.icon = DefaultIcon;

function Food() {
  return (
    <div id="food-page">
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
        <Marker position={[37.380299, -121.952682]}>
          <Popup>
            River of Life Foundation Food Pantry <br />
            1177 Laurelwood Rd, Santa Clara, CA 95054
          </Popup>
        </Marker>
        <Marker position={[37.37741, -121.96683]}>
          <Popup>
            Parents Helping Parents - Food Distribution Center <br />
            3041 Olcott St, Santa Clara, CA 95054
          </Popup>
        </Marker>
        <Marker position={[37.35239, -121.95308]}>
          <Popup>
            Manna Food Distribution <br />
            480 Perry Ct, Santa Clara, CA 95054
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{ marginLeft: "40px" }} id="food-list">
        <h1>Local Food Banks in Santa Clara</h1>
        <ul>
          <li>
            River of Life Foundation Food Pantry <br />
            1177 Laurelwood Rd, Santa Clara, CA 95054
          </li>
          <br />
          <li>
            Parents Helping Parents - Food Distribution Center <br />
            3041 Olcott St, Santa Clara, CA 95054
          </li>
          <br />
          <li>
            Manna Food Distribution <br />
            480 Perry Ct, Santa Clara, CA 95054
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Food;
