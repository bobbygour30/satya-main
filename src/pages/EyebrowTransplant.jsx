"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import assets from "../assets/assets";

const faqs = [
  {
    q: "Is eyebrow transplant a permanent procedure?",
    a: "Yes. Transplanted hair is permanent and will continue to grow for life.",
  },
  {
    q: "Will transplanted eyebrow hair grow like scalp hair?",
    a: "Yes. Since the donor hair is taken from the scalp, it will grow and need regular trimming.",
  },
  {
    q: "Is eyebrow transplant painful?",
    a: "No. The procedure is performed under local anesthesia and is painless.",
  },
  {
    q: "How many grafts are required for eyebrow transplant?",
    a: "Typically, 200-400 grafts per eyebrow, depending on the density and area involved.",
  },
  {
    q: "Can eyebrow transplant look natural?",
    a: "Yes. When angles, direction, and density are properly planned, the results are completely natural.",
  },
  {
    q: "Can eyebrow transplant fix scars?",
    a: "Yes. Eyebrow transplant is very effective in correcting scars where hair does not grow.",
  },
  {
    q: "Is eyebrow transplant suitable for women?",
    a: "Yes. Eyebrow transplant is very commonly done in women and provides excellent cosmetic results.",
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

export default function EyebrowHairTransplant() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM EYEBROW TRANSPLANT HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-left bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.eyebrowbanners || assets.banner}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Eyebrow Hair Transplant
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                Natural Shape & Direction for Thin or Missing Eyebrows
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Eyebrows frame the face and play a key role in expression and
              symmetry. Thin, patchy, or over-plucked brows can affect
              confidence when makeup solutions fall short. Eyebrow
              transplantation is a highly artistic and precise procedure
              requiring expertise in hair angulation, direction, and natural
              design — performed under Dr. Shail Gupta at Satya Skin & Hair
              Solutions.
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
              src={assets.eyebrowbanners}
              alt="Eyebrow Hair Transplant - Natural Results"
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
              Permanent Natural Growth • Custom Shape & Arch • Precise Direction
              • Minimal Downtime • Scar Coverage • Satya Artistic Excellence
            </span>
            <span className="px-12">
              Permanent Natural Growth • Custom Shape & Arch • Precise Direction
              • Minimal Downtime • Scar Coverage • Satya Artistic Excellence
            </span>
          </div>

          {/* Duplicate again for smoothness */}
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Permanent Natural Growth • Custom Shape & Arch • Precise Direction
              • Minimal Downtime • Scar Coverage • Satya Artistic Excellence
            </span>
            <span className="px-12">
              Permanent Natural Growth • Custom Shape & Arch • Precise Direction
              • Minimal Downtime • Scar Coverage • Satya Artistic Excellence
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
              Artistic precision in delicate areas — prioritizing natural
              angulation, symmetry, and lifelong natural-looking results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is Eyebrow Transplant + Advantages + Video === */}
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
              What Is an Eyebrow Transplant?
            </h2>
            <p className="text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions in Gurugram & Delhi NCR, eyebrow
              transplants are performed under Dr. Shail Gupta — with extreme
              focus on natural shape, precise hair direction/angulation, and
              permanent growth. A highly artistic and technically demanding
              procedure.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                An eyebrow transplant is a hair restoration procedure that
                involves transplanting individual hair follicles into the
                eyebrow area to achieve a natural density, shape, and direction
                of the eyebrow. The hair follicles are normally extracted from
                the scalp donor site and are chosen based on their similarity to
                the eyebrow hair. The hair follicles are then implanted one by
                one into the eyebrow area according to the natural growth
                pattern of the eyebrow.
              </p>

              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                The transplanted eyebrow will appear natural and will grow
                permanently.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Permanent real hair growth",
                  "Customized shape & symmetry",
                  "Natural angulation & direction",
                  "Effective scar coverage",
                  "Minimal downtime",
                  "Long-lasting confidence",
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

            {/* Central Video Embed - placeholder; replace with eyebrow-specific video if available */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFDFDD]/50"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/V-6XXzwLLV8?si=vnQAeEKOz0a1e80-" // Replace with actual eyebrow transplant video
                  title="Eyebrow Hair Transplant Procedure"
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

      {/* === Who Can Benefit === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Who Can Benefit from an Eyebrow Transplant?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Thin or sparse eyebrows",
              "Over-plucked eyebrows with weak regrowth",
              "Loss of eyebrow hair due to genetic reasons",
              "Scars, burns, or trauma to the eyebrows",
              "Certain medical conditions that cause eyebrow loss",
              "Asymmetrical or patchy eyebrows",
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-xl font-semibold text-[#2B333C]">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
            An eyebrow transplant can be beneficial for people who have: Men and
            women can benefit from eyebrow transplantation.
          </p>
        </div>
      </section>

      {/* === Advantages Grid === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Advantages of Eyebrow Transplant
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Permanent & Natural Results",
                text: "Unlike makeup, microblading, or tattooing, an eyebrow transplant provides permanent hair growth using real hair that grows naturally.",
              },
              {
                title: "Customized Eyebrow Design",
                text: "Eyebrow shape, thickness, arch, and symmetry are custom-designed according to facial structure, gender, and individual choice.",
              },
              {
                title: "Scar Coverage",
                text: "Eyebrow transplants are very successful in covering scars resulting from injuries, burns, or previous surgeries.",
              },
              {
                title: "Minimal Downtime",
                text: "The procedure is minimally invasive, and most patients can return to their normal activities in a few days.",
              },
              {
                title: "Long-Lasting Confidence",
                text: "After the transplanted hair grows, the eyebrows can be shaped, trimmed, and cared for as if they were natural.",
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
            What Is the Typical Recovery Time After an Eyebrow Transplant?
          </h2>
          <p className="text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Recovery after an eyebrow transplant is usually smooth and
            predictable.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "Few days", desc: "Mild redness and swelling" },
              { time: "7–10 days", desc: "Tiny scabs fall off" },
              {
                time: "3–4 months",
                desc: "Transplanted hairs may shed initially (shock loss) • New hair growth begins after 3–4 months",
              },
              {
                time: "8–12 months",
                desc: "Final results are typically visible between 8–12 months",
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
            Initial shedding (shock loss) is normal; full beautiful results take
            time.
          </p>
        </div>
      </section>

      {/* === Cost + Truth + Procedure === */}
      <section className="py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            What Is the Cost of Eyebrow Transplant in Gurugram and Delhi NCR?
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            The cost of an eyebrow transplant depends on: Number of grafts
            required • Degree of eyebrow thinning or loss • Presence of scars •
            Complexity of eyebrow design At Satya Skin & Hair Solutions, we
            follow transparent and ethical pricing, ensuring quality, safety,
            and long-term outcomes without unnecessary procedures. A detailed
            consultation is essential to determine graft requirements and cost.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About Eyebrow Transplant
          </h2>
          <p className="text-lg leading-relaxed text-[#2B333C]/90">
            Eyebrow transplantation is not a cosmetic shortcut. Wrong angles,
            poor planning, or inexperienced handling can lead to: Unnatural
            direction • Hair growing straight up • Difficult grooming •
            Unsatisfactory results This is why eyebrow transplant should only be
            done by a highly experienced hair transplant surgeon.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-6">
            What Are the Procedures for Eyebrow Transplant?
          </h2>
          <div className="space-y-6 text-lg text-[#2B333C]/90">
            <p>
              <strong>Consultation & Eyebrow Design</strong> — The process
              begins with: Facial analysis • Eyebrow shape planning • Density
              and symmetry assessment • Donor hair evaluation Eyebrow design is
              discussed in detail before surgery.
            </p>
            <p>
              <strong>Donor Hair Extraction</strong> — Single-hair grafts are
              harvested from the scalp donor site • Only delicate, suitable
              hairs are chosen • Donor site safety and cosmetic considerations
              are maintained
            </p>
            <p>
              <strong>Graft Preparation</strong> — Grafts are harvested while
              magnified • Only single-hair grafts are used • Extreme care is
              taken to maintain graft integrity
            </p>
            <p>
              <strong>Slit Creation (Most Challenging Step)</strong> —
              Ultra-fine slits are created at very acute angles • Direction and
              curl pattern are meticulously controlled • This step determines
              how natural the eyebrow will look Eyebrow transplantation is far
              more technically demanding than scalp hair transplant.
            </p>
            <p>
              <strong>Graft Implantation</strong> — Grafts are implanted one by
              one • No-touch technique is followed • Implantation is done with
              full surgeon control
            </p>
            <p>
              <strong>Post-Operative Care</strong> — Detailed aftercare
              instructions are provided • Minimal medication is prescribed •
              Regular follow-ups are scheduled We avoid unnecessary PRP sessions
              or aggressive add-on treatments.
            </p>
          </div>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Book Your Eyebrow Transplant Consultation in Gurugram
          </h2>
          <p className="text-xl opacity-90">
            If you are considering an eyebrow transplant, the most important
            step is correct evaluation and expert planning, not rushing into the
            procedure.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-12 rounded-full font-bold text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FCEBDE]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#9E4A47] mb-12 text-center">
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
                    <span className="font-semibold text-lg text-[#2B333C]">
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
