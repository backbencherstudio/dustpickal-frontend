"use client";
import React from "react";
import dynamic from "next/dynamic";
import CustomFilter from "../../_components/CustomFilter";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SubsStatsChart = ({ data }) => {
  const options: ApexCharts.ApexOptions = {
    series: [data?.payAsYouGo, data?.pro, data?.basic, data?.enterprise],
    chart: {
      type: "donut",
    },
    colors: ["#FF6B6B", "#FFB572", "#A69AFC", "#4AD991"],
    labels: ["Pay as you go", "Pro", "Basic", "Enterprise"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
          labels: {
            show: true, // Enable labels inside the donut
            total: {
              show: true, // Show total in the center
              label: "Total", // Label text
              fontSize: "16px",
              fontWeight: 600,
              color: "#333",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: "right",
      fontSize: "15px",
      fontWeight: 400,
      markers: {
        size: 12,
      },
      formatter: function (seriesName, opts) {
        return seriesName + " " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 8,
      },
    },
    stroke: {
      width: 0,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const total = (options.series as number[]).reduce((sum, num) => sum + num, 0);

  return (
    <div className="bg-white p-4 rounded-xl w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-800 text-[14px] font-medium">
          Subscription Statistics
        </h3>
      </div>

      <div id="chart" className="w-full">
        <Chart
          options={options}
          series={options.series}
          type="donut"
          // height={400}
        />
        {/* <div className="flex items-center gap-2 mt-4 justify-left ml-[30%]">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#a58be6 ] via-[#ff597b] via-40% to-[#7ed3da]"></div>
            <p className="text-[15px] font-semibold">Total {total}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SubsStatsChart;
