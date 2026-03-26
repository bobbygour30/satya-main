"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Is ClearLift Laser safe for all skin types?",
    a: "Yes, it is generally safe for most skin types when performed under professional supervision.",
  },
  {
    q: "When will I see results?",
    a: "Gradual improvement is visible after a few sessions as collagen production increases.",
  },
  {
    q: "Is there downtime?",
    a: "No, ClearLift has minimal to no downtime.",
  },
  {
    q: "Can it remove wrinkles completely?",
    a: "It improves fine lines and wrinkles but may not completely eliminate deep wrinkles.",
  },
  {
    q: "How long does each session take?",
    a: "Each session typically takes 20–30 minutes.",
  },
  {
    q: "Can I combine ClearLift with other treatments?",
    a: "Yes, it can be combined with PRP, peels, or other therapies for better results.",
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

export default function ClearLiftLaser() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency (though not used further in original)

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META (exactly like HomePage) ==================== */}
      <SEO
        title="ClearLift Laser Treatment in Delhi | Non-Ablative Skin Rejuvenation Gurgaon"
        description="Get youthful, glowing skin with ClearLift Laser Treatment in Delhi & Gurgaon. Non-ablative laser for wrinkles, pigmentation, and skin rejuvenation."
        canonical="https://satyaskinhair.com/skin/clearlift-laser"
        showSchema={false} // Only home page uses schema
      />
      {/* === PREMIUM CLEARLIFT LASER HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.clearlift || assets.banner}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full  grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                ClearLift Laser Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Best ClearLift Laser Treatment in Delhi & Gurgaon
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              When it comes to improving skin quality without aggressive procedures, ClearLift Laser Treatment stands out as a modern, non-invasive solution. Designed for people who want visible skin improvement without downtime, this treatment uses advanced laser technology to rejuvenate the skin from within. At Satya Skin & Hair Solutions, we offer customized ClearLift Laser Treatment in Delhi and Gurgaon, focusing on safe, gradual, and natural-looking skin enhancement.
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

          {/* Mobile Image (Zoomed) */}
          <div className="lg:hidden mt-8 overflow-hidden rounded-xl">
            <img
              src={assets.clearlift}
              alt="ClearLift Laser Treatment"
              className="
      w-full 
      h-[300px] sm:h-[350px]
      object-cover
      scale-110
    "
            />
          </div>

          {/* Desktop Empty Column (keeps layout same) */}
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
              Non-Ablative Rejuvenation • No Downtime • Collagen Stimulation • Lunchtime Laser • Natural Glow • Gentle Yet Effective • Satya Excellence
            </span>
            <span className="px-12">
              Non-Ablative Rejuvenation • No Downtime • Collagen Stimulation • Lunchtime Laser • Natural Glow • Gentle Yet Effective • Satya Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Non-Ablative Rejuvenation • No Downtime • Collagen Stimulation • Lunchtime Laser • Natural Glow • Gentle Yet Effective • Satya Excellence
            </span>
            <span className="px-12">
              Non-Ablative Rejuvenation • No Downtime • Collagen Stimulation • Lunchtime Laser • Natural Glow • Gentle Yet Effective • Satya Excellence
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
              Ethical, patient-centric protocols — balancing safety, precision, artistry, and long-term skin health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is ClearLift Laser + How it Works + Video === */}
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
              What is ClearLift Laser Treatment?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, ClearLift Laser Treatment is performed under expert dermatologist supervision — emphasizing gentle, non-ablative skin rejuvenation with zero downtime and natural-looking results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                ClearLift™, developed by Alma Lasers, is a fractional, non-ablative laser treatment that targets deeper layers of the skin without damaging the surface.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                This means no peeling or skin damage, minimal discomfort, and little to no downtime. It is often called a “lunchtime laser” because you can resume daily activities immediately after treatment.
              </p>

              <div className="bg-white/70 p-6 rounded-2xl border border-[#DFDFDD]">
                <p className="font-semibold text-[#9E4A47] mb-3">How Does ClearLift Laser Work?</p>
                <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  ClearLift uses controlled laser energy to penetrate the deeper layers of the skin, stimulate collagen production, improve blood circulation, and trigger skin renewal. Since the surface skin remains intact, the treatment is gentle yet effective.
                </p>
              </div>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "No peeling or skin damage",
                  "Minimal discomfort",
                  "Little to no downtime",
                  "Safe for most skin types",
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
                  src="https://www.youtube.com/embed/rWqn50qQeKU?si=1BzJadtdCKt6zCD_" // Replace with actual ClearLift video link
                  title="ClearLift Laser Treatment Procedure"
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

      {/* === Skin Concerns Grid === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Skin Concerns Treated with ClearLift
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Fine lines and wrinkles",
              "Uneven skin tone",
              "Pigmentation",
              "Redness and vascular appearance",
              "Mild skin laxity",
              "Dull and tired skin",
              "Early signs of aging",
            ].map((concern, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-base md:text-xl font-semibold text-[#2B333C]">
                  {concern}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Benefits Grid === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of ClearLift Laser Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Non-invasive and non-ablative",
                text: "No damage to the skin surface.",
              },
              {
                title: "Minimal discomfort",
                text: "Comfortable lunchtime procedure.",
              },
              {
                title: "No downtime",
                text: "Return to work or daily activities immediately.",
              },
              {
                title: "Safe for most skin types",
                text: "Including Indian skin tones.",
              },
              {
                title: "Improves skin texture and tone",
                text: "Smoother, brighter, even complexion.",
              },
              {
                title: "Stimulates collagen production",
                text: "Natural, gradual rejuvenation.",
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
                <p className="text-[#828D9C] leading-relaxed ">{adv.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Procedure & Recovery === */}
      <section className="py-7 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#9E4A47]">
            What Happens During the Procedure?
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                Procedure time: 20–30 minutes
              </p>
              <div className="space-y-6 md:text-lg text-[#2B333C]/90">
                <p>
                  <strong>Skin is cleansed</strong> — Thorough cleansing to prepare the skin.
                </p>
                <p>
                  <strong>Protective eyewear is provided</strong> — Complete eye protection during treatment.
                </p>
                <p>
                  <strong>Laser pulses are delivered to targeted areas</strong> — Controlled energy reaches deeper layers.
                </p>
                <p>
                  <strong>Mild warming sensation may be felt</strong> — Comfortable and quick session.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                What to Expect After Treatment?
              </h3>
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                Recovery after ClearLift Laser Treatment is predictable:
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { time: "Immediate", desc: "No significant redness or peeling" },
                  { time: "Immediate", desc: "Return to normal routine" },
                  {
                    time: "Over sessions",
                    desc: "Gradual improvement as collagen builds",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-[#FCEBDE]/40 p-6 rounded-xl">
                    <div className="md:text-3xl font-bold text-[#9E4A47] mb-2">
                      {item.time}
                    </div>
                    <p className="md:text-lg text-[#2B333C]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg text-[#828D9C] italic">
                Results improve as collagen builds over time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Sessions + Ideal Candidate + Safety + Cost + Why Satya === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            How Many Sessions Are Required?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            3–5 sessions for optimal results • Sessions spaced 2–4 weeks apart • Maintenance sessions recommended
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Ideal Candidate */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
            <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
              Who Is an Ideal Candidate?
            </h2>
            <p className="md:text-lg text-[#2B333C]/90">
              ClearLift is suitable for:<br />
              • Individuals with early signs of aging<br />
              • People with pigmentation or uneven tone<br />
              • Those wanting non-invasive treatment<br />
              • Busy individuals avoiding downtime
            </p>
          </div>

          {/* Safety + Cost */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
              <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
                Is ClearLift Laser Painful?
              </h2>
              <p className="md:text-lg text-[#2B333C]/90">
                ClearLift is designed to be comfortable. Most patients feel only mild warmth or tingling during the procedure.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
              <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
                Is ClearLift Laser Safe?
              </h2>
              <p className="md:text-lg text-[#2B333C]/90">
                Yes, when performed under dermatologist supervision. It is:<br />
                • Non-ablative<br />
                • Controlled and precise<br />
                • Suitable for Indian skin types
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
              <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
                Cost of ClearLift Laser Treatment in Delhi & Gurgaon
              </h2>
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Cost depends on:<br />
                • Area treated<br />
                • Number of sessions<br />
                • Skin condition<br /><br />
                Consultation helps determine the exact plan.
              </p>
            </div>
          </div>
        </div>

        {/* Why Satya */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Choose Satya Skin & Hair Solutions?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            • Dermatologist-led treatments<br />
            • Advanced Alma laser technology<br />
            • Customized protocols<br />
            • Safe for Indian skin<br />
            • Focus on long-term skin health<br /><br />
            Patients searching for ClearLift Laser Treatment in Delhi and Gurgaon benefit from expert-guided care and realistic results.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book ClearLift Laser Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you want smoother, brighter skin without downtime, ClearLift Laser Treatment is a reliable option.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-9 rounded-full font-bold md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
        </div>
      </section>

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
      <ConsultationPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </main>
  );
}