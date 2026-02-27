"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is hair weaving permanent?",
    a: "No, hair weaving is a temporary cosmetic fix that needs to be taken care of all the time.",
  },
  {
    q: "Can I sleep, swim, or exercise with hair weaving?",
    a: "You can do things every day, but you have to follow certain rules and routines.",
  },
  {
    q: "Does hair weaving damage existing hair?",
    a: "If you don't do it right or don't keep things clean, it can hurt the hair that is still there. It is important to have professional help.",
  },
  {
    q: "Is hair weaving better than hair transplant?",
    a: "They have different uses. A hair transplant is permanent, while hair weaving is temporary and only for looks.",
  },
  {
    q: "How long does a hair weaving system last?",
    a: "Systems can last anywhere from 6 months to 2 years, depending on how well they are made and how well they are taken care of.",
  },
  {
    q: "Can hair weaving be removed later?",
    a: "Yes. It is fully removable and reversible.",
  },
  {
    q: "Is hair weaving suitable for women?",
    a: "Yes. Men and women can both choose hair weaving solutions based on how their hair is falling out.",
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

export default function HairWeavingSolutions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM HAIR WEAVING HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.hairweavingbanners}')`,
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
                Professional Hair Weaving Solutions
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                for Natural-Looking Hair.
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Not everyone loses hair in the same way. For many people, hair transplant is a permanent solution, but not everyone is a good candidate for surgery because of medical issues, donor limitations, lifestyle constraints, or personal preference.
              People with advanced baldness, diffuse hair loss, or who just want instant coverage without having to have surgery can use Hair Weaving Solutions as a non-surgical, quick cosmetic solution.
              We offer Hair Weaving Solutions in Delhi and Gurgaon at Satya Skin & Hair Solutions. We focus on comfort, a natural look, scalp health, and ethical counseling to help patients choose the best solution, not just any solution.
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
              src={assets.hairweavingbanners}
              alt="Hair Weaving Solutions"
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
              Instant Coverage • Non-Surgical • Natural Comfort • Ethical Guidance • Scalp Health First • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Instant Coverage • Non-Surgical • Natural Comfort • Ethical Guidance • Scalp Health First • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Instant Coverage • Non-Surgical • Natural Comfort • Ethical Guidance • Scalp Health First • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Instant Coverage • Non-Surgical • Natural Comfort • Ethical Guidance • Scalp Health First • Satya Skin & Hair Solutions
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
              Hair Weaving Solutions. We do these Hair Weaving Solutions in Delhi and Gurgaon. When we do Hair Weaving Solutions we make sure to
              keep the person who donates hair safe. We also want the Hair Weaving Solutions to look natural and last a long time. We do not take
              shortcuts when we do Hair Weaving Solutions, at Satya Skin & Hair
              Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Hair Weaving Section */}
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
              What Are the Different Ways to Weave Hair?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Hair Weaving Solutions are non-surgical ways to replace hair. They attach a custom-made hair unit (also called a hair patch or hair system) to the scalp using special methods.
              Modern hair weaving systems are different from wigs in that
              • Made to fit the person perfectly\
              
              • Looks natural and lets air through
              • Safe enough for everyday use
              • Can be taken off and changed
              There is no need for graft extraction, surgery, or downtime with hair weaving.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                Patients commonly choose Hair Weaving Solutions because they want instant results, no surgery and no pain, personalized look, reversible option, and suitability for people of all ages for the most natural
                outcome possible.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Results Right Away",
                  "No surgery and no pain",
                  "Personalized Look",
                  "Reversible Option",
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
                When performed correctly, Hair Weaving Solutions delivers really natural results
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
                  src="https://www.youtube.com/embed/oD9kvWbjvOQ?si=S16hxijJkPOTq2ki"
                  title="Hair Weaving Solutions Procedure"
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

      {/* Who Should Consider Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Who Should Think About Hair Weaving Solutions?
          </h2>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "Are very bald and don't have many good donors available",
              "Are not healthy enough to have hair transplant surgery",
              "Want immediate cosmetic results",
              "Have hair that is thinning all over",
              "Have had hair transplants that didn't work",
              "Choose a non-surgical option",
              "Are not ready for surgery that will last forever",
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
                <span className="font-medium">People who want to weave their hair may be able to do so if: {item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <p className="md:text-lg text-center text-[#2B333C]/90 mt-8 max-w-3xl mx-auto">
            People in Delhi and Gurgaon often choose hair weaving as a temporary or lifestyle-based solution rather than a medical one.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Benefits of Hair Weaving Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Results Right Away",
                text: "Hair weaving covers up hair right away, while transplants take months to show new growth.",
              },
              {
                title: "No surgery and no pain",
                text: "No surgery, no needles, no blood loss, and no time off to heal.",
              },
              {
                title: "Personalized Look",
                text: "Hair systems are made to match: Color of hair How thick it is Texture What kind of hairstyle do you like?",
              },
              {
                title: "Reversible Option",
                text: "Hair weaving is completely reversible, unlike surgery, so it's a good choice for people who are still deciding on long-term options.",
              },
              {
                title: "Good for People of All Ages",
                text: "Young adults, older people, and even people who have lost hair due to medical reasons can use hair weaving solutions.",
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

      {/* Drawbacks Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FCEBDE]/40 to-[#FFF8EF]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6 text-center">
            Important Drawbacks of Hair Weaving Solutions
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90 mb-6 text-center">
            You need to know that hair weaving does not make hair grow back.
          </p>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {[
              "It doesn't stop hair from falling out",
              "It needs regular care ",
              "It doesn't last forever",
              "It doesn't work biologically with the scalp.",
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
            This is why it's important to get ethical counseling before getting hair weaving.
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Hair Weaving Solutions vs Hair Transplant
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-[#DFDFDD] rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-[#9E4A47] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Hair Weaving</th>
                  <th className="px-6 py-4 text-left font-semibold">Hair Transplant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFDFDD]">
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2B333C]">Non-surgical</td>
                  <td className="px-6 py-4 font-medium text-[#2B333C]">Surgical</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2B333C]">Instant results</td>
                  <td className="px-6 py-4 font-medium text-[#2B333C]">Gradual results</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2B333C]">Cosmetic solution</td>
                  <td className="px-6 py-4 font-medium text-[#2B333C]">Medical solution</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2B333C]">Requires maintenance</td>
                  <td className="px-6 py-4 font-medium text-[#2B333C]">Permanent growth</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2B333C]">No donor needed</td>
                  <td className="px-6 py-4 font-medium text-[#2B333C]">Requires donor hair</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="md:text-lg text-center text-[#2B333C]/90 mt-8 max-w-3xl mx-auto">
            At Satya Skin & Hair Solutions, we clearly explain which option suits you better, instead of pushing one blindly.
          </p>
        </div>
      </section>

      {/* Maintenance Section */}
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
              What Is the Maintenance Like for Hair Weaving?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Hair weaving systems require regular upkeep to maintain hygiene, comfort, and appearance.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Periodic tightening or refixing",
                text: "",
              },
              {
                title: "Cleaning of scalp and system",
                text: "",
              },
              {
                title: "Replacement after wear and tear",
                text: "",
              },
              {
                title: "Monitoring scalp health",
                text: "Poor maintenance can lead to:\
 • Scalp infections\
 • Itching or discomfort\
 • Unnatural appearance This is why professional guidance matters.",
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

      {/* Cost & Ethical Approach */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            What Is the Cost of Hair Weaving Solutions in Delhi & Gurgaon?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            The cost of Hair Weaving Solutions in Delhi and Gurgaon depends on:
            • Type of hair system used\
             • Hair quality (synthetic vs natural)\
             • Size of coverage area\
             • Attachment technique\
             • Maintenance frequency
            At Satya Skin & Hair Solutions, pricing is transparent, and patients are clearly informed about long-term maintenance costs before proceeding.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Our Ethical Approach to Hair Weaving Solutions
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            We do not promote hair weaving as a replacement for medical treatment when a transplant is clearly better.
            Our philosophy:\
             • Diagnose first\
             • Explain all options honestly\
             • Discuss long-term implications\
             • Let the patient decide
            Hair weaving is offered only when it genuinely suits the patient’s condition and expectations.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book a Consultation for Hair Weaving Solutions in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you are considering Hair Weaving Solutions in Delhi or Hair Weaving Solutions in Gurgaon, the most important step is expert evaluation and honest guidance.
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