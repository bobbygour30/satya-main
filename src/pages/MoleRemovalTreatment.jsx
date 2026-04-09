"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Is it permanent to remove a mole?",
    a: "Yes, it usually doesn’t grow back if you get the mole removed the right way.",
  },
  {
    q: "Will there be a scar after mole removal?",
    a: "In most cases this technique results in healing with minimal or no visible scarring.",
  },
  {
    q: "Is mole removal painful?",
    a: "No. People do well who have the procedure performed with local anesthesia.",
  },
  {
    q: "Can moles grow back after removal?",
    a: "Rarely, if mole cells remain. Proper removal minimizes recurrence.",
  },
  {
    q: "How long does it take to heal?",
    a: "1–2 weeks is the normal healing time, depending on the method.",
  },
  {
    q: "Is laser mole removal safe for face?",
    a: "Yes, when conducted by skilled dermatologists with the right parameters.",
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

export default function MoleRemovalTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false); // kept for CTA consistency

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META ==================== */}
      <SEO
        title="Mole Removal Treatment – Satya | Safe & Scar-Minimized Mole Removal in Delhi & Gurgaon"
        description="Looking for Mole Removal Treatment in Delhi or the Best Doctor for Mole Removal Treatment in Gurgaon? Safe, scar-minimized mole removal by dermatologist experts at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/skin/mole-removal"
        showSchema={false}
      />

      {/* === PREMIUM HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-left bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.moleRemoval || assets.banner}')`,
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-10 items-center sm:py-12 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Best Mole Removal Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Mole Removal Treatment – Satya
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Moles are bumps on the skin that can appear anywhere on the body. Most moles are harmless, but some people opt to have them removed for cosmetic reasons or because they become irritated or repeatedly injured, or for medical reasons.
              If you are looking for Mole Removal Treatment in Delhi or Best Doctor For Mole Removal Treatment In Gurgaon, you need to get a proper medical assessment first.
              At Satya Skin & Hair Solutions you get the mole removal performed under the supervision of a Dermatologist by safe latest technology procedures incorporating least scarring, precision and skin safety.
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
              src={assets.moleRemoval}
              alt="Mole Removal Treatment"
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
              Scar-Minimized Removal • Laser Precision • Radiofrequency Accuracy • Surgical Safety • Permanent Results • Facial Aesthetics • Minimal Downtime • Satya Excellence
            </span>
            <span className="px-12">
              Scar-Minimized Removal • Laser Precision • Radiofrequency Accuracy • Surgical Safety • Permanent Results • Facial Aesthetics • Minimal Downtime • Satya Excellence
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Scar-Minimized Removal • Laser Precision • Radiofrequency Accuracy • Surgical Safety • Permanent Results • Facial Aesthetics • Minimal Downtime • Satya Excellence
            </span>
            <span className="px-12">
              Scar-Minimized Removal • Laser Precision • Radiofrequency Accuracy • Surgical Safety • Permanent Results • Facial Aesthetics • Minimal Downtime • Satya Excellence
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
              Ethical, patient-centric protocols — balancing safety, precision removal, minimal scarring, and skin health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What Is + When to Consider + Benefits + Video === */}
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
              What Is Mole Removal Treatment?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-[#2B333C]/90">
                A dermatologist performs Mole Removal Procedure to eliminate unwanted or suspicious moles safely. Based on the mole type, size and depth, treatment might involve laser, radiofrequency, surgical excision or shave removal. The aim is to remove the mole in its entirety and to do so with minimal scarring, while also protecting the skin around it.
              </p>

              <h3 className="text-xl md:text-3xl font-bold text-[#9E4A47]">
                When Should You Consider Mole Removal?
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "The mole changes in size, color, or shape",
                  "It bleeds, itches, or causes discomfort",
                  "It gets irritated by clothing or shaving",
                  "It affects your facial aesthetics",
                  "You want cosmetic mole removal",
                  "There is suspicion of abnormal skin growth",
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
                Benefits of Professional Mole Removal
              </h3>
              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Safe & Medical Oversight — Performed by expert dermatologists with sterile, controlled protocols.",
                  "Minimal Scarring — Contemporary techniques minimize the risk of visible scarring, particularly on the face.",
                  "Quick Procedure — Most mole removal procedures take 15 - 30 minutes.",
                  "Permanent Removal — When properly removed, a mole does not normally come back.",
                  "Better Looking Skin — Increased confidence when you can remove face and any stock moles.",
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

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFDFDD]/50"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/epBv7GhxjjM?si=MlpT6ES5vjL8FdOh"
                  title="Mole Removal Treatment at Satya"
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

      {/* === Types of Techniques === */}
      <section className="sm:py-20 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Types of Mole Removal Techniques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Laser Mole Removal",
                text: "Is best for smaller, more superficial moles. Less bleeding and quicker healing.",
              },
              {
                title: "Radiofrequency Mole Removal",
                text: "Exact removal with a controlled heat energy.",
              },
              {
                title: "Surgical Excision",
                text: "For deeper or suspicious moles. This guarantees a thorough removal.",
              },
              {
                title: "Shave Removal",
                text: "Perfect for raised moles that are not too deep-rooted in the skin.",
              },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#DFDFDD] hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="font-semibold text-[#9E4A47] mb-3 text-lg">{tech.title}</h3>
                <p className="text-[#828D9C] leading-relaxed">{tech.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center md:text-lg text-[#2B333C]/80 mt-10 max-w-4xl mx-auto">
            The method is chosen according to safety, mole thickness and cosmetic result.
          </p>
        </div>
      </section>

      {/* === Procedure + Aftercare + Cost === */}
      <section className="sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            What Happens During Mole Removal Treatment?
          </h2>
          <div className="space-y-6 md:text-lg text-[#2B333C]/90">
            <p><strong>Consultation and Skin Check</strong> — Checking moles • Examination with a dermatoscope • A look at the medical history • Choice of method</p>
            <p><strong>Procedure</strong> — The area was cleaned and numbed with local anesthesia • The chosen method of removal was used • Very Minimal pain during the procedure</p>
            <p><strong>Post-Treatment Care</strong> — Mild dressing if required • Healing guidance provided • Sun protection advised • Scar care instructions given</p>
          </div>
          <p className="mt-6 text-[#9E4A47] font-semibold">Most patients resume routine activities immediately.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Getting Better After Mole Removal
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            A little redness for a few days • Formation of small scabs • Getting better in 7 to 14 days • Little time off. Following aftercare instructions ensures optimal healing and minimal scarring.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            How much does mole removal treatment cost in Delhi and Gurgaon?
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            The cost depends on: How big and deep the mole is • Where on the body it is • Technique used • If a biopsy is needed. Prices at Satya Skin & Hair Solutions are clear and based on a proper dermatological evaluation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Why Satya Skin & Hair Solutions?
          </h2>
          <ul className="list-disc pl-6 space-y-3 md:text-lg text-[#2B333C]/90">
            <li>Dermatologist performed procedures</li>
            <li>State of the art laser and surgical techniques</li>
            <li>Focus on least scarring</li>
            <li>Indian skin safe</li>
            <li>Fair medical opinion</li>
          </ul>
          <p className="mt-6 md:text-lg text-[#2B333C]/90">
            We have gained a great reputation amongst those who want the best treatment for Mole Removal in Gurgaon. Our clinic is the right place for you if you want your moles removed safely and effectively.
          </p>
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-4xl md:text-5xl font-bold">
            Book an appointment for mole removal
          </h2>
          <p className="md:text-xl opacity-90">
            If you want to get mole removal treatment in Delhi or find the best doctor for mole removal treatment in Gurgaon, the first step is to talk to an expert.
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