import React from "react";
import { Check, X } from "lucide-react";

const PricingTable = ({ data = [] }) => {
  const features = [
    {
      label: "Token",
      getValue: (plan) => plan.tokens,
    },
    {
      label: "Rule Apply",
      getValue: (plan) => plan.ruleApply,
    },
    {
      label: "Validation",
      getValue: (plan) => "1 Month",
    },
    {
      label: "Benefits",
      getValue: (plan) => plan.benifits,
    },
    {
      label: "Integrations",
      getValue: (plan) => plan.integrations,
    },
    {
      label: "Custom Rule",
      getValue: (plan) => plan.customRule,
    },
    {
      label: "Support",
      getValue: (plan) => plan.support,
    },
  ];

  return (
    <div className="w-full overflow-x-auto font-normal text-[14px]">
      <table className="w-full border-collapse">
        <thead>
          <tr className=" text-gray-500">
            <th className="p-3 text-left border-b w-1/12">Feature</th>
            {data.map((plan) => (
              <th key={plan.title} className="p-3 text-center border-b w-1/5">
                {plan.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.label} className="border-b">
              <td className="p-3  border-b">{feature.label}</td>
              {data.map((plan) => (
                <td key={plan.title} className="p-3 text-center border-b">
                  {typeof feature.getValue(plan) === "boolean" ? (
                    feature.getValue(plan) ? (
                      <Check
                        className="mx-auto text-green-500 border rounded-full p-0.5 border-green-500"
                        size={20}
                      />
                    ) : (
                      <X
                        className="mx-auto text-red-500 border rounded-full p-0.5 border-red-500"
                        size={20}
                      />
                    )
                  ) : (
                    feature.getValue(plan)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
