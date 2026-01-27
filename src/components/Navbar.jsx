import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ← Added for routing
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

const MENU = [
  /* ================= WHY SATYA ================= */
  {
    title: "Why Satya",
    items: [
      { label: "Philosophy", path: "/why-satya/philosophy" },
      { label: "Our Doctors", path: "/why-satya/our-doctors" },
      { label: "Facility & Technology", path: "/why-satya/facility-technology" },
      { label: "Awards & Recognition", path: "/why-satya/awards-recognition" },
      { label: "Media Coverage", path: "/why-satya/media-coverage" },
      { label: "Campaign", path: "/why-satya/campaign" },
      { label: "Contact Us", path: "/contact-us" },
      { label: "International Patients", path: "/international-patients" },
      { label: "FAQ", path: "/faq" },
    ],
  },

  /* ================= SKIN ================= */
  {
    title: "Skin",
    items: [
      { label: "Concerns", path: "/skin/concerns" },
      { label: "Treatments", path: "/skin/treatments" },
      { label: "Laser Hair Reduction", path: "/skin/laser-hair-reduction" },
      { label: "Chemical Peel", path: "/skin/chemical-peel" },
      { label: "Mole Removal", path: "/skin/mole-removal" },
      { label: "Laser Toning Treatment", path: "/skin/laser-toning" },
      { label: "Fractional CO2 Laser", path: "/skin/fractional-co2-laser" },
      { label: "HIFU Treatment", path: "/skin/hifu-treatment" },
      { label: "MNRF Treatment", path: "/skin/mnrf-treatment" },
      { label: "Botox", path: "/skin/botox" },
      { label: "Carbon Laser Facial", path: "/skin/carbon-laser-facial" },
      { label: "Dermapen 4", path: "/skin/dermapen-4" },
      { label: "Anti Wrinkle Treatment", path: "/skin/anti-wrinkle-treatment" },
      { label: "5D Facial", path: "/skin/5d-facial" },
      { label: "Fungal Infection", path: "/skin/fungal-infection" },
      { label: "Wart Removal", path: "/skin/wart-removal" },
      { label: "Acne Scar", path: "/skin/acne-scar" },
      { label: "Hydra Facial", path: "/skin/hydra-facial" },
      { label: "Skin Whitening Treatment", path: "/skin/skin-whitening-treatment" },
      { label: "Case Studies", path: "/before-after" },
    ],
  },

  /* ================= HAIR ================= */
  {
    title: "Hair",
    items: [
      { label: "Hair Transplant", path: "/hair-transplant" },
      { label: "Male Hair Transplant", path: "/hair-transplant/male" },
      { label: "Female Hair Transplant", path: "/hair-transplant/female" },
      { label: "FUE Hair Transplant", path: "/hair-transplant/fue" },
      { label: "FUT Hair Transplant", path: "/hair-transplant/fut" },
      { label: "Beard Hair Transplant", path: "/beard-hair-transplant" },
      { label: "Moustache Hair Transplant", path: "/moustache-hair-transplant" },
      { label: "Eyebrow Reconstruction", path: "/eyebrow-transplant" },
      { label: "Afro Hair Transplant", path: "/hair-transplant/afro" },
      { label: "Body Hair Transplant", path: "/hair-transplant/body" },
      { label: "Hair Transplant Repair", path: "/hair-transplant/repair" },
      { label: "Unshaven Hair Transplant", path: "/hair-transplant/unshaven" },
      { label: "Crown Hair Transplant", path: "/hair-transplant/crown" },
      { label: "Temple Hair Transplant", path: "/hair-transplant/temple" },
      { label: "Minimal Scar Hair Transplant", path: "/hair-transplant/minimal-scar" },
      { label: "Long Hair Transplant", path: "/hair-transplant/long" },
      { label: "Synthetic Hair Transplant", path: "/hair-transplant/synthetic" },
      { label: "Case Studies", path: "/hair-transplant/case-studies" },
    ],
  },

  /* ================= RESULTS ================= */
  {
    title: "Results",
    items: [
      { label: "Hair Results", path: "/hair-result" },
      { label: "Skin Results", path: "/skin-result" },
    ],
  },

  /* ================= KNOWLEDGE ================= */
  {
    title: "Knowledge",
    items: [
      { label: "News", path: "/news" },
      { label: "Blog", path: "/blog" },
      { label: "Guides", path: "/guides" },
      { label: "Know Your Skin", path: "/know-your-skin" },
      { label: "Health & Wellness", path: "/health-and-wellness" },
    ],
  },

  /* ================= UTILITY ================= */
  {
    title: "Utility",
    items: [
      { label: "Graft Estimator", path: "/graft-estimator" },
      { label: "Build Routine", path: "/build-routine" },
      { label: "Membership", path: "/membership" },
    ],
  },

  /* ================= OUR CLINIC ================= */
  {
    title: "Our Clinic",
    items: [
      { label: "Delhi", path: "/delhi" },
      { label: "Gurgaon", path: "/gurgaon" },
    ],
  },

  /* ================= COST PAGES ================= */
  {
    title: "Cost",
    items: [
      { label: "Hair Transplant Cost Delhi", path: "/hair-transplant/delhi/cost" },
      { label: "Hair Transplant Cost Gurgaon", path: "/hair-transplant/gurgaon/cost" },
      { label: "Hair Transplant Cost for Men", path: "/hair-transplant/cost/gurgaon/for-men" },
      { label: "Hair Transplant Cost for Women", path: "/hair-transplant/cost/gurgaon/for-women" },
    ],
  },
];


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
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
        <Link to="/" className="block">
          <img
            className="w-30"
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/3pjpymp9a7vlfhg/c472d799fd6e4d3dacf235cf60fceb3f/original/Logo-2-1.png"
            alt="Satya Logo"
          />
        </Link>

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
              <Link
                to="/"
                className="font-bold text-lg text-[#2B333C]"
                onClick={() => setMobileOpen(false)}
              >
                SATYA
              </Link>
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

/* ================= DESKTOP HOVER DROPDOWN ================= */
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
            {items.map((item, index) => {
              const isLinkItem = typeof item === "object" && item.path;
              const label = isLinkItem ? item.label : item;
              const path = isLinkItem ? item.path : null;

              return (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#9E4A47] transition-colors"
                >
                  {path ? <Link to={path}>{label}</Link> : label}
                </li>
              );
            })}
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
          {items.map((item, index) => {
            const isLinkItem = typeof item === "object" && item.path;
            const label = isLinkItem ? item.label : item;
            const path = isLinkItem ? item.path : null;

            return (
              <div key={index}>
                {path ? (
                  <Link
                    to={path}
                    className="hover:text-[#9E4A47] transition-colors"
                    onClick={() => {
                      /* Optional: close mobile menu on click */
                    }}
                  >
                    {label}
                  </Link>
                ) : (
                  label
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
