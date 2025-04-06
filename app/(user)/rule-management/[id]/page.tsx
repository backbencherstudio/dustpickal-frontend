"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import CustomModal from "../../_components/CustomModal";
const page = () => {
  const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  console.log(id);

  const urlParams = new URLSearchParams(window.location.search);
  const edit = urlParams.get("edit") || false;
  
  useEffect(() => {
    editRule()
    if (edit) {
      setIsEdit(true);
    }
  }, [edit, isEdit]);
  
  const handleDelete = () => {
    setIsDeleteModalOpen(false);
  };
  const handleUpdate = () => {
    setIsUpdateModalOpen(false);
  };

  const editRule = () => {
    router.push(`/rule-management/${id}?edit=true`);
  };

  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center mt-5">
          <p className="text-[14px]  text-gray-400">Rule Heading</p>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="lg:mr-24 mr-3 text-[12px] p-2 ">
              <button
                onClick={editRule}
                className="bg-[#d2d2d5] text-black cursor-pointer w-full mx-auto py-2 px-3 rounded text-start hover:opacity-80 transition-all duration-300 font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="bg-[#ef6471] text-white cursor-pointer w-full mx-auto py-2 px-3 rounded mt-2 text-start hover:opacity-80 transition-all duration-300 font-medium"
              >
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
          rows={10}
          value={value}
          onChange={(e) => {
            const lines = e.target.value.split("\n");
            const numberedLines = lines.map((line, index) => {
              const cleanLine = line.replace(/^\d+\.\s*/, '');
              return `${index + 1}. ${cleanLine}`;
            });
            setValue(numberedLines.join("\n"));
          }}
        />
        {isEdit && (
          <div className="flex justify-end mt-10 gap-4">
            <Button
              onClick={() => setIsUpdateModalOpen(true)}
            className="px-6 py-2 text-[12px] border rounded bg-black text-white hover:opacity-80 transition-all duration-300"
          >
            Update
            </Button>
          </div>
        )}
      </div>
      <CustomModal
        type="delete"
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Are you sure you want to delete this rule?"
      />
      <CustomModal
        type="update"
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onConfirm={handleUpdate}
        title="Are you sure you want to update changes?"
      />
    </div>
  );
};

export default page;
