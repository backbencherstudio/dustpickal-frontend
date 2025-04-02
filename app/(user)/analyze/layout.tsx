"use client";
import LeftSidenbar from "../_components/shared/leftSideBar";
import RightSideBar from "../_components/shared/rightSideBar"; 
import { useState } from "react";
import tapIcon from "@/public/assets/client/icons/tap-menu.svg";
import Image from "next/image";

export default function AnalyzeLayout({ children }: { children: React.ReactNode }) {
    const [isLeftExpanded, setIsLeftExpanded] = useState(true);
    const [isRightExpanded, setIsRightExpanded] = useState(true);

    return (
        <div className="relative w-full mx-auto h-screen p-3">
            {/* Desktop layout */}
            <div className="hidden lg:grid lg:grid-cols-12 h-full">
                {/* Analyze left sidebar */}
                <div className={`${isLeftExpanded ? 'col-span-2' : 'col-span-1'} p-3 transition-all duration-300 overflow-hidden`}>
                    <LeftSidenbar 
                        isExpanded={isLeftExpanded}
                        onExpandToggle={setIsLeftExpanded}
                    />
                </div>
                {/* Analyze main content */}
                <div className={`${isLeftExpanded && isRightExpanded ? 'col-span-8' : 
                               isLeftExpanded || isRightExpanded ? 'col-span-9' : 
                               'col-span-10'} p-3 transition-all duration-300 overflow-y-auto custom-scrollbar`}>
                    {children}
                </div>
                {/* Analyze right sidebar */}
                <div className={`${isRightExpanded ? 'col-span-2' : 'col-span-1'} p-3 transition-all duration-300 overflow-y-auto`}>
                    <RightSideBar 
                        isExpanded={isRightExpanded}
                        onExpandToggle={setIsRightExpanded}
                    />
                </div>
            </div>

            {/* Mobile layout */}
            <div className="lg:hidden relative w-full h-full">
                {/* Mobile sidebars */}
                <div className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${isLeftExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="w-64 h-full bg-white shadow-lg relative">
                        <LeftSidenbar 
                            isExpanded={true}
                            onExpandToggle={setIsLeftExpanded}
                        />
                        {/* Left tap icon - only show when sidebar is expanded */}
                        {isLeftExpanded && (
                            <button 
                                onClick={() => setIsLeftExpanded(false)} 
                                className="absolute top-4 right-0 translate-x-full p-2 bg-white rounded-r-lg shadow-md before:absolute before:inset-0 before:bg-[linear-gradient(159deg,rgba(140,82,255,0.5)_0%,rgba(255,145,77,0.5)_99.16%)] before:blur-[5px] before:-z-10"
                            >
                                X{/* <Image src={tapIcon} alt="tap-icon" width={20} height={20} className="rotate-180" /> */}
                            </button>
                        )}
                    </div>
                </div>
                <div className={`fixed inset-y-0 right-0 z-40 transform transition-transform duration-300 ease-in-out ${isRightExpanded ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="w-64 h-full bg-white shadow-lg relative">
                        <RightSideBar 
                            isExpanded={true}
                            onExpandToggle={setIsRightExpanded}
                        />
                        {/* Right tap icon - only show when sidebar is expanded */}
                        {isRightExpanded && (
                            <button 
                                onClick={() => setIsRightExpanded(false)} 
                                className="absolute top-4 left-0 -translate-x-full p-2 bg-white rounded-l-lg shadow-md before:absolute before:inset-0 before:bg-[linear-gradient(159deg,rgba(140,82,255,0.5)_0%,rgba(255,145,77,0.5)_99.16%)] before:blur-[5px] before:-z-10"
                            >
                                X{/* <Image src={tapIcon} alt="tap-icon" width={20} height={20} /> */}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile tap icons for showing sidebars - only show when sidebars are collapsed */}
                <div className="fixed top-4 left-0 z-50">
                    {!isLeftExpanded && (
                        <button onClick={() => setIsLeftExpanded(true)} className="p-[2px] bg-white rounded-r-lg shadow-md before:absolute before:inset-0 before:bg-[linear-gradient(159deg,rgba(140,82,255,0.5)_0%,rgba(255,145,77,0.5)_99.16%)] before:blur-[5px] before:-z-10">
                            <Image src={tapIcon} alt="tap-icon" width={20} height={20} className="rotate-180" />
                        </button>
                    )}
                </div>
                <div className="fixed top-4 right-0 z-50">
                    {!isRightExpanded && (
                        <button onClick={() => setIsRightExpanded(true)} className="p-[2px] bg-white rounded-l-lg shadow-md before:absolute before:inset-0 before:bg-[linear-gradient(159deg,rgba(140,82,255,0.5)_0%,rgba(255,145,77,0.5)_99.16%)] before:blur-[5px] before:-z-10">
                            <Image src={tapIcon} alt="tap-icon" width={20} height={20} />
                        </button>
                    )}
                </div>

                {/* Mobile main content */}
                <div className="w-full h-full p-3 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}