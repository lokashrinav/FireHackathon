import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import data from '../assets/data.json';
import AirPollutionChart from "./GlobalTemperatureChart.jsx";

const GlobalTemperatureChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const years = data.map((entry) => entry.Year);
    const noSmoothing = data.map((entry) => entry.No_Smoothing);
    const lowess = data.map((entry) => entry.Lowess_5);

    const chartData = {
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

    setChartData(chartData);
  }, []);

  const options = {
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

  return (
    <div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <h1>Global Temperature Trends (1880-2023)</h1>
        {chartData ? (
          <Line data={chartData} options={options} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default GlobalTemperatureChart;
