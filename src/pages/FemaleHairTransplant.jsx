'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function FemaleHairTransplant() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.femaleBanner}
            alt="Female Hair Transplant in Gurugram"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#2B333C]/70 via-[#2B333C]/55 to-[#9E4A47]/40" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FFF8EF]"
            >
              Female Hair Transplant in Gurugram
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              A medically planned approach to hair restoration for women at Satyaskinhair.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        <ContentBlock
          title="Understanding Female Hair Loss"
          text={`Hair loss in women is often misunderstood, underdiagnosed, and emotionally distressing. Unlike male pattern baldness, female hair loss presents in varied patterns and is frequently linked to hormonal, genetic, or medical factors.

At Satyaskinhair, female hair transplantation is approached with medical caution, aesthetic sensitivity, and long-term planning, recognising that women’s hair loss requires a different strategy than men.`}
        />

        <ContentBlock
          title="Understanding Female Hair Loss Patterns"
          text={`Female hair loss commonly appears as diffuse thinning over the crown, widening of the central part, or reduced density rather than complete bald patches.

Conditions such as female pattern hair loss, traction alopecia, scarring alopecia, or hair loss after trauma may contribute. Understanding the underlying cause is essential before considering surgery.`}
        />

        <ContentBlock
          title="When Female Hair Transplant Is Considered"
          text={`A Female Hair Transplant in Gurugram may be considered when hair loss is stable, donor density is adequate, and non-surgical treatments have not provided sufficient improvement.

Women with localised thinning, frontal hairline recession, or scarring often benefit more than those with widespread diffuse thinning. Each case is assessed individually.`}
        />

        <ContentBlock
          title="Importance of Medical Evaluation Before Transplant"
          text={`Female hair loss often has medical contributors such as thyroid imbalance, iron deficiency, hormonal changes, or autoimmune conditions.

At Satyaskinhair, women are advised to consult a qualified dermatologist doctor in gurgaon before considering surgery. Treating underlying causes is essential for safe and effective outcomes.`}
        />

        <ContentBlock
          title="Female Hair Transplant in Gurugram"
          text={`Female Hair Transplant in Gurugram is performed using techniques adapted to women’s hair characteristics and styling preferences.

The focus is on density enhancement, part-line correction, or filling localised areas while maintaining a natural look. Donor safety remains a priority.`}
        />

        <ContentBlock
          title="Consultation and Planning"
          text={`Consultation is the foundation of a successful female hair transplant. Hair loss pattern, donor area quality, scalp condition, and future hair loss risk are evaluated carefully.

At Satyaskinhair, women are counselled honestly about what transplantation can and cannot achieve, ensuring realistic expectations and long-term satisfaction.`}
        />

        <ContentBlock
          title="Donor Area Considerations in Women"
          text={`The donor area in women is assessed differently than in men. Diffuse thinning may affect donor stability, making extraction unsafe in some cases.

Satyaskinhair follows a conservative donor management approach, ensuring donor thinning or patchiness does not occur after surgery.`}
        />

        <ContentBlock
          title="Technique Selection for Female Hair Transplant"
          text={`Female hair transplantation is usually performed using follicular unit extraction-based techniques, customised to minimise visible changes.

Technique selection depends on hair length, density, scalp condition, and styling habits. Medical suitability always takes precedence over technique choice.`}
        />

        <ContentBlock
          title="Hairline and Density Planning in Women"
          text={`Hairline planning in women differs significantly from men. Female hairlines are softer, curved, and more variable.

At Satyaskinhair, hairline and density planning respects facial proportions, age, and ethnic characteristics, focusing on natural fullness rather than exaggerated volume.`}
        />

        <ContentBlock
          title="What to Expect After a Female Hair Transplant"
          text={`Mild swelling, redness, or scabbing may occur after the procedure and usually resolves within days.

Most women can resume daily activities gradually, following post-procedure care instructions. Healing experiences vary individually.`}
        />

        <ContentBlock
          title="Shedding, Regrowth, and Long-Term Expectations"
          text={`Transplanted hair often sheds within the first few weeks. This phase is temporary and normal.

New growth begins after a few months and continues gradually. Female hair transplant results develop over time and follow biological hair cycles.`}
        />

        <ContentBlock
          title="Role of Medical Management After Transplant"
          text={`In women, medical management often continues after transplantation to support existing hair and slow further thinning.

Coordination with a dermatologist doctor in gurgaon helps improve long-term outcomes and hair health.`}
        />

        <ContentBlock
          title="When Female Hair Transplant May Not Be Recommended"
          text={`Female hair transplant may not be advised in cases of active diffuse thinning, unstable medical conditions, or unrealistic expectations.

At Satyaskinhair, patient safety and long-term hair health always take priority over surgical intervention.`}
        />

        <ContentBlock
          title="Psychological Considerations in Female Hair Loss"
          text={`Hair loss can significantly affect emotional wellbeing in women.

Consultations at Satyaskinhair are handled sensitively, acknowledging emotional aspects alongside medical facts to support informed and confident decision-making.`}
        />
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#FCEBDE]/60 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-semibold text-[#9E4A47] mb-6">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Is female hair transplant permanent?',
                a: 'Transplanted hair behaves like natural hair, but overall appearance depends on future hair loss progression.',
              },
              {
                q: 'Do women need to shave hair for transplant?',
                a: 'In many cases, shaving can be minimised or avoided, depending on technique and area treated.',
              },
              {
                q: 'Is female hair transplant suitable for everyone?',
                a: 'No. Suitability depends on diagnosis, donor quality, and stability of hair loss.',
              },
              {
                q: 'Can female hair transplant be combined with treatments?',
                a: 'Yes. Medical management often complements surgical restoration.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#DFDFDD] p-5"
              >
                <h3 className="font-medium text-[#2B333C]">{faq.q}</h3>
                <p className="mt-2 text-sm text-[#828D9C]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ETHICAL NOTE ================= */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-sm text-[#828D9C]">
            An ethical, doctor-led consultation at Satyaskinhair focuses on diagnosis,
            education, and realistic planning rather than persuasion. Sustainable hair
            restoration prioritises health, safety, and natural appearance.
          </p>
        </div>
      </section>

    </main>
  );
}

/* ================= HELPER ================= */
function ContentBlock({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
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
