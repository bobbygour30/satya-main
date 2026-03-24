"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "At what age should I start wrinkle treatment?",
    a: "Preventive treatments can begin in late 20s or early 30s depending on skin condition.",
  },
  {
    q: "Is Botox safe?",
    a: "Yes, when administered by experienced dermatologists using proper dosage.",
  },
  {
    q: "Can wrinkles be removed permanently?",
    a: "Wrinkles can be significantly reduced, but aging continues naturally. Maintenance helps prolong results.",
  },
  {
    q: "Are anti-aging treatments painful?",
    a: "Most treatments involve minimal discomfort and require little downtime.",
  },
  {
    q: "Can I combine treatments?",
    a: "Yes, combination therapy often gives better and more natural results.",
  },
  {
    q: "Is there downtime?",
    a: "Most non-surgical treatments have little to no downtime.",
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

export default function WrinklesFineLinesTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency (though not used further in original)

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META (exactly like HomePage) ==================== */}
      <SEO
        title="Wrinkles & Fine Lines Treatment | Anti Aging Skin Specialist Gurgaon"
        description="Concerned about wrinkles and fine lines? Discover advanced anti-aging treatments in Delhi & Gurgaon for smoother, firmer, youthful-looking skin at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/skin/wrinkles-fine-lines"
        showSchema={false} // Only home page uses schema
      />
      {/* === PREMIUM HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.wrinkle || assets.banner}')`,
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
                Wrinkles & Fine Lines Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Best Wrinkle & Fine Lines Treatment in Delhi & Gurgaon
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Wrinkles and fine lines are among the earliest visible signs of aging. They often appear subtly — around the eyes, forehead, mouth, and neck — before gradually becoming deeper and more noticeable.
              While aging is natural, premature wrinkles caused by stress, sun exposure, pollution, and lifestyle factors can make the skin look tired and older than its actual age.
              At Satya Skin & Hair Solutions, we offer medically guided treatments for wrinkles and fine lines in Delhi & Gurgaon, focusing on collagen stimulation, skin tightening, and long-term skin health rather than temporary fixes.
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
              src={assets.wrinkle}
              alt="Wrinkles & Fine Lines Treatment"
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
              Collagen Stimulation • Skin Tightening • Natural Youthful Results • Expert Dermatologist Care • Personalized Anti-Aging • Long-Term Skin Health • Satya Excellence
            </span>
            <span className="px-12">
              Collagen Stimulation • Skin Tightening • Natural Youthful Results • Expert Dermatologist Care • Personalized Anti-Aging • Long-Term Skin Health • Satya Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Collagen Stimulation • Skin Tightening • Natural Youthful Results • Expert Dermatologist Care • Personalized Anti-Aging • Long-Term Skin Health • Satya Excellence
            </span>
            <span className="px-12">
              Collagen Stimulation • Skin Tightening • Natural Youthful Results • Expert Dermatologist Care • Personalized Anti-Aging • Long-Term Skin Health • Satya Excellence
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
              Ethical, patient-centric protocols — balancing safety, collagen stimulation, artistry, and lifelong skin health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === Why Do Wrinkles Develop + Types + Treatment Options + Video === */}
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
              Why Do Wrinkles & Fine Lines Develop?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, we focus on collagen stimulation, skin tightening, and long-term skin health rather than temporary fixes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Wrinkles form when: Collagen production declines • Skin loses elasticity • Repeated facial movements create expression lines • Sun damage breaks down skin fibers • Skin becomes dehydrated • Lifestyle stress accelerates aging.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                There are two major types: Dynamic Wrinkles (caused by repeated facial expressions like smile lines, forehead lines, crow’s feet) and Static Wrinkles (visible even when the face is at rest due to collagen loss and skin thinning). Understanding the type helps determine the right treatment.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Treatment Options for Wrinkles & Fine Lines — At Satya Skin & Hair Solutions, treatments are customized based on age, skin type, and wrinkle depth. Often, combination treatments provide the most natural and balanced results.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Botox Treatment – Relaxes dynamic wrinkles like forehead lines and crow’s feet",
                  "Dermal Fillers – Restore lost volume and soften deep lines",
                  "HIFU Skin Tightening – Non-surgical lifting and collagen stimulation",
                  "Microneedling / RF Microneedling – Boosts collagen and improves fine lines naturally",
                  "Chemical Peels – Improve superficial fine lines and skin texture",
                  "Laser Skin Rejuvenation – Stimulates deeper collagen remodeling",
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
                 src="https://www.youtube.com/embed/MWObPqvRRgk?si=LvQMMjZnOyN-CCxp"
                  title="Wrinkles & Fine Lines Treatment Procedure"
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

      {/* === When Should You Consider Treatment === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            When Should You Consider Wrinkle & Fine Lines Treatment?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Early crow’s feet around eyes",
              "Forehead lines that remain even at rest",
              "Smile lines becoming deeper",
              "Loss of facial volume",
              "Skin looking dull or sagging",
              "Makeup settling into fine lines",
            ].map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-base md:text-xl font-semibold text-[#2B333C]">
                  {rec}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center md:text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
            Early intervention often gives the most natural results. You may benefit if you notice any of the above signs.
          </p>
        </div>
      </section>

      {/* === Benefits Grid === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of Professional Wrinkle Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smoother skin texture",
                text: "Reduced appearance of fine lines and improved overall skin quality.",
              },
              {
                title: "Reduced appearance of fine lines",
                text: "Targeted treatment softens dynamic and static wrinkles effectively.",
              },
              {
                title: "Improved skin firmness",
                text: "Collagen stimulation restores elasticity and tightness.",
              },
              {
                title: "Natural, refreshed look",
                text: "Subtle results that restore a rested, youthful version of you.",
              },
              {
                title: "Preventive anti-aging effect",
                text: "Early treatment slows down further wrinkle formation.",
              },
              {
                title: "Boosted collagen production",
                text: "Long-term skin health through scientifically proven methods.",
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

      {/* === Consultation & Results Duration === */}
      <section className="py-7 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#9E4A47]">
            What to Expect from Wrinkle & Fine Lines Treatment
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                What to Expect During Consultation
              </h3>
              <p className="md:text-lg text-[#2B333C]/90">
                Your anti-aging consultation includes:
              </p>
              <ul className="mt-4 text-left list-disc pl-6 space-y-2 text-[#2B333C]/90">
                <li>Skin quality assessment</li>
                <li>Wrinkle depth evaluation</li>
                <li>Collagen loss grading</li>
                <li>Facial balance analysis</li>
                <li>Personalized treatment plan</li>
              </ul>
              <p className="mt-4 italic text-[#828D9C]">
                No single treatment suits everyone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                How Long Do Results Last?
              </h3>
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                Duration depends on treatment type:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { time: "Botox: 4–6 months", desc: "Relaxes dynamic wrinkles" },
                  { time: "Fillers: 8–18 months", desc: "Restores volume" },
                  { time: "HIFU: 12–18 months", desc: "Skin tightening & lifting" },
                  { time: "Microneedling", desc: "Gradual improvement over sessions" },
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
                Maintenance helps sustain results naturally • Most non-surgical treatments have little to no downtime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Cost & Why Choose Satya & Treatment Options === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Wrinkle & Fine Lines Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Cost depends on: Area being treated • Depth of wrinkles • Type of treatment selected • Number of sessions required
            At Satya Skin & Hair Solutions, treatment plans are customized, not package-driven.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Choose Satya Skin & Hair Solutions?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Dermatologist-led anti-aging treatments • Advanced FDA-approved technologies • Natural-looking results • Focus on skin health, not overcorrection • Personalized approach for Indian skin types
            Patients looking for effective wrinkle treatment in Delhi and fine lines treatment in Gurgaon trust our expertise for subtle, elegant outcomes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Our Customized Treatment Approach at Satya
          </h2>
          <div className="space-y-6 md:text-lg text-[#2B333C]/90 ">
            <p>
              <strong>Botox Treatment</strong> — Relaxes dynamic wrinkles like forehead lines and crow’s feet.
            </p>
            <p>
              <strong>Dermal Fillers</strong> — Restore lost volume and soften deep lines.
            </p>
            <p>
              <strong>HIFU Skin Tightening</strong> — Non-surgical lifting and collagen stimulation.
            </p>
            <p>
              <strong>Microneedling / RF Microneedling</strong> — Boosts collagen and improves fine lines naturally.
            </p>
            <p>
              <strong>Chemical Peels</strong> — Improve superficial fine lines and skin texture.
            </p>
            <p>
              <strong>Laser Skin Rejuvenation</strong> — Stimulates deeper collagen remodeling.
            </p>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Your Wrinkle & Fine Line Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you are noticing early aging signs and want a safe, non-surgical solution, expert evaluation is the first step.
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
      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </main>
  );
}