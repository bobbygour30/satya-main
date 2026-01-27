'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function BotoxTreatment() {
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
          Botox Treatment in Gurgaon
        </motion.h1>

        <p className="mt-4 max-w-3xl text-[#828D9C] leading-relaxed">
          Fine lines and dynamic wrinkles often appear due to repeated facial expressions,
          sun exposure, and natural ageing. Many people searching for Botox treatment in Gurgaon
          are looking for a safe, medically guided option to soften expression lines without
          changing their natural appearance.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-10 sm:py-14 space-y-10">

        <ContentBlock
          title="Anti-Wrinkle Injections for Natural Facial Relaxation"
          text={`Botox is a well-established injectable treatment used to relax specific facial muscles
and reduce visible wrinkles.

At Satya Skin & Hair Solutions, Botox treatments are planned conservatively,
focusing on facial balance, muscle dynamics, and realistic outcomes rather than
frozen or exaggerated results.`}
        />

        <ContentBlock
          title="What Is Botox Treatment?"
          text={`Botox is a purified form of botulinum toxin type A used in very small,
controlled doses for medical and aesthetic purposes.

In cosmetic dermatology, Botox works by temporarily relaxing targeted facial muscles
that cause dynamic wrinkles. It does not fill the skin; instead, it reduces muscle
activity that contributes to wrinkle formation.`}
        />

        <ContentBlock
          title="Why People Choose Botox Treatment in Gurgaon"
          text={`People choose Botox treatment in Gurgaon to soften wrinkles caused by
facial expressions such as frowning, squinting, or raising eyebrows.

Common searches include Botox for wrinkles, anti-wrinkle injections, and Botox face
treatment. Botox is preferred because it is minimally invasive, requires no surgery,
and has predictable, gradual effects when performed correctly.`}
        />

        <ContentBlock
          title="Which Facial Areas Can Be Treated With Botox?"
          text={`Botox treatment is commonly used for areas where dynamic wrinkles form:
• Forehead lines
• Frown lines between the eyebrows
• Crow’s feet around the eyes
• Bunny lines on the nose
• Jawline or masseter muscles (selected cases)

Searches like Botox for forehead lines and Botox for crow’s feet reflect these
commonly treated areas.`}
        />

        <ContentBlock
          title="Botox vs Dermal Fillers – Understanding the Difference"
          text={`Botox and dermal fillers are often confused.

Botox relaxes muscles to reduce expression lines, while fillers add volume to areas
with structural loss. Botox is ideal for dynamic wrinkles, whereas fillers address
volume-related concerns.

At Satyaskinhair, treatment choice is based on facial anatomy and movement patterns,
not trends.`}
        />

        <ContentBlock
          title="Consultation and Facial Assessment"
          text={`Every Botox treatment begins with a detailed facial assessment.

Muscle strength, facial symmetry, expression patterns, and skin condition are evaluated
before planning injections. Conservative dosing and precise placement are prioritised
to avoid over-treatment and unnatural results.`}
        />

        <ContentBlock
          title="How Botox Treatment Is Performed"
          text={`Botox treatment is performed in a clinical setting using fine needles.

Small amounts of Botox are injected into specific muscles based on facial mapping.
The procedure takes a short time, causes minimal discomfort, and does not require
general anaesthesia.`}
        />

        <ContentBlock
          title="What to Expect After Botox Treatment"
          text={`After Botox treatment, mild redness or tiny injection marks may be visible
and usually settle within a few hours.

Bruising is uncommon but can occur. Patients are advised to avoid rubbing treated
areas and to follow simple post-treatment instructions.`}
        />

        <ContentBlock
          title="When Do Botox Results Become Visible?"
          text={`Botox does not work instantly.

Results typically begin to appear within a few days and continue to develop over
one to two weeks. Wrinkles gradually soften as muscle activity reduces, leading
to natural-looking improvement.`}
        />

        <ContentBlock
          title="How Long Do Botox Results Last?"
          text={`Botox effects are temporary. Muscle relaxation typically lasts several months,
after which muscle activity gradually returns.

Duration varies based on muscle strength, treatment area, and individual metabolism.
Repeat treatments are planned conservatively.`}
        />

        <ContentBlock
          title="Botox for Preventive Ageing"
          text={`Some individuals choose Botox for preventive purposes to reduce the formation
of deep expression lines over time.

Preventive Botox uses lower doses and focuses on gentle muscle relaxation rather than
visible wrinkle correction. This approach is discussed carefully during consultation.`}
        />

        <ContentBlock
          title="Botox Treatment for Men and Women"
          text={`Botox treatment is suitable for both men and women.

Men often require different dosing due to stronger facial muscles. Treatment planning
is individualised based on facial structure and muscle strength rather than gender alone.`}
        />

        <ContentBlock
          title="Safety and Side Effects of Botox Treatment"
          text={`Botox is safe when administered by a trained medical professional.

Temporary side effects may include mild swelling, redness, or headache. Rare effects
such as drooping can occur if improperly placed, highlighting the importance of
medical expertise.`}
        />

        <ContentBlock
          title="Botox and Natural Facial Expressions"
          text={`A common concern is whether Botox causes a frozen appearance.

When planned conservatively, Botox softens wrinkles while preserving natural movement.
At Satyaskinhair, facial harmony and subtle improvement are the primary goals.`}
        />

        <ContentBlock
          title="Who May Not Be Suitable for Botox Treatment?"
          text={`Botox may not be recommended for individuals with certain neuromuscular
conditions, active skin infections at injection sites, or unrealistic expectations.

A medical consultation determines suitability and ensures patient safety.`}
        />

        <ContentBlock
          title="Botox Treatment and Skin Quality"
          text={`Botox affects muscle activity rather than skin texture.

For concerns such as pigmentation, scars, or laxity, other treatments may be
recommended alongside or instead of Botox when medically appropriate.`}
        />

        <ContentBlock
          title="Botox Before and After Expectations"
          text={`Botox softens lines rather than completely erasing all wrinkles.

The goal is a refreshed, relaxed appearance rather than dramatic change.
Realistic expectations lead to higher satisfaction.`}
        />

        <ContentBlock
          title="Botox vs Home Remedies or Creams"
          text={`Topical creams cannot relax facial muscles.

While skincare supports skin health, it cannot replicate Botox’s effect on
expression lines, which is why Botox remains a preferred medical option.`}
        />

        <ContentBlock
          title="Long-Term Planning With Botox Treatment"
          text={`Botox is most effective as part of a long-term facial ageing strategy.

Overuse or frequent high-dose treatments can disrupt facial balance.
Conservative planning ensures natural results as facial structure changes with age.`}
        />

        <ContentBlock
          title="Why Choose Satyaskinhair for Botox Treatment in Gurgaon?"
          text={`Patients searching for the best Botox treatment prioritise safety,
experience, and natural results.

At Satyaskinhair, Botox is delivered with medical oversight, personalised assessment,
and conservative dosing to ensure subtle, balanced outcomes.`}
        />

        <ContentBlock
          title="Book a Botox Treatment Consultation in Gurgaon"
          text={`Botox treatment is a medical aesthetic procedure requiring proper assessment.

A doctor-led consultation helps determine suitability, treatment areas, and expected
outcomes, ensuring informed and safe decision-making.`}
        />

      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#FCEBDE]/60 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl font-semibold text-[#9E4A47] mb-6">FAQ</h2>

          <div className="space-y-4">
            {[
              {
                q: 'What is Botox treatment used for?',
                a: 'Botox is used to reduce dynamic wrinkles by relaxing facial muscles.',
              },
              {
                q: 'Is Botox treatment safe?',
                a: 'Yes, when administered by a trained medical professional.',
              },
              {
                q: 'Does Botox change facial expressions?',
                a: 'When done correctly, it softens wrinkles while preserving natural expression.',
              },
              {
                q: 'How often should Botox be repeated?',
                a: 'Frequency depends on muscle activity and individual treatment goals.',
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
