import { useState } from "react";
import Image from "next/image";
import freePlanImg from "@/public/assets/client/free-plan-img.svg";
import crossBg from "@/public/assets/client/icons/cross-icon.svg";
import { useRouter } from "next/navigation";
export default function FreeSubsModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const router = useRouter();
    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
        >
            <div
                className="absolute inset-0 bg-black opacity-50"
            // onClick={onClose}
            ></div>
            <div className="flex flex-col items-center gap-12 w-full max-w-[572px] mx-4 md:mx-auto bg-white px-16 py-10 rounded-xl shadow-lg z-50 relative overflow-hidden">

                {/* // close button */}
                <button
                    className="absolute top-4 right-4 px-1 py-0 cursor-pointer"
                    onClick={onClose}
                >
                    <Image src={crossBg} alt="Close" className="hover:scale-110 transition-all duration-300 hover:rotate-12" />
                </button>
                {/* Gradient decoration */}
                <div
                    className="absolute top-0 right-0 w-[100px] h-[100px] opacity-80"
                    style={{
                        background: "linear-gradient(159deg, #8C52FF 0%, #FF914D 99.16%)",
                        filter: "blur(66.55px)",
                        pointerEvents: "none",
                    }}
                ></div>
                <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center gap-6 px-8">
                        <h1 className="text-[24px] md:text-[32px] font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#03377F] via-[#754499] to-[#F3411B] text-center relative z-10">
                            Analyze one document for free!
                        </h1>
                        <Image src={freePlanImg} alt="Free Plan" className="w-48 h-36 object-cover" />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-xs text-[#4A4C56] text-center relative z-10">Simply add your card to get started—no charge unless you upgrade.</p>
                        <button className="w-full bg-[#24A4FF] text-lg text-white px-4 py-2 rounded-full cursor-pointer" onClick={onClose}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
