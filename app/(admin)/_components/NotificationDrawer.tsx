"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import CustomTable from "./CustomTable";
import { FaAnglesLeft, FaAnglesUp } from "react-icons/fa6";

interface NotificationDrawerProps {
  position: "side" | "top";
  isOpen: boolean;
  onClose: () => void;
}

const NotificationDrawer = ({
  position,
  isOpen,
  onClose,
}: NotificationDrawerProps) => {
  const [activeTab, setActiveTab] = useState("all");

  const drawerPositionClasses = {
    side: "hidden z-10 lg:block fixed -right-10 bottom-10 h-[770px] w-[430px] transform transition-transform duration-300 ease-in-out",
    top: "fixed top-0 right-0 lg:right-36 w-[100vw] md:max-w-[430px] h-[770px] transform transition-transform duration-300 ease-in-out",
  };
  const translateClasses = {
    side: isOpen ? "translate-x-full" : "-translate-x-72",
    top: isOpen ? "translate-y-0" : "-translate-y-full",
  };

  return (
    <div
      className={`
        ${drawerPositionClasses[position]} 
        ${translateClasses[position]}
        bg-white shadow-lg rounded-lg z-50
      `}
    >
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] text-gray-800 my-4 flex items-center gap-2 font-medium">
            <MdOutlineNotifications size={24} /> Notifications
          </h1>
          <button onClick={onClose}>
            {position === "side" ? (
              <FaAnglesLeft size={18} className="cursor-pointer" />
            ) : (
              <FaAnglesUp size={18} className="cursor-pointer" />
            )}
          </button>
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

export default NotificationDrawer;
