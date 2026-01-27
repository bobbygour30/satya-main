'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function BeardHairTransplant() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.beardBanner}
            alt="Beard Hair Transplant in Gurugram"
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
              Beard Hair Transplant in Gurugram
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              A medically planned approach to natural facial hair restoration.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        <ContentBlock
          title="Understanding Beard Hair Transplant"
          text={`A well-defined beard plays an important role in facial appearance and confidence. However, not everyone develops uniform or adequate beard growth.

Beard Hair Transplant in Gurugram is a medical procedure designed to restore facial hair using a patient’s own hair follicles. At Satyaskinhair, the focus is on precision, donor safety, and long-term facial harmony rather than cosmetic trends.`}
        />

        <ContentBlock
          title="Beard Hair Transplant in Gurugram"
          text={`The procedure involves transplanting healthy hair follicles from a donor area—usually the scalp—into areas with sparse or absent beard growth.

It may be considered for individuals with genetic patchiness, facial asymmetry, scarring from acne or injury, or uneven growth patterns. Each case is evaluated individually at Satyaskinhair.`}
        />

        <ContentBlock
          title="Understanding the Need for Beard Hair Transplant"
          text={`Beard growth depends on genetics, hormonal response, and skin health. In some individuals, follicles may be absent or inactive in certain facial regions.

A beard hair transplant is considered when conservative treatments do not provide meaningful improvement. It is a structural solution that requires medical judgement and careful planning.`}
        />

        

        <ContentBlock
          title="Consultation and Planning"
          text={`Consultation is a critical step before considering a Beard Hair Transplant in Gurugram. Facial hair pattern, donor quality, skin condition, and medical history are carefully assessed.

At Satyaskinhair, planning focuses on restoring balance and natural appearance rather than creating excessive or artificial density.`}
        />

        <ContentBlock
          title="Importance of Donor Area Assessment"
          text={`The donor area is a limited resource. Excessive extraction may compromise scalp density and future hair restoration options.

Satyaskinhair follows a conservative donor management philosophy, ensuring donor preservation and long-term planning.`}
        />

        <ContentBlock
          title="Facial Hair Design and Aesthetic Planning"
          text={`Beard hair varies in density, angle, and direction across different facial zones. Improper planning can result in unnatural appearance.

At Satyaskinhair, beard design is customised based on facial structure, age, and existing hair pattern to mimic natural growth.`}
        />

        <ContentBlock
          title="Technique of Beard Hair Transplant Procedure"
          text={`The procedure is usually performed using an FUE-based method under local anaesthesia. Individual follicles are extracted and implanted following precise angles and depth.

Special care is taken because facial hair grows at sharper angles and is more visible than scalp hair.`}
        />

        <ContentBlock
          title="Shedding, Regrowth, and Long-Term Expectations"
          text={`Transplanted beard hair may shed within the first few weeks. This phase is normal and temporary.

New growth begins after a few months and matures gradually. Final appearance develops over time and varies between individuals.`}
        />

        <ContentBlock
          title="When Beard Hair Transplant May Not Be Recommended"
          text={`Beard hair transplant may not be suitable for individuals with insufficient donor hair, active skin conditions, or unrealistic expectations.

At Satyaskinhair, patient safety and long-term outcomes always take priority over recommending surgery.`}
        />

        <ContentBlock
          title="An Ethical Consultation at Satyaskinhair"
          text={`Choosing Beard Hair Transplant in Gurugram is a personal medical decision.

Consultations at Satya Skin & Hair Solutions focus on education, assessment, and long-term planning to support informed choices that prioritise natural appearance and facial harmony.`}
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
                q: 'Is beard hair transplant permanent?',
                a: 'Transplanted hair is generally resistant to common causes of beard hair loss, but long-term appearance varies between individuals.',
              },
              {
                q: 'Will the beard look natural?',
                a: 'Natural appearance depends on planning, graft placement, and respect for facial anatomy.',
              },
              {
                q: 'Is everyone suitable for beard hair transplant?',
                a: 'No. Suitability depends on donor quality, skin condition, and realistic expectations.',
              },
              {
                q: 'Can transplanted beard hair be shaved or styled?',
                a: 'Yes. After healing, transplanted beard hair can be shaved and styled like natural facial hair.',
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
