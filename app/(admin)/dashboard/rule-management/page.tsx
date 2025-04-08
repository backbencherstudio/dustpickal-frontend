"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import CustomTable from "../../_components/CustomTable";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useGetRulesQuery } from "@/app/store/api/ruleApi";
import { format } from "date-fns";
const page = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading, isError } = useGetRulesQuery({ page, limit });
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

  const columns = [
    { label: "Rules", accessor: "rule_name" },
    { label: "Usage Count", accessor: "usage_count" },
    {
      label: "Published Date",
      accessor: "published_date",
      customCell: (row) => {
        try {
          return format(new Date(row.published_date), "dd MMMM yyyy");
        } catch (error) {
          return row.published_date || "N/A";
        }
      },
    },
    {
      label: "Last Modified",
      accessor: "last_modified",
      customCell: (row) => {
        try {
          return format(new Date(row.last_modified), "dd MMMM yyyy");
        } catch (error) {
          return row.last_modified || "N/A";
        }
      },
    },
    {
      label: "Action",
      accessor: "action",
      customCell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/dashboard/rule-management/${row.id}`)}
            className=" hover:bg-gray-200 rounded-xl p-2"
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
      <div className="mt-5 mx-4 relative">
        <p
          onClick={() => router.push("/dashboard/rule-management/addRule")}
          className="text-[14px] text-right text-slate-700 cursor-pointer float-right absolute right-5 top-2 hover:text-slate-900"
        >
          + Add Rule
        </p>
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="flex justify-start w-full bg-transparent border-b-2 border-[#e9e9ea]">
            <TabsTrigger
              value="info"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[120px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
            >
              Published Rules
            </TabsTrigger>
            <TabsTrigger
              value="billings"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[100px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
            >
              Draft
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="mt-6">
            <CustomTable
              type="user-management"
              title=""
              columns={columns}
              data={data?.data}
              filter={false}
              paginationData={{
                currentPage: data?.meta?.page || 1,
                totalPages: data?.meta?.total_pages || 1,
                // totalItems: data?.meta?.total || 1,
              }}
              pagination={true}
              onPageChange={handlePageChange}
            />
          </TabsContent>
          <TabsContent value="billings" className="mt-6">
            <CustomTable
              type="user-management"
              title=""
              columns={[]}
              data={[]}
              filter={false}
              onPageChange={handlePageChange}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
