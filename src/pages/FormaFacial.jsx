"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Is Forma facial painful?",
    a: "No, it is painless and feels like a warm facial massage.",
  },
  {
    q: "When will I see results?",
    a: "You may notice immediate tightening, with better results after multiple sessions.",
  },
  {
    q: "Is there any downtime?",
    a: "No, you can resume normal activities immediately.",
  },
  {
    q: "Can Forma replace a facelift?",
    a: "It is a non-surgical alternative for mild to moderate skin laxity, not a replacement for surgery.",
  },
  {
    q: "How long does one session take?",
    a: "Typically 30–45 minutes.",
  },
  {
    q: "Is Forma suitable for all skin types?",
    a: "Yes, it is safe for most skin types.",
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

export default function FormaFacial() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency (though not used further in original)

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META (exactly like HomePage) ==================== */}
      <SEO
        title="Forma Facial Treatment | Non-Surgical Skin Tightening & Lifting Gurgaon"
        description="Get tighter, lifted skin with Forma Facial Treatment in Delhi & Gurgaon. Non-invasive radiofrequency skin tightening for collagen boost and facial contouring."
        canonical="https://satyaskinhair.com/skin/forma-facial"
        showSchema={false} // Only home page uses schema
      />
      {/* === PREMIUM FORMA FACIAL HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.formaFacial || assets.banner}')`,
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
                Forma Facial Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Best Forma Facial Treatment in Delhi & Gurgaon
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              With age, skin gradually loses collagen and elasticity, leading to sagging, dullness, and less defined facial contours. If you are looking for a non-invasive, painless solution, Forma Facial Treatment offers a modern approach to skin tightening and lifting. At Satya Skin & Hair Solutions, we provide advanced Forma facial treatment in Delhi and Gurgaon, designed to improve skin firmness, enhance glow, and redefine facial contours, without downtime.
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
              src={assets.formaFacial}
              alt="Forma Facial Treatment"
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
              Non-Surgical Tightening • Collagen Boost • No Downtime • Natural Lift • Jawline Definition • Instant Glow • Satya Excellence
            </span>
            <span className="px-12">
              Non-Surgical Tightening • Collagen Boost • No Downtime • Natural Lift • Jawline Definition • Instant Glow • Satya Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Non-Surgical Tightening • Collagen Boost • No Downtime • Natural Lift • Jawline Definition • Instant Glow • Satya Excellence
            </span>
            <span className="px-12">
              Non-Surgical Tightening • Collagen Boost • No Downtime • Natural Lift • Jawline Definition • Instant Glow • Satya Excellence
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

      {/* === What is Forma Facial + How it Works + Video === */}
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
              What is Forma Facial Treatment?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, Forma Facial Treatment is performed under expert dermatologist supervision — emphasizing non-surgical skin tightening, collagen stimulation, and natural lifting with zero downtime.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Forma is a non-surgical skin tightening treatment that uses radiofrequency (RF) energy and controlled heat to stimulate collagen production in the deeper layers of the skin.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                In simple terms: A heated device (wand) is moved across the face, gentle heat penetrates the skin, collagen production is stimulated, and skin becomes tighter, smoother, and more lifted. It is often described as a treatment where the skin feels like it is being gently “ironed,” resulting in a visibly lifted and refreshed appearance.
              </p>

              <div className="bg-white/70 p-6 rounded-2xl border border-[#DFDFDD]">
                <p className="font-semibold text-[#9E4A47] mb-3">How Does Forma Facial Work?</p>
                <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  Forma uses radiofrequency energy to heat the dermal layers of the skin, stimulate collagen and elastin production, improve blood circulation, and tighten existing collagen fibers. This leads to skin tightening, improved elasticity, better facial contour, and a natural lifting effect. The process is safe and controlled, making it suitable for regular sessions.
                </p>
              </div>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Heats the dermal layers of the skin",
                  "Stimulates collagen and elastin production",
                  "Improves blood circulation",
                  "Tightens existing collagen fibers",
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
                  src="https://www.youtube.com/embed/zQQBxV3WQRM?si=L50iBqKWEKFmyRWg"
                  title="Forma Facial Treatment Procedure"
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
            What Skin Concerns Does Forma Treat?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Mild to moderate skin laxity",
              "Dull and tired skin",
              "Fine lines and early wrinkles",
              "Sagging jawline",
              "Loss of facial definition",
              "Uneven skin texture",
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
            Benefits of Forma Facial Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Non-invasive and painless",
                text: "No needles, no surgery.",
              },
              {
                title: "No downtime",
                text: "Back to your routine instantly.",
              },
              {
                title: "Immediate glow and tightening",
                text: "Visible results right after the session.",
              },
              {
                title: "Improves skin elasticity",
                text: "Firmer, more youthful skin.",
              },
              {
                title: "Enhances jawline definition",
                text: "Sculpts and contours naturally.",
              },
              {
                title: "Boosts collagen production",
                text: "Long-term skin rejuvenation.",
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
                  <strong>A conductive gel is applied</strong> — Helps RF energy penetrate evenly.
                </p>
                <p>
                  <strong>RF device is moved across the face</strong> — Controlled heat is delivered evenly.
                </p>
                <p>
                  <strong>You will feel a warm, relaxing sensation</strong> — Like a warm facial massage.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                What to Expect After Forma Facial?
              </h3>
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                Recovery after Forma Facial Treatment is predictable:
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { time: "Immediate", desc: "Instant glow" },
                  { time: "Immediate", desc: "Mild tightening effect" },
                  {
                    time: "Immediate",
                    desc: "No redness or downtime",
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
                Patients can resume daily activities immediately • Gradual improvement over sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Sessions + Results Duration + Comparison + Safety === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            How Many Sessions Are Required?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Initial course: 4–6 sessions • Frequency: Weekly or bi-weekly • Maintenance: Once every few months
          </p>
          <p className="mt-6 md:text-lg leading-relaxed text-[#2B333C]/90">
            Results improve progressively with collagen stimulation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            How Long Do Results Last?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Results can last several months depending on age, skin condition, lifestyle, and maintenance sessions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Forma Facial vs Surgical Facelift
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-[#9E4A47]">Forma Facial</p>
              <ul className="mt-4 space-y-3 text-[#2B333C]/90">
                <li className="flex items-start gap-2">• Non-surgical</li>
                <li className="flex items-start gap-2">• None downtime</li>
                <li className="flex items-start gap-2">• Gradual &amp; natural results</li>
                <li className="flex items-start gap-2">• Minimal risk</li>
                <li className="flex items-start gap-2">• Maintenance required</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#9E4A47]">Surgical Facelift</p>
              <ul className="mt-4 space-y-3 text-[#2B333C]/90">
                <li className="flex items-start gap-2">• Surgical</li>
                <li className="flex items-start gap-2">• Weeks downtime</li>
                <li className="flex items-start gap-2">• Immediate results</li>
                <li className="flex items-start gap-2">• Higher risk</li>
                <li className="flex items-start gap-2">• Long-term</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-[#2B333C]/80">Forma is ideal for early signs of aging and prevention.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Is Forma Facial Safe?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Yes, Forma is:<br />
            • FDA-approved technology<br />
            • Non-invasive<br />
            • Safe for all skin types<br />
            • Performed under controlled temperature settings<br /><br />
            When done by trained professionals, it has minimal risk.
          </p>
        </div>
      </section>

      {/* === Ideal Candidate + Cost + Why Satya === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Ideal Candidate */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
            <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
              Who Is an Ideal Candidate?
            </h2>
            <p className="md:text-lg text-[#2B333C]/90">
              Forma is suitable for:<br />
              • Individuals with early skin laxity<br />
              • Those seeking non-surgical lifting<br />
              • People wanting regular skin maintenance<br />
              • Individuals avoiding downtime
            </p>
          </div>

          {/* Cost + Why Satya */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
              <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
                Cost of Forma Facial Treatment in Delhi & Gurgaon
              </h2>
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Cost depends on:<br />
                • Number of sessions<br />
                • Area treated<br />
                • Skin condition<br /><br />
                A personalized consultation provides accurate pricing.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-[#DFDFDD]">
              <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
                Why Choose Satya Skin & Hair Solutions?
              </h2>
              <p className="md:text-lg text-[#2B333C]/90">
                • Dermatologist-supervised treatments<br />
                • Advanced RF technology<br />
                • Customized treatment plans<br />
                • Safe and comfortable procedures<br />
                • Focus on natural results<br /><br />
                Patients searching for Forma facial treatment in Delhi and Gurgaon benefit from structured and medically guided care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Forma Facial Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you want tighter, lifted, and glowing skin without surgery, Forma facial treatment is an effective option.
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