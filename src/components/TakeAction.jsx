import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TakeAction.css";

const TakeAction = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  return (
    <div className="ta-page">

      <section className="ta-actions" data-aos="fade-in">
        <h2 className="ta-section-title">Ways to Contribute</h2>
        <div className="ta-actions-container">
          <div className="ta-action-card" data-aos="zoom-in" data-aos-delay="100">
            <i className="fas fa-tree ta-action-icon"></i>
            <h3 className="ta-action-title">Plant Trees</h3>
            <p className="ta-action-description">
              Participate in local tree-planting events or donate to organizations that focus on reforestation.
            </p>
            <a href="https://www.trees.org/" target="_blank" rel="noopener noreferrer">
              <button className="ta-cta-button">Learn More</button>
            </a>
          </div>

          <div className="ta-action-card" data-aos="zoom-in" data-aos-delay="200">
            <i className="fas fa-leaf ta-action-icon"></i>
            <h3 className="ta-action-title">Adopt a Sustainable Lifestyle</h3>
            <p className="ta-action-description">
              Make conscious choices in your daily life, such as reducing waste, conserving energy, and using eco-friendly products.
            </p>
            <a href="https://www.epa.gov/living-epa/sustainable-living" target="_blank" rel="noopener noreferrer">
              <button className="ta-cta-button">Get Tips</button>
            </a>
          </div>

          <div className="ta-action-card" data-aos="zoom-in" data-aos-delay="300">
            <i className="fas fa-hand-holding-usd ta-action-icon"></i>
            <h3 className="ta-action-title">Support Renewable Energy</h3>
            <p className="ta-action-description">
              Invest in renewable energy sources or support policies that promote clean energy initiatives.
            </p>
            <a href="https://www.renewableenergyworld.com/" target="_blank" rel="noopener noreferrer">
              <button className="ta-cta-button">Explore Options</button>
            </a>
          </div>

          <div className="ta-action-card" data-aos="zoom-in" data-aos-delay="400">
            <i className="fas fa-users ta-action-icon"></i>
            <h3 className="ta-action-title">Join Community Groups</h3>
            <p className="ta-action-description">
              Engage with local or global communities focused on environmental conservation and climate action.
            </p>
            <a href="https://www.meetup.com/topics/environment/" target="_blank" rel="noopener noreferrer">
              <button className="ta-cta-button">Find Groups</button>
            </a>
          </div>
        </div>
      </section>

      <section className="ta-donate" data-aos="fade-in">
        <h2 className="ta-section-title">Support Our Mission</h2>
        <p className="ta-donate-description">
          Your donations help us fund initiatives that combat climate change and promote sustainability.
        </p>
        <a href="https://citizensclimatelobby.org/donate/" target="_blank" rel="noopener noreferrer">
          <button className="ta-cta-button">Donate Now</button>
        </a>
      </section>

      <footer className="ta-footer">
        <p>&copy; {new Date().getFullYear()} Climate Action. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TakeAction;
