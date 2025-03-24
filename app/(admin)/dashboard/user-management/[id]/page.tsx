"use client";
import CustomTable from "@/app/(admin)/_components/CustomTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("info");
  return (
    <div>
      <div className="bg-[#e9e9ea] h-12 rounded"></div>
      <div className="flex justify-between items-center mr-10">
        <div>
          <h1 className="mt-10 text-[16px] mx-4">Stive Smith</h1>
          <p className="text-[12px] mx-4 text-[#4A4C56]">
            stive.smith@gmail.com
          </p>
        </div>
        <div className="text-[14px] mt-5">
          {activeTab === "info" ? (
            <p className="bg-white px-2 py-1 rounded-md border border-[#d2d2d5] cursor-pointer flex items-center gap-2">
              <IoMdCopy size={20} color="#4A4C56" />
              Copy User Id
            </p>
          ) : (
            <div className="">
              <div className="flex items-center gap-2">
                <p className="font-semibold">Pro</p>
                <p className="bg-white px-2 py-1 rounded-md border border-[#d2d2d5] cursor-pointer flex items-center gap-2">
                  Yearly Billed
                </p>
              </div>
              <p className="text-[14px] text-[#4A4C56] ">
                Next Payment : Dec 25
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 mx-4 ">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="flex justify-start w-full bg-transparent border-b-2 border-[#e9e9ea]">
            <TabsTrigger
              onClick={() => setActiveTab("info")}
              value="info"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[120px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
            >
              User Information
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("billings")}
              value="billings"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[100px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
            >
              Billings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
              <div className="space-y-4">
                {userInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2"
                  >
                    <div className="text-[14px] text-[#4A4C56] flex justify-between w-[40%]">
                      <p> {info.label} </p>
                      <p> :</p>
                    </div>
                    <p
                      className={`text-[14px] font-medium ${
                        info.isActive ? "text-green-500" : ""
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>

              <div>{/* Right side content */}</div>
            </div>
          </TabsContent>
          <TabsContent value="billings" className="mt-6">
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
