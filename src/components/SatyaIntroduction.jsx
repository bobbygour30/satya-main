import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SatyaIntroduction() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm tracking-widest uppercase text-[#9E4A47] font-medium">
            Satya Introduction
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] leading-tight">
            A Clinic Built on <br className="hidden sm:block" />
            Truth, Care & Clinical Integrity
          </h2>

          <p className="text-[#828D9C] leading-relaxed max-w-xl">
            Choosing a skin or hair clinic is a deeply personal decision. At Satya,
            this choice is respected through honest consultations, customized
            treatment plans, and evidence-based protocols — never aggressive sales
            or unrealistic guarantees.
          </p>

          <p className="text-[#828D9C] leading-relaxed max-w-xl">
            Every treatment begins with understanding the individual — their
            medical history, lifestyle, expectations, and long-term goals. This
            ensures outcomes that are not only cosmetically pleasing, but also
            medically sound and sustainable.
          </p>
        </motion.div>

        {/* ================= RIGHT CARD ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#FFF8EF] border border-[#FCEBDE] rounded-2xl p-8 md:p-10 space-y-6 shadow-sm"
        >
          <p className="text-[#2B333C] font-medium leading-relaxed">
            Satya is widely recognized for its expertise in corrective hair
            transplants — treating patients who have undergone failed or poorly
            planned procedures elsewhere.
          </p>

          <p className="text-[#828D9C] leading-relaxed">
            This reflects the depth of clinical skill and ethical responsibility
            practiced at the clinic. Instead of maximizing graft numbers or
            procedures, the focus remains on donor safety, natural aesthetics,
            and future planning.
          </p>

          <div className="h-px bg-[#DFDFDD]" />

          <p className="text-[#828D9C] leading-relaxed">
            Transparency is central to Satya’s ethos. Patients are clearly informed
            about what a treatment can and cannot achieve — including sessions
            required, recovery timelines, and maintenance needs — reducing anxiety
            and building long-term trust.
          </p>
        </motion.div>
      </div>

      {/* ================= BOTTOM STRIP ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-16"
      >
        <div className="rounded-2xl bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-8 py-10 md:px-14 md:py-12">
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            From advanced dermatology and laser treatments to sophisticated hair
            restoration techniques, Satya offers integrated solutions under one
            roof — guided entirely by doctors and specialists, never technicians
            or sales staff.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
