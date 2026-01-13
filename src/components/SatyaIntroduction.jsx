import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SatyaIntroduction() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-[#2B333C] pt-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Top Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#FFF8EF] font-serif text-3xl md:text-4xl mb-10"
        >
          Satya Introduction
        </motion.h2>

        {/* Accordion Header */}
        <motion.button
          onClick={() => setOpen(!open)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-full flex items-center justify-between text-left group"
        >
          <h3 className="font-serif text-4xl md:text-5xl text-white leading-tight max-w-4xl">
            World’s Leading{" "}
            <span className="italic text-[#FFF8EF]">
              Skin & Hair Transplant Clinic
            </span>
          </h3>

          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.4 }}
            className="ml-6 text-[#9E4A47]"
          >
            <ChevronDown size={36} />
          </motion.span>
        </motion.button>

        {/* Decorative Divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#DFDFDD] to-transparent opacity-40" />

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
                className="mt-10 space-y-6"
              >
                <p className="text-[#DFDFDD] text-lg leading-relaxed">
                  The name <span className="text-white font-medium">Satya</span>{" "}
                  is derived from a Sanskrit word that means{" "}
                  <span className="italic text-[#FFF8EF]">Truth</span>.
                </p>

                <p className="text-[#DFDFDD] text-lg leading-relaxed">
                  Truth is the foundation of everything we do. We stand for
                  honesty, transparency, and ethical medical care, and over the
                  years, we have helped millions discover real, science-backed
                  solutions for their hair and skin concerns.
                </p>

                <p className="text-[#DFDFDD] text-lg leading-relaxed">
                  <span className="text-white font-medium">
                    Satya Skin & Hair Solutions
                  </span>
                  , established in 2005, stands as a global leader in dermatology
                  and hair restoration. Recognized as a premier institute, Satya
                  is renowned for its international, state-of-the-art facilities
                  and advanced treatment protocols.
                </p>

                <p className="text-[#DFDFDD] text-lg leading-relaxed">
                  The clinic specializes in skin laser treatments, anti-aging
                  solutions, and both surgical and non-surgical hair restoration
                  procedures, with particular expertise in corrective and repair
                  hair transplant surgeries.
                </p>

                {/* Accent CTA */}
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
