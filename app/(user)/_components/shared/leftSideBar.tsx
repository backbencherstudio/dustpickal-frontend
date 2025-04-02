import Image from "next/image";
import logo from "@/public/assets/client/logo.png";
import miniLogo from "@/public/assets/client/mini-logo.png";
import tapIcon from "@/public/assets/client/icons/tap-menu.svg";
import paymentIcon from "@/public/assets/client/icons/payment.svg";
import addIcon from "@/public/assets/client/icons/add-icon.svg"
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
        <div className={`flex flex-col gap-4 shadow-xl rounded h-screen transition-all duration-300 ease-in-out ${isExpanded ? 'w-full' : 'w-28'}`}>
            {/* Logo Section */}
            <div className="flex flex-row justify-between items-center px-4 py-2">
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
            <div className="px-4">
                <Command>
                    <CommandInput
                        placeholder={isExpanded ? "Type a command or search..." : ""}
                        className={!isExpanded ? "!w-8" : ""}
                    />
                </Command>
            </div>

            {/* Additional Content Section */}
            <div>
                <button className="flex flex-row gap-2 cursor-pointer px-3 py-2 border border-[#A5A5AB] rounded-lg">
                    <Image src={addIcon} alt="add-icon" width={isExpanded ? 20 : 30} height={isExpanded ? 20 : 30} />
                    <p className={` text-black ${isExpanded ? '' : 'hidden'}  ${pathname === '/analyze/subscription' ? 'text-blue-500 font-medium' : 'font-medium'}`}>Create New Rules</p>
                </button>
            </div>
            <div className="flex-1 px-4">
                <button className={`flex flex-row gap-2 cursor-pointer`}  onClick={() => router.push('/analyze/subscription')}>
                    <Image src={paymentIcon} alt="payment-icon" width={isExpanded ? 20 : 30} height={isExpanded ? 20 : 30} />
                    <p className={` text-black ${isExpanded ? '' : 'hidden'}  ${pathname === '/analyze/subscription' ? 'text-blue-500 font-medium' : 'font-medium'}`}>Subscription</p>
                </button>
            </div>
        </div>
    );
}