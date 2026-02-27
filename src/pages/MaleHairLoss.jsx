"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import assets from "../assets/assets";
const faqs = [
  {
                q: "Can male hair loss be stopped permanently?",
                a: "Early intervention can significantly slow or stabilize it. Genetic baldness often requires ongoing management.",
              },
              {
                q: "Is hair transplant permanent?",
                a: "Yes. Hair from safe donor zones grows permanently in the transplanted area.",
              },
              {
                q: "At what age should I start treatment?",
                a: "As soon as early thinning is noticed — waiting often limits options and outcomes.",
              },
              {
                q: "Is PRP enough for advanced baldness?",
                a: "No. PRP supports early thinning but cannot replace transplant in advanced cases.",
              },
              {
                q: "How many grafts are required for men?",
                a: "Depends on stage — typically 2000–4500 for moderate cases.",
              },
              {
                q: "Can stress cause male hair loss?",
                a: "Yes. Stress-related shedding is temporary but can accelerate underlying genetic loss.",
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

export default function MaleHairLoss() {
  const [showPopup, setShowPopup] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM MALE HAIR LOSS HERO BANNER === */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Positioned Right */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.malehairlossbanners}')`, // assume malehairlossbanner or fallback
          }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-8">
          

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#0E3A43]">
              Male Hair Loss
              <br />
              <h1 className="text-[#9E4A47] text-xl sm:text-2xl md:text-2xl">
                Understand Early • Treat Correctly • Restore Naturally
              </h1>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              Thinning temples, crown visibility, receding hairline — male pattern baldness progresses silently until it's advanced. Waiting too long limits options. At Satya Skin & Hair Solutions in Delhi & Gurgaon, we focus on preservation, prevention, and permanent restoration when needed.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
              className="bg-[#9E4A47] hover:bg-[#84332F] text-white py-4 px-10 rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
            >
              Book FREE Consultation →
            </motion.button>
          </div>

          {/* RIGHT SIDE EMPTY (image fills this visually) */}
          <div />
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
              Early Intervention • DHT Management • Donor Preservation • Permanent Restoration • Confidence Recovery • Satya Ethical Care
            </span>
            <span className="px-12">
              Early Intervention • DHT Management • Donor Preservation • Permanent Restoration • Confidence Recovery • Satya Ethical Care
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Early Intervention • DHT Management • Donor Preservation • Permanent Restoration • Confidence Recovery • Satya Ethical Care
            </span>
            <span className="px-12">
              Early Intervention • DHT Management • Donor Preservation • Permanent Restoration • Confidence Recovery • Satya Ethical Care
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
              Science-based, conservative approach — preserving donor, preventing progression, and restoring naturally when surgery is the right step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What Is Male Hair Loss + Stages === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#9E4A47]">
              What Is Male Hair Loss?
            </h2>
            <p className="text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Male Pattern Baldness (Androgenetic Alopecia) is a genetic, hormone-driven condition where DHT-sensitive follicles miniaturize over time, causing progressive thinning, receding hairline, and crown baldness. Early action preserves more hair and improves long-term outcomes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                It affects confidence, self-image, and professional presence — but waiting too long often means fewer options.
              </p>

              <h3 className="text-2xl font-bold text-[#9E4A47]">Stages of Male Pattern Baldness</h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Stage 1–2: Early temple recession (often ignored)",
                  "Stage 3: Noticeable M-shaped hairline",
                  "Stage 4–5: Crown thinning + visible bald spot",
                  "Stage 6–7: Advanced connected bald areas",
                ].map((stage, i) => (
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
                    <span className="font-medium">{stage}</span>
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
                  src="https://www.youtube.com/embed/F_XXj5aPYKQ" // Replace with male pattern baldness explanation video
                  title="Understanding Male Pattern Hair Loss"
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

      {/* === Causes + Early Warning Signs === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Causes */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Why Do Men Experience Hair Loss?
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Genetic predisposition (family history)</li>
                  <li>DHT sensitivity (follicle miniaturization)</li>
                  <li>Chronic stress & lifestyle factors</li>
                  <li>Nutritional deficiencies (iron, vitamin D, protein)</li>
                  <li>Medical conditions (thyroid, hormonal imbalance)</li>
                  <li>Post-illness temporary shedding</li>
                </ul>
              </div>
            </div>

            {/* Early Warning Signs */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Early Warning Signs You Should Not Ignore
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Receding temples / shifting hairline</li>
                  <li>Thinning crown / visible scalp</li>
                  <li>Increased fall during shower</li>
                  <li>Decreased overall volume</li>
                  <li>Difficulty styling hair</li>
                </ul>
                <p className="italic text-[#9E4A47]">
                  Acting early preserves more hair and reduces need for aggressive surgery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Treatment Options === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Comprehensive Treatment Options for Male Hair Loss
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Medical Hair Loss Treatment",
                text: "For early thinning: DHT blockers, topical therapies, nutritional support, hormonal evaluation — goal is to slow progression & preserve existing hair.",
              },
              {
                title: "PRP Therapy",
                text: "Stimulates weak follicles, improves thickness — ideal for early-to-moderate cases, multiple sessions required.",
              },
              {
                title: "GFC Therapy",
                text: "Advanced growth factor concentrate — regenerative support for density improvement in select cases.",
              },
              {
                title: "Hair Transplant Surgery",
                text: "Permanent restoration for moderate-advanced baldness: FUE, FUT, Long Hair, MHT, Body Hair (repair cases).",
              },
            ].map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-[#9E4A47] mb-4">
                  {opt.title}
                </h3>
                <p className="text-[#828D9C] leading-relaxed">{opt.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
            Treatment is stage-specific: medical for early, surgical for defined baldness — always with donor preservation first.
          </p>
        </div>
      </section>

      {/* === When to Consider Transplant + Donor Preservation === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* When to Consider Transplant */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                When Should You Consider Hair Transplant?
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Hair loss stabilized</li>
                  <li>Clearly defined bald areas</li>
                  <li>Medical therapy insufficient alone</li>
                  <li>Strong donor area available</li>
                  <li>Realistic expectations</li>
                </ul>
                <p className="italic text-[#9E4A47]">
                  Surgery is a strategic, not first, step.
                </p>
              </div>
            </div>

            {/* Donor Preservation */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                The Importance of Donor Preservation
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <p className="text-lg text-[#2B333C]/90">
                  Aggressive harvesting leads to:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Over-harvested donor</li>
                  <li>Patchy scalp appearance</li>
                  <li>Limited future options</li>
                  <li>Need for repair surgeries</li>
                </ul>
                <p className="italic text-[#9E4A47]">
                  At Satya, donor safety always comes before graft numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Psychological Impact + Consultation Process === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Psychological Impact */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Psychological Impact of Male Hair Loss
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Reduced confidence & self-image</li>
                  <li>Social withdrawal</li>
                  <li>Anxiety in professional settings</li>
                  <li>Avoiding photos / mirrors</li>
                  <li>Emotional stress</li>
                </ul>
                <p className="italic text-[#828D9C]">
                  Early treatment restores not just hair — but well-being.
                </p>
              </div>
            </div>

            {/* Consultation Process */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                What Happens During Consultation?
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Scalp & donor density examination</li>
                  <li>Baldness grading & miniaturization analysis</li>
                  <li>Long-term progression prediction</li>
                  <li>Customized 5–10 year roadmap</li>
                  <li>Transparent discussion of options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Timeline of Results + Cost === */}
      <section className="py-16 px-6 md:px-16 lg:px-24 space-y-16">
        {/* Timeline */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Timeline of Results
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-[#9E4A47] mb-3">Medical Treatment</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#2B333C]/90">
                <li>3–4 months: Reduced shedding</li>
                <li>6 months: Visible improvement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#9E4A47] mb-3">Hair Transplant</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#2B333C]/90">
                <li>3–4 months: Initial growth</li>
                <li>6–8 months: Noticeable density</li>
                <li>9–12 months: Final mature outcome</li>
              </ul>
            </div>
            <p className="italic text-[#828D9C]">
              Patience yields natural, sustainable results.
            </p>
          </div>
        </div>

        {/* Cost */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Male Hair Loss Treatment in Delhi & Gurgaon
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Varies by stage, treatment type (medical vs surgical), grafts needed (if transplant), and case complexity. Transparent, ethical pricing after thorough evaluation — no over-treatment or hidden costs.
          </p>
        </div>
      </section>

      {/* === Why Choose Satya + Final CTA === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose Satya Skin & Hair Solutions?
          </h2>
          <ul className="text-xl opacity-90 max-w-4xl mx-auto list-disc list-inside space-y-4 text-left">
            <li>Dermatologist & surgeon-led accurate diagnosis</li>
            <li>Ethical, conservative planning</li>
            <li>Donor preservation philosophy</li>
            <li>Advanced transplant techniques</li>
            <li>Long-term sustainability focus</li>
            <li>Experience with complex/repair cases</li>
          </ul>

          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-12 rounded-full font-bold text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>

          <p className="text-lg opacity-90 mt-8">
            Hair loss doesn't reverse alone — early action gives you more options and better results.
          </p>
        </div>
      </section>

     <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FCEBDE]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-12 text-center">
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
                    <span className="font-semibold text-lg text-[#2B333C]">
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
    </main>
  );
}