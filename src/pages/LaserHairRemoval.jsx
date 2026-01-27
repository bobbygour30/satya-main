'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function LaserHairRemoval() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.laserHairBanner}
            alt="Laser Hair Removal at Satyaskinhair"
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
              Laser Hair Removal in Gurugram
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              Laser hair reduction for long-term hair control under dermatological supervision.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        <ContentBlock
          title="Laser Hair Reduction for Long-Term Hair Control"
          text={`Unwanted hair growth can affect comfort, hygiene, and confidence. Laser hair removal, more accurately referred to as laser hair reduction, is a medical procedure designed to reduce future hair growth by targeting hair follicles.

At Satya Skin & Hair Solutions, laser hair removal is provided under dermatological supervision, focusing on skin safety, suitability, and realistic outcomes rather than cosmetic promises.`}
        />

        <ContentBlock
          title="What Is Laser Hair Removal?"
          text={`Laser hair removal uses controlled laser energy to target melanin in hair follicles. The heat damages the follicle, reducing its ability to produce new hair.

Because hair grows in cycles, laser treatment works best on hairs in the active growth phase. This is why multiple sessions are required for effective long-term reduction.`}
        />

        <ContentBlock
          title="Why People Choose Laser Hair Removal in Gurugram"
          text={`People choose laser hair removal for convenience, reduced skin irritation, and long-term hair control.

Compared to waxing or shaving, laser treatment reduces ingrown hairs, razor bumps, and frequent maintenance. It is commonly chosen for the face, underarms, legs, bikini area, chest, back, and full body.`}
        />

        <ContentBlock
          title="Laser Hair Reduction vs “Permanent Hair Removal”"
          text={`A common misconception is permanent laser hair removal. Medically, laser treatment provides hair reduction, not guaranteed permanent removal.

Some fine or hormonally influenced hair may regrow and require maintenance sessions. At Satyaskinhair, this distinction is clearly explained to maintain realistic expectations.`}
        />

        <ContentBlock
          title="Laser Hair Removal Services at Satyaskinhair"
          text={`Laser hair removal at Satyaskinhair is a customised dermatology service, not a standard cosmetic package.

Treatment plans are designed based on skin type, hair colour, thickness, and hormonal factors. This approach is especially important for Indian skin tones, which require careful energy calibration.`}
        />

        <ContentBlock
          title="Consultation and Skin Assessment"
          text={`Every laser hair removal treatment begins with a dermatological consultation.

Skin type, hair texture, medical history, and previous hair removal methods are assessed to determine suitability, expected response, and approximate number of sessions while minimising side effects.`}
        />

        <ContentBlock
          title="Technology Used for Laser Hair Removal"
          text={`Different laser technologies are used for hair reduction. Diode laser hair removal is commonly suitable for darker hair and Indian skin types.

At Satyaskinhair, laser parameters are adjusted for each treatment area, and cooling mechanisms are used to protect the skin and improve comfort.`}
        />

        <ContentBlock
          title="Areas Treated With Laser Hair Removal"
          text={`Laser hair removal can be performed on almost any body area, including:
• Face and upper lip
• Underarms
• Arms and legs
• Bikini and Brazilian area
• Chest and back
• Abdomen and full body

These treatments address common concerns searched under laser hair removal for face, underarms, bikini, and full body.`}
        />

        <ContentBlock
          title="What Happens During a Laser Hair Removal Session?"
          text={`During a session, the laser handpiece is applied to the target area. A mild snapping or warming sensation may be felt.

Session duration varies by area. Small areas take minutes, while full body laser hair removal takes longer. Post-treatment cooling helps soothe the skin.`}
        />

        <ContentBlock
          title="What to Expect After Laser Hair Removal"
          text={`Mild redness or warmth may occur after treatment and usually settles within a few hours.

Treated hairs shed over the following days. Patients are advised to avoid sun exposure, waxing, or threading between sessions. Shaving is generally allowed.`}
        />

        <ContentBlock
          title="Number of Sessions Required"
          text={`Laser hair removal requires multiple sessions spaced several weeks apart.

The number of sessions depends on hair growth cycle, treatment area, and individual response. Fine or hormonal hair may require additional sessions.`}
        />

        <ContentBlock
          title="Laser Hair Removal for Different Skin Types"
          text={`Indian skin types require careful laser selection and settings to avoid burns or pigmentation.

At Satyaskinhair, treatments are performed under dermatological guidance to ensure safety for medium to darker skin tones.`}
        />

        <ContentBlock
          title="Laser Hair Removal for Men and Women"
          text={`Laser hair removal is suitable for both men and women.

Men commonly seek treatment for beard line, chest, back, and shoulders, while women often choose face, underarms, legs, and bikini areas.`}
        />

        <ContentBlock
          title="Safety and Side Effects"
          text={`Laser hair removal is generally safe when performed correctly.

Temporary side effects may include redness, mild swelling, or sensitivity. Rare pigmentation changes can occur if post-care instructions are not followed.`}
        />

        <ContentBlock
          title="Laser Hair Removal and Hormonal Hair Growth"
          text={`Hormonal conditions such as PCOS can influence hair growth.

Laser hair removal can reduce visible hair, but hormonal hair may require maintenance sessions. Realistic counselling is essential.`}
        />

        <ContentBlock
          title="Laser Hair Removal vs Waxing and Shaving"
          text={`Waxing and shaving provide temporary results and may cause irritation or ingrown hairs.

Laser hair removal offers longer-term reduction and smoother skin over time, making it a preferred option for many individuals.`}
        />

        <ContentBlock
          title="Who May Not Be Suitable for Laser Hair Removal?"
          text={`Laser hair removal may not be recommended for individuals with certain skin conditions, active infections, or very light hair with low melanin.

Consultation helps determine suitability or alternative hair management options.`}
        />

        <ContentBlock
          title="Long-Term Expectations"
          text={`Laser hair removal significantly reduces hair growth over time but is not a one-time solution.

Maintenance sessions may be required depending on individual hair biology. Understanding this ensures informed decision-making.`}
        />

        <ContentBlock
          title="Why Choose Satyaskinhair for Laser Hair Removal in Gurugram?"
          text={`People searching for the best laser hair removal in Gurugram prioritise safety, experience, and skin-specific treatment.

At Satyaskinhair, laser hair removal is delivered with medical oversight, personalised planning, and emphasis on skin health rather than quick cosmetic results.`}
        />

        <ContentBlock
          title="Book a Laser Hair Removal Consultation in Gurugram"
          text={`Laser hair removal is a medical aesthetic decision.

A dermatologist-led consultation helps determine suitability, expected outcomes, and treatment planning, ensuring clarity, safety, and realistic expectations.`}
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
                q: 'Is laser hair removal permanent?',
                a: 'It provides long-term hair reduction, not guaranteed permanent removal.',
              },
              {
                q: 'Is laser hair removal painful?',
                a: 'Discomfort is usually mild and temporary.',
              },
              {
                q: 'Can laser hair removal cause pigmentation?',
                a: 'Risk is low when performed correctly with proper aftercare.',
              },
              {
                q: 'Can laser hair removal be done on sensitive areas?',
                a: 'Yes, with appropriate settings and medical supervision.',
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
