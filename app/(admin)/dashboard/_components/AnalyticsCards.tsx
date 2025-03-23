"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
            <Select>
              <SelectTrigger className="w-[110px] bg-[#f8fafb]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Weekly</SelectItem>
                  <SelectItem value="month">Monthly</SelectItem>
                  <SelectItem value="year">Yearly</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <p className="text-[28px] font-bold mt-10">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
