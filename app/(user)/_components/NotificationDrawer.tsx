"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import CustomTable from "./CustomTable";
import { FaAnglesLeft, FaAnglesUp } from "react-icons/fa6";
import { useGetNotificationsQuery } from "@/app/store/api/user/NotificationApi";
import { CreditCard } from "lucide-react";
import moment from "moment";
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
  const { data, isLoading } = useGetNotificationsQuery({});

  const drawerPositionClasses = {
    side: "hidden z-10 lg:block fixed -left-0 bottom-10 h-[80vh] overflow-y-auto w-[430px] transform transition-transform duration-300 ease-in-out",
    top: "fixed top-0 right-0 lg:right-36 w-[100vw] md:max-w-[430px] h-[80vh] overflow-y-auto transform transition-transform duration-300 ease-in-out",
  };
  const translateClasses = {
    side: isOpen ? "translate-x-0" : "-translate-x-full",
    top: isOpen ? "translate-y-0" : "-translate-y-full",
  };

  // console.log(data);(data);

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
            <div className="flex flex-col gap-4">
              {data?.data?.map((notification: any) => (
                <div key={notification.id} className="flex flex-col gap-1 p-2 border-b-[0.5px] border-[#e9e9ea]">
                  <div className="flex gap-2 w-full">
                    <CreditCard className="w-5 h-5 rounded-full" />
                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex flex-col gap-1">
                        <h1 className="text-sm text-[#4A4C56] font-medium">{notification.type}</h1>
                        <p className="text-xs text-[#777980]">{notification.message}</p>
                      </div>
                      <p className="text-xs font-medium text-[#4A4C56] text-right">
                        {moment(notification.created_at).format('hh:mm A • MM/DD/YYYY')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="read">
            <div className="flex flex-col gap-4 ">
              {data?.data?.filter((notification: any) => notification.read === true).map((notification: any) => (
                <div key={notification.id} className="flex flex-col gap-1 p-2 border-b-[0.5px] border-[#e9e9ea]">
                  <div className="flex gap-2 w-full">
                    <CreditCard className="w-5 h-5 rounded-full" />
                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex flex-col gap-1">
                        <h1 className="text-sm text-[#4A4C56] font-medium">{notification.type}</h1>
                        <p className="text-xs text-[#777980]">{notification.message}</p>
                      </div>
                      <p className="text-xs font-medium text-[#4A4C56] text-right">
                        {moment(notification.created_at).format('hh:mm A • MM/DD/YYYY')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="unread">
            <div className="flex flex-col gap-4 ">
              {data?.data?.filter((notification: any) => notification.read === false).map((notification: any) => (
                <div key={notification.id} className="flex flex-col gap-1 p-2 border-b-[0.5px] border-[#e9e9ea]">
                  <div className="flex gap-2 w-full">
                    {notification.type === "SUBSCRIPTION_PURCHASED" ? <CreditCard className="w-5 h-5 rounded-full" /> : <CreditCard className="w-5 h-5 rounded-full" />}
                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex flex-col gap-1">
                        <h1 className="text-sm text-[#4A4C56] font-medium">{notification.type}</h1>
                        <p className="text-xs text-[#777980]">{notification.message}</p>
                      </div>
                      <p className="text-xs font-medium text-[#4A4C56] text-right">
                        {moment(notification.created_at).format('hh:mm A • MM/DD/YYYY')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NotificationDrawer;
