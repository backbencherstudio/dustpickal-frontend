import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const ApiChart = () => {
  const apiData = [
    {
      total: 10000,
      Used: 6000,
      Remaining: 4000,
    },
  ];

  const total = apiData[0].total;
  const used = apiData[0].Used;
  const remaining = apiData[0].Remaining;

  // Calculate percentages for sizing
  const usedPercentage = Math.round((used / total) * 100);
  const remainingPercentage = Math.round((remaining / total) * 100);

  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-800 text-[14px] font-medium ">
          API management
        </h3>
        <Select>
          <SelectTrigger className="w-[110px] bg-[#f8fafb]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">Weekly</SelectItem>
              <SelectItem value="month">Monthly</SelectItem>
              <SelectItem value="year">Yearly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-around mt-6">
        <div className="relative w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]">
          {/* Total circle - largest and in back */}
          <div className="absolute w-full h-full rounded-full border opacity-80"></div>

          {/* Used circle - medium and overlapping */}
          <div
            className="absolute rounded-full bg-[#7ed3da] opacity-80"
            style={{
              width: `50%`,
              height: `50%`,
              left: "10%",
              top: "20%",
            }}
          ></div>
          <div
            className="absolute rounded-full bg-[#ae97e9] opacity-80"
            style={{
              width: `${usedPercentage / 2}%`,
              height: `${usedPercentage / 2}%`,
              left: "40%",
              top: "10%",
            }}
          ></div>

          {/* Remaining circle - smallest and in front */}
          <div
            className="absolute rounded-full bg-[#ff6a89] opacity-80"
            style={{
              width: `${remainingPercentage / 2}%`,
              height: `${remainingPercentage / 2}%`,
              left: "40%",
              bottom: "20%",
            }}
          ></div>
        </div>

        {/* Legend */}
        <div className="flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded  bg-[#7ed3da]"></div>
            <p className="text-sm">Total: {total}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded  bg-[#ae97e9]"></div>
            <p className="text-sm">
              Used: {used} ({usedPercentage}%)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded  bg-[#ff6a89]"></div>
            <p className="text-sm">
              Remaining: {remaining} ({remainingPercentage}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiChart;
