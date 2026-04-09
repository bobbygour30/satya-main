"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Can open pores be permanently closed?",
    a: "No, pores can not be eliminated, but they can be minimised.",
  },
  {
    q: "How long does pore tightening treatment last?",
    a: "It'll vary, but you can have top up (maintenance) treatments to keep the effect.",
  },
  {
    q: "Is laser safe for pore reduction?",
    a: "Yes, if you have it done by a dermatologist.",
  },
  {
    q: "Can dull skin be improved naturally?",
    a: "Sure, you can do it naturally with lifestyle changes, but medical treatments can provide faster and more profound effects.",
  },
  {
    q: "Is there downtime?",
    a: "There is very little downtime with most treatments.",
  },
  {
    q: "Are results immediate?",
    a: "Some of the effects will be seen immediately but the results from collagen would...",
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

export default function DullSkinOpenPores() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META ==================== */}
      <SEO
        title="Dull Skin & Open Pores Treatment | Pore Tightening Specialist Gurgaon"
        description="Tired of dull skin and visible open pores? Get advanced pore tightening and skin rejuvenation treatment in Delhi & Gurgaon at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/skin/dull-skin-open-pores"
        showSchema={false}
      />

      {/* === PREMIUM HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-left bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.dullskin || assets.banner}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Treatment for Dull Skin & Open Pores in Delhi & Gurgaon
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Best Treatment For Dull Skin & Open Pores at Satya Skin & Hair Solutions
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              When the skin drabness and the pores become prominent, not even the best makeup can hide the skin texture. Dullness and open pores make the skin look tired, uneven and older than what it really is.
              Environmental damage, oil imbalances, collagen depletion, and poor skin care regimens contribute to this problem. Facials may temporarily brighten the skin, but-long term solutions can be delivered only through professional skin revivals – specialized treatments that restore the skin’s essential health and vitality.
              Best Treatment For Dull Skin & Open Pores at Satya Skin & Hair Solutions in Delhi & Gurgaon.
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
              src={assets.dullskin}
              alt="Dull Skin & Open Pores Treatment"
              className="
                w-full 
                h-[300px] sm:h-[350px]
                object-cover
                scale-110
              "
            />
          </div>

          {/* Desktop Empty Column */}
          <div className="hidden lg:block" />
        </motion.div>
      </section>

      {/* === Seamless Running Ribbon Strip === */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 h-16 md:h-20 bg-gradient-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] opacity-95 shadow-lg" />

        <motion.div
          className="relative flex w-max text-white font-medium text-sm md:text-base tracking-wide py-4 md:py-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Radiant Glow • Pore Minimization • Collagen Boost • Deep Exfoliation • Texture Restoration • Oil Balance • Satya Excellence
            </span>
            <span className="px-12">
              Radiant Glow • Pore Minimization • Collagen Boost • Deep Exfoliation • Texture Restoration • Oil Balance • Satya Excellence
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Radiant Glow • Pore Minimization • Collagen Boost • Deep Exfoliation • Texture Restoration • Oil Balance • Satya Excellence
            </span>
            <span className="px-12">
              Radiant Glow • Pore Minimization • Collagen Boost • Deep Exfoliation • Texture Restoration • Oil Balance • Satya Excellence
            </span>
          </div>
        </motion.div>
      </div>

      {/* Doctor Team Section */}
      <section className="relative bg-[#FFF8EF] py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(252,235,222,0.5),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
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
              Ethical, patient-centric protocols — balancing safety, collagen boost, pore tightening, and natural radiance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === Why Dull + Why Pores + Treatment Options + Video === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="text-center space-y-4"
          >
            <h2 className="text-2xl md:text-5xl font-bold text-[#9E4A47]">
              Why Does Skin Become Dull & Why Do Open Pores Appear Larger?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Dull skin can result from dead skin cell buildup, dehydration, sun exposure, pollution damage, stress and lack of sleep, reduced collagen production, and hormonal imbalance. Over time, this leads to uneven tone and rough texture.
              Pores may look enlarged due to excess oil production, acne-prone skin, collagen loss with aging, sun damage, improper skincare, and genetic predisposition. It’s important to understand that pores cannot disappear completely, but they can be significantly minimized with proper treatment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47]">
                Treatment Options for Dull Skin & Open Pores
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                In many cases, a combination of treatments is needed for the best results.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Chemical Peels — Exfoliates the skin, removing dead layers and brightening the complexion.",
                  "Microneedling / RF Microneedling — Boosts collagen, making pores appear smaller.",
                  "Laser Skin Rejuvenation — Smoothes skin texture and firms the skin.",
                  "Carbon Laser Facial — Reduces oil and minimizes the appearance of pores.",
                  "Hydrafacial & Medical Facials — Deep cleansing and hydration are key.",
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

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFDFDD]/50"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/3htxsomsDX0?si=SaLJTmCNlFD11CTh"
                  title="Dull Skin & Open Pores Treatment at Satya"
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

      {/* === Benefits Grid === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of Professional Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Brighter, more radiant complexion",
              "Reduced pore visibility",
              "Smoother skin texture",
              "Improved oil balance",
              "Boosted collagen production",
              "Healthier overall skin appearance",
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-base md:text-xl font-semibold text-[#2B333C]">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center md:text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
            The focus is on restoring natural glow rather than masking concerns.
          </p>
        </div>
      </section>

      {/* === What to Expect + Sessions === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: What to Expect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD]"
            >
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                What to Expect During Consultation
              </h3>
              <p className="text-[#2B333C]/90">Your skin assessment includes:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#2B333C]/90 mt-4">
                <li>Oil level evaluation</li>
                <li>Pore size grading</li>
                <li>Texture analysis</li>
                <li>Collagen health assessment</li>
                <li>Customized treatment mapping</li>
              </ul>
              <p className="mt-6 italic text-[#828D9C]">
                No two skin types are treated the same.
              </p>
            </motion.div>

            {/* Card 2: How Many Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD]"
            >
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                How Many Sessions Are Required?
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-[#2B333C]/90">
                <li>Mild dullness: 2–3 sessions</li>
                <li>Moderate open pores: 4–6 sessions</li>
                <li>Severe texture issues: Combination treatment plan</li>
              </ul>
              <p className="mt-6 italic text-[#828D9C]">
                Results improve progressively over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === Cost & Why Choose === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Dull Skin & Open Pores Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            The cost depends on: Type of procedure chosen • Skin condition severity • Number of sessions required • Combination therapy selection
            At Satya Skin & Hair Solutions, treatment plans are personalized rather than fixed packages.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Choose Satya Skin & Hair Solutions?
          </h2>
          <ul className="list-disc pl-6 space-y-3 md:text-lg text-[#2B333C]/90">
            <li>Dermatologist-guided skin protocols</li>
            <li>Advanced laser and microneedling technologies</li>
            <li>Safe for Indian skin tones</li>
            <li>Focus on collagen health</li>
            <li>Long-term skin improvement strategy</li>
          </ul>
          <p className="mt-6 md:text-lg text-[#2B333C]/90">
            Patients searching for effective open pores treatment in Delhi and dull skin treatment in Gurgaon trust our evidence-based approach.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Dull Skin & Open Pores Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If your skin lacks radiance or pores appear enlarged, early intervention can restore smoother texture and glow.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-9 rounded-full font-bold md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FCEBDE]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-12 text-center">
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
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold md:text-lg text-[#2B333C]">
                      {faq.q}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-[#9E4A47]" size={22} />
                    </motion.div>
                  </button>

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
      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </main>
  );
}