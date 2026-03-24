"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Can acne be cured permanently?",
    a: "Acne can be effectively controlled with proper medical management, though hormonal acne may require maintenance.",
  },
  {
    q: "Can acne scars be removed completely?",
    a: "Deep scars may not disappear completely but can be significantly improved with advanced treatments.",
  },
  {
    q: "Is laser treatment safe for acne scars?",
    a: "Yes, when performed by experienced dermatologists with correct settings.",
  },
  {
    q: "How early should acne be treated?",
    a: "Early treatment prevents long-term scarring and pigmentation.",
  },
  {
    q: "Do home remedies work for acne scars?",
    a: "Home remedies rarely improve deep scars effectively.",
  },
  {
    q: "Is acne treatment painful?",
    a: "Most treatments cause minimal discomfort and are well tolerated.",
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

export default function AcneScarTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META ==================== */}
      <SEO
        title="Acne & Acne Scar Treatment in Delhi | Best Dermatologist for Acne Scars Gurgaon"
        description="Struggling with acne or stubborn acne scars? Get advanced acne and acne scar treatment in Delhi & Gurgaon with dermatologist-led solutions at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/skin/acne-scar"
        showSchema={false}
      />

      {/* === PREMIUM HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.acnebanner || assets.banner}')`,
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
                Acne & Acne Scar Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Clear Skin Begins with the Right Acne & Acne Scar Treatment
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Acne is not just a teenage problem. It affects adults, professionals, and even people with otherwise healthy skin. From painful breakouts to long-lasting acne scars, the emotional and psychological impact can be significant.
              While over-the-counter creams may temporarily suppress pimples, untreated acne often leaves behind dark marks, pigmentation, and permanent scarring.
              At Satya Skin & Hair Solutions, we provide advanced Acne Treatment in Delhi and expert-led Acne Scar Treatment in Gurgaon, focusing on medical diagnosis, inflammation control, and long-term skin repair.
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
              src={assets.acnebanner}
              alt="Acne & Acne Scar Treatment"
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
              Active Acne Control • Scar Reduction • Pigmentation Fading • Collagen Repair • Root Cause Treatment • Clear Skin Forever • Satya Excellence
            </span>
            <span className="px-12">
              Active Acne Control • Scar Reduction • Pigmentation Fading • Collagen Repair • Root Cause Treatment • Clear Skin Forever • Satya Excellence
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Active Acne Control • Scar Reduction • Pigmentation Fading • Collagen Repair • Root Cause Treatment • Clear Skin Forever • Satya Excellence
            </span>
            <span className="px-12">
              Active Acne Control • Scar Reduction • Pigmentation Fading • Collagen Repair • Root Cause Treatment • Clear Skin Forever • Satya Excellence
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
              Ethical, patient-centric protocols — balancing safety, acne control, scar repair, and lifelong clear skin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === Why Acne + Types + Treatment Options + Video === */}
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
              Why Does Acne Occur?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Acne develops when sebaceous glands produce excess oil, pores get clogged with dead skin cells, bacteria multiply within blocked follicles, and hormonal changes trigger inflammation. Treating the root cause prevents recurrence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47]">
                Types of Acne We Manage
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Active Acne — Inflamed pimples, cystic acne, whiteheads, blackheads.",
                  "Hormonal Acne — Usually seen on jawline and chin area.",
                  "Adult Acne — Persistent acne beyond teenage years.",
                  "Back & Body Acne — Often resistant to routine skincare.",
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
                Types of Acne Scars
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Ice Pick Scars — Deep, narrow scars.",
                  "Boxcar Scars — Wider, depressed scars.",
                  "Rolling Scars — Wave-like uneven texture.",
                  "Post-Acne Pigmentation — Dark marks left after pimples heal.",
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
                Acne Treatment Options
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Medical Acne Therapy — Prescription medications to control oil and inflammation.",
                  "Chemical Peels for Acne — Reduce active acne and post-acne pigmentation.",
                  "Laser Acne Treatment — Helps reduce inflammation and bacterial activity.",
                  "Oral Treatment (When Required) — For severe hormonal or cystic acne cases.",
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
                Acne Scar Treatment Options
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Microneedling / RF Microneedling — Stimulates collagen to improve scar texture.",
                  "Fractional Laser Resurfacing — Targets deeper scars.",
                  "Subcision — Releases fibrous scar bands under the skin.",
                  "Chemical Reconstruction — Improves certain types of deep scars.",
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
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Often, combination therapy provides the best results.
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
                  src="https://www.youtube.com/embed/ujEC8aS54bQ?si=c9c5MQ7GDcudEgSA"
                  title="Acne & Acne Scar Treatment at Satya"
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
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of Professional Acne & Acne Scar Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Reduced active breakouts",
              "Smoother skin texture",
              "Faded dark spots",
              "Improved skin clarity",
              "Controlled oil production",
              "Long-term acne management",
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
            The goal is not just temporary relief, but sustained skin health.
          </p>
        </div>
      </section>

      {/* === How Long Does Treatment Take? === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-[#DFDFDD] text-center"
          >
            <h3 className="md:text-3xl font-semibold text-[#9E4A47] mb-6">
              How Long Does Treatment Take?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { time: "Active acne control", desc: "4–8 weeks" },
                { time: "Acne scar improvement", desc: "3–6 sessions" },
                { time: "Pigmentation fading", desc: "Gradual over sessions" },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-[#9E4A47] pl-6 text-left">
                  <div className="font-bold text-[#2B333C] text-lg">{item.time}</div>
                  <div className="text-[#9E4A47] text-2xl font-semibold mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 italic text-[#828D9C]">
              Consistency is key to visible transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === Cost & Why Choose === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Acne & Acne Scar Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Cost depends on: Severity of acne • Type of scars • Treatment selected • Number of sessions required
            At Satya Skin & Hair Solutions, plans are customized based on clinical assessment rather than pre-set packages.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Choose Satya Skin & Hair Solutions?
          </h2>
          <ul className="list-disc pl-6 space-y-3 md:text-lg text-[#2B333C]/90">
            <li>Dermatologist-supervised protocols</li>
            <li>Advanced acne scar technologies</li>
            <li>Safe for Indian skin types</li>
            <li>Long-term management approach</li>
            <li>Focus on preventing recurrence</li>
          </ul>
          <p className="mt-6 md:text-lg text-[#2B333C]/90">
            Patients looking for acne treatment in Delhi and acne scar treatment in Gurgaon trust our evidence-based and personalized approach.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Acne & Acne Scar Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you are dealing with persistent acne or acne scars, early intervention leads to better results.
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