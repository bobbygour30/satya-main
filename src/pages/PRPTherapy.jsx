"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "What is PRP Rejuvenation Therapy and how does it work?",
    a: "PRP Therapy uses your own blood to extract platelets rich in growth factors, which are then applied or injected into the skin to stimulate collagen, repair tissue, and improve skin quality.",
  },
  {
    q: "Who should consider PRP treatment for facial rejuvenation?",
    a: "Individuals with dull skin, fine lines, acne scars, or uneven texture who want a natural, non-surgical solution can consider PRP treatment.",
  },
  {
    q: "What are the key benefits of PRP for facial rejuvenation?",
    a: "PRP improves skin texture, boosts collagen, enhances glow, reduces wrinkles, and supports overall skin health naturally.",
  },
  {
    q: "How does PRP treat the under-eye area, especially tear troughs and dark circles?",
    a: "PRP improves blood circulation and collagen in the under-eye area, reducing dark circles, improving skin thickness, and minimizing hollowness.",
  },
  {
    q: "What techniques are used for PRP injections in the under-eye area?",
    a: "Fine needle injections or micro-needling techniques are used to deliver PRP precisely into delicate under-eye skin.",
  },
  {
    q: "How long do results of PRP treatment for the under-eye area last?",
    a: "Results can last several months, depending on skin condition and maintenance sessions.",
  },
  {
    q: "How does PRP help with acne scar treatment and open pores?",
    a: "PRP stimulates collagen production, which helps improve acne scars and tighten pores over time.",
  },
  {
    q: "What are the key benefits of PRP treatment for acne scars and open pores?",
    a: "It improves skin texture, reduces scar depth, tightens pores, and enhances overall skin appearance.",
  },
  {
    q: "How many sessions of PRP treatment are typically required for acne scar treatment and open pores?",
    a: "Usually, 3–4 sessions are recommended for noticeable improvement, depending on the severity.",
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

export default function PRPTherapy() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency (though not used further in original)

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META (exactly like HomePage) ==================== */}
      <SEO
        title="PRP Therapy in Delhi | Skin PRP Treatment & Platelet-Rich Plasma Facial Gurgaon"
        description="Get natural skin rejuvenation with PRP Therapy in Delhi & Gurgaon. Platelet-rich plasma treatment for glowing skin, acne scars, and under-eye concerns."
        canonical="https://satyaskinhair.com/skin/prp-therapy"
        showSchema={false} // Only home page uses schema
      />
      {/* === PREMIUM PRP THERAPY HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.prpTreatment || assets.banner}')`,
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
                PRP Therapy
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Best PRP Therapy & Skin PRP Treatment in Delhi & Gurgaon
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Modern skin treatments are shifting toward regenerative solutions that work with your body rather than against it. PRP Therapy (Platelet-Rich Plasma Treatment), often referred to as the Vampire Facelift, is one such advanced treatment that uses your body’s natural healing ability to rejuvenate skin. At Satya Skin & Hair Solutions, we offer customized Skin PRP Treatment in Delhi and Gurgaon, designed to improve skin quality, texture, and overall radiance.
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
              Book Consultation →
            </motion.button>
          </div>

          {/* Mobile Image (Zoomed) */}
          <div className="lg:hidden mt-8 overflow-hidden rounded-xl">
            <img
              src={assets.prpTreatment}
              alt="PRP Therapy"
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
              Natural Rejuvenation • Collagen Boost • Acne Scar Reduction • Under-Eye Brightening • Glow Enhancement • Vampire Facial • Satya Excellence
            </span>
            <span className="px-12">
              Natural Rejuvenation • Collagen Boost • Acne Scar Reduction • Under-Eye Brightening • Glow Enhancement • Vampire Facial • Satya Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Natural Rejuvenation • Collagen Boost • Acne Scar Reduction • Under-Eye Brightening • Glow Enhancement • Vampire Facial • Satya Excellence
            </span>
            <span className="px-12">
              Natural Rejuvenation • Collagen Boost • Acne Scar Reduction • Under-Eye Brightening • Glow Enhancement • Vampire Facial • Satya Excellence
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

      {/* === What is PRP + How it Works + Video === */}
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
              What is PRP Therapy?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, PRP Therapy (Platelet-Rich Plasma Treatment) is performed under expert dermatologist supervision — emphasizing natural skin rejuvenation using your body’s own healing power with minimal downtime.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                PRP Therapy involves drawing a small amount of your blood, processing it to concentrate platelets, and applying or injecting this platelet-rich plasma into the skin.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                The platelet-rich plasma procedure works by releasing growth factors, stimulating collagen and elastin, enhancing skin repair, and improving blood circulation. It is a natural and minimally invasive treatment for skin rejuvenation.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Releasing growth factors",
                  "Stimulating collagen and elastin",
                  "Enhancing skin repair",
                  "Improving blood circulation",
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
                  src="https://www.youtube.com/embed/nxBziKe-usk?si=JAXE-nvEFIuqIHqT"
                  title="PRP Therapy Procedure"
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
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of Skin PRP
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Boosts collagen production",
                text: "Naturally restores skin firmness and elasticity.",
              },
              {
                title: "Improves skin texture and tone",
                text: "Smoother, more even complexion.",
              },
              {
                title: "Reduces fine lines and wrinkles",
                text: "Softens early signs of aging.",
              },
              {
                title: "Enhances skin glow",
                text: "Gives a healthy, radiant appearance.",
              },
              {
                title: "Improves acne scars",
                text: "Helps fade scars and smooth texture.",
              },
              {
                title: "Reduces under-eye dark circles",
                text: "Brightens and rejuvenates the delicate eye area.",
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

      {/* === Side Effects & Complications === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#DFDFDD]">
            <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
              Complications of Skin PRP
            </h2>
            <p className="md:text-lg text-[#2B333C]/90 mb-4">
              PRP is generally safe, but possible complications include:
            </p>
            <ul className="space-y-3 text-[#2B333C]/90">
              <li className="flex items-start gap-3">• Mild swelling</li>
              <li className="flex items-start gap-3">• Temporary redness</li>
              <li className="flex items-start gap-3">• Bruising at injection site</li>
              <li className="flex items-start gap-3">• Infection (rare, if not done properly)</li>
            </ul>
            <p className="mt-6 italic text-[#828D9C]">These risks are minimal when performed by trained professionals.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#DFDFDD]">
            <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
              Side Effects of Skin PRP
            </h2>
            <p className="md:text-lg text-[#2B333C]/90 mb-4">
              Common temporary side effects:
            </p>
            <ul className="space-y-3 text-[#2B333C]/90">
              <li className="flex items-start gap-3">• Redness for 1–2 days</li>
              <li className="flex items-start gap-3">• Mild tenderness</li>
              <li className="flex items-start gap-3">• Slight swelling</li>
            </ul>
            <p className="mt-6 italic text-[#828D9C]">These effects usually resolve quickly without intervention.</p>
          </div>
        </div>
      </section>

      {/* === Types of PRP + Procedure === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Types of Skin PRP in Gurgaon
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "PRP for Facial Rejuvenation",
                text: "Improves skin glow, tightness, and overall texture by boosting collagen production.",
              },
              {
                title: "PRP for Under-Eye Area",
                text: "Targets dark circles, tear troughs, and under-eye hollowness for a refreshed look.",
              },
              {
                title: "PRP for Acne Scars",
                text: "Helps reduce acne scars and improve skin smoothness over multiple sessions.",
              },
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                  {type.title}
                </h3>
                <p className="text-[#828D9C] leading-relaxed">{type.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Procedure + Recovery === */}
      <section className="py-7 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#9E4A47]">
            What Happens During the PRP Treatment?
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                Procedure time: 45–60 minutes
              </p>
              <div className="space-y-6 md:text-lg text-[#2B333C]/90">
                <p>
                  <strong>Blood sample is collected</strong> — A small amount of your blood is drawn.
                </p>
                <p>
                  <strong>Platelets are separated using centrifuge</strong> — PRP is concentrated in a sterile lab process.
                </p>
                <p>
                  <strong>Skin is prepared with microneedling or injection</strong> — Target areas are prepared for optimal absorption.
                </p>
                <p>
                  <strong>PRP is applied or injected into target areas</strong> — Growth factors go exactly where needed.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                Recovery & Results
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { time: "Immediate", desc: "Minimal downtime" },
                  { time: "1–2 days", desc: "Redness subsides" },
                  {
                    time: "Weeks to months",
                    desc: "Visible glow & collagen improvement",
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
            </div>
          </div>
        </div>
      </section>

      {/* === Eligibility + Why Satya + Cost === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Eligibility for Treatment
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            PRP therapy is suitable for individuals who:<br />
            • Have dull or aging skin<br />
            • Experience fine lines or wrinkles<br />
            • Have acne scars or uneven texture<br />
            • Want natural skin rejuvenation<br />
            • Prefer non-surgical treatments<br /><br />
            A consultation is required to assess suitability.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Choose Satya Skin & Hair Solutions?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            • Dermatologist-supervised PRP Therapy<br />
            • Advanced platelet processing techniques<br />
            • Customized treatment plans<br />
            • Safe and hygienic procedures<br />
            • Focus on natural results
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Book PRP Therapy in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            If you want natural skin rejuvenation and long-term skin improvement, PRP Therapy can be an effective solution.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book PRP Therapy in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you want natural skin rejuvenation and long-term skin improvement, PRP Therapy can be an effective solution.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-9 rounded-full font-bold md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your Consultation Today
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