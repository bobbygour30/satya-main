'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function EyebrowTransplant() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.eyebrowBanner}
            alt="Eyebrow Transplant in Gurugram"
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
              Eyebrow Transplant in Gurugram
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              Natural eyebrow restoration with medical planning and aesthetic precision.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        <ContentBlock
          title="Eyebrow Hair Transplant for Thin or Missing Eyebrows"
          text={`Eyebrows play a critical role in facial expression, balance, and overall appearance. Sparse, thinning, or missing eyebrows can significantly affect confidence.

An eyebrow transplant is a specialised hair restoration service designed to recreate natural-looking eyebrows using a patient’s own hair follicles. At Satyaskinhair, the approach focuses on medical planning, aesthetic sensitivity, and conservative technique.`}
        />

        <ContentBlock
          title="What Is an Eyebrow Transplant?"
          text={`An eyebrow transplant is a microsurgical procedure in which healthy hair follicles are transplanted into the eyebrow region to restore shape, density, or symmetry.

Unlike temporary cosmetic solutions, eyebrow hair transplant offers a long-term structural solution. Success depends on correct planning, hair direction control, and patient suitability.`}
        />

        <ContentBlock
          title="Why People Choose Eyebrow Transplant"
          text={`Individuals may consider eyebrow transplant due to over-plucking, genetic thin eyebrows, hair loss from medical conditions, or scarring caused by trauma or burns.

Some also seek a permanent alternative to makeup, microblading, or tattooing. The objective is to restore real hair growth rather than surface pigmentation.`}
        />

        <ContentBlock
          title="Eyebrow Transplant Service at Satyaskinhair"
          text={`At Satyaskinhair, eyebrow transplantation is offered as a customised facial hair restoration service.

Each eyebrow design is personalised according to facial symmetry, gender, age, and natural brow pattern. The focus is on subtle, natural-looking results rather than exaggerated thickness.`}
        />

        <ContentBlock
          title="Consultation and Eyebrow Planning"
          text={`Consultation is the foundation of a successful eyebrow transplant. Eyebrow shape, density, arch position, and facial proportions are analysed carefully.

Design planning is done collaboratively with the patient to ensure long-term facial harmony rather than following short-term cosmetic trends.`}
        />

        <ContentBlock
          title="Donor Area Selection and Safety"
          text={`Hair follicles for eyebrow transplant are usually taken from the scalp, where growth is stable.

At Satyaskinhair, donor hair quality, thickness, and curl pattern are evaluated carefully. Only a limited number of follicles are extracted to preserve donor area integrity.`}
        />

        <ContentBlock
          title="Technique of Eyebrow Hair Transplant"
          text={`Eyebrow transplant is a highly precise procedure performed under local anaesthesia.

Individual follicles are extracted carefully and implanted into tiny recipient sites following natural hair direction and angle. Precision is essential because eyebrow hair grows at very acute angles.`}
        />

        <ContentBlock
          title="Importance of Hair Direction and Angle"
          text={`Correct hair direction is one of the most critical aspects of eyebrow transplantation.

At Satyaskinhair, each follicle is placed to match natural eyebrow growth patterns, including directional changes across the brow head, body, and tail. This defines the natural appearance of results.`}
        />

        <ContentBlock
          title="What to Expect After an Eyebrow Transplant?"
          text={`Mild redness or small scabs may appear after the procedure and usually resolve within days.

The donor area may show minor healing changes. Patients receive detailed aftercare guidance to support recovery and avoid irritation.`}
        />

        <ContentBlock
          title="Shedding and Regrowth Phase"
          text={`Transplanted eyebrow hair usually sheds within the first few weeks. This phase is normal and temporary.

New hair growth begins after a few months, and final density develops gradually over time rather than immediately.`}
        />

        <ContentBlock
          title="Long-Term Appearance and Grooming"
          text={`Eyebrow transplant results are long-lasting, but transplanted hair retains scalp hair characteristics.

This means regular trimming may be required to maintain eyebrow length. Grooming ensures a natural and refined appearance.`}
        />

        <ContentBlock
          title="Eyebrow Transplant vs Microblading"
          text={`Eyebrow transplant and microblading serve different purposes.

Microblading is a cosmetic tattoo, while eyebrow transplant restores real hair growth. Understanding this difference helps patients choose appropriately based on long-term goals.`}
        />

        <ContentBlock
          title="Who May Not Be Suitable for Eyebrow Transplant?"
          text={`Eyebrow transplant may not be suitable for individuals with active skin conditions, insufficient donor hair, or unrealistic expectations.

At Satyaskinhair, ethical guidance and patient safety take priority over performing unnecessary procedures.`}
        />

        <ContentBlock
          title="Why Choose Satyaskinhair for Eyebrow Transplant?"
          text={`Patients seeking eyebrow transplant in Gurugram often look for natural results, medical safety, and experienced handling.

At Satyaskinhair, eyebrow transplantation is performed with medical oversight, aesthetic planning, and long-term thinking rather than cosmetic shortcuts.`}
        />
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#FCEBDE]/60 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-semibold text-[#9E4A47] mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Is eyebrow transplant permanent?',
                a: 'Transplanted follicles are long-lasting, but regular grooming is required.',
              },
              {
                q: 'Does eyebrow transplant look natural?',
                a: 'Natural appearance depends on precise hair direction control and customised design.',
              },
              {
                q: 'Is eyebrow transplant painful?',
                a: 'The procedure is performed under local anaesthesia, minimising discomfort.',
              },
              {
                q: 'How long does it take to see results?',
                a: 'Visible regrowth develops gradually over several months.',
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
