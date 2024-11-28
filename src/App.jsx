// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Homepage from "./components/HomePage";
import CalculateYourImpact from "./components/CalculateYourImpact";
import GlobalStats from "./components/GlobalStats"; // Assuming this exists
import TakeAction from "./components/TakeAction"; // Assuming this exists

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/FireHackathon" element={<Homepage />} />
        <Route path="/calculate-impact" element={<CalculateYourImpact />} />
        <Route path="/global-stats" element={<GlobalStats />} />
        <Route path="/take-action" element={<TakeAction />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
