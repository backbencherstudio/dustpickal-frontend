"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLogout, MdSupport } from "react-icons/md";
import NotificationDrawer from "../NotificationDrawer";
import AllRules from "../rule/allRules";
import ruleGrayIcon from "@/public/assets/client/icons/rule-gray.svg";
import addIcon from "@/public/assets/client/icons/add-icon.svg";
import AddRuleModal from "../AddRuleModal";
interface LeftSidebarProps {
    isExpanded: boolean;
    onExpandToggle: (value: boolean) => void;
}

export default function LeftSidebar({ isExpanded, onExpandToggle }: LeftSidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);

    const navItems = [
        {
            label: "Rule Management",
            path: "/rule-management",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <mask
                        id="mask0_5474_10712"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                    >
                        <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_5474_10712)">
                        <path
                            d="M3.38086 17.2916V16.0416H12.9642V17.2916H3.38086ZM8.21732 12.9934L3.79753 8.57364L5.25898 7.07052L9.72044 11.4903L8.21732 12.9934ZM13.1565 8.05427L8.73669 3.59281L10.2398 2.13135L14.6596 6.55114L13.1565 8.05427ZM17.1661 16.378L6.57961 5.79156L7.45773 4.91343L18.0442 15.4999L17.1661 16.378Z"
                            fill={pathname === "/rule-management" ? "white" : "#1D1F2C"}
                        />
                    </g>
                </svg>
            ),
        },
        {
            label: "Subscription",
            path: "/subscription",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
            ),
        },
    ];

    const handleNavigation = (title: string) => {
        localStorage.setItem("tab", title);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/auth/signin");
    };

    return (
        <>
            <div
                className={`bg-white z-20 h-screen p-3 overflow-y-auto custom-scrollbar shadow-xl rounded transition-all duration-300 ease-in-out 
          ${isExpanded ? "w-[280px]" : "w-[80px]"}`}
            >
                <div
                    className={`flex items-center gap-2 justify-between mt-1 ${isExpanded ? "justify-between" : "justify-center"
                        }`}
                >
                    {isExpanded ? (
                        <Image
                            src="/assets/client/logo.png"
                            alt="logo"
                            width={102}
                            height={32}
                            className="transition-all duration-300 ease-in-out"
                        />
                    ) : (
                        <Image
                            src="/assets/client/mini-logo.png"
                            alt="logo"
                            width={32}
                            height={32}
                            className="transition-all duration-300 ease-in-out"
                        />
                    )}

                    <div className="cursor-pointer" onClick={() => onExpandToggle(!isExpanded)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 20 20"
                            fill="none"
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
                                        d="M13.3734 12.9888V7.01133L10.3767 10.0001L13.3734 12.9888ZM4.42321 17.0834C4.00765 17.0834 3.65265 16.9363 3.35821 16.642C3.0639 16.3475 2.91675 15.9925 2.91675 15.577V4.42321C2.91675 4.00765 3.0639 3.65265 3.35821 3.35821C3.65265 3.0639 4.00765 2.91675 4.42321 2.91675H15.577C15.9925 2.91675 16.3475 3.0639 16.642 3.35821C16.9363 3.65265 17.0834 4.00765 17.0834 4.42321V15.577C17.0834 15.9925 16.9363 16.3475 16.642 16.642C16.3475 16.9363 15.9925 17.0834 15.577 17.0834H4.42321ZM6.66675 15.8334V4.16675H4.42321C4.35904 4.16675 4.30029 4.19348 4.24696 4.24696C4.19348 4.30029 4.16675 4.35904 4.16675 4.42321V15.577C4.16675 15.6411 4.19348 15.6999 4.24696 15.7532C4.30029 15.8067 4.35904 15.8334 4.42321 15.8334H6.66675ZM7.91675 15.8334H15.577C15.6411 15.8334 15.6999 15.8067 15.7532 15.7532C15.8067 15.6999 15.8334 15.6411 15.8334 15.577V4.42321C15.8334 4.35904 15.8067 4.30029 15.7532 4.24696C15.6999 4.19348 15.6411 4.16675 15.577 4.16675H7.91675V15.8334Z"
                                        fill="#D2D2D5"
                                    />
                                ) : (
                                    <path
                                        d="M6.62699 7.01109V12.9886L9.62366 9.99984L6.62699 7.01109ZM4.42345 17.0832C4.00789 17.0832 3.6529 16.936 3.35845 16.6417C3.06415 16.3473 2.91699 15.9923 2.91699 15.5767V4.42296C2.91699 4.00741 3.06415 3.65241 3.35845 3.35796C3.6529 3.06366 4.00789 2.9165 4.42345 2.9165H15.5772C15.9928 2.9165 16.3478 3.06366 16.6422 3.35796C16.9365 3.65241 17.0837 4.00741 17.0837 4.42296V15.5767C17.0837 15.9923 16.9365 16.3473 16.6422 16.6417C16.3478 16.936 15.9928 17.0832 15.5772 17.0832H4.42345ZM13.3337 15.8332H15.8337V4.42296C15.8337 4.3588 15.8069 4.30005 15.7535 4.24671C15.7001 4.19324 15.6414 4.1665 15.5772 4.1665H13.3337V15.8332ZM12.0837 15.8332V4.1665H4.42345C4.35928 4.1665 4.30053 4.19324 4.2472 4.24671C4.19373 4.30005 4.16699 4.3588 4.16699 4.42296V15.5767C4.16699 15.6409 4.19373 15.6996 4.2472 15.753C4.30053 15.8064 4.35928 15.8332 4.42345 15.8332H12.0837Z"
                                        fill="#D2D2D5"
                                    />
                                )}
                            </g>
                        </svg>
                    </div>
                </div>

                {/* Search input */}
                <div className="relative mt-8">
                    <svg
                        className="w-4 h-4 absolute top-3 left-3 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder={isExpanded ? "Search rules" : ""}
                        className={`bg-white rounded-md px-8 py-2 border border-[#D2D2D5] w-full focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder:text-gray-400 placeholder:text-sm`}
                    />
                </div>
                {/* rules */}
                <div className="flex flex-row gap-2">
                    {!isExpanded ?
                        <button className="px-3 py-2 cursor-pointer" onClick={() => onExpandToggle(!isExpanded)}>
                            <Image src={ruleGrayIcon} width={100} height={100} alt="" className="w-5 h-5" />
                        </button>
                        :
                        <AllRules />
                    }
                </div>

                <div className="pb-3 border-b border-[#A5A5AB]">
                    <button 
                        onClick={() => setIsAddNewModalOpen(true)}
                        className="w-full flex flex-row gap-2 cursor-pointer px-3 py-2 border border-[#A5A5AB] rounded hover:bg-gray-50"
                    >
                        <Image src={addIcon} alt="add-icon" width={isExpanded ? 20 : 30} height={isExpanded ? 20 : 30} />
                        <p className={`text-black ${isExpanded ? '' : 'hidden'} ${pathname === '' ? 'text-blue-500 font-medium' : 'font-medium'}`}>Create New Rules</p>
                    </button>
                </div>
                <div className={`flex flex-col mt-3 ${isExpanded ? "items-start" : "items-center"}`}
                >
                    <nav className="text-sm flex flex-col gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => handleNavigation(item.label)}
                                title={item.label}
                            >
                                <div className={`px-3 py-2 rounded text-gray-800 flex items-center text-nowrap overflow-hidden ${isExpanded ? "justify-start" : "justify-center"} ${pathname === item.path ? "bg-[#1d1f2c] text-white" : ""}`}
                                >
                                    <span className="flex items-center gap-2 font-medium">
                                        {item.icon}
                                        {isExpanded && item.label}
                                    </span>
                                </div>
                            </Link>
                        ))}
                        <div
                            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                            className={`px-3 py-2 rounded text-gray-800 flex items-center gap-2 text-nowrap overflow-hidden cursor-pointer ${isExpanded ? "justify-start" : "justify-center"}`}
                            title="Notifications"
                        >
                            <IoMdNotificationsOutline size={20} />
                            {isExpanded && <p className="text-sm font-medium">Notification</p>}
                        </div>
                        <div
                            onClick={handleLogout}
                            className={`px-3 py-2 rounded text-gray-800 flex items-center gap-2 text-nowrap overflow-hidden cursor-pointer ${isExpanded ? "justify-start" : "justify-center"}`}
                            title="Logout"
                        >
                            <MdOutlineLogout size={20} />
                            {isExpanded && <p className="text-sm font-medium">Logout</p>}
                        </div>
                    </nav>
                    {/* <div
                        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                        className={`px-3 py-2 rounded text-gray-800 flex items-center gap-2 text-nowrap overflow-hidden ${isExpanded ? "justify-start" : "justify-center"}`}
                        title="Notifications"
                    >
                        <IoMdNotificationsOutline size={20} />
                        {isExpanded && <p className="text-sm font-medium">Notification</p>}
                    </div>
                    <div
                        onClick={handleLogout}
                        className={`px-3 py-2 rounded text-gray-800 flex items-center gap-2 text-nowrap overflow-hidden ${isExpanded ? "justify-start" : "justify-center"}`}
                        title="Logout"
                    >
                        <MdOutlineLogout size={20} />
                        {isExpanded && <p className="text-sm font-medium">Logout</p>}
                    </div> */}
                </div>
            </div>

            <NotificationDrawer
                position="side"
                isOpen={isNotificationOpen}
                onClose={() => setIsNotificationOpen(!isNotificationOpen)}
            />
            <AddRuleModal
                isOpen={isAddNewModalOpen}
                onClose={() => setIsAddNewModalOpen(false)}
            />
        </>
    );
}