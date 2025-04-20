"use client"; // Ensure it's a client component in Next.js 13+

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import DateFilter from "../../../_components/DateFilter";
import { useGetDailyUsageTokensQuery } from "@/app/store/api/dashboardApi";

// Import ApexOptions type safely
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const OutputTokenUsageChart = ({ title, color }) => {
  const [dateFilter, setDateFilter] = useState({ year: 2025, month: 3 });
  const [mounted, setMounted] = useState(false);

  // Pass date parameters to the API query
  const {
    data: dailyUsage,
    isLoading,
    refetch,
  } = useGetDailyUsageTokensQuery({
    dateFilter,
  });

  // Handle date changes from the DateFilter component
  const handleDateChange = (newDate) => {
    setDateFilter(newDate);
  };

  // Transform API data into chart format
  const { outputData } = useMemo(() => {
    if (!dailyUsage?.data?.daily_usage) {
      return {
        inputData: [],
        outputData: [],
      };
    }

    // Transform the daily usage data into the format expected by TokenUsageChart
    const dailyUsageData = dailyUsage.data.daily_usage;

    // Create output token data - this should use output_tokens, not input_tokens
    const outputData = dailyUsageData.map((item) => ({
      x: `${item.day}`,
      y: item.output_tokens,
    }));

    return { inputData: [], outputData }; // We're only using outputData here
  }, [dailyUsage]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use the formatted data from API or fall back to props
  const chartData = outputData.length > 0 && outputData;

  const options: ApexCharts.ApexOptions = {
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
      data: chartData,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="grid lg:grid-cols-5">
      <div className="col-span-1"></div>
      <div
        className={`col-span-4 ${
          title === "Output Tokens" ? "border-b pb-6" : ""
        }`}
      >
        <div className="flex justify-between items-center mt-5 w-full">
          <p>{title}</p>
          <DateFilter onDateChange={handleDateChange} />
        </div>
        <Chart options={options} series={series} type="bar" height={350} />
        <p className="my-4 flex gap-2 items-center text-[14px]">
          Average {title}
          <span className="mr-5 ml-2 font-semibold">:</span>
          {chartData.length > 0
            ? `${(
                chartData.reduce((sum, item) => sum + item.y, 0) /
                chartData.length
              ).toFixed(0)} Token/day`
            : "0 Token/day"}
        </p>
      </div>
    </div>
  );
};

export default OutputTokenUsageChart;
