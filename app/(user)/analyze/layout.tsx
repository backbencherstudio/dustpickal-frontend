"use client";
import LeftSidenbar from "../_components/shared/leftSideBar";
import RightSideBar from "../_components/shared/rightSideBar"; 
import { useState } from "react";

export default function AnalyzeLayout({ children }: { children: React.ReactNode }) {
    const [isLeftExpanded, setIsLeftExpanded] = useState(true);
    const [isRightExpanded, setIsRightExpanded] = useState(true);

    return (
        <div className="grid grid-cols-12 w-full mx-auto h-screen p-3">
            {/* Analyze left sidebar */}
            <div className={`${isLeftExpanded ? 'col-span-2' : 'col-span-1'} p-3 transition-all duration-300`}>
                <LeftSidenbar 
                    isExpanded={isLeftExpanded}
                    onExpandToggle={setIsLeftExpanded}
                />
            </div>
            {/* Analyze main content */}
            <div className={`${isLeftExpanded && isRightExpanded ? 'col-span-8' : 
                           isLeftExpanded || isRightExpanded ? 'col-span-9' : 
                           'col-span-10'} p-3 transition-all duration-300`}>
                {children}
            </div>
            {/* Analyze right sidebar */}
            <div className={`${isRightExpanded ? 'col-span-2' : 'col-span-1'} p-3 transition-all duration-300`}>
                <RightSideBar 
                    isExpanded={isRightExpanded}
                    onExpandToggle={setIsRightExpanded}
                />
            </div>
        </div>
    );
}