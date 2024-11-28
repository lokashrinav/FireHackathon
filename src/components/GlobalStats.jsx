import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import data from "../assets/data.json";

const GlobalTemperatureChart = () => {
  const [chartData, setChartData] = useState(null);
  const [co2Data, setCo2Data] = useState(null);

  useEffect(() => {
    const years = data.map((entry) => entry.Year);
    const noSmoothing = data.map((entry) => entry.No_Smoothing);
    const lowess = data.map((entry) => entry.Lowess_5);

    const temperatureChartData = {
      labels: years,
      datasets: [
        {
          label: "No Smoothing (°C)",
          data: noSmoothing,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: false,
          tension: 0.1,
        },
        {
          label: "Lowess Smoothing (°C)",
          data: lowess,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: false,
          tension: 0.1,
        },
      ],
    };

    setChartData(temperatureChartData);
  }, []);

  useEffect(() => {
    const fetchCo2Data = async () => {
      try {
        const response = await fetch(
          "https://global-warming.org/api/co2-api"
        );
        const jsonData = await response.json();
        const years = jsonData.co2.map((entry) => entry.year);
        const emissions = jsonData.co2.map((entry) => entry.trend);

        const co2ChartData = {
          labels: years,
          datasets: [
            {
              label: "CO₂ Concentration (ppm)",
              data: emissions,
              borderColor: "rgba(54, 162, 235, 1)",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              fill: false,
              tension: 0.1,
            },
          ],
        };

        setCo2Data(co2ChartData);
      } catch (error) {
        console.error("Error fetching CO₂ data:", error);
      }
    };

    fetchCo2Data();
  }, []);

  const temperatureOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature Anomaly (°C)",
        },
      },
    },
  };

  const co2Options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "CO₂ Concentration (ppm)",
        },
      },
    },
  };

  return (
    <div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <h1>Global Temperature Trends (1880-2023)</h1>
        {chartData ? (
          <Line data={chartData} options={temperatureOptions} />
        ) : (
          <p>Loading temperature data...</p>
        )}
      </div>

      <div style={{ width: "90%", margin: "50px auto" }}>
        <h1>CO₂ Concentration Trends</h1>
        {co2Data ? (
          <Line data={co2Data} options={co2Options} />
        ) : (
          <p>Loading CO₂ data...</p>
        )}
      </div>
    </div>
  );
};

export default GlobalTemperatureChart;