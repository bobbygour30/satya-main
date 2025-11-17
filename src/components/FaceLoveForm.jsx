"use client";
import { motion } from "framer-motion";
import React from "react";

export default function FaceLoveForm() {
  return (
    <section className="w-full bg-[#FFF8EF] py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto bg-white rounded-[60px] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-lg border border-[#FCEBDE]">

        {/* LEFT IMAGE */}
        <div className="w-full h-[450px] md:h-auto">
          <img
            src="https://optim.tildacdn.one/tild3639-3866-4930-b935-646564306334/-/format/webp/Clinique_Zahi_vue_1_.jpg.webp"
            alt="Maven Clinic"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-8 md:p-14 flex flex-col justify-center">

          {/* HEADING WITH ANIMATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-light text-[#2B333C] leading-tight">
              We care about
            </h1>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl italic font-serif -mt-2 text-[#9E4A47]"
            >
              your journey
            </motion.h2>
          </motion.div>

          {/* SUPPORT TEXT */}
          <p className="text-base text-[#828D9C] max-w-xs mb-6 leading-relaxed">
            Let us know how we can support you through every stage of women’s and family health.
          </p>

          {/* FORM */}
          <form className="space-y-5">

            {/* INPUTS */}
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-[#FFF8EF] border border-[#FCEBDE] rounded-lg px-5 py-3.5 text-sm text-[#2B333C] placeholder-[#828D9C] outline-none focus:border-[#9E4A47] transition"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full bg-[#FFF8EF] border border-[#FCEBDE] rounded-lg px-5 py-3.5 text-sm text-[#2B333C] placeholder-[#828D9C] outline-none focus:border-[#9E4A47] transition"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-[#FFF8EF] border border-[#FCEBDE] rounded-lg px-5 py-3.5 text-sm text-[#2B333C] placeholder-[#828D9C] outline-none focus:border-[#9E4A47] transition"
            />

            {/* QUESTION */}
            <div>
              <p className="text-sm font-medium text-[#2B333C] mb-3">
                Which stage of care are you exploring?
              </p>

              <div className="space-y-2 text-sm text-[#828D9C]">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="duration" className="w-4 h-4 accent-[#9E4A47]" />
                  Trying to conceive
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="duration" className="w-4 h-4 accent-[#9E4A47]" />
                  Pregnancy & postpartum
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="duration" className="w-4 h-4 accent-[#9E4A47]" />
                  Menopause & ongoing care
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="duration" className="w-4 h-4 accent-[#9E4A47]" />
                  Pediatrics & parenting
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="duration" className="w-4 h-4 accent-[#9E4A47]" />
                  Not sure yet
                </label>
              </div>
            </div>

            {/* PRIVACY CHECKBOX */}
            <label className="flex items-center gap-3 text-sm text-[#828D9C] cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded accent-[#9E4A47]" />
              I agree to the processing of personal data
            </label>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white rounded-full px-10 py-3.5 mt-6 text-sm font-medium hover:opacity-90 transition-all shadow-lg"
            >
              Book a consultation
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}