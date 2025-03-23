"use client";
import CustomTable from "../_components/CustomTable";
import AnalyticsCards from "./_components/AnalyticsCards";
import ApiChart from "./_components/ApiChart";
import SubsStatsChart from "./_components/SubsStatsChart";

export default function DashboardPage() {
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

  return (
    <div>
      <AnalyticsCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <CustomTable
            columns={rulesColumns}
            data={rulesData}
            onRowClick={() => {}}
            rowClassName={() => ""}
            title="RulList of most used Pre-define ruleses"
          />
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <SubsStatsChart />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <ApiChart />
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <SubsStatsChart />
        </div>
      </div>
    </div>
  );
}
