"use client";
import React from "react";
import CustomTable from "../../_components/CustomTable";
import { useRouter } from "next/navigation";
import { IoEyeOutline } from "react-icons/io5";
import { useGetUsersQuery } from "@/app/store/api/userApi";
import { format } from "date-fns";
const page = () => {
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const { data, isLoading, isError } = useGetUsersQuery({ page, limit });
  if (isLoading)
    return (
      <div className=" mt-6">
        <div className="bg-white min-h-[80vh] p-5 rounded-xl shadow">
          <div className="h-5 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="h-12 bg-gray-100 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  if (isError) return <div>Error...</div>;
  const userData = [
    {
      sl: 1,
      userId: "9003237",
      userName: "Guy Hawkins",
      email: "debbie.baker@example.com",
      registrationDate: "12/06/2020",
      lastActive: "4 months ago",
      documentAnalyzed: 883,
      customRules: 12,
      subscriptionPlan: "As Pay You Go",
      subscriptionStatus: "Active",
      subscriptionPeriod: "Yearly",
    },
    {
      sl: 2,
      userId: "8656436",
      userName: "Jane Cooper",
      email: "tim.jennings@example.com",
      registrationDate: "12/06/2020",
      lastActive: "5 days ago",
      documentAnalyzed: 703,
      customRules: 13,
      subscriptionPlan: "Pro",
      subscriptionStatus: "Active",
      subscriptionPeriod: "Monthly",
    },
    {
      sl: 3,
      userId: "8466754",
      userName: "Jenny Wilson",
      email: "sara.cruz@example.com",
      registrationDate: "25/10/2012",
      lastActive: "2 days ago",
      documentAnalyzed: 357,
      customRules: 45,
      subscriptionPlan: "Enterprise",
      subscriptionStatus: "Active",
      subscriptionPeriod: "Yearly",
    },
    {
      sl: 4,
      userId: "7632785",
      userName: "Kristin Watson",
      email: "michelle.rivera@example.com",
      registrationDate: "18/09/2016",
      lastActive: "1 month ago",
      documentAnalyzed: 274,
      customRules: 23,
      subscriptionPlan: "Basic",
      subscriptionStatus: "Active",
      subscriptionPeriod: "Monthly",
    },
    {
      sl: 5,
      userId: "7372572",
      userName: "Arlene McCoy",
      email: "bill.sanders@example.com",
      registrationDate: "25/10/2012",
      lastActive: "2 hours ago",
      documentAnalyzed: 185,
      customRules: 20,
      subscriptionPlan: "As Pay You Go",
      subscriptionStatus: "Active",
      subscriptionPeriod: "Yearly",
    },
    {
      sl: 6,
      userId: "7527365",
      userName: "Darrell Steward",
      email: "nathan.roberts@example.com",
      registrationDate: "07/05/2016",
      lastActive: "6 days ago",
      documentAnalyzed: 423,
      customRules: 11,
      subscriptionPlan: "Enterprise",
      subscriptionStatus: "Active",
      subscriptionPeriod: "Yearly",
    },
    {
      sl: 7,
      userId: "#5236850",
      userName: "Ralph Edwards",
      email: "jessica.hanson@example.com",
      registrationDate: "12/06/2020",
      lastActive: "2 weeks ago",
      documentAnalyzed: 798,
      customRules: 1,
      subscriptionPlan: "As Pay You Go",
      subscriptionStatus: "Cancelled",
      subscriptionPeriod: "Last Month",
    },
    {
      sl: 8,
      userId: "#7372572",
      userName: "Leslie Alexander",
      email: "dolores.chambers@example.com",
      registrationDate: "07/05/2016",
      lastActive: "3 weeks ago",
      documentAnalyzed: 453,
      customRules: 103,
      subscriptionPlan: "Pro",
      subscriptionStatus: "Active",
      subscriptionPeriod: "Yearly",
    },
    {
      sl: 9,
      userId: "#9002984",
      userName: "Floyd Miles",
      email: "jackson.graham@example.com",
      registrationDate: "07/05/2016",
      lastActive: "3 days ago",
      documentAnalyzed: 994,
      customRules: 114,
      subscriptionPlan: "Enterprise",
      subscriptionStatus: "Active",
      subscriptionPeriod: "Monthly",
    },
    {
      sl: 10,
      userId: "#9232734",
      userName: "Jacob Jones",
      email: "curtis.weaver@example.com",
      registrationDate: "15/08/2017",
      lastActive: "3 months ago",
      documentAnalyzed: 196,
      customRules: 342,
      subscriptionPlan: "Basic",
      subscriptionStatus: "Cancelled",
      subscriptionPeriod: "Jan 25",
    },
    {
      sl: 11,
      userId: "#5227365",
      userName: "Bessie Cooper",
      email: "felicia.reid@example.com",
      registrationDate: "12/06/2020",
      lastActive: "4 days ago",
      documentAnalyzed: 540,
      customRules: 32,
      subscriptionPlan: "As Pay You Go",
      subscriptionStatus: "Active",
      subscriptionPeriod: "Yearly",
    },
    {
      sl: 12,
      userId: "#7426774",
      userName: "Eleanor Pena",
      email: "tanya.hill@example.com",
      registrationDate: "16/08/2013",
      lastActive: "6 months ago",
      documentAnalyzed: 177,
      customRules: 45,
      subscriptionPlan: "Enterprise",
      subscriptionStatus: "Cancelled",
      subscriptionPeriod: "Dec 24",
    },
  ];
  const userColumns = [
    { label: "User Name", accessor: "username" },
    { label: "Email", accessor: "email" },
    {
      label: "Published Date",
      accessor: "registration_date",
      customCell: (row) => {
        try {
          return format(new Date(row.registration_date), "dd MMMM yyyy");
        } catch (error) {
          return row.registration_date || "N/A";
        }
      },
    },
    {
      label: "Last Active",
      accessor: "last_active",
      customCell: (row) => {
        try {
          return format(new Date(row.last_active), "dd MMMM yyyy");
        } catch (error) {
          return row.last_active || "N/A";
        }
      },
    },
    { label: "Document Analyzed", accessor: "documents_analyzed" },
    { label: "Custom Rules", accessor: "custom_rules" },
    { label: "Subscription", accessor: "subscription" },
    { label: "Subscription Status", accessor: "subscriptionStatus" },
    { label: "Subscription Period", accessor: "subscriptionPeriod" },
    {
      label: "Action",
      accessor: "action",
      customCell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/dashboard/user-management/${row.id}`)}
            className=" hover:bg-gray-200 rounded-xl p-2 cursor-pointer"
          >
            <IoEyeOutline size={20} />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <CustomTable
        type="users"
        columns={userColumns}
        data={data?.data}
        title=""
        filter={true}
        pagination={{
          currentPage: page,
          totalPages: data?.totalPages || 1,
          onPageChange: setPage,
          limit,
          onLimitChange: setLimit,
        }}
      />
    </div>
  );
};

export default page;
