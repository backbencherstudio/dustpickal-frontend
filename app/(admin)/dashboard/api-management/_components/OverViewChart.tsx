import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const OverViewChart = ({ data }) => {
  const series = [
    data?.tokens_remaining,
    data?.output_token_usage,
    data?.input_token_usage,
  ];
  const total = data?.total_tokens_used;

  const options: ApexCharts.ApexOptions = {
    series,
    chart: {
      type: "donut" as const,
    },
    colors: ["#e9e9ea", "#86daff", "#4ed5bd"],
    labels: ["Remaining", "Output", "Input"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => total.toString(),
              color: "#333",
              fontSize: "16px",
              fontWeight: 500,
            },
          },
        },
        expandOnClick: false,
      },
    },
    stroke: {
      width: 3, // Increases stroke width to give a rounded effect
      colors: ["#fff"], // White stroke to create separation
      lineCap: "round", // Makes the edges rounded
    },
    legend: {
      show: false,
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

  return (
    <div className="">
      <Chart options={options} series={series} type="donut" height={200} />
    </div>
  );
};

export default OverViewChart;
