import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import EyeIcon from "@/public/assets/client/auth/eye.svg";

export default function PasswordResetForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const router = useRouter();
    const searchParams = useSearchParams();
    const isResetPasswordOpen = searchParams.get("mode") === "reset-with-new-password";
    const email = searchParams.get("email");

    const handleClose = () => {
        router.push("/"); // Remove the query parameter
    };

    const onSubmit = (data: any) => {
        // console.log(data);(data);
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 ${isResetPasswordOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                } transition-opacity duration-300`}
        >
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={handleClose}
            ></div>
            {/* // close button */}
            <button
                className="absolute top-4 right-4 text-white hover:text-gray-700 border rounded-full px-2 py-0 cursor-pointer"
                onClick={handleClose}
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
                    Reset your password
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-[60px] w-full max-w-[445px] mx-auto"
                >
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 relative">
                            <label htmlFor="password" className="text-sm font-medium text-[#777980]">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                className="border border-[#D2D2D5] rounded px-3 py-2 placeholder:text-[#A5A5AB] placeholder:text-sm placeholder:font-medium"
                                {...register("newPassword", { required: true })}
                            />
                            <Image src={EyeIcon} alt="Eye" width={20} height={20} className="absolute right-3 top-[38px] cursor-pointer" onClick={() => {
                                const input = document.getElementById("newPassword") as HTMLInputElement;
                                input.type = input.type === "password" ? "text" : "password";
                            }} />
                            {errors.newPassword && (
                                <p className="text-red-500 text-sm mt-1">New Password is required</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 relative">
                            <label htmlFor="repeatePassword" className="text-sm font-medium text-[#777980]">Re-enter Password</label>
                            <input
                                type="password"
                                id="repeatePassword"
                                className="border border-[#D2D2D5] rounded px-3 py-2 placeholder:text-[#A5A5AB] placeholder:text-sm placeholder:font-medium"
                                {...register("repeatePassword", { 
                                    required: "Re-enter Password is required",
                                    validate: (value) => value === watch("newPassword") || "Passwords do not match"
                                })}
                            />
                            <Image src={EyeIcon} alt="Eye" width={20} height={20} className="absolute right-3 top-[38px] cursor-pointer" onClick={() => {
                                const input = document.getElementById("repeatePassword") as HTMLInputElement;
                                input.type = input.type === "password" ? "text" : "password";
                            }} />
                            {errors.repeatePassword && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.repeatePassword.message?.toString()}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col gap-4">
                            <button
                                className="w-full bg-[#0D86FF] text-base font-medium text-white px-4 py-2 rounded cursor-pointer hover:bg-[#0D86FF]/90 transition-colors duration-300"
                                type="submit"
                            >
                                Reset Password
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
