"use client";
import LeftSidenbar from "./_components/shared/leftSideBar";
import RightSideBar from "./_components/shared/rightSideBar";
import { useState } from "react";
import Image from "next/image";
import { RulesProvider } from '../context/RulesContext';
import { AnalysisProvider } from '../context/AnalysisContext';
import { MainContext } from "../context/MainContext";
import RouteProtection from "../components/RouteProtection";

export default function AnalyzeLayout({ children }: { children: React.ReactNode }) {
    const [isLeftExpanded, setIsLeftExpanded] = useState(true);
    const [isRightExpanded, setIsRightExpanded] = useState(true);

    return (
        <RouteProtection allowedUserType="user">
            <div className="flex h-screen overflow-hidden">
                {/* Left sidebar */}
                <div className={`${isLeftExpanded ? 'w-[280px]' : 'w-[80px]'} transition-all duration-300 ease-in-out hidden lg:block`}>
                    <LeftSidenbar
                        isExpanded={isLeftExpanded}
                        onExpandToggle={setIsLeftExpanded}
                    />
                </div>

                {/* Main content */}
                <div className="p-5 transition-all duration-300 flex-1 overflow-y-auto custom-scrollbar">
                    {children}
                </div>

                {/* Right sidebar */}
                <div className={`${isRightExpanded ? 'w-[250px]' : 'w-[80px]'} transition-all duration-300 ease-in-out hidden lg:block`}>
                    <RightSideBar
                        isExpanded={isRightExpanded}
                        onExpandToggle={setIsRightExpanded}
                    />
                </div>

                {/* Mobile layout */}
                <div className="lg:hidden w-full h-full relative">
                    {/* Mobile left sidebar */}
                    <div className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${isLeftExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="w-64 h-full bg-white shadow-lg">
                            <LeftSidenbar
                                isExpanded={true}
                                onExpandToggle={setIsLeftExpanded}
                            />
                        </div>
                    </div>

                    {/* Mobile right sidebar */}
                    <div className={`fixed inset-y-0 right-0 z-40 transform transition-transform duration-300 ease-in-out ${isRightExpanded ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="w-64 h-full bg-white shadow-lg">
                            <RightSideBar
                                isExpanded={true}
                                onExpandToggle={setIsRightExpanded}
                            />
                        </div>
                    </div>

                    {/* Mobile toggle buttons */}
                    <div className="fixed top-4 left-0 z-50">
                        {!isLeftExpanded && (
                            <button
                                onClick={() => setIsLeftExpanded(true)}
                                className="p-2 bg-white rounded-r-lg shadow-md"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        )}
                    </div>
                    <div className="fixed top-4 right-0 z-50">
                        {!isRightExpanded && (
                            <button
                                onClick={() => setIsRightExpanded(true)}
                                className="p-2 bg-white rounded-l-lg shadow-md"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Mobile main content */}
                    <div className="w-full h-full p-3 overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
        </RouteProtection>
    );
}