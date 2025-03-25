"use client"; // Ensure it's a client component in Next.js 13+

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DateFilter from "./DateFilter";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TokenUsageChart = ({ title, color, data = [] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options: ApexOptions = {
    chart: {
      height: 240,
      type: "bar",
      toolbar: {
        show: false, // Hides the export and other toolbar buttons
      },
    },

    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    colors: [color],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
      showForSingleSeries: true,
      customLegendItems: ["Actual"],
      markers: {
        fillColors: [color],
      },
    },
    xaxis: {
      type: "category",
    },
  };

  const series = [
    {
      name: "Actual",
      data: data,
    },
  ];

  if (!mounted) return null; // Prevents hydration error in Next.js

  return (
    <div className="grid lg:grid-cols-5">
      <div className="col-span-1"></div>
      <div
        className={`col-span-4 ${
          title === "Output Tokens" ? "border-b pb-6" : ""
        }`}
      >
        <div className=" flex justify-between items-center mt-5 w-full">
          <p>{title}</p>
          <DateFilter />
        </div>
        <Chart options={options} series={series} type="bar" height={350} />
        <p className="my-4 flex gap-2 items-center text-[14px]">
          {/* <div className="w-4 h-4 rounded"></div> */}
          Average {title}
          <span className="mr-5 ml-2 font-semibold">:</span> 12,5648 Token/ day
        </p>
      </div>
    </div>
  );
};

export default TokenUsageChart;
