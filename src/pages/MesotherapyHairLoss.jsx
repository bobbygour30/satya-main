"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Mesotherapy permanent?",
    a: "No, Mesotherapy provides ongoing support for hair health but requires maintenance sessions for sustained results.",
  },
  {
    q: "How many sessions of Mesotherapy are needed?",
    a: "Typically 6 to 8 sessions, spaced 2–4 weeks apart, with maintenance depending on progression.",
  },
  {
    q: "Is Mesotherapy painful?",
    a: "It involves mild micro-punctures; topical anesthesia can be used if needed for comfort.",
  },
  {
    q: "Can Mesotherapy work for advanced baldness?",
    a: "It is most effective for early to moderate thinning; for advanced cases, it may be combined with other therapies.",
  },
  {
    q: "What is the difference between Mesotherapy and PRP?",
    a: "Mesotherapy uses external nutrient serums, while PRP uses your own blood-derived plasma; both improve scalp health but differ in source and cost.",
  },
  {
    q: "Is Mesotherapy safe?",
    a: "Yes, when performed by professionals; mild redness may occur temporarily, but serious risks are low.",
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

export default function MesotherapyHairLoss() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM MESOTHERAPY HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.mesobanners}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full  grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8">
         

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Mesotherapy for Hair Loss
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                A Minimally Invasive Treatment for Early Hair Thinning
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Hair loss can affect both men and women and may significantly impact confidence. Among non-surgical treatments available today, Mesotherapy for Hair Loss has gained attention as a minimally invasive option aimed at improving scalp health and slowing hair fall.
              Mesotherapy for Hair Loss, Mesotherapy involves targeted delivery of nutrients and growth stimulants directly into the scalp to improve follicle function and scalp environment.
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
              src={assets.mesobanners}
              alt="Mesotherapy for Hair Loss"
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
              Scalp Health Boost • Nutrient Delivery • Minimal Downtime • Follicle Revitalization • Non-Surgical Support • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Scalp Health Boost • Nutrient Delivery • Minimal Downtime • Follicle Revitalization • Non-Surgical Support • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Scalp Health Boost • Nutrient Delivery • Minimal Downtime • Follicle Revitalization • Non-Surgical Support • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Scalp Health Boost • Nutrient Delivery • Minimal Downtime • Follicle Revitalization • Non-Surgical Support • Satya Skin & Hair Solutions
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
              At Satya Skin & Hair Solutions we work with Dr. Shail Gupta to offer
              Mesotherapy for Hair Loss. We do these Mesotherapy for Hair Loss in Delhi and Gurgaon. When we do Mesotherapy for Hair Loss we make sure to
              focus on scalp health, nutrient delivery, and ethical treatment. We do not take
              shortcuts when we provide Mesotherapy for Hair Loss, at Satya Skin & Hair
              Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Mesotherapy Section */}
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
              What is Mesotherapy for Hair Loss?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Mesotherapy is a scalp treatment that:

              * Uses micro-punctures created by a derma roller or mesogun

              * Delivers nutrients and growth stimulants into the scalp

              * Improves blood circulation

              * Supports existing hair follicles

              Unlike hair transplant surgery, Mesotherapy does not involve grafting. It works by enhancing the scalp environment and revitalising weakened follicles.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Patients commonly choose Mesotherapy for Hair Loss because they want minimally invasive treatment, low downtime, reduced inflammation, and improved scalp health for early-stage support.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Minimally Invasive",
                  "Low Downtime",
                  "Reduced Scalp Inflammation",
                  "Improved Scalp Health",
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

              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                When performed correctly, Mesotherapy for Hair Loss delivers really natural results
                that last a very long time — so you can feel confident and happy
                with your appearance for years to come.
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
                  src="https://www.youtube.com/embed/APMVgDMdVzU?si=ps5ho3hl6YKZe76m"
                  title="Mesotherapy for Hair Loss Procedure"
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

      {/* How Mesotherapy Works Section */}
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
              How Mesotherapy Works
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              The procedure typically includes:

              1. Cleansing of the scalp

              2. Application of topical anesthesia (if required)

              3. Creation of micro-channels in the scalp

              4. Delivery of nutrient-rich solutions (peptides, vitamins, stem-cell-based serums)

              These micro-channels allow direct absorption of active ingredients, helping to:

              * Improve scalp circulation

              * Reduce inflammation

              * Strengthen hair roots

              * Support dormant follicles
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Cleansing of the scalp",
                text: "Preparation to ensure a clean treatment area.",
              },
              {
                title: "Application of topical anesthesia (if required)",
                text: "For added comfort during the procedure.",
              },
              {
                title: "Creation of micro-channels in the scalp",
                text: "Using derma roller or mesogun for nutrient delivery.",
              },
              {
                title: "Delivery of nutrient-rich solutions",
                text: "Peptides, vitamins, stem-cell-based serums injected directly.",
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

      {/* Key Benefits Grid */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Key Benefits of Mesotherapy for Hair Loss
          </h2>
          <p className="md:text-lg text-center text-[#2B333C]/90 mb-8 max-w-3xl mx-auto">
            Based on clinical insights Mesotherapy for Hair Loss, key advantages include:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Minimally Invasive",
                text: "The procedure involves small micro-punctures without surgical incisions.",
              },
              {
                title: "Low Downtime",
                text: "Most patients resume daily activities quickly.",
              },
              {
                title: "Reduced Scalp Inflammation",
                text: "Mesotherapy may help decrease inflammatory processes contributing to hair thinning.",
              },
              {
                title: "Improved Scalp Health",
                text: "Enhanced circulation supports follicle nutrition.",
              },
              {
                title: "Early-Stage Hair Loss Support",
                text: "Most effective in early stages of male and female pattern baldness.",
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

      {/* Who Can Benefit Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Who Can Benefit from Mesotherapy?
          </h2>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "Early androgenetic alopecia",
              "Diffuse hair thinning",
              "Stress-related hair fall",
              "Postpartum shedding",
              "Nutritional deficiency-related hair loss",
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
                <span className="font-medium">Mesotherapy may be considered for individuals experiencing: {item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <p className="md:text-lg text-center text-[#2B333C]/90 mt-8 max-w-3xl mx-auto">
            It is important to understand that Mesotherapy does not create new hair follicles in completely bald areas. It supports existing, weakened follicles.
          </p>
        </div>
      </section>

      {/* Mesotherapy vs PRP Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Mesotherapy vs PRP for Hair Loss
          </h2>
          <p className="md:text-lg text-center text-[#2B333C]/90 mb-8 max-w-3xl mx-auto">
            Understanding the difference between Mesotherapy and PRP (Platelet-Rich Plasma) helps in making an informed choice.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#9E4A47] text-white">
                  <th className="p-4">Factor</th>
                  <th className="p-4">Mesotherapy</th>
                  <th className="p-4">PRP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Anesthesia</td>
                  <td className="p-4">Usually topical</td>
                  <td className="p-4">Requires local injections</td>
                </tr>
                <tr className="border-b bg-[#FCEBDE]/30">
                  <td className="p-4 font-medium">Stimulant Source</td>
                  <td className="p-4">External serums (peptides, vitamins)</td>
                  <td className="p-4">Patient’s own blood-derived plasma</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Sessions</td>
                  <td className="p-4">6–8 sessions typically required</td>
                  <td className="p-4">Often visible improvement in 1–2 sessions</td>
                </tr>
                <tr className="border-b bg-[#FCEBDE]/30">
                  <td className="p-4 font-medium">Cost</td>
                  <td className="p-4">More economical</td>
                  <td className="p-4">Generally higher cost</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Invasiveness</td>
                  <td className="p-4">Minimally invasive</td>
                  <td className="p-4">Slightly more invasive</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="md:text-lg text-center text-[#2B333C]/90 mt-8 max-w-3xl mx-auto">
            PRP uses natural growth factors from the patient’s blood, whereas Mesotherapy relies on externally prepared nutrient formulations.
          </p>
        </div>
      </section>

      {/* Number of Sessions Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-xl md:text-4xl font-bold text-[#9E4A47]">
            Number of Sessions Required
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Mesotherapy typically requires:

            * 6 to 8 sessions

            * Sessions spaced 2–4 weeks apart

            * Maintenance sessions depending on progression

            Consistency is essential for visible and sustained improvement.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "6 to 8 sessions", desc: "Initial treatment course" },
              { time: "2–4 weeks apart", desc: "Session spacing" },
              { time: "Ongoing", desc: "Maintenance as needed" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]"
              >
                <div className="md:text-3xl font-bold text-[#9E4A47] mb-3">
                  {item.time}
                </div>
                <p className="md:text-lg text-[#2B333C]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety and Considerations Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6 text-center">
            Safety and Considerations
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90 mb-6 text-center">
            Mesotherapy is generally considered safe when performed by trained professionals. However:
          </p>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "Mild redness or swelling may occur temporarily",
              "Results vary based on cause and stage of hair loss",
              "It is not a substitute for hair transplant in advanced baldness",
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
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90 mt-8 text-center">
            Consultation and proper diagnosis are essential before starting treatment.
          </p>
        </div>
      </section>

      {/* Is Mesotherapy Enough Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6 text-center">
            Is Mesotherapy Enough for Advanced Hair Loss?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90 text-center">
            For patients with:

            * Extensive bald patches

            * Grade 5–7 baldness

            * Significant donor depletion

            Mesotherapy alone may not be sufficient. In such cases, it may be combined with other therapies or considered as supportive treatment.
          </p>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Mesotherapy for Hair Loss in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            The cost of Mesotherapy for Hair Loss in Delhi and Gurgaon depends on:
            • Number of sessions required\
             • Type of nutrient solutions used\
             • Clinic expertise and location\
             • Combination with other therapies
            At Satya Skin & Hair Solutions, pricing is transparent and ethical.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book Your Mesotherapy Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            Mesotherapy for Hair Loss is a minimally invasive, scalp-focused treatment designed to improve follicle function and reduce hair thinning in early to moderate stages. It enhances scalp circulation, reduces inflammation, and supports hair growth without surgery.
            However, proper evaluation is critical to determine whether Mesotherapy, PRP, medication, or hair transplant is the most appropriate option based on individual hair loss patterns.
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
    </main>
  );
}