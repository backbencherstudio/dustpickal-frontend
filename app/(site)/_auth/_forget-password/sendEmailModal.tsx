import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import sendEmailImg from "@/public/assets/client/auth/send.svg";

export default function SendEmailModal() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isSendEmailModalOpen = searchParams.get("mode") === "send-email";
    const email = searchParams.get("email");
    // console.log(data);(email);

    const handleClose = () => {
        router.push("/"); // Remove the query parameter
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("?mode=reset-with-new-password&email=" + email);
    };

    const handleBackToLogin = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push("/"); // Remove the query parameter
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-[60] ${isSendEmailModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
            {/* // close button */}
            <button className="absolute top-4 right-4 text-white hover:text-gray-700 border rounded-full px-2 py-0 cursor-pointer" onClick={handleClose}>X</button>
            <div className="flex flex-col items-center gap-12 w-full max-w-[680px] mx-4 md:mx-auto bg-white px-10 py-12 rounded-xl shadow-lg z-50 relative overflow-hidden">
                {/* Gradient decoration */}
                <div className="absolute top-0 right-0 w-[100px] h-[100px] opacity-80" style={{
                    background: 'linear-gradient(159deg, #8C52FF 0%, #FF914D 99.16%)',
                    filter: 'blur(66.55px)',
                    pointerEvents: 'none'
                }}></div>
                <div className="flex flex-col items-center gap-6">
                    <h1 className="text-[24px] md:text-[32px] font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#03377F] via-[#754499] to-[#F3411B] text-center relative z-10">
                        Please check your email
                    </h1>
                    <Image src={sendEmailImg} alt="email" width={100} height={100} />
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[445px] mx-auto">
                    <p className="text-center text-sm  text-[#4A4C56]">Please check the email address <span className="text-[#0C58C1]">{email}</span> for instructions to reset your password.</p>
                    <div className="flex flex-col gap-4">
                        <button
                            type="submit"
                            className="w-full bg-[#0D86FF] text-base font-medium text-white px-4 py-2 rounded cursor-pointer hover:bg-[#0D86FF]/90 transition-colors duration-300"
                        >
                            Resend Email
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
