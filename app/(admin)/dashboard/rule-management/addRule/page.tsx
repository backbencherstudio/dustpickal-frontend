"use client";
import CustomModal from "@/app/(admin)/_components/CustomModal";
import { useCreateRuleMutation } from "@/app/store/api/ruleApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";

const page = () => {
  const [heading, setHeading] = React.useState("");
  const [subRule, setSubRule] = React.useState("");
  const router = useRouter();
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [isDraftModalOpen, setIsDraftModalOpen] = React.useState(false);
  const [createRule] = useCreateRuleMutation(); // Correctly destructure the mutation function

  const handleAdd = async () => {
    const data = {
      title: heading,
      description: subRule,
    };
    try {
      await createRule(data).unwrap();
      setHeading("");
      setSubRule("");
      setIsAddModalOpen(false);
      toast.success("Rule added successfully!");
      router.push("/dashboard/rule-management");
    } catch (error) {
      console.error("Failed to create rule:", error);
      toast.error("Failed to create rule.");
    }
  };

  const handleDraft = async () => {
    const data = {
      title: heading,
      description: subRule,
      is_draft: true,
    };
    try {
      await createRule(data).unwrap();
      setHeading("");
      setSubRule("");
      setIsDraftModalOpen(false);
      toast.success("Rule save as draft!");
      router.push("/dashboard/rule-management");
    } catch (error) {
      console.error("Failed to create rule:", error);
      toast.error("Failed to create rule.");
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
        <p className="text-[14px] mt-5 text-gray-400">Rule Heading</p>
        <Input
          type="text"
          onChange={(e) => setHeading(e.target.value)}
          value={heading}
          placeholder="Heading"
          className="mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
        />
        <p className="text-[14px] mt-5 text-gray-400">Sub-Rule</p>
        <Textarea
          placeholder="Sub-Rule"
          onChange={(e) => setSubRule(e.target.value)}
          value={subRule}
          className="ml-4 w-[98%] min-h-[300px] mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
        />
        <div className="flex justify-end mt-10 gap-4">
          <Button
            onClick={() => setIsDraftModalOpen(true)}
            className="px-6 py-2 text-[12px] border rounded text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all duration-300"
          >
            Save as draft
          </Button>
          <Button
            disabled={!heading || !subRule}
            onClick={() => setIsAddModalOpen(true)}
            className={`px-6 py-2 text-[12px] border rounded bg-black text-white hover:opacity-80 transition-all duration-300 cursor-pointer`}
          >
            Add Rule
          </Button>
        </div>
      </div>
      <CustomModal
        type="add"
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onConfirm={handleAdd}
        title="Are you sure you want to add this rule?"
      />
      <CustomModal
        type="draft"
        isOpen={isDraftModalOpen}
        onClose={() => setIsDraftModalOpen(false)}
        onConfirm={handleDraft}
        title="Are you sure you want to save this rule as draft?"
      />
    </div>
  );
};

export default page;
