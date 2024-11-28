import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const GlobalTemperatureChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      const startYear = 2023;
      const endYear = 2023;
      const token = "JSgXdADnrKhiFtEcuyMFrOIcPVeGKBEw";
      const datasetid = "GHCND";
      const datatypeid = "TAVG";

      let allData = [];

      for (let year = startYear; year <= endYear; year++) {
        try {
          const response = await axios.get(
            "https://www.ncdc.noaa.gov/cdo-web/api/v2/data",
            {
              headers: { token },
              params: {
                datasetid,
                datatypeid,
                startdate: `${year}-01-01`,
                enddate: `${year}-12-31`,
                limit: 1000,
              },
            }
          );

          allData = [...allData, ...response.data.results];
        } catch (error) {
          console.error(`Error fetching data for year ${year}:`, error);
        }
      }

      processAndSetData(allData);
    };

    const processAndSetData = (data) => {
      const years = data.map((entry) => entry.date.split("-")[0]);
      const temperatures = data.map((entry) => entry.value);

      const chartData = {
        labels: years,
        datasets: [
          {
            label: "Global Average Temperature (°C)",
            data: temperatures,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: false,
            tension: 0.1,
          },
        ],
      };

      setChartData(chartData);
    };

    fetchAllData();
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
        <h1>Global Temperature Trends (Dynamic)</h1>
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
