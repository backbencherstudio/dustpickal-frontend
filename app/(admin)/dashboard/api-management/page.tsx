"use client";
import React, { useMemo, useEffect, useState } from "react";
import CustomFilter from "../../_components/CustomFilter";
import OverViewChart from "./_components/OverViewChart";
import CustomTable from "../../_components/CustomTable";
import DateFilter from "../../_components/DateFilter";
import {
  useGetApiUsageOverviewQuery,
  useGetDailyUsageTokensQuery,
  useGetUserUsageQuery,
} from "@/app/store/api/dashboardApi";
import InputTokenUsageChart from "./_components/InputTokenUsageChart";
import OutputTokenUsageChart from "./_components/OutputTokenUsageChart";

const Page = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch } =
    useGetApiUsageOverviewQuery(null);
  const { data: userData } = useGetUserUsageQuery(page);

  // Client-side only rendering state
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fallbackInputData = [
    { x: "Input", y: 0 },
    { x: "Output", y: 0 },
    { x: "Remaining", y: 0 },
  ];

  const userColumns = [
    { label: "SL", accessor: "sl" },
    { label: "Email", accessor: "email" },

    { label: "Plan Type", accessor: "plan_type" },
    { label: "Token Used", accessor: "token_used" },
    { label: "Total API Calls", accessor: "total_api_calls" },
  ];
  // Only render the full content on the client side
  if (!isClient) {
    return <div className="bg-white p-3 rounded">Loading dashboard...</div>;
  }
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="bg-white p-3 rounded">
      <p className="font-medium">API Usage Overview</p>
      <div className="grid lg:grid-cols-5">
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <div className="flex justify-center items-center mt-5">
            <CustomFilter
              placeholder="All"
              options={["All", "Today", "Weekly", "Monthly", "Yearly"]}
            />
          </div>
          <div className="grid lg:grid-cols-3 text-[14px] py-10 border-b">
            <div>
              <p>
                Estimated Cost{" "}
                <span className="mr-5 ml-10 font-semibold">:</span> $
                {data?.data?.estimated_cost || "0.00"}
              </p>
              <p className="my-4">
                Total Token{" "}
                <span className="mr-5 ml-[67px] font-semibold">:</span>{" "}
                {data?.data?.total_token || "0"}
              </p>
              <div>
                Tokens Remaining{" "}
                <span className="mr-5 ml-4 font-semibold">:</span>{" "}
                {data?.data?.tokens_remaining_percentage || "0"}%{" "}
                <p className="bg-[#4ed5bd] text white inline m-2 p-1 px-2 text-white rounded">
                  {data?.data?.tokens_remaining || "0"} Tokens
                </p>
              </div>
            </div>
            <div className="mt-5 ">
              <p>
                Total Tokens Used{" "}
                <span className="mr-5 ml-[54px] font-semibold">:</span>{" "}
                {data?.data?.total_tokens_used || "0"}{" "}
              </p>
              <div className="my-4 flex gap-2 items-center">
                <div className="w-4 h-4 rounded  bg-[#4ed5bd]"></div>
                Input Token Usage
                <span className="mr-5 ml-5 font-semibold">:</span>{" "}
                {data?.data?.input_token_usage || "0"}
              </div>
              <div className="my-4 flex gap-2 items-center">
                <div className="w-4 h-4 rounded  bg-[#86daff]"></div>
                Output Token Usage
                <span className="mr-5 ml-2 font-semibold">:</span>{" "}
                {data?.data?.output_token_usage || "0"}
              </div>
            </div>
            <div className="flex justify-start items-start lg:-mt-10">
              {data?.data && <OverViewChart data={data.data} />}
            </div>
          </div>
        </div>
      </div>
      <p className="font-medium mt-10 mb-5">Token Usage</p>
      <InputTokenUsageChart title="Input Tokens" color="#7adfce" />
      <OutputTokenUsageChart title="Output Tokens" color="#86daff" />

      <p className="font-medium mt-10 mb-5">User Usages</p>
      <div className="grid lg:grid-cols-5">
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <div className="flex justify-end">
            <DateFilter />
          </div>
          <CustomTable
            type="users"
            columns={userColumns}
            data={userData?.data?.users}
            title=""
            filter={false}
            pagination={true}
            paginationData={{
              currentPage: userData?.data?.pagination?.page || 1,
              totalPages: userData?.data?.pagination?.total_pages || 1,
            }}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
