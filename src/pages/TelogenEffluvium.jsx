"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import assets from "../assets/assets";
const faqs = [
  {
                q: "Is Telogen Effluvium permanent?",
                a: "No, it is usually temporary and reversible once the trigger is addressed.",
              },
              {
                q: "How much hair fall is normal?",
                a: "50–100 hairs per day is normal. Excessive shedding beyond this may indicate Telogen Effluvium.",
              },
              {
                q: "Can stress alone cause Telogen Effluvium?",
                a: "Yes, significant or prolonged emotional stress can trigger it.",
              },
              {
                q: "Does hair grow back after Telogen Effluvium?",
                a: "In most cases, yes — regrowth occurs within several months after trigger correction.",
              },
              {
                q: "Is Telogen Effluvium contagious?",
                a: "No, it is not infectious or contagious.",
              },
              {
                q: "Can Telogen Effluvium turn into permanent baldness?",
                a: "It does not directly cause permanent loss, but may unmask underlying genetic thinning if present.",
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

export default function TelogenEffluvium() {
  const [showPopup, setShowPopup] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM TELOGEN EFFLUVIUM HERO BANNER === */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Positioned Right */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.talogenbanners}')`, // assume telogenbanner or fallback
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
              Telogen Effluvium
              <br />
              <h1 className="text-[#9E4A47] text-xl sm:text-2xl md:text-2xl">
                Reversible Hair Fall – Identify, Treat & Recover
              </h1>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              Sudden excessive shedding and diffuse thinning can be alarming, but Telogen Effluvium is usually temporary and fully reversible with proper diagnosis and management at Satya Skin & Hair Solutions in Delhi & Gurgaon.
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
              Reversible Shedding • Trigger Identification • Diffuse Thinning • Nutritional & Stress Support • Full Recovery Possible • Satya Evidence-Based Care
            </span>
            <span className="px-12">
              Reversible Shedding • Trigger Identification • Diffuse Thinning • Nutritional & Stress Support • Full Recovery Possible • Satya Evidence-Based Care
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Reversible Shedding • Trigger Identification • Diffuse Thinning • Nutritional & Stress Support • Full Recovery Possible • Satya Evidence-Based Care
            </span>
            <span className="px-12">
              Reversible Shedding • Trigger Identification • Diffuse Thinning • Nutritional & Stress Support • Full Recovery Possible • Satya Evidence-Based Care
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
              Root-cause focused evaluation and gentle, effective management — helping patients regain confidence through natural recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What Is Telogen Effluvium + Causes === */}
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
              What Is Telogen Effluvium?
            </h2>
            <p className="text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Telogen Effluvium is a common, reversible form of diffuse hair shedding where a large number of follicles prematurely enter the resting (telogen) phase due to a trigger, leading to excessive fall 2–3 months later. Unlike genetic baldness, it is temporary and non-scarring.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                Hair cycle disruption causes noticeable thinning across the scalp — but follicles remain alive and can resume normal growth once the trigger is addressed.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Diffuse thinning (not patchy)",
                  "Triggered by stress/illness",
                  "Usually reversible",
                  "Hairline typically preserved",
                  "No permanent follicle damage",
                  "Common in men & women",
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

            {/* Central Video Embed - optional educational video on hair cycles or TE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFDFDD]/50"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/F_XXj5aPYKQ" // Replace with TE explanation video if available
                  title="Understanding Telogen Effluvium"
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

      {/* === Common Causes Grid === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Common Causes of Telogen Effluvium
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Severe illness or fever (viral, dengue, typhoid, COVID-19)",
              "Surgery or major trauma",
              "Prolonged emotional stress",
              "Hormonal changes (postpartum, thyroid disorders)",
              "Nutritional deficiencies (iron, vitamin D, B12, protein)",
              "Crash dieting / rapid weight loss",
            ].map((cause, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-xl font-semibold text-[#2B333C]">{cause}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
            Identifying and correcting the trigger is the cornerstone of recovery.
          </p>
        </div>
      </section>

      {/* === Symptoms + Acute vs Chronic === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Symptoms */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Symptoms of Telogen Effluvium
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <ul className="list-disc pl-6 space-y-3 text-lg text-[#2B333C]/90">
                  <li>Excessive shedding during combing/washing</li>
                  <li>More hair on pillow or in drain</li>
                  <li>Diffuse thinning across scalp</li>
                  <li>Noticeable volume loss</li>
                  <li>Hairline usually remains intact</li>
                </ul>
              </div>
            </div>

            {/* Acute vs Chronic */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Acute vs Chronic Telogen Effluvium
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#DFDFDD]">
                  <h3 className="text-2xl font-semibold text-[#9E4A47] mb-3">Acute</h3>
                  <p className="text-[#2B333C]/90">
                    <strong>Lasts less than 6 months</strong> — often linked to a clear trigger — high chance of full spontaneous recovery.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#DFDFDD]">
                  <h3 className="text-2xl font-semibold text-[#9E4A47] mb-3">Chronic</h3>
                  <p className="text-[#2B333C]/90">
                    <strong>Persists more than 6 months</strong> — trigger may be unclear — needs structured long-term management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Treatment Approach + Recovery Timeline === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Treatment & Recovery for Telogen Effluvium
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Treatment Steps */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-[#9E4A47]">Treatment Approach</h3>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-[#2B333C]/90">
                <li><strong>Identify & Correct Trigger</strong> — Treat illness, deficiencies, hormones, stress.</li>
                <li><strong>Nutritional Support</strong> — Optimize iron, vitamin D, B12, protein.</li>
                <li><strong>Stress & Lifestyle Management</strong> — Improve sleep, reduce stress.</li>
                <li><strong>Topical Support</strong> — Mild therapies to aid regrowth (if needed).</li>
                <li><strong>PRP (Selected Cases)</strong> — For persistent shedding only.</li>
              </ol>
              <p className="italic text-[#828D9C]">
                Focus is on natural cycle restoration — not masking or over-treating.
              </p>
            </div>

            {/* Recovery Timeline */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-[#9E4A47]">Recovery Timeline</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { time: "2–3 months", desc: "Shedding gradually reduces" },
                  { time: "3–6 months", desc: "Visible new regrowth begins" },
                  { time: "6–12 months", desc: "Full density & volume recovery" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-white p-6 rounded-2xl shadow-xl border border-[#DFDFDD] text-center"
                  >
                    <div className="text-3xl font-bold text-[#9E4A47] mb-2">{item.time}</div>
                    <p className="text-[#2B333C]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Diagnosis + Hair Transplant Note + Emotional Impact === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Diagnosis */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                How Is Telogen Effluvium Diagnosed?
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <ul className="list-disc pl-6 space-y-3 text-lg text-[#2B333C]/90">
                  <li>Detailed medical & shedding history</li>
                  <li>Pull test & scalp examination</li>
                  <li>Blood tests (iron, thyroid, vitamins)</li>
                  <li>Differentiation from genetic alopecia</li>
                </ul>
              </div>
            </div>

            {/* Transplant Not Needed */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Is Hair Transplant Required?
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <p className="text-lg text-[#2B333C]/90">
                  No — Telogen Effluvium is reversible and follicles are not permanently lost. Transplant is unnecessary and does not address the root trigger.
                </p>
                <p className="italic text-[#9E4A47]">
                  Correct diagnosis prevents unneeded surgery.
                </p>
              </div>
            </div>
          </div>

          {/* Emotional Impact */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD] text-center">
            <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
              Emotional Impact of Sudden Hair Fall
            </h2>
            <p className="text-lg text-[#2B333C]/90">
              Sudden shedding often leads to anxiety, fear of permanent baldness, reduced confidence, and obsessive hair monitoring. Understanding that Telogen Effluvium is typically temporary brings significant reassurance.
            </p>
          </div>
        </div>
      </section>

      {/* === Preventive Measures + Cost + Why Professional Care === */}
      <section className="py-16 px-6 md:px-16 lg:px-24 space-y-16">
        {/* Preventive Measures */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Preventive Measures
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-[#2B333C]/90">
            <li>Balanced, nutrient-rich diet</li>
            <li>Regular health check-ups</li>
            <li>Effective stress reduction</li>
            <li>Avoid crash dieting</li>
            <li>Gentle hair care routine</li>
            <li>Adequate sleep & overall wellness</li>
          </ul>
        </div>

        {/* Cost */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Telogen Effluvium Treatment in Delhi & Gurgaon
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Cost varies based on required blood tests, nutritional supplements, any additional therapies, and follow-up duration. Treatment is always individualized and cost-effective after thorough evaluation.
          </p>
        </div>

        {/* Why Professional Care */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Why Seek Professional Care at Satya?
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90 mb-6">
            Self-diagnosis or internet remedies often lead to:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
            <li>Unnecessary hair transplant consideration</li>
            <li>Overuse of harsh products</li>
            <li>Delayed or incomplete recovery</li>
            <li>Mismanagement of underlying conditions</li>
          </ul>
          <p className="mt-6 text-lg text-[#2B333C]/90">
            At Satya: evidence-based diagnosis, root-cause focus, safe structured treatment, long-term monitoring, and reassurance.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Experiencing Sudden Hair Shedding?
          </h2>
          <p className="text-xl opacity-90">
            Early evaluation can stop the panic, identify the cause, and guide natural recovery — don't wait.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-12 rounded-full font-bold text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
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