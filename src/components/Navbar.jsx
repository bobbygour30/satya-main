import { useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Search,
  Menu,
  X,
  Globe,
  CalendarDays,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

/* ================= SEARCH PLACEHOLDERS ================= */
const searchPlaceholders = [
  "Your journey to confidence starts here…",
  "Let’s uncover what’s really right for you.",
  "Not sure where to start? Let’s guide you.",
  "Type acne, transplant, laser… anything you want clarity on.",
  "Discover your path to healthy skin & hair.",
];

/* ================= MENU DATA ================= */
const MENU = [
  {
    title: "Why Satya",
    items: [
      "Philosophy",
      "Our Doctors",
      "Facility & Technology",
      "Awards & Recognition",
      "Media Coverage",
      "Campaign",
      "Contact Us",
      "International Patients",
      "FAQ",
    ],
  },
  {
    title: "Skin",
    items: ["Concerns", "Treatments", "Case Studies", "Testimonials"],
  },
  {
    title: "Hair",
    items: ["Concerns", "Treatments", "Case Studies", "Testimonials"],
  },
  {
    title: "Knowledge",
    items: ["News", "Blog", "Guides", "Know Your Skin"],
  },
  {
    title: "Utility",
    items: ["Graft Estimator", "Build Routine", "Membership"],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prev) => (prev + 1) % searchPlaceholders.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8EF] shadow-sm">
      {/* ================= TOP BAR ================= */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-sm border-b border-[#DFDFDD] bg-[#FCEBDE]">
        <div className="flex gap-6 text-[#828D9C]">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> DLF Phase 4, Gurgaon | Delhi NCR
          </span>
          <span className="flex items-center gap-1">
            <Phone size={14} /> +91 9910 094945
          </span>
        </div>

        <div className="flex gap-6 items-center">
          <button className="flex items-center gap-1 text-[#9E4A47] font-medium">
            <MessageCircle size={15} /> WhatsApp Expert
          </button>
          <button className="flex items-center gap-1 text-[#2B333C]">
            <Globe size={15} /> EN | HI
          </button>
          <button className="flex items-center gap-1 bg-[#9E4A47] text-white px-4 py-1.5 rounded-full">
            <CalendarDays size={15} /> Book Consultation
          </button>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div>
          <img className="w-30" src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/3pjpymp9a7vlfhg/c472d799fd6e4d3dacf235cf60fceb3f/original/Logo-2-1.png" alt="" />
        </div>

        {/* SEARCH */}
        <div className="hidden lg:block relative w-[420px]">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#828D9C]"
          />
          <input
            placeholder={searchPlaceholders[placeholderIndex]}
            className="w-full pl-10 pr-4 py-2 border border-[#DFDFDD] rounded-full text-sm focus:ring-2 focus:ring-[#9E4A47] outline-none bg-white"
          />
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex gap-8 items-center">
          {MENU.map((menu) => (
            <HoverDropdown key={menu.title} {...menu} />
          ))}

          <button className="bg-[#9E4A47] text-white px-6 py-2 rounded-full">
            Book Appointment
          </button>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-[#2B333C]"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="bg-[#FFF8EF] w-[85%] h-full p-6 overflow-y-auto">
            <div className="flex justify-between mb-6">
              <div className="font-bold text-lg text-[#2B333C]">SATYA</div>
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} className="text-[#2B333C]" />
              </button>
            </div>

            {MENU.map((menu) => (
              <MobileAccordion key={menu.title} {...menu} />
            ))}

            <button className="mt-6 w-full bg-[#9E4A47] text-white py-3 rounded-xl">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ================= STABLE HOVER DROPDOWN ================= */
function HoverDropdown({ title, items }) {
  return (
    <div className="relative group">
      <div className="flex items-center gap-1 cursor-pointer px-1 py-2">
        <span className="font-medium text-[#2B333C] group-hover:text-[#9E4A47]">
          {title}
        </span>
        <ChevronDown size={16} className="text-[#828D9C]" />
      </div>

      <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
        <div className="bg-[#FFF8EF] border border-[#DFDFDD] shadow-xl rounded-xl p-4 w-64">
          <ul className="space-y-2 text-sm text-[#2B333C]">
            {items.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-[#9E4A47]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ================= MOBILE ACCORDION ================= */
function MobileAccordion({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#DFDFDD]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 font-medium text-[#2B333C]"
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition text-[#828D9C] ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="pb-4 pl-3 space-y-2 text-sm text-[#828D9C]">
          {items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}


// import { a } from "framer-motion/client";
// import React, { useState } from "react";
// import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
// import  assets  from "../assets/assets";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [whyOpen, setWhyOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-sm fixed z-50 top-0">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <div className="flex items-center space-x-2 cursor-pointer">
//           <img src={assets.logo} className="w-40" alt="" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8 text-[#2B333C] font-medium">

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setWhyOpen(!whyOpen)}
//               className="flex items-center gap-1 hover:text-[#9E4A47] transition"
//             >
//               Why Maven <HiChevronDown size={16} />
//             </button>

//             {whyOpen && (
//               <div className="absolute top-8 left-0 w-44 bg-white shadow-lg rounded-md py-3 border border-[#DFDFDD] animate-[fadeIn_0.2s_ease-out]">
//                 <a className="block px-4 py-2 hover:bg-[#FFF8EF] cursor-pointer transition">Overview</a>
//                 <a className="block px-4 py-2 hover:bg-[#FFF8EF] cursor-pointer transition">Testimonials</a>
//                 <a className="block px-4 py-2 hover:bg-[#FFF8EF] cursor-pointer transition">Our Approach</a>
//               </div>
//             )}
//           </div>

//           <a className="hover:text-[#9E4A47] transition cursor-pointer">Employers</a>
//           <a className="hover:text-[#9E4A47] transition cursor-pointer">Health Plans</a>
//           <a className="hover:text-[#9E4A47] transition cursor-pointer">Consultants</a>
//           <a className="hover:text-[#9E4A47] transition cursor-pointer">Individuals</a>

//           <button className="flex items-center gap-1 hover:text-[#9E4A47] transition">
//             Resources <HiChevronDown size={16} />
//           </button>

//           <button className="border border-[#B87C72] text-[#2B333C] px-5 py-1.5 rounded-lg hover:bg-[#FFF8EF] transition">
//             Login
//           </button>

//           <button className="bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-5 py-1.5 rounded-lg hover:opacity-90 transition shadow-md">
//             Book a demo
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-[#2B333C]"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
//         </button>
//       </div>

//       {/* MOBILE MENU WITH SMOOTH ANIMATION */}
//       <div
//         className={`
//           md:hidden overflow-hidden bg-[#FFF8EF] shadow-inner transition-all duration-300 border-t border-[#FCEBDE]
//           ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
//         `}
//       >
//         <div className="flex flex-col space-y-4 px-6 py-4 text-[#2B333C] font-medium">

//           <details className="cursor-pointer">
//             <summary className="flex items-center justify-between py-2 text-[#9E4A47] font-semibold">
//               Why Maven
//             </summary>
//             <div className="pl-4 space-y-2 pt-2 text-[#828D9C]">
//               <a className="block py-1 hover:text-[#9E4A47] transition">Overview</a>
//               <a className="block py-1 hover:text-[#9E4A47] transition">Testimonials</a>
//               <a className="block py-1 hover:text-[#9E4A47] transition">Our Approach</a>
//             </div>
//           </details>

//           <a className="hover:text-[#9E4A47] transition">Employers</a>
//           <a className="hover:text-[#9E4A47] transition">Health Plans</a>
//           <a className="hover:text-[#9E4A47] transition">Consultants</a>
//           <a className="hover:text-[#9E4A47] transition">Individuals</a>
//           <a className="hover:text-[#9E4A47] transition">Resources</a>

//           <button className="border border-[#B87C72] text-[#2B333C] px-5 py-2 rounded-lg hover:bg-white transition">
//             Login
//           </button>

//           <button className="bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-5 py-2 rounded-lg hover:opacity-90 transition shadow-md">
//             Book a demo
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;