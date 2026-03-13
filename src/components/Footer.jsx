import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

// Your MENU array
const MENU = [
  /* ================= HAIR ================= */
  {
    title: "Hair",
    items: [
      { label: "Concerns", isConcerns: true },
      { label: "FUE Hair Transplant", path: "/hair-transplant/fue" },
      { label: "FUT Hair Transplant", path: "/hair-transplant/fut" },
      { label: "Beard Hair Transplant", path: "/hair-transplant/beard-hair-transplant" },
      { label: "Eyebrow Reconstruction", path: "/hair-transplant/eyebrow-transplant" },
      { label: "Body Hair Transplant", path: "/hair-transplant/body" },
    ],
    concerns: [
      { label: "Telogen Effluvium", path: "/hair-transplant/telogen" },
      { label: "Alopecia Areata", path: "/hair-transplant/alopecia" },
      { label: "Male Hair Loss", path: "/hair-transplant/male-hair-loss" },
      { label: "Female Hair Loss", path: "/hair-transplant/female-hair-loss" },
    ],
  },
  /* ================= SKIN ================= */
  {
    title: "Skin",
    items: [
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


];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2B333C] text-white overflow-hidden relative">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
            
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <img
                src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/3pjpymp9a7vlfhg/c472d799fd6e4d3dacf235cf60fceb3f/original/Logo-2-1.png"
                className="w-40 mb-5"
                alt="Satya Skin & Hair Solutions"
              />
              <p className="text-[#DFDFDD] text-base leading-relaxed max-w-md">
                At Satya Skin & Hair Solutions, we are home to highly skilled
                dermatologists, hair transplant surgeons, and skin specialists.
                We are committed to delivering ethical, personalized, and
                result-driven solutions in hair transplantation and advanced skin
                treatments.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.facebook.com/satyaskinhairsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#9E4A47]/20 hover:bg-[#9E4A47] flex items-center justify-center transition-all duration-300"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="https://www.instagram.com/satyaskinhairsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#9E4A47]/20 hover:bg-[#9E4A47] flex items-center justify-center transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://in.linkedin.com/company/satyaskinhairsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#9E4A47]/20 hover:bg-[#9E4A47] flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://www.youtube.com/@satyaskinhairsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#9E4A47]/20 hover:bg-[#9E4A47] flex items-center justify-center transition-all duration-300"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Dynamically render MENU columns – tighter spacing */}
            {MENU.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-base mb-4 text-white tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-1.5 text-[#DFDFDD] text-xs">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      {item.isConcerns ? (
                        <span className="font-medium text-white block">
                          {item.label}
                        </span>
                      ) : (
                        <Link
                          to={item.path}
                          className="hover:text-[#FFF8EF] transition-colors block"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}

                  {/* Render concerns if they exist – even tighter */}
                  {section.concerns && section.concerns.length > 0 && (
                    <div className="pt-1">
                      {section.concerns.map((concern) => (
                        <li key={concern.label} className="pl-4">
                          <Link
                            to={concern.path}
                            className="hover:text-[#FFF8EF] transition-colors block"
                          >
                            {concern.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  )}
                </ul>
              </div>
            ))}

            {/* Contact – compact */}
            <div>
              <h3 className="font-semibold text-base mb-4 text-white tracking-tight">Get in Touch</h3>

              <ul className="space-y-3 text-[#DFDFDD] text-xs">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-[#9E4A47] mt-0.5" />
                  <span>
                    +91 99995 70494 <br /> +91 99100 94945
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#9E4A47] mt-0.5" />
                  <span>
                    <strong>Gurugram:</strong> 4301, DLF Phase 4, Near Galleria,
                    Gurugram-122002
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#9E4A47] mt-0.5" />
                  <span>
                    <strong>Delhi:</strong> ED 38 /A Pitampura metro station,
                    Madhuban Chowk, Delhi-110034
                  </span>
                </li>
              </ul>

              {/* Legal */}
              <div className="mt-6 pt-5 border-t border-[#828D9C]/30">
                <ul className="space-y-1 text-[10px] text-[#828D9C]">
                  {["Privacy Policy", "Terms & Conditions"].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-[#FFF8EF] transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#2B333C] border-t border-[#828D9C]/30">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-center items-center text-xs text-[#DFDFDD]">
            <p>
              © {new Date().getFullYear()} Satya Skin & Hair Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ===== Floating WhatsApp Button ===== */}
      <a
        href="https://wa.me/919910094945"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.882.76 5.695 2.204 8.165L0 32l7.644-2.178A15.932 15.932 0 0016 31.604c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.21c-2.546 0-5.046-.684-7.21-1.976l-.516-.306-4.537 1.292 1.212-4.42-.336-.54A13.934 13.934 0 012.066 16.4C2.066 8.707 8.31 2.463 16 2.463c7.69 0 13.934 6.244 13.934 13.933 0 7.69-6.244 13.934-13.934 13.934zm7.726-10.49c-.422-.21-2.496-1.23-2.883-1.37-.387-.14-.67-.21-.953.21-.282.422-1.094 1.37-1.342 1.65-.247.28-.493.315-.915.105-.422-.21-1.782-.657-3.395-2.096-1.255-1.12-2.104-2.5-2.35-2.922-.247-.422-.026-.65.184-.86.19-.188.422-.493.633-.74.21-.246.28-.422.422-.703.14-.28.07-.527-.035-.737-.105-.21-.953-2.3-1.305-3.15-.343-.823-.69-.71-.953-.723l-.813-.014c-.28 0-.737.105-1.12.527-.387.422-1.47 1.436-1.47 3.502 0 2.066 1.505 4.064 1.715 4.344.21.28 2.962 4.52 7.18 6.337 1.004.433 1.788.69 2.398.883 1.007.32 1.923.275 2.647.167.807-.12 2.496-1.02 2.848-2.006.352-.987.352-1.832.247-2.007-.105-.175-.387-.28-.81-.49z" />
        </svg>
      </a>
    </>
  );
}