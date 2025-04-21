"use client";
import React from "react";
import { FiUsers } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuUserRoundPen } from "react-icons/lu";
const AnalyticsCards = ({ data }) => {
  // // console.log(data);(data);
  const cards = [
    {
      title: "Total Users",
      value: data?.totalUsers,
      icon: <FiUsers size={20} />,
    },
    {
      title: "Documents Analyzed",
      value: data?.analyzedDocuments,
      icon: <IoDocumentTextOutline size={20} />,
    },
    {
      title: "Predefined Rules",
      value: data?.mostUsagePreDefinedRules?.length,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 20 20"
          fill="none"
        >
          <mask
            id="mask0_5474_10712"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <rect width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_5474_10712)">
            <path
              d="M3.38086 17.2916V16.0416H12.9642V17.2916H3.38086ZM8.21732 12.9934L3.79753 8.57364L5.25898 7.07052L9.72044 11.4903L8.21732 12.9934ZM13.1565 8.05427L8.73669 3.59281L10.2398 2.13135L14.6596 6.55114L13.1565 8.05427ZM17.1661 16.378L6.57961 5.79156L7.45773 4.91343L18.0442 15.4999L17.1661 16.378Z"
              fill="#A5A5AB"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "User Created Rules",
      value: data?.userRules,
      icon: <LuUserRoundPen size={20} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white p-6 rounded-md shadow text-[#929294]"
        >
          {card.icon}
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] mt-3">{card.title}</h3>
          </div>
          <p className="text-[28px] font-bold mt-7 text-gray-800">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;
