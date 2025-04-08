import { useForm } from "react-hook-form";
import Image from "next/image";
import EyeIcon from "@/public/assets/client/auth/eye.svg";
import { X } from "lucide-react";
import ChangePasswordForm from "./ChangePasswordForm";
import { useState } from "react";
export default function ChangePasswordModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);
    const onSubmit = (data: any) => {
        console.log(data);
        // onClose();
        setIsOpenChangePassword(true);
    };

    if (isOpenChangePassword) {
        return <ChangePasswordForm isOpen={isOpenChangePassword} onClose={() => setIsOpenChangePassword(false)} />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`fixed inset-0 bg-[#0000008c] bg-opacity-50 flex items-center justify-center z-50 ${isOpen ? "block" : "hidden"}`}>
            <div className="relative bg-white rounded-lg p-10 max-w-lg w-full">
                <div className="absolute top-2 right-3">
                    <button className="border border-[#A5A5AB] rounded-full p-0.5 cursor-pointer hover:bg-[#F2F2F7] transition-all duration-300" onClick={onClose}><X className="w-2.5 h-2.5 text-[#A5A5AB]" /></button>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm font-medium text-[#777980]">Your current email is <span className="font-medium text-[#4A4C56]">test@gmail.com</span></p>
                    <p className="text-sm font-medium text-[#777980]">Please enter your password.</p>
                    <div className="flex flex-col gap-2 relative">
                        <input
                            type="password"
                            id="password"
                            className="border border-[#D2D2D5] rounded px-3 py-2 placeholder:text-[#A5A5AB] placeholder:text-sm placeholder:font-medium"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        <Image src={EyeIcon} alt="Eye" width={20} height={20} className="absolute right-3 top-[11px] cursor-pointer" onClick={() => {
                            const input = document.getElementById("password") as HTMLInputElement;
                            input.type = input.type === "password" ? "text" : "password";
                        }} />
                    </div>
                    {errors.password && (
                        <p className="text-red-500">Password is required</p>
                    )}
                    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit(onSubmit)}>Continue</button>
                </div>
            </div>
        </form >
    );
}
