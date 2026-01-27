'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function BodyHairTransplant() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.bodyHairBanner}
            alt="Body Hair Transplant at Satyaskinhair"
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
              Body Hair Transplant
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              Using body hair as a donor source when scalp hair is limited.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        <ContentBlock
          title="Using Body Hair as a Donor Source When Scalp Hair Is Limited"
          text={`Body Hair Transplant (BHT) is an advanced hair restoration service used when scalp donor hair is insufficient. It involves extracting hair follicles from selected body areas and transplanting them to the scalp or beard.

This technique is not a first-line option and is considered only in specific situations. At Satyaskinhair, BHT is planned conservatively, focusing on donor safety, realistic expectations, and long-term appearance rather than aggressive coverage.`}
        />

        <ContentBlock
          title="What Is Body Hair Transplant?"
          text={`Body Hair Transplant is a procedure in which hair follicles are harvested from areas such as the beard, chest, abdomen, arms, or legs and implanted into the scalp or facial region.

The most reliable body donor source is beard hair. Terms commonly associated with this procedure include body hair transplant, BHT hair transplant, body hair to scalp transplant, and beard to scalp hair transplant.`}
        />

        <ContentBlock
          title="Why Body Hair Transplant Is Considered"
          text={`Body Hair Transplant is usually considered in individuals with advanced baldness, previous failed hair transplants, or depleted scalp donor areas.

It is a supportive technique, not a replacement for scalp donor hair. BHT helps improve coverage when scalp resources are limited, especially in repair or high-grade hair loss cases.`}
        />

        <ContentBlock
          title="Understanding the Difference Between Scalp Hair and Body Hair"
          text={`Body hair differs from scalp hair in texture, thickness, growth cycle, and length potential.

Beard hair is typically thicker and stronger, while chest or limb hair is finer and shorter. These differences determine where and how body hair can be used to achieve a natural blend.`}
        />

        <ContentBlock
          title="Common Body Donor Areas Used in BHT"
          text={`The most commonly used donor areas in Body Hair Transplant include:
• Beard area (most reliable)
• Chest hair
• Abdomen hair
• Arm or leg hair (selected cases)

Beard hair transplant to scalp remains the most researched and predictable form of BHT due to beard hair’s thickness and growth behaviour.`}
        />

        <ContentBlock
          title="Who May Be a Suitable Candidate for Body Hair Transplant?"
          text={`Body Hair Transplant may be considered for patients with:
• Advanced male pattern baldness
• Poor or exhausted scalp donor area
• Previous over-harvesting from scalp
• Repair or corrective hair transplant needs

Suitability depends on body hair density, calibre, skin condition, and patient expectations. Not all individuals with body hair are suitable candidates.`}
        />

        <ContentBlock
          title="Clinical Evaluation Before Body Hair Transplant"
          text={`Detailed clinical evaluation is essential before planning BHT.

At Satyaskinhair, assessment includes scalp condition, body hair quality, growth pattern, and healing potential. Surgery is recommended only if body hair can add value without compromising natural appearance.`}
        />

        <ContentBlock
          title="Technique Used in Body Hair Transplant"
          text={`Body Hair Transplant is performed using follicular unit extraction techniques adapted for body skin.

Body hair follicles are more fragile and sit at different depths than scalp hair. Advanced skill is required to minimise trauma and ensure safe extraction and implantation.`}
        />

        <ContentBlock
          title="Where Body Hair Is Typically Implanted"
          text={`Body hair is usually implanted in:
• Mid-scalp
• Crown area
• Scarred or repair zones

It is generally avoided in the frontal hairline. Beard hair may be used near the hairline only in selected cases with careful blending.`}
        />

        <ContentBlock
          title="Beard Hair Transplant to Scalp"
          text={`Beard hair transplant to scalp is the most effective form of Body Hair Transplant.

Beard follicles are thick and resilient, making them suitable for adding density. However, placement must be strategic to avoid coarse or unnatural appearance.`}
        />

        <ContentBlock
          title="What to Expect After Body Hair Transplant"
          text={`Recovery varies depending on donor area used. Mild redness or swelling may occur in donor and recipient areas.

Body donor zones may take slightly longer to heal than scalp donor areas. Aftercare guidance supports healing and comfort.`}
        />

        <ContentBlock
          title="Shedding and Growth Pattern in Body Hair Transplant"
          text={`Transplanted body hair typically sheds within the first few weeks.

Regrowth begins after several months. Body hair retains some original characteristics, meaning growth rate, curl, and length may differ permanently from scalp hair.`}
        />

        <ContentBlock
          title="Long-Term Appearance and Expectations"
          text={`Body Hair Transplant improves coverage but does not replicate natural scalp hair density.

Results should be viewed as supportive enhancement rather than complete restoration. Conservative planning ensures long-term satisfaction.`}
        />

        <ContentBlock
          title="Risks and Limitations of Body Hair Transplant"
          text={`BHT has specific limitations. Growth can be unpredictable, and texture mismatch may occur if planning is poor.

Potential side effects include temporary redness, patchy growth, or uneven blending. Ethical counselling ensures patients understand these limitations.`}
        />

        <ContentBlock
          title="When Body Hair Transplant May Not Be Recommended"
          text={`BHT may not be suitable if body hair is sparse, very fine, or inconsistent.

Patients expecting dense, scalp-like hair throughout may be disappointed. In such cases, non-surgical or acceptance-based planning may be advised.`}
        />

        <ContentBlock
          title="Body Hair Transplant in Repair and Corrective Cases"
          text={`Body Hair Transplant is frequently used in repair cases where scalp donor hair has been depleted.

It helps improve coverage in scarred areas or adds density when scalp grafts are no longer available. These cases require advanced planning.`}
        />

        <ContentBlock
          title="Body Hair Transplant vs Scalp Hair Transplant"
          text={`Scalp hair transplant remains the gold standard for hair restoration.

Body Hair Transplant is an adjunct technique used only when scalp donor supply is limited. Understanding this difference is essential for informed decision-making.`}
        />

        <ContentBlock
          title="Making an Informed Decision"
          text={`Body Hair Transplant is a specialised solution for complex hair loss cases.

At Satya Skin & Hair Solutions, BHT is offered only when it genuinely adds value. Ethical guidance, conservative planning, and realistic expectations define the approach.`}
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
                q: 'Is body hair transplant permanent?',
                a: 'Transplanted body hair can survive long-term, but growth characteristics remain different from scalp hair.',
              },
              {
                q: 'Which body hair is best for transplant?',
                a: 'Beard hair is the most reliable donor source.',
              },
              {
                q: 'Can body hair replace scalp hair completely?',
                a: 'No. Body hair is used to supplement, not replace, scalp hair.',
              },
              {
                q: 'Is body hair transplant safe?',
                a: 'It is safe when planned conservatively and performed by experienced surgeons.',
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
