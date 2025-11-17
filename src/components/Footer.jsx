// Footer.jsx
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import assets from "../assets/assets";

export default function Footer() {
  return (
    <footer className="bg-[#2B333C] text-white overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <img src={assets.logo} className="w-40" alt="" />
            <p className="text-[#DFDFDD] text-base leading-relaxed max-w-md">
              The world’s largest virtual clinic for women’s and family health — 
              delivering personalized, evidence-based care from fertility to menopause 
              and every stage in between.
            </p>
            <div className="flex gap-4 mt-8">
              {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#9E4A47]/20 hover:bg-[#9E4A47] flex items-center justify-center transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">For Members</h3>
            <ul className="space-y-3 text-[#DFDFDD] text-sm">
              {["Check Eligibility", "Book a Consultation", "Find a Provider", "Member Stories", "Help Center"].map((item) => (
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
              {["About Maven", "Careers", "Press & Media", "Blog", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#FFF8EF] transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Get in Touch</h3>
            <ul className="space-y-4 text-[#DFDFDD] text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#9E4A47]" />
                <a href="mailto:hello@mavenclinic.com" className="hover:text-[#FFF8EF]">hello@mavenclinic.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#9E4A47]" />
                <span>1-800-MAVEN-CARE</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#9E4A47]" />
                <span>New York, NY</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-[#828D9C]/30">
              <ul className="space-y-2 text-xs text-[#828D9C]">
                {["Privacy Policy", "Terms of Service", "HIPAA Notice", "Cookie Policy"].map((item) => (
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

      {/* Bottom Bar with Wave */}
      <div className="relative bg-[#2B333C] border-t border-[#828D9C]/30">
        {/* Subtle wave decoration */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 opacity-30"
            preserveAspectRatio="none"
          >
            
            <defs>
              <linearGradient id="footerWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9E4A47" />
                <stop offset="100%" stopColor="#84332F" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#DFDFDD]">
          <p>&copy; {new Date().getFullYear()} Maven Clinic. All rights reserved.</p>
          <p className="mt-3 md:mt-0">
            Made with <span className="text-[#9E4A47]">♥</span> for families everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}