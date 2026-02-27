"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do laser hair combs really work?",
    a: "Yes, they can be effective for early-stage hair thinning when follicles are still active. Results vary based on individual condition and consistency.",
  },
  {
    q: "What is Laser Comb treatment?",
    a: "It is a low-level laser therapy that uses red light energy to stimulate hair follicles and encourage growth.",
  },
  {
    q: "How long do laser combs last?",
    a: "Most devices last several years with proper use and maintenance.",
  },
  {
    q: "Are laser combs FDA-approved?",
    a: "Many laser comb devices are FDA-cleared for hair regrowth treatment.",
  },
  {
    q: "Can laser thicken hair?",
    a: "Yes, it may improve hair thickness by stimulating weakened follicles.",
  },
  {
    q: "Can laser increase hair?",
    a: "It may promote regrowth in thinning areas but cannot create new follicles in completely bald zones.",
  },
  {
    q: "Is LaserComb good for hair growth?",
    a: "It is beneficial in early-stage thinning and diffuse hair loss.",
  },
  {
    q: "What are the benefits of using a laser comb for hair growth?",
    a: "It is painless, non-invasive, time-efficient, safe, and can improve hair density gradually.",
  },
  {
    q: "How to use a laser comb for hair growth effectively?",
    a: "Use it as instructed by your specialist, typically moving it slowly across thinning areas several times per week.",
  },
  {
    q: "How long until I see results from laser comb treatment?",
    a: "Reduced shedding may be noticed within weeks, while visible regrowth typically appears after 3–6 months.",
  },
  {
    q: "Is laser comb therapy suitable for everyone?",
    a: "It works best for early thinning. It may not help advanced baldness.",
  },
  {
    q: "How often should I use my hair regrowth laser comb?",
    a: "Usage usually ranges from 2–3 times per week, depending on medical advice.",
  },
  {
    q: "Can I combine laser comb therapy with other treatments?",
    a: "Yes, it can be combined with medications or PRP under medical supervision.",
  },
  {
    q: "Where can I find the best laser comb for hair growth in India?",
    a: "Consult a qualified hair specialist to choose a medically approved device.",
  },
  {
    q: "Is Laser Comb Therapy effective for all types of hair loss?",
    a: "It is most effective for androgenetic alopecia and diffuse thinning, not scarring alopecia.",
  },
  {
    q: "How does laser comb therapy compare to other hair loss treatments?",
    a: "It is less invasive than surgery and less aggressive than medications but also provides gradual results.",
  },
  {
    q: "Can laser comb therapy help prevent hair loss?",
    a: "It may help slow progression in early-stage thinning.",
  },
  {
    q: "What should I consider when buying a laser comb for hair growth?",
    a: "Ensure FDA clearance, correct wavelength range, and medical consultation before purchase.",
  },
  {
    q: "Is there an age limit for using a laser hair growth comb?",
    a: "There is no strict age limit, but suitability depends on hair condition.",
  },
  {
    q: "How long does each laser comb treatment session take?",
    a: "Typically 8–15 minutes per session.",
  },
  {
    q: "Do I need to continue using a laser comb after my hair growth goals are achieved?",
    a: "Maintenance sessions may be needed to sustain results.",
  },
  {
    q: "Are laser combs suitable for sensitive scalps?",
    a: "Yes, since they use low-level laser energy and are generally well tolerated.",
  },
  {
    q: "Can laser comb therapy be used alongside hair transplants?",
    a: "Yes, it may support transplanted hair growth when advised by a surgeon.",
  },
  {
    q: "What results should I realistically expect from laser comb therapy?",
    a: "Reduced shedding and gradual thickening, not dramatic regrowth in bald areas.",
  },
  {
    q: "How can I maximize the effectiveness of my laser comb treatment?",
    a: "Consistency, early intervention, proper scalp care, and medical supervision improve outcomes.",
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

export default function LaserCombTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM LASER COMB HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-left bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.lasercombbanners}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full  grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
           

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Laser Comb Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                for Early Hair Thinning & Regrowth Support
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Hair thinning and early-stage hair loss are common concerns among both men and women. One of the non-invasive and painless technologies gaining attention is Laser Comb Treatment, a form of low-level laser therapy (LLLT) designed to stimulate weakened hair follicles. At Satya Skin & Hair Solutions, Laser Comb Therapy is offered as a supportive solution for early hair thinning, especially in cases of Androgenetic Alopecia, where hair loss begins from the frontal hairline, crown, or temples.
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
              src={assets.lasercombbanners}
              alt="Laser Comb Treatment"
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
              Non-Invasive Therapy • Painless Sessions • Early Thinning Support • FDA Cleared • Gradual Regrowth • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Non-Invasive Therapy • Painless Sessions • Early Thinning Support • FDA Cleared • Gradual Regrowth • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Non-Invasive Therapy • Painless Sessions • Early Thinning Support • FDA Cleared • Gradual Regrowth • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Non-Invasive Therapy • Painless Sessions • Early Thinning Support • FDA Cleared • Gradual Regrowth • Satya Skin & Hair Solutions
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
              At Satya Skin & Hair Solutions we work with Dr. Shail Gupta to do Laser Comb treatments. We do these Laser Comb treatments in Gurugram and Delhi NCR. When we do Laser Comb treatments we make sure to use proper protocols. We also want the treatments to be safe and effective. We do not take shortcuts when we do Laser Comb treatments, at Satya Skin & Hair Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Laser Comb Section */}
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
              What is Laser Comb Treatment?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Laser Comb Treatment uses low-level laser light to stimulate hair follicles and promote hair growth. The device emits controlled red light energy that penetrates the scalp without causing heat damage. The treatment creates a process called photo-biostimulation, where light energy activates cellular activity in hair follicles — similar to how plants respond to sunlight. It is particularly effective in: • Early male pattern baldness • Female pattern hair thinning • Diffuse thinning • Recently started hair loss.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Laser comb therapy works best when: • Hair loss is in early stages • Hair follicles are still active • Thinning is present but not complete baldness • Scalp feels dry or mildly sensitive • There is recent increase in shedding. It is not effective in: • Long-standing bald patches • Completely inactive follicles. Early consultation increases success rates. Before starting laser comb therapy, proper diagnosis is important. A hair specialist evaluates: • Pattern of hair loss • Stage of baldness • Donor health • Underlying medical causes. At Satya Skin & Hair Solutions, evaluation ensures that Laser Comb Treatment in Delhi & Gurgaon is recommended only when clinically appropriate.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Non-invasive & painless",
                  "Stimulates active follicles",
                  "Supports early thinning",
                  "Safe for home use",
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
                When performed correctly, Laser Comb delivers gradual, supportive results that enhance hair health — so you can feel confident with consistent care.
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
                  src="https://www.youtube.com/embed/0RGEyYNOCCI"
                  title="Laser Comb Treatment Procedure"
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
            Benefits of Laser Comb Therapy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Painless & Non-Invasive",
                text: "No discomfort or downtime — sessions are quick and can be done at home.",
              },
              {
                title: "Improved Circulation",
                text: "Enhances blood flow to the scalp, nourishing follicles for healthier growth.",
              },
              {
                title: "Reduced Shedding",
                text: "Helps minimize hair fall and supports longer growth phases.",
              },
              {
                title: "Thicker Hair Over Time",
                text: "Promotes denser, stronger hair in treated areas with consistent use.",
              },
              {
                title: "Safe & Affordable",
                text: "FDA-cleared devices with no major side effects, more cost-effective than surgery.",
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
              How Does Laser Comb Therapy Work?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions, patient safety and long-term outcomes come first. Here is what to expect during a Laser Comb treatment in Gurugram.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Consultation & Evaluation",
                text: "A detailed assessment is done to evaluate pattern of hair loss, stage of baldness, donor health, and underlying medical causes.",
              },
              {
                title: "Device Selection",
                text: "FDA-cleared laser comb device is selected based on your specific needs and scalp condition.",
              },
              {
                title: "Treatment Initiation",
                text: "The device emits red light (630–670 nm) that penetrates the scalp without heating it.",
              },
              {
                title: "Photo-Biostimulation",
                text: "Light energy is absorbed by chromophores in cells, increasing cellular metabolism and blood circulation.",
              },
              {
                title: "Follicle Nourishment",
                text: "Hair follicles receive better nourishment, encouraging them to stay longer in the growth phase.",
              },
              {
                title: "Session Completion",
                text: "Each session is painless and takes 8–15 minutes, with no downtime required.",
              },
              {
                title: "Post-Treatment Care",
                text: "Detailed usage instructions are provided. Follow-up is scheduled to monitor progress.",
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
            Does Laser Comb Therapy Really Work?
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Laser comb therapy has shown promising results in early hair thinning. It works best for diffuse thinning and early pattern baldness. It may not be effective for advanced baldness with inactive follicles.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "2–3 weeks", desc: "Reduced hair shedding" },
              { time: "12–26 weeks", desc: "Visible improvement in regrowth" },
              { time: "6 months", desc: "Noticeable density improvement" },
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
            Visiting Satya Skin & Hair Solutions on a regular basis is really helpful. You get to check if you are healing properly and if your hair is growing the way it should — this follow-up is very important for achieving the best results.
          </p>
        </div>
      </section>

      {/* Cost & Truth */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About Laser Comb Therapy
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Laser comb therapy is a supportive, non-surgical option best for early-stage hair thinning. It stimulates active follicles but cannot revive completely inactive ones or treat advanced baldness. Clear expectations and consistent use are essential for realistic outcomes. Always consult a specialist for personalized advice.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book Laser Comb Treatment Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you are experiencing early-stage thinning and want a non-surgical option, Laser Comb Therapy may be considered after proper evaluation.
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