import { useForm } from "react-hook-form";
import Image from "next/image";
import EyeIcon from "@/public/assets/client/auth/eye.svg";
import { X } from "lucide-react";
import { useChangePasswordMutation } from "@/app/store/api/authApi";
import { toast } from "react-toastify";
export default function ChangePasswordForm({ isOpen, onClose, closeModal }: { isOpen: boolean, onClose: () => void, closeModal: () => void }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [changePassword, { isLoading }] = useChangePasswordMutation();
    const onSubmit = async (data: any) => {
        const changePasswordData = {
            old_password: data.currentPassword,
            new_password: data.newPassword,
        }
        const response = await changePassword(changePasswordData);
        console.log(response);
        if (response.data.success) {
            toast.success(response.data.message);
            onClose();
            closeModal();
        } else {
            toast.error(response.data.message);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`fixed inset-0 bg-[#0000008c] bg-opacity-50 flex items-center justify-center z-50 ${isOpen ? "block" : "hidden"}`}>
            <div className="relative bg-white rounded-lg p-10 max-w-lg w-full">
                <div className="absolute top-2 right-3">
                    <button className="border border-[#A5A5AB] rounded-full p-0.5 cursor-pointer hover:bg-[#F2F2F7] transition-all duration-300" onClick={onClose}><X className="w-2.5 h-2.5 text-[#A5A5AB]" /></button>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm font-semibold text-[#4A4C56]">Change Password</p>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-[#777980]">Current Password</label>
                        <div className="flex flex-col gap-2 relative">
                            <input
                                type="password"
                                id="currentPassword"
                                className="border border-[#D2D2D5] rounded px-3 py-2 placeholder:text-[#A5A5AB] placeholder:text-sm placeholder:font-medium"
                                placeholder=""
                                {...register("currentPassword", { required: true })}
                            />
                            <Image src={EyeIcon} alt="Eye" width={20} height={20} className="absolute right-3 top-[11px] cursor-pointer" onClick={() => {
                                const input = document.getElementById("currentPassword") as HTMLInputElement;
                                input.type = input.type === "password" ? "text" : "password";
                            }} />
                        </div>
                    </div>
                    {errors.currentPassword && (
                        <p className="text-red-500">Current password is required</p>
                    )}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="newPassword" className="text-sm font-medium text-[#777980]">New Password</label>
                        <div className="flex flex-col gap-2 relative">
                            <input
                                type="password"
                                id="newPassword"
                                className="border border-[#D2D2D5] rounded px-3 py-2 placeholder:text-[#A5A5AB] placeholder:text-sm placeholder:font-medium"
                                placeholder=""
                                {...register("newPassword", { required: true })}
                            />
                            <Image src={EyeIcon} alt="Eye" width={20} height={20} className="absolute right-3 top-[11px] cursor-pointer" onClick={() => {
                                const input = document.getElementById("newPassword") as HTMLInputElement;
                                input.type = input.type === "password" ? "text" : "password";
                            }} />
                        </div>
                    </div>
                    {errors.newPassword && (
                        <p className="text-red-500">New password is required</p>
                    )}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirmPassword" className="text-sm font-medium text-[#777980]">Confirm Password</label>
                        <div className="flex flex-col gap-2 relative">
                            <input
                                type="password"
                                id="confirmPassword"
                                className="border border-[#D2D2D5] rounded px-3 py-2 placeholder:text-[#A5A5AB] placeholder:text-sm placeholder:font-medium"
                                placeholder=""
                                {...register("confirmPassword", { required: true })}
                            />
                            <Image src={EyeIcon} alt="Eye" width={20} height={20} className="absolute right-3 top-[11px] cursor-pointer" onClick={() => {
                                const input = document.getElementById("confirmPassword") as HTMLInputElement;
                                input.type = input.type === "password" ? "text" : "password";
                            }} />
                        </div>
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-red-500">Confirm password is required</p>
                    )}
                    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit(onSubmit)}>Continue</button>
                </div>
            </div>
        </form >
    );
}
