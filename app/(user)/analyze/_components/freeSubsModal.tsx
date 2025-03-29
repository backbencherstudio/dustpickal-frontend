import { useState } from "react";

export default function FreeSubsModal() {
    const [isFreeSubsModalOpen, setIsFreeSubsModalOpen] = useState(false);

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isFreeSubsModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
        >
            <div
                className="absolute inset-0 bg-black opacity-50"
            // onClick={onClose}
            ></div>
            {/* // close button */}
            <button
                className="absolute top-4 right-4 text-white hover:text-gray-700 border rounded-full px-2 py-0 cursor-pointer"
            // onClick={onClose}
            >
                X
            </button>
            <div className="flex flex-col items-center gap-12 w-full max-w-[680px] mx-4 md:mx-auto bg-white px-10 py-12 rounded-xl shadow-lg z-50 relative overflow-hidden">
                {/* Gradient decoration */}
                <div
                    className="absolute top-0 right-0 w-[100px] h-[100px] opacity-80"
                    style={{
                        background: "linear-gradient(159deg, #8C52FF 0%, #FF914D 99.16%)",
                        filter: "blur(66.55px)",
                        pointerEvents: "none",
                    }}
                ></div>
                <h1 className="text-[24px] md:text-[32px] font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#03377F] via-[#754499] to-[#F3411B] text-center relative z-10">
                    Log In to TrustScan
                </h1>
            </div>
        </div>
    )
}
