import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => {
  return (
    <div className="w-full bg-[#FFF8EF] pt-10 pb-20 px-4 md:px-8 lg:px-12 ">

      

      

      

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
