"use client";

import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetPassword() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isResetPasswordOpen = searchParams.get("mode") === "forget-password";

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        router.push("?mode=send-email&email=" + data.email);
    };

    const handleBackToLogin = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push("/"); // Remove the query parameter
    };

    const handleClose = () => {
        router.push("/"); // Remove the query parameter
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-[60] ${isResetPasswordOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
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
                <h1 className="text-[24px] md:text-[32px] font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#03377F] via-[#754499] to-[#F3411B] text-center relative z-10">
                    Reset Password
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[60px] w-full max-w-[445px] mx-auto">
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            className="border border-[#D2D2D5] rounded px-3 py-2 placeholder:text-[#A5A5AB] placeholder:text-sm placeholder:font-medium"
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className="text-red-500">Email is required</p>}
                    </div>
                    <div className="flex flex-col gap-4">
                        <button
                            type="submit"
                            className="w-full bg-[#0D86FF] text-base font-medium text-white px-4 py-2 rounded cursor-pointer hover:bg-[#0D86FF]/90 transition-colors duration-300"
                        >
                            Reset Password
                        </button>
                        <p className="text-xs text-[#777980] font-medium text-end">
                            Remember your password? <button
                                type="button"
                                onClick={handleBackToLogin}
                                className="text-[#0D86FF] cursor-pointer hover:text-[#0D86FF]/80 transition-colors duration-300"
                            >
                                Sign in
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
