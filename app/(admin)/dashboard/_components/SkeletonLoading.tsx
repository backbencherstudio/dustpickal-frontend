import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="animate-pulse min-h-[100vh]">
      {/* Analytics Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
            <div className="h-8 w-16 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 mt-6 gap-6">
        <div className="lg:col-span-3 bg-white p-6 rounded-xl">
          <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow lg:col-span-1">
          <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Second Row Charts Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-6 gap-6">
        <div className="bg-white p-4 rounded-xl shadow lg:col-span-3">
          <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow lg:col-span-2">
          <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Tables Skeleton */}
      <div className="grid grid-cols-2 mt-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="h-5 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="h-5 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
