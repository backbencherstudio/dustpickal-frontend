import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="max-w-[960px] mx-auto px-4 lg:px-0 py-10 flex flex-col gap-12">
      <h1 className="text-3xl font-semibold text-[#0F4487] text-center">
        How It Works?
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="w-full p-6 flex flex-col gap-8 items-center">
          <div className="w-full flex flex-col justify-center items-center max-w-[90px] max-h-[90px] p-[3px] border border-[#E9E9E9] rounded-lg">
            <p className="text-[#E9E9EA] text-2xl font-medium px-[37px] py-[26px] bg-[#34A6DF] rounded-lg">1</p>
          </div>
          <div className="flex flex-col gap-2 items-center h-[120px]">
            <p className="text-[#1D1F2C] text-xl font-medium text-center">
              Instant Analysis
            </p>
            <p className="text-[#4A4C56] text-sm font-normal text-center">
              Get results instantly with AI-driven analysis.
            </p>
          </div>
        </div>
        <div className="border border-dashed md:w-96 h-[200px] md:h-[2px] text-[#DBDBDB] md:mt-16 "></div>
        <div className="w-full p-6 flex flex-col gap-8 items-center">
          <div className="w-full flex flex-col justify-center items-center max-w-[90px] max-h-[90px] p-[3px] border border-[#E9E9E9] rounded-lg">
            <p className="text-[#E9E9EA] text-2xl font-medium px-[37px] py-[26px] bg-[#FF914D] rounded-lg">2</p>
          </div>
          <div className="flex flex-col gap-2 items-center h-[120px]">
            <p className="text-[#1D1F2C] text-xl font-medium text-center">
              Compliance Check
            </p>
            <p className="text-[#4A4C56] text-sm font-normal text-center">
              Select predefined rules to ensure product compliance with regulations and standards.
            </p>
          </div>
        </div>
        <div className="border border-dashed md:w-96 h-[200px] md:h-[2px] text-[#DBDBDB] md:mt-16 "></div>
        <div className="w-full p-6 flex flex-col gap-8 items-center">
          <div className="w-full flex flex-col justify-center items-center max-w-[90px] max-h-[90px] p-[3px] border border-[#E9E9E9] rounded-lg">
            <p className="text-[#E9E9EA] text-2xl font-medium px-[37px] py-[26px] bg-[#8C52FF] rounded-lg">3</p>
          </div>
          <div className="flex flex-col gap-2 items-center h-[120px]">
            <p className="text-[#1D1F2C] text-xl font-medium text-center">
              Custom Rules
            </p>
            <p className="text-[#4A4C56] text-sm font-normal text-center">
              Create custom rules tailored to their industry's unique requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
