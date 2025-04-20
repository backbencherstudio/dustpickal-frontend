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
  const { data, isLoading, isError } = useGetUsersQuery({ page });
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
    {
      label: "Subscription",
      accessor: "subscription",
      customCell: (row) => {
        const subscription = row.subscription;
        if (subscription && typeof subscription === "object") {
          return `${subscription.plan || "N/A"} (${
            subscription.billing_cycle || "N/A"
          })`;
        }
        return "N/A";
      },
    },
    {
      label: "Subscription Status",
      accessor: "subscription",
      customCell: (row) => {
        const status = row.subscription;
        if (status && typeof status === "object") {
          return status.status || "N/A";
        }
        return "N/A";
      },
    },
    // { label: "Subscription Period", accessor: "subscriptionPeriod" },
    {
      label: "Action",
      accessor: "action",
      customCell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/dashboard/user-management/${row.id}`)}
            className="hover:bg-gray-200 rounded-xl p-2 cursor-pointer"
          >
            <IoEyeOutline size={20} />
          </button>
        </div>
      ),
    },
  ];
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <div>
      <CustomTable
        type="users"
        columns={userColumns}
        data={data?.data}
        title=""
        filter={false}
        pagination={true}
        paginationData={{
          currentPage: data?.meta?.page || 1,
          totalPages: data?.meta?.total_pages || 1,
        }}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default page;
