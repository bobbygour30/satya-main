"use client";
import React, { useState } from "react";

import assets from "../assets/assets";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import ConsultationPopup from "../components/ConsultationPopup";

const faqs = [
  {
    q: "Is body contouring the same as weight loss?",
    a: "No. Body contouring treatments target specific anatomical areas and are not systemic weight-loss interventions. They are most effective in patients who are at or near their target weight.",
  },
  {
    q: "How many sessions will I need?",
    a: "Cryolipolysis typically requires 1–2 sessions per area. HIFU usually requires 2–4 sessions. HIFEM requires 4–6 sessions. Your physician will recommend a personalised plan.",
  },
  {
    q: "Are the results permanent?",
    a: "Fat cells destroyed by cryolipolysis and HIFU do not regenerate. HIFEM muscle gains are maintained with continued physical activity. A stable lifestyle helps maintain results.",
  },
  {
    q: "Is there any pain involved in these procedures?",
    a: "Treatments involve cold/suction (Cryolipolysis), brief heat sensations (HIFU), or strong muscle contractions (HIFEM). None require anaesthesia and are generally well tolerated.",
  },
  {
    q: "What is paradoxical adipose hyperplasia, and should I be concerned?",
    a: "PAH is a rare complication of cryolipolysis (approx. 1 in 4,000 cycles). Patients are counselled about this risk before treatment.",
  },
  {
    q: "How soon will I see results?",
    a: "Results are gradual. Cryolipolysis: 4–12 weeks. HIFU: 4–24 weeks. HIFEM: 2–12 weeks. Full results appear over several weeks to months.",
  },
  {
    q: "Can I combine body contouring with other treatments?",
    a: "Yes, in most cases. Your physician will advise on proper sequencing during consultation.",
  },
  {
    q: "How do I know which technology is right for me?",
    a: "This is determined only after a clinical consultation with our dermatologist. Self-selection is not recommended.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function BodyContouringTreatment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="bg-[#FFF8EF] text-[#2B333C] overflow-hidden">
      {/* ==================== SEO META ==================== */}
      <SEO
        title="Body Contouring Treatment | Cryolipolysis, HIFU & HIFEM in Gurgaon & Delhi"
        description="Non-invasive body contouring treatments. Cryolipolysis, HIFU, and HIFEM for fat reduction, muscle toning, and skin tightening. No surgery, no downtime at Satya Skin & Hair Solutions."
        canonical="https://satyaskinhair.com/body-contouring"
        showSchema={false}
      />

      {/* === PREMIUM HERO BANNER === */}
      <section className="relative w-full min-h-[69vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-[#FCEBDE]">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat bg-right bg-contain"
          style={{
            backgroundImage: `url('${assets.bodyContouring1}')`,
            backgroundPosition: "100% 50%",
            backgroundSize: "contain",
            opacity: 1
          }}
        />

        <motion.div
          className="relative z-10 px-5 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center sm:py-12 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT TEXT CONTENT */}
          <div className="space-y-6 sm:space-y-8 py-12 lg:py-16">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0E3A43]">
                Body Contouring Treatment
              </h1>

              <p className="text-[#9E4A47] text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                Reshape Without Surgery
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Stubborn fat pockets that resist diet and exercise are one of the most common concerns we see at Satya Skin & Hair Solutions. Whether it is the abdomen, flanks, inner thighs, or arms, these localised deposits rarely respond to lifestyle changes alone.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              We offer three clinically validated, non-invasive technologies: <strong>Cryolipolysis</strong>, <strong>HIFU</strong>, and <strong>HIFEM</strong>. The right choice or combination is determined only after a physician assessment.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
              className="
                bg-[#9E4A47] hover:bg-[#84332F] text-white
                py-2 px-5 sm:py-3 sm:px-8 lg:py-4 lg:px-10
                rounded-full font-semibold
                text-sm sm:text-base lg:text-lg
                shadow-lg transition-all duration-300
              "
            >
              Book Consultation →
            </motion.button>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mt-8 overflow-hidden rounded-xl">
            <img
              src={assets.bodyContouring1}
              alt="Body Contouring Treatment"
              className="w-full h-[300px] sm:h-[350px] object-cover"
            />
          </div>

          {/* Desktop Empty Column */}
          <div className="hidden lg:block" />
        </motion.div>
      </section>

      {/* === Running Ribbon Strip === */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 h-16 md:h-20 bg-gradient-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] opacity-95 shadow-lg" />

        <motion.div
          className="relative flex w-max text-white font-medium text-sm md:text-base tracking-wide py-4 md:py-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          <div className="flex whitespace-nowrap">
            <span className="px-12">
              Fat Reduction • Skin Tightening • Muscle Toning • Cryolipolysis • HIFU • HIFEM • No Surgery • No Downtime • Satya Excellence
            </span>
            <span className="px-12">
              Fat Reduction • Skin Tightening • Muscle Toning • Cryolipolysis • HIFU • HIFEM • No Surgery • No Downtime • Satya Excellence
            </span>
          </div>
        </motion.div>
      </div>

      {/* Doctor Team Section */}
      <section className="relative bg-[#FFF8EF] py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(252,235,222,0.5),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            <div className="text-center">
              <motion.img
                src={assets.drShailGupta}
                alt="Dr. Shail Gupta"
                className="w-[250px] md:w-[280px] rounded-3xl shadow-2xl object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="mt-4 font-bold text-[#2B333C] text-lg">Dr. Shail Gupta</p>
              <p className="text-[#9E4A47] font-medium text-sm">MBBS, MD — Founder</p>
            </div>

            <div className="text-center">
              <motion.img
                src={assets.drRuchiAgarwal}
                alt="Dr. Ruchi Agarwal"
                className="w-[250px] md:w-[280px] rounded-3xl shadow-2xl object-cover"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="mt-4 font-bold text-[#2B333C] text-lg">Dr. Ruchi Agarwal</p>
              <p className="text-[#9E4A47] font-medium text-sm">Co-Founder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#9E4A47] font-semibold uppercase tracking-wider">Expert Care at Satya</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B333C]">Meet the Team Behind Your Transformation</h2>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-[#FCEBDE] px-4 py-2 rounded-full font-medium text-[#9E4A47]">46+ Years Combined</span>
              <span className="bg-[#FCEBDE] px-4 py-2 rounded-full font-medium">50,000+ Procedures</span>
            </div>
            
            <p className="text-[#828D9C] italic border-l-4 border-[#9E4A47] pl-4">
              {`"Body contouring is not weight loss. It is precision. The goal is to reduce specific fat deposits, improve muscle tone, and tighten lax skin, in a patient who is already close to their target physique."`} — Dr. Ruchi Agarwal, Co-Founder
            </p>
          </motion.div>
        </div>
      </section>

      {/* === What is Non-Invasive Body Contouring + Video Section === */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#FFF8EF] to-[#FCEBDE]/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#9E4A47]">
              What Is Non-Invasive Body Contouring?
            </h2>
            <p className="text-lg md:text-xl text-[#2B333C]/80 max-w-4xl mx-auto leading-relaxed">
              Non-invasive body contouring refers to procedures that reduce localised fat, improve skin laxity, or strengthen muscle tone without incisions, anaesthesia, or recovery time — precision tools for patients at or near their target weight.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={container} className="space-y-8">
              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                These are <strong>not weight-loss treatments</strong>. They are precision tools for patients who are at or near their target weight but struggle with specific anatomical areas that have not responded to lifestyle intervention.
              </p>

              <p className="text-lg leading-relaxed text-[#2B333C]/90">
                Three technologies are available at Satya Skin & Hair Solutions, each addressing a distinct clinical problem: Cryolipolysis for localised fat reduction, HIFU for combined fat reduction and skin tightening, and HIFEM for muscle toning with secondary fat reduction.
              </p>

              <motion.ul
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {[
                  "No incisions or anaesthesia",
                  "Zero downtime required",
                  "Physician-led assessment",
                  "FDA-cleared technologies",
                  "Gradual natural results",
                  "Clinically validated efficacy",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-white/70 px-5 py-3 rounded-xl shadow-sm border border-[#DFDFDD]"
                  >
                    <svg
                      className="w-5 h-5 text-[#9E4A47]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* YouTube Video Embed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DFDFDD]/50"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/yXJnuJ74KV4?si=7JTzq9ZOp7dvfU0k" 
                  title="Non-Invasive Body Contouring Treatment - Cryolipolysis, HIFU & HIFEM"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Table */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-[#DFDFDD]">
          <h3 className="text-2xl font-bold text-[#9E4A47] mb-6 text-center">Our Technologies</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#DFDFDD]">
                  <th className="pb-4 pr-6 font-semibold">Technology</th>
                  <th className="pb-4 pr-6 font-semibold">Primary Target</th>
                  <th className="pb-4 pr-6 font-semibold">Sessions</th>
                  <th className="pb-4 font-semibold">Downtime</th>
                </tr>
              </thead>
              <tbody className="text-[#2B333C]/90">
                <tr className="border-b border-[#DFDFDD]">
                  <td className="py-4 pr-6 font-medium">Cryolipolysis</td>
                  <td className="py-4 pr-6">Localised subcutaneous fat</td>
                  <td className="py-4 pr-6">1–2 per area</td>
                  <td className="py-4">None</td>
                 </tr>
                <tr className="border-b border-[#DFDFDD]">
                  <td className="py-4 pr-6 font-medium">HIFU</td>
                  <td className="py-4 pr-6">Fat + skin laxity</td>
                  <td className="py-4 pr-6">2–4</td>
                  <td className="py-4">None</td>
                 </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium">HIFEM</td>
                  <td className="py-4 pr-6">Muscle tone + fat reduction</td>
                  <td className="py-4 pr-6">4–6</td>
                  <td className="py-4">None</td>
                 </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cryolipolysis Section - Full Content */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FCEBDE]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            Cryolipolysis — Controlled Fat Freezing
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-[#2B333C]/90">
              <h3 className="text-2xl font-semibold text-[#2B333C]">How Cryolipolysis Works</h3>
              <p>Cryolipolysis works on a well-established biological principle: fat cells (adipocytes) are more sensitive to cold than the surrounding skin, nerves, and connective tissue. A vacuum applicator draws the target tissue between two cooling panels, reducing the local fat layer temperature to approximately −5°C to −10°C for 35–60 minutes.</p>
              <p>At this temperature, fat cells undergo cryoapoptosis, a controlled, programmed cell death triggered by lipid crystallisation. The body's lymphatic system then gradually clears these apoptotic cells over the following 8–12 weeks, reducing the fat layer by approximately 20–27% per treatment cycle in the targeted zone.</p>
              
              <h3 className="text-2xl font-semibold text-[#2B333C] mt-8">Ideal Candidates</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adults with localised, pinchable fat deposits unresponsive to diet and exercise</li>
                <li>BMI under 30 (or up to 35 with physician assessment)</li>
                <li>Common areas: abdomen, flanks, inner and outer thighs, upper arms, under the chin</li>
                <li>Patients seeking a non-surgical alternative to liposuction for focal areas</li>
              </ul>
            </div>
            
            <div className="space-y-6 text-[#2B333C]/90">
              <h3 className="text-2xl font-semibold text-[#2B333C]">What to Expect on Procedure Day</h3>
              <p>A gel pad is applied over the skin before the applicator is positioned. Patients feel an intense cold and suction sensation for the first few minutes, which typically subsides as the area becomes numb. The 35–60 minute session requires no active participation patients may read, use their phone, or rest.</p>
              <p>On removal of the applicator, a brief 2-minute manual massage is performed to enhance efficacy. There is no recovery period. Patients resume normal activities immediately.</p>
              <p className="font-semibold text-[#9E4A47]">Results timeline: Perceptible from 4–6 weeks; optimal at 8–12 weeks post-treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIFU Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            HIFU Body Contouring: Fat Reduction With Skin Tightening
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-[#2B333C]/90">
              <h3 className="text-2xl font-semibold text-[#2B333C]">How HIFU Works</h3>
              <p>HIFU (High-Intensity Focused Ultrasound) delivers precisely targeted ultrasound energy to defined depths within subcutaneous tissue. At the focal point, rapid molecular oscillation generates localised heat raising tissue temperature to 60–70°C within milliseconds. This creates discrete thermal coagulation zones that destroy adipocytes without affecting the overlying skin.</p>
              <p>Deeper handpieces (8–13 mm) target subcutaneous fat. More superficial settings (1.5–4.5 mm) target the dermis and fascial layer, stimulating fibroblast activation and new collagen synthesis.</p>
              
              <h3 className="text-2xl font-semibold text-[#2B333C] mt-8">Ideal Candidates</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adults with mild to moderate subcutaneous fat combined with skin laxity</li>
                <li>Common areas: abdomen, flanks, inner thighs, upper arms</li>
                <li>Post-partum patients with lax abdominal skin alongside residual fat</li>
              </ul>
            </div>
            
            <div className="space-y-6 text-[#2B333C]/90">
              <h3 className="text-2xl font-semibold text-[#2B333C]">What to Expect</h3>
              <p>The treatment area is cleansed and ultrasound gel is applied. A topical anaesthetic cream may be used for sensitive areas. The HIFU handpiece is systematically moved across the treatment zone in grid passes. Patients experience brief, sharp heat sensations at each energy delivery point lasting a fraction of a second. Total procedure time is 30–90 minutes depending on the area.</p>
              <p>Mild redness and temporary swelling are normal and resolve within 24–48 hours. No downtime is required.</p>
              <p className="font-semibold text-[#9E4A47]">Results timeline: Skin tightening from 4-8 weeks; full results at 3–6 months. Results typically last 12–18 months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIFEM Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FCEBDE]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9E4A47] mb-12">
            HIFEM: Supramaximal Muscle Stimulation for Toning
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-[#2B333C]/90">
              <h3 className="text-2xl font-semibold text-[#2B333C]">How HIFEM Works</h3>
              <p>HIFEM (High-Intensity Focused Electromagnetic Therapy) uses focused electromagnetic pulses to induce supramaximal muscle contractions involuntary contractions of greater intensity than any achievable through voluntary exercise. A single 30-minute HIFEM session delivers approximately 20,000 supramaximal contractions.</p>
              <p>This sustained, high-frequency stimulation forces muscles into a metabolic stress state that triggers muscle remodelling and secondary fat reduction in adjacent subcutaneous fat.</p>
              
              <h3 className="text-2xl font-semibold text-[#2B333C] mt-8">Ideal Candidates</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adults seeking muscle strengthening, toning, or definition improvement</li>
                <li>Post-partum patients with diastasis recti or reduced core tone</li>
                <li>Available areas: abdomen, buttocks, thighs, calves, upper arms</li>
              </ul>
            </div>
            
            <div className="space-y-6 text-[#2B333C]/90">
              <h3 className="text-2xl font-semibold text-[#2B333C]">What to Expect</h3>
              <p>Applicator paddles are secured to the treatment area. Electromagnetic intensity is increased gradually over the first few minutes. Patients experience rhythmic, involuntary muscle contractions throughout the 30-minute session. Sessions are typically scheduled twice weekly over 2–3 weeks.</p>
              <p>Delayed-onset muscle soreness (DOMS) is expected for 24–72 hours after initial sessions. Normal activity resumes immediately.</p>
              <p className="font-semibold text-[#9E4A47]">Results timeline: Muscle tone improvements from 2–4 weeks; visible definition from 4–8 weeks; peak results at 2–3 months post-completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Combination Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#9E4A47]">Can Treatments Be Combined?</h2>
          <p className="text-lg text-[#2B333C]/90 max-w-3xl mx-auto">
            Yes, and in many cases, combination protocols deliver superior outcomes. The three technologies address complementary clinical concerns:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#DFDFDD]">
              <h3 className="font-bold text-xl text-[#9E4A47] mb-3">Cryolipolysis + HIFEM</h3>
              <p>Simultaneous fat reduction and muscle strengthening — ideal for abdominal contouring.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#DFDFDD]">
              <h3 className="font-bold text-xl text-[#9E4A47] mb-3">HIFU + HIFEM</h3>
              <p>Addresses skin laxity and muscle tone where both are present.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#DFDFDD]">
              <h3 className="font-bold text-xl text-[#9E4A47] mb-3">HIFU + Cryolipolysis</h3>
              <p>For patients with significant fat volume and co-existing laxity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Satya */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FCEBDE]/30">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#9E4A47]/5 to-[#B87C72]/5 rounded-3xl p-10 border border-[#9E4A47]/20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#9E4A47] mb-6">
            Why Choose Satya Skin & Hair Solutions?
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-[#2B333C]/90">
            <li>Physician-led assessment and treatment planning</li>
            <li>Advanced Cryolipolysis, HIFU & HIFEM technology</li>
            <li>Thorough safety screening and informed consent</li>
            <li>Realistic expectations and documented outcomes</li>
            <li>Clinics in Gurgaon (DLF Phase 4) and Delhi (Pitampura)</li>
            <li>Founded in 2005 by Dr. Shail Gupta and Dr. Ruchi Agarwal</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-r from-[#9E4A47] to-[#B87C72] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Book Body Contouring Consultation in Gurgaon or Delhi
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Get a personalised assessment for Cryolipolysis, HIFU, or HIFEM.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-white text-[#9E4A47] py-4 px-8 md:py-5 md:px-9 rounded-full font-bold text-lg md:text-xl shadow-2xl hover:bg-[#FFF8EF] transition-all"
          >
            Book Your Consultation Today
          </button>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FFF8EF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#9E4A47] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                  className="bg-white rounded-2xl shadow-sm border border-[#DFDFDD] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold md:text-lg text-[#2B333C]">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-[#9E4A47]" size={22} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-[#828D9C] leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </main>
  );
}