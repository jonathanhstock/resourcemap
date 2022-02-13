// import React from "react";
// import "../../App.css";
import React from "react";
import "../../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Churches.css";

let DefaultIcon = L.icon({
  iconUrl:
    "https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [12, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
});
L.Marker.prototype.options.icon = DefaultIcon;

const styles = {
  header: {
    backgroundImage: `url("https://thecounter.org/wp-content/uploads/2021/10/Group-of-unrecognizable-volunteers-working-in-community-charity-donation-center-food-bank-and-coronavirus-concept-102721-scaled.jpg")`,
    // height: "100vh",
    backgroundPosition: "center"
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover"
  }
};

function Churches() {
  return (
    <div style={styles.header}>
      <p id="title">Churches located near Santa Clara</p>
      <ul>
        <li id="list">
          <li>
            Helping Hand For Relief <br />
            3068 Scott Blvd, Santa Clara, CA 95054
          </li>
          <br />
          <li>
            Christian Church-Santa Clara <br />
            1821 Bowers Ave, Santa Clara, CA 95051
          </li>
          <br />
          <li>
            Bethel Church of Santa Clara <br />
            3536 Monroe St, Santa Clara, CA 95051
          </li>
          <br />
          <li>
            First Presbyterian Church of Santa Clara <br />
            2499 Homestead Rd, Santa Clara, CA 95050
          </li>
          <br />
          <li>
            Church of the Valley <br />
            400 N Winchester Blvd, Santa Clara, CA 95050
          </li>
        </li>
      </ul>
      <MapContainer
        center={[37.34402, -121.95268]}
        zoom={13}
        style={{ height: "500px", width: "800px" }}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.380546296295854, -121.94568502279726]}>
          <Popup>
            Helping Hand For Relief <br />
            3068 Scott Blvd, Santa Clara, CA 95054
          </Popup>
        </Marker>
        <Marker position={[37.35704692471599, -121.97660163773844]}>
          <Popup>
            Christian Church-Santa Clara <br />
            1821 Bowers Ave, Santa Clara, CA 95051
          </Popup>
        </Marker>
        <Marker position={[37.36668876125286, -121.9933849297949]}>
          <Popup>
            Bethel Church of Santa Clara <br />
            3536 Monroe St, Santa Clara, CA 95051
          </Popup>
        </Marker>
        <Marker position={[37.341728575379626, -121.96905197952363]}>
          <Popup>
            First Presbyterian Church of Santa Clara <br />
            2499 Homestead Rd, Santa Clara, CA 95050
          </Popup>
        </Marker>
        <Marker position={[37.33377053901014, -121.95076329541037]}>
          <Popup>
            Church of the Valley <br />
            400 N Winchester Blvd, Santa Clara, CA 95050
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Churches;
