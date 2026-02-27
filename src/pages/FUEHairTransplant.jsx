"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does an FUE hair transplant take?",
    a: "Depending on the number of grafts, the procedure usually takes 6–8 hours and is completed in a single day.",
  },
  {
    q: "Can I expect natural-looking results from FUE?",
    a: "Yes — when performed by an experienced surgeon with correct hairline planning, precise angulation, and proper slit design, FUE delivers completely natural results.",
  },
  {
    q: "Is FUE suitable for everyone?",
    a: "No. FUE suitability depends on donor density, pattern of baldness, scalp condition, and long-term hair loss risk. A thorough consultation is necessary to determine if it's the right choice for you.",
  },
  {
    q: "What is the difference between FUE and FUT?",
    a: "FUE extracts individual follicular units one by one without removing a strip of scalp. FUT removes a linear strip from the donor area. Each technique has specific indications — neither is universally better; the best choice depends on your case.",
  },
  {
    q: "How many grafts can be done in one FUE session?",
    a: "Safe FUE sessions typically range between 2000–3000 grafts, depending on your donor capacity, scalp condition, and avoiding over-harvesting.",
  },
  {
    q: "Is FUE hair transplant permanent?",
    a: "Yes. The transplanted hair is taken from DHT-resistant donor zones (back/sides), so it continues to grow permanently when the donor area is respected and not over-depleted.",
  },
  {
    q: "Can FUE be repeated?",
    a: "Yes — but only if the donor reserves were carefully preserved and not compromised during the first surgery.",
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

export default function FUEHairTransplant() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM FUE HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.fuebanners || assets.banner}')`,
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
                FUE Hair Transplant
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                Natural Results, Advanced Technique
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              If you are thinking about getting a hair transplant, you need to
              know if FUE (Follicular Unit Extraction) is the right way to deal
              with your hair loss. FUE is not suitable for every person who is
              losing hair and not every scalp is a good fit for this procedure.
              You must carefully consider if FUE is the right choice for your
              specific hair loss situation.
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
              src={assets.fuebanners}
              alt="FUT Hair Transplant"
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
              Donor Safety First • Natural Looking Results • Minimal Scarring •
              Long-Lasting Growth • No Shortcuts • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Donor Safety First • Natural Looking Results • Minimal Scarring •
              Long-Lasting Growth • No Shortcuts • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Donor Safety First • Natural Looking Results • Minimal Scarring •
              Long-Lasting Growth • No Shortcuts • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Donor Safety First • Natural Looking Results • Minimal Scarring •
              Long-Lasting Growth • No Shortcuts • Satya Skin & Hair Solutions
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
              advanced FUE hair transplants across Gurugram and Delhi NCR. We
              ensure donor safety, natural-looking results, and long-lasting
              transformations without shortcuts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is FUE Section */}
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
              What Is FUE Hair Transplant?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              The hair restoration technique known as FUE (Follicular Unit
              Extraction) is a modern, advanced way to restore your hair.
              Individual hair follicles are extracted one at a time from the
              donor area (back or sides of the scalp) and then implanted into
              thinning or bald areas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                FUE is different from FUT because it does not require removing a
                strip of scalp. The doctor uses specialized tools to extract
                each follicular unit individually. Grafts are then implanted
                following the natural direction, angle, and pattern of your
                existing hair — this is critical for making the new hair look
                completely natural.
              </p>

              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Patients commonly choose FUE because they want minimal visible
                scarring, faster recovery, the flexibility to wear short
                hairstyles, and precise graft placement for the most natural
                outcome possible.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Minimal visible scarring",
                  "Faster recovery",
                  "Short hairstyle flexibility",
                  "Precise graft placement",
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
                When performed correctly, FUE delivers really natural results
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
                  src="https://www.youtube.com/embed/mOYsTb-0Ujo?si=vRon_rdDGWeiABtw"
                  title="FUE Hair Transplant Procedure"
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
            Advantages of FUE Hair Transplant
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Minimal Linear Scarring",
                text: "The FUE procedure does not create a linear scar. It only leaves tiny micro extraction marks that heal very well and are extremely hard to see — even with very short hair.",
              },
              {
                title: "Natural-Looking Results",
                text: "Each graft is placed following the natural hair growth direction, angle, density, and hairline shape — so the transplanted hair blends perfectly with your existing hair.",
              },
              {
                title: "Faster Recovery",
                text: "Most patients experience less pain and heal faster because there are no stitches. You can usually return to work and daily routine within 3 to 5 days.",
              },
              {
                title: "Precision & Flexibility",
                text: "FUE allows selective graft harvesting, making it suitable for hairline restoration, crown coverage, beard transplant, and body hair transplant (BHT) in selected cases.",
              },
              {
                title: "Permanent Hair Growth",
                text: "Hair follicles are taken from the safe donor zone that is genetically resistant to hair loss — so the transplanted hair will continue growing permanently.",
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
              What Are the Procedures for FUE Hair Transplant?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions, patient safety and long-term
              outcomes come first. Here is what to expect during an FUE hair
              transplant in Gurugram.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Consultation & Planning",
                text: "A detailed assessment is done to evaluate hair loss pattern, donor strength, scalp condition, and future hair loss risk. A personalised surgical plan is created.",
              },
              {
                title: "Pre-Operative Preparation",
                text: "Local anaesthesia is administered to ensure a painless and comfortable procedure.",
              },
              {
                title: "Graft Extraction (FUE)",
                text: "Individual follicular units are extracted from the safe donor zone only, avoiding over-harvesting and donor damage. Donor preservation is a top priority.",
              },
              {
                title: "Graft Preparation",
                text: "Extracted grafts are examined and preserved under controlled conditions to maintain high survival rates.",
              },
              {
                title: "Graft Bed & Slit Creation",
                text: "Slits are created with precise angles and directions, which is critical for achieving natural hair growth patterns.",
              },
              {
                title: "Graft Implantation",
                text: "Grafts are implanted using a controlled, no-touch technique, ensuring minimal trauma and maximum graft survival.",
              },
              {
                title: "Post-Operative Care",
                text: "Detailed aftercare instructions are provided. We do not overload patients with unnecessary PRP sessions or excessive medications. Treatment is tailored and monitored over time.",
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
            What Is the Typical Recovery Time After an FUE Hair Transplant?
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Recovery after an FUE hair transplant is generally smooth. You might
            see mild redness and slight swelling for a few days. Extraction and
            implantation points usually heal within 7–10 days. Most patients
            return to their jobs and daily routine within 3 to 5 days.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "3–4 months", desc: "Initial hair growth begins" },
              { time: "6–8 months", desc: "Visible improvement in density" },
              { time: "9–12 months", desc: "Final, mature results" },
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
            What Is the Cost of FUE Hair Transplant in Gurugram and Delhi NCR?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            The cost of an FUE hair transplant depends on multiple factors,
            including extent of baldness, number of grafts required, donor area
            quality, previous transplant history, and complexity of the
            procedure. At Satya Skin & Hair Solutions, we follow transparent and
            ethical pricing with no unnecessary graft inflation and no
            compromise on medical standards. A detailed consultation is
            essential to determine the right technique and accurate cost.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About FUE Hair Transplant
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            FUE is not always the best technique for everyone. In advanced
            baldness, repair cases, or patients with compromised/weak donors,
            FUT or combined techniques (FUT + FUE) may be safer and more
            effective. Choosing FUE blindly, without proper evaluation, is one
            of the biggest reasons we see failed and repair-required hair
            transplant cases.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book Your FUE Hair Transplant Consultation
          </h2>
          <p className="md:text-xl opacity-90">
            If you are considering an FUE hair transplant, the most important
            step is correct diagnosis and ethical planning — not rushing into
            surgery.
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
