"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Will my lips look unnatural?",
    a: "No. Treatment is customized for subtle, proportionate enhancement.",
  },
  {
    q: "Is lip filler reversible?",
    a: "Yes. Hyaluronic acid fillers can be dissolved if required.",
  },
  {
    q: "How soon can I return to work?",
    a: "Most patients resume normal activities the same day.",
  },
  {
    q: "Does lip enhancement hurt?",
    a: "Minimal discomfort due to topical numbing.",
  },
  {
    q: "Can I choose how full I want my lips?",
    a: "Yes, volume is completely customizable.",
  },
  {
    q: "When can I apply lipstick?",
    a: "Usually after 24 hours.",
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

export default function LipEnhancement() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META ==================== */}
      <SEO
        title="Lip Enhancement in Delhi | Natural Lip Filler & Lip Contouring Treatment Gurgaon"
        description="Enhance lip volume and definition with safe lip enhancement in Delhi & Gurgaon. Get natural-looking lip fillers and contouring at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/skin/lip-enhancement"
        showSchema={false}
      />

      {/* === PREMIUM HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[60vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.lipEnhancement || assets.banner}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-[#0E3A43]">
                Lip Enhancement Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Sculpted, Balanced & Naturally Beautiful Lips
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Lips are one of the most expressive features of the face. Even a subtle change in lip volume, shape, or symmetry can significantly improve overall facial harmony. Modern Lip Enhancement Treatment is no longer about overfilled lips, it is about proportion, contour, and balance.
              At Satya Skin & Hair Solutions, we provide advanced Lip Enhancement in Delhi and Gurgaon, focusing on customized lip contouring that complements your facial structure rather than overpowering it.
              Lip enhancement is a non-surgical cosmetic procedure designed to improve lip volume, lip symmetry, lip definition, lip contour, hydration and smoothness. The most commonly used treatment involves hyaluronic acid-based dermal fillers, a substance naturally present in the body that helps retain moisture and add soft volume.
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
              src={assets.lipEnhancement}
              alt="Lip Enhancement Treatment"
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
              Natural Volume • Balanced Contouring • Subtle Definition • Hyaluronic Fillers • Lip Symmetry • Youthful Plumpness • Satya Excellence
            </span>
            <span className="px-12">
              Natural Volume • Balanced Contouring • Subtle Definition • Hyaluronic Fillers • Lip Symmetry • Youthful Plumpness • Satya Excellence
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Natural Volume • Balanced Contouring • Subtle Definition • Hyaluronic Fillers • Lip Symmetry • Youthful Plumpness • Satya Excellence
            </span>
            <span className="px-12">
              Natural Volume • Balanced Contouring • Subtle Definition • Hyaluronic Fillers • Lip Symmetry • Youthful Plumpness • Satya Excellence
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
              Ethical, patient-centric protocols — balancing safety, natural proportion, and medically guided artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What Is + How Fillers Work + Who Should + Customized + Video === */}
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
              What Is Lip Enhancement?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Lip enhancement is a non-surgical cosmetic procedure designed to improve lip volume, lip symmetry, lip definition, lip contour, hydration and smoothness. The most commonly used treatment involves hyaluronic acid-based dermal fillers, a substance naturally present in the body that helps retain moisture and add soft volume.
              </p>

              <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47]">
                Who Should Consider Lip Enhancement?
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Have naturally thin lips",
                  "Have uneven upper and lower lip proportions",
                  "Notice volume loss with aging",
                  "Want improved lip border definition",
                  "Have vertical lip lines",
                  "Desire subtle contour enhancement",
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

              <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47] mt-8">
                How Lip Fillers Work
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Hyaluronic acid fillers add controlled volume beneath the skin, attract and retain moisture, enhance natural lip shape, improve smoothness, restore youthful plumpness. The goal is natural integration — lips should look enhanced, not artificial.
              </p>

              <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47] mt-8">
                Customized Lip Contouring Approach
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Every lip is different. At Satya, treatment planning includes:
              </p>
              <motion.ul
                variants={fadeUp}
                className="space-y-3 text-[#2B333C]/90"
              >
                {[
                  "1. Facial Proportion Analysis — Lip size is evaluated relative to nose, chin, and jawline.",
                  "2. Cupid’s Bow Enhancement — Defines the central lip curve.",
                  "3. Vermilion Border Definition — Sharpens lip outline subtly.",
                  "4. Volume Distribution — Balances upper and lower lip ratio.",
                  "5. Lip Hydration Boost — Improves dryness and texture.",
                ].map((item, i) => (
                  <li key={i} className="font-medium">{item}</li>
                ))}
              </motion.ul>
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                The treatment respects natural anatomy.
              </p>
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
                  src="https://www.youtube.com/embed/brALrIUaOB0?si=QdAeuN2VPBRek02d" 
                  title="Lip Enhancement Treatment at Satya"
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

      {/* === Procedure + Benefits Grid === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            The Procedure: What to Expect
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-[#DFDFDD] mb-12">
            <p className="md:text-lg text-[#2B333C]/90 mb-6">
              Detailed consultation and lip assessment • Application of numbing cream • Precise micro-injections using fine needles or cannula • Gentle molding for symmetry
            </p>
            <p className="text-[#9E4A47] font-semibold">Procedure duration: 20–30 minutes</p>
            <p className="text-[#9E4A47] font-semibold">Results: Immediate, with final shape settling in 3–5 days.</p>
          </div>

          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of Lip Enhancement
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Immediate visible improvement",
              "Non-surgical",
              "Minimal downtime",
              "Reversible (hyaluronic acid fillers)",
              "Natural softness",
              "Customizable shape",
              "Long-lasting yet adjustable",
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
        </div>
      </section>

      {/* === How Long + vs Lip Flip + Safety + Cost === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            How Long Do Results Last?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Lip fillers typically last between 6 to 12 months. Longevity depends on metabolism, lifestyle, amount of filler used, product type. Maintenance sessions help sustain volume.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Lip Enhancement vs Lip Flip
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Lip fillers add volume, improve shape, enhance symmetry. Lip flip (Botox-based) gives subtle upper lip outward roll with no volume addition. Some patients combine both for balanced results.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Is Lip Enhancement Safe?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Yes, when performed by trained dermatologists using high-quality hyaluronic acid fillers. Temporary side effects may include mild swelling, slight bruising, tenderness. These usually resolve within a few days.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Lip Enhancement Cost in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Cost depends on type of filler, volume required, custom contouring complexity. Accurate pricing is determined after consultation and lip analysis.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Choose Satya Skin & Hair Solutions?
          </h2>
          <ul className="list-disc pl-6 space-y-3 md:text-lg text-[#2B333C]/90">
            <li>Dermatologist-led aesthetic planning</li>
            <li>Natural proportion-focused enhancement</li>
            <li>Premium hyaluronic acid fillers</li>
            <li>Ethical injection techniques</li>
            <li>Safety-first protocols</li>
          </ul>
          <p className="mt-6 md:text-lg text-[#2B333C]/90">
            Patients seeking Lip Enhancement in Delhi and Gurgaon choose precision, balance, and medically guided artistry.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Lip Enhancement Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you want refined, naturally fuller lips without surgery, lip enhancement may be the right choice.
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