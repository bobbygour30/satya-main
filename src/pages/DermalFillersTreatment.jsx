"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Do dermal fillers look natural?",
    a: "Yes, when done correctly, results are subtle and natural.",
  },
  {
    q: "Are fillers painful?",
    a: "Minimal discomfort due to numbing and lidocaine.",
  },
  {
    q: "Can fillers remove wrinkles completely?",
    a: "They significantly reduce wrinkles but results vary by severity.",
  },
  {
    q: "Is the procedure reversible?",
    a: "Yes, Hyaluronic acid fillers can be dissolved if needed.",
  },
  {
    q: "How soon can I see results?",
    a: "Immediately after the procedure.",
  },
  {
    q: "How often do I need fillers?",
    a: "Typically every 6–18 months depending on type.",
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

export default function DermalFillersTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META ==================== */}
      <SEO
        title="Dermal Fillers Treatment | Wrinkles, Volume Loss & Facial Contouring"
        description="Get natural-looking results with dermal fillers. Treat wrinkles, restore collagen, and enhance facial features with safe dermatologist-led procedures."
        canonical="https://satyaskinhair.com/skin/dermal-fillers"
        showSchema={false}
      />
      {/* === PREMIUM DERMAL FILLERS HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.dermalfillers || assets.banner}')`,
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
                Dermal Fillers
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Restore Volume, Smooth Wrinkles & Enhance Natural Beauty
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              As we age, our skin gradually loses collagen, elasticity, and volume, leading to wrinkles, sagging, and hollow areas.
              At Satya Skin & Hair Solutions, dermal fillers offer a safe, non-surgical way to restore youthful contours and enhance facial features, all under expert dermatologist supervision.
            </p>

            <motion.button
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

          {/* Mobile Image */}
          <div className="lg:hidden mt-8 overflow-hidden rounded-xl">
            <img
              src={assets.dermalfillers}
              alt="Dermal Fillers Treatment"
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
              Restore Volume • Smooth Wrinkles • Enhance Features • Collagen Boost • Natural Results • Minimal Downtime • Expert Care
            </span>
            <span className="px-12">
              Restore Volume • Smooth Wrinkles • Enhance Features • Collagen Boost • Natural Results • Minimal Downtime • Expert Care
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Restore Volume • Smooth Wrinkles • Enhance Features • Collagen Boost • Natural Results • Minimal Downtime • Expert Care
            </span>
            <span className="px-12">
              Restore Volume • Smooth Wrinkles • Enhance Features • Collagen Boost • Natural Results • Minimal Downtime • Expert Care
            </span>
          </div>
        </motion.div>
      </div>

      {/* Doctor Team Section */}
      <section className="relative bg-[#FFF8EF] py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(252,235,222,0.5),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl mx-auto">
          {/* LEFT SIDE: DOCTOR IMAGES */}
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

          {/* RIGHT SIDE: CONTENT */}
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
              Ethical, patient-centric protocols — balancing safety, precision, artistry, and long-term skin health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What Are Dermal Fillers + Why Used + How Common === */}
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
              What Are Dermal Fillers?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Dermal fillers are soft tissue fillers injected into the skin at different depths to restore volume, smooth wrinkles, and enhance facial features naturally.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={container} className="space-y-8">
              <div className="bg-white/70 p-6 rounded-2xl border border-[#DFDFDD]">
                <p className="font-semibold text-[#9E4A47] mb-3">What Are Dermal Fillers?</p>
                <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  Dermal fillers are soft tissue fillers injected into the skin at different depths to:
                </p>
                <ul className="mt-3 space-y-2 text-base md:text-lg text-[#2B333C]/90 list-disc pl-5">
                  <li>Fill wrinkles and fine lines</li>
                  <li>Restore lost volume</li>
                  <li>Enhance facial features</li>
                  <li>Improve skin contour and symmetry</li>
                </ul>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  Most modern fillers are made of Hyaluronic acid (HA) — a naturally occurring substance in the skin that helps retain moisture and maintain structure.
                </p>
              </div>

              <div className="bg-white/70 p-6 rounded-2xl border border-[#DFDFDD]">
                <p className="font-semibold text-[#9E4A47] mb-3">Why Are Dermal Fillers Used?</p>
                <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  Dermal fillers are widely used to address:
                </p>
                <ul className="mt-3 space-y-2 text-base md:text-lg text-[#2B333C]/90 list-disc pl-5">
                  <li>Wrinkles and folds (nasolabial lines, marionette lines)</li>
                  <li>Volume loss in cheeks and temples</li>
                  <li>Under-eye hollowness (tear trough)</li>
                  <li>Thin or uneven lips</li>
                  <li>Jawline and chin definition</li>
                  <li>Skin sagging due to aging</li>
                </ul>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  They not only improve appearance but also stimulate collagen production, enhancing long-term skin quality.
                </p>
              </div>

              <div className="bg-white/70 p-6 rounded-2xl border border-[#DFDFDD]">
                <p className="font-semibold text-[#9E4A47] mb-3">How Common Are Dermal Fillers?</p>
                <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  Dermal fillers are among the most popular non-surgical cosmetic treatments worldwide due to:
                </p>
                <ul className="mt-3 space-y-2 text-base md:text-lg text-[#2B333C]/90 list-disc pl-5">
                  <li>Immediate visible results</li>
                  <li>Minimal downtime</li>
                  <li>High safety profile</li>
                  <li>Natural-looking outcomes</li>
                </ul>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  They are commonly chosen by individuals who want subtle yet effective facial rejuvenation without surgery.
                </p>
              </div>
            </motion.div>

            {/* Types of Dermal Fillers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="bg-white/70 rounded-3xl p-8 border border-[#DFDFDD]"
            >
              <h3 className="text-2xl font-bold text-[#9E4A47] mb-6">Types of Dermal Fillers</h3>
              <p className="text-base md:text-lg mb-6 text-[#2B333C]/90">
                Different fillers are used based on the treatment area and desired outcome:
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#0E3A43] text-lg">1. Hyaluronic Acid (HA)</h4>
                  <p className="text-[#828D9C]">• Most commonly used<br />• Hydrates and plumps the skin<br />• Ideal for lips, under-eyes, and fine lines</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0E3A43] text-lg">2. Calcium Hydroxylapatite (CaHA)</h4>
                  <p className="text-[#828D9C]">• Thicker filler for deeper lines<br />• Stimulates collagen<br />• Used for cheeks and facial contouring</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0E3A43] text-lg">3. Poly-L-lactic Acid (PLLA)</h4>
                  <p className="text-[#828D9C]">• Works gradually<br />• Boosts natural collagen production<br />• Best for overall facial volume restoration</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0E3A43] text-lg">4. Polymethylmethacrylate (PMMA)</h4>
                  <p className="text-[#828D9C]">• Semi-permanent filler<br />• Provides long-lasting structure<br />• Used in deeper wrinkles and scars</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === Procedure Section (Before + During + After) === */}
      <section className="py-7 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#9E4A47]">
            What Happens During Dermal Filler Treatment?
          </h2>

          <div className="space-y-6">
            {/* Before */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">What Happens Before a Dermal Filler Procedure?</h3>
              <div className="space-y-4 md:text-lg text-[#2B333C]/90">
                <p>• Detailed consultation with a dermatologist</p>
                <p>• Facial assessment and treatment planning</p>
                <p>• Discussion of goals and expectations</p>
                <p>• Medical history review</p>
                <p>• Marking of injection areas</p>
                <p className="italic mt-2">This ensures a customized and safe approach.</p>
              </div>
            </div>

            {/* During */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">What Happens During a Dermal Filler Procedure?</h3>
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                The dermal filler procedure is quick and precise:
              </p>
              <div className="space-y-4 md:text-lg text-[#2B333C]/90">
                <p>• Skin is cleansed and numbed</p>
                <p>• Filler is injected using fine needles or cannula</p>
                <p>• Placement is adjusted for symmetry and natural results</p>
                <p>• Procedure time: 20–45 minutes</p>
                <p>Most fillers also contain lidocaine, making the process comfortable.</p>
              </div>
            </div>

            {/* After */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">What Happens After a Dermal Filler Procedure?</h3>
              <div className="space-y-4 md:text-lg text-[#2B333C]/90">
                <p>After treatment:</p>
                <p>• Mild swelling or redness may occur</p>
                <p>• Slight bruising is possible</p>
                <p>• Results are visible immediately</p>
                <p className="mt-4">Patients are advised to:</p>
                <p>• Avoid touching the treated area</p>
                <p>• Avoid heavy workouts for 24 hours</p>
                <p>• Stay hydrated</p>
              </div>
            </div>

            {/* Facial Fat Grafting */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">What's the Process for a Facial Fat Grafting Procedure?</h3>
              <p className="md:text-lg text-[#2B333C]/90">
                Facial fat grafting is an alternative to dermal fillers where:
              </p>
              <div className="space-y-4 md:text-lg text-[#2B333C]/90 mt-4">
                <p>• Fat is taken from your own body (abdomen/thighs)</p>
                <p>• Processed and purified</p>
                <p>• Injected into the face for volume restoration</p>
                <p className="mt-4">While it provides long-lasting results, it is more invasive compared to dermal fillers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Advantages + Recovery + Longevity + Safety === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Advantages of Dermal Filler Procedures
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Non-surgical and minimally invasive",
              "Immediate visible results",
              "Enhances facial contours naturally",
              "Improves wrinkles and volume loss",
              "Stimulates collagen production",
              "Customizable for each face",
              "Minimal downtime",
            ].map((adv, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#9E4A47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#2B333C]/90">{adv}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Recovery Time After Dermal Fillers
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Recovery is quick and easy:<br />
            • Downtime: Minimal (same day recovery)<br />
            • Swelling: 1–3 days<br />
            • Final results: Within 5–7 days<br /><br />
            Most patients resume normal activities immediately.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            How Long Do Dermal Fillers Last?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            • Hyaluronic acid fillers: 6–18 months<br />
            • CaHA / PLLA: Longer-lasting due to collagen stimulation<br />
            • PMMA: Semi-permanent<br /><br />
            Duration depends on the type of filler and treatment area.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Are Dermal Fillers Safe?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Yes, when performed by an experienced dermatologist.<br /><br />
            Because many fillers are made from Hyaluronic acid (HA), a substance naturally found in the body, they are:<br />
            • Biocompatible<br />
            • Safe<br />
            • Reversible (in case of HA fillers)
          </p>
        </div>
      </section>

      {/* === Why Satya === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD] text-center">
            <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
              Why Choose Satya Skin & Hair Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-8">
              {[
                "Expert dermatologist-led procedures",
                "Focus on natural, subtle enhancement",
                "Advanced techniques for precision",
                "Ethical, patient-first approach",
                "Customized treatment planning",
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#9E4A47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#2B333C]/90">{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg italic text-[#828D9C]">
              We believe in enhancing your features, not changing them.
            </p>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Your Consultation
          </h2>
          <p className="md:text-xl opacity-90">
            Ready to restore volume, smooth wrinkles, and enhance your facial features?
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-9 rounded-full font-bold md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
        </div>
      </section>

      {/* === FAQ Section === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FCEBDE]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-12 text-center">
            Frequently Asked Questions (FAQs)
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
                    aria-expanded={isOpen}
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
      <ConsultationPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </main>
  );
}