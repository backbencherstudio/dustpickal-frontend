"use client";
import Link from "next/link";
import CustomImage from "@/components/reusable/CustomImage";
import Logo from "@/public/assets/client/logo.png";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import LoginModal from "@/app/(site)/_auth/_login/login";
import ResetPassword from "@/app/(site)/_auth/_forget-password/resetPassword";
import SendEmailModal from "@/app/(site)/_auth/_forget-password/sendEmailModal";
import PasswordResetForm from "@/app/(site)/_auth/_forget-password/passwordResetForm";
import { useRouter } from "next/navigation";
import Signup from "@/app/(site)/_auth/_signup/signup";
import { useAuth } from "@/app/context/AuthContext";

export default function NavBar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);
    const logo = Logo.src;
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);
    const { user } = useAuth();

    // console.log(data);(user);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const showLoginModal = () => {
        // setIsLoginModalOpen(true);
        router.push("/?mode=login");
    };

    const showSignUpModal = () => {
        // setIsSignUpModalOpen(true);
        router.push("/?mode=signup");
    };

    const handleCloseLoginModal = (e: React.MouseEvent) => {
        e.preventDefault();
        // setIsLoginModalOpen(false);
        // setIsSignUpModalOpen(false);
        router.push("/");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    // const handleCloseResetPassword = (e: React.MouseEvent) => {
    //     e.preventDefault();
    //     setIsLoginModalOpen(false);
    //     setIsResetPasswordOpen(false);
    // };

    return (
        <div className="relative z-20">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-8 md:py-10">
                <div className="flex flex-row justify-between items-center py-4 px-5 rounded-lg border border-white bg-[#f4fbfa]/80 backdrop-blur-[5px]">
                    <div>
                        <Link href="/">
                            <Image src={logo} alt="logo" width={116} height={37} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-row gap-8">
                        <Link href="/analyze/profile" className="text-sm xl:text-base font-medium text-black hover:text-[#0C58C1]">What We Do</Link>
                        <Link href="/analyze/profile" className="text-sm xl:text-base font-medium text-black hover:text-[#0C58C1]">Why Choose Us</Link>
                        <Link href="/analyze/profile" className="text-sm xl:text-base font-medium text-black hover:text-[#0C58C1]">How It Works</Link>
                        <Link href="/analyze/profile" className="text-sm xl:text-base font-medium text-black hover:text-[#0C58C1]">Pricing</Link>
                        <Link href="/analyze/profile" className="text-sm xl:text-base font-medium text-black hover:text-[#0C58C1]">Testimonials</Link>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex flex-row items-center gap-3">
                        {user ? (
                            <div className="flex flex-row gap-3">
                                <button className="text-base font-medium text-[#0D86FF] h-fit px-6 py-2 hover:text-blue-400 rounded-full transition-colors cursor-pointer" onClick={() => router.push("/analyze")}>Analysis</button>
                                <button className="text-base font-medium text-[#0D86FF] h-fit px-6 py-2 border border-[#0D86FF] rounded-xl hover:bg-white hover:text-[#0D86FF] transition-colors cursor-pointer" onClick={() => handleLogout()}>Logout</button>
                            </div>
                        ) : (
                            <>
                                <button className="text-base font-medium text-[#0D86FF] h-fit px-6 py-2 hover:text-blue-400 rounded-full transition-colors cursor-pointer" onClick={() => showLoginModal()}>Login</button>
                                <button className="text-base font-medium text-[#0D86FF] h-fit px-6 py-2 border border-[#0D86FF] rounded-xl hover:bg-white hover:text-[#0D86FF] transition-colors cursor-pointer" onClick={() => showSignUpModal()}>Sign Up</button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 transition-transform duration-300"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={`lg:hidden absolute top-[80px] left-0 right-0 bg-[#f4fbfa] shadow-lg z-[9999] transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
                            }`}
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            <Link href="/analyze/profile" className="text-base font-normal text-black hover:text-[#0C58C1] p-2 transform transition-transform duration-200 hover:translate-x-2">What We Do</Link>
                            <Link href="/analyze/profile" className="text-base font-normal text-black hover:text-[#0C58C1] p-2 transform transition-transform duration-200 hover:translate-x-2">Why Choose Us</Link>
                            <Link href="/analyze/profile" className="text-base font-normal text-black hover:text-[#0C58C1] p-2 transform transition-transform duration-200 hover:translate-x-2">How It Works</Link>
                            <Link href="/analyze/profile" className="text-base font-normal text-black hover:text-[#0C58C1] p-2 transform transition-transform duration-200 hover:translate-x-2">Pricing</Link>
                            <Link href="/analyze/profile" className="text-base font-normal text-black hover:text-[#0C58C1] p-2 transform transition-transform duration-200 hover:translate-x-2">Testimonials</Link>
                            <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                                {user ? (
                                    <div>
                                        <button className="text-sm font-medium text-[#0C58C1] text-center p-3 hover:text-blue-400 rounded-full transition-all duration-300 cursor-pointer" onClick={() => router.push("/analyze")}>Analysis</button>
                                        <button className="text-sm font-normal text-white text-center p-3 bg-[#0C58C1] rounded-full hover:bg-white hover:text-[#0C58C1] transition-all duration-300 cursor-pointer" onClick={() => handleLogout()}>Logout</button>
                                    </div>
                                ) : (
                                    <div>
                                        <button className="text-sm font-medium text-[#0C58C1] text-center p-3 hover:text-blue-400 rounded-full transition-all duration-300 cursor-pointer" onClick={() => showLoginModal()}>Login</button>
                                        <button className="text-sm font-normal text-white text-center p-3 bg-[#0C58C1] rounded-full hover:bg-white hover:text-[#0C58C1] transition-all duration-300 cursor-pointer" onClick={() => showSignUpModal()}>Sign Up</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Signup />
                <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
                <ResetPassword />
                <SendEmailModal />
                <PasswordResetForm />
            </Suspense>
        </div>
    );
}