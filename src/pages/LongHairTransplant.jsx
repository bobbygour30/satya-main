"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is long hair transplant permanent?",
    a: "Yes. Transplanted hair grows permanently once implanted.",
  },
  {
    q: "Is long hair transplant the same as non-shaven transplant?",
    a: "Yes. Both terms refer to hair transplant without shaving the recipient area.",
  },
  {
    q: "Is long hair transplant suitable for men?",
    a: "Yes, especially for frontal hairline or small coverage areas.",
  },
  {
    q: "Is it more painful than regular hair transplant?",
    a: "No. The procedure is performed under local anaesthesia and is well tolerated.",
  },
  {
    q: "How many grafts can be done in long hair transplant?",
    a: "Usually fewer than fully shaved procedures, depending on scalp condition.",
  },
  {
    q: "Can long hair transplant be combined with FUT or FUE?",
    a: "Yes. Technique selection depends on donor and recipient requirements.",
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

export default function LongHairTransplant() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM LONG HAIR HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.longhairbanners}')`,
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
                Long Hair Transplant
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                Unshaven hair Transplant
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              The biggest worry for many people who want to get a hair transplant is the time they will have to take off work. Professionals, women, people who work in public, or anyone who wants to keep it private may find it hard to shave their heads, see redness, or look good after the procedure.
              A Long Hair Transplant, also called a Non-Shaven Hair Transplant, is a more advanced method of transplanting hair follicles without shaving the area where they will be placed. This means that the hair that is already there will cover up the procedure from the start.
              Dr. Shail Gupta is in charge of our Long Hair Transplant in Delhi and Gurgaon, and we focus on natural density, precision, and minimal social downtime.
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
              src={assets.longhairbanners}
              alt="Long Hair Transplant"
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
              Minimal Downtime • Natural Blending • Discreet Procedure • Permanent Growth • Expert Precision • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Minimal Downtime • Natural Blending • Discreet Procedure • Permanent Growth • Expert Precision • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Minimal Downtime • Natural Blending • Discreet Procedure • Permanent Growth • Expert Precision • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Minimal Downtime • Natural Blending • Discreet Procedure • Permanent Growth • Expert Precision • Satya Skin & Hair Solutions
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
              Long Hair Transplant. We do these Long Hair Transplant in Delhi and Gurgaon. When we do Long Hair Transplant we make sure to
              keep the person who donates hair safe. We also want the Long Hair Transplant to look natural and last a long time. We do not take
              shortcuts when we do Long Hair Transplant, at Satya Skin & Hair
              Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Long Hair Transplant Section */}
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
              What Is a Long Hair Transplant?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              A Long Hair Transplant is a type of FUE or FUT that keeps the length of the hair that is already there during the procedure.
              Instead of shaving the whole head:\
               • The hair on the recipient area is kept long\
               • Careful placement of grafts between existing hairs\
               • The area where the transplant was done is still hidden from view
              This method requires a lot of surgical skill, patience, and accuracy because it's hard to see and handle the graft.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Patients commonly choose Long Hair Transplant because they want minimal visible
                scarring, faster recovery, the flexibility to wear short
                hairstyles, and precise graft placement for the most natural
                outcome possible.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "No Shaving, No Time Off from Work",
                  "Instantly better looking",
                  "Great for Women",
                  "Blending and Natural Density",
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
                When performed correctly, Long Hair Transplant delivers really natural results
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
                  src="https://www.youtube.com/embed/L8EsssPdBtE?si=9yUvpPcJxuZDIPwa"
                  title="Long Hair Transplant Procedure"
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
            Advantages of Long Hair Transplant
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "No Shaving, No Time Off from Work",
                text: "The hair that is already there covers the transplanted area right away, so patients can get back to their normal lives right away.",
              },
              {
                title: "Instantly better looking",
                text: "The area looks fuller even before new growth starts because the long hair hides it.",
              },
              {
                title: "Great for Women",
                text: "This method works very well for women who have diffuse thinning or widening part lines.",
              },
              {
                title: "Blending and Natural Density",
                text: "Grafts are put between existing hairs so that they blend in perfectly.",
              },
              {
                title: "Permanent Hair Growth",
                text: "Once it starts to grow, transplanted hair acts like real hair and keeps growing.",
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
              Long Hair Transplant Procedure at Satya Skin & Hair Solutions
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions, patient safety and long-term
              outcomes come first. Here is what to expect during a Long Hair Transplant in Delhi and Gurgaon.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Consultation & Suitability Assessment",
                text: "• Hair loss pattern analysis\
 • Donor density evaluation\
 • Determining if non-shaven approach is feasible",
              },
              {
                title: "Donor Hair Extraction",
                text: "• Donor area may be partially shaved or concealed\
 • Safe donor zones strictly followed\
 • Donor aesthetics preserved",
              },
              {
                title: "Graft Preparation",
                text: "• Grafts prepared under magnification\
 • Special care due to limited visibility\
 • Graft survival prioritised",
              },
              {
                title: "Slit Creation & Implantation",
                text: "• Slits created between existing long hair\
 • Angle and direction meticulously controlled\
 • Surgeon-led, no-touch implantation",
              },
              {
                title: "Post-Operative Care",
                text: "• Simple aftercare instructions\
 • Minimal medication\
 • No unnecessary PRP sessions\
 • Regular follow-ups",
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
            Recovery After Long Hair Transplant
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            Recovery is similar to standard hair transplant but visually more discreet.
            • Mild redness settles within days\
             • Tiny scabs fall off in 7–10 days\
             • No visible shaved patches
            Hair growth timeline:
            • 3–4 months: New growth starts\
             • 6–8 months: Density improves\
             • 9–12 months: Final result
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "3–4 months", desc: "New growth starts" },
              { time: "6–8 months", desc: "Density improves" },
              { time: "9–12 months", desc: "Final result" },
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
            Cost of Long Hair Transplant in Delhi & Gurgaon
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            The cost of Long Hair Transplant in Delhi and Gurgaon depends on:
            • Number of grafts required\
             • Technique used (FUE / FUT non-shaven)\
             • Surgical complexity\
             • Time involved
            Because it is more labour-intensive, long hair transplant may cost more than standard shaved procedures. At Satya Skin & Hair Solutions, pricing remains transparent and ethical.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About Long Hair Transplant
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Long Hair Transplant is a skill-based procedure, not a shortcut.
            Poor technique can lead to:\
             • Poor graft survival\
             • Damage to existing hair\
             • Uneven density
            This is why it should only be performed by experienced hair transplant surgeons, not volume-driven clinics.
            Long Hair Transplant is not suitable for everyone.
            • Takes longer surgical time\
             • Technically more demanding\
             • Limited graft numbers per session\
             • Requires excellent donor quality
            This technique is selected only when it truly benefits the patient, not as a marketing gimmick.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book Your Long Hair Transplant Consultation in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you’re considering a Long Hair Transplant in Delhi or Gurgaon, expert evaluation is essential to determine whether this technique is right for you.
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

      {/* Who Should Consider Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Who Should Consider Long Hair Transplant?
          </h2>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "Can't shave your head because of work reasons",
              "Are a woman with thinning hair all over",
              "Want a hair restoration that is not obvious",
              "Have thinning hairlines or parts in the front",
              "Need a small to moderate number of grafts",
              "Want to hide their looks right away",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
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
              </motion.li>
            ))}
          </motion.ul>
          <p className="md:text-lg text-center text-[#2B333C]/90 mt-8 max-w-3xl mx-auto">
            People who work, women, celebrities, and people who are in the public eye often choose it.
          </p>
        </div>
      </section>

      {/* Important Limitations Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6 text-center">
            Important Limitations of Long Hair Transplant
          </h2>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "Takes longer surgical time",
              "Technically more demanding",
              "Limited graft numbers per session",
              "Requires excellent donor quality",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
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
              </motion.li>
            ))}
          </motion.ul>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90 mt-8 text-center">
            Long Hair Transplant is not suitable for everyone.
          </p>
        </div>
      </section>
    </main>
  );
}