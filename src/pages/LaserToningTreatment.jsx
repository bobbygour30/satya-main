'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function LaserToningTreatment() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.laserToningBanner}
            alt="Laser Toning Treatment in Gurugram"
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
              Laser Toning Treatment in Gurugram
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              Laser toning for pigmentation, uneven skin tone, and dull skin under dermatological supervision.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        <ContentBlock
          title="Laser Toning for Pigmentation, Uneven Skin Tone, and Dull Skin"
          text={`Pigmentation, uneven skin tone, and persistent dullness are common concerns, particularly in Indian skin. Laser toning is a medically guided, non-invasive laser procedure designed to improve skin clarity gradually without aggressive downtime.

At Satyaskinhair, laser toning is performed under dermatological supervision, with treatment settings customised according to skin type, pigmentation depth, and long-term skin health.`}
        />

        <ContentBlock
          title="What Is Laser Toning Treatment?"
          text={`Laser toning is a non-ablative laser procedure that uses low-energy laser pulses to target excess melanin in the skin.

The laser breaks pigment particles into smaller fragments, which are then cleared naturally by the body. Laser toning is commonly used for pigmentation, melasma, dark spots, tanning, uneven skin tone, and dull skin. Multiple sessions are required for visible improvement.`}
        />

        <ContentBlock
          title="Why Do People Choose Laser Toning Treatment in Gurugram?"
          text={`Laser toning is chosen because it offers controlled pigmentation correction without damaging the skin surface.

Unlike aggressive peels or resurfacing lasers, laser toning works beneath the skin with minimal downtime. Searches such as laser toning for face, laser toning for pigmentation, and carbon laser toning reflect the demand for gentle yet effective treatments for Indian skin.`}
        />

        <ContentBlock
          title="Is Laser Toning the Same as Carbon Laser Treatment?"
          text={`Carbon laser toning is a variation of laser toning in which a medical-grade carbon solution is applied before laser exposure.

It is often searched as carbon laser toning or carbon peel laser treatment and is useful for oil control, acne, enlarged pores, and mild pigmentation. Standard laser toning focuses more on deeper pigmentation and melasma. At Satyaskinhair, treatment selection depends on clinical evaluation.`}
        />

        <ContentBlock
          title="Laser Toning vs Skin Brightening Facials"
          text={`Facials provide temporary glow by cleansing the skin surface, while laser toning works at a deeper pigment level.

Laser toning offers gradual, long-term improvement in skin tone and pigmentation when performed in a series, making it suitable for medical skin correction rather than cosmetic enhancement alone.`}
        />

        <ContentBlock
          title="What Skin Concerns Can Laser Toning Treat?"
          text={`Laser toning treatment is commonly used for:
• Melasma
• Sun-induced pigmentation
• Dark spots and freckles
• Uneven skin tone
• Tanning
• Dull or tired-looking skin

Its popularity is reflected in searches such as laser toning for melasma and laser toning for dark spots.`}
        />

        <ContentBlock
          title="Consultation and Skin Assessment"
          text={`Every laser toning treatment begins with a dermatological consultation.

Skin type, pigmentation depth, sensitivity, medical history, and sun exposure habits are assessed. This step is especially important for Indian skin, which is more prone to post-inflammatory pigmentation.`}
        />

        <ContentBlock
          title="What Type of Laser Is Used for Laser Toning?"
          text={`Laser toning is commonly performed using Q-switch laser toning, which delivers short, controlled pulses of energy to target pigment without overheating the skin.

Searches such as Q switch laser toning in Gurugram highlight interest in this technology. Effectiveness depends more on correct settings and medical supervision than machine branding.`}
        />

        <ContentBlock
          title="How Is Laser Toning Treatment Performed?"
          text={`Laser toning is performed in a clinical setting. The skin is cleansed, protective eyewear is provided, and the laser handpiece is applied to the treatment area.

Patients may feel mild warmth or tingling. Session duration depends on the area treated, commonly the face, neck, or exposed regions.`}
        />

        <ContentBlock
          title="What to Expect After Laser Toning Treatment?"
          text={`After laser toning, mild redness or warmth may occur and usually settles within a few hours.

There is no peeling or open wound in standard laser toning. Patients can resume daily activities immediately, making it a popular minimal-downtime treatment.`}
        />

        <ContentBlock
          title="How Many Laser Toning Sessions Are Needed?"
          text={`Laser toning works gradually, and most patients require multiple sessions spaced a few weeks apart.

The number of sessions depends on pigmentation severity, skin type, and response to treatment. Over-treating in a single session is avoided to reduce pigmentation risk.`}
        />

        <ContentBlock
          title="Laser Toning for Melasma – What to Know"
          text={`Laser toning for melasma requires careful planning. Melasma is a chronic condition influenced by hormones and sun exposure.

Laser toning can help lighten melasma when combined with medical skincare and strict sun protection. Patients are counselled realistically to avoid flare-ups.`}
        />

        <ContentBlock
          title="Laser Toning for Acne Marks and Uneven Texture"
          text={`Laser toning may improve mild acne marks and overall skin texture by reducing pigment and supporting collagen stimulation.

It is not a replacement for acne scar lasers but can enhance skin clarity when acne is controlled.`}
        />

        <ContentBlock
          title="Safety and Side Effects of Laser Toning"
          text={`Laser toning is generally safe when performed correctly.

Temporary redness or mild sensitivity may occur. Improper laser settings or inadequate sun protection can increase pigmentation risk, which is why dermatologist supervision is essential.`}
        />

        <ContentBlock
          title="Who May Not Be Suitable for Laser Toning?"
          text={`Laser toning may not be recommended for individuals with active skin infections, open wounds, or certain photosensitive conditions.

A consultation helps determine whether laser toning is appropriate or if alternative treatments are better suited.`}
        />

        <ContentBlock
          title="Laser Toning and Sun Protection"
          text={`Sun protection is critical during laser toning treatment.

Sun exposure can worsen pigmentation and reduce effectiveness. Patients are advised to use sunscreen and follow skincare guidance strictly between sessions.`}
        />

        <ContentBlock
          title="Laser Toning vs Chemical Peel"
          text={`Laser toning and chemical peels serve different purposes.

Chemical peels exfoliate the skin surface, while laser toning targets deeper pigment. Some patients benefit from a carefully planned combination approach based on skin assessment.`}
        />

        <ContentBlock
          title="Long-Term Results and Maintenance"
          text={`Laser toning improves skin gradually and requires maintenance for sustained results.

Pigmentation may recur if sun exposure or hormonal triggers persist. Understanding this helps patients make informed decisions.`}
        />

        <ContentBlock
          title="Why Choose Satyaskinhair for Laser Toning Treatment in Gurugram?"
          text={`People searching for the best laser toning treatment in Gurugram prioritise safety, dermatologist involvement, and customised care.

At Satyaskinhair, laser toning is delivered with medical oversight, conservative protocols, and realistic counselling, ensuring skin health remains the priority.`}
        />

        <ContentBlock
          title="Book a Laser Toning Consultation in Gurugram"
          text={`Laser toning is a medical skin procedure that requires correct diagnosis and planning.

A dermatologist-guided consultation helps determine suitability, expected improvement, and treatment schedule, ensuring clarity and realistic outcomes.`}
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
                q: 'Is laser toning safe for Indian skin?',
                a: 'Yes, when performed with appropriate settings under dermatological supervision.',
              },
              {
                q: 'Does laser toning permanently remove pigmentation?',
                a: 'It reduces pigmentation but may require maintenance.',
              },
              {
                q: 'Is laser toning painful?',
                a: 'Discomfort is usually mild and short-lived.',
              },
              {
                q: 'Can laser toning be done on sensitive skin?',
                a: 'Yes, with careful assessment and customised settings.',
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
