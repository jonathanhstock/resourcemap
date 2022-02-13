import "./styles.css";
import React from "react";
import "./App.css";

const styles = {
  header: {
    backgroundImage: `url("https://media.istockphoto.com/videos/hands-together-for-unity-and-share-success-video-id1217020372?s=640x640")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh"
  }
};

function App() {
  return (
    <div style={styles.header}>
      <h1 id="about-title">About Us</h1>
      <br />
      <p id="about">
        Homelessness is a major problem, especially in the Bay Area. To help
        those dealing with homelessness, our team developed a website with
        various resources (shelters, food banks, churches, and donation centers)
        to help those struggling. We also included a map of places accepting
        donations for those wanting to help!
      </p>
    </div>
  );
}

export default App;
