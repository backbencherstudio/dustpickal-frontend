"use client";
import CopyLink from "@/app/(admin)/_components/CopyLink";
import CustomTable from "@/app/(admin)/_components/CustomTable";
import { useGetUserInfoQuery } from "@/app/store/api/userApi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { IoMdCopy } from "react-icons/io";

const page = () => {
  const params = useParams();
  const { id } = params;
  const [activeTab, setActiveTab] = useState("info");
  const { data, isLoading, isError } = useGetUserInfoQuery({
    id: id,
  });

  if (isLoading) {
    return (
      <div>
        {/* Header placeholder */}
        <div className="bg-[#e9e9ea] h-12 rounded animate-pulse"></div>

        {/* User info header placeholder */}
        <div className="flex justify-between items-center mr-10">
          <div>
            <div className="mt-10 h-6 w-32 bg-gray-200 rounded mx-4 animate-pulse"></div>
            <div className="h-5 w-56 bg-gray-200 rounded mx-4 mt-2 animate-pulse"></div>
          </div>
          <div className="mt-5">
            <div className="bg-gray-200 h-8 w-36 rounded-md animate-pulse"></div>
          </div>
        </div>

        {/* Tabs placeholder */}
        <div className="mt-5 mx-4">
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="flex justify-start w-full bg-transparent border-b-2 border-[#e9e9ea]">
              <TabsTrigger
                value="info"
                className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[120px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
              >
                User Information
              </TabsTrigger>
              <TabsTrigger
                value="billings"
                className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[100px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
              >
                Billings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
                <div className="space-y-4">
                  {/* Create 7 skeleton items to match userInfo array length */}
                  {Array(7)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2"
                      >
                        <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-5 w-28 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ))}
                </div>
                <div>{/* Right side content placeholder */}</div>
              </div>
            </TabsContent>

            <TabsContent value="billings" className="mt-6">
              {/* Billing tab skeleton */}
              <div className="w-full h-64 bg-gray-100 rounded animate-pulse"></div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div className="p-4 text-red-500">Failed to load user data.</div>;
  }

  const userInfo = [
    { label: "User ID", value: data?.user_information?.user_id },
    {
      label: "Registration Date",
      value: data?.user_information?.registration_date
        ? format(
            new Date(data.user_information.registration_date),
            "dd MMMM yyyy"
          )
        : "N/A",
    },
    {
      label: "Last Active",
      value: data?.user_information?.last_active
        ? format(new Date(data.user_information.last_active), "dd MMMM yyyy")
        : "N/A",
    },
    {
      label: "Document Analyzed",
      value: data?.user_information?.documents_analyzed || "N/A",
    },
    {
      label: "Custom Rules",
      value: data?.user_information?.custom_rules || "N/A",
    },
    {
      label: "Subscription Plan",
      value: data?.user_information?.subscription
        ? `${data.user_information.subscription.plan || "N/A"} (${
            data.user_information.subscription.billing_cycle || "N/A"
          })`
        : "N/A",
    },
    {
      label: "Subscription Status",
      value: data?.user_information?.subscription?.status || "N/A",
    },
  ];

  return (
    <div>
      <div className="bg-[#e9e9ea] h-12 rounded"></div>
      <div className="flex justify-between items-center mr-10">
        <div>
          <h1 className="mt-10 text-[16px] mx-4">
            {data?.personal_info?.full_name}
          </h1>
          <p className="text-[12px] mx-4 text-[#4A4C56]">
            {data?.personal_info?.email}
          </p>
        </div>
        <div className="text-[14px] mt-5">
          {activeTab === "info" ? (
            <CopyLink id={id} />
          ) : (
            <div className="">
              <div className="flex items-center gap-2">
                <p className="font-semibold">Pro</p>
                <p className="bg-white px-2 py-1 rounded-md border border-[#d2d2d5] cursor-pointer flex items-center gap-2">
                  Yearly Billed
                </p>
              </div>
              <p className="text-[14px] text-[#4A4C56] ">
                Next Payment : Dec 25
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 mx-4 ">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="flex justify-start w-full bg-transparent border-b-2 border-[#e9e9ea]">
            <TabsTrigger
              onClick={() => setActiveTab("info")}
              value="info"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[120px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
            >
              User Information
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("billings")}
              value="billings"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[100px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#a5a5ab] cursor-pointer"
            >
              Billings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
              <div className="space-y-4">
                {userInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2"
                  >
                    <div className="text-[14px] text-[#4A4C56] flex justify-between w-[40%]">
                      <p> {info.label} </p>
                      <p> :</p>
                    </div>
                    <p className={`text-[14px] font-medium`}>{info.value}</p>
                  </div>
                ))}
              </div>

              <div>{/* Right side content */}</div>
            </div>
          </TabsContent>
          <TabsContent value="billings" className="mt-6">
            <CustomTable
              type="user-management"
              title=""
              columns={[]}
              data={[]}
              filter={false}
              onPageChange={() => {}}
              paginationData={{}}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
