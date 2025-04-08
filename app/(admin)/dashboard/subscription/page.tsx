"use client";
import CustomTable from "@/app/(admin)/_components/CustomTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import PricingCards from "./_components/PricingCards";
import PricingTable from "./_components/PricingTable";
import { useRouter } from "next/navigation";

const page = () => {
  const [activeTab, setActiveTab] = useState("all");
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("tab", "Support");
  }, []);
  const pricingData = [
    {
      title: "Pay-As-You-Go",
      price: "$0.50",
      tokens: "15k Token",
      duration: "One document of 5 page",
      buttonText: "Get Started",
      recommended: false,
      annualDiscount: null,
      benifits: "",
      integrations: false,
      customRule: false,
      support: "Via Website",
      ruleApply: "1",
    },
    {
      title: "Basic Plan",
      price: "$10",
      tokens: "250k Token",
      duration: "1 month of validation",
      buttonText: "Get Started",
      recommended: false,
      annualDiscount: {
        percentage: 20,
        amount: "$36",
      },
      benifits: "Essential Features",
      integrations: false,
      customRule: true,
      support: "Via Website",
      ruleApply: "5",
    },
    {
      title: "Pro Plan",
      price: "$37.5",
      tokens: "1M Token",
      duration: "1 month of validation",
      buttonText: "Get Started",
      recommended: true,
      annualDiscount: {
        percentage: 20,
        amount: "$336",
      },
      benifits: "Custom Features",
      integrations: true,
      customRule: true,
      support: "Priority Customer Support (faster responses)",
      ruleApply: "15",
    },
    {
      title: "Enterprise Plan",
      price: "$75",
      tokens: "2.5M Token",
      duration: "1 month of validation",
      buttonText: "Get Started",
      recommended: false,
      annualDiscount: {
        percentage: 20,
        amount: "$576",
      },
      benifits: "Premium Features",
      integrations: true,
      customRule: true,
      support: "Dedicated Account Manager",
      ruleApply: "Unlimited",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div></div>
        <div className="mt-5 lg:mx-4 p-5 pt-2 lg:col-span-11">
          <div className="flex justify-between items-center border-b pb-2">
            <h1 className="text-[14px] text-gray-800 my-4 flex items-center gap-2">
              You can have max 4 plan
            </h1>
            <button
              onClick={() => router.push("/dashboard/subscription/add-plan")}
              className="bg-black text-gray-200 rounded px-4 py-1 hover:opacity-85"
            >
              Admin Access
            </button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-[#f7f9fb] border-[#e9e9ea] rounded-none w-full flex justify-start px-7 mt-10">
              <TabsTrigger
                onClick={() => setActiveTab("all")}
                value="all"
                className="data-[state=active]:text-white text-black data-[state=active]:bg-black bg-[#e9e9ea] data-[state=active]:border-b-2 max-w-[50px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none  px-4 py-2 mb-3 cursor-pointer rounded shadow"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                onClick={() => setActiveTab("read")}
                value="read"
                className="data-[state=active]:text-white text-black data-[state=active]:bg-black bg-[#e9e9ea] data-[state=active]:border-b-2 max-w-[70px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none  px-4 py-2 mx-3 mb-3 cursor-pointer rounded shadow"
              >
                Read
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <PricingCards data={pricingData} />
            </TabsContent>
            <TabsContent value="read">
              <CustomTable
                type="user-management"
                title=""
                columns={[]}
                data={[]}
                filter={false}
                pagination={{
                  currentPage: 1,
                  totalPages: 1,
                  onPageChange: () => {},
                  limit: 10,
                  onLimitChange: () => {},
                }}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <PricingTable data={pricingData} />
    </div>
  );
};

export default page;
