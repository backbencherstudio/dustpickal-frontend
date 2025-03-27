"use client";
import React from "react";
import CustomFilter from "../../_components/CustomFilter";
import OverViewChart from "./_components/OverViewChart";
import TokenUsageChart from "./_components/TokenUsageChart";
import CustomTable from "../../_components/CustomTable";
import DateFilter from "./_components/DateFilter";

const page = () => {
  const inputData = [
    {
      x: "Input",
      y: 100,
    },
    {
      x: "Output",
      y: 200,
    },
    {
      x: "Remaining",
      y: 300,
    },
  ];
  const outputData = [
    {
      x: "Input",
      y: 100,
    },
    {
      x: "Output",
      y: 200,
    },
    {
      x: "Remaining",
      y: 300,
    },
  ];
  return (
    <div className="bg-white p-3 rounded">
      <p className="font-medium">API Usage Overview</p>
      <div className="grid lg:grid-cols-5">
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <div className=" flex justify-center items-center mt-5">
            <CustomFilter
              placeholder="All"
              options={["All", "Today", "Weekly", "Monthly", "Yearly"]}
            />
          </div>
          <div className="grid lg:grid-cols-3 text-[14px] py-10 border-b">
            <div>
              <p>
                Estimated Cost{" "}
                <span className="mr-5 ml-10 font-semibold">:</span> $24.84
              </p>
              <p className="my-4">
                Total Token{" "}
                <span className="mr-5 ml-[67px] font-semibold">:</span> 10M
              </p>
              <p>
                Tokens Remaining{" "}
                <span className="mr-5 ml-4 font-semibold">:</span> 65%{" "}
                <p className="bg-[#4ed5bd] text white inline m-2 p-1 px-2 text-white rounded">
                  3.5M Tokens
                </p>
              </p>
            </div>
            <div className="mt-5 ">
              <p>
                Total Tokens Used{" "}
                <span className="mr-5 ml-[54px] font-semibold">:</span> $24.84
              </p>
              <div className="my-4 flex gap-2 items-center">
                <div className="w-4 h-4 rounded  bg-[#4ed5bd]"></div>
                Input Token Usage
                <span className="mr-5 ml-5 font-semibold">:</span> 12,5648
              </div>
              <p className="my-4 flex gap-2 items-center">
                <div className="w-4 h-4 rounded  bg-[#86daff]"></div>
                Output Token Usage
                <span className="mr-5 ml-2 font-semibold">:</span> 12,5648
              </p>
            </div>
            <div className="flex justify-start items-start lg:-mt-10">
              <OverViewChart />
            </div>
          </div>
        </div>
      </div>
      <p className="font-medium mt-10 mb-5">Token Usage</p>
      <TokenUsageChart title="Input Tokens" color="#7adfce" data={inputData} />
      <TokenUsageChart
        title="Output Tokens"
        color="#86daff"
        data={outputData}
      />
      <p className="font-medium mt-10 mb-5">User Usages</p>
      <div className="grid lg:grid-cols-5">
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <div className="flex justify-end">
            <DateFilter />
          </div>
          <CustomTable title="" type="" />
        </div>
      </div>
    </div>
  );
};

export default page;
