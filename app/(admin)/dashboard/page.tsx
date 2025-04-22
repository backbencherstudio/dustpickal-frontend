"use client";
import { useGetDashboardsQuery } from "@/app/store/api/dashboardApi";
import CustomTable from "../_components/CustomTable";
import AnalyticsCards from "./_components/AnalyticsCards";
import ApiChart from "./_components/ApiChart";
import AreaChart from "./_components/AreaChart";
import SubsStatsChart from "./_components/SubsStatsChart";
import SubsStatus from "./_components/SubsStatus";
import UserStatusChart from "./_components/UserStatusCharts";
import SkeletonLoading from "./_components/SkeletonLoading";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";
import { useState } from "react";

export default function DashboardPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [dateFilter, setDateFilter] = useState({ year: 2025, month: 4 });
  const handleDateChange = async (newDate) => {
    if (
      newDate.year !== dateFilter.year ||
      newDate.month !== dateFilter.month
    ) {
      setDateFilter(newDate);
    }
  };
  const { data, isLoading, isError, refetch } = useGetDashboardsQuery({
    year: dateFilter.year,
    month: dateFilter.month,
    page,
    limit,
  });
  // let count = 0;
  const rulesColumns = [
    // {
    //   label: "S/N",
    //   accessor: "pNo",
    //   customCell: () => {
    //     count = count + 1;
    //     return count;
    //   },
    // },
    { label: "Rule Name", accessor: "title" },
    { label: "Total Views", accessor: "usage_count" },
  ];
  const newUsersColumns = [
    {
      label: "User Name",
      accessor: "name",
      customCell: (row) => row.name || "Not Given",
    },
    { label: "Email", accessor: "email" },
    { label: "Subscriptions", accessor: "subscription" },
  ];

  if (isLoading) return <SkeletonLoading />;
  if (isError)
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white rounded-xl p-8 shadow-sm">
        <div className="bg-red-50 p-4 rounded-full mb-6">
          <FiAlertTriangle className="text-red-500 text-4xl" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Failed to Load Dashboard
        </h2>
        <p className="text-gray-500 text-center mb-6 max-w-md">
          We couldn't load your dashboard data. This might be due to a network
          issue or server problem.
        </p>
        <button
          onClick={() => refetch()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <FiRefreshCw className="text-lg" />
          <span>Try Again</span>
        </button>
      </div>
    );

  return (
    <div>
      <AnalyticsCards data={data?.data} />
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-6 gap-6">
        <div className="lg:col-span-3 bg-white p-6 rounded-xl">
          <AreaChart data={data?.data} handleDateChange={handleDateChange} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow lg:col-span-1">
          {/* <SubsStatus /> */}
          <UserStatusChart data={data?.data?.userStatus} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-6 gap-6">
        <div className="bg-white p-4 rounded-xl shadow lg:col-span-3">
          <ApiChart />
        </div>
        <div className="bg-white p-4 rounded-xl shadow lg:col-span-2">
          <SubsStatsChart data={data?.data?.subscriptionStatistics} />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-6">
        <CustomTable
          type="rules"
          columns={rulesColumns}
          data={data?.data?.mostUsagePreDefinedRules}
          title="List of most used Pre-define ruleses"
          pagination={false}
          filter={false}
          paginationData={{
            currentPage: 1,
            totalPages: 1,
          }}
          onPageChange=""
        />
      </div>
      <div className="mt-6">
        <CustomTable
          type="rules"
          columns={newUsersColumns}
          data={data?.data?.newUsers?.data}
          title="New users this month"
          pagination={false}
          filter={false}
          paginationData={{
            currentPage: data?.data?.newUsers?.pagination.page || 1,
            totalPages: data?.data?.newUsers?.pagination.totalPages || 1,
          }}
          onPageChange=""
        />
      </div>
    </div>
  );
}
