"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function FractionalCO2Laser() {
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META ==================== */}
      <SEO
        title="Fractional CO2 Laser Treatment in Gurgaon | Acne Scars & Skin Rejuvenation"
        description="Revitalize your skin with Fractional CO2 Laser treatment at Satya Skin & Hair Solutions in Gurgaon. Safe collagen induction for acne scars, fine lines, open pores, and photo-damaged skin with minimal downtime."
        canonical="https://satyaskinhair.com/fractional-co2-laser"
        showSchema={false}
      />

      {/* === PREMIUM HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.co2LaserBanners || assets.banner}')`,
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
                Fractional CO2 Laser Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Revitalize Your Skin with Fractional CO2 Laser Treatment in Gurgaon
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Do you want fresher, glowing skin in Gurgaon? Visit Satya Skin &amp; Hair Solutions. We use Fractional CO2 Laser treatment - it's cutting-edge. This method can revive your complexion, leaving you radiant. Our high-tech procedures will transform your skin.
              Fractional carbon dioxide laser is one of the most loved lasers by dermatologists worldwide as it treats many skin issues effectively. Fractional laser is particularly useful for Indian skin as fully ablative lasers have a high risk of post inflammatory pigmentation. The fractional laser as the name suggests targets only a fraction of the skin of the treated area in a pixelated manner allowing faster recovery with minimal risk of adverse effects.
              This laser is used to give a controlled injury to the skin; the treated skin responds by generating more collagen and improved blood supply. This helps in treating age related skin concerns like fine lines, open pores and rough texture as well as all kinds of scars: acne scars, burn scars, post-traumatic scars, etc.
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
              src={assets.co2LaserBanners}
              alt="Fractional CO2 Laser Treatment"
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
              Collagen Induction • Scar Revision • Pore Tightening • Texture Improvement • Skin Rejuvenation • Minimal Downtime • Safe for Indian Skin • Satya Excellence
            </span>
            <span className="px-12">
              Collagen Induction • Scar Revision • Pore Tightening • Texture Improvement • Skin Rejuvenation • Minimal Downtime • Safe for Indian Skin • Satya Excellence
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Collagen Induction • Scar Revision • Pore Tightening • Texture Improvement • Skin Rejuvenation • Minimal Downtime • Safe for Indian Skin • Satya Excellence
            </span>
            <span className="px-12">
              Collagen Induction • Scar Revision • Pore Tightening • Texture Improvement • Skin Rejuvenation • Minimal Downtime • Safe for Indian Skin • Satya Excellence
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
              Ethical, patient-centric protocols — balancing safety, collagen induction, scar revision, and natural skin rejuvenation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is Fractional CO2 + Conditions + Video === */}
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
              What is Fractional CO2 Laser Treatment?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Fractional carbon dioxide laser is one of the most loved lasers by dermatologists worldwide as it treats many skin issues effectively. 
                Fractional laser is particularly useful for Indian skin as fully ablative lasers have a high risk of post inflammatory pigmentation. 
                The fractional laser as the name suggests targets only a fraction of the skin of the treated area in a pixelated manner allowing faster recovery with minimal risk of adverse effects.
                This laser is used to give a controlled injury to the skin; the treated skin responds by generating more collagen and improved blood supply. 
                This helps in treating age related skin concerns like fine lines, open pores and rough texture as well as all kinds of scars: acne scars, burn scars, post-traumatic scars, etc.
              </p>

              <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47]">
                Skin Conditions That Can Be Improved Using Fractional CO2 Laser
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Acne scars",
                  "Operation scars",
                  "Chickenpox scars",
                  "Injury scars",
                  "Stretch Marks",
                  "Enlarged pores",
                  "Fine lines",
                  "Rough skin texture",
                  "Skin rejuvenation of photo-damaged skin",
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
                  src="https://www.youtube.com/embed/8zZAlp6A2UQ?si=FPrJmopinhudWtJa"
                  title="Fractional CO2 Laser Treatment at Satya"
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

      {/* === Why Choose Satya === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Why Choose Satya Skin &amp; Hair Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Expertise",
                text: "Fractional CO2 Laser is done with skill and attention to detail by our dermatology professionals. Experienced technicians efficiently perform complex treatments. Our team's approach prioritises care and precision in every laser procedure.",
              },
              {
                title: "Advanced Technology",
                text: "We have the latest equipment. It uses new technology to give great results. There is not much pain or time off. We produce outcomes that fulfil people's goals in a streamlined manner.",
              },
              {
                title: "Personalised Care",
                text: "We make sure to always care for your skin's special needs. Each treatment is suited to your precise concerns. Your special goals guide our custom care plan for you. We never take a one-size-fits-all approach - just short, simple solutions tailored to make your skin look and feel its absolute best.",
              },
              {
                title: "Comfortable Environment",
                text: "Our facility stands as a peaceful oasis, crafted to embrace a sense of calm. Simple lines blend with warm hues, cultivating tranquillity. You'll find solace within these inviting spaces, a sanctuary for rejuvenation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#828D9C] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Experience the Difference at Satya Skin &amp; Hair Solutions
          </h2>
          <p className="md:text-xl opacity-90">
            Say hello to glowing skin! The Fractional CO2 Laser treatment at Satya Skin &amp; Hair Solutions in Gurgaon transforms your complexion. What's the magic? It rejuvenates and boosts confidence. Our skilled experts guide you through every step. So why wait? Book a consultation today for radiant skin that shines!
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-9 rounded-full font-bold md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
        </div>
      </section>
      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </main>
  );
}