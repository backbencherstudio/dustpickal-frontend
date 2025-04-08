"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import CustomTable from "../_components/CustomTable";

const page = () => {
  const router = useRouter();
  const rulesData = [
    {
      sl: 1,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 2,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 3,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 4,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 5,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 6,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 7,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 8,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 9,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 10,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 11,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
    {
      sl: 12,
      rules: "IEC 62368-1 Safety Report Check",
      creationDate: "28/01/202025",
      lastModified: "12/06/2025",
    },
  ];

  const columns = [
    { label: "SL", accessor: "sl" },
    { label: "Rules", accessor: "rules" },
    { label: "Creation Date", accessor: "creationDate" },
    {
      label: "View",
      accessor: "view",
      customCell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/rule-management/${row.sl}`)}
            className=" hover:bg-gray-200 rounded-xl p-2"
          >
            <IoEyeOutline size={20} className="text-[#777980]" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <p
        onClick={() => router.push("/rule-management/addRule")}
        className="text-[14px] text-right text-[#A5A5AB] cursor-pointer hover:text-slate-900 mt-6 underline"
      >
        Add Rule
      </p>
      <Tabs defaultValue="info" className="w-full">
        {/* <TabsList className="flex justify-start w-full bg-transparent border-b-2 border-[#e9e9ea]">
            <TabsTrigger
              value="info"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[120px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
            >
              Published Rules
            </TabsTrigger>
            <TabsTrigger
              value="billings"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[100px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
            >
              Draft
            </TabsTrigger>
          </TabsList> */}

        <TabsContent value="info" className="">
          <CustomTable
            type="rule-management"
            title=""
            columns={columns}
            data={rulesData}
            filter={false}
          />
        </TabsContent>
        {/* <TabsContent value="billings" className="mt-6">
            <CustomTable
              type="user-management"
              title=""
              columns={[]}
              data={[]}
              filter={false}
            />
          </TabsContent> */}
      </Tabs>
    </div>
  );
};

export default page;
