"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import NotificationDrawer from "./NotificationDrawer";

const AdminHeader = () => {
  const pageTitle = usePathname();
  const router = useRouter();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <>
      <div className="bg-white pl-8 lg:pl-16 py-4 flex justify-between items-center gap-4">
        <h1 className="text-[20px] lg:w-[200px] ">
          {pageTitle?.split("/dashboard/")[1] &&
          !pageTitle.split("/dashboard/")[1].includes("/")
            ? pageTitle
                .split("/dashboard/")[1]
                .split("-")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")
            : ""}
        </h1>
        <div className="relative w-[50%] lg:w-full lg:max-w-[340px] hidden lg:block">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search rules"
            className=" w-full border bg-[##f7f9fb] border-[#EAF1FF] rounded-lg p-2 pl-10"
          />
        </div>

        <div className="flex items-center gap-4 mr-16 lg:mr-8">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <IoMdNotificationsOutline size={20} />
          </button>
          <div
            className="hidden lg:block"
            onClick={() => router.push("/dashboard/profile")}
          >
            Admin
          </div>
          <div
            onClick={() => router.push("/dashboard/profile")}
            className="w-10 h-10 border border-[#EAF1FF] bg-[#f6f8fa] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
          >
            <FaUser />
          </div>
        </div>
      </div>

      <NotificationDrawer
        position="top"
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
    </>
  );
};

export default AdminHeader;
