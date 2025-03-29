import Image from "next/image";
import artWord from "@/public/assets/client/artwork.svg";

export default function AnalyzePage() {
    return (
        <div>
            <div className="relative flex justify-center items-center">
                <Image src={artWord} alt="Analyze" width={1000} height={1000} />
                <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50 border border-red-500 w-5 h-5 flex "></div>
            </div>
        </div>
    );
}
