"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import CustomTable from "../_components/CustomTable";
import { useGetAllRulesQuery } from "@/app/store/api/user/ruleApi";
const page = () => {
  const router = useRouter();
  const { data: rules, isLoading } = useGetAllRulesQuery();
  
  // Process the rules data to match the table format
  const rulesData = rules?.data?.userRules?.map((rule, index) => ({
    sl: index + 1,
    rules: rule.title,
    creationDate: new Date(rule.published_date).toLocaleDateString(),
    lastModified: new Date(rule.last_modified).toLocaleDateString(),
    id: rule.id
  }));

  console.log(rules?.data?.userRules);
  
  useEffect(() => {
    getRulesData();
  }, []);

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
            onClick={() => router.push(`/rule-management/${row.id}`)}
            className=" hover:bg-gray-200 rounded-xl p-2"
          >
            <IoEyeOutline size={20} className="text-[#777980]" />
          </button>
        </div>
      ),
    },
  ];

  const getRulesData = async () => {
    try {
      if (rules) {
        console.log('Rules data:', rules);
      }
    } catch (error) {
      console.error('Error fetching rules:', error);
    }
  };

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
