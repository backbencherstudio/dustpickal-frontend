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
import { useUpdateRuleMutation, useGetRuleByIdQuery, useDeleteRuleMutation } from "@/app/store/api/user/ruleApi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Page = () => {
  const { id } = useParams();
  const [updateRule, { isLoading: isUpdating }] = useUpdateRuleMutation();
  const { data: ruleData, isLoading: isLoadingRule } = useGetRuleByIdQuery(id as string, {
    skip: !id,
  })
  const [deleteRule, { isLoading: isDeleting }] = useDeleteRuleMutation();
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm();
  const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const edit = urlParams.get("edit") || false;

    if (edit) {
      setIsEdit(true);
    }
  }, []);

  // Populate form with rule data when it's loaded
  useEffect(() => {
    if (ruleData?.data) {
      setValue("title", ruleData.data.title);
      setValue("subRule", ruleData.data.description);
    }
  }, [ruleData, setValue]);

  const handleDelete = async () => {
    setIsDeleteModalOpen(false);
    try {
      const response = await deleteRule(id as string);
      toast.success("Rule deleted successfully");
      router.push("/rule-management");
    } catch (error: any) {
      toast.error(error.data?.message || "Failed to delete rule");
    }
  };
  
  const handleUpdate = async (data: any) => {
    setIsUpdateModalOpen(false);
    try {
      const ruleData = {
        title: data.title,
        description: data.subRule,
      };
      const response = await updateRule({ id: id as string, data: ruleData });
      toast.success("Rule updated successfully");
      router.push("/rule-management");
    } catch (error: any) {
      console.error('Update failed:', error);
      toast.error(error.data?.message || "Failed to update rule");
    }
  };

  const editRule = () => {
    router.push(`/rule-management/${id}?edit=true`);
    setIsEdit(true);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = e.target.value.split("\n");
    const numberedLines = lines.map((line, index) => {
      // Remove any existing line numbers
      const cleanLine = line.replace(/^\d+\.\s*/, '');
      return `${index + 1}. ${cleanLine}`;
    });
    const numberedText = numberedLines.join("\n");
    setValue("subRule", numberedText);
  };

  if (isLoadingRule) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="">
          <div className="flex justify-between items-center mt-5">
            <p className="text-[14px] text-gray-400">Rule Heading</p>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="lg:mr-24 mr-3 text-[12px] p-2 ">
                <button
                  type="button"
                  onClick={editRule}
                  className="bg-[#d2d2d5] text-black cursor-pointer w-full mx-auto py-2 px-3 rounded text-start hover:opacity-80 transition-all duration-300 font-medium"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="bg-[#ef6471] text-white cursor-pointer w-full mx-auto py-2 px-3 rounded mt-2 text-start hover:opacity-80 transition-all duration-300 font-medium"
                >
                  Delete
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Input
            {...register("title", { required: true })}
            type="text"
            placeholder="Rule heading"
            className="mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
            disabled={!isEdit}
          />
          <p className="text-[14px] mt-5 text-gray-400">Sub-Rule</p>
          <Textarea
            placeholder="Sub-Rule"
            className="ml-4 w-[98%] min-h-[300px] mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
            rows={10}
            value={watch("subRule")}
            onChange={handleTextareaChange}
            disabled={!isEdit}
          />
          {isEdit && (
            <div className="flex justify-end mt-10 gap-4">
              <Button
                type="button"
                onClick={() => setIsUpdateModalOpen(true)}
                className="px-6 py-2 text-[12px] border rounded bg-black text-white hover:opacity-80 transition-all duration-300"
              >
                Update
              </Button>
            </div>
          )}
        </div>
      </form>
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
        onConfirm={handleSubmit(handleUpdate)}
        title="Are you sure you want to update changes?"
      />
    </div>
  );
};

export default Page;
