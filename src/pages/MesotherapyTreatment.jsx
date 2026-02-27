"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is mesotherapy safe?",
    a: "Yes, mesotherapy is usually safe when carried out by licensed professionals. Using natural components reduces the side effect risk.",
  },
  {
    q: "How long does a mesotherapy session take?",
    a: "Depending on the areas being treated, a normal mesotherapy session runs 30 to 60 minutes.",
  },
  {
    q: "How many mesotherapy sessions are needed?",
    a: "Individual skin problems affect the number of sessions, however many patients find changes following three to five treatments.",
  },
  {
    q: "What is the recovery time after mesotherapy?",
    a: "Most patients can continue their regular activities right away following treatment; they have minimal to no downtime.",
  },
  {
    q: "How much does mesotherapy cost in Delhi?",
    a: "Depending on several criteria, mesotherapy in Delhi usually costs ₹3,000 to ₹8,000 each session.",
  },
  {
    q: "What is mesotherapy used to treat?",
    a: "A range of skin and hair problems is addressed by mesotherapy. Skin rejuvenation, fine line and wrinkle reduction, enhanced skin hydration, and cellulite treatment all benefit from this often-utilized technique. It's also a flexible cosmetic procedure since it targets localized fat deposits and promotes hair development.",
  },
  {
    q: "How long does mesotherapy last?",
    a: "Depending on your skin type, the treatments utilized, and your general skincare regimen, mesotherapy results last for 3 to 6 months. Maintaining the outcomes may call for regular maintenance visits.",
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

export default function MesotherapyTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* === PREMIUM MESOTHERAPY HERO BANNER === */}
      <section className="relative w-full min-h-[64vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-left bg-contain opacity-90"
          style={{
            backgroundImage: `url('${assets.mesofacebanners || assets.banner}')`,
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
                Mesotherapy Treatment: The Future of Skin Rejuvenation
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
                Targeted Nutrient Delivery
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Mesotherapy is a non-invasive skin rejuvenation treatment that uses ultrafine needles to target the delivery of a powerful cocktail of naturally rejuvenating substances. The deep mesodermal layers of the skin house the organized structures of collagen and elastin fibers – essential ingredients in the prevention of premature ageing. Targeting this area with rejuvenating agents strengthens and rebuilds these organized structures to tighten sagging, loose skin and plump.
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
              src={assets.mesofacebanners}
              alt="Mesotherapy Treatment"
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
              Minimal Downtime • Collagen Boost • Customizable • Natural Rejuvenation • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Minimal Downtime • Collagen Boost • Customizable • Natural Rejuvenation • Satya Skin & Hair Solutions
            </span>
          </div>

          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Minimal Downtime • Collagen Boost • Customizable • Natural Rejuvenation • Satya Skin & Hair Solutions
            </span>
            <span className="px-12">
              Minimal Downtime • Collagen Boost • Customizable • Natural Rejuvenation • Satya Skin & Hair Solutions
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
              advanced Mesotherapy treatments across Gurugram and Delhi NCR. We
              ensure targeted rejuvenation, collagen stimulation, and long-lasting skin health without shortcuts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Mesotherapy Treatment Section */}
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
              What is Mesotherapy Treatment?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Mesotherapy is a non-invasive skin rejuvenation treatment that uses ultrafine needles to target the delivery of a powerful cocktail of naturally rejuvenating substances. The deep mesodermal layers of the skin house the organized structures of collagen and elastin fibers – essential ingredients in the prevention of premature ageing. Targeting this area with rejuvenating agents strengthens and rebuilds these organized structures to tighten sagging, loose skin and plump.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                The treatment is commonly used for: Skin Rejuvenation: To improve skin texture, hydration, uneven skin tone and elasticity. Hair Loss: To promote hair growth by stimulating hair follicles and improving blood circulation in the scalp. Fat Reduction: To reduce localized fat and cellulite by breaking down fat cells. Mesotherapy offers targeted treatment with minimal downtime and is customizable based on individual needs.
              </p>

              <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
                The mesotherapy process stimulates the skin both chemically and physically. The patient's skin type, age, and general condition are carefully evaluated before beginning treatment. This evaluation guides the suitable composition of medications to be injected, maybe including: Amino Acids, Enzymes, Hormones, Vitamins and Minerals, Antioxidants, Hyaluronic Acid. Direct injection of these drugs into the designated locations allows them to enhance blood circulation and encourage the development of new cells. Mesotherapy repairs the skin, increases its firmness, and stimulates renewal by affecting the structures of collagen and elastin.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "Improves skin texture",
                  "Reduces fine lines",
                  "Enhances hydration",
                  "Targets specific areas",
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
                When performed correctly, Mesotherapy delivers really natural results
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
                  src="https://www.youtube.com/embed/VIDEO_ID_MESOTHERAPY"
                  title="Mesotherapy Treatment Procedure"
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
            Benefits of Mesotherapy Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Improves Skin Texture and Tone",
                text: "Nutrient direct delivery improves skin brightness and evens out pigment, therefore producing a more brilliant complexion.",
              },
              {
                title: "Reduces Fine Lines and Wrinkles",
                text: "Stimulating collagen and elastin helps to lessen the appearance of fine wrinkles, therefore smoothing out, younger-looking skin.",
              },
              {
                title: "Targets Specific Areas",
                text: "Effective for localized fat deposits and skin contouring, the procedure can be tailored for different body areas including the face, neck, and hands.",
              },
              {
                title: "Enhances Skin Hydration",
                text: "Ingredients including hyaluronic acid greatly increase skin moisture levels, therefore enhancing hydration and plumpness.",
              },
              {
                title: "Reduces Cellulite",
                text: "Mesotherapy gently breaks down fat deposits, therefore enhancing circulation in cellulite-affected areas.",
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
              How Does Mesotherapy Work?
            </h2>
            <p className="md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              At Satya Skin & Hair Solutions, patient safety and long-term
              outcomes come first. Here is what to expect during a Mesotherapy treatment in Gurugram.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            {[
              {
                title: "Consultation & Evaluation",
                text: "The patient's skin type, age, and general condition are carefully evaluated before beginning treatment.",
              },
              {
                title: "Composition Selection",
                text: "Suitable composition of medications to be injected, including Amino Acids, Enzymes, Hormones, Vitamins and Minerals, Antioxidants, Hyaluronic Acid.",
              },
              {
                title: "Direct Injection",
                text: "Ultrafine needles target delivery of the cocktail into the deep mesodermal layers.",
              },
              {
                title: "Stimulation & Renewal",
                text: "Enhances blood circulation, encourages new cell development, repairs skin, increases firmness, and stimulates collagen and elastin renewal.",
              },
              {
                title: "Post-Treatment Care",
                text: "Minimal downtime; resume activities immediately with gentle skincare.",
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
            Why Do We Need Mesotherapy Treatment?
          </h2>
          <p className="md:text-xl text-[#2B333C]/80 max-w-3xl mx-auto">
            The treatment is commonly used for: Skin Rejuvenation: To improve skin texture, hydration, uneven skin tone and elasticity. Hair Loss: To promote hair growth by stimulating hair follicles and improving blood circulation in the scalp. Fat Reduction: To reduce localized fat and cellulite by breaking down fat cells. Mesotherapy offers targeted treatment with minimal downtime and is customizable based on individual needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "3–5 Sessions", desc: "For noticeable changes" },
              { time: "2–4 Weeks", desc: "Interval between sessions" },
              { time: "3–6 Months", desc: "Results duration" },
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
            skin is improving the way it should — this follow-up is very important
            for achieving the best results.
          </p>
        </div>
      </section>

      {/* Cost & Truth */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 space-y-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-[#DFDFDD]">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Mesotherapy Cost
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Factors including the location of the clinic, the practitioner's degree of experience, and the particular drugs utilized can affect the cost of mesotherapy. In India, mesotherapy usually runs from ₹5000 to ₹8,000 each session. For individuals looking for continuous therapy, many clinics provide package discounts for several sessions, which offers a more affordable choice.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="md:text-3xl font-bold text-[#9E4A47] mb-6">
            Important Truth About Mesotherapy Treatment
          </h2>
          <p className="md:text-lg leading-relaxed text-[#2B333C]/90">
            Mesotherapy is not suitable for everyone. For severe aging or deep concerns, more invasive treatments may be needed. Results vary and require multiple sessions; it's not a one-time fix. Always ensure medical supervision to avoid risks like infection or allergic reactions.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 sm:py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold">
            Book Your Mesotherapy Treatment Consultation
          </h2>
          <p className="md:text-xl opacity-90">
            Those looking to revitalize their skin, minimize the effects of aging, and get a young glow would find mesotherapy treatment to be quite good. Among those seeking non-invasive cosmetic remedies, it has grown especially well-liked with its focused approach and low downtime. See seasoned experts in a reputable clinic to decide on the best mesotherapy schedule for your objectives regarding skin health and appearance.
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