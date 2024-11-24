import React, { useState } from "react";
import Chart from "react-apexcharts";

const Barchart = () => {
  const [chartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      xaxis: {
        categories: ["M", "T", "W", "T", "F"], // Days of the week
      },
      colors: ["#244865", "#4C7CAE", "#D4762C", "#F9623E"],
      title: {
        align: "center",
        style: {
          fontSize: "16px",
          color: "#333",
        },
      },
      plotOptions: {
        bar: {
          horizontal: false, // Keep bars vertical
          columnWidth: '70%', // Adjust width of the bars
          endingShape: 'rounded', // Optional: rounded bar edges
        },
      },
      dataLabels: {
        enabled: false, // Disable the value labels on the bars
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        labels: {
          colors: "#333",
        },
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], 
          opacity: 0.5,
        },
      },
    },
    series: [
      {
        name: "Done",
        data: [2, 3, 2, 3, 4], 
      },
      {
        name: "In Progress",
        data: [1, 2, 3, 2, 4], 
      },
      {
        name: "Cancelled",
        data: [1, 1, 1, 1, 1], 
      },
      {
        name: "Overdue",
        data: [0, 1, 0, 1, 1], 
      },
    ],
  });

  return (
    <div className="w-full max-w-4xl">
      
      {/* Title Section */}
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">Project Progress Overview</h2>

      {/* Controls Section */}
      <div className="flex justify-between items-center mb-2 text-sm">
        {/* Left Side: Employee Performance */}
        <div className="flex space-x-4">
          <button className="text-gray-500 font-medium">Employee Performance</button>
        </div>

        {/* Right Side: View all Report and View all */}
        <div className="flex space-x-4">
          <button className="text-gray-500 font-medium">View all Report</button>
          <button className="text-gray-500 font-medium">View all</button>
        </div>
      </div>

      {/* Filter Section: Today, This week, Last week, This month */}
      <div className="flex justify-start space-x-4 mb-2 text-xs text-gray-500">
        <span>Today</span>
        <span>This week</span>
        <span>Last week</span>
        <span>This month</span>
      </div>

      {/* Date Section */}
      <div className="flex justify-between items-center mb-2 text-xs">
        <span><button className="border px-2 py-1 rounded">📅</button> September 9, 2024</span>
        <span>11:02 am</span>
      </div>

      {/* Bar Chart Section */}
      <div className="mixed-chart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Barchart;
