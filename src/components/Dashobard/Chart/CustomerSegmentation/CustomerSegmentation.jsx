import React from "react";
import ReactApexChart from "react-apexcharts";
import "./CustomerSegment.css";

class CustomerSegmentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13],
      options: {
        chart: {
          width: 380,
          type: "donut",
          height: 239,
          events: {
            // Add an event to draw text and numbers on the donut chart
            draw: function (context, config) {
              if (config.type === "donut") {
                // Calculate the position for text
                var textX = config.width / 2;
                var textY = config.height / 2;

                // Customize the text and font
                var labelText =
                  config.dataPointIndex === 0
                    ? "Title 1"
                    : config.dataPointIndex === 1
                    ? "Title 2"
                    : "Title 3";
                var value = config.w.config.series[config.seriesIndex];

                context.addText({
                  x: textX,
                  y: textY,
                  text: labelText + "\n" + value,
                  fontSize: "16px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 600,
                  foreColor: "#333",
                  textAlign: "center",
                });
              }
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
              },
            },
          },
        ],
        legend: false,
      },
    };
  }

  render() {
    return (
      <div className="chart-container">
        <div className="chart-wrap relative">
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width={380}
              colors={this.state.colors}
              className=""
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className='bg-[#FFF] w-[85px] h-[85px] shadow text-center rounded-full flex flex-col justify-center items-center' >
              <span className="text-[18px] font-medium text-[#172635]">1.135</span>
              <span className="text-[#556476] text-[12px] font-normal">Invoices</span>
            </div>
          </div>
        </div>

        <div className="flex lg:gap-12 gap-8">
          <div className="indicator flex flex-col text-[12px]">
            <span className="text-[#556476]">Total Paid</span>

            <div className="title flex items-center gap-2">
              <div
                className="color-indicator"
                style={{
                  backgroundColor: "#17BF3C",
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                }}
              ></div>
              <span className="text-[#172635]">234</span>
            </div>
          </div>
          <div className="indicator flex flex-col text-[12px]">
            <span className="text-[#556476]">Total Overdue</span>

            <div className="title flex items-center gap-2">
              <div
                className="color-indicator"
                style={{
                  backgroundColor: "#FFA500",
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                }}
              ></div>
              <span className="text-[#172635]">234</span>
            </div>
          </div>
          <div className="indicator flex flex-col ">
            <span className="text-[#556476] lg:text-[12px] text-[10px]  inline-block">
              Total Unpaid
            </span>

            <div className="title flex items-center gap-2">
              <div
                className="color-indicator"
                style={{
                  backgroundColor: "#2F539B",
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                }}
              ></div>
              <span className="text-[#172635]">234</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerSegmentation;
