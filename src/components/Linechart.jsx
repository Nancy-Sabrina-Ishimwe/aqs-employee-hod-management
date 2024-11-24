import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

class Linechart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Done',
          data: [10, 30, 45, 70, 90, 60, 40, 20] // Example data for 'Done'
        },
        {
          name: 'In Progress',
          data: [20, 40, 35, 60, 80, 50, 30, 10] // Example data for 'In Progress'
        },
        {
          name: 'Overdue',
          data: [30, 50, 40, 55, 65, 45, 35, 25] // Example data for 'Overdue'
        }
      ],
      options: {
        chart: {
          type: 'line',
          height: 350,
          toolbar: {
            show: true, // Toolbar icons for zooming, panning, etc.
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true,
            },
            autoSelected: 'zoom' // Automatically selected tool
          },
        },
        stroke: {
          width: [3, 3, 3],
          curve: 'straight',  
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], // Months
        },
        colors: ['#244865', '#4C7CAE', '#D4762C'], // Color scheme
        legend: {
          position: 'right', // Placing legend on the right
          markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            radius: 12,
            offsetX: 0,
            offsetY: 0
          },
          labels: {
            colors: ['#000'],
            useSeriesColors: false, // Disable auto-coloring
          },
          itemMargin: {
            vertical: 5, // Add margin between legend items
          }
        },
        markers: {
          size: 6, // Size of the markers on the lines
        },
        title: {
          text: 'Total Projects Status',
          align: 'left',
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#000'
          }
        },
        grid: {
          borderColor: '#e7e7e7', // Grid line color
          row: {
            colors: ['#f3f3f3', 'transparent'], // Alternating background colors for rows
            opacity: 0.5
          },
        },
        yaxis: {
          title: {
            text: 'Projects', // Y-axis label
          },
          min: 0,
          max: 100, // Set the Y-axis range
        }
      }
    };
  }

  render() {
    return (
      <div>
        {/* Header with filters */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Total Projects</h3>
          <button className="bg-[#244865] text-white px-4 py-2 rounded-md">View all Report</button>
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          {['Today', 'This Week', 'Last Week', 'This Month'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Date and time */}
        <div className="flex justify-between items-center mb-6">
          <p>Projects - {new Date().toLocaleDateString()}</p>
          <p>{new Date().toLocaleTimeString()}</p>
        </div>

        {/* Line Chart */}
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default Linechart;
