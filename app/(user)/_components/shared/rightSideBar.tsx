"use client";
import { useState } from "react";
import Image from "next/image";
import { MdNotifications, MdMenu, MdSettings } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import NotificationDrawer from "../NotificationDrawer";
import tokenIcon from "@/public/assets/client/icons/token.svg"
import addIcon from "@/public/assets/client/icons/add-icon.svg"
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
interface RightSidebarProps {
    isExpanded: boolean;
    onExpandToggle: (value: boolean) => void;
}

export default function RightSidebar({ isExpanded, onExpandToggle }: RightSidebarProps) {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isTokenOpen, setIsTokenOpen] = useState(false);
    const router = useRouter();
    return (
        <>
            <div
                className={`bg-white z-20 h-screen p-3 shadow-xl border-l transition-all duration-300 ease-in-out 
          ${isExpanded ? "w-[250px]" : "w-[80px]"}`}
            >
                <div className="flex items-center justify-between mt-1">
                    <div className="cursor-pointer" onClick={() => onExpandToggle(!isExpanded)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 20 20"
                            fill="none"
                            className={`transform ${isExpanded ? "rotate-180" : ""}`}
                        >
                            <mask
                                id="mask0_5441_759"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                            >
                                <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_5441_759)">
                                {isExpanded ? (
                                    <path
                                        d="M6.62699 7.01109V12.9886L9.62366 9.99984L6.62699 7.01109ZM4.42345 17.0832C4.00789 17.0832 3.6529 16.936 3.35845 16.6417C3.06415 16.3473 2.91699 15.9923 2.91699 15.5767V4.42296C2.91699 4.00741 3.06415 3.65241 3.35845 3.35796C3.6529 3.06366 4.00789 2.9165 4.42345 2.9165H15.5772C15.9928 2.9165 16.3478 3.06366 16.6422 3.35796C16.9365 3.65241 17.0837 4.00741 17.0837 4.42296V15.5767C17.0837 15.9923 16.9365 16.3473 16.6422 16.6417C16.3478 16.936 15.9928 17.0832 15.5772 17.0832H4.42345ZM13.3337 15.8332H15.8337V4.42296C15.8337 4.3588 15.8069 4.30005 15.7535 4.24671C15.7001 4.19324 15.6414 4.1665 15.5772 4.1665H13.3337V15.8332ZM12.0837 15.8332V4.1665H4.42345C4.35928 4.1665 4.30053 4.19324 4.2472 4.24671C4.19373 4.30005 4.16699 4.3588 4.16699 4.42296V15.5767C4.16699 15.6409 4.19373 15.6996 4.2472 15.753C4.30053 15.8064 4.35928 15.8332 4.42345 15.8332H12.0837Z"
                                        fill="#D2D2D5"
                                    />
                                ) : (
                                    <path
                                        d="M13.3734 12.9888V7.01133L10.3767 10.0001L13.3734 12.9888ZM4.42321 17.0834C4.00765 17.0834 3.65265 16.9363 3.35821 16.642C3.0639 16.3475 2.91675 15.9925 2.91675 15.577V4.42321C2.91675 4.00765 3.0639 3.65265 3.35821 3.35821C3.65265 3.0639 4.00765 2.91675 4.42321 2.91675H15.577C15.9925 2.91675 16.3475 3.0639 16.642 3.35821C16.9363 3.65265 17.0834 4.00765 17.0834 4.42321V15.577C17.0834 15.9925 16.9363 16.3475 16.642 16.642C16.3475 16.9363 15.9925 17.0834 15.577 17.0834H4.42321ZM6.66675 15.8334V4.16675H4.42321C4.35904 4.16675 4.30029 4.19348 4.24696 4.24696C4.19348 4.30029 4.16675 4.35904 4.16675 4.42321V15.577C4.16675 15.6411 4.19348 15.6999 4.24696 15.7532C4.30029 15.8067 4.35904 15.8334 4.42321 15.8334H6.66675ZM7.91675 15.8334H15.577C15.6411 15.8334 15.6999 15.8067 15.7532 15.7532C15.8067 15.6999 15.8334 15.6411 15.8334 15.577V4.42321C15.8334 4.35904 15.8067 4.30029 15.7532 4.24696C15.6999 4.19348 15.6411 4.16675 15.577 4.16675H7.91675V15.8334Z"
                                        fill="#D2D2D5"
                                    />
                                )}
                            </g>
                        </svg>
                    </div>

                    {isExpanded && (
                        <div className="flex items-center gap-3">

                            <div className="relative">
                                <div
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                >
                                    <Image
                                        src="/assets/client/profileImg.jpg"
                                        alt="Profile"
                                        width={36}
                                        height={36}
                                        className="rounded-full"
                                    />
                                    <div className="flex items-center">
                                        <span className="font-medium">Alexander</span>
                                        <IoMdArrowDropdown size={20} />
                                    </div>
                                </div>

                                {isProfileDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {isExpanded && (
                    <div className="mt-8">
                        <div className="relative">
                            <button
                                className="w-full mb-4 flex justify-between items-center py-2 px-2 bg-[#E9E9EA] rounded cursor-pointer"
                                onClick={() => setIsTokenOpen(!isTokenOpen)}
                            >
                                <div className="flex flex-row gap-1 items-center">
                                    <Image src={tokenIcon} alt="" />
                                    <p className="text-sm font-medium text-[#1D1F2C]">Token</p>
                                </div>
                                <span className={`flex items-center transition-transform duration-300 ${isTokenOpen ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                            <div className={`absolute w-full transition-all duration-300 ease-in-out overflow-hidden bg-gray-600 rounded ${isTokenOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="space-y-2">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white hover:bg-blue-400 p-2 cursor-pointer">token 1</h3>
                                        <h3 className="text-white hover:bg-blue-400 p-2 cursor-pointer">token 1</h3>
                                        <h3 className="text-white hover:bg-blue-400 p-2 cursor-pointer">token 1</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-3 border-b border-[#A5A5AB]">
                            <button className="w-full flex flex-row items-center gap-2 cursor-pointer px-3 py-2 bg-[#1D1F2C] rounded" onClick={() => router.push('/analyze')}>
                                <div className="bg-white rounded-full p-0.5">
                                    <Plus className="w-3 h-3" />
                                </div>
                                <p className={`text-sm text-white ${isExpanded ? '' : 'hidden'} `}>New Analyze</p>
                            </button>
                        </div>
                    </div>
                )}

                {!isExpanded && (
                    <div className="flex flex-col items-center mt-8 space-y-6">
                        <div className="cursor-pointer">
                            <Image
                                src="/assets/client/profileImg.jpg"
                                alt="Profile"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </div>
                        <button className="cursor-pointer">
                            <Image src={tokenIcon} alt="" className="w-8 h-8" />
                        </button>
                        <button className="cursor-pointer">
                            <div className="bg-black rounded-full p-0.5">
                                <Plus className="w-5 h-5 text-white" />
                            </div>
                        </button>
                    </div>
                )}
            </div>

            <NotificationDrawer
                position="side"
                isOpen={isNotificationOpen}
                onClose={() => setIsNotificationOpen(!isNotificationOpen)}
            />
        </>
    );
}