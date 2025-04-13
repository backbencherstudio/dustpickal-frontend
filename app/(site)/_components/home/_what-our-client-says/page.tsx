import React from "react";
import { FaUser } from "react-icons/fa6";

const page = () => {
  const reviews = [
    {
      id: 1,
      text: `"Dustpickal has transformed our compliance process. The AI-driven analysis is spot on, and the custom rules have saved us countless hours. Highly recommend!"`,
      name: "John Doe",
      position: "CEO, Tech Solutions",
    },
    {
      id: 2,
      text: `"Using Dustpickal has been a game-changer for our team. The insights are incredibly accurate, and the platform is user-friendly. A must-have tool!"`,
      name: "Jane Smith",
      position: "Manager, Business Corp",
    },
    {
      id: 3,
      text: `"We’ve streamlined our workflow and reduced errors significantly thanks to Dustpickal. The AI-powered analysis is exceptional!"`,
      name: "Michael Brown",
      position: "Director, Innovate Inc",
    },
  ];

  return (
    <div className="bg-white mx-auto w-full py-24">
      <h1 className="text-3xl font-semibold text-center">
        What Our Client Says
      </h1>
      <div className="pt-15 max-w-[1112px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mx-auto relative">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-lg rounded-lg p-4 flex-1 relative z-10 mx-5 lg:mx-0"
            >
              <div className="border w-11 h-11 rounded-full flex items-center justify-center mt-2 mb-4 border-[#E9E9EA]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M19.5 19.269L15.9615 15.7305H2.30775C1.80258 15.7305 1.375 15.5555 1.025 15.2055C0.675 14.8555 0.5 14.4279 0.5 13.9227V2.53822C0.5 2.03305 0.675 1.60547 1.025 1.25547C1.375 0.905469 1.80258 0.730469 2.30775 0.730469H17.6923C18.1974 0.730469 18.625 0.905469 18.975 1.25547C19.325 1.60547 19.5 2.03305 19.5 2.53822V19.269ZM2.30775 14.2305H16.6L18 15.6152V2.53822C18 2.46122 17.9679 2.39072 17.9038 2.32672C17.8398 2.26255 17.7693 2.23047 17.6923 2.23047H2.30775C2.23075 2.23047 2.16025 2.26255 2.09625 2.32672C2.03208 2.39072 2 2.46122 2 2.53822V13.9227C2 13.9997 2.03208 14.0702 2.09625 14.1342C2.16025 14.1984 2.23075 14.2305 2.30775 14.2305Z"
                    fill="#E9E9EA"
                  />
                </svg>
              </div>
              <div className="h-[240px] flex flex-col justify-between">
                <p className="text-sm text-gray-600 h-52 overflow-hidden">
                  {review.text}
                </p>
                <div className="border-t pt-2">
                  <div className="flex items-center gap-2">
                    <div className="border h-11 w-11 rounded-full flex items-center justify-center border-[#E9E9EA] text-[#9f9fa1] bg-gray-100">
                      <FaUser size={20} />
                    </div>
                    <div>
                      <h3 className="">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
