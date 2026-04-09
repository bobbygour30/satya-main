"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Is laser toning painful?",
    a: "Most patients feel mild snapping sensation that is tolerable.",
  },
  {
    q: "Can laser toning remove melasma permanently?",
    a: "Melasma can be controlled significantly but may require maintenance.",
  },
  {
    q: "How soon will results be visible?",
    a: "Gradual improvement is visible after 2–3 sessions.",
  },
  {
    q: "Is there downtime?",
    a: "Minimal downtime; redness subsides within hours.",
  },
  {
    q: "Can laser toning worsen pigmentation?",
    a: "When performed incorrectly, yes. Proper medical supervision prevents this.",
  },
  {
    q: "Can men undergo laser toning?",
    a: "Yes, laser toning is suitable for both men and women.",
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

export default function LaserToningTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META ==================== */}
      <SEO
        title="Laser Toning Treatment in Delhi | Advanced Skin Brightening & Pigmentation Laser Gurgaon"
        description="Looking for Laser Toning Treatment in Delhi? Safe and effective laser toning for pigmentation, melasma, and skin brightening in Gurgaon at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/laser-toning"
        showSchema={false}
      />

      {/* === PREMIUM HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.lazertoning || assets.banner}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Laser Toning Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Precision Skin Brightening for Pigmentation & Uneven Tone
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              When creams and peels don't work on pigmentation, melasma, tanning, or dullness, deeper technology is typically needed. Laser Toning Treatment is a safe, non-invasive technique done by a dermatologist that targets extra melanin while also making the skin look clearer and brighter overall.
              Laser toning works slowly and gently at a deeper level to remove pigmentation and boost collagen production. This is different from aggressive resurfacing operations.
              We offer sophisticated Laser Toning Treatment in Delhi and Gurgaon that is tailored to Indian skin types and puts a major emphasis on safety and long-term pigment control.
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
              src={assets.lazertoning}
              alt="Laser Toning Treatment"
              className="
                w-full 
                h-[300px] sm:h-[350px]
                object-cover
                scale-110
              "
            />
          </div>

          {/* Desktop Empty Column */}
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
              Melasma Control • Pigmentation Reduction • Skin Brightening • Even Tone • Collagen Stimulation • Safe for Indian Skin • Minimal Downtime • Satya Excellence
            </span>
            <span className="px-12">
              Melasma Control • Pigmentation Reduction • Skin Brightening • Even Tone • Collagen Stimulation • Safe for Indian Skin • Minimal Downtime • Satya Excellence
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Melasma Control • Pigmentation Reduction • Skin Brightening • Even Tone • Collagen Stimulation • Safe for Indian Skin • Minimal Downtime • Satya Excellence
            </span>
            <span className="px-12">
              Melasma Control • Pigmentation Reduction • Skin Brightening • Even Tone • Collagen Stimulation • Safe for Indian Skin • Minimal Downtime • Satya Excellence
            </span>
          </div>
        </motion.div>
      </div>

      {/* Doctor Team Section */}
      <section className="relative bg-[#FFF8EF] py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(252,235,222,0.5),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
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
              Ethical, patient-centric protocols — balancing safety, pigment control, and natural skin brightening.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is + Concerns + How it Works + Video === */}
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
              What is Laser Toning Treatment?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                People usually use Q-switched laser technology for laser toning, which is a way to make skin look younger. It sends out low-energy laser pulses that break down extra melanin into smaller pieces that the body then naturally gets rid of.
                This treatment helps in reducing pigmentation, treating melasma, lightening dark spots, improving uneven skin tone, brightening dull complexion, stimulating mild collagen production.
                Laser toning is gradual and requires multiple sessions for best results.
              </p>

              <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47]">
                Skin Concerns Treated with Laser Toning
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Melasma — Hormonal pigmentation commonly seen on cheeks and forehead.",
                  "Pigmentation caused by the sun — Dark spots caused by too much sun.",
                  "Hyperpigmentation after acne — Dark spots that stay after pimples.",
                  "Uneven skin tone — Skin that is patchy and discoloured.",
                  "Dull Skin — Makes skin look brighter and clearer.",
                  "Freckles — Reduces the look by slowly getting lighter.",
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

              <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47] mt-8">
                How Does Laser Toning Work?
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                Selective photothermolysis is how laser toning works. This means that it only targets melanin pigment and doesn't hurt the skin around it.
                The steps are: Laser energy goes through the skin • Melanin pigment takes in energy • Particles of pigment break down • Body gets rid of broken pigment • The skin slowly gets brighter.
                The procedure has little downtime because it controls energy levels.
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
                  src="https://www.youtube.com/embed/BGWbv3D1dO4?si=QZnbQpeClSaonUdb"
                  title="Laser Toning Treatment at Satya"
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

      {/* === Procedure + After + Sessions === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            What Happens During the Process?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Step 1: Consultation",
                items: ["Checking the depth of pigmentation", "Analysis of skin type", "Review of medical history"],
              },
              {
                title: "Step 2: Putting on the laser",
                items: ["Safety glasses given", "Pulses of laser light sent to the area being treated", "A mild snapping feeling"],
              },
              {
                title: "Step 3: Taking care of yourself after treatment",
                items: ["Gel for cooling applied", "Instructions for using sunscreen", "Shared tips for taking care of your skin"],
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD]"
              >
                <h3 className="md:text-2xl font-semibold text-[#9E4A47] mb-4">{step.title}</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#2B333C]/90">
                  {step.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[#9E4A47] font-semibold mt-8">The session usually lasts between 20 and 30 minutes.</p>
        </div>
      </section>

      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl md:text-4xl font-bold text-[#9E4A47] mb-6">What Happens After Laser Toning?</h2>
          <div className="inline-flex flex-wrap justify-center gap-6">
            {[
              "A little redness for a few hours",
              "A little warmth in the area that was treated",
              "No big peeling",
              "No big downtime",
            ].map((item, i) => (
              <div key={i} className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-[#DFDFDD] text-[#2B333C]">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 italic text-[#828D9C]">Patients can go back to their normal activities right away.</p>
        </div>
      </section>

      {/* === Sessions + Benefits Grid === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD] mb-16">
            <h3 className="md:text-3xl font-bold text-[#9E4A47] mb-6">How many sessions do you need?</h3>
            <ul className="list-disc pl-6 space-y-3 md:text-lg text-[#2B333C]/90">
              <li>Light pigmentation: 4 to 6 sessions</li>
              <li>Melasma: 6 to 8 sessions</li>
              <li>Maintenance: Touch-ups every now and then</li>
            </ul>
            <p className="mt-6 text-[#828D9C]">Sessions are usually held every 2 to 4 weeks.</p>
          </div>

          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Advantages of Laser Toning Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "A gradual and natural lightening",
              "Fewer dark spots",
              "Managed melasma",
              "Clearer skin",
              "Little time off",
              "Safe for all types of Indian skin",
              "Not invasive and comfortable",
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-base md:text-xl font-semibold text-[#2B333C]">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Safety + vs Peel + Cost + Why Choose === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Is it safe to use laser toning?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Yes, but only if a dermatologist is watching and the laser settings are right. Laser procedures that aren't done right can cause dark spots, burns, results that aren't the same. A medical evaluation makes sure you're safe.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Chemical Peel vs. Laser Toning
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Laser toning is better for more colour in the skin, melasma, dark spots that won't go away. Chemical peels are better for dullness of the surface, pimples, pigmentation that is only on the surface. Combination therapy often leads to better results.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            How much does laser toning treatment cost in Delhi and Gurgaon?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            The cost depends on area that was treated, how many sessions are needed, how bad the pigmentation is, therapies that work together. After a consultation, treatment plans are made just for you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Pick Satya Skin and Hair Solutions?
          </h2>
          <ul className="list-disc pl-6 space-y-3 md:text-lg text-[#2B333C]/90">
            <li>Laser treatments supervised by a dermatologist</li>
            <li>New and improved Q-switched technology</li>
            <li>Safe methods for Indian skin</li>
            <li>Customised management of pigmentation</li>
            <li>Keep your focus on long-term care</li>
          </ul>
          <p className="mt-6 md:text-lg text-[#2B333C]/90">
            Patients looking for Laser Toning Treatment in Delhi and Gurgaon get structured, medically supervised skin care that helps them.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book Laser Toning Treatment in Delhi & Gurgaon
          </h2>
          <p className="md:text-xl opacity-90">
            If you have melasma, dark spots, uneven tone or dull skin and want safe, gradual brightening, laser toning is the right choice.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-5 px-9 rounded-full font-bold md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your FREE Consultation Today
          </button>
        </div>
      </section>

      {/* === FAQ === */}
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
      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </main>
  );
}