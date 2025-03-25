"use client";
import CustomTable from "@/app/(admin)/_components/CustomTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import { IoMdCopy } from "react-icons/io";

const userInfo = [
  { label: "User ID", value: "#9003237" },
  { label: "Registration Date", value: "12/06/2020" },
  { label: "Last Active", value: "4 months ago" },
  { label: "Document Analyzed", value: "883" },
  { label: "Custom Rules", value: "12" },
  { label: "Subscription Plan", value: "As Pay You Go" },
  { label: "Subscription Status", value: "Active", isActive: true },
];

const page = () => {
  const [activeTab, setActiveTab] = useState("request");
  useEffect(() => {
    localStorage.setItem("tab", "Support");
  }, []);
  return (
    <div>
      <div className="mt-5 mx-4 ">
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
              type="user-management"
              title=""
              columns={[]}
              data={[]}
              filter={false}
            />
          </TabsContent>
          <TabsContent value="history" className="mt-6">
            <CustomTable
              type="user-management"
              title=""
              columns={[]}
              data={[]}
              filter={false}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
