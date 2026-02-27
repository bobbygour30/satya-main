"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is HIFU Treatment, and how does it work?",
    a: "Targeting the subdermal layer, HIFU Treatment breaks through deep into the skin using concentrated ultrasonic radiation. This procedure promotes collagen generation and helps break down fat cells, so producing tighter, more young skin.",
  },
  {
    q: "Is HIFU Treatment safe?",
    a: "Yes, for most people HIFU is regarded as safe. It is a great substitute for surgical choices since it is a non-invasive operation with few dangers and adverse effects.",
  },
  {
    q: "How long does a HIFU session take?",
    a: "The areas being treated will affect the length of HIFU treatment; usually, it runs between 30 and 90 minutes.",
  },
  {
    q: "What results can I expect from HIFU Treatment?",
    a: "Patients can expect to see noticeable improvements in skin tightness, reduced wrinkles, and enhanced facial contours. The results may continue to improve over several months as collagen production increases.",
  },
  {
    q: "How many sessions of HIFU Treatment will I need?",
    a: "Individual skin conditions and goals affect the required number of treatments. Expert advice can come via a consultation.",
  },
  {
    q: "Can HIFU Treatment be used to contour the jawline?",
    a: "Without surgery, HIFU does indeed efficiently tighten and raise drooping skin under the jawline, thereby enhancing facial contour.",
  },
  {
    q: "How soon can I see results after a HIFU treatment session?",
    a: "While some patients show first benefits in a few days, optimal outcomes usually show up two to three months following the therapy as collagen accumulates.",
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

export default function HIFUTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM HIFU HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.hifubanners || assets.banner}')`,
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
              <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-[#0E3A43]">
                HIFU Treatment in Gurugram <br /> and Delhi NCR: Revolutionizing <br /> Skin Tightening
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold mt-2">
                Non-Invasive Skin Rejuvenation
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              HIFU Treatment (High-Intensity Focused Ultrasound) is quickly becoming a leading choice for skin rejuvenation, offering non-invasive solutions for sagging skin and wrinkles. With clinics specializing in HIFU Treatment in Gurugram and HIFU Treatment in Delhi, this innovative technique is easily accessible for those looking to enhance their appearance without undergoing surgery.
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
              src={assets.hifubanners   }
              alt="HIFU Treatment"
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
              Non-Invasive • Long-Lasting Results • Safe for All Skin Types • Minimal Downtime • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Non-Invasive • Long-Lasting Results • Safe for All Skin Types • Minimal Downtime • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Non-Invasive • Long-Lasting Results • Safe for All Skin Types • Minimal Downtime • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Non-Invasive • Long-Lasting Results • Safe for All Skin Types • Minimal Downtime • Satya Skin & Hair Solutions
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
              At Satya Skin & Hair Solutions, our expert doctors specialize in
              advanced HIFU treatments across Gurugram and Delhi NCR. We
              ensure non-invasive rejuvenation, long-lasting tightening, and personalized care without shortcuts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is HIFU Treatment Section */}
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
              What is HIFU Treatment?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              The subdermal layers of the skin allow concentrated ultrasonic waves utilized in HIFU treatment passage. By delivering energy deep into the skin and thereby stimulating collagen formation, HIFU not only eliminates extra fat but also improves tightness and a younger-looking complexion. This operation is extremely effective and a good replacement for traditional surgical facelifts for people displaying early signs of aging.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Patients can gain a number of benefits when seeking HIFU Treatment in Delhi or Gurugram: Non-Invasive Procedure: Unlike surgical options, HIFU requires no incisions, making it a safer alternative with minimal downtime. Quick and Painless: The treatment can be completed in as little as thirty minutes, allowing patients to resume their daily activities free from disruption. Cost-Effective: HIFU treatment provides a competitively cost substitute for those seeking long-term effects as compared to other skin treatments.
              </p>

              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                HIFU Treatment offers a multitude of aesthetic benefits: Skin Tightening: Get a clearly tighter and raised look on the face, neck, and décolletage. Wrinkle Reduction: Experience a marked reduction in fine lines and wrinkles as collagen generation is boosted. Versatile Applications: HIFU can treat various body areas, including the abdomen, arms, inner thighs, and neck. Long-Lasting Results: HIFU treatment is a deserving investment since its benefits could last for up to a year or more.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Non-invasive tightening",
                  "Collagen stimulation",
                  "Wrinkle reduction",
                  "Versatile body areas",
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
                When performed correctly, HIFU Treatment delivers really natural results
                that last a very long time — so you can feel confident and happy
                with your appearance for years to come.
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
                  src="https://www.youtube.com/embed/4qS3Oa8q4k4"
                  title="HIFU Treatment Procedure"
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
            Benefits of HIFU Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skin Tightening",
                text: "Get a clearly tighter and raised look on the face, neck, and décolletage.",
              },
              {
                title: "Wrinkle Reduction",
                text: "Experience a marked reduction in fine lines and wrinkles as collagen generation is boosted.",
              },
              {
                title: "Versatile Applications",
                text: "HIFU can treat various body areas, including the abdomen, arms, inner thighs, and neck.",
              },
              {
                title: "Long-Lasting Results",
                text: "HIFU treatment is a deserving investment since its benefits could last for up to a year or more.",
              },
              {
                title: "Non-Invasive & Minimal Downtime",
                text: "No incisions required; resume activities immediately after treatment.",
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
              What to Expect During HIFU Treatment
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions, patient safety and long-term
              outcomes come first. Here is what to expect during an HIFU treatment in Gurugram.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Consultation",
                text: "See a qualified professional to talk over your objectives and ascertain whether HIFU is suitable for you.",
              },
              {
                title: "Preparation",
                text: "Make sure on the day of the treatment your skin is clean of makeup and skincare products.",
              },
              {
                title: "Procedure Steps",
                text: "The assigned region is cleaned, and subsequently, a topical anesthetic is placed there to help with pain. An ultrasonic gel helps to simplify device mobility. The HIFU device is set to the appropriate settings and ultrasonic energy is administered to the skin.",
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
            Aftercare Following HIFU Treatment
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            After undergoing HIFU Treatment, consider the following care tips: Ice Packs: The HIFU device is set to the appropriate settings and ultrasonic energy is administered to the skin. Avoid Sun Exposure: Steer clear of the sun to avoid aggravation or harm to your skin. Healthy Lifestyle Choices: Making wise lifestyle decisions will enable you to improve: avoid smoking and have a balanced diet. Sleep Position: Sleeping should make you raise your head to help with edema control.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "Immediate", desc: "Minimal downtime; resume activities" },
              { time: "2–3 Months", desc: "Optimal collagen build-up" },
              { time: "12–18 Months", desc: "Long-lasting results" },
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
            Visiting Satya Skin & Hair Solutions on a regular basis is really
            helpful. You get to check if you are healing properly and if your
            skin is improving the way it should — this follow-up is very important
            for achieving the best results.
          </p>
        </div>
      </section>

      {/* Cost & Truth */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            HIFU Treatment Cost
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            One of the biggest benefits of HIFU treatment is its affordability; prices usually start at INR 20,000. Still, additional factors can influence the whole cost, including: The area under therapy. The therapy session frequency and degree. The clinic's reputation and expertise. Anesthesia-related expenses and facility utilization. Many people looking for skin rejuvenation now prefer HIFU because of its efficiency and lower cost than conventional skin treatments.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About HIFU Treatment
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            HIFU is not suitable for everyone. For severe sagging or advanced aging, surgical options may be more effective. Choosing HIFU without proper evaluation can lead to suboptimal results. Medically supervised treatment with realistic expectations is essential.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book Your HIFU Treatment Consultation
          </h2>
          <p className="md:text-xl opacity-90">
            For those looking for potent skin tightening and rejuvenation, HIFU treatment is revolutionary. More people in Gurugram and Delhi are choosing this creative operation given its non-invasive character, cost, and long-lasting effects. See a competent specialist immediately to discuss the advantages of HIFU treatment and start your path to young skin!
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