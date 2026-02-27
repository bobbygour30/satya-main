"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is PRP treatment for hair fall?",
    a: "PRP (Platelet Rich Plasma) is a non-surgical hair treatment where your own blood is processed to extract growth-factor-rich plasma and injected into the scalp. It helps stimulate weakened hair follicles and may reduce hair fall in early thinning stages.",
  },
  {
    q: "What are the benefits of PRP treatment?",
    a: "• Minimally invasive • Uses your own blood • May reduce shedding • Can improve hair thickness • Suitable for men and women • Minimal downtime",
  },
  {
    q: "What are the side effects of PRP hair treatment? Is it worth trying?",
    a: "Side effects are usually mild and temporary, such as redness or slight soreness. PRP is worth considering for early hair thinning, but it may not work for advanced baldness. A consultation helps determine suitability.",
  },
  {
    q: "Is PRP painful?",
    a: "Mild discomfort may occur; numbing methods can be used.",
  },
  {
    q: "Can PRP regrow hair in bald areas?",
    a: "It works best in thinning areas, not completely bald zones.",
  },
  {
    q: "Is PRP permanent?",
    a: "Maintenance sessions may be required.",
  },
  {
    q: "Can PRP stop hair fall completely?",
    a: "It may reduce shedding, but underlying causes must be addressed.",
  },
  {
    q: "How long does one PRP session take?",
    a: "Approximately 45–60 minutes.",
  },
  {
    q: "Can PRP be combined with other treatments?",
    a: "Yes, often combined with medications or hair transplant.",
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

export default function PRPHairTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM PRP HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.prpbanners}')`,
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
                PRP Treatment for Hair
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                Natural Stimulation for Thinning & Hair Fall
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Hair thinning and excessive hair fall are among the most common
              concerns in both men and women. While medications and lifestyle
              correction play an important role, regenerative therapies like PRP
              Treatment for Hair (Platelet Rich Plasma Therapy) have emerged as
              supportive options for improving hair strength and density. PRP
              uses your body’s own growth factors to stimulate weakened hair
              follicles, making it a minimally invasive, non-surgical hair
              restoration option. At Satya Skin & Hair Solutions, we offer
              medically supervised PRP Treatment for Hair in Delhi and Gurgaon,
              tailored to early-stage hair thinning and selected hair fall
              conditions.
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
          <div className="lg:hidden mt-8 overflow-hidden rounded-xl"    >
            <img
              src={assets.prpbanners}
              alt="PRP Hair Treatment"
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
              Natural Growth Factors • Minimal Invasive • Supports Thinning Hair
              • No Surgery • Realistic Outcomes • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Natural Growth Factors • Minimal Invasive • Supports Thinning Hair
              • No Surgery • Realistic Outcomes • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Natural Growth Factors • Minimal Invasive • Supports Thinning Hair
              • No Surgery • Realistic Outcomes • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Natural Growth Factors • Minimal Invasive • Supports Thinning Hair
              • No Surgery • Realistic Outcomes • Satya Skin & Hair Solutions
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
              At Satya Skin & Hair Solutions we work with Dr. Shail Gupta to do
              PRP treatments for hair. We do these PRP treatments in Gurugram
              and Delhi NCR. When we do PRP treatments we make sure to use
              proper protocols. We also want the treatments to be safe and
              effective. We do not take shortcuts when we do PRP treatments, at
              Satya Skin & Hair Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is PRP Section */}
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
              What Is PRP Treatment for Hair?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              PRP (Platelet Rich Plasma) therapy involves: 1. Drawing a small
              amount of your blood 2. Processing it in a centrifuge to
              concentrate platelets 3. Injecting the platelet-rich plasma into
              the scalp. Platelets contain growth factors that may help: •
              Improve blood supply to follicles • Stimulate dormant hair roots •
              Strengthen thinning hair • Prolong the growth phase. PRP does not
              create new follicles, it supports existing ones.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                PRP is most effective for: • Early male pattern baldness •
                Female pattern hair thinning • Stress-related hair shedding •
                Post-illness hair thinning • Weak, miniaturizing hair. It is
                less effective for: • Completely bald areas • Long-standing
                advanced baldness • Scarring alopecia. Proper evaluation
                determines suitability. Hair grows in cycles: • Anagen (growth
                phase) • Catagen (transition) • Telogen (resting phase). PRP may
                help by: • Stimulating follicles back into growth phase •
                Improving follicle nourishment • Enhancing hair shaft thickness
                • Supporting overall scalp health. Results are gradual and
                require consistency.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Early hair thinning support",
                  "Non-surgical option",
                  "Uses own growth factors",
                  "Minimal downtime",
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
                When performed correctly, PRP delivers gradual, supportive
                results that enhance hair health — so you can feel confident
                with consistent care.
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
                  src="https://www.youtube.com/embed/6lJxK0uKgYQ?si=11iINA4_JEihGgoX"
                  title="PRP Hair Treatment Procedure"
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
            Benefits of PRP Hair Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Biocompatible & Natural",
                text: "Uses patient’s own blood (biocompatible) — no risk of allergic reactions or foreign substances.",
              },
              {
                title: "Minimally Invasive",
                text: "No surgical scars — just small injections with short downtime for quick return to daily life.",
              },
              {
                title: "Supports Early Thinning",
                text: "May reduce shedding and improve hair thickness in early stages of hair loss.",
              },
              {
                title: "Short Recovery Time",
                text: "Minimal discomfort with redness or soreness resolving in 1–2 days.",
              },
              {
                title: "Combination Friendly",
                text: "Can be combined with other treatments like medications or hair transplant for enhanced results.",
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
              PRP Procedure: Step-by-Step
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions, patient safety and long-term
              outcomes come first. Here is what to expect during a PRP hair
              treatment in Gurugram.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Consultation & Planning",
                text: "Hair density evaluation • Donor assessment • Blood investigations (if needed). A detailed assessment is done to evaluate suitability.",
              },
              {
                title: "Pre-Operative Preparation",
                text: "A small blood sample is drawn. Local numbing is applied to ensure comfort.",
              },
              {
                title: "Centrifugation",
                text: "Blood is processed in a centrifuge to isolate platelet-rich plasma with high concentration of growth factors.",
              },
              {
                title: "Scalp Preparation",
                text: "Targeted thinning areas are identified and prepared for injection.",
              },
              {
                title: "Scalp Injection",
                text: "PRP is injected into targeted thinning areas using fine needles for precise delivery.",
              },
              {
                title: "Post-Injection Monitoring",
                text: "Patient is monitored briefly to ensure no immediate issues.",
              },
              {
                title: "Post-Operative Care",
                text: "Detailed aftercare instructions are provided. Follow-up is scheduled to monitor progress.",
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
            How Many PRP Sessions Are Required? When Will Results Be Visible?
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Typical protocol: • 3–4 initial sessions • Spaced 4–6 weeks apart •
            Maintenance sessions every 6–12 months. Results vary based on hair
            condition and consistency. PRP is not an instant solution, patience
            is important.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "1–2 months", desc: "Reduced shedding" },
              { time: "3–4 months", desc: "Visible thickening" },
              { time: "6 months", desc: "Best improvement" },
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
            hair is growing the way it should — this follow-up is very important
            for achieving the best results.
          </p>
        </div>
      </section>

      {/* Cost & Truth */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of PRP Treatment for Hair in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Cost depends on: • Number of sessions • Platelet concentration
            technique • Severity of hair thinning • Combination therapies.
            Personalized consultation ensures appropriate treatment planning.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About PRP Treatment
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            PRP vs Hair Transplant: PRP: • Strengthens existing hair • Slows
            progression • Best for early thinning. Hair Transplant: • Restores
            lost hair permanently • Best for bald areas. In some cases, PRP may
            be used to support transplanted hair growth. Is PRP Safe? Yes, when:
            • Performed in sterile conditions • Proper platelet concentration is
            used • Administered by trained professionals. Side effects may
            include: • Mild swelling • Temporary soreness • Redness for 1–2
            days. Serious complications are rare under medical supervision.
            Limitations of PRP Treatment: • Does not cure genetic baldness •
            Does not create new follicles • Requires multiple sessions • Results
            vary between individuals. Clear expectations are essential before
            starting.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#9E4A47]">
            Why Choose Satya Skin & Hair Solutions?
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto leading-relaxed">
            • Dermatologist-supervised PRP protocols • Advanced centrifugation
            systems • Customized treatment planning • Focus on realistic
            outcomes • Integrated hair restoration approach. Patients searching
            for reliable PRP Treatment for Hair in Delhi and Gurgaon benefit
            from evidence-based evaluation and structured planning.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book PRP Hair Treatment Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you are experiencing early hair thinning or increased shedding,
            PRP may help support follicle strength.
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
