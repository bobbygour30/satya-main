'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function ChemicalPeelTreatment() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.chemicalPeelBanner}
            alt="Chemical Peel Treatment in Gurugram"
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
              Chemical Peel Treatment in Gurugram
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              Dermatologist-supervised skin peel treatments for clearer, healthier skin.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        <ContentBlock
          title="Dermatologist-Supervised Skin Peel Treatments for Clearer, Healthier Skin"
          text={`Uneven skin tone, acne marks, pigmentation, and dull texture are common concerns across all age groups. Chemical peel treatments are dermatological procedures designed to exfoliate damaged skin layers and stimulate healthy skin renewal.

At Satyaskinhair, chemical peel treatments are performed under dermatological supervision, with careful selection of peel type, strength, and frequency based on individual skin needs.`}
        />

        <ContentBlock
          title="What Is Chemical Peel Treatment?"
          text={`Chemical peel treatment is a dermatological procedure in which a chemical solution is applied to exfoliate the outer layers of skin. This controlled exfoliation improves skin texture, tone, and clarity.

Chemical peels are commonly used for acne, pigmentation, dark spots, fine lines, uneven tone, and dull skin. Peel depth and strength are selected according to skin type and treatment goals.`}
        />

        <ContentBlock
          title="Why People Choose Chemical Peel Treatment in Gurugram"
          text={`Many individuals choose chemical peel treatment to address persistent skin concerns that do not respond adequately to creams alone.

Compared to home exfoliation or salon facials, medical chemical peels offer deeper and more consistent improvement. They are commonly chosen for face rejuvenation, acne control, and pigmentation correction.`}
        />

        <ContentBlock
          title="Types of Chemical Peels Used in Dermatology"
          text={`Chemical peels are broadly classified into superficial, medium, and deep peels.

Most clinical treatments involve superficial or medium-depth peels, which are safer and involve minimal recovery. Dermatologist-guided peels are preferred over aggressive treatments to reduce risks.`}
        />

        <ContentBlock
          title="Chemical Peel for Acne and Acne Marks"
          text={`Chemical peel for acne is one of the most commonly requested treatments. Certain peels help unclog pores, regulate oil production, and reduce acne-causing bacteria.

Chemical peels are also used to improve acne marks and post-inflammatory pigmentation. At Satyaskinhair, acne peels are selected carefully to avoid irritation, especially for sensitive or acne-prone skin.`}
        />

        <ContentBlock
          title="Chemical Peel for Pigmentation and Dark Spots"
          text={`Chemical peel for pigmentation is widely sought by individuals dealing with melasma, tanning, sun spots, and uneven skin tone.

Controlled exfoliation helps lighten pigmentation gradually. Multiple sessions, sun protection, and maintenance care are essential for sustained improvement.`}
        />

        <ContentBlock
          title="Chemical Peel for Skin Brightening and Texture"
          text={`Many patients choose chemical peel treatments for overall skin glow and texture improvement.

Superficial peels remove dead skin cells and promote smoother skin. At Satyaskinhair, treatments are customised to enhance brightness without compromising the skin barrier or causing over-exfoliation.`}
        />

        <ContentBlock
          title="Consultation and Skin Assessment"
          text={`Every chemical peel treatment begins with a detailed dermatological consultation.

Skin type, sensitivity, acne activity, pigmentation depth, and medical history are assessed. This step is especially important for Indian skin, which is more prone to post-inflammatory pigmentation.`}
        />

        <ContentBlock
          title="How Chemical Peel Treatment Is Performed"
          text={`Chemical peel treatment is performed in a clinical setting. The skin is cleansed and the peel solution is applied for a controlled duration.

Patients may feel mild tingling or warmth. The peel is neutralised or removed as per protocol. The procedure usually takes a short time depending on peel type and area treated.`}
        />

        <ContentBlock
          title="What to Expect After a Chemical Peel"
          text={`After treatment, mild redness, tightness, or light flaking may occur. These effects are temporary and part of the skin renewal process.

Downtime varies depending on peel depth. Superficial peels allow quick return to routine activities, while slightly deeper peels may require brief recovery.`}
        />

        <ContentBlock
          title="Post-Peel Care and Skin Protection"
          text={`Post-peel care is essential for safe healing and optimal results.

Patients are advised to use gentle skincare, moisturisers, and strict sun protection. Avoiding harsh products and sun exposure reduces the risk of pigmentation or irritation.`}
        />

        <ContentBlock
          title="Number of Sessions Required"
          text={`Chemical peel treatment usually requires multiple sessions for noticeable improvement.

Gradual, repeated peels are safer and more effective than one aggressive session. This approach supports healthy skin regeneration with minimal risk.`}
        />

        <ContentBlock
          title="Chemical Peel for Different Skin Types"
          text={`Chemical peel treatment can be performed on different skin types when selected appropriately.

At Satyaskinhair, peel strength and frequency are adjusted based on skin tone, sensitivity, and condition to ensure safety and effectiveness.`}
        />

        <ContentBlock
          title="Chemical Peel for Men and Women"
          text={`Chemical peel treatment is suitable for both men and women.

Men often seek peels for acne, oil control, and pigmentation, while women commonly choose peels for glow, melasma, and acne marks.`}
        />

        <ContentBlock
          title="Safety and Side Effects"
          text={`Chemical peel treatment is generally safe under dermatological supervision.

Temporary side effects may include redness, dryness, or mild irritation. Improper peel selection can increase the risk of pigmentation, which is why medical guidance is important.`}
        />

        <ContentBlock
          title="Who May Not Be Suitable for Chemical Peel Treatment?"
          text={`Chemical peel treatment may not be recommended for individuals with active skin infections, severe eczema, or extremely sensitive skin.

Certain medications may require postponement of peels. A consultation helps determine suitability and prevents complications.`}
        />

        <ContentBlock
          title="Chemical Peel vs Facial Treatments"
          text={`Unlike salon facials, chemical peels work at a deeper skin level.

Facials provide temporary glow, while chemical peels improve skin structure over time. This difference explains why many people choose skin peel treatment under medical supervision.`}
        />

        <ContentBlock
          title="Long-Term Results and Maintenance"
          text={`Chemical peel treatment improves skin gradually.

Maintenance peels, medical skincare, and sun protection help sustain results. At Satyaskinhair, long-term planning is discussed to maintain improvements safely.`}
        />

        <ContentBlock
          title="Why Choose Satyaskinhair for Chemical Peel Treatment in Gurugram"
          text={`People searching for the best chemical peel treatment in Gurugram prioritise safety, dermatologist involvement, and customised care.

At Satyaskinhair, chemical peel treatments follow conservative protocols with realistic counselling, ensuring skin health is never compromised.`}
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
                q: 'Is chemical peel treatment safe?',
                a: 'Yes, when performed under dermatological supervision.',
              },
              {
                q: 'Does chemical peel lighten skin permanently?',
                a: 'It improves tone and texture but requires maintenance and sun protection.',
              },
              {
                q: 'Is chemical peel painful?',
                a: 'Discomfort is usually mild and temporary.',
              },
              {
                q: 'How soon are results visible?',
                a: 'Gradual improvement is seen over multiple sessions.',
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
