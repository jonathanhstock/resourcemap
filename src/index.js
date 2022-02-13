import ReactDOM from "react-dom";
import React from "react";
import Home from "./components/pages/Home.js";
import Shelters from "./components/pages/Shelters.js";
import Food from "./components/pages/Food.js";
import Churches from "./components/pages/Churches.js";
import Clothes from "./components/pages/Clothes.js";
import DonateNow from "./components/pages/DonateNow.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import App from "./App.js";

ReactDOM.render(
  <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/food" element={<Food />} />
        <Route path="/churches" element={<Churches />} />
        <Route
          path="/clothes"
          element={<Clothes />}
          style={{ height: "100%" }}
        />
        <Route path="/donatenow" element={<DonateNow />} />
      </Routes>
    </Router>
  </div>,
  document.getElementById("root")
);
