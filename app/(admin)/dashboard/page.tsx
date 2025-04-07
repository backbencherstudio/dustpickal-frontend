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

export default function DashboardPage() {
  const { data, isLoading, isError, refetch } = useGetDashboardsQuery({
    year: 2025,
    month: 4,
  });
  const rulesColumns = [
    { label: "S/N", accessor: "pNo" },
    { label: "Rule Name", accessor: "rule_name" },
    { label: "Total Messages", accessor: "total_message" },
    { label: "Total views", accessor: "total_views" },
    // { label: "Last Message", accessor: "last_message" },
    // {
    //   label: "Action",
    //   accessor: "action",
    //   customCell: (row) => (
    //     <div className="flex gap-2">
    //       <button
    //         onClick={() => router.push(`/admin/users/${row.id}`)}
    //         className="bg-gray-100 hover:bg-gray-200 rounded-xl p-2"
    //       >
    //         <IoEyeOutline size={20} />
    //       </button>
    //       <button
    //         onClick={() => handleDelete(row)}
    //         className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-xl p-2"
    //       >
    //         <RiDeleteBin5Line size={20} />
    //       </button>
    //     </div>
    //   ),
    // },
  ];
  const rulesData = [
    {
      pNo: 1,
      rule_name: "Rule 1",
      total_message: 100,
      total_views: 100,
    },
    {
      pNo: 2,
      rule_name: "Rule 2",
      total_message: 100,
      total_views: 100,
    },
  ];
  const newUsersColumns = [
    { label: "User Name", accessor: "userName" },
    { label: "Email", accessor: "email" },
    { label: "Subscriptions", accessor: "subscriptions" },
  ];
  const newUsersData = [
    {
      userName: "Theresa Webb",
      email: "curtis.weaver@example.com",
      subscriptions: "Pay as you go",
    },
    {
      userName: "Brooklyn Simmons",
      email: "nevaeh.simmons@example.com",
      subscriptions: "Pay as you go",
    },
    {
      userName: "Kristin Watson",
      email: "jackson.graham@example.com",
      subscriptions: "Pro plan",
    },
    {
      userName: "Courtney Henry",
      email: "tim.jennings@example.com",
      subscriptions: "Pay as you go",
    },
    {
      userName: "Kristin Watson",
      email: "jackson.graham@example.com",
      subscriptions: "Enterprise",
    },
    {
      userName: "Courtney Henry",
      email: "tim.jennings@example.com",
      subscriptions: "Basic",
    },
    {
      userName: "Kristin Watson",
      email: "jackson.graham@example.com",
      subscriptions: "Pay as you go",
    },
    {
      userName: "Courtney Henry",
      email: "tim.jennings@example.com",
      subscriptions: "Basic",
    },
    {
      userName: "Kristin Watson",
      email: "jackson.graham@example.com",
      subscriptions: "Pro plan",
    },
    {
      userName: "Robert Fox",
      email: "michael.mitc@example.com",
      subscriptions: "Enterprise",
    },
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
          <AreaChart data={data?.data} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow lg:col-span-1">
          {/* <SubsStatus /> */}
          <UserStatusChart />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-6 gap-6">
        <div className="bg-white p-4 rounded-xl shadow lg:col-span-3">
          <ApiChart />
        </div>
        <div className="bg-white p-4 rounded-xl shadow lg:col-span-2">
          <SubsStatsChart />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-6">
        <CustomTable
          type="rules"
          columns={rulesColumns}
          data={rulesData}
          title="List of most used Pre-define ruleses"
        />
      </div>
      <div className="mt-6">
        <CustomTable
          type="newUsers"
          columns={newUsersColumns}
          data={newUsersData}
          title="New users this month"
        />
      </div>
    </div>
  );
}
