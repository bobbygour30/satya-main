"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import assets from "../assets/assets";

const faqs = [
  {
    q: "Is beard hair transplant permanent?",
    a: "Yes. Transplanted beard hair grows permanently.",
  },
  {
    q: "Will transplanted beard hair look natural?",
    a: "Yes — with proper angles, direction, and planning, results are completely natural.",
  },
  {
    q: "Is beard hair transplant painful?",
    a: "No. Performed under local anesthesia — well-tolerated and painless.",
  },
  {
    q: "How many grafts are needed for a beard transplant?",
    a: "Typically 800–2000 grafts, depending on desired density and coverage.",
  },
  {
    q: "Can beard transplant cover scars?",
    a: "Yes. Very effective for concealing scars in the beard area.",
  },
  {
    q: "Can I shave after beard transplant?",
    a: "Yes — once healing is complete and hair begins to grow.",
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

export default function BeardHairTransplant() {
  const [showPopup, setShowPopup] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM BEARD TRANSPLANT HERO BANNER === */}
<section className="relative w-full min-h-[64vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
  {/* Background Image - Desktop Only */}
  <div
    className="hidden lg:block absolute inset-0 bg-no-repeat bg-left bg-contain opacity-90"
    style={{
      backgroundImage: `url('${assets.beardbanners || assets.banner}')`,
    }}
  />

  <motion.div
    className="relative z-10 px-5 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0 sm:ml-40"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* LEFT CONTENT */}
    <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 ">
     

      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
          Beard Hair Transplant
        </h1>

        <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
          Natural Density, Precise Direction, Permanent Results
        </p>
      </div>

      <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
        Patchy, uneven, or absent beard growth can impact self-esteem and facial aesthetics. 
        Beard transplantation restores a natural, permanent beard with artistic precision in 
        density, angulation, and direction — performed under Dr. Shail Gupta at Satya Skin & 
        Hair Solutions in Delhi & Gurgaon.
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
        src={assets.beardbanners}
        alt="Beard Hair Transplant - Natural Density & Permanent Results"
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
              Permanent Natural Growth • Custom Beard Design • Scar Coverage •
              Precise Angulation • Masculine Aesthetics • Satya Expertise
            </span>
            <span className="px-12">
              Permanent Natural Growth • Custom Beard Design • Scar Coverage •
              Precise Angulation • Masculine Aesthetics • Satya Expertise
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Permanent Natural Growth • Custom Beard Design • Scar Coverage •
              Precise Angulation • Masculine Aesthetics • Satya Expertise
            </span>
            <span className="px-12">
              Permanent Natural Growth • Custom Beard Design • Scar Coverage •
              Precise Angulation • Masculine Aesthetics • Satya Expertise
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
              Artistic precision for facial hair — natural angles, direction,
              density, and masculine harmony with lifelong results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is Beard Transplant + Advantages + Video === */}
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
              What Is a Beard Hair Transplant?
            </h2>
            <p className="text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Delhi & Gurgaon, beard
              transplant uses FUE-extracted follicles (primarily from scalp) to
              restore patchy, thin, or absent beard areas — with meticulous
              focus on natural growth direction, angles, and facial harmony
              under Dr. Shail Gupta.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                Individual follicles are implanted following your natural beard
                pattern — creating a seamless, permanent beard that grows, can
                be trimmed, and feels authentic.
              </p>

              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                Results are not cosmetic camouflage — they are real, living hair
                that enhances masculine facial structure.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Permanent natural growth",
                  "Custom beard design",
                  "Effective scar coverage",
                  "Masculine natural appearance",
                  "Boost in confidence",
                  "Artistic precision",
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
                  src="https://www.youtube.com/embed/Z8zZwmyCKJc?si=mM3eFkEwftQQaHuM" // Replace with beard transplant video if available
                  title="Beard Hair Transplant Procedure"
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

      {/* === Common Reasons + Ideal Candidates === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Common Reasons */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Common Reasons for Patchy or Absent Beard
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Genetic patchy beard",
                  "Hormonal factors",
                  "Scars from injury or surgery",
                  "Acne scarring",
                  "Burns or trauma",
                  "Previous infections",
                  "Congenital absence of beard hair",
                ].map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-[#DFDFDD]"
                  >
                    <p className="text-lg font-semibold text-[#2B333C]">
                      {reason}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-lg text-[#2B333C]/80">
                Transplant is considered only after hair growth stabilizes and
                medical causes are addressed.
              </p>
            </div>

            {/* Ideal Candidates */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Who Is an Ideal Candidate?
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
                  <ul className="list-disc pl-6 space-y-3 text-lg text-[#2B333C]/90">
                    <li>Patchy or uneven beard growth</li>
                    <li>Desire for increased density</li>
                    <li>Beard scars without hair</li>
                    <li>Good scalp donor hair available</li>
                    <li>Medically fit for procedure</li>
                    <li>Realistic expectations</li>
                  </ul>
                  <p className="mt-6 italic text-[#828D9C]">
                    Ethical selection is key — not every man needs or benefits
                    from maximum grafting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Advantages Grid === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Key Advantages of Beard Transplant at Satya
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Permanent & Natural Beard Growth",
                text: "Transplanted hair grows lifelong and behaves like real beard hair.",
              },
              {
                title: "Custom Beard Design",
                text: "Tailored shape, jawline definition, cheek density, and mustache connection for your face.",
              },
              {
                title: "Scar Coverage",
                text: "Excellent for concealing scars in the beard region.",
              },
              {
                title: "Masculine, Natural Appearance",
                text: "Correct angles and direction prevent plugged or fake look.",
              },
              {
                title: "Boost in Confidence",
                text: "Many patients report significant improvement in self-esteem and facial presence.",
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
            Recovery After Beard Hair Transplant
          </h2>
          <p className="text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Recovery is quick with minimal disruption to daily life.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "2–3 days", desc: "Mild swelling" },
              { time: "7–10 days", desc: "Small scabs fall off" },
              { time: "2–4 weeks", desc: "Initial shedding" },
              { time: "8–12 months", desc: "Full mature results" },
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
            Donor area heals within a week; new growth begins at 3–4 months.
          </p>
        </div>
      </section>

      {/* === Cost + Procedure + Truth === */}
      <section className="py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Beard Hair Transplant in Delhi & Gurgaon
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Cost depends on grafts needed (typically 800–2000), coverage area,
            design complexity, and donor quality. At Satya, we maintain
            transparent, ethical, personalized pricing — no inflated numbers or
            misleading packages.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About Beard Hair Transplant
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Beard transplantation is more technically demanding than scalp hair
            due to angulation and direction. Incorrect planning can cause
            unnatural outward growth, grooming issues, or artificial appearance
            — only experienced surgeons should perform it.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Beard Hair Transplant Procedure at Satya
          </h2>
          <div className="space-y-6 text-lg text-[#2B333C]/90">
            <p>
              <strong>1. Consultation & Beard Planning</strong> — Facial
              analysis, pattern design, density planning, donor assessment.
            </p>
            <p>
              <strong>2. Donor Hair Extraction</strong> — Single-hair follicles
              via FUE; donor aesthetics preserved; no over-harvesting.
            </p>
            <p>
              <strong>3. Graft Preparation</strong> — Only single-hair grafts;
              magnified preparation; survival prioritized.
            </p>
            <p>
              <strong>4. Slit Creation (Most Critical)</strong> — Ultra-fine
              slits at acute angles; matched to natural beard direction for
              authentic look.
            </p>
            <p>
              <strong>5. Graft Implantation</strong> — Surgeon-controlled,
              no-touch technique; natural blending focus.
            </p>
            <p>
              <strong>6. Post-Operative Care</strong> — Simple instructions,
              minimal meds, no unnecessary add-ons, regular follow-ups.
            </p>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready for a Fuller, Natural Beard?
          </h2>
          <p className="text-xl opacity-90">
            Expert planning and precise technique are essential — avoid
            unnatural results or disappointment.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-12 rounded-full font-bold text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
        </div>
      </section>

      {/* === FAQ === */}
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
