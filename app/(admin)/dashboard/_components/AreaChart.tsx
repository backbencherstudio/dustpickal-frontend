"use client";
import React from "react";
import dynamic from "next/dynamic";
import DateFilter from "../../_components/DateFilter";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = ({ data }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 1,
    },
    colors: ["#FF6B6B", "#2D3436", "#FFC107", "#4299E1"],
    xaxis: {
      // categories: ["week 1", "week 2", "week 3", "week 4"],
      labels: {
        style: {
          colors: "#718096",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value: number) => {
          if (value >= 1000) {
            return `${value / 1000}k`;
          }
          return value.toString();
        },
        style: {
          colors: "#718096",
          fontSize: "12px",
        },
      },
      // tickAmount: 4,
      // min: 0,
      // max: 2500,
    },
    grid: {
      borderColor: "#E2E8F0",
      strokeDashArray: 4,
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
      offsetY: -10,
      labels: {
        colors: "#4A5568",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const series = [
    {
      name: "Pay As You Go",
      data: [200, 100, 600, 200, 1000, 600, 1400, 800, 1800, 1200],
    },
    {
      name: "Basic",
      data: [300, 500, 800, 1200, 1500, 1800, 2100, 2400, 2700, 3000],
    },
    {
      name: "Pro",
      data: [400, 600, 1200, 1500, 1300, 1800, 600, 2000, 900, 2200],
    },
    {
      name: "Enterprise",
      data: [1500, 1800, 2000, 2000, 1700, 2300, 1800, 2600, 3000, 3200],
    },
  ];
  const revenueData = [
    {
      value: data?.revenue?.subscriptionRevenue?.payAsYouGo,
      label: "Pay As You Go",
      color: "#eb3d4d",
    },
    {
      value: data?.revenue?.subscriptionRevenue?.basic,
      label: "Basic",
      color: "#161721",
    },
    {
      value: data?.revenue?.subscriptionRevenue?.pro,
      label: "Pro",
      color: "#f9c80e",
    },
    {
      value: data?.revenue?.subscriptionRevenue?.enterprise,
      label: "Enterprise",
      color: "#0d86ff",
    },
  ];
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-800 text-[14px] font-medium">Revenue</h3>
        <DateFilter />
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 items-center flex-wrap my-6 gap-6 ">
        <div className="border-r">
          <h2 className="text-2xl font-semibold">
            ${data?.revenue?.monthlyRevenue}
          </h2>
          <p className="text-gray-600 mt-3">Monthly</p>
        </div>
        {revenueData?.map((item, index, array) => (
          <div
            key={item.label}
            className={index < array.length - 1 ? "border-r" : ""}
          >
            <p className="text-xl font-semibold">${item.value}</p>
            <div className="flex gap-2 items-center mt-3">
              <div
                className={`w-4 h-4 rounded`}
                style={{ backgroundColor: item.color }}
              ></div>
              <p className="text-sm">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div id="chart" className="w-full">
        {typeof window !== "undefined" && (
          <Chart options={options} series={series} type="area" height={350} />
        )}
      </div>
    </div>
  );
};

export default AreaChart;
