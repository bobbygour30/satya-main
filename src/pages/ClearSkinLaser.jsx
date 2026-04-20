"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Is ClearSkin Laser Treatment painful?",
    a: "No, it is generally comfortable with a mild warm sensation during the procedure.",
  },
  {
    q: "When will I see results?",
    a: "Gradual improvement is visible after a few sessions as collagen production increases.",
  },
  {
    q: "Is there downtime after ClearSkin treatment?",
    a: "There is minimal to no downtime, and normal activities can be resumed immediately.",
  },
  {
    q: "Can it remove acne scars completely?",
    a: "It significantly improves acne scars but may require multiple sessions.",
  },
  {
    q: "Is it suitable for all skin types?",
    a: "Yes, it is safe for most skin types when performed by a dermatologist.",
  },
  {
    q: "Can ClearSkin be combined with other treatments?",
    a: "Yes, it can be combined with PRP, peels, or other therapies for enhanced results.",
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

export default function ClearSkinLaser() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency (though not used further in original)

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META (exactly like HomePage) ==================== */}
      <SEO
        title="ClearSkin Laser Treatment | Advanced Skin Rejuvenation"
        description="Get smoother, younger-looking skin with ClearSkin Laser Treatment in Delhi & Gurgaon. Treat wrinkles, pores & aging signs at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/skin/clearskin-laser"
        showSchema={false} // Only home page uses schema
      />
      {/* === PREMIUM CLEARSKIN LASER HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[60vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.clearskinpro || assets.banner}')`,
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
                ClearSkin Laser Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Best ClearSkin Laser Treatment in Delhi & Gurgaon
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              If you are looking for a powerful yet safe solution for skin rejuvenation, ClearSkin Laser Treatment is one of the most advanced technologies available today. Designed to improve skin quality without aggressive downtime, it targets multiple signs of aging with precision. At Satya Skin & Hair Solutions, we offer customized ClearSkin Laser Treatment in Delhi and Gurgaon, focused on enhancing skin texture, reducing imperfections, and restoring a youthful glow.
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
              src={assets.clearskinpro}
              alt="ClearSkin Laser Treatment"
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
              Advanced Rejuvenation • Collagen Boost • Pore Tightening • Wrinkle Reduction • Minimal Downtime • Natural Glow • Satya Excellence
            </span>
            <span className="px-12">
              Advanced Rejuvenation • Collagen Boost • Pore Tightening • Wrinkle Reduction • Minimal Downtime • Natural Glow • Satya Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Advanced Rejuvenation • Collagen Boost • Pore Tightening • Wrinkle Reduction • Minimal Downtime • Natural Glow • Satya Excellence
            </span>
            <span className="px-12">
              Advanced Rejuvenation • Collagen Boost • Pore Tightening • Wrinkle Reduction • Minimal Downtime • Natural Glow • Satya Excellence
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

      {/* === What is ClearSkin Laser + How it Works + Video === */}
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
              What is ClearSkin Laser Treatment?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, ClearSkin Laser Treatment (ClearSkin PRO) is performed under expert dermatologist supervision — emphasizing advanced skin rejuvenation, collagen stimulation, and natural, long-lasting results with minimal downtime.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                ClearSkin PRO is an FDA-approved, award-winning laser therapy designed for advanced skin rejuvenation. It uses controlled laser energy to penetrate the deeper layers of the skin while maintaining safety and comfort.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                This treatment works by delivering strong yet controlled laser energy, stimulating collagen production, improving blood circulation, and enhancing skin renewal. Unlike aggressive lasers, ClearSkin PRO is non-ablative, meaning it does not damage the skin surface, making it safer with minimal downtime.
              </p>

              <div className="bg-white/70 p-6 rounded-2xl border border-[#DFDFDD]">
                <p className="font-semibold text-[#9E4A47] mb-3">How Does ClearSkin PRO Work?</p>
                <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  ClearSkin PRO combines laser energy with advanced cooling technology to heat deeper skin layers, stimulate collagen and elastin, tighten pores, improve skin texture, and reduce fine lines and wrinkles. The cooling system ensures comfort while maintaining effectiveness.
                </p>
              </div>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Delivering strong yet controlled laser energy",
                  "Stimulating collagen production",
                  "Improving blood circulation",
                  "Enhancing skin renewal",
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
                  src="https://www.youtube.com/embed/EnV1niFd4wQ?si=pwGgztCfg6HAU2xa"
                  title="ClearSkin Laser Treatment Procedure"
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

      {/* === Skin Concerns + Benefits Grid === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Skin Concerns Treated with ClearSkin Laser
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Fine lines and wrinkles",
              "Enlarged pores",
              "Uneven skin texture",
              "Acne scars",
              "Dull skin",
              "Early signs of aging",
              "Mild skin laxity",
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

      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of ClearSkin Laser Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FDA-approved and clinically tested",
                text: "Proven safety and effectiveness for skin rejuvenation.",
              },
              {
                title: "Non-invasive and safe",
                text: "No surgery, no damage to skin surface.",
              },
              {
                title: "Minimal discomfort",
                text: "Comfortable treatment with advanced cooling.",
              },
              {
                title: "No significant downtime",
                text: "Resume daily activities immediately.",
              },
              {
                title: "Improves skin texture and tone",
                text: "Smoother, brighter, more even complexion.",
              },
              {
                title: "Reduces wrinkles and fine lines",
                text: "Stimulates collagen for youthful appearance.",
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
                Procedure time: 30–45 minutes
              </p>
              <div className="space-y-6 md:text-lg text-[#2B333C]/90">
                <p>
                  <strong>Skin is cleansed</strong> — Thorough cleansing to prepare the skin.
                </p>
                <p>
                  <strong>Protective eyewear is provided</strong> — Complete eye protection during treatment.
                </p>
                <p>
                  <strong>Laser device is applied to the skin</strong> — Controlled energy is delivered with cooling technology.
                </p>
                <p>
                  <strong>You may feel a warm sensation during the treatment</strong> — Comfortable and quick session.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                What to Expect After Treatment?
              </h3>
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                Recovery after ClearSkin Laser Treatment is predictable:
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { time: "Immediate", desc: "Mild redness for a few hours" },
                  { time: "Immediate", desc: "No major downtime" },
                  {
                    time: "After sessions",
                    desc: "Gradual improvement & visible glow",
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
                Patients can resume daily activities immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Sessions + Ideal Candidate + Safety + Cost === */}
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
              ClearSkin Laser Treatment is suitable for:<br />
              • Individuals with early aging signs<br />
              • Those with acne scars or open pores<br />
              • People seeking non-surgical rejuvenation<br />
              • Individuals wanting minimal downtime
            </p>
          </div>

          {/* Safety + Cost */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
              <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
                Is ClearSkin Laser Safe?
              </h2>
              <p className="md:text-lg text-[#2B333C]/90">
                Yes, ClearSkin PRO is:<br />
                • FDA-approved<br />
                • Designed for safe energy delivery<br />
                • Equipped with cooling technology<br />
                • Suitable for Indian skin types<br /><br />
                When performed by a trained professional, it has minimal risk.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
              <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
                Cost of ClearSkin Laser Treatment in Delhi & Gurgaon
              </h2>
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Cost depends on:<br />
                • Area treated<br />
                • Number of sessions<br />
                • Skin condition<br /><br />
                A consultation helps determine the right treatment plan.
              </p>
            </div>
          </div>
        </div>

        {/* Why Satya */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Choose Satya Skin & Hair Solutions for ClearSkin Laser Treatment?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            • Dermatologist-led procedures<br />
            • Advanced ClearSkin PRO technology<br />
            • Customized treatment protocols<br />
            • Safe and hygienic environment<br />
            • Focus on natural, long-term results<br /><br />
            Patients searching for ClearSkin Laser Treatment in Delhi and Gurgaon benefit from expert care and personalized solutions.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book ClearSkin Laser Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you want smoother, tighter, and more youthful skin without surgery, ClearSkin Laser Treatment is a reliable option.
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