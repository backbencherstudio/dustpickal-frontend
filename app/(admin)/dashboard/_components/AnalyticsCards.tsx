"use client";
import React from "react";

const AnalyticsCards = () => {
  const cards = [
    {
      title: "Total Users",
      value: 123567,
    },
    {
      title: "Documents Analyzed",
      value: 3670,
    },
    {
      title: "Predefined Rules",
      value: 30,
    },
    {
      title: "User Created Rules",
      value: 670,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-white p-6 rounded-md shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px]">{card.title}</h3>
            <select
              className=" p-2 text-[14px] rounded-md border border-gray-300 bg-[#f8fafb]"
              value={null}
              onChange={() => {}}
            >
              <option value="1">Today</option>
              <option value="2">This Week</option>
              <option value="3">This Month</option>
              <option value="4">This Year</option>
            </select>
          </div>
          <p className="text-[28px] font-bold mt-10">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
