'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function FUEHairTransplant() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.fueBanner}
            alt="FUE Hair Transplant at Satya Skin & Hair Solutions"
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
              FUE Hair Transplant
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              Natural results through advanced technique and donor-safe planning.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        {/* INTRO */}
        <ContentBlock
          title="Understanding FUE Hair Transplant"
          text={`Hair loss can affect confidence, self-image, and daily interactions. An FUE Hair Transplant is a medical procedure designed to restore hair in thinning or bald areas using a patient’s own hair follicles.

At Satyaskinhair, FUE is approached with careful planning, donor safety, and long-term thinking rather than aggressive graft extraction.`}
        />

        <ContentBlock
          title="What Is FUE Hair Transplant?"
          text={`FUE (Follicular Unit Extraction) Hair Transplant is a technique where individual hair follicles are extracted from a donor area and transplanted into areas of hair loss.

Each follicle is removed separately using fine instruments, avoiding a linear scar. However, technique alone does not ensure natural results—planning and surgical skill play a decisive role.`}
        />

        <ContentBlock
          title="Why FUE Is Chosen Over Other Techniques"
          text={`FUE may be recommended for patients who prefer shorter hairstyles, have good donor density, or require selective graft placement.

At Satyaskinhair, the goal is not maximum graft numbers but balanced coverage that remains natural as hair loss progresses.`}
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
            src={assets.fueMid}
            alt="FUE hair transplant procedure at Satya Skin & Hair Solutions"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
          />
        </motion.div> */}

        <ContentBlock
          title="Who Is the Ideal Candidate for FUE Hair Transplant?"
          text={`An ideal candidate typically has stable or gradually progressing hair loss, adequate donor density, and realistic expectations.

At Satyaskinhair, candidacy is determined individually to protect donor integrity and ensure long-term success.`}
        />

        <ContentBlock
          title="Importance of Donor Area Assessment"
          text={`The donor area is a limited and non-renewable resource. Over-harvesting can result in visible thinning and reduced future options.

Satyaskinhair follows a conservative donor management strategy, extracting grafts in a distributed pattern to preserve natural appearance.`}
        />

        <ContentBlock
          title="How Does an FUE Hair Transplant Work?"
          text={`The procedure begins with a detailed consultation and scalp analysis. Individual follicular units are extracted under local anaesthesia and preserved carefully before implantation.

Grafts are placed following natural hair direction, density, and angle to achieve realistic results.`}
        />

        <ContentBlock
          title="Recipient Area Planning and Hairline Design"
          text={`Hairline design is one of the most critical steps in FUE Hair Transplant.

At Satyaskinhair, planning considers facial proportions, age, and future hair loss patterns to avoid unnatural or premature density.`}
        />

        <ContentBlock
          title="What to Expect After an FUE Hair Transplant?"
          text={`Mild swelling, redness, or scabbing may occur initially and typically resolve with time.

Transplanted hair often sheds within weeks, which is a normal phase. New growth begins gradually after a few months.`}
        />

        <ContentBlock
          title="Hair Growth Timeline and Long-Term Results"
          text={`Hair growth after FUE is gradual. Final appearance develops over months and depends on donor quality, scalp health, and individual healing patterns.

FUE should be viewed as a long-term restoration process rather than an instant cosmetic change.`}
        />

        <ContentBlock
          title="Role of Surgical Skill in FUE Outcomes"
          text={`FUE Hair Transplant is technically demanding. The angle, depth, and direction of each graft influence how natural the final result appears.

At Satyaskinhair, a skill-led approach prioritises graft survival and natural integration rather than large graft counts.`}
        />

        <ContentBlock
          title="When FUE Hair Transplant May Not Be Recommended"
          text={`FUE may not be suitable for patients with poor donor density, active scalp conditions, or unrealistic expectations.

In such cases, alternative approaches may offer safer long-term outcomes.`}
        />

        <ContentBlock
          title="Long-Term Planning in Hair Restoration"
          text={`Hair loss is often progressive. Overusing donor hair early can limit future options.

Satyaskinhair follows a long-term planning philosophy that preserves donor reserves and maintains natural appearance as hair loss evolves.`}
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
                q: 'Is FUE Hair Transplant permanent?',
                a: 'Transplanted hair is generally resistant to pattern hair loss, but long-term appearance depends on future hair loss progression.',
              },
              {
                q: 'Will FUE leave visible scars?',
                a: 'FUE does not create a linear scar. Tiny extraction points usually heal well when harvesting is conservative.',
              },
              {
                q: 'Is FUE suitable for everyone?',
                a: 'No. Suitability depends on donor quality, scalp condition, and individual hair loss patterns.',
              },
              {
                q: 'Can FUE be repeated?',
                a: 'Repeat procedures may be possible if donor reserves are preserved and planned carefully.',
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
