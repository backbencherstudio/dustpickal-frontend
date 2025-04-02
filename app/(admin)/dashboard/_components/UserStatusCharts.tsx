"use client";
import React from "react";
import dynamic from "next/dynamic";
import CustomFilter from "../../_components/CustomFilter";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const UserStatusChart = () => {
  // Define status names
  const statusNames = ["Active", "Inactive", "Pending"];

  const options: ApexCharts.ApexOptions = {
    series: [450, 300, 250],
    chart: {
      type: "donut",
      width: "100%",
    },
    colors: ["#4AD991", "#FF6B6B", "#FFB572"],
    labels: statusNames,
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: {
        width: 10,
        height: 10,
        radius: 2,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Total Users",
              fontSize: "16px",
              fontWeight: 600,
              color: "#373d3f",
              formatter: function (w) {
                return w.globals.seriesTotals
                  .reduce((a: number, b: number) => a + b, 0)
                  .toString();
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-800 text-[14px] font-medium">
          User Status Overview
        </h3>
        <CustomFilter
          placeholder="All"
          options={["All", "Today", "Weekly", "Monthly", "Yearly"]}
        />
      </div>
      <div id="chart" className="w-full">
        <Chart
          options={options}
          series={options.series}
          type="donut"
          height="300"
          width="100%"
        />
      </div>
    </div>
  );
};

export default UserStatusChart;
