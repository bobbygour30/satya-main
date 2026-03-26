"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Can AFT-SSR help with acne scars?",
    a: "AFT-SSR helps improve mild acne scars and post-acne marks by boosting collagen and reducing redness. It smoothens skin texture over time but may need combination treatments for deeper scars.",
  },
  {
    q: "Is AFT-SSR suitable for sensitive skin?",
    a: "Yes, AFT-SSR is designed to deliver controlled and uniform light energy, making it safer for sensitive and Indian skin types when performed under dermatologist supervision.",
  },
  {
    q: "Can AFT-SSR reduce pigmentation permanently?",
    a: "AFT-SSR reduces pigmentation effectively, but results are not always permanent. Maintenance, sun protection, and skincare are essential to prevent recurrence.",
  },
  {
    q: "Is AFT-SSR better than laser toning or chemical peels?",
    a: "AFT-SSR treats multiple concerns like pigmentation and redness together, while lasers and peels are more targeted. Often, combination treatments give the best results.",
  },
  {
    q: "What results should I expect from AFT-SSR?",
    a: "You can expect gradual improvement in skin tone, brightness, and texture over 3–4 sessions. Results are natural and improve further with collagen stimulation.",
  },
  {
    q: "How many sessions are required?",
    a: "Most patients need 3–6 sessions depending on skin concerns. Maintenance sessions may be recommended for long-term results.",
  },
  {
    q: "Is there any downtime after AFT-SSR?",
    a: "There is minimal downtime. Mild redness may occur for a few hours, and most patients resume daily activities immediately.",
  },
  {
    q: "Can AFT-SSR treat redness and rosacea?",
    a: "Yes, AFT-SSR can help reduce redness and visible blood vessels by targeting vascular components in the skin.",
  },
  {
    q: "How long does each session take?",
    a: "Each session typically takes 20–30 minutes, depending on the area being treated.",
  },
  {
    q: "Can AFT-SSR be combined with other treatments?",
    a: "Yes, it is often combined with peels, lasers, or medical skincare for enhanced and faster results.",
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

export default function AFTSSRTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency (though not used further in original)

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META (exactly like HomePage) ==================== */}
      <SEO
        title="AFT-SSR Treatment in Delhi | Advanced Skin Rejuvenation & Pigmentation Therapy"
        description="Get clear, brighter skin with AFT-SSR treatment in Delhi & Gurgaon. Advanced light-based therapy for pigmentation, redness, and skin rejuvenation at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/skin/aft-ssr"
        showSchema={false} // Only home page uses schema
      />
      {/* === PREMIUM AFT-SSR HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.aftssr || assets.banner}')`,
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
                AFT-SSR Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Best AFT-SSR Treatment in Delhi & Gurgaon
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Modern skin concerns like pigmentation, redness, uneven tone, and dullness require solutions that go beyond creams and facials. AFT-SSR (Advanced Fluorescent Technology – Selective Spectrum Rejuvenation) is a next-generation, non-invasive skin treatment that uses controlled light energy to target multiple skin concerns safely. At Satya Skin & Hair Solutions, we offer customized AFT-SSR Treatment in Delhi and Gurgaon, designed to improve skin clarity, texture, and overall radiance under expert dermatologist supervision.
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
              Book FREE Consultation →
            </motion.button>
          </div>

          {/* Mobile Image (Zoomed) */}
          <div className="lg:hidden mt-8 overflow-hidden rounded-xl">
            <img
              src={assets.aftssr}
              alt="AFT-SSR Treatment"
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
              Clear Even Skin • Pigmentation Reduction • Redness Control • Collagen Boost • No Downtime • Safe for Indian Skin • Satya Excellence
            </span>
            <span className="px-12">
              Clear Even Skin • Pigmentation Reduction • Redness Control • Collagen Boost • No Downtime • Safe for Indian Skin • Satya Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Clear Even Skin • Pigmentation Reduction • Redness Control • Collagen Boost • No Downtime • Safe for Indian Skin • Satya Excellence
            </span>
            <span className="px-12">
              Clear Even Skin • Pigmentation Reduction • Redness Control • Collagen Boost • No Downtime • Safe for Indian Skin • Satya Excellence
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

      {/* === What is AFT-SSR + How it Works + Video === */}
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
              What Is AFT-SSR Treatment?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, AFT-SSR Treatment is performed under expert dermatologist supervision — emphasizing advanced light-based skin rejuvenation, pigmentation reduction, and natural radiance with minimal downtime.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                AFT-SSR is an advanced form of light-based skin therapy that delivers filtered and controlled light energy into the skin. Unlike traditional IPL, AFT technology ensures more uniform energy distribution, reduced risk of overheating, better safety for Indian skin types, and enhanced treatment precision.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                The “Selective Spectrum Rejuvenation” component allows the treatment to target specific skin concerns without damaging surrounding tissue.
              </p>

              <div className="bg-white/70 p-6 rounded-2xl border border-[#DFDFDD]">
                <p className="font-semibold text-[#9E4A47] mb-3">How Does AFT-SSR Work?</p>
                <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  AFT-SSR works through selective light absorption: light energy penetrates the skin, pigmented or damaged cells absorb the energy, targeted cells break down or are eliminated, skin regeneration is triggered, and collagen production increases, improving texture and firmness. The result is clearer, brighter, and more even-toned skin over time.
                </p>
              </div>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "More uniform energy distribution",
                  "Reduced risk of overheating",
                  "Better safety for Indian skin types",
                  "Enhanced treatment precision",
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
                  src="https://www.youtube.com/embed/rWqn50qQeKU?si=1BzJadtdCKt6zCD_" // Replace with actual AFT-SSR video link
                  title="AFT-SSR Treatment Procedure"
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

      {/* === Skin Concerns Grid === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Skin Concerns Treated with AFT-SSR
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Pigmentation and dark spots",
              "Sun damage and tanning",
              "Uneven skin tone",
              "Redness and rosacea",
              "Fine lines and early wrinkles",
              "Dull and tired skin",
              "Mild acne marks",
              "Rough skin texture",
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

      {/* === Benefits Grid === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of AFT-SSR Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Non-invasive and painless",
                text: "No needles, no surgery.",
              },
              {
                title: "No downtime",
                text: "Resume daily activities immediately.",
              },
              {
                title: "Safe for most skin types",
                text: "Including Indian skin tones.",
              },
              {
                title: "Targets multiple concerns in one treatment",
                text: "Pigmentation, redness, texture — all at once.",
              },
              {
                title: "Improves collagen production",
                text: "Firmer, smoother skin over time.",
              },
              {
                title: "Enhances skin clarity and brightness",
                text: "Natural, even-toned glow.",
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

      {/* === Procedure Section (Before + During + After) === */}
      <section className="py-7 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#9E4A47]">
            What Happens During AFT-SSR Treatment?
          </h2>

          <div className="space-y-6">
            {/* Before */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">Before the Procedure</h3>
              <div className="space-y-4 md:text-lg text-[#2B333C]/90">
                <p>• Consultation with a dermatologist</p>
                <p>• Skin type and concern assessment</p>
                <p>• Identification of pigmentation depth</p>
                <p>• Customized treatment planning</p>
              </div>
            </div>

            {/* During */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                Session duration: 20–30 minutes
              </p>
              <div className="space-y-6 md:text-lg text-[#2B333C]/90">
                <p>
                  <strong>Skin is cleansed</strong> — Thorough cleansing to prepare the skin.
                </p>
                <p>
                  <strong>Cooling gel is applied</strong> — For comfort and better light penetration.
                </p>
                <p>
                  <strong>A handheld device delivers controlled light pulses</strong> — Targeted energy reaches specific concerns.
                </p>
                <p>
                  <strong>Protective eyewear is used</strong> — Complete eye safety.
                </p>
                <p>You may feel a mild warm or snapping sensation.</p>
              </div>
            </div>

            {/* After */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">What Happens After the Procedure?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { time: "Immediate", desc: "Mild redness for a few hours" },
                  { time: "Immediate", desc: "No major downtime" },
                  {
                    time: "Over sessions",
                    desc: "Gradual improvement in skin tone",
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
                Pigmentation fades over sessions • Patients can resume daily activities immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Sessions + Comparison + Safety === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            How Many Sessions Are Required?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            AFT-SSR works gradually:<br />
            • Mild concerns: 3–4 sessions<br />
            • Moderate pigmentation: 4–6 sessions<br />
            • Maintenance: Periodic sessions<br /><br />
            Sessions are usually spaced 3–4 weeks apart.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            AFT-SSR vs Traditional IPL
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            AFT-SSR is more advanced than IPL because:<br />
            • Better energy control<br />
            • Reduced side effects<br />
            • More uniform results<br />
            • Safer for Indian skin tones
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Is AFT-SSR Safe?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Yes, when performed under trained dermatologist supervision.<br />
            Possible temporary effects:<br />
            • Mild redness<br />
            • Slight warmth<br /><br />
            These typically resolve within a few hours.
          </p>
        </div>
      </section>

      {/* === Ideal Candidate + Cost + Why Satya === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
            <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
              Who Is an Ideal Candidate?
            </h2>
            <p className="md:text-lg text-[#2B333C]/90">
              AFT-SSR is suitable for:<br />
              • Pigmentation issues<br />
              • Uneven skin tone<br />
              • Early aging signs<br />
              • Redness or sensitivity<br />
              • Dull skin<br /><br />
              Not recommended for active infections or certain skin conditions without evaluation.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
              <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
                Cost of AFT-SSR Treatment in Delhi & Gurgaon
              </h2>
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Cost depends on:<br />
                • Area treated<br />
                • Number of sessions<br />
                • Skin concern severity<br /><br />
                A consultation helps determine the exact treatment plan.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
              <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
                Why Choose Satya Skin & Hair Solutions?
              </h2>
              <p className="md:text-lg text-[#2B333C]/90">
                • Dermatologist-led treatment protocols<br />
                • Advanced AFT technology<br />
                • Customized energy settings<br />
                • Safe for Indian skin<br />
                • Focus on long-term skin health<br /><br />
                Patients searching for AFT-SSR treatment in Delhi and Gurgaon benefit from structured, evidence-based care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book AFT-SSR Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you want clearer, brighter, and more even skin without downtime, AFT-SSR is a reliable solution.
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
      <ConsultationPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </main>
  );
}