import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SatyaIntroduction() {
  return (
    <section className="w-full bg-[#2B333C] relative overflow-hidden py-16 md:py-20 px-6 flex items-center justify-center">
      
      {/* ================= DECORATIVE CURVED SVG ================= */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0 200 C400 350 900 50 1440 200"
            stroke="#DFDFDD"
            strokeWidth="1.2"
          />
          <path
            d="M0 500 C450 650 900 350 1440 500"
            stroke="#DFDFDD"
            strokeWidth="1.1"
          />
          <path
            d="M0 350 C450 500 950 150 1440 350"
            stroke="#DFDFDD"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl text-center mx-auto"
      >
        {/* Tag */}
        <p className="text-sm tracking-widest uppercase text-[#9E4A47] font-medium mb-4">
          Satya Introduction
        </p>

        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          A Clinic Built on <br />
          <span className="italic font-serif text-[#FFF8EF]">
            Truth, Care & Clinical Integrity
          </span>
        </h2>

        {/* Main Description */}
        <p className="text-[#DFDFDD] mt-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Choosing a skin or hair clinic is a deeply personal decision. At Satya,
          this choice is honored through honest consultations, customized treatment
          plans, and evidence-based protocols never aggressive sales or unrealistic
          guarantees.
        </p>

        <p className="text-[#DFDFDD] mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Every treatment begins with understanding the individual medical history,
          lifestyle, expectations, and long-term goals ensuring results that are
          both aesthetically refined and medically responsible.
        </p>

        {/* Highlight Card */}
        <div className="mt-10 bg-[#FFF8EF] text-[#2B333C] rounded-2xl p-8 md:p-10 shadow-lg max-w-3xl mx-auto">
          <p className="font-medium leading-relaxed">
            Satya is widely recognized for its expertise in corrective hair
            transplants, helping patients recover from failed or poorly planned
            procedures elsewhere.
          </p>

          <p className="mt-4 text-[#828D9C] leading-relaxed">
            The focus is never on maximizing graft numbers, but on donor safety,
            natural aesthetics, and long-term planning reflecting true clinical
            responsibility.
          </p>

          <div className="h-px bg-[#DFDFDD] my-6" />

          <p className="text-[#828D9C] leading-relaxed">
            Transparency remains central to Satya’s philosophy. Patients are clearly
            informed about outcomes, recovery timelines, required sessions, and
            maintenance reducing anxiety and building lasting trust.
          </p>
        </div>

        {/* CTA Buttons (Hero-style) */}
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <button className="px-6 py-3 bg-gradient-to-r from-[#9E4A47] to-[#84332F] hover:opacity-90 text-white font-medium rounded-lg transition shadow-lg">
            Explore Our Philosophy
          </button>

          <button className="px-6 py-3 bg-[#FFF8EF] hover:bg-[#FCEBDE] text-[#2B333C] font-medium rounded-lg transition shadow-md">
            Meet Our Doctors
          </button>
        </div>
      </motion.div>
    </section>
  );
}
