import React from "react";
import "../../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//import icon from "leaflet/dist/images/marker-icon.png";
// import icon from "https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import "./Home.css";

let DefaultIcon = L.icon({
  iconUrl:
    "https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png",
  // shadowUrl: iconShadow,
  iconSize: [50, 50], // size of the icon
  iconAnchor: [12, 42], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor
});

L.Marker.prototype.options.icon = DefaultIcon;

function Home() {
  return (
    <div id="homepage">
      <h1 id="home-title">Navigate through the pages for specific resources</h1>

      <MapContainer
        center={[37.34402, -121.95268]}
        zoom={13}
        style={{ height: "600px", width: "800px" }}
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
        <Marker position={[37.380546296295854, -121.94568502279726]}>
          <Popup>
            Church in Santa Clara <br />
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
    // <html>
    //   <head>
    //     <title>Add Map</title>

    //     <link rel="stylesheet" type="text/css" href="./styles/home.css" />
    //     <script src="./script.js"></script>
    //   </head>
    //   <body>
    //     <h3>My Google Maps Demo</h3>
    //     <div id="map"></div>

    //     <script
    //       src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxYva8cX6TCoksWcfRV84r5DakeB62Xtw&callback=initMap&libraries=&v=weekly"
    //       async
    //     ></script>
    //   </body>
    // </html>
  );
}

export default Home;
