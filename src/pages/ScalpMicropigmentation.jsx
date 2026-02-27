"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does scalp micropigmentation cost?",
    a: "Cost varies based on area size and sessions required.",
  },
  {
    q: "How much does scalp micropigmentation cost?",
    a: "In India, it generally ranges between ₹15,000 and ₹80,000.",
  },
  {
    q: "How much does scalp cost in India?",
    a: "The price depends on coverage area and clinic expertise.",
  },
  {
    q: "How much does scalp micropigmentation cost in Delhi?",
    a: "Pricing depends on treatment complexity and clinic standards.",
  },
  {
    q: "What is scalp micropigmentation (SMP)?",
    a: "A non-surgical cosmetic procedure that deposits pigment to mimic hair follicles.",
  },
  {
    q: "Who can benefit from scalp micropigmentation?",
    a: "Individuals with baldness, thinning hair, scars, or alopecia.",
  },
  {
    q: "What are the benefits of scalp micropigmentation?",
    a: "Non-surgical, low maintenance, affordable, and natural-looking.",
  },
  {
    q: "How long does the SMP procedure take?",
    a: "Each session may take up to 4–5 hours.",
  },
  {
    q: "Can scalp micropigmentation hide hair transplant scars?",
    a: "Yes, SMP effectively camouflages transplant scars.",
  },
  {
    q: "Why choose Satya Skin and Hair Solutions for SMP?",
    a: "Customized design, medical supervision, advanced techniques, and patient-focused care.",
  },
  {
    q: "Does SMP require aftercare?",
    a: "Yes, basic scalp hygiene and sun protection are advised.",
  },
  {
    q: "Is scalp micropigmentation reversible?",
    a: "While long-lasting, fading occurs gradually; removal requires laser tattoo removal.",
  },
  {
    q: "Can SMP be combined with a hair transplant?",
    a: "Yes, it can enhance density and camouflage scars.",
  },
  {
    q: "How do I maintain my scalp micropigmentation?",
    a: "Protect from sun exposure and follow scalp care instructions.",
  },
  {
    q: "Is SMP suitable for women with thinning hair?",
    a: "Yes, it can reduce scalp visibility in diffuse thinning.",
  },
  {
    q: "How soon can I return to work after SMP?",
    a: "Most patients resume work immediately.",
  },
  {
    q: "Does SMP affect hair growth?",
    a: "No, it does not affect natural hair growth.",
  },
  {
    q: "Is SMP a good option for alopecia patients?",
    a: "Yes, especially in non-scarring alopecia types.",
  },
  {
    q: "Will SMP fade over time?",
    a: "Yes, gradual fading may occur over years.",
  },
  {
    q: "Can I wash my scalp after SMP?",
    a: "Gentle washing is allowed after initial recovery period.",
  },
  {
    q: "How many sessions are needed for optimal results?",
    a: "Typically 2–3 sessions.",
  },
  {
    q: "What is the ideal candidate for SMP?",
    a: "Individuals with hair thinning, baldness, or scars seeking non-surgical enhancement.",
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

export default function ScalpMicropigmentation() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM SMP HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.scalpbanners}')`,
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Scalp Micropigmentation (SMP)
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                A Non-Surgical Solution for Hair Loss
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Hair loss affects confidence at every age. Whether due to genetic baldness, alopecia, scarring, or thinning hair, many individuals seek a solution that is effective yet non-surgical. Scalp Micropigmentation (SMP) has emerged as an innovative cosmetic technique that creates the appearance of fuller hair using advanced pigment application. At Satya Skin & Hair Solutions, we provide professional Scalp Micropigmentation treatment in Delhi and Gurgaon, customized to match hair color, density, and natural hairline design.
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
              src={assets.scalpbanners}
              alt="Scalp Micropigmentation"
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
              Non-Surgical • Natural Illusion • Scar Camouflage • Long-Lasting • Confidence Boost • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Non-Surgical • Natural Illusion • Scar Camouflage • Long-Lasting • Confidence Boost • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Non-Surgical • Natural Illusion • Scar Camouflage • Long-Lasting • Confidence Boost • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Non-Surgical • Natural Illusion • Scar Camouflage • Long-Lasting • Confidence Boost • Satya Skin & Hair Solutions
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
              At Satya Skin & Hair Solutions we work with Dr. Shail Gupta to do Scalp Micropigmentation treatments. We do these SMP treatments in Gurugram and Delhi NCR. When we do SMP treatments we make sure to use proper protocols. We also want the treatments to be safe and effective. We do not take shortcuts when we do SMP treatments, at Satya Skin & Hair Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is SMP Section */}
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
              What is Scalp Micropigmentation (SMP)?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Scalp Micropigmentation is a specialized cosmetic procedure where micro-pigment dots (less than 1mm) are deposited into the scalp using specially designed needles. These pigments replicate the look of natural hair follicles. Often referred to as a “hair tattoo,” SMP creates: • The illusion of shaved-head density • The appearance of thicker hair • Camouflage for thinning areas • Coverage for scalp scars. It is not a hair growth treatment but a visual enhancement technique.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                SMP is suitable for individuals dealing with: • Male pattern baldness • Female pattern thinning • Alopecia Areata • Scarring alopecia • Post-hair transplant scars • Chemotherapy-induced hair loss • Hormonal hair thinning. It is especially helpful when follicles are inactive and regrowth is unlikely. SMP involves placing medical-grade pigments into the upper dermal layer of the scalp. The pigments are retained by dermal macrophages and fibroblast cells, helping achieve long-lasting results. The procedure mimics: • Natural follicle size • Natural hairline gradients • Proper pigment depth • Realistic hair density. Precision in dot size, angle, and spacing ensures a natural finish.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Non-surgical enhancement",
                  "Scar camouflage",
                  "Custom hairline design",
                  "Immediate results",
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
                When performed correctly, SMP delivers immediate, natural-looking results that restore confidence — so you can feel renewed without surgery.
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
                  src="https://www.youtube.com/embed/vFkuEyCtHhA"
                  title="Scalp Micropigmentation Procedure"
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
            Benefits of Scalp Micropigmentation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Non-Surgical & Immediate",
                text: "Provides instant visual improvement without surgery or downtime.",
              },
              {
                title: "Low Maintenance",
                text: "Minimal aftercare required for long-lasting, natural-looking results.",
              },
              {
                title: "Cost-Effective",
                text: "More affordable than hair transplants with no donor site limitations.",
              },
              {
                title: "Versatile for All",
                text: "Suitable for men and women with various hair loss causes.",
              },
              {
                title: "Scar Camouflage",
                text: "Effectively hides transplant scars or other scalp imperfections.",
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
              The SMP Procedure at Satya Skin & Hair Solutions
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions, patient safety and long-term outcomes come first. Here is what to expect during an SMP treatment in Gurugram.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Consultation & Hairline Planning",
                text: "Assessment of scalp condition • Discussion of expectations • Hairline design customization. A detailed assessment is done to evaluate suitability.",
              },
              {
                title: "Scalp Preparation",
                text: "Scalp cleansing • Optional local anesthetic for sensitive individuals to ensure comfort.",
              },
              {
                title: "Pigment Selection",
                text: "Medical-grade pigments are selected to match hair color and skin tone for natural blending.",
              },
              {
                title: "Microdot Application",
                text: "Microdots (less than 1mm) are placed using specialized needles into the upper dermal layer.",
              },
              {
                title: "Layering for Density",
                text: "Multiple layers are applied to achieve realistic hair density and natural gradients.",
              },
              {
                title: "Session Review",
                text: "The treated area is reviewed for precision and natural appearance.",
              },
              {
                title: "Post-Operative Care",
                text: "Detailed aftercare instructions are provided, including mild shampoos and sun protection. Follow-up touch-up is scheduled after 10–14 days.",
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
            Recovery & Aftercare: How Long Does Scalp Micropigmentation Last?
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            One major advantage of SMP is minimal downtime. Patients can typically resume routine activities immediately. Aftercare recommendations include: • Using mild shampoos • Avoiding excessive sweating initially • Avoiding saunas and swimming temporarily • Protecting scalp from direct sun exposure. Proper aftercare ensures longer-lasting pigment retention. Typically, SMP lasts 4 to 6 years. Over time, pigment may gradually fade, and touch-up sessions can restore vibrancy. Longevity depends on: • Skin type • Sun exposure • Aftercare compliance • Pigment quality.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "Immediate", desc: "Visual improvement" },
              { time: "10–14 days", desc: "Touch-up session" },
              { time: "4–6 years", desc: "Pigment longevity" },
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
            Visiting Satya Skin & Hair Solutions on a regular basis is really helpful. You get to check if you are healing properly and if your results are maintaining the way they should — this follow-up is very important for achieving the best results.
          </p>
        </div>
      </section>

      {/* Cost & Truth */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Scalp Micropigmentation Cost in India
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            SMP cost in India generally ranges between ₹15,000 to ₹80,000, depending on: • Size of treatment area • Scar coverage requirements • Density level desired • Number of sessions. It is often more affordable than surgical hair restoration. Personalized consultation ensures appropriate treatment planning.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About Scalp Micropigmentation
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            SMP is generally safe, but considerations include: • Possible allergic reaction to pigments • Infection risk if sterilization standards are not followed • Rare dissatisfaction with aesthetic outcome • Temporary sun sensitivity. Individuals prone to keloids or severe allergies should consult before proceeding. Can SMP Be Combined with Hair Transplant? Yes. SMP can: • Add visual density after transplant • Camouflage FUT linear scars • Enhance crown appearance • Improve overall aesthetic finish. Combination planning enhances outcomes. Clear expectations are essential before starting.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book Scalp Micropigmentation Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you want the appearance of fuller hair without surgery, Scalp Micropigmentation may be a suitable option.
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