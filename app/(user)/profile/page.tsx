"use client";
import { LucideSquareUserRound, ArrowLeft } from "lucide-react";
import router from "next/router";
import React, { useState } from "react";
import ChangePasswordModal from "../_components/profile/changePasswordModal";
import { useAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import oneImg from "@/public/assets/client/mini-logo.png"

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editField, setEditField] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const { user } = useAuth();
  console.log(user);
  const handleEdit = (field) => {
    setEditField(field);
    setFormData({
      ...formData,
      [field]: field === "name" ? "name" : "", // Pre-fill name, but not password
    });
    setIsModalOpen(true);
  };
  const handleSubmit = (e) => {
    // Add this function
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="text-[14px] font-medium mx-10">
      <div className="border-b pb-2">
        <h1 className="text-[24px] text-gray-800">Profile</h1>
        <p className="text-gray-400 mt-1 text-[12px]">
          Update your profile image , password , etc.
        </p>
      </div>
      <div className="my-6">
        <button className="flex flex-row gap-1 items-center text-sm text-[#1D1F2C]" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4" /> <p className="text-sm font-medium">Back</p>
        </button>
      </div>
      <div className="flex items-center gap-4 mt-6">
        {user?.avatar ? <Image src={user?.avatar} alt="profile" width={80} height={80} /> : <LucideSquareUserRound size={80} color="gray" />}
        <div>
          <h1 className="text-[12px] text-zinc-700 ">Profile Name</h1>
          <p className="bg-white px-2 py-1 mt-2 rounded w-fit" style={{ boxShadow: '0px 0px 5px 0px rgba(112, 112, 112, 0.15) inset' }}>{user?.name ? user?.name : user?.email}</p>
        </div>
      </div>
      <p className="text-gray-500 mt-10 border-b pb-2">Account Security</p>
      <div className="mt-6">
        <p className="text-gray-700">Email</p>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-gray-500">{user?.email}</h1>
          {/* <div
            className="rounded px-3 p-1 border-2 text-gray-600 font-medium flex items-center justify-center cursor-pointer hover:bg-gray-100"
            onClick={() => handleEdit("email")}
          >
            <p className="">Change Email</p>
          </div> */}
        </div>
      </div>{" "}
      <div className="mt-6">
        <p className="text-gray-700 ">Password</p>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-gray-500">
            Change your password to login to your account.
          </h1>
          <div
            className="rounded px-3 p-1 border-2 text-gray-600 font-medium flex items-center justify-center cursor-pointer hover:bg-gray-100"
            onClick={() => handleEdit("password")}
          >
            <p className="">Change password</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ChangePasswordModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        // <div className="fixed inset-0 bg-[#0000008c] bg-opacity-50 flex items-center justify-center z-50">
        //   <div className="bg-white p-6 rounded-lg w-96">
        //     <h2 className="text-xl font-medium mb-4">
        //       Change {editField.charAt(0).toUpperCase() + editField.slice(1)}
        //     </h2>
        //     <form onSubmit={handleSubmit}>
        //       <input
        //         type={editField === "password" ? "password" : "text"}
        //         value={formData[editField]}
        //         onChange={(e) =>
        //           setFormData({ ...formData, [editField]: e.target.value })
        //         }
        //         className="w-full border rounded-lg px-3 py-2 mb-4"
        //         placeholder={`Enter new ${editField}`}
        //         required
        //         minLength={editField === "password" ? 8 : 2}
        //       />
        //       {editField === "password" && (
        //         <p className="text-sm text-gray-500 mb-4">
        //           Password must be at least 8 characters long
        //         </p>
        //       )}
        //       <div className="flex justify-end gap-2">
        //         <button
        //           type="button"
        //           onClick={() => {
        //             setIsModalOpen(false);
        //             setFormData({ name: "", password: "" });
        //           }}
        //           className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        //         >
        //           Cancel
        //         </button>
        //         <button
        //           type="submit"
        //           className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        //         >
        //           Save
        //         </button>
        //       </div>
        //     </form>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default page;
