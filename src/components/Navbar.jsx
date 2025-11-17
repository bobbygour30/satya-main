import { a } from "framer-motion/client";
import React, { useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import  assets  from "../assets/assets";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed z-50 top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={assets.logo} className="w-40" alt="" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-[#2B333C] font-medium">

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setWhyOpen(!whyOpen)}
              className="flex items-center gap-1 hover:text-[#9E4A47] transition"
            >
              Why Maven <HiChevronDown size={16} />
            </button>

            {whyOpen && (
              <div className="absolute top-8 left-0 w-44 bg-white shadow-lg rounded-md py-3 border border-[#DFDFDD] animate-[fadeIn_0.2s_ease-out]">
                <a className="block px-4 py-2 hover:bg-[#FFF8EF] cursor-pointer transition">Overview</a>
                <a className="block px-4 py-2 hover:bg-[#FFF8EF] cursor-pointer transition">Testimonials</a>
                <a className="block px-4 py-2 hover:bg-[#FFF8EF] cursor-pointer transition">Our Approach</a>
              </div>
            )}
          </div>

          <a className="hover:text-[#9E4A47] transition cursor-pointer">Employers</a>
          <a className="hover:text-[#9E4A47] transition cursor-pointer">Health Plans</a>
          <a className="hover:text-[#9E4A47] transition cursor-pointer">Consultants</a>
          <a className="hover:text-[#9E4A47] transition cursor-pointer">Individuals</a>

          <button className="flex items-center gap-1 hover:text-[#9E4A47] transition">
            Resources <HiChevronDown size={16} />
          </button>

          <button className="border border-[#B87C72] text-[#2B333C] px-5 py-1.5 rounded-lg hover:bg-[#FFF8EF] transition">
            Login
          </button>

          <button className="bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-5 py-1.5 rounded-lg hover:opacity-90 transition shadow-md">
            Book a demo
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#2B333C]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU WITH SMOOTH ANIMATION */}
      <div
        className={`
          md:hidden overflow-hidden bg-[#FFF8EF] shadow-inner transition-all duration-300 border-t border-[#FCEBDE]
          ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col space-y-4 px-6 py-4 text-[#2B333C] font-medium">

          <details className="cursor-pointer">
            <summary className="flex items-center justify-between py-2 text-[#9E4A47] font-semibold">
              Why Maven
            </summary>
            <div className="pl-4 space-y-2 pt-2 text-[#828D9C]">
              <a className="block py-1 hover:text-[#9E4A47] transition">Overview</a>
              <a className="block py-1 hover:text-[#9E4A47] transition">Testimonials</a>
              <a className="block py-1 hover:text-[#9E4A47] transition">Our Approach</a>
            </div>
          </details>

          <a className="hover:text-[#9E4A47] transition">Employers</a>
          <a className="hover:text-[#9E4A47] transition">Health Plans</a>
          <a className="hover:text-[#9E4A47] transition">Consultants</a>
          <a className="hover:text-[#9E4A47] transition">Individuals</a>
          <a className="hover:text-[#9E4A47] transition">Resources</a>

          <button className="border border-[#B87C72] text-[#2B333C] px-5 py-2 rounded-lg hover:bg-white transition">
            Login
          </button>

          <button className="bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-5 py-2 rounded-lg hover:opacity-90 transition shadow-md">
            Book a demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;