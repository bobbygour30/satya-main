"use client";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection () {
  return (
    <section className="w-full bg-[#FFF8EF] px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* ================= LEFT TEXT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4"
        >
          <p className="text-xs tracking-widest text-[#B87C72] mb-4">
            OUR OFFERS
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] mb-6">
            WHAT WE DO
          </h2>

          <p className="text-sm text-[#828D9C] leading-relaxed max-w-sm">
            Our team provides personalized care — from diagnosis to advanced
            aesthetic & medical treatments designed for long-term results.
          </p>
        </motion.div>

        {/* ================= CARD / 1 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-white rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-end"
        >
          <span className="absolute top-6 left-6 text-[#DFDFDD]">/1</span>

          <h3 className="text-xl font-semibold text-[#2B333C] mb-3">
            Hair Diagnosis
          </h3>

          <p className="text-sm text-[#828D9C]">
            Root-cause evaluation for hair fall, thinning, hormonal & genetic
            hair loss.
          </p>
        </motion.div>

        {/* ================= CARD / 2 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-[#2B333C] rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-end"
        >
          <span className="absolute top-6 left-6 text-[#828D9C]">/2</span>

          <h3 className="text-xl font-semibold text-white mb-3">
            Hair Treatments
          </h3>

          <p className="text-sm text-[#DFDFDD]">
            FUE transplants, reconstruction, medical therapy & long-term hair
            planning.
          </p>
        </motion.div>

        {/* ================= CARD / 3 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-white rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-end"
        >
          <span className="absolute top-6 left-6 text-[#DFDFDD]">/3</span>

          <h3 className="text-xl font-semibold text-[#2B333C] mb-3">
            Skin Concerns
          </h3>

          <p className="text-sm text-[#828D9C]">
            Acne, pigmentation, scars, aging, sensitivity & chronic skin issues.
          </p>
        </motion.div>

        {/* ================= CARD / 4 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-[#2B333C] rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-end"
        >
          <span className="absolute top-6 left-6 text-[#828D9C]">/4</span>

          <h3 className="text-xl font-semibold text-white mb-3">
            Skin Treatments
          </h3>

          <p className="text-sm text-[#DFDFDD]">
            Laser, injectables, resurfacing & regenerative dermatology solutions.
          </p>
        </motion.div>

        {/* ================= IMAGE (RIGHT SIDE – FIXED) ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 rounded-2xl overflow-hidden relative min-h-[260px]"
        >
          <img
            src={assets.banner}
            alt="Satya Services"
            className="w-full h-full object-cover object-[50%_40%]"
          />

          <button className="absolute bottom-5 left-5 bg-[#2B333C] hover:bg-[#9E4A47] transition text-white px-5 py-2.5 rounded-full text-sm font-medium">
            VIEW SERVICES
          </button>
        </motion.div>

      </div>
    </section>
  );
}
