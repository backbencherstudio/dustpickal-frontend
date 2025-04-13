import Image from "next/image";
import React from "react";
import whatWeDo from "@/public/assets/client/whatWeDo.png";

const WhatWeDo = () => {
  return (
    <div className=" px-4 py-20 bg-white w-full">
      <div className="max-w-[1112px] mx-auto flex flex-col gap-10">
        <h3 className="text-2xl md:text-xl lg:text-3xl font-semibold text-center">
          What We Do?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="flex flex-col justify-center items-start gap-4">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              We help you to grow your business with our AI system.
            </h3>
            <p className="text-gray-600 text-sm">
              In today's fast-paced world, manual document review is
              time-consuming, error-prone, and resource-intensive.
            </p>
            <p className="text-gray-600 text-sm mt-5">
              Trust Scan changes the game with its powerful Document Analysis
              Engine, designed to streamline and automate compliance checks with
              precision and ease.
            </p>
          </div>
          <Image
            src={whatWeDo}
            alt="What We Do"
            className="w-full h-auto object-cover rounded-lg"
            width={1112}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
