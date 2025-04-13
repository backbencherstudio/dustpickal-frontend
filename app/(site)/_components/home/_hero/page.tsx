"use client";

import CustomImage from "@/components/reusable/CustomImage";
import Link from "next/link";
import heroBg from "@/public/assets/client/hero-bg.svg";
import Image from "next/image";
import landingBgVector from "@/public/assets/client/landing-bg-vector.svg";
import group from "@/public/assets/client/Group-2.svg";
import grid from "@/public/assets/client/Grid.svg";

export default function Hero() {
    return (
        <div className="relative -mt-10">
            {/* Background Images */}
            <div className="absolute inset-0 w-full">
                <Image
                    src={group}
                    alt="background"
                    className="w-full h-full object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="text-center flex flex-col gap-8">
                        <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#03377F] via-[#754499] to-[#F3411B]">
                                Analyze Your Documents with AI-Powered Precision
                            </h1>

                            <p className="text-lg md:text-[22px] text-[#4A4C56] font-normal">
                                Upload your reports, let AI detect issues, and get actionable insights—all in seconds.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/analyze/profile"
                                className="px-8 py-3 text-white rounded-[44.72px] border-[1.789px] border-[rgba(53,133,245,0.00)] text-sm md:text-xl font-normal transition-colors duration-300 bg-[radial-gradient(82.79%_50%_at_50%_50%,#0C58C1_0%,rgba(12,88,193,0.69)_100%)] shadow-[0px_8.944px_30.41px_0px_rgba(53,133,245,0.35)] backdrop-blur-[18.782px]"
                            >
                                Get Started
                            </Link>
                        </div>
                        <div>
                            <Image src={heroBg} alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
