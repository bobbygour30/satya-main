"use client";

import { motion } from "framer-motion";
import assets from "../assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
  return (
    <section className="w-full bg-[#FFF8EF] px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* ================= TOP + LEFT TEXT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 space-y-6"
        >
          <div>
            <p className="text-xs tracking-widest text-[#B87C72] mb-2 uppercase">
              What We Do Differently?
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#2B333C] mb-3">
              Comprehensive Care
            </h2>

            <p className="text-sm text-[#828D9C] mb-2">
              <span className="font-medium text-[#2B333C]">
                Our Promise:
              </span>{" "}
              We will never over treat you.
            </p>

            <p className="text-sm text-[#828D9C]">
              Every treatment philosophy at Satya is rooted in three pillars:
            </p>
          </div>
        </motion.div>

        {/* ================= CARD 1 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-white rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-[#2B333C] mb-4">
              Hair Concerns
            </h3>

            <ul className="text-sm text-[#828D9C] space-y-1">
              <li>Male Hair Loss</li>
              <li>Female Hair Loss</li>
              <li>Alopecia Areata</li>
              <li>Telogen Effluvium</li>
            </ul>
          </div>

          <button className="mt-6 text-sm font-medium text-[#9E4A47] hover:underline">
            Read more…
          </button>
        </motion.div>

        {/* ================= CARD 2 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-[#2B333C] rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Hair Treatment
            </h3>

            <ul className="text-sm text-[#DFDFDD] space-y-1">
              <li>Natural Hairline</li>
              <li>Synthetic Hair</li>
              <li>Body Hair Transplant</li>
              <li>Regrow Hair Transplant</li>
            </ul>
          </div>

          <button className="mt-6 text-sm font-medium text-[#B87C72] hover:underline">
            Read more…
          </button>
        </motion.div>

        {/* ================= CARD 3 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-white rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-[#2B333C] mb-4">
              Skin Concerns
            </h3>

            <ul className="text-sm text-[#828D9C] space-y-1">
              <li>Aging Treatments</li>
              <li>Laser Hair Reduction</li>
              <li>Chemical Peeling</li>
              <li>MNRF</li>
              <li>HIFU</li>
            </ul>
          </div>

          <button className="mt-6 text-sm font-medium text-[#9E4A47] hover:underline">
            Read more…
          </button>
        </motion.div>

        {/* ================= CARD 4 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4 bg-[#2B333C] rounded-2xl p-8 relative min-h-[260px] flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Skin Treatment
            </h3>

            <ul className="text-sm text-[#DFDFDD] space-y-1">
              <li>Pigmentation</li>
              <li>Wrinkles & Fine Lines</li>
              <li>Acne Scars</li>
              <li>Dull Skin with Open Pores</li>
              <li>Body Contouring</li>
              <li>Non Surgical Face Lift</li>
            </ul>
          </div>

          <button className="mt-6 text-sm font-medium text-[#B87C72] hover:underline">
            Read more…
          </button>
        </motion.div>

        {/* ================= IMAGE (UNCHANGED) ================= */}
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
