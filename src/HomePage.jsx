import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";

const Homepage = () => {
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight / 100}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

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
      </section>
    </div>
  );
};

export default Homepage;
