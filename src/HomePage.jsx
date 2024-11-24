import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="homepage">
      <section className="hero" data-aos="fade-in">
        <div className="hero-content">
          <h1 data-aos="fade-up">Explore Our Planet's Changing Climate</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Access real-time data and actionable insights to combat climate change.
          </p>
          <div className="cta-buttons">
            <button className="cta-button" data-aos="zoom-in" data-aos-delay="400">
              View Global Stats
            </button>
            <button className="cta-button" data-aos="zoom-in" data-aos-delay="600">
              Calculate Your Impact
            </button>
            <button className="cta-button" data-aos="zoom-in" data-aos-delay="800">
              Take Action Now
            </button>
          </div>
        </div>
        <div className="gradient-overlay"></div>
      </section>

      <section className="about" data-aos="fade-in">
        <h2>About Climate Action</h2>
        <p>
          Climate Action is a platform that provides real-time data and insights on our planet's
          changing climate. Our mission is to empower individuals and organizations to take action
          against climate change.
        </p>
      </section>

      <section className="global-stats" data-aos="fade-in">
        <h2>Global Climate Statistics</h2>
        <div className="stats-container">
          <div className="stat-item" data-aos="fade-up">
            <h3>+1.2°C</h3>
            <p>Global Temperature Rise</p>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
            <h3>13M Ha</h3>
            <p>Deforested Annually</p>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
            <h3>420 ppm</h3>
            <p>CO₂ Levels in Atmosphere</p>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="600">
            <h3>3.3 mm/year</h3>
            <p>Sea Level Rise</p>
          </div>
        </div>
        <div className="explore-button" data-aos="fade-up" data-aos-delay="800">
          <button className="cta-button">Explore More</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Climate Action. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
