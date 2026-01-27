'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function FUTHairTransplant() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.futBanner}
            alt="Best FUT Hair Transplant in Gurgaon"
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
              Best FUT Hair Transplant in Gurgaon
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              A structured, donor-safe approach to long-term hair restoration.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#9E4A47]">
            FUT Hair Transplant in Gurgaon: A Structured Approach to Donor-Safe Hair Restoration
          </h2>
          <p className="text-[#828D9C] leading-relaxed">
            Hair loss can progress over time and may require a planned, medical solution rather than
            temporary fixes. FUT Hair Transplant is a well-established surgical technique used in hair
            restoration, especially in patients who require a larger number of grafts while preserving
            donor density.
            <br /><br />
            At Satyaskinhair, FUT is performed with careful planning, donor safety, and a long-term
            vision focused on sustainable results.
          </p>
        </motion.div>

        {/* SECTION */}
        <ContentBlock
          title="What Is the FUT Hair Transplant Technique?"
          text={`The FUT Hair Transplant technique involves removing a narrow strip of scalp from the donor area, usually from the back of the head. This strip is dissected under magnification to separate individual follicular units.

FUT prioritises graft quality and density. When planned conservatively, it provides effective coverage while maintaining natural donor appearance.`}
        />

        <ContentBlock
          title="Why FUT Is Still Relevant in Modern Hair Transplantation"
          text={`Despite the popularity of newer techniques, FUT Hair Transplant remains relevant for specific patient profiles.

At Satyaskinhair, FUT is considered a strategic option when donor preservation, graft yield, and long-term flexibility are essential.`}
        />

        {/* ================= MID IMAGE ================= */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(158,74,71,0.25)]"
        >
          <img
            src={assets.futMid}
            alt="FUT hair transplant procedure at Satya Skin & Hair Solutions"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
          />
        </motion.div> */}

        <ContentBlock
          title="Who Is an Ideal Candidate for FUT Hair Transplant?"
          text={`An ideal candidate for FUT Hair Transplant in Gurgaon usually has stable or progressive hair loss, good scalp laxity, and adequate donor density.

At Satyaskinhair, suitability is determined through detailed evaluation rather than a one-size-fits-all approach.`}
        />

        <ContentBlock
          title="The Technique of FUT Procedure in Detail"
          text={`The procedure begins with careful donor marking and local anaesthesia. A thin strip of scalp is removed with precision, and the donor area is closed using refined suturing techniques.

The harvested strip is dissected into follicular units before implantation into the recipient area.`}
        />

        <ContentBlock
          title="What to Expect After a FUT Hair Transplant?"
          text={`Mild swelling, tightness, or discomfort may occur initially and usually resolve with time.

Hair shedding in the first few weeks is expected. New growth begins gradually after a few months and continues over time.`}
        />

        <ContentBlock
          title="Long-Term Planning and Ethical Consultation"
          text={`Hair loss can continue even after a successful FUT Hair Transplant.

At Satyaskinhair, consultations focus on education, honest assessment, and long-term planning to ensure sustainable and natural results rather than short-term cosmetic changes.`}
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
                q: 'Is FUT Hair Transplant permanent?',
                a: 'Transplanted hair is generally resistant to pattern hair loss, but overall appearance depends on future hair loss progression.',
              },
              {
                q: 'Will there be a scar after FUT?',
                a: 'A linear scar is expected but is usually concealed by surrounding hair when closed properly.',
              },
              {
                q: 'Is FUT better than other techniques?',
                a: 'No single technique suits everyone. FUT is chosen based on donor characteristics and long-term planning.',
              },
              {
                q: 'Can FUT be combined with other methods?',
                a: 'In some cases, combination approaches may be used to optimise donor usage.',
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
