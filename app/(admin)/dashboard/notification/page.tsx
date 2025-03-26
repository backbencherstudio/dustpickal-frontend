"use client";
import CustomTable from "@/app/(admin)/_components/CustomTable";
import { useGetNotificationsQuery } from "@/app/store/api/notificationApi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { MdOutlineNotifications } from "react-icons/md";

const page = () => {
  const { data: notification, isLoading } = useGetNotificationsQuery(1);
  const [activeTab, setActiveTab] = useState("all");
  useEffect(() => {
    localStorage.setItem("tab", "Support");
  }, []);
  console.log(notification);

  return (
    <div>
      <div className="mt-5 mx-4 p-5 pt-2 bg-white lg:max-w-[50%] rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] text-gray-800 my-4 flex items-center gap-2 font-medium">
            <MdOutlineNotifications size={24} /> Notifications
          </h1>
          <FaAnglesRight size={18} className="cursor-pointer" />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className=" bg-white border-b-2 border-[#e9e9ea] rounded-none w-full flex justify-start px-7">
            <TabsTrigger
              onClick={() => setActiveTab("all")}
              value="all"
              className="data-[state=active]:text-white text-black data-[state=active]:bg-black bg-[#e9e9ea] data-[state=active]:border-b-2 max-w-[50px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none  px-4 py-2 mb-3 cursor-pointer rounded shadow"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("read")}
              value="read"
              className="data-[state=active]:text-white text-black data-[state=active]:bg-black bg-[#e9e9ea] data-[state=active]:border-b-2 max-w-[70px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none  px-4 py-2 mx-3 mb-3 cursor-pointer rounded shadow"
            >
              Read
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("unread")}
              value="unread"
              className="data-[state=active]:text-white text-black data-[state=active]:bg-black bg-[#e9e9ea] data-[state=active]:border-b-2 max-w-[85px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none  px-4 py-2 mb-3 cursor-pointer rounded shadow"
            >
              Unread
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <CustomTable
              type="user-management"
              title=""
              columns={[]}
              data={[]}
              filter={false}
            />
          </TabsContent>
          <TabsContent value="read">
            <CustomTable
              type="user-management"
              title=""
              columns={[]}
              data={[]}
              filter={false}
            />
          </TabsContent>
          <TabsContent value="unread">
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
