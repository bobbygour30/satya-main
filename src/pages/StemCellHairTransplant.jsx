"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is a Stem Cell Hair Transplant?",
    a: "It is an experimental procedure that involves isolating stem cells from hair follicles, culturing them, and reintroducing them into balding areas to potentially regenerate hair.",
  },
  {
    q: "Is Stem Cell Hair Transplant FDA Approved?",
    a: "No, it is not approved by the US FDA and remains in the research phase.",
  },
  {
    q: "What is the current status of Stem Cell Hair Transplant?",
    a: "It is still under clinical trials and scientific investigation.",
  },
  {
    q: "What does the future hold for Stem Cell Hair Transplant?",
    a: "If research validates safety and effectiveness, it may become a breakthrough in regenerative hair restoration. Until then, it remains experimental.",
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

export default function StemCellHairTransplant() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM STEM CELL HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-left bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.stemcellbanners}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full  grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0 sm:ml-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Stem Cell Hair Transplant
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                A Scientific Overview of an Experimental Hair Restoration Approach
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Hair loss affects individuals across all age groups and genders. While multiple treatments claim to reverse baldness, not all are scientifically validated. One emerging concept in regenerative medicine is Stem Cell Hair Transplant, a technique currently under research and not yet approved for mainstream clinical use.
              This page provides a factual overview of the science, regulatory status, and realistic expectations surrounding stem cell-based hair restoration.
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
              src={assets.stemcellbanners}
              alt="Stem Cell Hair Transplant"
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
              Experimental Research • Regulatory Caution • Evidence-Driven • Realistic Expectations • Future Potential • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Experimental Research • Regulatory Caution • Evidence-Driven • Realistic Expectations • Future Potential • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Experimental Research • Regulatory Caution • Evidence-Driven • Realistic Expectations • Future Potential • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Experimental Research • Regulatory Caution • Evidence-Driven • Realistic Expectations • Future Potential • Satya Skin & Hair Solutions
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
              At Satya Skin & Hair Solutions we work with Dr. Shail Gupta to provide
              evidence-based guidance on Stem Cell Hair Transplant. We do not offer experimental treatments but educate on the science, regulatory status, and realistic expectations. We focus on proven methods like FUT and FUE for permanent results, at Satya Skin & Hair
              Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Stem Cell Hair Transplant Section */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto space-y-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="text-center space-y-4"
          >
            <h2 className="text-2xl md:text-5xl font-bold text-[#9E4A47]">
              What is Stem Cell Hair Transplant?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Stem Cell Hair Transplant is an experimental regenerative procedure designed to:

              * Use a small sample of a patient’s hair follicles

              * Isolate stem cells from those follicles

              * Culture or replicate them in a laboratory setting

              * Reintroduce them into bald or thinning areas

              Unlike traditional hair transplant methods such as FUT or FUE, which relocate existing follicles, stem cell transplant aims to potentially generate new viable follicles.
              However, it is important to understand that this treatment remains in the research phase.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Patients seeking information on Stem Cell Hair Transplant should prioritize understanding its experimental nature, lack of approval, and the importance of evidence-based alternatives for reliable results.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Reduced dependency on donor area",
                  "Possibility of generating new follicles",
                  "Treatment of advanced baldness without donor exhaustion",
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
                    <span className="font-medium">Potential Advantages (If Approved in the Future): {item}</span>
                  </li>
                ))}
              </motion.ul>

              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                However, these outcomes are theoretical until validated by large-scale clinical trials.
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
                  src="https://www.youtube.com/embed/MWObPqvRRgk?si=tWJB-gGTSZ6qFox3"
                  title="Stem Cell Hair Transplant Overview"
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

      {/* The Science Behind Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="text-center space-y-4"
          >
            <h2 className="text-xl md:text-4xl md:text-5xl font-bold text-[#9E4A47]">
              The Science Behind Stem Cell Hair Transplant
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              The proposed scientific protocol involves:

              1. Extraction of a small follicular sample

              2. Isolation of stem cells in a laboratory

              3. Culturing or stimulating these cells

              4. Implantation into bald scalp areas via micro-needling

              The goal is to stimulate follicular regeneration rather than simply redistribute hair from donor to recipient areas.
              While this concept is promising, it has not yet achieved regulatory approval or widespread clinical validation Stem Cell Hair Transplant.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Extraction of a small follicular sample",
                text: "Obtaining cells from the patient's own hair follicles.",
              },
              {
                title: "Isolation of stem cells in a laboratory",
                text: "Separating viable stem cells for further processing.",
              },
              {
                title: "Culturing or stimulating these cells",
                text: "Replicating or activating cells in a controlled environment.",
              },
              {
                title: "Implantation into bald scalp areas via micro-needling",
                text: "Reintroducing treated cells to target areas.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-6 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="md:text-xl font-semibold text-[#9E4A47] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#828D9C] leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FDA Approved Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6 text-center">
            Is Stem Cell Hair Transplant FDA Approved?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90 text-center">
            Currently:

            * Stem Cell Hair Transplant is not approved by the US Food and Drug Administration (FDA)\
              Stem Cell Hair Transplant

            * It remains in experimental and clinical trial stages

            * No standardized global protocol exists

            Any clinic claiming fully approved stem cell hair transplant should be carefully evaluated, as regulatory clearance has not been granted at this stage.
          </p>
        </div>
      </section>

      {/* Difference Between True Research and Claims Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Difference Between True Stem Cell Research and Commercial Claims
          </h2>
          <p className="md:text-lg text-center text-[#2B333C]/90 mb-8 max-w-3xl mx-auto">
            Some clinics advertise “stem cell hair transplant,” but these often involve:
          </p>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "Fat-derived stem cell injections",
              "Liposuction-based stem cell extraction",
              "Growth factor injections",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
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
              </motion.li>
            ))}
          </motion.ul>
          <p className="md:text-lg text-center text-[#2B333C]/90 mt-8 max-w-3xl mx-auto">
            These are not the same as laboratory-cultured follicular stem cell transplantation described in research settings.
            Patients should distinguish between:

            * Experimental regenerative research

            * Commercially marketed cell-based therapies
          </p>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Current Status of Stem Cell Hair Transplant
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            At present:

            * The technique is still under scientific investigation

            * Trials are ongoing globally

            * No regulatory body has granted approval

            * Long-term safety and effectiveness data remain limited

            Most available information is based on early-stage research and pilot trials.
          </p>
        </div>
      </section>

      {/* Limitations and Cautions Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6 text-center">
            Limitations and Cautions
          </h2>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "The treatment is experimental",
              "No guaranteed outcomes exist",
              "Regulatory approval is pending",
              "Scientific protocols are still evolving",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
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
                <span className="font-medium">Before considering stem cell-based procedures, patients should understand: {item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90 mt-8 text-center">
            Professional consultation and evidence-based guidance are essential.
          </p>
        </div>
      </section>

      {/* The Future Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-xl md:text-4xl font-bold text-[#9E4A47]">
            The Future of Stem Cell Hair Transplant
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Stem Cell Hair Transplant represents an exciting direction in regenerative medicine. Research teams worldwide are exploring methods to safely and effectively regenerate hair follicles.
            However, progress must be:

            * Evidence-driven

            * Regulator-approved

            * Supported by long-term clinical data

            Until then, traditional hair transplant techniques such as FUT and FUE remain the gold standard for permanent hair restoration.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book Your Hair Restoration Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            For proven, permanent solutions, consult with our experts on FUT, FUE, or other validated treatments. We prioritize evidence-based care over experimental options.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-7 rounded-full font-bold md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
        </div>
      </section>

      {/* FAQ Section */}
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
    </main>
  );
}