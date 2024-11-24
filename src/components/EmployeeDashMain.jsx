import React from 'react';
import './EmployeeDash.css';
import ApexCharts from 'react-apexcharts'; // Import ApexCharts

function EmployeeDashMain() {
  // Chart options and data
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    series: [40, 20, 30, 10], // Example data, you can replace with dynamic data
    labels: ['To Do', 'In Progress', 'Done', 'Overdue'], // Labels for your data
    colors: ['#2E93fA', '#00E396', '#FEB019', '#FF4560'], // Colors for each section
    plotOptions: {
      pie: {
        donut: {
          size: '65%', // Adjust the size of the donut
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '20px',
              fontFamily: 'Arial, sans-serif',
              color: '#333',
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              color: '#666',
              offsetY: 10,
              formatter: function (val) {
                return `${val}%`; // Format the value to display percentages
              },
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '18px',
              fontFamily: 'Arial, sans-serif',
              color: '#333',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0) + ' Projects';
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div className="greeting">
          <p className="time">9:00 am</p>
          <h1>Good Morning</h1>
          <p>Welcome back to the board! Here comes your daily tasks and ongoing projects to be done.</p>
        </div>
        <div className="notifications">
          <h1>Notifications</h1>
          <p>Well done, but there are some projects which need to be done very soon. Try your best to meet the deadline.</p>
        </div>
      </div>

      <div className="main-content">
        <div className="project-status">
          <div className="status-card to-do">
            <h2>To do</h2>
            <p>5 Projects</p>
          </div>
          <div className="status-card in-progress">
            <h2>In Progress</h2>
            <p>2 Projects</p>
          </div>
          <div className="status-card done">
            <h2>Done</h2>
            <p>2 Projects</p>
          </div>
          <div className="status-card overdue">
            <h2>Overdue</h2>
            <p>1 Projects</p>
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-container">
            <ApexCharts options={chartOptions} series={chartOptions.series} type="donut" />
          </div>
          <div className="progress-legend">
            <p><span className="legend-item to-do"></span> In Progress</p>
            <p><span className="legend-item done"></span> Done</p>
            <p><span className="legend-item overdue"></span> Overdue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashMain;
