import Image from "next/image";
import logo from "@/public/assets/client/logo.png";

export default function AnalyzeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row w-full h-full bg-gray-100">
            {/* Analyze left sidebar */}
            <div className="w-1/4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="logo" width={100} height={100} />
                    </div>
                </div>
            </div>
            {children}
            {/* Analyze right sidebar */}
            <div className="w-1/4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="logo" width={100} height={100} />
                    </div>
                </div>
            </div>
        </div>
    );
}
