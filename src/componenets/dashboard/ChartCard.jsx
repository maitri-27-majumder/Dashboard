import React, { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";

const ChartCard = () => {
  var chart = null;

  useEffect(() => {
    if (chart) {
      console.log("->", chart);
      chart.clear();
      chart.destroy();
    }
    Chart.register(...registerables);
    const context = document.getElementById("graph-bar");

    chart = new Chart(context, {
      type: "bar",
      data: {
        labels: [
          "21 Jan",
          "22 Jan",
          "23 Jan",
          "24 Jan",
          "25 Jan",
          "26 Jan",
          "27 Jan",
        ],
        datasets: [
          {
            data: [45, 60, 85, 110, 120, 95, 70],
            backgroundColor: "#4F46E5",
            borderColor: "#4F46E5",
          },
          {
            data: [40, 55, 80, 105, 115, 90, 65],
            backgroundColor: "#10B981",
            borderColor: "#10B981",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="graph__container">
      <canvas id="graph-bar"></canvas>
    </div>
  );
};

export default ChartCard;
