'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSatyaDelhi() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= PAGE HEADER ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 pt-12 sm:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#9E4A47]"
        >
          About Satya Delhi Clinic
        </motion.h1>

        <p className="mt-4 max-w-3xl text-[#828D9C] leading-relaxed">
          Satya Delhi Clinic was established to provide medically guided hair and skin care
          for individuals seeking clarity rather than quick fixes. The clinic functions
          as a doctor-led centre where every recommendation is based on diagnosis,
          suitability, and long-term impact rather than trends or volume-driven practices.
        </p>

        <p className="mt-3 max-w-3xl text-[#828D9C] leading-relaxed">
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
      <p className="text-[#828D9C] leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </motion.div>
  );
}
