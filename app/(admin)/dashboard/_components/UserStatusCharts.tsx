"use client";
import React from "react";
import dynamic from "next/dynamic";
import CustomFilter from "../../_components/CustomFilter";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const UserStatusChart = ({ data }) => {
  // Define status names
  const statusNames = ["Active", "Inactive", "Pending"];

  const options: ApexCharts.ApexOptions = {
    series: [data?.activeUsers, data?.canceledUsers, data?.expiredUsers],
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
      show: false,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: {
        size: 10,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      formatter: function (seriesName, opts) {
        return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`;
      },
      width: 150,
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
        <h3 className="text-gray-800 text-[14px] font-medium">User Status</h3>
        {/* <CustomFilter
          placeholder="All"
          options={["All", "Today", "Weekly", "Monthly", "Yearly"]}
        /> */}
      </div>
      <div id="chart" className="w-full">
        <Chart
          options={options}
          series={options.series}
          type="donut"
          height="300"
          width="80%"
        />
        <div className="flex flex-col justify-center gap-3 mt-10">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded  bg-[#0d86ff]"></div>
            <p className="text-sm">Active Users: {data?.activeUsers}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded  bg-[#d2d2d5]"></div>
            <p className="text-sm">Expired Users: {data?.expiredUsers}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded  bg-[#ff6a89]"></div>
            <p className="text-sm">Cancelled Users : {data?.canceledUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatusChart;
