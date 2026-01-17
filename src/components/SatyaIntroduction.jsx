"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SatyaIntroduction() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-[#2B333C] py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* TOGGLE HEADER */}
        <motion.button
          onClick={() => setOpen(!open)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full flex flex-col items-center gap-10"
        >
          {/* MANIFESTO HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              font-serif text-white
              text-[48px] sm:text-[64px] md:text-[88px] lg:text-[100px]
              tracking-wide leading-tight
            "
          >
            <span className="opacity-100">Science</span>
            <span className="mx-4 opacity-40">|</span>
            <span className="opacity-95">Artistry</span>
            <span className="mx-4 opacity-40">|</span>
            <span className="opacity-90">Trust</span>
          </motion.h2>

          {/* Chevron */}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#9E4A47]"
          >
            <ChevronDown size={42} />
          </motion.span>
        </motion.button>

        {/* SUBTLE DIVIDER */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* EXPANDABLE CONTENT */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-16 max-w-3xl mx-auto space-y-6 text-left"
              >
                <p className="text-[#DFDFDD] text-lg leading-relaxed">
                  The name{" "}
                  <span className="text-white font-medium">Satya</span> is derived
                  from a Sanskrit word meaning{" "}
                  <span className="italic text-[#FFF8EF]">Truth</span>.
                </p>

                <p className="text-[#DFDFDD] text-lg leading-relaxed">
                  Truth is the foundation of everything we do. We stand for
                  honesty, transparency, and ethical medical care.
                </p>

                <p className="text-[#DFDFDD] text-lg leading-relaxed">
                  <span className="text-white font-medium">
                    Satya Skin & Hair Solutions
                  </span>
                  , established in 2005, is a global leader in dermatology and
                  hair restoration with world-class facilities.
                </p>

                <p className="text-[#DFDFDD] text-lg leading-relaxed">
                  We specialize in laser skin treatments, anti-aging solutions,
                  and advanced hair restoration procedures.
                </p>

                {/* Accent */}
                <div className="pt-6">
                  <span className="inline-block h-[3px] w-24 rounded-full bg-gradient-to-r from-[#9E4A47] to-[#84332F]" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
