"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import google from "@/public/assets/client/auth/google.svg";
import microsoft from "@/public/assets/client/auth/microsoft.svg";
import AppleIcon from "@/public/assets/client/auth/apple.svg";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent) => void;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleResetPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    // onClose();
    router.push("?mode=forget-password");
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {/* // close button */}
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-700 border rounded-full px-2 py-0 cursor-pointer"
        onClick={onClose}
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[60px] w-full max-w-[445px] mx-auto"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="border border-[#D2D2D5] rounded px-3 py-2 placeholder:text-[#A5A5AB] placeholder:text-sm placeholder:font-medium"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
            <input
              type="password"
              className="border border-[#D2D2D5] rounded px-3 py-2 placeholder:text-[#A5A5AB] placeholder:text-sm placeholder:font-medium"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
            <button
              className="text-xs text-[#777980] font-medium text-right hover:text-[#0D86FF] cursor-pointer"
              onClick={handleResetPassword}
            >
              Forgot Password?
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="w-full bg-[#0D86FF] text-base font-medium text-white px-4 py-2 rounded cursor-pointer hover:bg-[#0D86FF]/90 transition-colors duration-300"
              type="submit"
            >
              Login
            </button>
            <p className="text-xs text-[#777980] font-medium text-end">
              Don't have an account?{" "}
              <button className="text-[#0D86FF] cursor-pointer hover:text-[#0D86FF]/80 transition-colors duration-300">
                Sign up
              </button>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="w-full flex items-center justify-center gap-2 bg-[#F8FAFB] text-sm font-medium text-[#4A4C56] px-3 py-2 rounded cursor-pointer hover:bg-[#0D86FF]/50 hover:text-black transition-colors duration-300"
              type="submit"
            >
              <Image src={google} alt="Google" className="w-5 h-5" /> Log in
              with Google
            </button>
            <button
              className="w-full flex items-center justify-center gap-2 bg-[#F8FAFB] text-sm font-medium text-[#4A4C56] px-3 py-2 rounded cursor-pointer hover:bg-[#0D86FF]/50 hover:text-black transition-colors duration-300"
              type="submit"
            >
              {" "}
              <Image src={microsoft} alt="Microsoft" className="w-5 h-5" /> Log
              in with Microsoft
            </button>
            <button
              className="w-full flex items-center justify-center gap-2 bg-[#F8FAFB] text-sm font-medium text-[#4A4C56] px-3 py-2 rounded cursor-pointer hover:bg-[#0D86FF]/50 hover:text-black transition-colors duration-300"
              type="submit"
            >
              {/* <Image src={AppleIcon} alt="Apple" className="w-5 h-5" />  */}
              Log in with Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
