'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function HairWeaving() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.hairWeavingBanner}
            alt="Best Hair Weaving in Gurugram"
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
              Best Hair Weaving in Gurugram
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              Professional hair weaving solutions for natural-looking hair.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        <ContentBlock
          title="Professional Hair Weaving Solutions at Satyaskinhair"
          text={`Hair loss can affect appearance, confidence, and daily comfort. Many individuals searching for the best hair weaving in Gurugram are looking for a non-surgical hair replacement service that offers immediate cosmetic improvement.

At Satyaskinhair, hair weaving services are provided with medical oversight, scalp safety, and personalised planning to ensure comfort, hygiene, and a natural appearance.`}
        />

        <ContentBlock
          title="Hair Weaving Services at Satyaskinhair"
          text={`Hair weaving at Satyaskinhair is offered as a customised service rather than a one-size-fits-all solution.

Each system is planned according to scalp condition, hair loss pattern, lifestyle, and maintenance preference, ensuring natural integration with existing hair while prioritising scalp health.`}
        />

        <ContentBlock
          title="What Is Hair Weaving?"
          text={`Hair weaving is a non-surgical method of attaching a customised hair system to the scalp using techniques such as bonding, clips, tapes, or thread integration.

It provides instant cosmetic coverage for bald or thinning areas and is commonly chosen by individuals seeking immediate results without surgery or downtime.`}
        />

        <ContentBlock
          title="Who Can Benefit from Hair Weaving in Gurugram?"
          text={`Hair weaving is suitable for individuals with advanced baldness, insufficient donor hair for transplantation, or medical conditions that prevent surgery.

It is also preferred by those seeking a reversible and adjustable solution. Suitability is assessed after scalp and lifestyle evaluation at Satyaskinhair.`}
        />

        <ContentBlock
          title="Consultation and Hair Weaving Planning"
          text={`Every hair weaving service begins with a detailed consultation. The scalp is examined for sensitivity, sweating, skin conditions, and remaining hair strength.

Planning includes selecting the attachment method, hair type, density, and base material to avoid discomfort, excessive tension, or scalp damage.`}
        />

        <ContentBlock
          title="Custom Hair System Design"
          text={`Hair systems are customised to match hair colour, texture, curl pattern, and density.

The goal is balanced coverage that suits facial features and age rather than excessive volume. Customisation is a key reason clients seek professional hair weaving in Gurugram.`}
        />

        <ContentBlock
          title="Techniques Used in Hair Weaving"
          text={`Different hair weaving techniques are used depending on scalp condition and lifestyle. These may include adhesive bonding, clip-based systems, or thread integration.

At Satyaskinhair, technique selection prioritises comfort, scalp safety, and ease of maintenance.`}
        />

        <ContentBlock
          title="Material Options for Hair Weaving"
          text={`Hair weaving systems may use natural human hair or synthetic fibres.

Human hair offers better realism and styling flexibility, while synthetic hair requires less daily styling. Material options are explained clearly during consultation to support informed decision-making.`}
        />

        <ContentBlock
          title="Application and Fitting Process"
          text={`Hair weaving is applied in a hygienic and controlled environment. Systems are fitted carefully to avoid discomfort or excessive tension.

Proper fitting ensures stability during daily activities while allowing the scalp to breathe, contributing to long-term comfort.`}
        />

        <ContentBlock
          title="What to Expect After Hair Weaving?"
          text={`Hair weaving provides immediate improvement in appearance, allowing clients to see instant coverage.

Mild scalp awareness may occur initially as the scalp adapts. This usually settles, and guidance is provided for early care and adjustment.`}
        />

        <ContentBlock
          title="Maintenance and Follow-Up Support"
          text={`Hair weaving requires regular maintenance for hygiene, comfort, and appearance.

Satyaskinhair provides structured follow-up support, including cleaning, refitting, and system care, helping prevent scalp damage.`}
        />

        <ContentBlock
          title="Safety and Scalp Health"
          text={`Hair weaving is safe when planned and maintained correctly. Poor attachment or hygiene may cause irritation or hair breakage.

At Satyaskinhair, scalp health is monitored regularly to ensure the service remains medically responsible, not purely cosmetic.`}
        />

        <ContentBlock
          title="Hair Weaving vs Hair Transplant"
          text={`Hair weaving and hair transplant serve different purposes. Hair weaving provides cosmetic coverage without surgery, while hair transplant offers biological hair restoration.

Both options are explained clearly so individuals can make informed decisions without pressure.`}
        />

        <ContentBlock
          title="Why Choose Satyaskinhair for Hair Weaving in Gurugram?"
          text={`Clients seeking the best hair weaving in Gurugram look for natural appearance, safety, and professional handling.

At Satyaskinhair, hair weaving is delivered with medical understanding, personalised planning, and long-term support focused on comfort and hygiene.`}
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
                q: 'Is hair weaving permanent?',
                a: 'No. Hair weaving is a non-surgical, removable hair replacement system.',
              },
              {
                q: 'Does hair weaving damage natural hair?',
                a: 'Properly planned and maintained systems minimise stress on existing hair.',
              },
              {
                q: 'Can hair weaving be styled?',
                a: 'Yes. Styling depends on the hair material used.',
              },
              {
                q: 'How often is maintenance required?',
                a: 'Maintenance frequency depends on technique, hair growth, and lifestyle.',
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
