'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function CO2FractionalLaserTreatment() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.co2FractionalLaserBanner}
            alt="CO2 Fractional Laser Treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#2B333C]/70 via-[#2B333C]/55 to-[#9E4A47]/40" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FFF8EF]"
            >
              CO2 Fractional Laser Treatment
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              Advanced CO2 fractional laser treatment for acne scars, texture improvement, and skin renewal.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        <ContentBlock
          title="Advanced CO2 Fractional Laser Treatment for Skin Renewal"
          text={`Skin concerns such as acne scars, uneven texture, enlarged pores, fine lines, and signs of ageing often require more than topical skincare.

CO2 fractional laser is a medical skin resurfacing treatment designed to stimulate collagen and promote controlled skin renewal. At Satyaskinhair, the procedure is planned carefully with emphasis on safety, skin suitability, and long-term improvement rather than aggressive short-term results.`}
        />

        <ContentBlock
          title="What Is CO2 Fractional Laser Treatment?"
          text={`CO2 fractional laser treatment is an advanced dermatological procedure that uses carbon dioxide laser energy to create microscopic columns of controlled thermal injury in the skin.

These micro-channels trigger the body’s natural healing response, stimulating new collagen formation and skin regeneration. Because only a fraction of the skin is treated at a time, surrounding healthy tissue supports faster healing, which is why it is called fractional CO2 laser.`}
        />

        <ContentBlock
          title="Why Do People Choose CO2 Fractional Laser Treatment?"
          text={`CO2 fractional laser is chosen when surface-level treatments are no longer effective.

It is commonly selected for deeper skin concerns such as acne scars, surgical scars, uneven texture, fine wrinkles, and sun damage. Searches like fractional CO2 laser for acne scars and CO2 laser resurfacing highlight its role as a corrective medical procedure rather than a cosmetic glow treatment.`}
        />

        <ContentBlock
          title="What Skin Concerns Can CO2 Fractional Laser Treat?"
          text={`CO2 fractional laser treatment is commonly used for:
• Acne scars (atrophic and box scars)
• Surgical or traumatic scars
• Enlarged pores
• Uneven skin texture
• Fine lines and wrinkles
• Sun-damaged skin
• Skin laxity and dullness

It is particularly effective for concerns involving deeper skin layers where collagen support is compromised.`}
        />

        <ContentBlock
          title="How CO2 Fractional Laser Works on Acne Scars"
          text={`Acne scars form due to collagen loss following inflammation.

CO2 fractional laser creates controlled micro-injuries that stimulate collagen remodelling, helping improve scar depth and skin smoothness. Different scar types respond differently, which is why laser settings and session planning are customised rather than uniform.`}
        />

        <ContentBlock
          title="CO2 Fractional Laser vs Other Skin Treatments"
          text={`Patients often compare CO2 fractional laser with chemical peels or microneedling.

Chemical peels work on surface layers, while microneedling provides shallow stimulation. CO2 fractional laser works deeper and is more effective for structural skin damage, but requires medical planning, downtime consideration, and structured aftercare.`}
        />

        <ContentBlock
          title="Consultation and Skin Assessment"
          text={`Every CO2 fractional laser treatment begins with a detailed skin evaluation.

The dermatologist assesses skin type, scar depth, pigmentation risk, and healing tendency. This step is especially important for Indian skin, which is more prone to post-inflammatory pigmentation.`}
        />

        <ContentBlock
          title="What Type of Laser Is Used in CO2 Fractional Laser Treatment?"
          text={`CO2 fractional laser uses carbon dioxide laser technology delivered in a fractional pattern.

This allows effective resurfacing while preserving untreated skin for faster recovery. While searches often focus on machine type, outcomes depend more on correct settings and medical expertise than branding.`}
        />

        <ContentBlock
          title="How Is CO2 Fractional Laser Treatment Performed?"
          text={`The procedure is performed in a clinical setting. A topical or local anaesthetic is applied to improve comfort.

The laser handpiece is passed over the treatment area in a controlled manner. Session duration depends on the area treated and treatment intensity. Cooling and anaesthesia help manage discomfort.`}
        />

        <ContentBlock
          title="What to Expect After CO2 Fractional Laser Treatment?"
          text={`After treatment, redness, swelling, and a sunburn-like sensation are common initially.

Over the next few days, micro-scabbing or peeling may occur as the skin heals. Downtime varies depending on treatment depth, and proper aftercare is essential to reduce pigmentation risk.`}
        />

        <ContentBlock
          title="Downtime and Recovery Timeline"
          text={`Recovery after CO2 fractional laser is gradual.

Initial healing usually occurs within days, while deeper collagen remodelling continues for weeks to months. Understanding downtime is important, as recovery is part of achieving long-term improvement.`}
        />

        <ContentBlock
          title="Number of Sessions Required"
          text={`Some patients experience improvement after one session, while others may require multiple sessions.

The number of sessions depends on skin condition and treatment goals. Aggressive single-session treatments are not always suitable, especially for pigmentation-prone skin.`}
        />

        <ContentBlock
          title="CO2 Fractional Laser for Face and Other Areas"
          text={`CO2 fractional laser is commonly performed on the face, but it can also be used on the neck, hands, and scarred body areas.

Treatment planning varies by area due to differences in skin thickness and healing capacity.`}
        />

        <ContentBlock
          title="Safety and Side Effects"
          text={`CO2 fractional laser is safe when performed under dermatological supervision.

Temporary side effects may include redness, swelling, dryness, or temporary pigmentation changes. Risks increase if intensity is inappropriate or aftercare is neglected.`}
        />

        <ContentBlock
          title="CO2 Fractional Laser and Pigmentation Risk"
          text={`Pigmentation risk is a key consideration in Indian skin.

CO2 fractional laser can be used safely with conservative planning, sun protection, and medical skincare. Patients are counselled about risks and preventive measures before treatment.`}
        />

        <ContentBlock
          title="Who May Not Be Suitable for CO2 Fractional Laser?"
          text={`CO2 fractional laser may not be recommended for individuals with active skin infections, uncontrolled medical conditions, or unrealistic expectations.

Some skin types may require alternative treatments or pre-treatment preparation before laser resurfacing is considered.`}
        />

        <ContentBlock
          title="Long-Term Results and Maintenance"
          text={`CO2 fractional laser improves skin quality gradually.

Collagen production continues for months after treatment, leading to progressive improvement. Maintenance treatments or supportive skincare may be advised based on ageing and lifestyle factors.`}
        />

        <ContentBlock
          title="CO2 Fractional Laser Before and After Expectations"
          text={`Patients often search for before-and-after images to understand outcomes.

While visible improvement occurs, results vary depending on scar depth, texture, and skin response. Realistic expectations are essential for satisfaction.`}
        />

        <ContentBlock
          title="Why Choose Satyaskinhair for CO2 Fractional Laser Treatment?"
          text={`People searching for the best CO2 fractional laser treatment prioritise safety, experience, and personalised care.

At Satyaskinhair, treatment is delivered with dermatological expertise, conservative protocols, and long-term skin health planning rather than aggressive resurfacing.`}
        />

        <ContentBlock
          title="Book a CO2 Fractional Laser Consultation"
          text={`CO2 fractional laser is a medical procedure requiring proper evaluation and planning.

A dermatologist-guided consultation helps determine suitability, intensity, and recovery expectations, ensuring clarity and informed decision-making.`}
        />

      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#FCEBDE]/60 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-semibold text-[#9E4A47] mb-6">
            Common Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What is CO2 fractional laser treatment used for?',
                a: 'It is used for acne scars, texture improvement, wrinkles, and skin resurfacing.',
              },
              {
                q: 'Is CO2 fractional laser safe?',
                a: 'Yes, when performed with correct settings and dermatological supervision.',
              },
              {
                q: 'How long does recovery take?',
                a: 'Initial healing takes days, while collagen remodelling continues for months.',
              },
              {
                q: 'Is CO2 fractional laser painful?',
                a: 'Discomfort is managed with anaesthesia and cooling techniques.',
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

/* ================= CONTENT BLOCK ================= */
function ContentBlock({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
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
