"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "How long does it take for Botox to work?",
    a: "Botox usually starts showing results within 3–5 days, with full results visible in 10–14 days.",
  },
  {
    q: "How long does Botox last?",
    a: "Results typically last between 3 to 6 months, depending on individual factors.",
  },
  {
    q: "What is BOTOX?",
    a: "Botox is a purified protein (botulinum toxin) used to relax muscles and reduce wrinkles.",
  },
  {
    q: "How do wrinkles form?",
    a: "Wrinkles form due to repeated muscle movements, aging, collagen loss, and environmental factors.",
  },
  {
    q: "How does Botox work?",
    a: "Botox blocks nerve signals to muscles, reducing their movement and smoothing the skin above them.",
  },
  {
    q: "Is Botox safe?",
    a: "Yes, Botox is safe when administered by qualified dermatologists in controlled doses.",
  },
  {
    q: "When will the results be visible?",
    a: "Results become noticeable within a few days and peak in about 2 weeks.",
  },
  {
    q: "Is it just one-time affair?",
    a: "No, Botox requires repeat sessions every 3–6 months to maintain results.",
  },
  {
    q: "Are there any contraindications?",
    a: "Botox may not be suitable for pregnant women, certain neurological conditions, or specific medical histories.",
  },
  {
    q: "What about the common myths we hear about Botox?",
    a: "When done correctly, Botox does not freeze your face. It enhances natural expressions while reducing wrinkles.",
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

export default function BotoxTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency (though not used further in original)

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META (exactly like HomePage) ==================== */}
      <SEO
        title="Botox Treatment in Delhi | Best Botox Injection Doctors in Gurgaon"
        description="Get safe and natural Botox treatment in Delhi & Gurgaon. Reduce wrinkles, fine lines & treat medical conditions with expert dermatologists."
        canonical="https://satyaskinhair.com/skin/botox"
        showSchema={false} // Only home page uses schema
      />
      {/* === PREMIUM BOTOX HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.botox || assets.banner}')`,
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
                Botox Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Best Botox Treatment in Delhi & Gurgaon
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Aging, stress, and repetitive facial movements lead to the formation of wrinkles and fine lines, especially on the forehead, around the eyes, and between the brows. Botox treatment is one of the most effective non-surgical solutions to relax these lines and restore a smoother appearance. At Satya Skin & Hair Solutions, we provide advanced Botox treatment in Delhi and Gurgaon, performed by experienced dermatologists focusing on natural-looking results.
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
              src={assets.botox}
              alt="Botox Treatment"
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
              Natural Results • Wrinkle Reduction • Muscle Relaxation • No Downtime • Precise Dosing • Facial Harmony • Satya Excellence
            </span>
            <span className="px-12">
              Natural Results • Wrinkle Reduction • Muscle Relaxation • No Downtime • Precise Dosing • Facial Harmony • Satya Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Natural Results • Wrinkle Reduction • Muscle Relaxation • No Downtime • Precise Dosing • Facial Harmony • Satya Excellence
            </span>
            <span className="px-12">
              Natural Results • Wrinkle Reduction • Muscle Relaxation • No Downtime • Precise Dosing • Facial Harmony • Satya Excellence
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
              Ethical, patient-centric protocols — balancing safety, precision, natural results, and long-term facial harmony.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is Botox + How it Works + Areas + Video === */}
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
              What Is Botox Treatment?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, Botox Treatment is performed under expert dermatologist supervision — emphasizing natural-looking results, precise dosing, and long-term facial harmony.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Botox is a purified form of botulinum toxin type A used in very small, controlled doses for medical and aesthetic purposes. In cosmetic dermatology, Botox works by temporarily relaxing targeted facial muscles that cause dynamic wrinkles.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                This relaxation allows the skin overlying those muscles to appear smoother. Botox does not fill the skin; instead, it reduces muscle activity that contributes to wrinkle formation.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Why People Choose Botox Treatment? People choose Botox treatment to soften wrinkles caused by facial expressions such as frowning, squinting, or raising eyebrows. Common search queries include Botox for wrinkles, anti-wrinkle injections, and Botox face treatment. Botox is preferred because it is minimally invasive, requires no surgery, and has predictable, gradual effects when performed correctly.
              </p>

              <div>
                <p className="font-semibold text-[#9E4A47] mb-3">Which Facial Areas Can Be Treated With Botox?</p>
                <ul className="grid sm:grid-cols-2 gap-3 text-base md:text-lg text-[#2B333C]/90">
                  <li className="flex items-start gap-2">• Forehead lines</li>
                  <li className="flex items-start gap-2">• Frown lines between the eyebrows</li>
                  <li className="flex items-start gap-2">• Crow’s feet around the eyes</li>
                  <li className="flex items-start gap-2">• Bunny lines on the nose</li>
                  <li className="flex items-start gap-2">• Jawline or masseter muscles (selected cases)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 p-6 rounded-2xl border border-[#9E4A47]/20">
                <p className="font-semibold text-[#9E4A47] mb-3">Botox vs Dermal Fillers – Understanding the Difference</p>
                <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                  Many people confuse Botox with fillers. Botox relaxes muscles to reduce expression lines, while fillers add volume to areas with structural loss. Botox is ideal for dynamic wrinkles, while fillers address volume-related concerns. At Satya Skin & Hair Solutions, treatment choice is based on facial anatomy and movement patterns, not trends.
                </p>
              </div>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Temporarily relaxes targeted facial muscles",
                  "Reduces dynamic wrinkles",
                  "Minimally invasive with no surgery",
                  "Predictable and natural-looking results",
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
                  src="https://www.youtube.com/embed/d0NUXfK5I5g?si=dD7ip7o7HndVdv_S"
                  title="Botox Treatment Procedure"
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

      {/* === Procedure + Consultation + What to Expect === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Consultation, Procedure & What to Expect After Botox Treatment
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Consultation & Procedure */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-6">
                Consultation and Facial Assessment + How Botox Treatment Is Performed
              </h3>
              <div className="space-y-6 md:text-lg text-[#2B333C]/90">
                <p>
                  Every Botox treatment begins with a detailed facial assessment. Muscle strength, facial symmetry, expression patterns, and skin condition are evaluated before planning injections.
                </p>
                <p>
                  Botox treatment is performed in a clinical setting using fine needles. Small amounts of Botox are injected into specific muscles based on facial mapping. The procedure typically takes a short time. Most patients describe minimal discomfort. No general anaesthesia is required, and patients can usually resume normal activities soon after.
                </p>
              </div>
            </div>

            {/* Aftercare & Results Timing */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-6">
                What to Expect After Botox Treatment + When Do Results Become Visible?
              </h3>
              <div className="space-y-6 md:text-lg text-[#2B333C]/90">
                <p>
                  After Botox treatment, mild redness or tiny injection marks may be visible and usually settle within a few hours. Bruising is uncommon but can occur in some individuals. Patients are advised to avoid rubbing the treated area and to follow simple post-treatment instructions to support optimal results.
                </p>
                <p>
                  Botox does not work instantly. Results typically begin to appear within a few days and continue to develop over one to two weeks. Wrinkles gradually soften as muscle activity reduces. This gradual onset is why Botox results look natural when planned correctly.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-[#FCEBDE]/40 p-8 rounded-3xl text-center">
            <div className="md:text-3xl font-bold text-[#9E4A47] mb-2">How Long Do Botox Results Last?</div>
            <p className="md:text-lg text-[#2B333C]/90">
              Botox effects are temporary. Muscle relaxation typically lasts for several months, after which muscle activity gradually returns. Duration varies depending on muscle strength, treatment area, and individual metabolism. Repeat treatments are planned conservatively.
            </p>
          </div>
        </div>
      </section>

      {/* === Preventive + Men/Women + Safety + Natural Expressions === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Preventive Botox • Safety • Natural Results
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Botox for Preventive Ageing",
                text: "Some individuals seek Botox for preventive purposes to reduce the formation of deep expression lines over time. Preventive Botox uses lower doses and focuses on muscle relaxation rather than visible wrinkle correction. This approach is discussed carefully during consultation to ensure it aligns with facial dynamics and patient expectations.",
              },
              {
                title: "Botox Treatment for Men and Women",
                text: "Botox treatment is suitable for both men and women. Men often require different dosing due to stronger facial muscles. Treatment planning considers facial structure and muscle strength rather than a one-size-fits-all approach.",
              },
              {
                title: "Safety and Side Effects of Botox Treatment",
                text: "Botox is considered safe when administered by a trained medical professional. Temporary side effects may include mild swelling, redness, or headache. Rare side effects such as drooping can occur if Botox is improperly placed. This is why precise technique and anatomical knowledge are essential.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#828D9C] leading-relaxed ">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                Botox and Natural Facial Expressions
              </h3>
              <p className="md:text-lg text-[#2B333C]/90">
                A common concern is whether Botox will make the face look frozen. When planned conservatively, Botox softens wrinkles while preserving natural movement. At Satya Skin & Hair Solutions, the goal is facial harmony and subtle improvement, not stiffness or loss of expression.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                Who May Not Be Suitable for Botox Treatment?
              </h3>
              <p className="md:text-lg text-[#2B333C]/90">
                Botox may not be recommended for individuals with certain neuromuscular conditions, active skin infections at injection sites, or unrealistic expectations. A medical consultation helps determine suitability and ensures patient safety.
              </p>
              <p className="mt-6 md:text-lg text-[#2B333C]/90">
                Botox primarily affects muscle activity, not skin texture. For concerns like pigmentation, scars, or skin laxity, other treatments may be recommended alongside or instead of Botox.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Additional Insights + Why Satya === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Botox Before and After Expectations + Botox vs Home Remedies or Creams
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            People searching for Botox before and after images should understand that results vary. Botox softens lines rather than erasing all wrinkles completely. The aim is refreshed, relaxed appearance rather than dramatic change. Realistic expectations lead to higher satisfaction.<br /><br />
            Topical creams cannot relax facial muscles. While skincare improves skin health, it cannot replicate the effect of Botox on expression lines. This is why Botox remains a preferred medical option for dynamic wrinkles.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Long-Term Planning With Botox Treatment
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Botox is most effective when used as part of a long-term facial ageing strategy. Overuse or frequent high-dose treatments can alter facial balance. At Satya Skin & Hair Solutions, long-term planning ensures results remain natural as facial structure changes with age.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Choose Satya Skin & Hair Solutions for Botox Treatment in Gurgaon?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            People searching for the best Botox treatment in Gurgaon often prioritise safety, experience, and natural results. At Satya Skin & Hair Solutions, Botox treatments are performed with medical oversight, conservative dosing, and personalised facial assessment to ensure subtle, balanced outcomes.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Your Botox Treatment Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            Botox treatment is a medical aesthetic procedure that requires proper assessment and planning. A consultation helps determine suitability, treatment areas, and expected outcomes. If you are considering Botox treatment in Delhi & Gurgaon, a doctor-led consultation at Satya Skin & Hair Solutions ensures clarity, safety, and informed decision-making.
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