import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  ChevronRight,
} from "lucide-react";

import ConsultationPopup from "./ConsultationPopup";

/* ================= SEARCH PLACEHOLDERS ================= */
const searchPlaceholders = [
  "Your journey to confidence starts here…",
  "Let’s uncover what’s really right for you.",
  "Not sure where to start? Let’s guide you.",
  "Type acne, transplant, laser… anything you want clarity on.",
  "Discover your path to healthy skin & hair.",
];

const MENU = [
  /* ================= HAIR ================= */
  {
    title: "Hair",
    items: [
      { label: "FUE Hair Transplant", path: "/hair-transplant/fue" },
      { label: "FUT Hair Transplant", path: "/hair-transplant/fut" },
      { label: "Beard Hair Transplant", path: "/beard-hair-transplant" },
      { label: "Eyebrow Reconstruction", path: "/eyebrow-transplant" },
      { label: "Body Hair Transplant", path: "/hair-transplant/body" },
    ],
  },
  /* ================= SKIN ================= */
  {
    title: "Skin",
    items: [
      // Moved to top
      { label: "Concerns", isConcerns: true },
      { label: "Mole Removal", path: "/skin/mole-removal" },
      { label: "Laser Hair Reduction", path: "/skin/laser-hair-reduction" },
      { label: "Chemical Peel", path: "/skin/chemical-peel" },
      { label: "Laser Toning Treatment", path: "/skin/laser-toning" },
    ],
    concerns: [
      { label: "Pigmentation", path: "/skin/concerns/pigmentation" },
      { label: "Wrinkles & Fine Lines", path: "/skin/concerns/wrinkles-fine-lines" },
      { label: "Acne / Acne Scars", path: "/skin/concerns/acne-acne-scars" },
      { label: "Dull Skin & Open Pores", path: "/skin/concerns/dull-skin-open-pores" },
    ],
  },

  /* ================= RESULTS ================= */
  {
    title: "Results",
    items: [
      { label: "Hair Results", path: "/hair-result" },
      { label: "Skin Results", path: "/skin-result" },
      { label: "Case Studies", path: "/before-after" },
    ],
  },

  /* ================= KNOWLEDGE ================= */
  {
    title: "Knowledge",
    items: [
      { label: "News", path: "/news" },
      { label: "Blog", path: "/blogs" },
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
];

const MAX_VISIBLE_ITEMS = 5;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
            <button
              onClick={() => setShowPopup(true)}
              className="flex cursor-pointer items-center gap-1 bg-[#9E4A47] text-white px-4 py-1.5 rounded-full"
            >
              <CalendarDays size={15} /> Book Consultation
            </button>
          </div>
        </div>

        {/* ================= MAIN NAV ================= */}
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="block">
            <img
              className="w-30"
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/3pjpymp9a7vlfhg/c472d799fd6e4d3dacf235cf60fceb3f/original/Logo-2-1.png"
              alt="Satya Logo"
            />
          </Link>

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

          <nav className="hidden lg:flex gap-8 items-center">
            {MENU.map((menu) => (
              <HoverDropdown key={menu.title} {...menu} />
            ))}

            <button
              onClick={() => setShowPopup(true)}
              className="bg-[#9E4A47] cursor-pointer text-white px-6 py-2 rounded-full"
            >
              Book Appointment
            </button>
          </nav>

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
              <div className="flex justify-between items-center mb-6">
                <Link
                  to="/"
                  className="font-bold text-lg text-[#2B333C]"
                  onClick={() => setMobileOpen(false)}
                >
                  SATYA
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                >
                  <X size={28} className="text-[#2B333C]" />
                </button>
              </div>

              {MENU.map((menu) => (
                <MobileAccordion key={menu.title} {...menu} />
              ))}

              <button
                onClick={() => setShowPopup(true)}
                className="mt-8 w-full bg-[#9E4A47] text-white py-3 rounded-xl cursor-pointer font-medium"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}

/* ================= DESKTOP HOVER DROPDOWN ================= */
function HoverDropdown({ title, items, concerns }) {
  const [showMore, setShowMore] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // 'concerns' or null

  const visibleItems = showMore ? items : items.slice(0, MAX_VISIBLE_ITEMS);
  const hasMore = items.length > MAX_VISIBLE_ITEMS;
  const hasConcerns = !!concerns && concerns.length > 0;

  const handleConcernsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSubmenu(activeSubmenu === "concerns" ? null : "concerns");
  };

  return (
    <div
      className="relative group"
      onMouseLeave={() => {
        // setActiveSubmenu(null); // optional
      }}
    >
      <div className="flex items-center gap-1 cursor-pointer px-1 py-2">
        <span className="font-medium text-[#2B333C] group-hover:text-[#9E4A47]">
          {title}
        </span>
        <ChevronDown size={16} className="text-[#828D9C] group-hover:text-[#9E4A47]" />
      </div>

      <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
        <div
          className={`bg-[#FFF8EF] border border-[#DFDFDD] shadow-2xl rounded-xl overflow-hidden flex ${
            activeSubmenu === "concerns" && hasConcerns ? "min-w-[680px]" : "min-w-[320px]"
          }`}
        >
          {/* LEFT COLUMN */}
          <div className="flex-1 p-5">
            <ul className="space-y-2.5 text-sm text-[#2B333C]">
              {visibleItems.map((item, index) => {
                if (item.isConcerns) {
                  return (
                    <li
                      key={index}
                      className={`cursor-pointer transition-colors py-0.5 flex items-center justify-between ${
                        activeSubmenu === "concerns"
                          ? "text-[#9E4A47] font-medium"
                          : "hover:text-[#9E4A47]"
                      }`}
                      onClick={handleConcernsClick}
                    >
                      <span>Concerns</span>
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          activeSubmenu === "concerns" ? "rotate-90" : ""
                        }`}
                      />
                    </li>
                  );
                }

                return (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-[#9E4A47] transition-colors py-0.5"
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>

            {/* ────────────────────────────────────────────── */}
            {/*            VIEW MORE / View All Treatments       */}
            {/* ────────────────────────────────────────────── */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              {showMore ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMore(false);
                  }}
                  className="text-[#9E4A47] hover:text-[#7d3a38] text-sm font-medium flex items-center gap-1.5"
                >
                  <X size={14} /> Close
                </button>
              ) : (
                <>
                  {title === "Hair" && (
                    <Link
                      to="/hair-treatment"
                      className="text-[#9E4A47] hover:text-[#7d3a38] text-sm font-medium flex items-center gap-1.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View More 
                    </Link>
                  )}

                  {title === "Skin" && (
                    <Link
                      to="/skin-treatment"
                      className="text-[#9E4A47] hover:text-[#7d3a38] text-sm font-medium flex items-center gap-1.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View More 
                    </Link>
                  )}

                  {title !== "Hair" && title !== "Skin" && hasMore && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowMore(true);
                      }}
                      className="text-[#9E4A47] hover:text-[#7d3a38] text-sm font-medium flex items-center gap-1.5"
                    >
                      View More 
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - only shown when Concerns is active */}
          {activeSubmenu === "concerns" && hasConcerns && (
            <div className="w-80 bg-[#FFF8F2] p-5 border-l border-[#DFDFDD]">
              <h4 className="font-semibold text-[#2B333C] mb-4 text-base">Skin Concerns</h4>
              <ul className="space-y-2.5 text-sm text-[#2B333C]">
                {concerns.map((concern, idx) => (
                  <li key={idx} className="hover:text-[#9E4A47] transition-colors">
                    <Link to={concern.path} onClick={() => setActiveSubmenu(null)}>
                      {concern.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= MOBILE ACCORDION ================= */
function MobileAccordion({ title, items, concerns }) {
  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [concernsOpen, setConcernsOpen] = useState(false);

  const visibleItems = showMore ? items : items.slice(0, MAX_VISIBLE_ITEMS);
  const hasMore = items.length > MAX_VISIBLE_ITEMS;
  const hasConcerns = !!concerns && concerns.length > 0;

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
        <div className="pb-6 pl-3 pr-2 space-y-5 text-sm">
          {/* Main items + Concerns at top */}
          {visibleItems.map((item, index) => {
            if (item.isConcerns) {
              return (
                <div key={index}>
                  <button
                    onClick={() => setConcernsOpen(!concernsOpen)}
                    className="w-full flex justify-between items-center py-2 font-medium text-[#2B333C] hover:text-[#9E4A47]"
                  >
                    Concerns
                    <ChevronDown
                      size={16}
                      className={`transition ${concernsOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {concernsOpen && (
                    <div className="pl-4 mt-1 space-y-2">
                      {concerns.map((concern, cIdx) => (
                        <div key={cIdx}>
                          <Link
                            to={concern.path}
                            className="hover:text-[#9E4A47] transition-colors block py-1"
                            onClick={() => setOpen(false)}
                          >
                            {concern.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={index}>
                <Link
                  to={item.path}
                  className="hover:text-[#9E4A47] transition-colors block py-1"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}

          {/* ────────────────────────────────────────────── */}
          {/*            VIEW MORE in mobile too               */}
          {/* ────────────────────────────────────────────── */}
          {(title === "Hair" || title === "Skin" || hasMore) && (
            <div className="pt-3">
              {showMore ? (
                <button
                  onClick={() => setShowMore(false)}
                  className="text-[#9E4A47] hover:text-[#7d3a38] text-sm font-medium flex items-center gap-1.5"
                >
                  <X size={14} /> Close
                </button>
              ) : (
                <>
                  {title === "Hair" && (
                    <Link
                      to="/hair-treatment"
                      className="text-[#9E4A47] hover:text-[#7d3a38] text-sm font-medium flex items-center gap-1.5"
                      onClick={() => setOpen(false)}
                    >
                      View More
                    </Link>
                  )}

                  {title === "Skin" && (
                    <Link
                      to="/skin-treatment"
                      className="text-[#9E4A47] hover:text-[#7d3a38] text-sm font-medium flex items-center gap-1.5"
                      onClick={() => setOpen(false)}
                    >
                      View More
                    </Link>
                  )}

                  {title !== "Hair" && title !== "Skin" && hasMore && (
                    <button
                      onClick={() => setShowMore(true)}
                      className="text-[#9E4A47] hover:text-[#7d3a38] text-sm font-medium flex items-center gap-1.5"
                    >
                      View More
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}