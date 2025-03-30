"use client";
import CustomTable from "@/app/(admin)/_components/CustomTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  useEffect(() => {
    localStorage.setItem("tab", "Support");
  }, []);
  const columns = [
    { header: "Ticket ID", accessor: "ticketId" },
    { header: "User Name", accessor: "userName" },
    { header: "User ID", accessor: "userId" },
    { header: "Subject", accessor: "subject" },
    {
      header: "Status",
      accessor: "status",
      customCell: (row) => (
        <div
          className={`px-2 py-1 rounded-full text-sm ${
            row?.status === "Open"
              ? " text-[#007bff]"
              : row?.status === "Pending"
              ? " text-[#f9c80e]"
              : " text-[#22caad]"
          }`}
        >
          {row?.status}
        </div>
      ),
    },
    { header: "Issue Date", accessor: "issueDate" },
    { header: "Last Updated", accessor: "lastUpdated" },
    {
      header: "View",
      accessor: "view",
      customCell: (row) => (
        <button
          onClick={() => router.push(`/dashboard/support/${row.ticketId}`)}
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
              data={ticketData}
              filter={false}
            />
          </TabsContent>
          <TabsContent value="history" className="mt-6">
            <CustomTable
              type="support"
              title=""
              columns={columns}
              data={ticketData}
              filter={false}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
