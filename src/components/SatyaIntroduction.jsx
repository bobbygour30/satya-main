"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SatyaIntroduction() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-[#2B333C] pt-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Accordion Header */}
        <motion.button
          onClick={() => setOpen(!open)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full flex items-start justify-between text-left group"
        >
          {/* Text Block */}
          <div className="relative h-[140px] sm:h-[160px] w-full max-w-xl font-serif text-white">

            {/* Science */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute left-0 top-0 text-3xl md:text-4xl"
            >
              Science
            </motion.span>

            {/* Artistry */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute left-20 top-10 text-3xl md:text-4xl"
            >
              Artistry
            </motion.span>

            {/* Trust */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-40 top-20 flex items-center gap-3 text-3xl md:text-4xl"
            >
            
              Trust
            </motion.span>
          </div>

          {/* Chevron */}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.4 }}
            className="ml-6 text-[#9E4A47] pt-2"
          >
            <ChevronDown size={36} />
          </motion.span>
        </motion.button>

        {/* Decorative Divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#DFDFDD] to-transparent opacity-40" />

        {/* Expandable Content */}
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
                className="mt-12 space-y-6"
              >
                <p className="text-[#DFDFDD] text-lg leading-relaxed">
                  The name <span className="text-white font-medium">Satya</span>{" "}
                  is derived from a Sanskrit word that means{" "}
                  <span className="italic text-[#FFF8EF]">Truth</span>.
                </p>

                <p className="text-[#DFDFDD] text-lg leading-relaxed">
                  Truth is the foundation of everything we do. We stand for
                  honesty, transparency, and ethical medical care, helping
                  millions discover science-backed solutions for hair and skin.
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
