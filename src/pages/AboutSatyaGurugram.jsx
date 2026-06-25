import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from "react-icons/fc";
import assets from "../assets/assets";

/* ================= IMAGE SETS ================= */
// Using only Gurugram images
const GURUGRAM_IMAGES = [
  assets.gurgao1,
  assets.gurgao2,
  assets.gurgao3,
  assets.gurgao5,
  assets.gurgao6,
  assets.gurgao7,
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

export default function AboutSatyaGurugram() {
  const sliderIndex = useAutoSlider(GURUGRAM_IMAGES, 4000);

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= IMAGE SLIDER ================= */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pt-6 sm:pt-8 md:pt-10">
        <div className="max-w-5xl mx-auto">
          {/* Slider Container */}
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden h-[220px] sm:h-[320px] md:h-[420px] lg:h-[480px] shadow-xl">
            {GURUGRAM_IMAGES.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Satya Gurugram Clinic ${i + 1}`}
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
                Satya Gurugram Clinic
              </span>
            </div>
          </div>

          {/* Rating and Location Name */}
          <div className="mt-4 md:mt-5 text-center">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#2B333C]">
              Satya Gurugram Clinic
            </h3>
            <StarRating rating={4.8} />
            <p className="text-xs sm:text-sm text-[#828D9C] mt-1">
              Gurugram, India
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
          About Satya Gurugram Clinic
        </motion.h1>

        <p className="mt-4 max-w-3xl text-[#828D9C] leading-relaxed text-sm sm:text-base">
          Satya Gurugram Clinic was created with a clear intent: to offer hair and skin care
          that is guided by medical judgment rather than trends or commercial pressure.
          The clinic functions as a doctor-led centre where every treatment decision begins
          with understanding the patient's condition, not with pre-decided procedures.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-10 sm:py-14 space-y-10">

        <ContentBlock
          title="The Philosophy Behind Satya Gurugram"
          text={`Hair loss and skin concerns are not isolated events. They are biological
processes that evolve with age, lifestyle, health, and genetics.

Satya Gurugram Clinic was built on the belief that these conditions require structured
evaluation and long-term planning, not rushed interventions.

Instead of offering identical treatments to everyone, the clinic follows a conservative
philosophy where diagnosis comes first, suitability is assessed carefully, and
intervention is recommended only when it is genuinely appropriate.`}
        />

        <ContentBlock
          title="A Doctor-Led Model of Care"
          text={`All consultations at Satya Gurugram Clinic are led by medical professionals.

Treatment plans are created after evaluating scalp health, donor quality, skin condition,
progression patterns, and individual risk factors.

Patients are guided to understand not only what treatment is being suggested, but why it
is being chosen and what limitations exist. The emphasis remains on informed decision-
making rather than persuasion.`}
        />

        <ContentBlock
          title="What Patients Are Really Searching For"
          text={`Many people searching for the best hair & skin clinic in Gurugram are not
looking for rankings or claims. They are looking for reassurance that their condition
will be understood, not oversimplified.

Consultations at Satya Gurugram Clinic are structured to address questions patients
often carry silently:
• Is my condition stable?
• Do I need treatment now or later?
• What happens if I do nothing?
• How will this decision affect me in five or ten years?`}
        />

        <ContentBlock
          title="Hair Care at Satya Gurugram Clinic"
          text={`Hair care at the clinic focuses on understanding the cause and pattern of hair
loss before choosing any form of management.

Hair loss may be genetic, hormonal, stress-related, medical, or progressive. Each type
requires a different approach.

Surgical options such as hair transplantation are considered only when hair loss is
stable and donor safety can be preserved. Non-surgical options are discussed when they
offer meaningful benefit rather than temporary reassurance.`}
        />

        <ContentBlock
          title="Donor Safety and Long-Term Hair Planning"
          text={`Donor hair is a limited and irreplaceable resource. Once it is extracted
incorrectly or excessively, the damage is permanent.

For this reason, donor preservation is central to every hair-related decision at Satya
Gurugram Clinic.

Planning always accounts for future hair loss progression. The objective is to maintain
a natural appearance over time, not to maximise short-term density at the cost of long-
term consequences.`}
        />

        <ContentBlock
          title="Skin Care at Satya Gurugram Clinic"
          text={`Skin care at the clinic is guided by dermatological evaluation rather than
cosmetic experimentation.

Concerns such as pigmentation, acne, sensitivity, or ageing are assessed in the context
of skin type, triggers, and tolerance.

Treatments are selected conservatively, with the aim of improving skin health gradually
and safely. Aggressive procedures are avoided when not medically justified, especially
for Indian skin types prone to pigmentation.`}
        />

        <ContentBlock
          title="The Importance of Location-Based Care in Gurugram"
          text={`Hair loss and skin conditions rarely resolve in a single visit. They require
monitoring, reassessment, and sometimes changes in approach over time.

Being a location-based clinic allows patients to maintain follow-up with the same
medical team, ensuring consistency in decisions and continuity of care rather than
fragmented treatment experiences.`}
        />

        <ContentBlock
          title="Ethical Boundaries in Treatment Decisions"
          text={`Not every patient who visits the clinic is advised a procedure.

Treatment may be deferred or not recommended when hair loss is unstable, donor reserves
are insufficient, or skin conditions require medical control first.

Respecting these boundaries is considered essential to ethical medical practice, even
when it means advising patience or restraint.`}
        />

        <ContentBlock
          title="Education-First Consultations"
          text={`Consultations at Satya Gurugram Clinic are designed to educate rather than
convince.

Patients are encouraged to understand their diagnosis, the natural course of their
condition, and the realistic impact of each available option.

This approach allows patients to take ownership of their decisions and reduces regret
that often follows rushed or poorly explained treatments.`}
        />

        <ContentBlock
          title="Who the Clinic Is Meant For"
          text={`The clinic is suited for individuals who value clarity over claims and
long-term thinking over quick results.

Many patients come after consulting multiple centres and are seeking grounded medical
perspective rather than volume-driven opinions.`}
        />

        <ContentBlock
          title="Part of the Satya Care Philosophy"
          text={`Satya Gurugram Clinic is part of Satya Skin & Hair Solutions, a practice built
on ethical care, conservative planning, and patient-first decision-making.

The clinic reflects this philosophy through its consultation style, treatment planning,
and long-term patient relationships.`}
        />

        <ContentBlock
          title="Making an Informed Choice"
          text={`Choosing a hair and skin clinic in Gurugram is a long-term decision.

Satya Gurugram Clinic exists for individuals who want their concerns understood
medically, their options explained honestly, and their outcomes planned thoughtfully.

This page is intended to help you understand how the clinic functions, so you can decide
whether its approach aligns with what you are looking for.`}
        />

      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#FCEBDE]/60 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-semibold text-[#9E4A47] mb-6">FAQ</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Is Satya Gurugram Clinic only for hair transplants?',
                a: 'No. The clinic focuses on overall hair and skin care. Surgery is considered only when medically appropriate.',
              },
              {
                q: 'How are treatments decided at the clinic?',
                a: 'All treatments are planned after diagnosis, evaluation, and long-term consideration, not pre-set packages.',
              },
              {
                q: 'Will every patient be advised a procedure?',
                a: 'No. In some cases, treatment may be delayed or not recommended if it is not suitable.',
              },
              {
                q: 'Why is long-term planning important?',
                a: 'Hair and skin conditions evolve over time. Planning helps protect future outcomes and avoid overtreatment.',
              },
              {
                q: 'Who should visit Satya Gurugram Clinic?',
                a: 'Anyone seeking clear medical guidance, ethical care, and realistic treatment planning.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#DFDFDD] rounded-xl p-5">
                <h3 className="font-medium text-[#2B333C]">{item.q}</h3>
                <p className="mt-2 text-sm text-[#828D9C]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
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
              Visit Our Gurugram Clinic
            </h2>
            <p className="text-[#828D9C] text-sm sm:text-base text-center max-w-2xl mx-auto">
              Find us at our Gurugram location. We're conveniently located for easy access.
            </p>

            {/* Google Map Embed */}
            <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14029.740853278143!2d77.06744513514674!3d28.466437149407515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d198f5f49c53b%3A0xe0b42c1f0611df3a!2sSatya%20Skin%20%26%20Hair%20Solutions!5e0!3m2!1sen!2sin!4v1782391221901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Satya Gurugram Clinic Location"
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