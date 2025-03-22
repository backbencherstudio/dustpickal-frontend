"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { IoNotifications } from "react-icons/io5";

const AdminHeader = ({ pageTitle }: { pageTitle: string }) => {
  const router = useRouter();

  return (
    <div className="bg-white  px-8 py-4 flex justify-between items-center gap-4">
      <h1 className="text-[20px] lg:w-[200px]">{pageTitle}</h1>
      <div className="relative w-[50%] lg:w-full lg:max-w-[340px]">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search rules"
          className=" w-full border bg-[##f7f9fb] border-[#EAF1FF] rounded-lg p-2 pl-10"
        />
      </div>

      <div className="flex items-center gap-4">
        <div onClick={() => router.push("/admin/profile")}>Admin</div>
        <div
          onClick={() => router.push("/admin/profile")}
          className="w-10 h-10 border border-[#EAF1FF] bg-[#f6f8fa] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
        >
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
