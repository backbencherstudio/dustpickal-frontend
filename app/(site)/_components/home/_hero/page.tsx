"use client";

import CustomImage from "@/components/reusable/CustomImage";
import Link from "next/link";
import heroBg from "@/public/assets/client/HeroInterface.png";
import user1 from "@/public/assets/client/img1.svg";
import user2 from "@/public/assets/client/img2.svg";
import user3 from "@/public/assets/client/img3.svg";
import Image from "next/image";
import landingBgVector from "@/public/assets/client/landing-bg-vector.svg";
import group from "@/public/assets/client/Group-2.svg";
import grid from "@/public/assets/client/Grid.svg";

export default function Hero() {
  return (
    <div className="relative -mt-10  bg-gradient-to-t from-[#ffffff] via-[#dcf5f9] to-[#e7f9f9]">
      {/* Background Images */}
      <div className="absolute inset-0 w-full">
        <Image
          src={group}
          alt="background"
          className="w-full h-full object-cover opacity-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center flex flex-col gap-8">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="233"
                height="51"
                viewBox="0 0 233 51"
                fill="none"
              >
                <g filter="url(#filter0_d_5296_47577)">
                  <path
                    d="M231 46H184.076C172.478 46 163.076 36.598 163.076 25V25C163.076 13.402 153.674 4 142.076 4H2"
                    stroke="url(#paint0_linear_5296_47577)"
                    stroke-width="1.5"
                    shape-rendering="crispEdges"
                  />
                </g>
                <g filter="url(#filter1_d_5296_47577)">
                  <rect
                    width="12"
                    height="8"
                    rx="4"
                    transform="matrix(-1 0 0 1 123 0)"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5296_47577"
                    x="0"
                    y="3.25"
                    width="233"
                    height="47.5"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5296_47577"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5296_47577"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_5296_47577"
                    x="109"
                    y="0"
                    width="16"
                    height="12"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.74 0 0 0 0 0.74 0 0 0 0 0.74 0 0 0 0.14 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5296_47577"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5296_47577"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_5296_47577"
                    x1="231"
                    y1="45.5059"
                    x2="24.4089"
                    y2="-22.7199"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.335589" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="bg-white mx-auto px-2.5  py-1 rounded-full border border-t-[#a35edc] border-x-[#cb7998] border-b-[#f08965] flex items-center gap-3 mt-4">
                <div className="flex -space-x-4 text-nowrap">
                  <Image
                    src={user1}
                    alt="User 1"
                    width={40}
                    height={40}
                    className="rounded-full border border-white"
                  />
                  <Image
                    src={user2}
                    alt="User 2"
                    width={40}
                    height={40}
                    className="rounded-full border border-white"
                  />
                  <Image
                    src={user3}
                    alt="User 3"
                    width={40}
                    height={40}
                    className="rounded-full border border-white"
                  />
                </div>
                <p className="text-sm font-medium text-gray-800 text-nowrap">
                  Trust Scan Document Analyzing Platform
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="233"
                height="51"
                viewBox="0 0 233 51"
                fill="none"
              >
                <g filter="url(#filter0_d_5296_47574)">
                  <path
                    d="M2 46H48.9237C60.5217 46 69.9237 36.598 69.9237 25V25C69.9237 13.402 79.3258 4 90.9237 4H231"
                    stroke="url(#paint0_linear_5296_47574)"
                    stroke-width="1.5"
                    shape-rendering="crispEdges"
                  />
                </g>
                <g filter="url(#filter1_d_5296_47574)">
                  <rect x="110" width="12" height="8" rx="4" fill="white" />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5296_47574"
                    x="0"
                    y="3.25"
                    width="233"
                    height="47.5"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5296_47574"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5296_47574"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_5296_47574"
                    x="108"
                    y="0"
                    width="16"
                    height="12"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.74 0 0 0 0 0.74 0 0 0 0 0.74 0 0 0 0.14 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5296_47574"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5296_47574"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_5296_47574"
                    x1="2"
                    y1="45.5059"
                    x2="208.591"
                    y2="-22.7199"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.335589" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight bg-clip-text text-gray-800">
                Analyze Your Documents with AI-Powered Precision
              </h1>

              <p className="text-lg md:text-[22px] text-[#4A4C56] font-normal">
                Upload your reports, let AI detect issues, and get actionable
                insights—all in seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/analyze/profile"
                className="px-18 py-3 text-white rounded-[44.72px] border-[1.789px] border-[rgba(53,133,245,0.00)] text-sm md:text-xl font-normal transition-colors duration-300 bg-[radial-gradient(82.79%_50%_at_50%_50%,#0C58C1_0%,rgba(12,88,193,0.69)_100%)] shadow-[0px_8.944px_30.41px_0px_rgba(53,133,245,0.35)] backdrop-blur-[18.782px]"
              >
                Get Started
              </Link>
            </div>

            <div className="mt-15 mx-5 lg:mx-0">
              <div className="">
                <div
                  className="h-10 bg-gradient-to-l"
                  style={{
                    background:
                      "linear-gradient(to right, #def6f9, #ece8e1, #e2e1f7, #ddf6f9)",
                    opacity: 0.6,
                  }}
                ></div>
              </div>
              <Image src={heroBg} alt="hero" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
