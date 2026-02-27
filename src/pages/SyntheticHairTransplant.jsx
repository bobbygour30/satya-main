"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import assets from "../assets/assets";

const faqs = [
  {
    q: "What is Synthetic Hair Transplant?",
    a: "Synthetic Hair Transplant involves implantation of artificial fibres into the scalp for immediate visual density, without using the patient's own hair follicles.",
  },
  {
    q: "What are the main risks of Synthetic Hair Transplant?",
    a: "Risks include foreign body reaction, chronic infections, fibre loss, scarring, fibrosis, and long-term scalp health deterioration.",
  },
  {
    q: "How does Synthetic Hair Transplant compare to natural methods?",
    a: "Unlike FUT/FUE which use permanent, growing follicles with no rejection, synthetic fibres require maintenance, have higher infection risks, and do not integrate biologically.",
  },
  {
    q: "Who might consider Synthetic Hair Transplant?",
    a: "It may be considered for patients with exhausted donor areas or extensive baldness unsuitable for natural surgery, but only after careful medical screening.",
  },
  {
    q: "Is Synthetic Hair Transplant permanent?",
    a: "No. Fibres do not grow or regenerate; they fall out over time and require regular replacement and maintenance sessions.",
  },
  {
    q: "What are the long-term concerns?",
    a: "Concerns include scalp tissue damage, chronic inflammation, reduced flexibility, and complications for future natural transplants.",
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

export default function SyntheticHairTransplant() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM SYNTHETIC HAIR TRANSPLANT HERO BANNER === */}
<section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
  {/* Background Image - Desktop Only */}
  <div
    className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
    style={{
      backgroundImage: `url('${assets.syntheticbanners}')`,
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
          Synthetic Hair Transplant
        </h1>

        <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
          Artificial Hair Implants – Risks & Long-Term Considerations
        </p>
      </div>

      <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
        Synthetic hair transplant (also called artificial hair implant or bio-fibre implantation) inserts non-biological fibres directly into the scalp to simulate hair density. 
        Unlike traditional transplants that use your own follicles, this method offers quicker visual results but comes with notable risks, maintenance needs, 
        and long-term implications that every patient should fully understand before deciding.
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
        src={assets.syntheticbanners}
        alt="Synthetic Hair Transplant - Artificial Hair Implants Overview"
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
              Instant Density • No Donor Needed • Informed Risks • Long-Term Considerations • Ethical Guidance • Satya Expertise
            </span>
            <span className="px-12">
              Instant Density • No Donor Needed • Informed Risks • Long-Term Considerations • Ethical Guidance • Satya Expertise
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Instant Density • No Donor Needed • Informed Risks • Long-Term Considerations • Ethical Guidance • Satya Expertise
            </span>
            <span className="px-12">
              Instant Density • No Donor Needed • Informed Risks • Long-Term Considerations • Ethical Guidance • Satya Expertise
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
              Transparent advice on synthetic options — prioritizing scalp health, risk awareness, and sustainable natural alternatives where possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is Synthetic Hair Transplant + How it Works + Video === */}
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
              What is Synthetic Hair Transplant?
            </h2>
            <p className="text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, we provide a critical overview of synthetic hair transplant under Dr. Shail Gupta — focusing on informed consent, risk evaluation, and alternatives like natural FUT/FUE for long-term safety.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                Synthetic Hair Transplant involves: Implantation of artificial fibres into the scalp • Immediate visual improvement in hair density • No dependence on donor hair The fibres are usually made from biocompatible materials and are anchored into the scalp individually. However, unlike natural follicular units, synthetic fibres do not grow, regenerate, or integrate biologically with scalp tissue.
              </p>

              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                The procedure typically involves: Local anaesthesia • Insertion of artificial fibres using a specialised implanter device • Immediate visible density Unlike FUT or FUE, no hair follicles are harvested. The fibres are mechanically inserted into the scalp tissue.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Immediate cosmetic improvement",
                  "No need for donor hair",
                  "Shorter procedural time",
                  "Option for exhausted donor areas",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-white/70 px-5 py-3 rounded-xl shadow-sm border border-[#DFDFDD]"
                  >
                    <svg
                      className="w-5 h-5 text-[#9E4A47]"
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
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Central Video Embed - placeholder; replace with synthetic hair procedure video if available */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFDFDD]/50"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/QZJq1Yysg5s?si=3oiYGdHFl-3XW79E" // Replace with actual synthetic hair transplant video
                  title="Synthetic Hair Transplant Procedure Overview"
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

      {/* === Risks and Complications === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Risks and Complications of Synthetic Hair Transplant
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Foreign Body Reaction",
                text: "Since artificial fibres are not natural hair, the body may: Recognise them as foreign material • Trigger inflammatory response • Cause redness, swelling, or infection",
              },
              {
                title: "Infection Risk",
                text: "Repeated insertion of foreign fibres increases risk of: Chronic scalp infections • Abscess formation • Persistent irritation",
              },
              {
                title: "Fibre Loss",
                text: "Synthetic fibres do not permanently anchor in the scalp. Fibres can fall out over time • Regular maintenance sessions are required • Re-implantation may be needed",
              },
              {
                title: "Scarring and Fibrosis",
                text: "Multiple fibre insertions can cause: Scalp scarring • Tissue fibrosis • Reduced scalp flexibility • Compromised future natural transplant options",
              },
            ].map((risk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-[#9E4A47] mb-4">
                  {risk.title}
                </h3>
                <p className="text-[#828D9C] leading-relaxed">{risk.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
            Synthetic hair implants are associated with multiple possible complications.
          </p>
        </div>
      </section>

      {/* === Comparison Table === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Synthetic Hair Transplant vs Natural Hair Transplant
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-[#DFDFDD] rounded-2xl shadow-lg">
              <thead>
                <tr className="bg-[#9E4A47] text-white">
                  <th className="py-4 px-6 text-left font-semibold">Factor</th>
                  <th className="py-4 px-6 text-left font-semibold">Synthetic Hair Transplant</th>
                  <th className="py-4 px-6 text-left font-semibold">Natural Hair Transplant (FUT/FUE)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFDFDD]">
                <tr>
                  <td className="py-4 px-6 font-medium">Hair Source</td>
                  <td className="py-4 px-6">Artificial fibres</td>
                  <td className="py-4 px-6">Patient’s own follicles</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Growth</td>
                  <td className="py-4 px-6">No natural growth</td>
                  <td className="py-4 px-6">Permanent hair growth</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Rejection Risk</td>
                  <td className="py-4 px-6">Possible</td>
                  <td className="py-4 px-6">No rejection</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Maintenance</td>
                  <td className="py-4 px-6">Regular replacement required</td>
                  <td className="py-4 px-6">Permanent graft survival</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Infection Risk</td>
                  <td className="py-4 px-6">Higher</td>
                  <td className="py-4 px-6">Lower if performed properly</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-lg text-[#2B333C]/80 mt-8 max-w-4xl mx-auto">
            Natural hair transplants use living follicular units that integrate biologically and grow permanently.
          </p>
        </div>
      </section>

      {/* === Who May Consider + Long-Term Concerns === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
              Who May Consider Synthetic Hair Transplant?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Patients with completely exhausted donor areas",
                "Extensive baldness with no surgical options",
                "Individuals unwilling or unsuitable for surgery",
              ].map((consider, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
                >
                  <p className="text-xl font-semibold text-[#2B333C]">{consider}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
              Synthetic hair transplant is sometimes considered for: However, careful medical screening is mandatory before considering this method.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
              Long-Term Sustainability Concerns
            </h2>
            <div className="bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
              <p className="text-lg leading-relaxed text-[#2B333C]/90 max-w-4xl mx-auto">
                Unlike natural grafts, synthetic fibres: Do not adapt to ageing • Require periodic replacement • May damage scalp tissue over time • Can complicate future surgical repair Scalp health can deteriorate if repeated insertion causes chronic inflammation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Cost + Considerations === */}
      <section className="py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Cost Considerations
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Synthetic Hair Transplant cost varies depending on: Number of fibres implanted • Maintenance sessions required • Clinic standards • Geographic location However, the long-term cost may increase due to repeated sessions and maintenance procedures.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Important Considerations Before Choosing Synthetic Hair Transplant
          </h2>
          <ul className="text-lg leading-relaxed text-[#2B333C]/90 space-y-2 list-disc pl-6">
            <li>Understand potential complications</li>
            <li>Assess long-term scalp health risks</li>
            <li>Consider impact on future natural transplant options</li>
            <li>Seek detailed medical consultation</li>
            <li>Evaluate realistic expectations</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed text-[#2B333C]/90">
            Immediate density does not always translate into long-term safety.
          </p>
        </div>
      </section>

      {/* === Conclusion + CTA === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Conclusion
          </h2>
          <p className="text-xl opacity-90">
            Synthetic Hair Transplant offers instant cosmetic improvement but carries significant medical and long-term considerations. Unlike natural hair transplantation techniques that use the patient’s own follicles, synthetic implants involve foreign materials that may lead to complications, maintenance dependency, and reduced scalp health over time. Patients considering this option should make an informed decision after understanding both benefits and risks.
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
            Frequently Asked Questions (FAQ)
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