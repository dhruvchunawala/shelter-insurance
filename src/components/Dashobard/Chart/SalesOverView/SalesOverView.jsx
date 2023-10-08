import React, {  } from "react";
import ReactApexChart from "react-apexcharts";
import './SalesOverView.css'
class SalesOverView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Prospecting', // Change the series name here
          data: [44, 55, 57, 56, 61, 58],
          color: '#48D3FF' // Set the desired color for this series
        },
        {
          name: 'Proposal', // Change the series name here
          data: [76, 85, 101, 98, 87, 105],
          color: '#EC4A2B' // Set the desired color for this series
        },
        {
          name: 'Negotiation', // Change the series name here
          data: [35, 41, 36, 26, 45, 48],
          color: '#17BF3C' // Set the desired color for this series
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '24',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yaxis: {
          title: {
            text: ''
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        },
        legend: {
          position: 'top', // Change legend position to 'top'
          markers: {
            fillColors: ['#4A58EC', '#48D3FF', '#7265F9'] // Set the legend marker colors to match the series colors
          },
          labels: {
            colors: ['#4A58EC', '#48D3FF', '#7265F9'], // Set the legend label colors
            useSeriesColors: false, // Disable using series colors for legend labels
            items: {
              useSeriesColors: false // Disable using series colors for legend items
            }
          }
        }
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    );
  }
}

export default SalesOverView;
