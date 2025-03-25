"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { MdAddCard, MdApi, MdOutlineLogout, MdSupport } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useRouter } from "next/navigation";

import Image from "next/image";
import logo from "../../assets/logo.png";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: <RxDashboard size={20} /> },
    {
      label: "User Management",
      path: "/dashboard/user-management",
      icon: <FiUsers size={20} />,
    },
    {
      label: "Rule Management",
      path: "/dashboard/rule-management",
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
              fill={
                pathname === "/dashboard/rule-management" ? "white" : "#1D1F2C"
              }
            />
          </g>
        </svg>
      ),
    },
    {
      label: "API Management",
      path: "/dashboard/api-management",
      icon: <MdApi size={20} />,
    },
    {
      label: "Subscription",
      path: "/dashboard/subscription",
      icon: <MdAddCard size={20} />,
    },
  ];

  const handleNavigation = (title: string) => {
    localStorage.setItem("tab", title);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/signin");
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-white h-screen p-4 py-6 transition-all duration-300 ease-in-out 
        ${isCollapsed ? "w-[80px]" : "w-[264px]"}`}
    >
      <div
        className={`flex items-center gap-2 justify-between ${
          isCollapsed ? "justify-center" : "justify-between "
        }`}
      >
        {!isCollapsed && (
          <Image src={logo} alt="logo" width={102} height={32} />
        )}
        <svg
          onClick={toggleSidebar}
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
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
            <path
              d="M13.3734 12.9888V7.01133L10.3767 10.0001L13.3734 12.9888ZM4.42321 17.0834C4.00765 17.0834 3.65265 16.9363 3.35821 16.642C3.0639 16.3475 2.91675 15.9925 2.91675 15.577V4.42321C2.91675 4.00765 3.0639 3.65265 3.35821 3.35821C3.65265 3.0639 4.00765 2.91675 4.42321 2.91675H15.577C15.9925 2.91675 16.3475 3.0639 16.642 3.35821C16.9363 3.65265 17.0834 4.00765 17.0834 4.42321V15.577C17.0834 15.9925 16.9363 16.3475 16.642 16.642C16.3475 16.9363 15.9925 17.0834 15.577 17.0834H4.42321ZM6.66675 15.8334V4.16675H4.42321C4.35904 4.16675 4.30029 4.19348 4.24696 4.24696C4.19348 4.30029 4.16675 4.35904 4.16675 4.42321V15.577C4.16675 15.6411 4.19348 15.6999 4.24696 15.7532C4.30029 15.8067 4.35904 15.8334 4.42321 15.8334H6.66675ZM7.91675 15.8334H15.577C15.6411 15.8334 15.6999 15.8067 15.7532 15.7532C15.8067 15.6999 15.8334 15.6411 15.8334 15.577V4.42321C15.8334 4.35904 15.8067 4.30029 15.7532 4.24696C15.6999 4.19348 15.6411 4.16675 15.577 4.16675H7.91675V15.8334Z"
              fill={`${isCollapsed ? "#3baae4" : "#D2D2D5"}`}
            />
          </g>
        </svg>
      </div>
      <nav className="mt-8 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => handleNavigation(item.label)}
            title={item.label}
          >
            <div
              className={`px-3 py-2 my-2 rounded text-gray-800 flex items-center 
                ${isCollapsed ? "justify-center" : "justify-start"}
                ${pathname === item.path ? "bg-[#1d1f2c] text-white" : ""}`}
            >
              <span className="flex items-center gap-2.5">
                {item.icon}
                {!isCollapsed && item.label}
              </span>
            </div>
          </Link>
        ))}
      </nav>
      <div
        className={`flex flex-col gap-2 absolute bottom-2 
          ${isCollapsed ? "left-4 items-center" : "left-6 items-start"}`}
      >
        <div
          onClick={() => router.push("/dashboard/support")}
          className="flex items-center gap-2 p-1 rounded-md cursor-pointer hover:scale-105 transition-all duration-300"
          title="Support"
        >
          <MdSupport size={20} />
          {!isCollapsed && <p>Support</p>}
        </div>
        <div
          onClick={() => {
            router.push("/dashboard/notification");
          }}
          className="flex items-center gap-2 p-1 rounded-md cursor-pointer hover:scale-105 transition-all duration-300"
          title="Notifications"
        >
          <IoMdNotificationsOutline size={20} />
          {!isCollapsed && <p>Notification</p>}
        </div>
        <div
          onClick={handleLogout}
          className="flex items-center gap-2 p-1 rounded-md cursor-pointer hover:scale-105 transition-all duration-300"
          title="Logout"
        >
          <MdOutlineLogout size={20} />
          {!isCollapsed && <p>Logout</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
