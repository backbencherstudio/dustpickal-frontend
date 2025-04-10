"use client";
import CustomModal from "@/app/(admin)/_components/CustomModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const page = () => {
  const router = useRouter();
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [isDraftModalOpen, setIsDraftModalOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleAdd = () => {
    setIsAddModalOpen(false);
  };
  const handleDraft = () => {
    setIsDraftModalOpen(false);
  };
  return (
    <div>
      <div className="">
        <p className="text-[14px] mt-5 text-gray-400">Rule Heading</p>
        <Input
          type="text"
          placeholder="Rule Heading"
          className="mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
        />
        <p className="text-[14px] mt-5 text-gray-400">Sub-Rule</p>
        {/* show number of every line */}
        <Textarea
          placeholder="Sub-Rule"
          className="ml-4 min-h-[300px] mt-3 p-3 border-gray-300 shadow-none focus:border-[#f7f9fb] focus:ring focus:ring-gray-300 transition-colors duration-200"
          rows={10}
          value={value}
          onChange={(e) => {
            const lines = e.target.value.split("\n");
            const numberedLines = lines.map((line, index) => {
              // Remove any existing line numbers
              const cleanLine = line.replace(/^\d+\.\s*/, '');
              return `${index + 1}. ${cleanLine}`;
            });
            setValue(numberedLines.join("\n"));
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
