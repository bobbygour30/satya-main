'use client';
import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function MoleRemovalTreatment() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <img
            src={assets.moleRemovalBanner}
            alt="Mole Removal Treatment in Gurugram"
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
              Mole Removal Treatment in Gurugram
            </motion.h1>
            <p className="mt-4 max-w-2xl text-[#FCEBDE] text-sm sm:text-base md:text-lg">
              Safe, dermatologist-supervised mole removal with focus on skin health and minimal scarring.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16 space-y-10">

        <ContentBlock
          title="Medically Guided Mole Removal Treatment"
          text={`Moles are common skin growths that can appear anywhere on the body. While many moles are harmless, some may cause cosmetic concern, repeated irritation, or require medical evaluation.

At Satyaskinhair, mole removal is performed under dermatological supervision. Each case is assessed carefully to ensure safe removal with minimal scarring and preservation of surrounding skin health.`}
        />

        <ContentBlock
          title="What Is Mole Removal Treatment?"
          text={`Mole removal treatment is a dermatological procedure used to remove benign skin moles for medical or cosmetic reasons.

Moles may be flat or raised, pigmented or skin-coloured, and can change over time. The removal method depends on the mole’s size, depth, location, and clinical appearance.`}
        />

        <ContentBlock
          title="Why People Choose Mole Removal Treatment in Gurugram"
          text={`People seek mole removal treatment for different reasons. Some moles become irritated due to friction from clothing or shaving, while others are removed for cosmetic comfort, especially on the face or neck.

Searches such as mole removal on face, skin mole removal, and safe mole removal treatment reflect the preference for professional, dermatologist-performed procedures.`}
        />

        <ContentBlock
          title="Types of Moles Commonly Treated"
          text={`Moles vary in appearance and behaviour. Common types include:
• Benign melanocytic moles
• Raised or hanging moles
• Flat pigmented moles
• Congenital moles
• Irritated or frequently bleeding moles

At Satyaskinhair, every mole is evaluated clinically before removal to ensure the appropriate approach is selected.`}
        />

        <ContentBlock
          title="Importance of Dermatological Evaluation Before Mole Removal"
          text={`Not all moles should be removed casually. Some may require closer examination to rule out abnormal changes.

At Satyaskinhair, mole removal always begins with a dermatological assessment. This helps determine whether removal is cosmetic or medically indicated and whether further investigation is required.`}
        />

        <ContentBlock
          title="Mole Removal Treatment Options Available"
          text={`Different mole removal techniques are used depending on the mole type. These may include:
• Laser mole removal
• Radiofrequency mole removal
• Surgical excision for deeper moles

Minimally invasive options are chosen only when appropriate, based on safety and expected outcome.`}
        />

        <ContentBlock
          title="Laser Mole Removal Treatment"
          text={`Laser mole removal is often used for small, superficial, benign moles.

The laser targets pigmented cells using controlled energy. It is commonly chosen for facial moles where precision and cosmetic outcome are important. Laser settings are adjusted carefully to protect surrounding skin.`}
        />

        <ContentBlock
          title="Radiofrequency Mole Removal"
          text={`Radiofrequency mole removal uses controlled heat energy to remove raised or protruding moles.

This technique allows precise removal with minimal bleeding and is often used for skin-coloured or hanging moles. Healing is generally smooth when post-procedure care is followed.`}
        />

        <ContentBlock
          title="Surgical Mole Removal"
          text={`Surgical excision may be recommended for deeper or suspicious moles.

This method ensures complete removal and allows tissue examination if required. At Satyaskinhair, surgical removal is performed conservatively with careful wound closure to minimise scarring.`}
        />

        <ContentBlock
          title="Consultation and Planning"
          text={`Every mole removal treatment begins with a detailed consultation.

The dermatologist examines the mole’s size, colour, borders, and growth pattern. Planning includes choosing the safest technique, discussing healing expectations, and explaining aftercare clearly.`}
        />

        <ContentBlock
          title="What Happens During Mole Removal Treatment?"
          text={`Mole removal procedures are usually performed under local anaesthesia.

The area is cleaned and the selected technique is used to remove the mole. Most procedures are completed in a short time, and patients can usually return home the same day.`}
        />

        <ContentBlock
          title="What to Expect After Mole Removal"
          text={`After mole removal, mild redness, swelling, or scabbing may occur. These effects are temporary and part of the healing process.

Patients are advised to keep the area clean, avoid picking scabs, and protect the skin from sun exposure.`}
        />

        <ContentBlock
          title="Healing and Scar Management"
          text={`Healing time depends on the removal method and individual skin type.

Superficial removals heal faster, while deeper procedures take longer. At Satyaskinhair, scar prevention is prioritised through proper wound care and sun protection guidance.`}
        />

        <ContentBlock
          title="Mole Removal on Face and Sensitive Areas"
          text={`Mole removal on the face requires special care due to cosmetic sensitivity.

Precision, technique selection, and healing support are critical. Dermatologist-performed procedures reduce the risk of visible scarring compared to non-medical treatments.`}
        />

        <ContentBlock
          title="Safety and Side Effects"
          text={`Mole removal is generally safe when performed by a qualified dermatologist.

Temporary side effects may include redness, mild discomfort, or pigmentation changes. Proper evaluation and sterile technique help minimise risks.`}
        />

        <ContentBlock
          title="Mole Removal vs Home Remedies"
          text={`Home remedies for mole removal can cause burns, scarring, or incomplete removal.

Professional mole removal treatment offers controlled, medically safe outcomes and reduces the risk of infection or poor healing.`}
        />

        <ContentBlock
          title="Who May Not Be Suitable for Immediate Mole Removal?"
          text={`Mole removal may be postponed in cases of active skin infection, uncontrolled medical conditions, or when further investigation is required.

At Satyaskinhair, patient safety is prioritised. Monitoring or alternative guidance may be recommended instead of immediate removal.`}
        />

        <ContentBlock
          title="Long-Term Expectations After Mole Removal"
          text={`Most benign moles do not recur after proper removal.

However, new moles may appear elsewhere over time. Patients are encouraged to monitor their skin and seek dermatological advice for new or changing lesions.`}
        />

        <ContentBlock
          title="Why Choose Satyaskinhair for Mole Removal Treatment in Gurugram"
          text={`People searching for the best mole removal treatment in Gurugram prioritise safety, dermatologist expertise, and cosmetic outcomes.

At Satyaskinhair, mole removal is performed with medical precision, ethical guidance, and personalised care.`}
        />

        <ContentBlock
          title="Book a Mole Removal Consultation in Gurugram"
          text={`Mole removal is a medical skin procedure that should always be performed under professional guidance.

A dermatologist-supervised consultation helps determine the safest method and expected outcome, ensuring clarity and confidence before treatment.`}
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
                q: 'Is mole removal painful?',
                a: 'The procedure is performed under local anaesthesia, so discomfort is minimal.',
              },
              {
                q: 'Will mole removal leave a scar?',
                a: 'Scarring depends on mole type and healing. Proper care reduces risk.',
              },
              {
                q: 'Is laser mole removal safe?',
                a: 'Yes, when performed selectively by a dermatologist.',
              },
              {
                q: 'Can moles come back after removal?',
                a: 'Most benign moles do not recur if completely removed.',
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
