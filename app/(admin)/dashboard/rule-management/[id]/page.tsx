"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const page = () => {
  const router = useRouter();
  return (
    <div>
      <div className="inline-block">
        <p
          onClick={() => router.back()}
          className="text-[14px] text-slate-500 font-medium cursor-pointer flex items-center gap-1 hover:text-slate-700 transition-all duration-300"
        >
          <FaArrowLeft color="gray" /> Back
        </p>
      </div>
      <div className="max-w-[820px]">
        <div className="flex justify-between items-center mt-5">
          <p className="text-[14px]  text-gray-400">Rule Heading</p>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-24 text-[12px] p-2 ">
              <button className="bg-[#d2d2d5] text-black cursor-pointer w-full mx-auto py-2 px-3 rounded text-start hover:opacity-80 transition-all duration-300 font-medium">
                Edit
              </button>
              <button className="bg-[#ef6471] text-white cursor-pointer w-full mx-auto py-2 px-3 rounded mt-2 text-start hover:opacity-80 transition-all duration-300 font-medium">
                Delete
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Input
          type="email"
          placeholder="Email"
          className="mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
        />
        <p className="text-[14px] mt-5 text-gray-400">Sub-Rule</p>
        <Textarea
          placeholder="Sub-Rule"
          className="ml-4 w-[98%] min-h-[300px] mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
        />
        <div className="flex justify-end mt-10 gap-4">
          <button className="px-6 py-2 text-[12px] border rounded text-gray-500 hover:bg-gray-100 transition-all duration-300">
            Save ad draft
          </button>
          <button className="px-6 py-2 text-[12px] border rounded bg-[#a5a5ab] text-white hover:opacity-80 transition-all duration-300">
            Add Rule
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
