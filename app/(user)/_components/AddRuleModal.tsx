"use client";
import CustomModal from "@/app/(admin)/_components/CustomModal";
import { useCreateRuleMutation } from "@/app/store/api/user/ruleApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const AddRuleModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const router = useRouter();
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [isDraftModalOpen, setIsDraftModalOpen] = React.useState(false);
  const [createRule, { isLoading }] = useCreateRuleMutation();  
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm();
  const onSubmit = async (data: any) => { 
    setIsAddModalOpen(false);
    try {
      const ruleData = {
        title: data.title,
        description: data.subRule,
      };
      const response = await createRule(ruleData);
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/rule-management");
      } else {
        toast.error(response.data.message);
      }
      onClose();
      reset();
    } catch (error: any) {
      console.error('Error creating rule:', error);
      toast.error(error.data?.message || "Failed to create rule");
    }
  };
  const handleDraft = () => {
    setIsDraftModalOpen(false);
  };
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl mx-auto bg-white rounded-lg p-4">
        <div className="flex justify-between items-center  pb-2 border-b-[0.5px] border-[#E9E9EA]">
          <h6 className="text-[#1D1F2C]">Create New Rules</h6>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
            <IoCloseOutline size={24} />
          </button>
        </div>
        <p className="text-[14px] mt-5 text-gray-400">Rule Heading</p>
        <Input
          type="text"
          placeholder="Rule Heading"
          className="mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
          {...register("title", { required: true })}
        />
        <p className="text-[14px] mt-5 text-gray-400">Sub-Rule</p>
        {/* show number of every line */}
        <Textarea
          placeholder="Sub-Rule"
          className=" min-h-[300px] mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
          rows={10}
          {...register("subRule", { required: true })}
          onChange={(e) => {
            const lines = e.target.value.split("\n");
            const numberedLines = lines.map((line, index) => {
              // Remove any existing line numbers
              const cleanLine = line.replace(/^\d+\.\s*/, '');
              return `${index + 1}. ${cleanLine}`;
            });
            setValue("subRule", numberedLines.join("\n"));
          }}
        />
        <div className="flex justify-end mt-10 gap-4">
          {/* <Button
            onClick={() => setIsDraftModalOpen(true)}
            className="px-6 py-2 text-[12px] border rounded text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all duration-300"
          >
            Save ad draft
          </Button> */}
          <Button
            disabled={false}
            type="submit"
            className={`px-6 py-2 text-[12px] border rounded bg-black text-white hover:opacity-80 transition-all duration-300 cursor-pointer`}
          >
            {isLoading ? "Adding..." : "Add Rule"}
          </Button>
        </div>
      </form>
      {/* <CustomModal
        type="add"
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onConfirm={onSubmit}
        title="Are you sure you want to add this rule?"
      /> */}
      {/* <CustomModal
        type="draft"
        isOpen={isDraftModalOpen}
        onClose={() => setIsDraftModalOpen(false)}
        onConfirm={handleDraft}
        title="Are you sure you want to save this rule as draft?"
      /> */}
    </div>
  );
};

export default AddRuleModal;
