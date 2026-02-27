"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is a Vampire Facelift?",
    a: "It is a PRP-based facial treatment that stimulates collagen and rejuvenates skin naturally.",
  },
  {
    q: "Is Vampire Facelift safe?",
    a: "Yes, when performed under medical supervision using sterile techniques.",
  },
  {
    q: "When will I see results?",
    a: "Initial glow appears within weeks; collagen remodeling continues for months.",
  },
  {
    q: "Is it better than Botox?",
    a: "It works differently. Botox relaxes muscles; PRP improves skin quality.",
  },
  {
    q: "Can it treat acne scars?",
    a: "Yes, especially when combined with microneedling or MNRF.",
  },
  {
    q: "Is there downtime?",
    a: "Minimal downtime with mild redness for 1–2 days.",
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

export default function VampireFacelift() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM VAMPIRE FACELIFT HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.vampirebanners}')`,
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
              <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-[#0E3A43]">
                Vampire Facelift Treatment: Natural PRP Skin Rejuvenation for Youthful Glow
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                Natural Collagen Stimulation
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Aging, dullness, fine lines, acne scars, and skin laxity often make the face look tired and uneven. While fillers and Botox address specific concerns, many individuals seek a more natural regenerative approach. Vampire Facelift Treatment, also known as PRP Facial Rejuvenation, uses your body’s own platelets to stimulate collagen production and improve skin quality from within. At Satya Skin & Hair Solutions, we offer medically supervised Vampire Facelift Treatment in Delhi and Gurgaon, designed to enhance skin texture, elasticity, and long-term glow.
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
              src={assets.vampirebanners}
              alt="Vampire Facelift Treatment"
              className="
      w-full 
      h-[300px] sm:h-[350px]
      object-cover
      scale-100
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
              Natural Rejuvenation • Minimal Downtime • Collagen Boost • Safe PRP • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Natural Rejuvenation • Minimal Downtime • Collagen Boost • Safe PRP • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Natural Rejuvenation • Minimal Downtime • Collagen Boost • Safe PRP • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Natural Rejuvenation • Minimal Downtime • Collagen Boost • Safe PRP • Satya Skin & Hair Solutions
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
              At Satya Skin & Hair Solutions, our expert doctors specialize in
              advanced Vampire Facelift Treatments across Gurugram and Delhi NCR. We
              ensure natural rejuvenation, collagen stimulation, and long-lasting glow without shortcuts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Vampire Facelift Section */}
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
              What Is a Vampire Facelift?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              A Vampire Facelift is another name for PRP (Platelet-Rich Plasma) facial therapy. PRP is derived from your own blood. The treatment works by: Drawing a small blood sample, Processing it to isolate platelet-rich plasma, Creating controlled micro-injuries using tools like dermaroller, MNRF, fractional laser, or derma pen, Applying or injecting PRP into the treated areas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                The platelets release growth factors that: Speed up healing, Stimulate collagen and elastin, Improve skin firmness, Enhance glow and texture. Because it uses natural biological processes, results look gradual and natural. High Search Volume Keywords Naturally Covered: Vampire facelift treatment in Delhi, PRP facial treatment in Gurgaon, PRP skin rejuvenation, Platelet rich plasma facial, PRP for anti-aging, Natural facelift treatment, PRP facial cost in Delhi, Collagen stimulation facial.
              </p>

              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                The procedure is based on the principle of controlled skin injury followed by regenerative healing. Step 1: Controlled micro-injury stimulates repair response. Step 2: PRP growth factors accelerate healing. Step 3: Collagen and elastin production increases. Step 4: Skin becomes firmer, smoother, and brighter over time. The treatment encourages your skin to repair itself rather than artificially filling or freezing it.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Natural collagen stimulation",
                  "Improved skin firmness",
                  "Enhanced glow and texture",
                  "Minimal downtime",
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
                When performed correctly, Vampire Facelift delivers really natural results
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
                  src="https://www.youtube.com/embed/VIDEO_ID_VAMPIRE_FACELIFT"
                  title="Vampire Facelift Procedure"
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

      {/* Advantages Grid */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of Vampire Facelift Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Uses Your Own Blood (Biocompatible)",
                text: "PRP derived from your blood ensures no allergic reactions or foreign substances.",
              },
              {
                title: "Natural Collagen Stimulation",
                text: "Growth factors promote your skin's own repair and rejuvenation processes.",
              },
              {
                title: "Non-Surgical",
                text: "Achieve youthful skin without incisions or anesthesia.",
              },
              {
                title: "Minimal Downtime",
                text: "Back to routine in 1–2 days with only mild redness.",
              },
              {
                title: "Improves Skin Tone and Texture",
                text: "Enhances firmness, glow, and overall skin quality gradually.",
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
              Procedure: What to Expect
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions, patient safety and long-term
              outcomes come first. Here is what to expect during a Vampire Facelift in Gurugram.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Consultation",
                text: "Skin assessment, Medical history review, Treatment suitability discussion.",
              },
              {
                title: "Blood Collection",
                text: "A small sample of blood is drawn.",
              },
              {
                title: "PRP Preparation",
                text: "Blood is centrifuged to separate platelet-rich plasma.",
              },
              {
                title: "Skin Preparation",
                text: "Controlled micro-injury using dermaroller, MNRF, fractional laser, or derma pen.",
              },
              {
                title: "PRP Application",
                text: "PRP is applied or injected into the treated areas. Total session time: 45–60 minutes.",
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
            How Many Sessions Are Needed? Downtime & Recovery
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Mild concerns: 1–2 sessions. Moderate aging signs: 3 sessions. Maintenance: Once every 6–12 months. Results improve gradually over 3–6 months. After treatment: Mild redness for 1–2 days, Slight swelling, Minimal peeling. Most patients resume routine activities within 24–48 hours.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "1–3 Sessions", desc: "Initial treatment course" },
              { time: "3–6 Months", desc: "Gradual collagen improvement" },
              { time: "6–12 Months", desc: "Results duration" },
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
            skin is improving the way it should — this follow-up is very important
            for achieving the best results.
          </p>
        </div>
      </section>

      {/* Cost & Truth */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Vampire Facelift Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Cost depends on: Combination techniques used, Number of sessions, Area treated, Skin condition. Personalized consultation provides accurate pricing.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About Vampire Facelift Treatment
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Vampire Facelift is not suitable for severe laxity or deep wrinkles requiring surgery. Results vary by individual and are gradual, not immediate. Always combine with proper skincare; without it, benefits may diminish. Medically supervised treatment is essential to avoid risks like infection.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book Vampire Facelift Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you want natural skin rejuvenation without surgery, PRP-based Vampire Facelift may be the right option.
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