'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function RepairHairTransplant() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / POST BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        {/* <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.repairBanner}
            alt="Repair Hair Transplant at Satya Skin & Hair Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#2B333C]/70 via-[#2B333C]/50 to-[#9E4A47]/40" />
        </div> */}

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FFF8EF]"
            >
              Repair Hair Transplant in Gurgaon
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              When a previous hair transplant needs thoughtful correction and long-term planning.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        {[
          {
            title: 'When a Previous Hair Transplant Needs Thoughtful Correction',
            text: `Hair transplantation is a permanent surgical decision, and when outcomes do not meet expectations, the emotional and physical impact can be significant. A Repair Hair Transplant is designed for individuals who have undergone a previous hair transplant that resulted in unnatural appearance, poor density, visible scarring, or donor damage.

At Satya Skin & Hair Solutions, repair hair transplant procedures are approached with caution, experience, and long-term planning, focusing on correction rather than repetition of mistakes.`,
          },
          {
            title: 'Understanding Repair Hair Transplant',
            text: `A Repair Hair Transplant, also referred to as a corrective hair transplant, addresses problems arising from earlier hair transplant procedures. These issues may include pluggy hairlines, uneven density, incorrect hair direction, visible scars, or over-harvested donor areas.

Repair procedures are significantly more complex than primary hair transplants. They require detailed evaluation, conservative donor usage, and advanced planning.`,
          },
          {
            title: 'Repair Hair Transplant in Gurugram',
            text: `Repair Hair Transplant in Gurugram is often sought by patients who have undergone procedures elsewhere and are dissatisfied with the results.

At Satyaskinhair, repair work is approached as a medical reconstruction process prioritising donor safety, scalp health, and realistic outcomes.`,
          },
          {
            title: 'Consultation and Planning',
            text: `Consultation is the most critical stage in a Repair Hair Transplant. A detailed analysis of the scalp, hairline, donor area, and previous surgical history is performed.

Not all cases can be fully reversed, and honest counselling is essential to set achievable expectations.`,
          },
          {
            title: 'Hairline Reassessment and Aesthetic Correction',
            text: `Correcting an unnatural hairline is one of the most common goals. Hairline correction involves redesigning the hairline to suit facial proportions, age, and future hair loss patterns.`,
          },
          {
            title: 'What to Expect After a Repair Hair Transplant?',
            text: `Recovery varies depending on the extent of correction. Healing may take longer due to existing scar tissue, and regrowth is gradual over several months.`,
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9E4A47]">
              {section.title}
            </h2>
            <p className="text-[#828D9C] leading-relaxed whitespace-pre-line">
              {section.text}
            </p>
          </motion.div>
        ))}
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
                q: 'Can a bad hair transplant be fully fixed?',
                a: 'Complete reversal is not always possible. Repair focuses on improvement, not perfection.',
              },
              {
                q: 'Is repair hair transplant more difficult than first-time surgery?',
                a: 'Yes. Repair procedures are technically more complex and require advanced planning.',
              },
              {
                q: 'Will repair surgery cause more scarring?',
                a: 'Conservative techniques are used to minimise additional scarring, but outcomes vary.',
              },
              {
                q: 'How many sessions are needed for repair?',
                a: 'This depends on the extent of correction required and donor availability.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#DFDFDD] p-5"
              >
                <h3 className="font-medium text-[#2B333C]">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm text-[#828D9C]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
