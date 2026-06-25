import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from "react-icons/fc";
import assets from "../assets/assets";

/* ================= IMAGE SETS ================= */
// Using only Delhi images as requested
const DELHI_IMAGES = [
  assets.delhi1,
  assets.delhi2,
  assets.delhi3,
  assets.delhi4,
  assets.delhi5,
];

/* ================= SLIDER HOOK ================= */
function useAutoSlider(images, delay = 4000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [images.length, delay]);

  return index;
}

/* ================= STAR RATING ================= */
function StarRating({ rating }) {
  const percentage = (rating / 5) * 100;

  return (
    <div className="flex items-center justify-center gap-3 mt-1">
      <FcGoogle className="text-lg" />
      <div className="relative text-[18px] leading-none">
        <div className="text-[#E5E7EB] tracking-[1px]">★★★★★</div>
        <div
          className="absolute inset-0 overflow-hidden text-[#F5B301] tracking-[1px]"
          style={{ width: `${percentage}%` }}
        >
          ★★★★★
        </div>
      </div>
      <span className="text-sm font-medium text-[#2B333C]">{rating}</span>
    </div>
  );
}

export default function AboutSatyaDelhi() {
  const sliderIndex = useAutoSlider(DELHI_IMAGES, 4000);

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= IMAGE SLIDER ================= */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-6 sm:pt-8 md:pt-10">
        <div className="max-w-5xl mx-auto">
          {/* Slider Container */}
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden h-[220px] sm:h-[320px] md:h-[420px] lg:h-[480px] shadow-xl">
            {DELHI_IMAGES.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Satya Delhi Clinic ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                  ${i === sliderIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}
                `}
              />
            ))}

            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

            {/* Location Badge */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
              <span className="px-4 py-1.5 md:px-5 md:py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-[10px] sm:text-xs uppercase tracking-[0.15em] border border-white/20">
                Satya Delhi Clinic
              </span>
            </div>
          </div>

          {/* Rating and Location Name */}
          <div className="mt-4 md:mt-5 text-center">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#2B333C]">
              Satya Delhi Clinic
            </h3>
            <StarRating rating={4.6} />
            <p className="text-xs sm:text-sm text-[#828D9C] mt-1">
              Delhi, India
            </p>
          </div>
        </div>
      </section>

      {/* ================= PAGE HEADER ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 pt-8 sm:pt-12 md:pt-14">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#9E4A47]"
        >
          About Satya Delhi Clinic
        </motion.h1>

        <p className="mt-4 max-w-3xl text-[#828D9C] leading-relaxed text-sm sm:text-base">
          Satya Delhi Clinic was established to provide medically guided hair and skin care
          for individuals seeking clarity rather than quick fixes. The clinic functions
          as a doctor-led centre where every recommendation is based on diagnosis,
          suitability, and long-term impact rather than trends or volume-driven practices.
        </p>

        <p className="mt-3 max-w-3xl text-[#828D9C] leading-relaxed text-sm sm:text-base">
          Located in Delhi, our clinic serves patients who value careful evaluation,
          ethical boundaries, and outcomes that remain appropriate over time.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-10 sm:py-14 space-y-10">

        <ContentBlock
          title="The Thought Process Behind Satya Delhi"
          text={`Hair loss and skin concerns often evolve gradually and differ from person
to person. Satya Delhi Clinic follows the principle that treatment should begin only
after understanding the condition in depth.

This includes identifying the cause, assessing progression, and evaluating what
intervention, if any, is appropriate at that stage.

The clinic was designed to move away from standardised solutions and instead focus
on individual medical judgment.`}
        />

        <ContentBlock
          title="A Doctor-Led Model of Care"
          text={`Consultations at Satya Delhi Clinic are led by medical professionals who
evaluate hair and skin conditions clinically before discussing treatment options.

Decisions are guided by scalp health, donor quality, skin type, sensitivity, and
future considerations.

Patients are encouraged to understand why a treatment is suggested, what its
limitations are, and how it fits into a long-term care plan. This approach supports
informed decision-making without pressure.`}
        />

        <ContentBlock
          title="Hair Care at Satya Delhi Clinic"
          text={`Hair care at the Satyaskinhair clinic begins with understanding the pattern
and cause of hair loss.

Hair thinning may be genetic, hormonal, stress-related, or medical in origin. Each
type requires a different approach.

Surgical options such as hair transplantation are considered only when hair loss
is stable and donor safety can be preserved. Non-surgical management is discussed
when it offers meaningful benefit rather than temporary reassurance.`}
        />

        <ContentBlock
          title="Donor Safety and Future Hair Planning"
          text={`Donor hair is a limited resource. Once it is misused or over-extracted, it
cannot be restored.

For this reason, donor preservation is central to all hair-related decisions at
Satya Delhi Clinic.

Planning always considers future hair loss. The aim is to maintain a natural
appearance over time rather than achieving short-term density that may not age well.`}
        />

        <ContentBlock
          title="Skin Care at Satya Delhi Clinic"
          text={`Skin care services at the clinic are guided by dermatological assessment
rather than cosmetic experimentation.

Concerns such as acne, pigmentation, sensitivity, or ageing are evaluated based on
skin type, triggers, and tolerance.

Treatments are chosen conservatively to support skin health and reduce the risk of
irritation or pigmentation, particularly in Indian skin types.`}
        />

        <ContentBlock
          title="Why Location-Based Care in Delhi Matters"
          text={`Satya Delhi Clinic is designed for continuity of care.

Many skin and hair concerns require follow-up, reassessment, or phased treatment
rather than a single visit.

Being based in Delhi allows patients to maintain long-term follow-up with the same
medical team, ensuring consistency in evaluation and decision-making as conditions
change over time.`}
        />

        <ContentBlock
          title="Ethical Boundaries in Treatment Decisions"
          text={`Not every patient who visits Satya Delhi Clinic is advised a procedure.

In some situations, treatment may be deferred or not recommended if it is unlikely
to provide benefit or may cause harm.

Respecting these boundaries is considered a core part of ethical medical practice
at the clinic.`}
        />

        <ContentBlock
          title="Education-First Consultations"
          text={`Consultations at Satya Delhi Clinic focus on education.

Patients are guided through their diagnosis, the natural course of their condition,
and the realistic role of available treatments.

This approach reduces confusion and supports decisions aligned with long-term
health rather than short-term expectations.`}
        />

        <ContentBlock
          title="Who the Delhi Clinic Is Meant For"
          text={`The clinic is suited for individuals who prefer medical clarity over
cosmetic promises.

Many patients visit after exploring multiple options and are seeking honest guidance
rather than aggressive recommendations.`}
        />

        <ContentBlock
          title="Part of the Satya Care Philosophy"
          text={`Satya Delhi Clinic is part of Satyaskinhair, a practice built on ethical
care, conservative planning, and patient-first decision-making.

The Delhi clinic reflects this philosophy through its consultation style, treatment
planning, and long-term patient relationships.`}
        />

        <ContentBlock
          title="Making an Informed Choice in Delhi"
          text={`Choosing a hair and skin clinic is a long-term decision.

Satya Delhi Clinic exists for individuals who want their concerns evaluated
medically, their options explained clearly, and their outcomes planned thoughtfully.

This page is intended to help you understand how the Delhi clinic functions, so you
can decide whether its approach aligns with what you are looking for.`}
        />

      </section>

      {/* ================= GOOGLE MAP SECTION ================= */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9E4A47] text-center">
              Visit Our Delhi Clinic
            </h2>
            <p className="text-[#828D9C] text-sm sm:text-base text-center max-w-2xl mx-auto">
              Find us at our Delhi location. We're conveniently located for easy access.
            </p>

            {/* Google Map Embed */}
            <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55992.44778797523!2d77.05591678619385!3d28.703763070137203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c509a719b7%3A0xb718dea543f71f6f!2sSatya%20Skin%20%26%20Hair%20Solutions!5e0!3m2!1sen!2sin!4v1782391411984!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Satya Delhi Clinic Location"
                className="absolute inset-0"
              />
            </div>

            
          </motion.div>
        </div>
      </section>

    </main>
  );
}

/* ================= CONTENT BLOCK ================= */
function ContentBlock({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-[#9E4A47]">
        {title}
      </h2>
      <p className="text-[#828D9C] leading-relaxed whitespace-pre-line text-sm sm:text-base">
        {text}
      </p>
    </motion.div>
  );
}