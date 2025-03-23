import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-[#e9e9ea] h-12 rounded"></div>
      <h1 className="mt-10 text-[16px] mx-4">Stive Smith</h1>
      <p className="text-[12px] mx-4 text-[#4A4C56]">stive.smith@gmail.com</p>

      <div className="mt-5 mx-4 ">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="flex justify-start w-full bg-transparent border-b-2 border-[#e9e9ea]">
            <TabsTrigger
              value="info"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[200px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#4A4C56]"
            >
              User Information
            </TabsTrigger>
            <TabsTrigger
              value="billings"
              className="data-[state=active]:text-[#1d1f2c] data-[state=active]:border-b-2 max-w-[200px] data-[state=active]:border-b-[#1d1f2c] data-[state=active]:shadow-none data-[state=active]:bg-transparent py-4 rounded-none text-[#4A4C56]"
            >
              Billings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="mt-6">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="billings" className="mt-6">
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
