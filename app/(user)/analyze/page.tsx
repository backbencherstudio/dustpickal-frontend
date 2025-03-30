"use client"
import Image from "next/image";
import { Upload } from "lucide-react";
import miniLogo from "@/public/assets/client/mini-logo.png"
import artWork from "@/public/assets/client/artwork.svg"
import Document from "@/public/assets/client/icons/document.svg"
import Analyze from "@/public/assets/client/icons/analyze.svg"
import Results from "@/public/assets/client/icons/result.svg"
import { useState } from "react";
const steps = [
    {
        id: "01",
        title: "Upload Document",
        icon: Document
    },
    {
        id: "02",
        title: "Analyze",
        icon: Analyze
    },
    {
        id: "03",
        title: "Results",
        icon: Results
    }
];

export default function AnalyzePage() {
    const [file, setFile] = useState<File | null>(null);
    return (
        <div className="relative min-h-screen">
            {/* Background Pattern with Centered Logo */}
            <div className="absolute top-0 left-0 w-full max-w-full mx-auto h-[300px]">
                {/* Wavy Background */}
                <Image
                    src={artWork}
                    alt="Background Pattern"
                    width={1440}
                    height={200}
                    className="w-full absolute top-0"
                />

                {/* Gradient Background */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 98, 210, 0.8) 0%, rgba(255, 167, 212, 0.4) 50%, rgba(183, 93, 93, 0) 100%)"
                    }}
                ></div>

                {/* Centered Logo */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-xl flex items-center justify-center z-10 bg-gradient-to-r from-[#8C52FF] to-[#FF914D] p-[1px]">
                    <div className="relative w-28 h-28 flex items-center justify-center bg-white rounded-full">
                        <Image
                            src={miniLogo}
                            alt="TrustScan Logo"
                            width={100}
                            height={100}
                            className="object-contain w-14 h-16"
                        />
                    </div>
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col gap-24">
                    {/* Header Section */}
                    <div className="text-center mb-16 pt-56">
                        <h1 className="text-[32px] font-semibold mb-4">TrustScan Your Document Analyzer</h1>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            TrustScan empowers you to enhance accuracy, streamline processes, and build trust in every
                            document, ensuring your operations are efficient, reliable, and future-ready.
                        </p>
                    </div>

                    {/* Steps Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
                        {steps.map((step) => (
                            <div key={step.id} className="">
                                <div className="text-sm text-[#1D1F2C]  mb-2">Step -{step.id}</div>
                                <div className={`${step.id === "01" ? "bg-[#D3F4EF]" : step.id === "02" ? "bg-[#B7E7FF]" : "bg-[#F9EEE8]"} backdrop-blur-sm rounded-lg p-8 text-center h-full flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow`}>
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                                        <Image
                                            src={step.icon}
                                            alt={step.title}
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <h3 className="text-base font-medium">{step.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upload Section */}
                <div className="border border-[#E9E9EA] backdrop-blur-sm rounded-xl p-8 shadow-sm">
                    <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Uploaded Document</h4>
                    </div>
                    <div className="bg-[#F8FAFB] border-2 border-dashed border-gray-200 rounded-xl p-8 transition-colors hover:border-indigo-500/50">
                        <div className="text-center">
                            <p className="text-gray-600 mb-1">
                                Drop file or{" "}
                                <button className="text-[#24A4FF] hover:text-indigo-600 font-medium underline">
                                    Browse
                                </button>
                            </p>
                            <p className="text-sm text-[#A5A5AB]">
                                Format: pdf, word & Max file size: 100 MB
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}