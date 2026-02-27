"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can a bad hair transplant be fixed?",
    a: "Yes, most failed or poor hair transplants can be improved with proper planning.",
  },
  {
    q: "Is repair hair transplant permanent?",
    a: "Yes. Transplanted hair grows permanently if donor zones are respected.",
  },
  {
    q: "How many times can hair transplant be repaired?",
    a: "It depends on donor availability and scalp condition. Every repair must be planned cautiously.",
  },
  {
    q: "Is repair hair transplant risky?",
    a: "It carries higher complexity, which is why surgeon experience is critical.",
  },
  {
    q: "Can body hair be used in repair cases?",
    a: "Yes. Beard or body hair is often used as a supportive donor in repair transplants.",
  },
  {
    q: "How long should I wait before repair surgery?",
    a: "Usually 9–12 months after the previous transplant, once growth stabilises.",
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

export default function RepairHairTransplant() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM REPAIR HAIR HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 
             w-[80%] h-[70%] 
             bg-no-repeat bg-contain bg-right opacity-90"
  style={{
    backgroundImage: `url('${assets.repairhairbanners}')`,
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-[#0E3A43]">
                Repair Hair Transplant
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold mt-2">
                Corrective Hair Transplant
              </p>
            </div>

            <p className="text-sm sm:text-sm text-gray-700 leading-relaxed max-w-[500px]">
              You should only get a hair transplant once, and it should boost your confidence. A lot of patients end up with hairlines that don't look natural, patchy density, visible scars, or damaged donor areas because of bad planning, aggressive grafting, or surgeons who aren't very experienced.
              A Repair Hair Transplant, which is also called a Corrective Hair Transplant, is a very specialized procedure that fixes hair transplant results that didn't work or weren't good enough.
              Dr. Shail Gupta, an expert in the field, oversees our Repair Hair Transplant services in Delhi and Gurgaon. We focus on donor rescue, natural aesthetics, and long-term sustainability.
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
              src={assets.repairhairbanners}
              alt="Repair Hair Transplant"
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
              Donor Rescue • Natural Aesthetics • Long-Term Sustainability • Expert Correction • No More Shortcuts • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Donor Rescue • Natural Aesthetics • Long-Term Sustainability • Expert Correction • No More Shortcuts • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Donor Rescue • Natural Aesthetics • Long-Term Sustainability • Expert Correction • No More Shortcuts • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Donor Rescue • Natural Aesthetics • Long-Term Sustainability • Expert Correction • No More Shortcuts • Satya Skin & Hair Solutions
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
              At Satya Skin & Hair Solutions we work with Dr. Shail Gupta to do
              Repair Hair Transplant. We do these Repair Hair Transplant in Delhi and Gurgaon. When we do Repair Hair Transplant we make sure to
              keep the person who donates hair safe. We also want the Repair Hair Transplant to look natural and last a long time. We do not take
              shortcuts when we do Repair Hair Transplant, at Satya Skin & Hair
              Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Repair Hair Transplant Section */}
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
              What Is a Repair Hair Transplant?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              A Repair Hair Transplant is a corrective procedure designed to improve or fix problems caused by a previous hair transplant, rather than starting from scratch.
              It may involve:\
               • Redesigning an unnatural hairline\
               • Improving patchy or low density\
               • Correcting wrong hair direction or angles\
               • Repairing donor over-harvesting\
               • Using FUT, FUE, or Body Hair Transplant strategically
              Repair cases require far more planning and skill than first-time transplants.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Patients commonly choose Repair Hair Transplant because they want to fix failed results, improve patchy density, correct unnatural hairlines, and achieve natural aesthetics with precise planning for the most sustainable
                outcome possible.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Redesigning an unnatural hairline",
                  "Improving patchy or low density",
                  "Correcting wrong hair direction or angles",
                  "Repairing donor over-harvesting",
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
                When performed correctly, Repair Hair Transplant delivers really natural results
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
                  src="https://www.youtube.com/embed/s5zEgam97KE?si=c2Lqccyno_b9X6J0"
                  title="Repair Hair Transplant Procedure"
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

      {/* Common Reasons Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Common Reasons Patients Need Repair Hair Transplant
          </h2>
          <p className="md:text-lg text-center text-[#2B333C]/90 mb-8 max-w-3xl mx-auto">
            High-search-volume concerns we see regularly include:
          </p>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "Failed hair transplant",
              "Patchy hair transplant results",
              "Unnatural hairline",
              "Pluggy or doll-like hair appearance",
              "Poor density after hair transplant",
              "Over-harvested donor area",
              "Scarring from previous surgery",
              "Hair transplant gone wrong",
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
            Most of these issues are preventable, but once they occur, repair must be handled carefully.
          </p>
        </div>
      </section>

      {/* Ideal Candidate Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Who Is an Ideal Candidate for Repair Hair Transplant?
          </h2>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "Are unhappy with previous hair transplant results",
              "Have visible scalp despite high graft numbers",
              "Have unnatural or low hairline design",
              "Have donor damage from aggressive FUE",
              "Have had multiple transplants already",
              "Were over-promised unrealistic results",
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
                <span className="font-medium">You may need Repair Hair Transplant Delhi & Gurgaon if you: {item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <p className="md:text-lg text-center text-[#2B333C]/90 mt-8 max-w-3xl mx-auto">
            Every repair case is unique and requires personalised strategy.
          </p>
        </div>
      </section>

      {/* Why More Complex Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6 text-center">
            Why Repair Hair Transplant Is More Complex
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90 mb-6 text-center">
            Repair hair transplant is not about adding more grafts blindly.
          </p>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "Limited donor reserves",
              "Existing scars and fibrosis",
              "Wrong hair angles",
              "Psychological distress of the patient",
              "Need for long-term donor preservation",
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
                <span className="font-medium">Key challenges include: {item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90 mt-8 text-center">
            This is why repair surgeries should only be done by surgeons experienced in advanced and corrective hair restoration.
          </p>
        </div>
      </section>

      {/* Procedures Section */}
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
              Repair Hair Transplant Procedure at Satya Skin & Hair Solutions
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions, patient safety and long-term
              outcomes come first. Here is what to expect during a Repair Hair Transplant in Delhi and Gurgaon.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Detailed Consultation & Analysis",
                text: "• Assessment of previous transplant\
 • Donor mapping and reserve estimation\
 • Understanding patient expectations\
 • Long-term planning",
              },
              {
                title: "Strategy Selection",
                text: "Depending on the case, we may use:\
 • FUT to preserve donor\
 • FUE selectively\
 • Body Hair Transplant (BHT) for support\
 • Hairline redesign or density redistribution",
              },
              {
                title: "Graft Extraction & Preparation",
                text: "• Extreme caution during extraction\
 • Preservation of remaining donor\
 • Grafts prepared under magnification",
              },
              {
                title: "Slit Creation & Implantation",
                text: "• Correction of hair angles and direction\
 • Natural density planning\
 • Surgeon-controlled, no-touch technique",
              },
              {
                title: "Post-Operative Care",
                text: "• Conservative medication approach\
 • No unnecessary PRP or add-ons\
 • Long-term follow-up and monitoring",
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

      {/* Recovery & Timeline */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-xl md:text-4xl font-bold text-[#9E4A47]">
            Recovery After Repair Hair Transplant
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            How long it takes to heal depends on how hard the repair is:
            • Mild swelling and redness for a few days\
             • The time it takes to heal may be a little longer than the first surgery.\
             • It takes time for scars and fibrosis to soften.
            Hair growth timeline:
            • 3–4 months: Initial growth\
             • 6–8 months: Visible improvement\
             • 9–12 months: Final corrected result
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "3–4 months", desc: "Initial growth" },
              { time: "6–8 months", desc: "Visible improvement" },
              { time: "9–12 months", desc: "Final corrected result" },
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
          <p className="text-lg italic text-[#828D9C] mt-8">
            Visiting Satya Skin & Hair Solutions on a regular basis is really
            helpful. You get to check if you are healing properly and if your
            hair is growing the way it should — this follow-up is very important
            for achieving the best results.
          </p>
        </div>
      </section>

      {/* Cost & Truth */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Repair Hair Transplant Cost in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            The price of Repair Hair Transplant in Delhi and Gurgaon depends on:
            • Severity of previous damage\
             • Number of grafts required\
             • Donor availability (scalp or body hair)\
             • Technique used (FUT / FUE / BHT / combination)\
             • Surgical complexity
            Repair transplants are usually harder than first-time procedures, but at Satya Skin & Hair Solutions, the prices are still clear and fair.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About Repair Hair Transplant
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Not every failed transplant can be made perfect.
            Repair hair transplant is about:\
             • Improvement, not miracles\
             • Preserving what is left\
             • Realistic outcomes
            Honest counselling is as important as surgical skill.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book Your Repair Hair Transplant Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you’re considering a Repair Hair Transplant in Delhi or Gurgaon, expert evaluation is the most important step to avoid further damage.
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