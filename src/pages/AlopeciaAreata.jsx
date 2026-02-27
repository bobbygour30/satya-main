"use client";
import React, { useState } from "react";

import assets from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
const faqs = [
  {
    q: "Is alopecia areata permanent?",
    a: "Not always — many experience regrowth, though recurrence is possible.",
  },
  {
    q: "Is alopecia areata contagious?",
    a: "No. It is autoimmune, not infectious, and cannot spread to others.",
  },
  {
    q: "Can stress cause alopecia areata?",
    a: "Stress can trigger or exacerbate it in genetically susceptible individuals.",
  },
  {
    q: "Will the hair grow back?",
    a: "In many cases, yes — often within months, starting fine/light then thickening.",
  },
  {
    q: "Is alopecia areata dangerous?",
    a: "Not life-threatening, but it signals immune imbalance and may need management.",
  },
  {
    q: "Can children develop alopecia areata?",
    a: "Yes — it affects children and adults of any age.",
  },
];
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AlopeciaAreata() {
  const [showPopup, setShowPopup] = useState(false);

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM ALOPECIA AREATA HERO BANNER === */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Positioned Right */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.alopeciabanners}')`, // assume aa_banner or fallback
          }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-8">
           

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#0E3A43]">
              Alopecia Areata
              <br />
              <h1 className="text-[#9E4A47] text-xl sm:text-2xl md:text-2xl">
                Sudden Bald Patches – Early Intervention & Regrowth
              </h1>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              Sudden round or oval bald patches can be distressing, but Alopecia
              Areata is an autoimmune condition where follicles often remain
              alive and regrowth is possible with timely, targeted management at
              Satya Skin & Hair Solutions in Delhi & Gurgaon.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
              className="bg-[#9E4A47] hover:bg-[#84332F] text-white py-4 px-10 rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
            >
              Book FREE Consultation →
            </motion.button>
          </div>

          {/* RIGHT SIDE EMPTY (image fills this visually) */}
          <div />
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
              Autoimmune Patchy Loss • Sudden Bald Spots • Regrowth Possible •
              Immune Regulation • Early Treatment Key • Satya Specialized Care
            </span>
            <span className="px-12">
              Autoimmune Patchy Loss • Sudden Bald Spots • Regrowth Possible •
              Immune Regulation • Early Treatment Key • Satya Specialized Care
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Autoimmune Patchy Loss • Sudden Bald Spots • Regrowth Possible •
              Immune Regulation • Early Treatment Key • Satya Specialized Care
            </span>
            <span className="px-12">
              Autoimmune Patchy Loss • Sudden Bald Spots • Regrowth Possible •
              Immune Regulation • Early Treatment Key • Satya Specialized Care
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
              Immune-focused evaluation and targeted therapies — promoting
              regrowth while managing recurrence risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What Is Alopecia Areata + Types === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#9E4A47]">
              What Is Alopecia Areata?
            </h2>
            <p className="text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Alopecia Areata is an autoimmune disorder where the immune system
              attacks hair follicles, causing sudden round or oval bald patches
              on the scalp or body. Follicles typically remain alive, allowing
              potential regrowth with proper immune modulation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                Patches are smooth, non-scarred, with normal-looking skin — hair
                may regrow white/thin initially before normalizing.
              </p>

              <h3 className="text-2xl font-bold text-[#9E4A47]">
                Types of Alopecia Areata
              </h3>
              <motion.ul variants={fadeUp} className="space-y-4">
                {[
                  "Patchy Alopecia Areata — most common, one or more round patches",
                  "Alopecia Totalis — complete scalp hair loss",
                  "Alopecia Universalis — total body hair loss (including brows/lashes)",
                  "Ophiasis Pattern — band-like loss along sides and back of scalp",
                ].map((type, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-white/70 px-5 py-4 rounded-xl shadow-sm border border-[#DFDFDD]"
                  >
                    <svg
                      className="w-6 h-6 text-[#9E4A47] mt-1 flex-shrink-0"
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
                    <span className="font-medium text-lg">{type}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Central Video Embed - placeholder for educational video on Alopecia Areata */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFDFDD]/50"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/F_XXj5aPYKQ" // Replace with Alopecia Areata explanatory video if available
                  title="Understanding Alopecia Areata"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === Causes + Symptoms === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Causes */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                What Causes Alopecia Areata?
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <p className="text-lg text-[#2B333C]/90">
                  Exact cause unknown, but key factors:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Autoimmune dysfunction</li>
                  <li>Genetic predisposition</li>
                  <li>Emotional / physical stress</li>
                  <li>Viral infections</li>
                  <li>Thyroid disorders</li>
                  <li>Vitamin deficiencies</li>
                </ul>
              </div>
            </div>

            {/* Symptoms */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Common Symptoms
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <ul className="list-disc pl-6 space-y-3 text-lg text-[#2B333C]/90">
                  <li>Sudden round/oval bald patches</li>
                  <li>Hair falling in clumps</li>
                  <li>Tingling/itching before loss</li>
                  <li>Initial regrowth may be white/thin</li>
                  <li>Nail pitting (in some cases)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Diagnosis + Treatment Options === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Diagnosis & Treatment for Alopecia Areata
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Diagnosis */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-[#9E4A47]">
                How Is It Diagnosed?
              </h3>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Clinical & dermoscopic scalp exam</li>
                  <li>Detailed medical history</li>
                  <li>Blood tests (thyroid, autoimmune markers, vitamins)</li>
                  <li>Rarely scalp biopsy</li>
                  <li>Rule out fungal/traction alopecia</li>
                </ul>
              </div>
            </div>

            {/* Treatment Options */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-[#9E4A47]">
                Treatment Options
              </h3>
              <motion.ul variants={fadeUp} className="space-y-4">
                {[
                  "Topical Corticosteroids — reduce immune attack",
                  "Intralesional Steroid Injections — for patchy areas",
                  "Topical Immunotherapy — redirect immune response",
                  "PRP Therapy — follicle stimulation (selected cases)",
                  "JAK Inhibitors — for severe/extensive disease (specialist-supervised)",
                  "Nutritional Correction — address deficiencies",
                ].map((treat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-white/70 px-5 py-4 rounded-xl shadow-sm border border-[#DFDFDD]"
                  >
                    <svg
                      className="w-6 h-6 text-[#9E4A47] mt-1 flex-shrink-0"
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
                    <span className="font-medium text-lg">{treat}</span>
                  </li>
                ))}
              </motion.ul>
              <p className="italic text-[#828D9C]">
                Treatment is tailored to extent/severity — focus on inflammation
                control & follicle stimulation.
              </p>
            </div>
          </div>

          {/* Recovery Timeline */}
          <div className="max-w-6xl mx-auto text-center space-y-10 mt-16">
            <h3 className="text-3xl font-bold text-[#9E4A47]">
              Regrowth Timeline
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { time: "2–3 months", desc: "Mild cases — initial regrowth" },
                {
                  time: "3–6 months",
                  desc: "Moderate cases — visible improvement",
                },
                {
                  time: "6+ months",
                  desc: "Extensive cases — longer immune management",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]"
                >
                  <div className="text-3xl font-bold text-[#9E4A47] mb-3">
                    {item.time}
                  </div>
                  <p className="text-lg text-[#2B333C]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-lg italic text-[#828D9C] mt-8">
              Regrowth often starts fine/light-colored before thickening.
            </p>
          </div>
        </div>
      </section>

      {/* === Hair Transplant Note + Emotional Impact === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Transplant Note */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Is Hair Transplant Recommended?
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <p className="text-lg text-[#2B333C]/90">
                  Generally not during active disease — transplanted hair may be
                  attacked by the immune system, and progression is
                  unpredictable.
                </p>
                <p className="italic text-[#9E4A47]">
                  Considered only in long-stable, inactive cases under
                  specialist guidance.
                </p>
              </div>
            </div>

            {/* Emotional Impact */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Emotional Impact
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <p className="text-lg text-[#2B333C]/90">
                  Sudden patches often cause anxiety, lowered confidence, social
                  withdrawal, and emotional stress. Psychological support
                  alongside medical care is valuable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Risk of Recurrence + Preventive Measures + Cost === */}
      <section className="py-16 px-6 md:px-16 lg:px-24 space-y-16">
        {/* Risk of Recurrence */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Risk of Recurrence
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Unpredictable — some have one episode with full recovery, others
            experience recurrent patches or progression. Long-term follow-up
            helps detect and manage flare-ups early.
          </p>
        </div>

        {/* Preventive & Supportive Care */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Preventive Measures & Supportive Care
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-[#2B333C]/90">
            <li>Effective stress management</li>
            <li>Balanced nutrition & deficiency correction</li>
            <li>Gentle hair care — avoid harsh chemicals</li>
            <li>Regular dermatology monitoring</li>
          </ul>
          <p className="mt-6 italic text-[#828D9C]">
            No guaranteed prevention, but supporting immune balance reduces
            risk.
          </p>
        </div>

        {/* Cost */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Alopecia Areata Treatment in Delhi & Gurgaon
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Varies by severity, chosen treatments (topicals, injections,
            immunotherapy, JAK inhibitors), sessions needed, and medications.
            Personalized after evaluation — cost-effective and focused on
            evidence-based care.
          </p>
        </div>

        {/* Why Expert Care */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Why Seek Expert Care at Satya?
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Improper management delays regrowth. At Satya: dermatologist-led
            accurate diagnosis, evidence-based immune-modulating protocols,
            long-term monitoring, and focus on regrowth & stability — avoiding
            unnecessary or ineffective treatments.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Noticing Sudden Bald Patches?
          </h2>
          <p className="text-xl opacity-90">
            Early expert evaluation can accelerate regrowth, reduce severity,
            and provide reassurance — act now.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-12 rounded-full font-bold text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FCEBDE]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                  className="bg-white rounded-2xl shadow-sm border border-[#DFDFDD] overflow-hidden"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-lg text-[#2B333C]">
                      {faq.q}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-[#9E4A47]" size={22} />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-[#828D9C] leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
