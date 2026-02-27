"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import assets from "../assets/assets";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function BodyHairTransplant() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM BODY HAIR TRANSPLANT HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-left bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.bodyhairbanners || assets.banner}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0 sm:ml-90"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
           

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight text-[#0E3A43]">
                Body Hair Transplant (BHT)
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold mt-2">
                When Scalp Donor Is Limited – Strategic & Expert Use
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              In cases of depleted scalp donor areas, previously failed
              transplants, or advanced Norwood stages, Body Hair Transplant
              (BHT) can serve as a valuable secondary donor source. However,
              body hair differs in texture, growth cycle, and yield — making
              careful patient selection and expert technique essential for
              natural-looking results. Performed selectively under Dr. Shail
              Gupta at Satya Skin & Hair Solutions.
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
              src={assets.bodyhairbanners}
              alt="Body Hair Transplant BHT - Using Body Hair as Donor Source"
              className="
          w-full 
          h-[300px] sm:h-[350px]
          object-cover
          scale-110
        "
            />
          </div>

          {/* Desktop Empty Column (preserves layout) */}
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
              Additional Donor Source • Beard Hair for Density • Repair &
              Advanced Cases • Strategic Blending • Permanent Growth • Satya
              Precision
            </span>
            <span className="px-12">
              Additional Donor Source • Beard Hair for Density • Repair &
              Advanced Cases • Strategic Blending • Permanent Growth • Satya
              Precision
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Additional Donor Source • Beard Hair for Density • Repair &
              Advanced Cases • Strategic Blending • Permanent Growth • Satya
              Precision
            </span>
            <span className="px-12">
              Additional Donor Source • Beard Hair for Density • Repair &
              Advanced Cases • Strategic Blending • Permanent Growth • Satya
              Precision
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
              Highly selective use of body hair — only when scalp donor is
              insufficient, with precise blending and realistic expectations for
              natural results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is BHT + Advantages + Video === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#9E4A47]">
              What Is a Body Hair Transplant (BHT)?
            </h2>
            <p className="text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, BHT uses
              FUE to harvest follicles from body areas (primarily beard,
              sometimes chest/abdomen) and transplants them to the scalp or
              beard — a technically demanding rescue option for limited scalp
              donor cases under Dr. Shail Gupta.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                Body hair differs in texture, growth cycle, and curl from scalp
                hair — making BHT highly selective. Beard hair is the most
                reliable secondary donor due to its thickness and strength.
              </p>

              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                Grafts are placed strategically (e.g., crown, mid-scalp, scars)
                and always blended with scalp hair for natural blending — never
                used for hairline.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Additional donor resource",
                  "Helpful in repair cases",
                  "Beard hair for robust grafts",
                  "Permanent growth in new area",
                  "Strategic density improvement",
                  "Used only when truly needed",
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
                  src="https://www.youtube.com/embed/DJpbUALB9Eo?si=VaowgZfQRlrrzg_Q" // Replace with BHT-specific video if available
                  title="Body Hair Transplant Procedure"
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

      {/* === When Recommended + Limitations === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* When Recommended */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                When Is Body Hair Transplant Recommended?
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Poor or depleted scalp donor area",
                  "Previous failed / over-harvested transplants",
                  "Advanced grades of baldness",
                  "Density improvement in repair cases",
                  "Beard reconstruction or scar coverage",
                  "Combination with FUT/FUE",
                ].map((rec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-[#DFDFDD]"
                  >
                    <p className="text-lg font-semibold text-[#2B333C]">
                      {rec}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-lg text-[#2B333C]/80">
                BHT is a supportive technique — never a first-line or standalone
                solution.
              </p>
            </div>

            {/* Limitations */}
            <div>
              <h2 className="text-4xl font-bold text-[#9E4A47] mb-8">
                Limitations of Body Hair Transplant
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD] space-y-4">
                <p className="text-lg text-[#2B333C]/90">
                  Body hair differs from scalp hair in important ways:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-[#2B333C]/90">
                  <li>Shorter growth cycle</li>
                  <li>Different texture & curl</li>
                  <li>Variable density appearance</li>
                </ul>
                <p className="italic text-[#828D9C]">
                  That’s why BHT is never used blindly — always blended with
                  scalp hair and placed strategically (e.g., crown, mid-scalp,
                  scars — not hairline).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Advantages Grid === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Key Advantages of Body Hair Transplant at Satya
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Additional Donor Resource",
                text: "Expands options when scalp donor is insufficient or depleted.",
              },
              {
                title: "Helpful in Repair Cases",
                text: "Beard hair especially useful to add density and coverage in failed transplants.",
              },
              {
                title: "Beard Hair Provides Strong Grafts",
                text: "Thicker, robust follicles ideal for crown, mid-scalp, and scar camouflage.",
              },
              {
                title: "Permanent Hair Growth",
                text: "Transplanted body hair retains DHT resistance and grows lifelong.",
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
                <h3 className="text-2xl font-semibold text-[#9E4A47] mb-4">
                  {adv.title}
                </h3>
                <p className="text-[#828D9C] leading-relaxed">{adv.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Recovery Timeline === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-bold text-[#9E4A47]">
            Typical Recovery Time After Body Hair Transplant
          </h2>
          <p className="text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Recovery is generally smooth, though body donor sites may settle
            slightly slower.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "7–10 days", desc: "Healing of donor & recipient areas" },
              { time: "2–4 weeks", desc: "Initial shedding (shock loss)" },
              { time: "3–4 months", desc: "New hair growth begins" },
              {
                time: "Up to 12 months",
                desc: "Full maturation & final results",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-[#DFDFDD]"
              >
                <div className="text-3xl font-bold text-[#9E4A47] mb-3">
                  {item.time}
                </div>
                <p className="text-lg text-[#2B333C]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-lg italic text-[#828D9C] mt-8">
            Mild redness/scabbing at body donor sites is normal and resolves
            gradually.
          </p>
        </div>
      </section>

      {/* === Cost + Procedure + Truth === */}
      <section className="py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Cost of Body Hair Transplant in Gurugram & Delhi NCR
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Cost varies by grafts needed, donor site (beard vs. chest),
            extraction complexity, and whether combined with FUT/FUE. At Satya,
            pricing remains transparent, ethical, and only recommended when
            genuinely beneficial — no unnecessary upsell.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About Body Hair Transplant
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            BHT is not a magic fix. It demands honest expectations, expert
            planning, blending with scalp hair, and long-term vision. Poor
            execution can result in unnatural texture, patchy appearance, or
            wasted donor resources.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Body Hair Transplant Procedure at Satya
          </h2>
          <div className="space-y-6 text-lg text-[#2B333C]/90">
            <p>
              <strong>1. Consultation & Planning</strong> — Detailed scalp &
              body donor evaluation, texture/growth pattern analysis, combined
              graft strategy design.
            </p>
            <p>
              <strong>2. Donor Hair Extraction (FUE)</strong> — Individual
              follicles harvested (beard most common); special care for
              angulation & donor aesthetics.
            </p>
            <p>
              <strong>3. Graft Preparation</strong> — Careful sorting &
              preservation; separate planning for beard vs. scalp grafts;
              survival prioritized.
            </p>
            <p>
              <strong>4. Slit Creation & Area Planning</strong> — Strategic
              placement (crown, mid-scalp, scars); always blended with scalp
              hair; hairline uses scalp grafts only.
            </p>
            <p>
              <strong>5. Graft Implantation</strong> — Surgeon-controlled,
              no-touch where possible; focus on natural texture blending.
            </p>
            <p>
              <strong>6. Post-Operative Care</strong> — Clear instructions,
              minimal meds, no unnecessary add-ons, scheduled long-term
              follow-ups.
            </p>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Explore Body Hair Transplant Options?
          </h2>
          <p className="text-xl opacity-90">
            This advanced technique requires expert assessment — only proceed
            when it’s truly the right fit.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-12 rounded-full font-bold text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FCEBDE]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is body hair transplant permanent?",
                a: "Yes. The transplanted body hair grows permanently in the new area.",
              },
              {
                q: "Which body hair is best for transplant?",
                a: "Beard hair is the best choice due to its thickness, strength, and similarity to scalp hair.",
              },
              {
                q: "Can body hair fully replace scalp hair?",
                a: "No. Body hair is always used as a supplementary graft, never as a complete replacement.",
              },
              {
                q: "Is body hair transplant painful?",
                a: "No. Performed under local anesthesia — painless during the procedure.",
              },
              {
                q: "How many grafts can be taken from beard or body?",
                a: "Varies by individual donor density and safety limits — over-extraction is strictly avoided.",
              },
              {
                q: "Does body hair grow like scalp hair?",
                a: "It grows permanently but may differ in length, texture, curl, and growth cycle.",
              },
              {
                q: "Is body hair transplant suitable for everyone?",
                a: "No. Recommended only after careful assessment by an experienced surgeon when scalp donor is insufficient.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow border border-[#DFDFDD]"
              >
                <h3 className="font-semibold text-lg text-[#2B333C]">
                  {faq.q}
                </h3>
                <p className="mt-3 text-[#828D9C]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
