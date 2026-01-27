'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function MNRFTreatment() {
  return (
    <main className="bg-[#FFF8EF] text-[#2B333C]">

      {/* ================= PAGE HEADER ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 pt-12 sm:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#9E4A47]"
        >
          MNRF Treatment in Gurugram
        </motion.h1>

        <p className="mt-4 max-w-3xl text-[#828D9C] leading-relaxed">
          Skin concerns such as acne scars, enlarged pores, uneven texture, and early skin laxity often need treatments that work deeper than creams or facials.
          Many people searching for MNRF treatment in Gurugram are looking for a minimally invasive procedure that improves skin quality with controlled downtime.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-10 sm:py-14 space-y-10">

        <ContentBlock
          title="Understanding MNRF Treatment"
          text={`MNRF, also known as microneedling radiofrequency, is a dermatology procedure designed to stimulate collagen, improve skin structure, and enhance firmness over time.

At Satya Skin & Hair Solutions, MNRF treatment is planned conservatively, focusing on skin safety, realistic outcomes, and long-term improvement.`}
        />

        <ContentBlock
          title="What Is MNRF Treatment?"
          text={`MNRF stands for Microneedling Radiofrequency. It combines two technologies: microneedles that create controlled micro-channels in the skin, and radiofrequency energy delivered into deeper skin layers.

This combination stimulates collagen and elastin production, which are essential for healthy, firm skin. Unlike surface treatments, MNRF works at the dermal level, making it suitable for scars, pores, and skin laxity.`}
        />

        <ContentBlock
          title="Why Is MNRF Treatment Popular in Gurugram?"
          text={`The demand for MNRF treatment in Gurugram has increased because it addresses multiple skin concerns in a single procedure.

Patients often want improvement in scars, texture, and firmness without aggressive resurfacing or long downtime. Searches such as microneedling RF treatment, radiofrequency microneedling, and MNRF for acne scars reflect this interest.`}
        />

        <ContentBlock
          title="How MNRF Treatment Works Inside the Skin"
          text={`During MNRF treatment, fine needles create micro-injuries that trigger the body’s natural healing response. At the same time, radiofrequency energy is released at controlled depths.

This dual action causes collagen remodelling and gradual skin tightening. Because the energy is delivered below the skin surface, the outer layer remains relatively protected, reducing downtime compared to ablative lasers.`}
        />

        <ContentBlock
          title="Skin Concerns Treated With MNRF"
          text={`MNRF treatment is commonly used for:
• Acne scars
• Enlarged pores
• Uneven skin texture
• Fine lines and early wrinkles
• Mild to moderate skin laxity
• Stretch marks (selected cases)

Searches like MNRF for face, MNRF for acne scars, and microneedling radiofrequency for skin tightening reflect these common concerns.`}
        />

        <ContentBlock
          title="MNRF for Acne Scars – What to Expect"
          text={`MNRF for acne scars is one of the most searched indications.

Acne scars occur due to collagen damage during inflammation. MNRF helps by stimulating new collagen in scarred areas. Improvement is gradual and depends on scar type, depth, and individual skin response.`}
        />

        <ContentBlock
          title="MNRF for Skin Tightening and Ageing"
          text={`MNRF treatment is also used for skin tightening and early signs of ageing.

By improving collagen density, it enhances skin firmness and texture. It is commonly chosen by patients looking for non-surgical skin tightening with natural-looking improvement rather than dramatic lifting effects.`}
        />

        <ContentBlock
          title="Consultation and Skin Evaluation"
          text={`Every MNRF treatment at Satyaskinhair begins with a detailed skin evaluation.

Skin type, scar pattern, sensitivity, and pigmentation risk are assessed. This step is especially important for Indian skin, which is more prone to post-inflammatory pigmentation.`}
        />

        <ContentBlock
          title="How Is MNRF Treatment Performed?"
          text={`MNRF treatment is performed in a clinical setting. A topical anaesthetic is applied to improve comfort.

The MNRF handpiece is moved across the treatment area in a controlled manner. Patients may feel pressure or mild heat during the procedure. Session duration depends on the area treated.`}
        />

        <ContentBlock
          title="What to Expect After MNRF Treatment?"
          text={`After MNRF treatment, mild redness, swelling, or warmth may occur and usually settles within a day or two.

Tiny needle marks may be visible temporarily. Most patients resume routine activities shortly, making MNRF suitable for those seeking minimal downtime treatments.`}
        />

        <ContentBlock
          title="Downtime and Recovery With MNRF"
          text={`Downtime with MNRF is generally shorter than ablative laser treatments.

Skin may feel slightly rough or sensitive for a few days. Gentle skincare, moisturisation, and sun protection are essential to support healing and reduce pigmentation risk.`}
        />

        <ContentBlock
          title="Number of MNRF Sessions Required"
          text={`MNRF works gradually. Most patients require multiple sessions spaced several weeks apart.

The number of sessions depends on skin concern severity and individual response. Over-treating in a single session is avoided to maintain skin safety.`}
        />

        <ContentBlock
          title="MNRF vs Microneedling Alone"
          text={`Microneedling alone provides superficial stimulation, while microneedling radiofrequency delivers energy deeper into the skin.

This makes MNRF more effective for scars, pores, and laxity compared to standard microneedling.`}
        />

        <ContentBlock
          title="MNRF vs CO2 Fractional Laser"
          text={`CO2 fractional laser resurfaces the skin surface and works well for deep scars but involves more downtime.

MNRF is less aggressive and better suited for patients seeking gradual improvement with shorter recovery. Treatment choice depends on skin condition and tolerance.`}
        />

        <ContentBlock
          title="Safety and Side Effects of MNRF"
          text={`MNRF is generally safe when performed under dermatological supervision.

Temporary redness, swelling, or sensitivity are common and usually resolve quickly. Risks increase if settings are inappropriate or aftercare is ignored.`}
        />

        <ContentBlock
          title="MNRF and Pigmentation Risk in Indian Skin"
          text={`Pigmentation risk is a common concern in Indian skin.

Because MNRF delivers energy below the surface, the risk is lower compared to surface-damaging procedures when planned conservatively with sun protection.`}
        />

        <ContentBlock
          title="Who May Not Be Suitable for MNRF Treatment?"
          text={`MNRF may not be recommended for individuals with active skin infections, uncontrolled acne flare-ups, or certain medical conditions.

A consultation helps determine whether MNRF is appropriate or if alternative treatments are safer at that time.`}
        />

        <ContentBlock
          title="Long-Term Results and Maintenance"
          text={`MNRF improves skin gradually as collagen builds over weeks to months.

Results are not instant. Maintenance sessions or supportive skincare may be recommended depending on ageing and lifestyle factors.`}
        />

        <ContentBlock
          title="MNRF Before and After Expectations"
          text={`Improvement varies between individuals.

Skin texture, scar depth, and healing response affect results. The goal of MNRF is improvement, not perfection.`}
        />

        <ContentBlock
          title="Why Choose Satyaskinhair for MNRF Treatment in Gurugram?"
          text={`Patients searching for the best MNRF treatment prioritise safety, dermatologist involvement, and personalised planning.

At Satyaskinhair, MNRF treatment is delivered with medical oversight, conservative protocols, and long-term skin health planning rather than aggressive procedures.`}
        />

        <ContentBlock
          title="Book an MNRF Treatment Consultation in Gurugram"
          text={`MNRF treatment is a medical skin procedure requiring proper evaluation and planning.

A dermatologist-guided consultation helps determine suitability, number of sessions, and expected improvement, ensuring clarity and informed decision-making.`}
        />

      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#FCEBDE]/60 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-semibold text-[#9E4A47] mb-6">FAQ</h2>

          <div className="space-y-4">
            {[
              {
                q: 'What is MNRF treatment used for?',
                a: 'MNRF is used for acne scars, pores, skin tightening, and texture improvement.',
              },
              {
                q: 'Is MNRF safe for Indian skin?',
                a: 'Yes, when performed with appropriate settings under dermatological supervision.',
              },
              {
                q: 'How long does recovery take after MNRF?',
                a: 'Most patients recover within a few days.',
              },
              {
                q: 'Is MNRF better than laser?',
                a: 'It depends on the skin concern. MNRF is less aggressive with shorter downtime.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#DFDFDD] rounded-xl p-5">
                <h3 className="font-medium text-[#2B333C]">{item.q}</h3>
                <p className="mt-2 text-sm text-[#828D9C]">{item.a}</p>
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
      initial={{ opacity: 0, y: 16 }}
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
