"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import assets from "../assets/assets";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function BalancedHairTransplant() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM BALANCED HAIR TRANSPLANT HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.balancedhairbanners}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Balanced Hair Transplant™
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                Donor Preservation • Minimal Medication • Lifelong Results
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              A strategic, patient-first philosophy that prioritizes long-term
              donor health, ethical planning, and sustainable outcomes over
              short-term density or medication dependency — exclusively at Satya
              Skin & Hair Solutions under Dr. Shail Gupta.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
              className="
          bg-[#9E4A47] hover:bg-[#84332F] text-white
          py-2 px-5 sm:py-3 sm:px-8 lg:py-4 lg:px-10
          rounded-full font-semibold
          text-sm sm:text-base lg:text-lg
          shadow-lg transition-all duration-300
        "
            >
              Book FREE Consultation →
            </motion.button>
          </div>

          {/* Mobile Image (Zoomed) */}
          <div className="lg:hidden mt-8 overflow-hidden rounded-xl">
            <img
              src={assets.balancedhairbanners}
              alt="Balanced Hair Transplant - Donor Preservation & Lifelong Results"
              className="
          w-full 
          h-[300px] sm:h-[350px]
          object-cover
          scale-110
        "
            />
          </div>

          {/* Desktop Empty Column (preserves layout) */}
          <div className="hidden lg:block" />
        </motion.div>
      </section>

      {/* === Seamless Running Ribbon Strip === */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Background Strip */}
        <div className="absolute inset-0 h-16 md:h-20 bg-gradient-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] opacity-95 shadow-lg" />

        {/* Moving Content */}
        <motion.div
          className="relative flex w-max text-white font-medium text-sm md:text-base tracking-wide py-4 md:py-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Content Block (duplicated for seamless loop) */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Donor Preservation First • Minimal Medication • Strategic
              Technique Mix • Long-Term Sustainability • Ethical Planning •
              Satya Balanced Excellence
            </span>
            <span className="px-12">
              Donor Preservation First • Minimal Medication • Strategic
              Technique Mix • Long-Term Sustainability • Ethical Planning •
              Satya Balanced Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Donor Preservation First • Minimal Medication • Strategic
              Technique Mix • Long-Term Sustainability • Ethical Planning •
              Satya Balanced Excellence
            </span>
            <span className="px-12">
              Donor Preservation First • Minimal Medication • Strategic
              Technique Mix • Long-Term Sustainability • Ethical Planning •
              Satya Balanced Excellence
            </span>
          </div>
        </motion.div>
      </div>

      {/* Doctor Team Section */}
      <section className="relative bg-[#FFF8EF] py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(252,235,222,0.5),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl mx-auto">
          {/* === LEFT SIDE: DOCTOR IMAGES === */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            {/* Doctor 1 */}
            <div className="text-center">
              <motion.img
                src={assets.drShailGupta}
                alt="Dr. Shail Gupta"
                className="w-[250px] md:w-[280px] rounded-3xl shadow-2xl object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="mt-4 font-bold text-[#2B333C] text-lg">
                Dr. Shail Gupta
              </p>
              <p className="text-[#9E4A47] font-medium text-sm">
                MBBS, MD — Founder
              </p>
            </div>

            {/* Doctor 2 */}
            <div className="text-center">
              <motion.img
                src={assets.drRuchiAgarwal}
                alt="Dr. Ruchi Agarwal"
                className="w-[250px] md:w-[280px] rounded-3xl shadow-2xl object-cover"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="mt-4 font-bold text-[#2B333C] text-lg">
                Dr. Ruchi Agarwal
              </p>
              <p className="text-[#9E4A47] font-medium text-sm">Co-Founder</p>
            </div>
          </motion.div>

          {/* === RIGHT SIDE: CONTENT === */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#9E4A47] font-semibold uppercase tracking-wider">
              Expert Care at Satya
            </p>

            <h2 className="text-4xl font-bold text-[#2B333C]">
              Meet the Team Behind Your Transformation
            </h2>

            <div className="flex flex-wrap gap-4">
              <span className="bg-[#FCEBDE] px-4 py-2 rounded-full font-medium text-[#9E4A47]">
                46+ Years Combined
              </span>
              <span className="bg-[#FCEBDE] px-4 py-2 rounded-full font-medium">
                50,000+ Procedures
              </span>
            </div>
            <p className="text-[#828D9C] italic border-l-4 border-[#9E4A47] pl-4">
              A philosophy of balance — surgical precision, donor safety,
              minimal intervention, and lifelong natural results over quick
              fixes or dependency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is Balanced Hair Transplant™ === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40 ">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="text-center space-y-4"
          >
            <h2 className="text-xl md:text-5xl font-bold text-[#9E4A47]">
              What Is Balanced Hair Transplant™?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Balanced Hair Transplant™ is not a single technique — it's a
              comprehensive, patient-centric philosophy developed at Satya Skin
              & Hair Solutions. It combines strategic surgical planning with
              donor preservation, minimal medication, and long-term
              sustainability to deliver natural, durable results tailored to
              your unique profile.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            className="space-y-8 text-center max-w-5xl mx-auto"
          >
            <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
              Core focus areas include minimizing unnecessary medication,
              avoiding overharvesting, using hybrid techniques when appropriate,
              and designing age-appropriate, progressive-proof outcomes —
              ensuring your hair restoration remains viable for decades.
            </p>

            <motion.ul
              variants={fadeUp}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-4xl"
            >
              {[
                "Donor preservation priority",
                "Minimal or no medication",
                "Strategic multi-technique use",
                "No overharvesting",
                "Custom long-term planning",
                "Sustainable natural results",
              ].map((principle, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-white/70 px-6 py-4 rounded-xl shadow-sm border border-[#DFDFDD] justify-center text-center"
                >
                  <svg
                    className="w-6 h-6 text-[#9E4A47] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-medium">{principle}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Central Video Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFDFDD]/50"
          >
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/MWObPqvRRgk?si=TSnQbu1jYWZOn5u-" // Replace with beard transplant video if available
                title="Beard Hair Transplant Procedure"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Core Principles Grid === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Core Principles of Balanced Hair Transplant™
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Donor Preservation",
                text: "Finite donor resource protected through strategic, safe-zone harvesting and avoidance of excessive extraction — ensuring future options remain open.",
              },
              {
                title: "Minimal Medication Philosophy",
                text: "Low-dose or no medication protocols to reduce side-effect risks and dependency — surgery drives results, not drugs.",
              },
              {
                title: "Long-Term Sustainability",
                text: "Age-appropriate design, controlled density, and respect for progression — results that age gracefully over decades.",
              },
              {
                title: "Customisation Over Standardisation",
                text: "Tailored plans based on age, baldness grade, donor strength, facial features, and realistic goals — no one-size-fits-all.",
              },
            ].map((princ, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                  {princ.title}
                </h3>
                <p className="text-[#828D9C] leading-relaxed">{princ.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Techniques Used === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Techniques Used in Balanced Hair Transplant™
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "FUT (Follicular Unit Transplantation)",
              "FUE (Follicular Unit Extraction)",
              "MHT (FUT + FUE Hybrid)",
              "Body Hair Transplant (when needed)",
              "PRP (selective use only)",
              "Scalp Micropigmentation (SMP)",
              "Corrective / Repair Procedures",
              "Minimal Medication Protocols",
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] text-center"
              >
                <p className="md:text-xl font-semibold text-[#2B333C]">
                  {tech}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center md:text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
            Techniques are chosen and combined only as needed — never for
            marketing or inflated numbers, always for your long-term benefit.
          </p>
        </div>
      </section>

      {/* === Balanced Approach in Specific Cases === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Balanced Hair Transplant™ in Challenging Cases
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* High-Grade Baldness */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
              <h3 className="md:text-2xl font-bold text-[#9E4A47]">
                High-Grade Baldness (e.g., Grade 7)
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                <li>Hybrid FUT + FUE when appropriate</li>
                <li>Minimal, controlled medication (e.g., low weekly dose)</li>
                <li>Realistic coverage & aesthetic balance</li>
                <li>Focus on surgical contribution over drug enhancement</li>
              </ul>
            </div>

            {/* Diffuse Thinning */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
              <h3 className="md:text-2xl font-bold text-[#9E4A47]">
                Diffuse Thinning
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                <li>
                  Conservative graft numbers (e.g., 1800 instead of 4000+)
                </li>
                <li>Low-dose weekly medication over daily dependency</li>
                <li>Preservation of native hair</li>
                <li>Avoid unnecessary overharvesting</li>
              </ul>
            </div>

            {/* Corrective Cases */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4 lg:col-span-2">
              <h3 className="md:text-2xl font-bold text-[#9E4A47]">
                Corrective / Repair Cases
              </h3>
              <p className="text-lg text-[#2B333C]/90">
                Compromised donors require even greater balance:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                <li>FUT + FUE + selective BHT</li>
                <li>SMP for additional camouflage</li>
                <li>Targeted, minimal medication support</li>
                <li>Precision to restore natural appearance safely</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === Advantages Grid === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Key Advantages of Balanced Hair Transplant™
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Protects Donor for Future Needs",
                text: "Keeps reserves intact for potential progression or touch-ups.",
              },
              {
                title: "Reduces Medication Dependency",
                text: "Minimal or no long-term drugs — lower side-effect risk.",
              },
              {
                title: "Avoids Inflated Graft Numbers",
                text: "Honest, realistic harvesting — no marketing exaggeration.",
              },
              {
                title: "Minimises Unnecessary Add-ons",
                text: "No routine excessive PRP or procedures — only when beneficial.",
              },
              {
                title: "Produces Sustainable Natural Outcomes",
                text: "Results that age well and remain stable over decades.",
              },
              {
                title: "Encourages Informed Decisions",
                text: "Transparent discussion and custom planning for true patient benefit.",
              },
            ].map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                  {adv.title}
                </h3>
                <p className="text-[#828D9C] leading-relaxed">{adv.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Why It Matters + Final CTA === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-xl md:text-5xl font-bold">
            Why Balanced Hair Transplant™ Matters
          </h2>
          <p className="md:text-xl opacity-90 max-w-4xl mx-auto">
            While many focus on high grafts, daily medication, and early flash —
            Balanced Hair Transplant™ prioritizes surgical excellence, honest
            planning, resource optimization, and your long-term safety and
            options.
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-12 rounded-full font-bold text-xs md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>

          <p className="md:text-lg opacity-90 mt-8">
            Discover a roadmap built for decades, not just months — tailored to
            you.
          </p>
        </div>
      </section>

      {/* === No FAQ in provided content, so omitted - can add if needed === */}
    </main>
  );
}
