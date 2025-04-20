"use client";
import CustomTable from "@/app/(admin)/_components/CustomTable";
import { useGetAllSupportsQuery } from "@/app/store/api/supportApi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

// Define the columns

// Define the data
const ticketData = [
  {
    ticketId: "SUP-41231547",
    userName: "John Hunt",
    userId: "#45887565",
    subject: "Facing Issues with my subscription plan...",
    status: "Open",
    issueDate: "12/02/2025",
    lastUpdated: "15/02/2025",
  },
  {
    ticketId: "SUP-41231547",
    userName: "John Hunt",
    userId: "#45887565",
    subject: "Facing Issues with my subscription plan...",
    status: "Pending",
    issueDate: "12/02/2025",
    lastUpdated: "15/02/2025",
  },
  {
    ticketId: "SUP-41231547",
    userName: "John Hunt",
    userId: "#45887565",
    subject: "Facing Issues with my subscription plan...",
    status: "Resolved",
    issueDate: "12/02/2025",
    lastUpdated: "15/02/2025",
  },
  {
    ticketId: "SUP-41231547",
    userName: "John Hunt",
    userId: "#45887565",
    subject: "Facing Issues with my subscription plan...",
    status: "Open",
    issueDate: "12/02/2025",
    lastUpdated: "15/02/2025",
  },
  {
    ticketId: "SUP-41231547",
    userName: "John Hunt",
    userId: "#45887565",
    subject: "Facing Issues with my subscription plan...",
    status: "Resolved",
    issueDate: "12/02/2025",
    lastUpdated: "15/02/2025",
  },
  {
    ticketId: "SUP-41231547",
    userName: "John Hunt",
    userId: "#45887565",
    subject: "Facing Issues with my subscription plan...",
    status: "Open",
    issueDate: "12/02/2025",
    lastUpdated: "15/02/2025",
  },
  {
    ticketId: "SUP-41231547",
    userName: "John Hunt",
    userId: "#45887565",
    subject: "Facing Issues with my subscription plan...",
    status: "Pending",
    issueDate: "12/02/2025",
    lastUpdated: "15/02/2025",
  },
  {
    ticketId: "SUP-41231547",
    userName: "John Hunt",
    userId: "#45887565",
    subject: "Facing Issues with my subscription plan...",
    status: "Open",
    issueDate: "12/02/2025",
    lastUpdated: "15/02/2025",
  },
  {
    ticketId: "SUP-41231547",
    userName: "John Hunt",
    userId: "#45887565",
    subject: "Facing Issues with my subscription plan...",
    status: "Pending",
    issueDate: "12/02/2025",
    lastUpdated: "15/02/2025",
  },
  {
    ticketId: "SUP-41231547",
    userName: "John Hunt",
    userId: "#45887565",
    subject: "Facing Issues with my subscription plan...",
    status: "Resolved",
    issueDate: "12/02/2025",
    lastUpdated: "15/02/2025",
  },
];

const page = () => {
  const [activeTab, setActiveTab] = useState("request");
  const router = useRouter();
  const { data } = useGetAllSupportsQuery(null);
  useEffect(() => {
    localStorage.setItem("tab", "Support");
  }, []);
  const columns = [
    { label: "Ticket ID", accessor: "ticket_id" },
    // { label: "User Name", accessor: "userName" },
    { label: "Subject", accessor: "subject" },
    {
      label: "Status",
      accessor: "status",
      customCell: (row) => (
        <div
          className={`px-2 py-1 rounded-full text-sm ${
            row?.status == "OPEN"
              ? " text-[#007bff]"
              : row?.status == "PENDING"
              ? " text-[#f9c80e]"
              : " text-[#22caad]"
          }`}
        >
          {row?.status}
        </div>
      ),
    },
    { label: "Priority", accessor: "priority" },
    {
      label: "Issue Date",
      accessor: "updated_at",
      customCell: (row) => {
        try {
          return format(new Date(row.created_at), "dd MMMM yyyy");
        } catch (error) {
          return row.created_at || "N/A";
        }
      },
    },
    {
      label: "Updated Date",
      accessor: "updated_at",
      customCell: (row) => {
        try {
          return format(new Date(row.updated_at), "dd MMMM yyyy");
        } catch (error) {
          return row.updated_at || "N/A";
        }
      },
    },
    {
      label: "View",
      accessor: "view",
      customCell: (row) => (
        <button
          onClick={() => router.push(`/dashboard/support/${row.id}`)}
          className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
        >
          <IoEyeOutline size={20} />
        </button>
      ),
    },
  ];
  return (
    <div>
      <div className="mt-5 mx-4">
        <Tabs defaultValue="request" className="w-full">
          <TabsList className="flex justify-start w-full bg-transparent border-b-2 border-[#e9e9ea]">
            <TabsTrigger
              onClick={() => setActiveTab("request")}
              value="request"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[120px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
            >
              Request Tickets
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("history")}
              value="history"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[100px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
            >
              History
            </TabsTrigger>
          </TabsList>
          <TabsContent value="request" className="mt-6">
            <CustomTable
              type="support"
              title=""
              columns={columns}
              data={data?.data}
              pagination={false}
              filter={false}
              paginationData={{}}
              onPageChange=""
            />
          </TabsContent>
          <TabsContent value="history" className="mt-6">
            <CustomTable
              type="support"
              title=""
              columns={columns}
              data={data?.data}
              pagination={false}
              filter={false}
              paginationData={{}}
              onPageChange=""
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
