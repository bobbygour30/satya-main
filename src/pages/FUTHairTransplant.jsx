"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is FUT hair transplant a permanent solution?",
    a: "Yes. Hair that is moved from the safe donor zone grows back for good.",
  },
  {
    q: "Is FUT better than FUE?",
    a: "It depends on the situation. FUT is usually better for people who are very bald and want to keep their donor hair.",
  },
  {
    q: "Will people be able to see the FUT scar?",
    a: "Most of the time, the scar is thin and well hidden by the hair around it.",
  },
  {
    q: "How many grafts can be done with FUT?",
    a: "Usually 3000 to 4500 grafts, but sometimes more if the scalp is loose.",
  },
  {
    q: "Is it possible to do FUT again?",
    a: "Yes. If you plan ahead, you can safely do FUT more than once.",
  },
  {
    q: "Does FUT hurt?",
    a: "The procedure is done with local anesthesia and most people can handle it.",
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

export default function FUTHairTransplant() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency (though not used further in original)

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM FUT HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.futbanners || assets.banner}')`,
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
                FUT Hair Transplant
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Best FUT Hair Transplant in India
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              When hair loss gets worse over time, choosing the right technique
              is more important than following trends. FUE is heavily
              advertised, but it isn't always the best choice for people with
              large bald areas, weak donor density, or previous failed
              transplants. A FUT Hair Transplant, also called a strip
              transplant, is a scientifically proven method that delivers
              strong, long-term results. Under expert supervision, we prioritize
              donor safety and sustainability.
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
    src={assets.futbanners}
    alt="FUT Hair Transplant"
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
              High Graft Yield • Superior Donor Preservation • Long-Term
              Sustainability • Natural Dense Results • Ethical & Scientific
              Planning • Satya Excellence
            </span>
            <span className="px-12">
              High Graft Yield • Superior Donor Preservation • Long-Term
              Sustainability • Natural Dense Results • Ethical & Scientific
              Planning • Satya Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              High Graft Yield • Superior Donor Preservation • Long-Term
              Sustainability • Natural Dense Results • Ethical & Scientific
              Planning • Satya Excellence
            </span>
            <span className="px-12">
              High Graft Yield • Superior Donor Preservation • Long-Term
              Sustainability • Natural Dense Results • Ethical & Scientific
              Planning • Satya Excellence
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
              Ethical, patient-centric protocols — balancing safety, graft
              yield, artistry, and lifelong donor sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is FUT + Advantages + Video === */}
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
              What Is an FUT Hair Transplant?
            </h2>
            <p className="text-base md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, FUT is
              performed under Dr. Shail Gupta — emphasizing maximum graft
              harvest, donor preservation, and durable, natural results.
              Scientifically proven for advanced cases.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                FUT is a hair restoration surgery in which a small strip of skin
                is precisely extracted from the secure donor location on the
                back of the scalp. The strip is then carefully dissected under
                the powerful microscopes, and the individual follicular units
                are separated to be grafted into the bald or thinning areas.
                Unlike the case in FUE, the process enables the full utilization
                of the donor's hair while at the same
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Unlike FUE, FUT maximizes donor utilization in a single session
                while preserving long-term donor integrity — ideal when high
                graft numbers are needed without risking widespread thinning.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "High graft yield per session",
                  "Superior donor preservation",
                  "Long-term sustainability",
                  "Natural dense appearance",
                  "Best for advanced baldness",
                  "Ideal for repair cases",
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

            {/* Central Video Embed - using a placeholder; replace with actual FUT video if available */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFDFDD]/50"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/rWqn50qQeKU?si=1BzJadtdCKt6zCD_" // You can replace this with a FUT-specific video link
                  title="FUT Hair Transplant Procedure"
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

      {/* === When FUT is Recommended === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            When Is FUT Hair Transplant Recommended?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Advanced grades of baldness",
              "Large bald areas requiring high graft numbers",
              "Progressive hair loss",
              "Previous failed or over-harvested FUE cases",
              "Corrective hair transplant cases",
              "Patients needing future donor reserve",
            ].map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-base md:text-xl font-semibold text-[#2B333C]">
                  {rec}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center md:text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
            FUT Hair Transplant is especially useful in cases such as: For such
            cases, FUT Hair Transplant Gurgaon & Delhi often provides safer and
            more durable outcomes.
          </p>
        </div>
      </section>

      {/* === Advantages Grid === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Advantages of FUT Hair Transplant
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High Graft Yield",
                text: "With FUT, it’s possible to collect more grafts from a patient in a single sitting than what’s safe under the FUE method",
              },
              {
                title: "Better Donor Preservation",
                text: "The strip is removed from the safest donor area, and hence, there is no donor thinning, as happens with repeated FUE procedures.",
              },
              {
                title: "Long-Term Sustainability",
                text: "FUT maintains donor reserves for future hair loss. It is suitable for young persons who experience severe hair loss.",
              },
              {
                title: "Results that are real",
                text: "The grafts are then correctly trimmed and positioned to allow for the natural and thick regrowth of hair.",
              },
              {
                title: "Best for hair transplants that fix problems",
                text: "When the donor sites are already damaged, FUT is likely to be the best option for repairing them.",
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

      {/* === Scar & Recovery === */}
      <section className="py-7 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#9E4A47]">
            What About the Scar in FUT Hair Transplant?
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                The Linear Scar in FUT
              </h3>
              <p className="md:text-lg text-[#2B333C]/90">
                FUT does result in a linear scar, but when performed correctly:
              </p>
              <ul className="mt-4 text-left list-disc pl-6 space-y-2 text-[#2B333C]/90">
                <li>Trichophytic closure is used</li>
                <li>Scar remains thin and well concealed</li>
                <li>Hair grows through the scar in many cases</li>
              </ul>
              <p className="mt-4 italic text-[#828D9C]">
                FUT is not scar-less, but it is donor-friendly, which matters
                far more long-term.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]">
              <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">
                What Is the Recovery Time After FUT Hair Transplant?
              </h3>
              <p className="md:text-lg text-[#2B333C]/90 mb-6">
                Recovery after FUT Hair Transplant is predictable:
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { time: "3–4 months", desc: "New hair growth begins" },
                  { time: "6–8 months", desc: "Visible density improvement" },
                  {
                    time: "9–12 months",
                    desc: "Final result",
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
                Mild pain or tightness for a few days • Sutures removed in 10–14
                days • Routine activities resume in about a week
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Cost & Truth & Procedure === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of FUT Hair Transplant in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            The cost of FUT Hair Transplant in Delhi and Gurgaon depends on:
            Number of grafts required • Extent of baldness • Donor scalp laxity
            • Complexity of the surgery • Surgeon experience At Satya Skin &
            Hair Solutions, pricing is transparent and ethical, with no
            compromise on surgical quality or graft survival.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            FUT vs FUE: The Truth Patients Must Know
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            FUT is not outdated. FUE isn't always better. A lot of the time, the
            best long-term results come from a combination of FUT and FUE.
            Clinics that only offer one type of surgery usually do so because
            they don't have enough training, not because it's better for the
            patient.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            FUT Hair Transplant Procedure at Satya Skin & Hair Solutions
          </h2>
          <div className="space-y-6 md:text-lg text-[#2B333C]/90 ">
            <p>
              <strong>Planning and Consultation</strong> — A full evaluation of
              hair loss • Mapping the donor zone • Planning for long-term hair
              loss • Choosing a technique (FUT, FUE, or a mix of the two)
            </p>
            <p>
              <strong>Donor Strip Harvesting</strong> — Strip taken from the
              safest area for donors • Closure done with the trichophytic method
              • Make sure the scars are as small as possible
            </p>
            <p>
              <strong>Graft Dissection</strong> — Grafts dissected under
              operating microscopes • Multi-hair grafts preserved • High graft
              survival ensured
            </p>
            <p>
              <strong>Slit Creation</strong> — Slits created at correct angles
              and direction • Hairline design planned artistically • Density
              distributed scientifically
            </p>
            <p>
              <strong>Graft Implantation</strong> — No-touch, surgeon-controlled
              implantation • Focus on natural blending and density
            </p>
            <p>
              <strong>Post-Operative Care</strong> — Clear aftercare
              instructions • Minimal but effective medication • No unnecessary
              PRP sessions • Long-term follow-up planning
            </p>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Your FUT Hair Transplant Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you're thinking about getting a FUT hair transplant in Delhi or
            Gurgaon, you need to get expert advice first to avoid damaging the
            donor and regretting it later.
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
    </main>
  );
}
