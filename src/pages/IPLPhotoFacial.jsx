"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Which is better, hydra facial or photo facial?",
    a: "Hydra facial focuses on cleansing and hydration, while photo facial targets pigmentation and skin tone. Both serve different purposes.",
  },
  {
    q: "Is the photo facial treatment painful?",
    a: "It is generally comfortable, with a mild warm or snapping sensation during treatment.",
  },
  {
    q: "Does photo facial remove hair?",
    a: "No, photo facial is designed for skin rejuvenation, not hair removal.",
  },
  {
    q: "Are there any side effects of the photofacial treatment?",
    a: "Mild redness or sensitivity may occur but usually resolves quickly.",
  },
  {
    q: "How does intense pulsed light therapy benefit ageing skin?",
    a: "IPL stimulates collagen production, reduces pigmentation, and improves skin texture and tone.",
  },
  {
    q: "What is the cost of the photo facial treatment in Gurgaon?",
    a: "Cost depends on area, sessions, and skin condition. Consultation provides exact pricing.",
  },
  {
    q: "Are photo facial results permanent?",
    a: "Results are long-lasting but require maintenance and proper skincare.",
  },
  {
    q: "Does the photo facial treatment tighten skin?",
    a: "It provides mild tightening by stimulating collagen production.",
  },
  {
    q: "Who is not a good candidate for the photo facial treatment?",
    a: "People with active infections, very sensitive skin, or certain conditions may require evaluation before treatment.",
  },
  {
    q: "What is advanced skin rejuvenation and how does it work?",
    a: "It refers to treatments like IPL and lasers that improve skin by stimulating collagen and targeting pigmentation.",
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

export default function IPLPhotoFacial() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency (though not used further in original)

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META (exactly like HomePage) ==================== */}
      <SEO
        title="IPL Photo Facial Treatment IPL Skin Rejuvenation & Photofacial Gurgaon"
        description="Get clear, glowing skin with Photo Facial Treatment in Delhi & Gurgaon. IPL photofacial for pigmentation, redness & anti-aging at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/skin/photo-facial"
        showSchema={false} // Only home page uses schema
      />
      {/* === PREMIUM IPL PHOTO FACIAL HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.iplphoto || assets.banner}')`,
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
                IPL Photo Facial Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Best IPL Photo Facial Treatment in Delhi & Gurgaon
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Healthy, glowing skin requires more than surface care. Photo Facial Treatment, also known as IPL (Intense Pulsed Light) photorejuvenation, is a non-surgical solution designed to improve skin clarity, tone, and texture using advanced light-based technology. At Satya Skin & Hair Solutions, we offer advanced Photo Facial Treatment in Delhi and Gurgaon, helping patients achieve smoother, brighter, and more youthful-looking skin without downtime.
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
              src={assets.iplphoto}
              alt="IPL Photo Facial Treatment"
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
              Clear Glowing Skin • Pigmentation Reduction • Collagen Boost • Non-Invasive • Quick Results • Natural Rejuvenation • Satya Excellence
            </span>
            <span className="px-12">
              Clear Glowing Skin • Pigmentation Reduction • Collagen Boost • Non-Invasive • Quick Results • Natural Rejuvenation • Satya Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Clear Glowing Skin • Pigmentation Reduction • Collagen Boost • Non-Invasive • Quick Results • Natural Rejuvenation • Satya Excellence
            </span>
            <span className="px-12">
              Clear Glowing Skin • Pigmentation Reduction • Collagen Boost • Non-Invasive • Quick Results • Natural Rejuvenation • Satya Excellence
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

      {/* === What is IPL Photo Facial + How it Works + Video === */}
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
              What Is an IPL Photo Facial Treatment?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, IPL Photo Facial Treatment is performed under expert dermatologist supervision — emphasizing maximum skin rejuvenation, collagen stimulation, and durable, natural glow. Scientifically proven for pigmentation, redness, and early aging.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                IPL Photo facial treatment is a non-invasive skin rejuvenation procedure that uses light energy to target pigmentation, redness, and signs of aging.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                IPL Photofacial works by delivering controlled pulses of light into the skin, targeting melanin and blood vessels, stimulating collagen production, and improving skin tone and texture. The procedure is quick (20–30 minutes) and ideal for individuals seeking visible results without surgery.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Delivering controlled pulses of light into the skin",
                  "Targeting melanin and blood vessels",
                  "Stimulating collagen production",
                  "Improving skin tone and texture",
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

            {/* Central Video Embed - using a placeholder; replace with actual IPL video if available */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFDFDD]/50"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/nvYP8sd6sHA?si=lR9TAFLE7YfHPFI1"
                  title="IPL Photo Facial Treatment Procedure"
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

      {/* === Common Causes & Symptoms === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Common Causes & Symptoms Indicating Need for Photo Facial
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Sun damage and tanning",
              "Aging and collagen loss",
              "Hormonal pigmentation",
              "Acne marks",
              "Environmental pollution",
              "Lifestyle factors like stress and poor skincare",
              "Uneven skin tone",
              "Dark spots or pigmentation",
              "Redness or rosacea",
              "Fine lines and wrinkles",
              "Dull and tired skin",
              "Freckles or sun spots",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-base md:text-xl font-semibold text-[#2B333C]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center md:text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
            Photo facial is recommended for skin concerns caused by the above. For such cases, IPL Photo Facial Treatment Gurgaon & Delhi often provides safer and more radiant outcomes.
          </p>
        </div>
      </section>

      {/* === Benefits Grid === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of Photo Facial
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Improves skin tone and clarity",
                text: "Gives you a visibly brighter and even complexion.",
              },
              {
                title: "Reduces pigmentation and dark spots",
                text: "Targets melanin to fade sun spots, freckles, and melasma.",
              },
              {
                title: "Enhances collagen production",
                text: "Stimulates natural collagen for firmer, youthful skin.",
              },
              {
                title: "Smoothens fine lines and wrinkles",
                text: "Reduces early signs of aging with zero downtime.",
              },
              {
                title: "Reduces redness and vascular issues",
                text: "Calms rosacea and visible blood vessels effectively.",
              },
              {
                title: "Non-surgical with minimal downtime",
                text: "Quick 20–30 minute sessions, back to routine instantly.",
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

      {/* === Side Effects & Recovery === */}
      <section className="py-7 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#9E4A47]">
            Side Effects & What to Expect After Photo Facial Treatment
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                Side Effects of Photo Facial
              </h3>
              <p className="md:text-lg text-[#2B333C]/90">
                Photo facial is generally safe, but mild side effects may include:
              </p>
              <ul className="mt-4 text-left list-disc pl-6 space-y-2 text-[#2B333C]/90">
                <li>Temporary redness</li>
                <li>Slight swelling</li>
                <li>Mild sensitivity</li>
              </ul>
              <p className="mt-4 italic text-[#828D9C]">
                These effects usually resolve within a few hours to a day.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                What to Expect After Treatment?
              </h3>
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                Recovery after Photo Facial Treatment is predictable:
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { time: "Immediate", desc: "Mild redness for a few hours" },
                  { time: "3–7 days", desc: "Gradual improvement in skin tone" },
                  {
                    time: "After 3–5 sessions",
                    desc: "Visible glow and lasting results",
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
                No major downtime • Gradual improvement in skin tone • Visible glow after sessions • How Many Sessions Are Required? — 3–5 sessions for best results • Sessions spaced 3–4 weeks apart • Maintenance sessions recommended
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Cost & Types & Procedure === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Photo Facial Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            The cost of Photo Facial Treatment in Delhi and Gurgaon depends on: Area treated • Number of sessions • Skin condition • Customized protocol. At Satya Skin & Hair Solutions, pricing is transparent and ethical, with no compromise on technology or safety.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Types of Photo Facial in Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            IPL Photo Facial — Most common type using intense pulsed light for pigmentation and rejuvenation.<br />
            LED Photo Facial — Uses different light wavelengths to target acne, inflammation, and glow.<br />
            Laser Photo Rejuvenation — More targeted laser treatment for deeper skin concerns.<br />
            Combination Therapy — Combines IPL with other treatments like peels or PRP for enhanced results.<br />
            Targeted Spot Correction — Focuses on specific pigmentation or vascular lesions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            What Happens During the IPL Photo Facial Procedure at Satya Skin & Hair Solutions
          </h2>
          <div className="space-y-6 md:text-lg text-[#2B333C]/90 ">
            <p>
              <strong>Skin is cleansed</strong> — Thorough cleansing to remove makeup, oil, and impurities.
            </p>
            <p>
              <strong>Cooling gel is applied</strong> — Protective cooling gel is applied for comfort and better light penetration.
            </p>
            <p>
              <strong>Light pulses are delivered using a handheld device</strong> — Controlled IPL pulses target pigmentation and vessels.
            </p>
            <p>
              <strong>Protective eyewear is provided</strong> — Safety eyewear ensures complete eye protection during treatment.
            </p>
            <p>
              <strong>You may feel a mild snapping or warm sensation</strong> — Procedure time: 20–30 minutes. No anesthesia required.
            </p>
            <p>
              <strong>Post-Procedure Care</strong> — Clear aftercare instructions • Sunscreen and gentle skincare • No downtime — resume activities immediately.
            </p>
          </div>
        </div>
      </section>

      {/* === Ideal Candidate + Why Satya === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
            <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
              Who Is an Ideal Candidate?
            </h2>
            <p className="md:text-lg text-[#2B333C]/90">
              Photo facial is suitable for:<br />
              • Individuals with pigmentation or uneven tone<br />
              • Early signs of aging<br />
              • Redness or sun damage<br />
              • People seeking non-invasive treatment
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
            <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
              Why Choose Satya Skin & Hair Solutions?
            </h2>
            <p className="md:text-lg text-[#2B333C]/90">
              • Dermatologist-led treatments<br />
              • Advanced IPL and light-based technologies<br />
              • Customized treatment protocols<br />
              • Safe for Indian skin types<br />
              • Focus on natural, long-term results<br /><br />
              Patients searching for Photo Facial Treatment in Delhi and Gurgaon benefit from expert-guided care and precision.
            </p>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Your IPL Photo Facial Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you want clearer, brighter, and youthful skin without downtime, photo facial treatment is an effective solution.
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