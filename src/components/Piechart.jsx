import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Piechart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [50, 35, 5, 10], 
      options: {
        chart: {
          type: 'donut',
          width: '100%',
          height: '100%',
        },
        labels: ['Done', 'In Progress', 'Cancelled', 'Overdue'],
        colors: ['#244865', '#4C7CAE', '#ffffff', '#D4762C'], 
        legend: {
          position: 'bottom', 
          horizontalAlign: 'center', 
          markers: {
            fillColors: ['#244865', '#4C7CAE', '#ffffff', '#D4762C'],
          },
          formatter: (val, opts) => {
            return `${val} - ${opts.w.globals.series[opts.seriesIndex]}%`
          }
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => `${val.toFixed(0)}%`,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '70%', 
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'Total',
                  fontSize: '16px',
                  fontWeight: 600,
                }
              }
            }
          }
        },
        title: {
          text: 'Monthly Target',
          align: 'center',
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '10px'
          }
        }
      }
    };
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={350} 
          width={350}  
        />
      </div>
    );
  }
}

export default Piechart;
