import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => {
  return (
    <div className="w-full bg-[#FFF8EF] pt-10 pb-20 px-4 md:px-8 lg:px-12 ">

      {/* WHAT WE DO HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="text-[#B87C72] text-sm font-medium tracking-wider">
          SATYA PHILOSOPHY
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] mt-1">
          WHAT WE DO
        </h2>
        <p className="text-[#828D9C] mt-3 max-w-xl leading-relaxed">
          We do with Science, Artistry, and Love. At Satya Skin & Hair Solutions,
          medicine exists to serve the patient — not trends, shortcuts, or commerce.
        </p>
      </motion.div>

      {/* GRID SECTION */}
      <div className="grid md:grid-cols-4 gap-5">

        {/* CARD 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white border border-[#FCEBDE] rounded-xl p-6 flex flex-col space-y-3 
          transition-all duration-500 hover:-translate-y-2 hover:shadow-xl 
          hover:shadow-[#9E4A47]/10 hover:scale-[1.03]"
        >
          <span className="text-2xl text-[#B87C72]/50 font-semibold">/1</span>
          <h3 className="text-xl font-semibold text-[#2B333C]">Science First</h3>
          <p className="text-[#828D9C] text-sm">
            Every protocol is evidence-based, medically validated, and continuously
            refined through global research and clinical data.
          </p>
        </motion.div>

        {/* CARD 2 (featured dark) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#2B333C] text-white rounded-xl p-6 flex flex-col space-y-3 
          transition-all duration-500 hover:-translate-y-2 hover:shadow-xl 
          hover:shadow-[#2B333C]/50 hover:scale-[1.03]"
        >
          <span className="text-2xl text-[#DFDFDD]/40 font-semibold">/2</span>
          <h3 className="text-xl font-semibold">Artistry with Precision</h3>
          <p className="text-[#DFDFDD] text-sm">
            Natural results demand balance and restraint. Each face and hairline
            is treated as a unique canvas — refined, age-appropriate, and never artificial.
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white border border-[#FCEBDE] rounded-xl p-6 flex flex-col space-y-3 
          transition-all duration-500 hover:-translate-y-2 hover:shadow-xl 
          hover:shadow-[#9E4A47]/10 hover:scale-[1.03]"
        >
          <span className="text-2xl text-[#B87C72]/50 font-semibold">/3</span>
          <h3 className="text-xl font-semibold text-[#2B333C]">
            Truth & Ethics
          </h3>
          <p className="text-[#828D9C] text-sm">
            Patients are educated, not persuaded. Treatments that are unnecessary,
            unsafe, or unlikely to add value are honestly declined.
          </p>
        </motion.div>

        {/* CARD 4 (primary accent) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#9E4A47] to-[#84332F] text-white rounded-xl p-6 flex flex-col space-y-3 
          transition-all duration-500 hover:-translate-y-2 hover:shadow-xl 
          hover:shadow-[#9E4A47]/40 hover:scale-[1.03]"
        >
          <span className="text-2xl text-white/50 font-semibold">/4</span>
          <h3 className="text-xl font-semibold">
            Long-Term Results
          </h3>
          <p className="text-[#FFF8EF] text-sm">
            Decisions are guided by anatomy, health, and durability — ensuring
            outcomes that age gracefully and stand the test of time.
          </p>
        </motion.div>
      </div>

      {/* IMAGE CARD */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 rounded-xl overflow-hidden relative group 
        transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]"
      >
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="Satya Philosophy"
          className="w-full h-72 object-cover"
        />
        <button className="absolute bottom-4 left-4 bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:opacity-90 transition">
          VIEW OUR PHILOSOPHY
        </button>
      </motion.div>

      {/* REAL RESULTS SECTION */}
      <div className="grid md:grid-cols-3 gap-10 mt-20 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] leading-tight">
            Real Care.<br />Real Results.
          </h2>

          <p className="text-[#828D9C] max-w-sm leading-relaxed">
            When ethics lead medicine, outcomes follow naturally. Thousands of
            patients trust Satya for honest guidance and results that feel real.
          </p>

          <button className="bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition shadow-lg">
            See Patient Stories
          </button>
        </motion.div>

        {/* RESULT 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#FCEBDE]
          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03]"
        >
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f87"
            alt="Patient story"
            className="w-full h-72 object-cover"
          />
          <div className="p-5">
            <h3 className="font-semibold text-[#2B333C]">
              Corrective Hair Restoration
            </h3>
            <p className="text-sm text-[#828D9C]">
              Repair & Donor Preservation
            </p>
          </div>
        </motion.div>

        {/* RESULT 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#FCEBDE]
          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03]"
        >
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
            alt="Patient story"
            className="w-full h-72 object-cover"
          />
          <div className="p-5">
            <h3 className="font-semibold text-[#2B333C]">
              Natural Skin Rejuvenation
            </h3>
            <p className="text-sm text-[#828D9C]">
              Dermatology-Led Aesthetic Care
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
