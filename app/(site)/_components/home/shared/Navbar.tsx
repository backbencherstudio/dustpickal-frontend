"use client";
import Link from "next/link";
import CustomImage from "@/components/reusable/CustomImage";
import Logo from "@/public/assets/client/logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);
    const logo = Logo.src;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full bg-[#F1F1F1]">
            <div className="max-w-[1440px] mx-auto flex flex-row justify-between items-center py-5 px-4 md:px-6">
                <div>
                    <Link href="/">
                        <Image src={logo} alt="logo" width={140} height={40}/>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex flex-row gap-8">
                    <Link href="/analyze/profile" className="text-sm xl:text-base font-normal text-black hover:text-[#0C58C1]">What We Do</Link>
                    <Link href="/analyze/profile" className="text-sm xl:text-base font-normal text-black hover:text-[#0C58C1]">Why Choose Us</Link>
                    <Link href="/analyze/profile" className="text-sm xl:text-base font-normal text-black hover:text-[#0C58C1]">How It Works</Link>
                    <Link href="/analyze/profile" className="text-sm xl:text-base font-normal text-black hover:text-[#0C58C1]">Pricing</Link>
                    <Link href="/analyze/profile" className="text-sm xl:text-base font-normal text-black hover:text-[#0C58C1]">Testimonials</Link>
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden lg:flex flex-row gap-4">
                    <Link href="/analyze/profile" className="text-sm font-medium text-[#0C58C1] px-[26px] py-[15px] hover:bg-[#0C58C1] hover:text-white rounded-full transition-colors">Login</Link>
                    <Link href="/analyze/profile" className="text-sm font-normal text-white px-[26px] py-[15px] bg-[#0C58C1] rounded-full hover:bg-[#0946A0] transition-colors">Sign Up</Link>
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
                    className={`lg:hidden absolute top-[80px] left-0 right-0 bg-[#F1F1F1] shadow-lg z-50 transition-all duration-300 ease-in-out overflow-hidden ${
                        isMenuOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
                    }`}
                >
                    <div className="flex flex-col p-4 space-y-4">
                        <Link href="/analyze/profile" className="text-base font-normal text-black hover:text-[#0C58C1] p-2 transform transition-transform duration-200 hover:translate-x-2">What We Do</Link>
                        <Link href="/analyze/profile" className="text-base font-normal text-black hover:text-[#0C58C1] p-2 transform transition-transform duration-200 hover:translate-x-2">Why Choose Us</Link>
                        <Link href="/analyze/profile" className="text-base font-normal text-black hover:text-[#0C58C1] p-2 transform transition-transform duration-200 hover:translate-x-2">How It Works</Link>
                        <Link href="/analyze/profile" className="text-base font-normal text-black hover:text-[#0C58C1] p-2 transform transition-transform duration-200 hover:translate-x-2">Pricing</Link>
                        <Link href="/analyze/profile" className="text-base font-normal text-black hover:text-[#0C58C1] p-2 transform transition-transform duration-200 hover:translate-x-2">Testimonials</Link>
                        <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                            <Link href="/analyze/profile" className="text-sm font-medium text-[#0C58C1] text-center p-3 hover:bg-[#0C58C1] hover:text-white rounded-full transition-all duration-300">Login</Link>
                            <Link href="/analyze/profile" className="text-sm font-normal text-white text-center p-3 bg-[#0C58C1] rounded-full hover:bg-[#0946A0] transition-all duration-300">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




