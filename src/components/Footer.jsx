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
import assets from "../assets/assets";

export default function Footer() {
  return (
    <footer className="bg-[#2B333C] text-white overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <img src={assets.logo} className="w-40 mb-5" alt="Satya Skin & Hair Solutions" />
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

          {/* Treatments */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Treatments</h3>
            <ul className="space-y-3 text-[#DFDFDD] text-sm">
              {[
                "Hair Transplant",
                "PRP Therapy",
                "Skin Treatments",
                "Laser Procedures",
                "Aesthetic Dermatology",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#FFF8EF] transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Company</h3>
            <ul className="space-y-3 text-[#DFDFDD] text-sm">
              {[
                "About Us",
                "Our Doctors",
                "Before & After",
                "Blogs",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#FFF8EF] transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Get in Touch</h3>

            <ul className="space-y-4 text-[#DFDFDD] text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#9E4A47] mt-1" />
                <span>+91 99995 70494 <br /> +91 99100 94945</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#9E4A47] mt-1" />
                <span>
                  <strong>Gurugram:</strong> 4301, DLF Phase 4, Near Galleria, Gurugram-122002
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#9E4A47] mt-1" />
                <span>
                  <strong>Delhi:</strong> ED 38 /A Pitampura metro station, Madhuban Chowk, Delhi-110034
                </span>
              </li>
            </ul>

            {/* Legal */}
            <div className="mt-8 pt-6 border-t border-[#828D9C]/30">
              <ul className="space-y-2 text-xs text-[#828D9C]">
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
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#DFDFDD]">
          <p>
            © {new Date().getFullYear()} Satya Skin & Hair Solutions. All rights
            reserved.
          </p>
          <p className="mt-3 md:mt-0">
            Crafted with <span className="text-[#9E4A47]">♥</span> for confidence
            & care
          </p>
        </div>
      </div>
    </footer>
  );
}
