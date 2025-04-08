"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomModal from "@/app/(admin)/_components/CustomModal";
import { Button } from "@/components/ui/button";
import {
  useDeleteRuleMutation,
  useUpdateRuleMutation,
} from "@/app/store/api/ruleApi";
import { toast } from "react-hot-toast"; // Import react-hot-toast

const page = () => {
  const params = useParams();
  const { id } = params;
  const router = useRouter();
  const [heading, setHeading] = React.useState("");
  const [subRule, setSubRule] = React.useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updateRule] = useUpdateRuleMutation();
  const [deleteRule] = useDeleteRuleMutation();

  const handleDelete = async () => {
    try {
      deleteRule(id)
        .unwrap()
        .then(() => {
          toast.success("Rule deleted successfully!"); // Show success toast
          setIsDeleteModalOpen(false);
          router.push("/dashboard/rule-management");
        });
    } catch (error) {
      console.error("Failed to delete rule:", error);
      toast.error("Failed to delete rule."); // Show error toast
    }
  };

  const handleUpdate = async () => {
    const payload = {
      id,
      data: {
        title: heading,
        description: subRule,
      },
    };

    try {
      await updateRule(payload).unwrap();
      setHeading("");
      setSubRule("");
      setIsUpdateModalOpen(false);
      toast.success("Rule updated successfully!"); // Show success toast
    } catch (error) {
      console.error("Failed to update rule:", error);
      toast.error("Failed to update rule.");
    }
  };

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
            <DropdownMenuContent className="lg:mr-24 mr-3 text-[12px] p-2 ">
              <button
                onClick={() => setIsUpdateModalOpen(true)}
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
          type="text"
          onChange={(e) => setHeading(e.target.value)}
          value={heading}
          placeholder="Heading"
          className="mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
        />
        <p className="text-[14px] mt-5 text-gray-400">Sub-Rule</p>
        <Textarea
          onChange={(e) => setSubRule(e.target.value)}
          value={subRule}
          placeholder="Sub-Rule"
          className="ml-4 w-[98%] min-h-[300px] mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
        />
        <div className="flex justify-end mt-10 gap-4">
          <Button
            onClick={() => setIsUpdateModalOpen(true)}
            className="px-6 py-2 text-[12px] border rounded bg-black text-white hover:opacity-80 transition-all duration-300"
          >
            Update
          </Button>
        </div>
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
