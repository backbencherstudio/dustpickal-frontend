import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Instant Analysis",
      description: "Fill out a quick form to see if we're a good fit.",
    },
    {
      id: 2,
      title: "Compliance Check",
      description: "We analyze your business & craft the perfect strategy.",
    },
    {
      id: 3,
      title: "Custom Rules",
      description:
        "Our AI system starts running, and you watch leads turn into customers.",
    },
  ];

  return (
    <div className="bg-[#212433] mx-auto w-full py-24">
      <h1 className="text-3xl font-semibold text-white text-center">
        How It Works?
      </h1>
      <div className="pt-14 max-w-[872px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mx-auto relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Card */}
              <div className="bg-white rounded-lg p-6 flex-1 relative z-10 mx-5 lg:mx-0">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-4 border-2 border-[#1d1f2c]"
                  style={{
                    background: "radial-gradient(circle, #1d1f2c, #5c5d67)",
                  }}
                >
                  <span className="text-white font-medium">{step.id}</span>
                </div>
                <h3 className="text-[20px] font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-[43%] w-[100px] h-[28px] bg-white"
                  style={{
                    left: `${27 + index * 33}%`,
                  }}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
