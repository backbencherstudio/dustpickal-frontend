import Image from "next/image";
import fastAndAccurate from "@/public/assets/client/icons/fast.svg";
import customRules from "@/public/assets/client/icons/write.svg";
import failureSummary from "@/public/assets/client/icons/failure.svg";
import secureAndPrivate from "@/public/assets/client/icons/secure.svg";

export default function WhyTrustScan() {
  return (
    <div className="max-w-[960px] mx-auto px-4 lg:px-0 py-10 flex flex-col gap-12">
      <h1 className="text-3xl font-semibold text-[#0F4487] text-center">Why Trust Scan?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center">
        <div className="w-full flex flex-col gap-6 bg-[#EBF6FC] p-12 rounded-4xl">
          <Image src={fastAndAccurate} alt="fast-and-accurate" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium text-[#1D1F2C]">
              Fast & Accurate
            </p>
            <p className="text-base font-normal text-[#4A4C56]">
              Get results instantly with AI-driven analysis.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 bg-[#EBD9F1] p-12 rounded-4xl">
          <Image src={customRules} alt="fast-and-accurate" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium text-[#1D1F2C]">
              Custom Rules
            </p>
            <p className="text-base font-normal text-[#4A4C56]">
              Use predefined rules or create your own.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 bg-[#F1F1F1] p-12 rounded-4xl">
          <Image src={failureSummary} alt="fast-and-accurate" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium text-[#1D1F2C]">
              Failure Summary
            </p>
            <p className="text-base font-normal text-[#4A4C56]">
              See only what’s wrong, skip what’s right.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 bg-[#F9EEE8] p-12 rounded-4xl">
          <Image src={secureAndPrivate} alt="fast-and-accurate" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium text-[#1D1F2C]">
              Secure & Private
            </p>
            <p className="text-base font-normal text-[#4A4C56]">
              Your data stays encrypted and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
