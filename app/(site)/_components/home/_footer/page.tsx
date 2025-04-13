import React from "react";
import { FaLinkedin, FaTimes, FaEnvelope, FaDiscord } from "react-icons/fa";
import logo from "../../../../assets/trustLogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white py-8 pt-28 border-t border-gray-200">
      <div className="max-w-[1112px] mx-auto px-4 flex flex-col items-center gap-6">
        {/* Logo */}
        <div>
          <Image
            src={logo} // Replace with the actual path to your logo
            alt="TrustScan Logo"
            width={300}
            height={90}
          />
        </div>

        {/* Social Icons */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 w-full mt-10">
          <div className="flex gap-4 text-gray-600">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="#" aria-label="Close">
              <FaTimes size={20} />
            </a>
            <a href="#" aria-label="Email">
              <FaEnvelope size={20} />
            </a>
            <a href="#" aria-label="Discord">
              <FaDiscord size={20} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
            <a href="#what-we-do" className="hover:text-gray-800">
              What We Do
            </a>
            <a href="#why-choose-us" className="hover:text-gray-800">
              Why Choose Us
            </a>
            <a href="#how-it-works" className="hover:text-gray-800">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-gray-800">
              Pricing
            </a>
            <a href="#contact" className="hover:text-gray-800">
              Contact
            </a>
            <a href="#testimonials" className="hover:text-gray-800">
              Testimonials
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-gray-500 text-sm border-t border-gray-200 pt-4 mt-6 w-full text-center">
        © 2025 Trust Scan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
