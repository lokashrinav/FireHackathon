import React, { useState } from "react";
import "./CalculateYourImpact.css";

const CalculateYourImpact = () => {
  const [formData, setFormData] = useState({
    energyUsage: "",
    transportation: "",
    diet: "",
    waste: "",
  });

  const [impact, setImpact] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateImpact = (e) => {
    e.preventDefault();

    const energyImpact = parseFloat(formData.energyUsage) * 0.5;
    const transportationImpact = parseFloat(formData.transportation) * 0.3;
    const dietImpact = parseFloat(formData.diet) * 0.1;
    const wasteImpact = parseFloat(formData.waste) * 0.1;

    const totalImpact =
      energyImpact + transportationImpact + dietImpact + wasteImpact;

    setImpact(totalImpact.toFixed(2));
  };

  return (
    <div className="calculate-impact-page" data-aos="fade-in">
      <h1 data-aos="fade-up">Calculate Your Environmental Impact</h1>
      <form className="impact-form" onSubmit={calculateImpact}>
        <div className="form-group" data-aos="fade-up" data-aos-delay="100">
          <label htmlFor="energyUsage">Monthly Energy Usage (kWh):</label>
          <input
            type="number"
            id="energyUsage"
            name="energyUsage"
            value={formData.energyUsage}
            onChange={handleChange}
            required
            min="0"
            placeholder="e.g., 350"
          />
        </div>

        <div className="form-group" data-aos="fade-up" data-aos-delay="100">
          <label htmlFor="transportation">Monthly Transportation (miles):</label>
          <input
            type="number"
            id="transportation"
            name="transportation"
            value={formData.transportation}
            onChange={handleChange}
            required
            min="0"
            placeholder="e.g., 200"
          />
        </div>

        <div className="form-group" data-aos="fade-up" data-aos-delay="100">
          <label htmlFor="diet">Weekly Meat Consumption (meals):</label>
          <input
            type="number"
            id="diet"
            name="diet"
            value={formData.diet}
            onChange={handleChange}
            required
            min="0"
            placeholder="e.g., 5"
          />
        </div>

        <div className="form-group" data-aos="fade-up" data-aos-delay="100">
          <label htmlFor="waste">Weekly Waste Production (kg):</label>
          <input
            type="number"
            id="waste"
            name="waste"
            value={formData.waste}
            onChange={handleChange}
            required
            min="0"
            placeholder="e.g., 10"
          />
        </div>

        <button type="submit" className="cta-button">
          Calculate Impact
        </button>
      </form>

      {impact !== null && (
        <div className="impact-result" data-aos="fade-up" data-aos-delay="100">
          <h2>Your Estimated Environmental Impact: {impact} CO₂e</h2>
          <p>
            This estimate is based on the information provided. Consider taking steps to reduce your
            carbon footprint!
          </p>
        </div>
      )}
    </div>
  );
};

export default CalculateYourImpact;
