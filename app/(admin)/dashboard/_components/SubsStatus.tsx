"use client";
import React from "react";
import CustomFilter from "../../_components/CustomFilter";

const SubsStatus = () => {
  const subsStatus = {
    totalUser: 1110,
    activeUser: 830,
    cancelledUser: 120,
    expiredUser: 160,
  };

  // Calculate percentages
  const activePercentage = Math.round(
    (subsStatus.activeUser / subsStatus.totalUser) * 100
  );
  const cancelledPercentage = Math.round(
    (subsStatus.cancelledUser / subsStatus.totalUser) * 100
  );
  const expiredPercentage = Math.round(
    (subsStatus.expiredUser / subsStatus.totalUser) * 100
  );

  return (
    <div className="bg-white p-4 rounded-xl w-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-gray-800 text-[14px] font-medium">
          Subscription Status
        </h3>
        <CustomFilter
          placeholder="All"
          options={["All", "Today", "Weekly", "Monthly", "Yearly"]}
        />
      </div>

      <h2 className="text-gray-800 text-[14px] mb-6">
        Total User{" "}
        <span className="text-gray-800 text-[14px] font-medium">
          {subsStatus.totalUser}
        </span>
      </h2>

      <div className="flex h-12 relative w-full gap-[2px]">
        {/* Cancelled Users */}
        <div
          className="h-full bg-[#ff597b] flex items-center justify-center text-white text-xs rounded font-medium"
          style={{ width: `${cancelledPercentage}%` }}
        >
          {subsStatus.cancelledUser}
        </div>

        {/* Expired Users */}
        <div
          className="h-full bg-[#a5a5ab] flex items-center justify-center text-white text-xs rounded font-medium"
          style={{ width: `${expiredPercentage}%` }}
        >
          {subsStatus.expiredUser}
        </div>

        {/* Active Users */}
        <div
          className="h-full bg-[#24a4ff] flex items-center justify-center text-white text-xs rounded font-medium"
          style={{ width: `${activePercentage}%` }}
        >
          {subsStatus.activeUser}
        </div>
      </div>

      {/* Labels */}
      <div className="flex flex-col justify-center gap-3 mt-10">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded  bg-[#24a4ff]"></div>
          <p className="text-sm">
            Active User{" "}
            <span className="font-semibold">{subsStatus.activeUser}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded  bg-[#a5a5ab]"></div>
          <p className="text-sm">
            Expired User{" "}
            <span className="font-semibold">{subsStatus.expiredUser}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded  bg-[#ff597b]"></div>
          <p className="text-sm">
            Cancelled User{" "}
            <span className="font-semibold">{subsStatus.cancelledUser}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubsStatus;
