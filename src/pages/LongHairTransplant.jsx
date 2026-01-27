'use client';
import React from 'react';
import { motion } from 'framer-motion';
// import assets from '../assets/assets';

export default function LongHairTransplant() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / POST BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        {/* <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.longHairBanner} 
            alt="Long Hair Transplant in Gurugram"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#2B333C]/70 via-[#2B333C]/55 to-[#9E4A47]/40" />
        </div> */}

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FFF8EF]"
            >
              Long Hair Transplant in Gurugram
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              A specialised approach for patients seeking immediate visual continuity
              with long-term planning.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        {[
          {
            title: 'Understanding the Need for Long Hair Transplant',
            text: `Hair loss is often gradual, but the emotional impact can be immediate. For some patients, the goal is not only to restore hair but to maintain length and visual continuity.

Long Hair Transplant in Gurugram is a specialised technique that allows hair follicles to be transplanted without trimming them short, preserving existing hair length.`,
          },
          {
            title: 'Long Hair Transplant in Gurugram',
            text: `Long Hair Transplant in Gurugram involves transplanting hair follicles with the hair shaft intact. Unlike conventional techniques where hair is trimmed, this method allows patients to see visible hair length immediately after the procedure.

At Satyaskinhair, this technique is considered selectively based on scalp condition, donor strength, and long-term restoration goals.`,
          },
          {
            title: 'Understanding Long Hair Transplant Technique',
            text: `Long hair transplant follows the same biological principles as standard hair transplantation. The difference lies in the extraction and implantation process while preserving hair length.

Greater precision is required because longer hair increases handling complexity. Long-term outcomes depend on graft survival, scalp health, and individual healing patterns.`,
          },
          {
            title: 'Why Long Hair Transplant Is Considered',
            text: `Some patients prefer this technique to avoid a shaved scalp and reduce visible downtime. It may also help evaluate hairline design and coverage immediately after surgery.

At Satyaskinhair, it is positioned as an alternative option, not a superior one, chosen only when medical suitability criteria are met.`,
          },
          {
            title: 'Consultation and Planning',
            text: `Consultation is essential before planning a Long Hair Transplant in Gurugram. Donor density, scalp condition, hair thickness, and existing hair length are carefully assessed.

Planning focuses on feasibility without compromising donor safety. Honest counselling ensures realistic expectations and informed decision-making.`,
          },
          {
            title: 'Importance of Donor Area Assessment',
            text: `The donor area is a limited resource. In long hair transplant, preserving donor integrity becomes even more critical due to increased technical complexity.

Satyaskinhair follows a conservative donor-first philosophy to maintain long-term restoration options.`,
          },
          {
            title: 'Hairline Design and Density Planning',
            text: `Hairline planning requires precision because existing hair length can create an illusion of density.

At Satyaskinhair, hairline design considers facial proportions, age, and future hair loss patterns to ensure a natural and age-appropriate result.`,
          },
          {
            title: 'The Technique of Long Hair Transplant Procedure',
            text: `The procedure is performed under local anaesthesia. Hair follicles are extracted carefully while preserving the hair shaft length.

Implantation follows natural hair direction and angle, which is especially important since long hair makes placement errors more visible.`,
          },
          {
            title: 'Graft Handling and Implantation',
            text: `Handling long hair grafts requires advanced surgical skill. Increased hair length adds weight and handling challenges.

At Satyaskinhair, grafts are preserved under controlled conditions and implanted with minimal manipulation to maintain follicle viability.`,
          },
          {
            title: 'What to Expect After a Long Hair Transplant',
            text: `Mild swelling or redness may occur post-procedure and typically resolves with time.

Immediate coverage may be visible due to retained hair length, but this does not represent final results.`,
          },
          {
            title: 'Shedding and Regrowth Phase',
            text: `Even in long hair transplant, transplanted follicles often shed their hair shafts within weeks. This is a normal biological process.

New growth begins after a few months and progresses gradually based on individual healing.`,
          },
          {
            title: 'Long-Term Expectations and Results',
            text: `Long hair transplant does not change the biological timeline of hair growth. Final results develop over months, similar to standard techniques.

At Satyaskinhair, patients are guided to view this technique as a method of implantation, not a shortcut to faster results.`,
          },
          {
            title: 'Success Rate of Long Hair Transplant in Gurugram',
            text: `Success varies depending on graft survival, surgical expertise, and patient-specific factors.

At Satyaskinhair, success is defined by natural appearance, donor preservation, and long-term satisfaction rather than immediate visual density.`,
          },
          {
            title: 'When Long Hair Transplant May Not Be Recommended',
            text: `This technique may not be suitable for patients with weak donor density, active scalp conditions, or unrealistic expectations.

In such cases, conventional methods may be safer and more predictable.`,
          },
          {
            title: 'Long-Term Planning and Hair Loss Progression',
            text: `Hair loss is often progressive. Long hair transplant must be planned with future thinning in mind to avoid unnatural density patterns later.

Satyaskinhair prioritises long-term planning and donor preservation over short-term cosmetic gains.`,
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
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
                q: 'Is Long Hair Transplant permanent?',
                a: 'Transplanted follicles behave like standard transplanted hair, but outcomes depend on individual factors.',
              },
              {
                q: 'Will the transplanted long hair fall out?',
                a: 'Yes. Initial shedding is common, followed by regrowth according to the natural hair cycle.',
              },
              {
                q: 'Is long hair transplant better than regular techniques?',
                a: 'It is not better for everyone. Suitability depends on donor strength, scalp health, and expectations.',
              },
              {
                q: 'Does long hair transplant reduce downtime?',
                a: 'It may reduce visible downtime, but biological healing timelines remain similar.',
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
