"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Is chemical peel painful?",
    a: "Most peels cause mild tingling or warmth, which subsides quickly.",
  },
  {
    q: "How soon will I see results?",
    a: "Mild glow is visible within a week; deeper results appear gradually.",
  },
  {
    q: "Can chemical peel remove acne scars completely?",
    a: "Superficial scars improve significantly; deeper scars may require combination treatments.",
  },
  {
    q: "Is chemical peel permanent?",
    a: "Results last with maintenance and proper skincare.",
  },
  {
    q: "Can chemical peel worsen pigmentation?",
    a: "Improperly performed peels can cause pigmentation. Dermatologist supervision prevents this.",
  },
  {
    q: "Can men undergo chemical peel?",
    a: "Yes, chemical peel is effective for both men and women.",
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

export default function ChemicalPeelTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META ==================== */}
      <SEO
        title="Medical Chemical Peel Treatment | Advanced Skin Peeling Specialist"
        description="Looking for safe and effective Chemical Peel Treatment? Get dermatologist-supervised chemical peels for acne, pigmentation, and glowing skin in Gurgaon at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/skin/chemical-peel"
        showSchema={false}
      />

      {/* === PREMIUM HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.chemicalpeel || assets.banner}')`,
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Chemical Peel Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Scientifically Renew Your Skin from Within
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Skin problems such as acne scars, pigmentation, dull skin, and signs of premature aging require more than the topical application of skin care products. When dead cells and excess pigment is building up, we treat it medically.
              Chemical Peel Treatment is a medical skin resurfacing procedure performed by dermatologists to improve skin texture, tone and clarity by promoting a controlled exfoliation process.
              At Satya Skin & Hair Solutions, we provide personalised Chemical Peel Treatment in Delhi and Gurgaon, which is tailored according to the skin of Indians.
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
              Book Consultation →
            </motion.button>
          </div>

          {/* Mobile Image (Zoomed) */}
          <div className="lg:hidden mt-8 overflow-hidden rounded-xl">
            <img
              src={assets.chemicalpeel}
              alt="Chemical Peel Treatment"
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
              Skin Renewal • Pigmentation Reduction • Acne Control • Collagen Boost • Texture Refinement • Brightening • Safe for Indian Skin • Satya Excellence
            </span>
            <span className="px-12">
              Skin Renewal • Pigmentation Reduction • Acne Control • Collagen Boost • Texture Refinement • Brightening • Safe for Indian Skin • Satya Excellence
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Skin Renewal • Pigmentation Reduction • Acne Control • Collagen Boost • Texture Refinement • Brightening • Safe for Indian Skin • Satya Excellence
            </span>
            <span className="px-12">
              Skin Renewal • Pigmentation Reduction • Acne Control • Collagen Boost • Texture Refinement • Brightening • Safe for Indian Skin • Satya Excellence
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
              Ethical, patient-centric protocols — balancing safety, controlled exfoliation, and long-term skin renewal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What Is + Concerns + Types + How It Works + Video === */}
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
              What Is Chemical Peel Treatment?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              A chemical peel is a regulated application of medical strength exfoliants that shed damaged layers of skin. This stimulates new skin growth, production of collagen, decrease of pigment, smoother skin texture, brighter complexion overall.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47]">
                What Skin Concerns Can Chemical Peels Treat?
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Acne and Acne Scarring — Reduces active pimples and fades post-acne pigmentation.",
                  "Melasma & Stubborn Discolorations — Contributes to a lighter appearance of dark patches and uneven pigmentation.",
                  "Sun Damage & Tanning — Enhances the clarity and brightness of the skin.",
                  "Fine Lines & The Start of Aging — Stimulates collagen production and smoothes fine wrinkles.",
                  "Coarse Skin Texture — Enhances the smoothness of skin and the look of pores.",
                  "Tired & Blotchy Skin Tone — Returns to the natural glow and radiance.",
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
                Types of Chemical Peels Used in Dermatology
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Glycolic Acid Peel — Best for dull skin and mild pigmentation.",
                  "Salicylic Acid Peel — Effective for acne-prone and oily skin.",
                  "Lactic Acid Peel — Gentle option for sensitive skin.",
                  "TCA Peel — Medium-depth peel for deeper pigmentation and acne scars.",
                  "Yellow Peel — Advanced peel for melasma and stubborn pigmentation.",
                  "Combination Peels — Customized blends for multi-layered skin concerns.",
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
                How Chemical Peel Treatment Works
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Chemical peels accelerate the natural exfoliation process. The applied solution breaks down bonds between dead skin cells, allowing controlled peeling and renewal. This process promotes new skin cell growth, enhances collagen synthesis, improves pigment distribution, smoothens surface irregularities. Over time, repeated sessions lead to visible skin refinement.
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
                  src="https://www.youtube.com/embed/MWObPqvRRgk?si=1CBRKeWS4yTnBrid"
                  title="Chemical Peel Treatment at Satya"
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

      {/* === Procedure + After + Sessions + Safety + vs Laser === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            What Happens During the Procedure?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD]"
            >
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">Step-by-Step Process</h3>
              <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                <li>Consultation — Skin type evaluation, concern assessment, pigment depth analysis, medical history review</li>
                <li>Skin Preparation — Cleansing, degreasing, protective measures</li>
                <li>Peel Application — Controlled application, monitoring skin response, neutralization (if required)</li>
                <li>Post-Treatment Care — Soothing agents applied, sunscreen guidance, skincare instructions provided</li>
              </ul>
              <p className="mt-6 text-[#9E4A47] font-semibold">Session duration: 20–40 minutes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD]"
            >
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">What to Expect After Chemical Peel?</h3>
              <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                <li>Mild redness</li>
                <li>Light flaking</li>
                <li>Peeling for 2–5 days (medium peels)</li>
                <li>Gradual skin brightening</li>
              </ul>
              <p className="mt-6 italic text-[#828D9C]">Sun protection is critical for optimal results.</p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
            <h3 className="md:text-3xl font-bold text-[#9E4A47] mb-6">How Many Sessions Are Needed?</h3>
            <ul className="list-disc pl-6 space-y-2 md:text-lg text-[#2B333C]/90">
              <li>Mild pigmentation: 3–4 sessions</li>
              <li>Acne scars: 4–6 sessions</li>
              <li>Melasma: Multiple customized sessions</li>
              <li>Maintenance glow: 1 session every few months</li>
            </ul>
            <p className="mt-6 italic text-[#828D9C]">Results improve progressively over time.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
            <h3 className="md:text-3xl font-bold text-[#9E4A47] mb-6">Is Chemical Peel Safe for Indian Skin?</h3>
            <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
              Yes, when proper peel strength is chosen, treatment is done by trained dermatologists, and pre- and post-care instructions are followed. Improper peel strength can lead to burns or pigmentation. Medical supervision is essential.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
            <h3 className="md:text-3xl font-bold text-[#9E4A47] mb-6">Chemical Peel vs Laser Treatment</h3>
            <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
              Chemical peels work best for surface-level pigmentation, acne control, dull skin. Laser treatments may be required for deep pigmentation, severe acne scars. Often, combination therapy gives superior results.
            </p>
          </div>
        </div>
      </section>

      {/* === Benefits Grid === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of Medical Chemical Peel Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Brighter skin",
              "Reduced acne",
              "Faded dark spots",
              "Improved texture",
              "Controlled oil production",
              "Boosted collagen",
              "Minimal downtime",
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
            The goal is long-term skin improvement, not temporary glow.
          </p>
        </div>
      </section>

      {/* === Cost + Why Choose === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Chemical Peel Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Cost depends on type of peel selected, area treated, number of sessions required, combination therapies. Treatment plans are customized based on clinical evaluation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Choose Satya Skin & Hair Solutions?
          </h2>
          <ul className="list-disc pl-6 space-y-3 md:text-lg text-[#2B333C]/90">
            <li>Dermatologist-led treatment protocols</li>
            <li>Safe medical-grade formulations</li>
            <li>Customized peel selection</li>
            <li>Evidence-based skin care</li>
            <li>Focus on long-term pigment control</li>
          </ul>
          <p className="mt-6 md:text-lg text-[#2B333C]/90">
            Patients searching for Chemical Peel Treatment in Delhi or the Best Chemical Peel in Gurgaon benefit from structured and medically supervised care.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Chemical Peel Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you are dealing with pigmentation, acne marks, dullness, or early signs of aging, medical chemical peel treatment can restore skin clarity safely.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-9 rounded-full font-bold md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your Consultation Today
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