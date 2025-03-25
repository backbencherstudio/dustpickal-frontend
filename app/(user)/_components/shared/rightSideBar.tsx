import logo from "@/public/assets/client/logo.png";
import tapIcon from "@/public/assets/client/icons/tap-menu.svg";
import Image from "next/image";

interface RightSidebarProps {
    isExpanded: boolean;
    onExpandToggle: (value: boolean) => void;
}

export default function RightSideBar({ isExpanded, onExpandToggle }: RightSidebarProps) {
    return (
        <div className={`flex flex-col gap-4 p-4 transition-all duration-300 ease-in-out ${isExpanded ? 'w-full' : 'w-20'}`}>
            <div className="flex flex-row justify-between items-center gap-2">
                <Image 
                    src={tapIcon} 
                    alt="tap-icon" 
                    width={20} 
                    height={20} 
                    className={`cursor-pointer transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    onClick={() => onExpandToggle(!isExpanded)}
                />
                <div className={`flex flex-row justify-between items-center gap-[11px] ${!isExpanded ? 'hidden' : ''}`}>
                    <p>Alexandro</p>
                    <Image src={logo} alt="logo" width={32} height={32} className="rounded-full" />
                </div>
            </div>
        </div>  
    );
}
