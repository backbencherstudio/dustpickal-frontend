import React from "react";

import { Button } from "@/components/ui/button";

const PricingCards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.map((plan, index) => (
        <div
          key={plan.title}
          className={`p-4 h-[226px] relative text-start bg-white rounded-lg shadow shadow-gray-100 ${
            plan.recommended ? " shadow-purple-300 shadow-lg" : ""
          }`}
        >
          {plan.recommended && (
            <div className="border-orange-500 border rounded text-black absolute -top-3 from-purple-500 to-pink-500 bg-white px-1 text-center py-1 text-xs">
              Recommended
            </div>
          )}
          <div>
            <div className="font-medium">{plan.title}</div>
          </div>
          <div className="mt-3 ">
            <div className="text-[24px] font-semibold ">
              {plan.price}{" "}
              <span className="text-[16px] text-gray-500 font-medium">
                / {plan.tokens}
              </span>
            </div>
            <div className="text-sm text-gray-600 mt-1 font-medium">
              {plan.duration}
            </div>

            {plan.annualDiscount && (
              <div className="text-xs text-gray-600 mt-4">
                Purchase annually and
                <p className="text-green-500">
                  save {plan.annualDiscount.percentage}% -{" "}
                  {plan.annualDiscount.amount}
                </p>
              </div>
            )}
          </div>
          <div>
            <Button
              className={`w-[90%] hover:opacity-90 mx-auto absolute bottom-4 rounded-sm bg-[#4a4c56] ${
                plan.recommended &&
                "bg-gradient-to-t from-[#f68c5a] to-[#9859ec]"
              } text-white`}
            >
              {plan.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
