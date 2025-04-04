import Image from "next/image";
import logo from "@/public/assets/client/logo.png";
import miniLogo from "@/public/assets/client/mini-logo.png";
import tapIcon from "@/public/assets/client/icons/tap-menu.svg";
import paymentIcon from "@/public/assets/client/icons/payment.svg";
import addIcon from "@/public/assets/client/icons/add-icon.svg"
import ruleIcon from "@/public/assets/client/icons/rule.svg"
import notifyIcon from "@/public/assets/client/icons/notify.svg"
import logoutIcon from "@/public/assets/client/icons/logout.svg"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { useRouter, usePathname } from "next/navigation";

interface LeftSidebarProps {
    isExpanded: boolean;
    onExpandToggle: (value: boolean) => void;
}

export default function LeftSidenbar({ isExpanded, onExpandToggle }: LeftSidebarProps) {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div className={`flex flex-col gap-4 px-4 shadow-xl rounded h-screen transition-all duration-300 ease-in-out ${isExpanded ? 'w-full' : 'w-28'}`}>
            {/* Logo Section */}
            <div className="flex flex-row justify-between items-center py-2">
                {isExpanded && window.innerWidth > 1024 ? (
                    <Image
                        src={logo}
                        alt="logo"
                        width={100}
                        height={100}
                        className="transition-all duration-300"
                    />
                ) : (
                    <Image
                        src={miniLogo}
                        alt="logo"
                        width={28}
                        height={32}
                        className="transition-all duration-300"
                    />
                )}
                <div className={`${!isExpanded ? 'border-l border-gray-200 pl-3' : ''}`}>
                    <Image
                        src={tapIcon}
                        alt="tap-icon"
                        width={20}
                        height={20}
                        className={`cursor-pointer transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`}
                        onClick={() => onExpandToggle(!isExpanded)}
                    />
                </div>
            </div>

            {/* Search Section */}
            <div className="">
                <Command>
                    <CommandInput
                        placeholder={isExpanded ? "Type a command or search..." : ""}
                        className={!isExpanded ? "!w-8" : ""}
                    />
                </Command>
            </div>

            {/* Additional Content Section */}
            <div className="">
                <button className="w-full flex flex-row gap-2 cursor-pointer px-3 py-2 border border-[#A5A5AB] rounded">
                    <Image src={addIcon} alt="add-icon" width={isExpanded ? 20 : 30} height={isExpanded ? 20 : 30} />
                    <p className={` text-black ${isExpanded ? '' : 'hidden'}  ${pathname === '/analyze/subscription' ? 'text-blue-500 font-medium' : 'font-medium'}`}>Rule Management</p>
                </button>
            </div>
            <div className="flex flex-col gap-2 pt-3 border-t border-[#D2D2D5]">
                <button className={`flex flex-row gap-2 cursor-pointer px-3 py-2`}  onClick={() => router.push('/analyze/subscription')}>
                    <Image src={ruleIcon} alt="payment-icon" width={isExpanded ? 22 : 30} height={isExpanded ? 20 : 30} />
                    <p className={` text-black ${isExpanded ? '' : 'hidden'}  ${pathname === '/analyze/subscription' ? 'text-blue-500 font-medium' : 'font-medium'}`}>Rule Management</p>
                </button>
                <button className={`flex flex-row gap-2 cursor-pointer px-3 py-2`}  onClick={() => router.push('/analyze/subscription')}>
                    <Image src={notifyIcon} alt="payment-icon" width={isExpanded ? 22 : 30} height={isExpanded ? 20 : 30} />
                    <p className={` text-black ${isExpanded ? '' : 'hidden'}  ${pathname === '/analyze/subscription' ? 'text-blue-500 font-medium' : 'font-medium'}`}>Notification</p>
                </button>
                <button className={`flex flex-row gap-2 cursor-pointer px-3 py-2`}  onClick={() => router.push('/analyze/subscription')}>
                    <Image src={paymentIcon} alt="payment-icon" width={isExpanded ? 22 : 30} height={isExpanded ? 20 : 30} />
                    <p className={` text-black ${isExpanded ? '' : 'hidden'}  ${pathname === '/analyze/subscription' ? 'text-blue-500 font-medium' : 'font-medium'}`}>Subscription</p>
                </button>
                <button className={`flex flex-row gap-2 cursor-pointer px-3 py-2`}  onClick={() => router.push('/analyze/subscription')}>
                    <Image src={logoutIcon} alt="payment-icon" width={isExpanded ? 22 : 30} height={isExpanded ? 20 : 30} />
                    <p className={` text-black ${isExpanded ? '' : 'hidden'}  ${pathname === '/analyze/subscription' ? 'text-blue-500 font-medium' : 'font-medium'}`}>Logout</p>
                </button>
            </div>
        </div>
    );
}