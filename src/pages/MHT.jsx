"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import assets from "../assets/assets";

const faqs = [
  {
    q: "Is MHT better than FUE?",
    a: "Not always. It is particularly beneficial in advanced cases where significantly more grafts are required.",
  },
  {
    q: "Will MHT leave a visible scar?",
    a: "FUT creates a linear scar usually hidden within hair; FUE leaves tiny dot scars. Proper planning keeps both discreet.",
  },
  {
    q: "Can MHT be done in one session?",
    a: "In many advanced cases, yes — depending on graft requirement, donor condition, and patient factors.",
  },
  {
    q: "Is MHT more painful?",
    a: "Discomfort is manageable with local anesthesia and appropriate post-operative care.",
  },
  {
    q: "Is it suitable for mild baldness?",
    a: "Usually not necessary for early-stage or moderate hair loss.",
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

export default function MaximumHarvestingTechnique() {
  const [showPopup, setShowPopup] = useState(false);

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM MHT HERO BANNER === */}
<section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
  {/* Background Image - Desktop Only */}
  <div
    className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
    style={{
      backgroundImage: `url('${assets.mhtbanners || assets.banner}')`,
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
          Maximum Harvesting Technique
        </h1>

        <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
          FUT + FUE Combined for Maximum Density & Coverage
        </p>
      </div>

      <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
        For advanced baldness requiring high graft numbers and strategic donor use, 
        MHT combines the strengths of FUT and FUE — delivering superior yield, 
        density, and long-term sustainability at Satya Skin & Hair Solutions.
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
        src={assets.mhtbanners}
        alt="Maximum Harvesting Technique MHT"
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
              Maximum Graft Yield • Hybrid FUT + FUE • Advanced Baldness
              Coverage • Strategic Donor Preservation • High Density Results •
              Satya Excellence
            </span>
            <span className="px-12">
              Maximum Graft Yield • Hybrid FUT + FUE • Advanced Baldness
              Coverage • Strategic Donor Preservation • High Density Results •
              Satya Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Maximum Graft Yield • Hybrid FUT + FUE • Advanced Baldness
              Coverage • Strategic Donor Preservation • High Density Results •
              Satya Excellence
            </span>
            <span className="px-12">
              Maximum Graft Yield • Hybrid FUT + FUE • Advanced Baldness
              Coverage • Strategic Donor Preservation • High Density Results •
              Satya Excellence
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
              Strategic hybrid planning — combining FUT & FUE for maximum safe
              harvest, density, and lifelong donor health in advanced cases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is MHT + Video === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="text-center space-y-4"
          >
            <h2 className="text-2xl md:text-5xl font-bold text-[#9E4A47]">
              What Is Maximum Harvesting Technique (MHT)?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, MHT is a
              carefully planned hybrid approach combining FUT strip harvesting
              with targeted FUE extraction — maximizing graft numbers while
              protecting donor long-term viability for advanced baldness cases.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                MHT integrates the high-yield, quality-focused strip method
                (FUT) with selective individual extraction (FUE) in surrounding
                donor zones — allowing significantly more grafts in a single or
                staged session without compromising donor aesthetics or future
                options.
              </p>

              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Ideal for extensive baldness, repair cases, or when maximum
                density and coverage are priorities — performed only when
                clinically appropriate under Dr. Shail Gupta’s expertise.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Higher graft yield in one plan",
                  "Optimized donor utilization",
                  "Superior coverage for advanced baldness",
                  "Balanced donor preservation",
                  "Strategic hybrid approach",
                  "Long-term sustainability",
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
                  src="https://www.youtube.com/embed/uvGb7Anquzg?si=fWUZUrWRpU2wHX2i" // Replace with MHT / hybrid video if available
                  title="Maximum Harvesting Technique (MHT) Procedure"
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

      {/* === Understanding the Two Techniques === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Understanding FUT & FUE – The Foundation of MHT
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FUT Column */}
            <div className="space-y-6">
              <h3 className="md:text-3xl font-bold text-[#9E4A47]">
                Follicular Unit Transplantation (FUT)
              </h3>
              <p className="md:text-lg text-[#2B333C]/90">
                Strip of scalp removed → dissected under microscope → sutured
                donor area (linear scar, usually concealed).
              </p>
              <div className="space-y-3">
                <p className="font-semibold text-[#9E4A47]">Advantages:</p>
                <ul className="list-disc pl-6 space-y-1 text-[#2B333C]/90">
                  <li>High graft yield</li>
                  <li>Excellent follicle quality</li>
                  <li>Efficient harvesting</li>
                </ul>
                <p className="font-semibold text-[#9E4A47] mt-4">
                  Limitations:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[#2B333C]/90">
                  <li>Linear scar</li>
                  <li>Longer healing time</li>
                </ul>
              </div>
            </div>

            {/* FUE Column */}
            <div className="space-y-6">
              <h3 className="md:text-3xl font-bold text-[#9E4A47]">
                Follicular Unit Extraction (FUE)
              </h3>
              <p className="md:text-lg text-[#2B333C]/90">
                Individual follicles extracted → no linear scar → tiny dot marks
                → faster recovery.
              </p>
              <div className="space-y-3">
                <p className="font-semibold text-[#9E4A47]">Advantages:</p>
                <ul className="list-disc pl-6 space-y-1 text-[#2B333C]/90">
                  <li>No major scar</li>
                  <li>Less invasive</li>
                  <li>Suitable for short hair</li>
                </ul>
                <p className="font-semibold text-[#9E4A47] mt-4">
                  Limitations:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[#2B333C]/90">
                  <li>Limited grafts per session</li>
                  <li>Risk of overharvesting if unplanned</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === How MHT Combines FUT & FUE + Benefits === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            How MHT Combines FUT & FUE
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="md:text-lg text-[#2B333C]/90">
                1. FUT provides a strong, high-quality graft base from the
                safest donor zone.
                <br />
                2. Targeted FUE extracts additional grafts from surrounding
                areas.
                <br />
                3. Even distribution preserves natural donor appearance.
                <br />
                4. Maximizes total grafts safely in a strategic plan.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="md:text-2xl font-bold text-[#9E4A47]">
                Key Benefits of MHT at Satya
              </h3>
              <motion.ul variants={fadeUp} className="space-y-4">
                {[
                  "Higher graft yield than single-method",
                  "Improved coverage & density in advanced baldness",
                  "Efficient donor use – fewer future surgeries",
                  "Balanced long-term donor health",
                  "Strategic planning for maximum results",
                ].map((benefit, i) => (
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
                    <span className="font-medium md:text-lg">{benefit}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* === Ideal Candidates + Donor Preservation === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ideal Candidates */}
            <div>
              <h2 className="text-xl md:text-4xl font-bold text-[#9E4A47] mb-8">
                Who Is an Ideal Candidate for MHT?
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Norwood Grade 5–7 baldness",
                  "Patients needing 4000+ grafts",
                  "Good donor density available",
                  "Repair / corrective cases",
                  "Large area coverage required",
                ].map((cand, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-[#DFDFDD]"
                  >
                    <p className="md:text-lg font-semibold text-[#2B333C]">
                      {cand}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 md:text-lg text-[#2B333C]/80">
                Not typically needed for mild or moderate baldness.
              </p>
            </div>

            {/* Donor Preservation */}
            <div>
              <h2 className="text-xl md:text-4xl font-bold text-[#9E4A47] mb-8">
                Donor Area Preservation in MHT
              </h2>
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                Donor safety is paramount. Poor execution can cause visible
                thinning or patchy appearance.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
                <p className="font-semibold text-[#9E4A47] mb-4">
                  Proper MHT ensures:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Even, distributed FUE extractions</li>
                  <li>Concealed FUT linear scar</li>
                  <li>Balanced donor density long-term</li>
                  <li>Future options remain open</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === MHT vs Traditional FUE Table-like Comparison + Recovery === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-6xl mx-auto space-y-16 text-center">
          <h2 className="text-xl md:text-4xl font-bold text-[#9E4A47]">
            MHT vs Traditional FUE
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { feature: "Graft Count", fue: "Moderate", mht: "Higher" },
              { feature: "Donor Efficiency", fue: "Limited", mht: "Optimized" },
              {
                feature: "Advanced Baldness Coverage",
                fue: "May require multiple sessions",
                mht: "Better in one strategic plan",
              },
              {
                feature: "Scar Type",
                fue: "Tiny dot scars",
                mht: "Linear + dot scars",
              },
              {
                feature: "Best For",
                fue: "Moderate baldness",
                mht: "Advanced baldness",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-xl border border-[#DFDFDD]"
              >
                <p className="font-bold text-[#9E4A47] mb-4 md:text-xl">
                  {row.feature}
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500">
                      Traditional FUE
                    </p>
                    <p className="md:text-lg font-medium">{row.fue}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-[#9E4A47]">
                      MHT
                    </p>
                    <p className="md:text-lg font-medium">{row.mht}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47] mb-6 mt-12">
              Recovery After MHT
            </h3>
            <p className="md:text-lg text-[#2B333C]/90 mb-8">
              Combined recovery profile — manageable with proper care.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { time: "10–14 days", desc: "FUT area sutures/healing" },
                { time: "7–10 days", desc: "FUE extraction points heal" },
                { time: "3–4 months", desc: "Visible new growth begins" },
                { time: "9–12 months", desc: "Final mature results" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white p-6 rounded-2xl shadow-xl border border-[#DFDFDD]"
                >
                  <div className="text-xl md:text-3xl font-bold text-[#9E4A47] mb-2">
                    {item.time}
                  </div>
                  <p className="text-[#2B333C]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Cost / Safety / Why Choose + CTA & FAQ === */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-xl md:text-3xl font-bold text-[#9E4A47] mb-6">
            Is MHT Safe?
          </h2>
          <p className="nd:text-lg leading-relaxed text-[#2B333C]/90">
            Yes — when donor density is adequate, zones are distributed
            properly, and performed by experienced surgeons like Dr. Shail
            Gupta. Expertise is critical to avoid compromising the donor area.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="text-xl md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Choose MHT Over a Single Technique?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            MHT is selected for extensive baldness, desire for maximum density,
            need for strategic donor use, and preference for single-session
            efficiency — offering flexibility single-method approaches may not
            provide.
          </p>
        </div>

        {/* Final CTA */}
        <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center rounded-3xl mx-4 md:mx-0">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-xl md:text-5xl font-bold">
              Ready for Maximum Coverage & Density?
            </h2>
            <p className="md:text-xl opacity-90">
              Advanced baldness needs strategic hybrid planning — avoid limited
              results or donor regret.
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-white text-[#9E4A47] py-5 px-5 md:px-12 rounded-full font-bold text-xs md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
            >
              Book Your FREE Consultation Today
            </button>
          </div>
        </section>

        {/* FAQ */}
       <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FCEBDE]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-[#9E4A47] mb-12 text-center">
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
      </section>
    </main>
  );
}
