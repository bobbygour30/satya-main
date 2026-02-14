"use client";

import { motion } from "framer-motion";

export default function SatyaIntroduction() {
  return (
    <section className="w-full bg-[#FCEBDE] py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* ================= MANIFESTO LINE ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            font-serif text-[#2B333C]
            text-[20px] sm:text-[36px] md:text-[48px] lg:text-[60px]
            tracking-wide leading-tight
          "
        >
          <span className="opacity-100">Science</span>
          <span className="mx-3 opacity-40">|</span>
          <span className="opacity-90">Artistry</span>
          <span className="mx-3 opacity-40">|</span>
          <span className="opacity-80">Trust</span>
        </motion.h2>

        {/* ================= MAIN HEADING ================= */}
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="
            mt-4 font-medium text-[#2B333C]
            text-sm sm:text-xl md:text-2xl lg:text-3xl
          "
        >
          World’s Leading Skin & Hair Transplant Clinic
        </motion.h3>

        {/* SUBTLE DIVIDER */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#DFDFDD] to-transparent" />

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 max-w-3xl mx-auto space-y-5 text-left"
        >
          <p className="text-[#828D9C] text-sm sm:text-base md:text-lg leading-relaxed">
            <span className="text-[#2B333C] font-medium">
              Satya Skin & Hair Solutions
            </span>
            , established in 2005, is a global leader in dermatology and hair
            restoration with world-class facilities.
          </p>

          <p className="text-[#828D9C] text-sm sm:text-base md:text-lg leading-relaxed">
            The name{" "}
            <span className="text-[#2B333C] font-medium">Satya</span> is derived
            from a Sanskrit word meaning{" "}
            <span className="italic text-[#2B333C]">Truth</span>.
          </p>

          <p className="text-[#828D9C] text-sm sm:text-base md:text-lg leading-relaxed">
            Truth is the foundation of everything we do. We stand for honesty,
            transparency, and ethical medical care.
          </p>

          {/* ACCENT LINE */}
          <div className="pt-6">
            <span className="inline-block h-[3px] w-20 rounded-full bg-gradient-to-r from-[#9E4A47] to-[#84332F]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
