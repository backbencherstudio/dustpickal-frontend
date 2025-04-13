import React from "react";

const OptimizeReport = () => {
  return (
    <div
      className="text-center py-20 px-4"
      style={{
        background: "linear-gradient(to bottom, #a962d3, #c873a4)",
      }}
    >
      <div className="max-w-[880px] mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="49"
          viewBox="0 0 47 49"
          fill="none"
        >
          <path
            d="M26.9057 4.11967C26.4729 2.60678 25.1158 1.5 23.5 1.5C21.8842 1.5 20.5271 2.60678 20.0943 4.11968C18.6612 9.12966 16.8437 12.5605 14.4304 15.0915C12.0213 17.6181 8.76464 19.5141 4.01074 21.0098C2.48147 21.491 1.5 22.9356 1.5 24.5C1.5 26.0644 2.48147 27.509 4.01074 27.9902C8.76464 29.4859 12.0213 31.3818 14.4304 33.9085C16.8437 36.4395 18.6612 39.8703 20.0943 44.8803C20.5271 46.3932 21.8842 47.5 23.5 47.5C25.1158 47.5 26.4729 46.3932 26.9057 44.8803C28.3388 39.8703 30.1563 36.4395 32.5695 33.9085C34.9787 31.3818 38.2354 29.4859 42.9893 27.9902C44.5185 27.509 45.5 26.0644 45.5 24.5C45.5 22.9356 44.5185 21.491 42.9893 21.0098C38.2354 19.5141 34.9787 17.6181 32.5695 15.0915C30.1563 12.5605 28.3388 9.12966 26.9057 4.11968L25.4635 4.5322L26.9057 4.11967Z"
            fill="url(#paint0_linear_5296_47480)"
            stroke="white"
            stroke-width="3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5296_47480"
              x1="3"
              y1="3"
              x2="23.8701"
              y2="53.7734"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#8C52FF" />
              <stop offset="1" stop-color="#FF914D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className="text-[32px] lg:text-[48px] font-semibold text-white mb-4 mx-w-[820px] text-center">
        Ready to Optimize Your Reports?
      </h1>
      <p className="text-white text-base max-w-[730px] text-center mx-auto">
        Upload your documents, apply smart rules, and get instant failure
        insights with AI-powered analysis. Stay compliant, reduce errors, and
        streamline your workflow today!
      </p>
      <button
        className="px-18 py-3 text-white font-medium rounded-full mt-16"
        style={{
          background: "linear-gradient( #61d1ff, #0d85ff)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default OptimizeReport;
