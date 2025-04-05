import React from "react";
import Chart from "react-apexcharts";
import DateFilter from "../../_components/DateFilter";

const AreaChart = () => {
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
      curve: "smooth",
      width: 2,
    },
    colors: ["#FF6B6B", "#2D3436", "#FFC107", "#4299E1"],
    xaxis: {
      categories: ["week 1", "week 2", "week 3", "week 4"],
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
      data: [200, 400, 500, 1800],
    },
    {
      name: "Basic",
      data: [300, 3000, 600, 500],
    },
    {
      name: "Pro",
      data: [500, 1700, 800, 700],
    },
    {
      name: "Enterprise",
      data: [1000, 2000, 2500, 2000],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">$18,356</h2>
          <p className="text-gray-600">Monthly</p>
        </div>
        <div className="flex gap-8">
          <div>
            <p className="text-xl font-semibold">$2,356</p>
            <p className="text-red-500 text-sm">Pay As You Go</p>
          </div>
          <div>
            <p className="text-xl font-semibold">$1,346</p>
            <p className="text-gray-800 text-sm">Basic</p>
          </div>
          <div>
            <p className="text-xl font-semibold">$5,356</p>
            <p className="text-yellow-500 text-sm">Pro</p>
          </div>
          <div>
            <p className="text-xl font-semibold">$7,356</p>
            <p className="text-blue-500 text-sm">Enterprise</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select className="border rounded px-3 py-1 text-sm">
            <option>Total Earnings</option>
            <option>Monthly</option>
          </select>
          <DateFilter />
        </div>
      </div>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default AreaChart;
