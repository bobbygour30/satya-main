"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import assets from "../assets/assets";
const faqs = [
  {
                q: "Is female hair transplant permanent?",
                a: "Yes. When selected from safe donor zones, transplanted hair grows permanently.",
              },
              {
                q: "Can women get hair transplants without shaving?",
                a: "Yes. Non-shaven or partially shaven techniques are available for many women.",
              },
              {
                q: "Is female hair transplant painful?",
                a: "No. Performed under local anesthesia — minimal discomfort.",
              },
              {
                q: "How many grafts are needed for women?",
                a: "Varies widely — often fewer than men, but placement is more precise and conservative.",
              },
              {
                q: "Can hair transplant treat diffuse thinning in women?",
                a: "Yes, in suitable stable cases with strong donor and careful planning.",
              },
              {
                q: "Is female hair transplant safe?",
                a: "Yes — when preceded by proper diagnosis, medical optimization, and performed by experienced specialists.",
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

export default function FemaleHairTransplant() {
  const [showPopup, setShowPopup] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM FEMALE HAIR TRANSPLANT HERO BANNER === */}
<section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
  {/* Background Image - Desktop Only */}
  <div
    className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
    style={{
      backgroundImage: `url('${assets.femalehairlossbanners || assets.banner}')`,
    }}
  />

  <motion.div
    className="relative z-10 px-5 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* LEFT CONTENT */}
    <div className="space-y-6 sm:space-y-8">
    

      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
          Female Hair Transplant
        </h1>

        <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
          Natural Volume, Conservative Planning, Permanent Results
        </p>
      </div>

      <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
        Women typically experience diffuse thinning, widening part lines, or frontal recession — patterns very different from male baldness. 
        Female hair restoration demands gentle, precise techniques that preserve existing hair, respect hairline aesthetics, and deliver 
        natural-looking density and coverage — performed with specialized care under Dr. Shail Gupta at Satya Skin & Hair Solutions in Delhi & Gurgaon.
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
        src={assets.femalehairlossbanners}
        alt="Female Hair Transplant - Natural Restoration for Women"
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
              Natural Feminine Density • Conservative Grafting • Donor Protection • Non-Shaven Options • Seamless Blending • Satya Specialized Care
            </span>
            <span className="px-12">
              Natural Feminine Density • Conservative Grafting • Donor Protection • Non-Shaven Options • Seamless Blending • Satya Specialized Care
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Natural Feminine Density • Conservative Grafting • Donor Protection • Non-Shaven Options • Seamless Blending • Satya Specialized Care
            </span>
            <span className="px-12">
              Natural Feminine Density • Conservative Grafting • Donor Protection • Non-Shaven Options • Seamless Blending • Satya Specialized Care
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
              Specialized in female hair biology — gentle, conservative techniques for natural volume, feminine hairlines, and preserved existing hair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What Is Female Hair Transplant + Causes === */}
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
              What Is a Female Hair Transplant?
            </h2>
            <p className="text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Female hair transplant relocates healthy follicles to thinning areas with extreme care to preserve existing hair, avoid shock loss, and create soft, natural density. Unlike male transplants, it emphasizes conservative grafting, precise placement, and feminine aesthetics at Satya.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                Women typically experience diffuse thinning or widening part — requiring specialized planning to blend seamlessly with surrounding hair.
              </p>

              <h3 className="text-2xl font-bold text-[#9E4A47]">Common Causes of Female Hair Loss</h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Female Pattern Hair Loss (FPHL)",
                  "Hormonal imbalance (PCOS, thyroid)",
                  "Postpartum hair shedding",
                  "Traction alopecia (tight styles)",
                  "Nutritional deficiencies",
                  "Telogen effluvium (stress-triggered)",
                ].map((cause, i) => (
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
                    <span className="font-medium">{cause}</span>
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
                  src="https://www.youtube.com/embed/F_XXj5aPYKQ" // Replace with female hair loss/transplant video
                  title="Female Hair Transplant Procedure"
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

      {/* === Ideal Candidates + Techniques === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ideal Candidates */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Who Is an Ideal Candidate?
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Stable, non-progressive thinning</li>
                  <li>Adequate donor density</li>
                  <li>Visible scalp through thinning</li>
                  <li>Frontal hairline recession</li>
                  <li>Traction or scarring alopecia</li>
                  <li>Medical treatments insufficient</li>
                </ul>
                <p className="italic text-[#9E4A47]">
                  Ethical selection is key — not every woman needs or benefits from surgery.
                </p>
              </div>
            </div>

            {/* Techniques at Satya */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Hair Transplant Techniques at Satya
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "FUT (Follicular Unit Transplantation)",
                  "FUE (Follicular Unit Extraction)",
                  "DSFT (Direct Stimulated Follicular Transplant)",
                  "Body Hair Transplant (BHT)",
                  "Synthetic Hair Transplant",
                  "MHT (Mega Hair Transplant)",
                  "SMP (Scalp Micropigmentation)",
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-[#DFDFDD] text-center"
                  >
                    <p className="text-lg font-semibold text-[#2B333C]">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Advantages Grid === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Advantages of Female Hair Transplant at Satya
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Coverage & Density",
                text: "Precise placement blends with existing hair for fuller, seamless volume.",
              },
              {
                title: "Permanent Solution",
                text: "From safe donor zones, transplanted hair grows lifelong.",
              },
              {
                title: "Feminine Hairline Design",
                text: "Soft, natural frontal lines preserved — never masculine.",
              },
              {
                title: "Boost in Confidence",
                text: "Restored density improves self-image and quality of life.",
              },
              {
                title: "Non-Shaven Options Available",
                text: "Many women can undergo procedure with minimal or no shaving.",
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
                <h3 className="text-2xl font-semibold text-[#9E4A47] mb-4">
                  {adv.title}
                </h3>
                <p className="text-[#828D9C] leading-relaxed">{adv.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Recovery Timeline === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-bold text-[#9E4A47]">
            Typical Recovery Time After Female Hair Transplant
          </h2>
          <p className="text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Recovery is smooth with minimal social downtime for most women.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "Few days", desc: "Mild swelling/redness" },
              { time: "7–10 days", desc: "Tiny scabs fall off" },
              { time: "3–5 days", desc: "Resume routine work" },
              { time: "9–12 months", desc: "Final mature results" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]"
              >
                <div className="text-3xl font-bold text-[#9E4A47] mb-3">
                  {item.time}
                </div>
                <p className="text-lg text-[#2B333C]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-lg italic text-[#828D9C] mt-8">
            New growth begins 3–4 months; density improves progressively.
          </p>
        </div>
      </section>

      {/* === Cost + Procedure + Truth === */}
      <section className="py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Female Hair Transplant in Delhi & Gurgaon
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Cost varies by thinning extent, grafts needed, donor quality, technique (FUE/FUT/non-shaven), and design complexity. At Satya, pricing is transparent, ethical, and personalized — no inflated grafts or hidden charges.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About Female Hair Transplant
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Female hair transplant cannot follow male protocols. Aggressive approaches risk damaging existing hair, causing shock loss, poor density, or unnatural appearance. It requires deep understanding of female hair patterns and conservative execution.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Female Hair Transplant Procedure at Satya
          </h2>
          <div className="space-y-6 text-lg text-[#2B333C]/90">
            <p><strong>1. Consultation & Diagnosis</strong> — Pattern assessment, hormonal/medical evaluation, donor analysis, long-term planning.</p>
            <p><strong>2. Donor Hair Extraction</strong> — Careful FUE/FUT; donor aesthetics preserved; no over-harvesting.</p>
            <p><strong>3. Graft Preparation</strong> — Magnified handling; single/multi-hair grafts planned separately; survival prioritized.</p>
            <p><strong>4. Slit Creation & Implantation</strong> — Precise angles; density controlled to minimize shock loss; no-touch technique.</p>
            <p><strong>5. Post-Operative Care</strong> — Minimal meds, clear instructions, no unnecessary add-ons, long-term follow-up.</p>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready for Natural, Fuller Hair?
          </h2>
          <p className="text-xl opacity-90">
            Female hair loss needs specialized, gentle care — get the right diagnosis and plan tailored to you.
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