import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => {
  return (
    <section className="w-full bg-[#2B333C] relative overflow-hidden py-7 px-6">
      
      {/* ================= DECORATIVE SVG BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path d="M0 200 C400 350 900 50 1440 200" stroke="#DFDFDD" strokeWidth="1.2" />
          <path d="M0 500 C450 650 900 350 1440 500" stroke="#DFDFDD" strokeWidth="1.1" />
          <path d="M0 350 C450 500 950 150 1440 350" stroke="#DFDFDD" strokeWidth="0.8" />
        </svg>
      </div>

      {/* ================= HERO CONTENT (NOT REMOVED) ================= */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-24">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          We will never over treat you
        </h2>

        <p className="text-[#DFDFDD] mt-5 text-base md:text-lg leading-relaxed">
          Trusted by thousands of patients to deliver ethical, medically validated,
          and personalized skin & hair care.
        </p>

        <div className="mt-7 flex gap-4 justify-center flex-wrap">
          <button className="px-6 py-3 bg-gradient-to-r from-[#9E4A47] to-[#84332F] hover:opacity-90 text-white font-medium rounded-lg transition shadow-lg">
            Book an appointment
          </button>

          <button className="px-6 py-3 bg-[#FFF8EF] hover:bg-[#FCEBDE] text-[#2B333C] font-medium rounded-lg transition shadow-md">
            Check eligibility
          </button>
        </div>
      </div>

      {/* ================= SERVICES + EVOLUTION CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto bg-[#FFF8EF] rounded-3xl px-6 md:px-10 py-20">

        {/* PHILOSOPHY HEADER */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
          <p className="text-[#B87C72] text-sm font-medium tracking-wider">
            SATYA PHILOSOPHY
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] mt-1">
            WHAT WE DO?
          </h2>
          <p className="text-[#828D9C] mt-3 max-w-xl leading-relaxed">
            We Do with Science, Artistry and Trust.
          </p>
        </motion.div>

        {/* PHILOSOPHY CARDS – updated content only */}
        <div className="grid md:grid-cols-4 gap-5">
          {[
            {
              no: "/1",
              title: "Hair Concerns",
              desc:
                "Androgenetic Alopecia, Female Pattern Hair Loss, Excessive Hair Fall, DHT-Related Hair Loss, Diffuse Hair Thinning, Early Baldness, Genetic Hair Loss, Stress-Induced Hair Loss.",
              bg: "bg-white",
              text: "text-[#2B333C]",
            },
            {
              no: "/2",
              title: "Hair Treatment",
              desc:
                "FUE Hair Transplant, Hairline Reconstruction, Beard Hair Transplant, Moustache Hair Transplant, Eyebrow Reconstruction, Afro Hair Transplant, Body Hair Transplant, Hair Transplant Repair.",
              bg: "bg-[#2B333C] text-white",
              text: "text-white",
            },
            {
              no: "/3",
              title: "Skin Concerns",
              desc:
                "Acne Scar, Fungal Infection,Aging, Fine lines/wrinkles, Under eye darkening/hollows, Laugh lines, Thin lips, Neck lines, Sagging, Uneven skin tone, Patchy skin, Sensitive skin, Rosacea, Acne, Acne scars, Dull skin, Open pores.",
              bg: "bg-white",
              text: "text-[#2B333C]",
            },
             {
              no: "/4",
              title: "Skin Treatment",
              desc:
                "Laser Hair Reduction, Chemical Peel, Mole removal, Laser Toning Treatment, Fractional CO2 Laser, HIFU treatment, MNRF treatment, Botox, Carbon laser facial, Dermapen 4, Anti Wrinkle Treatment.",
              bg: "bg-gradient-to-br from-[#9E4A47] to-[#84332F] text-white",
              text: "text-white",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`${item.bg} rounded-xl p-6 space-y-3 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.03]`}
            >
              <span className="text-2xl opacity-50 font-semibold">{item.no}</span>
              <h3 className={`text-xl font-semibold ${item.text}`}>
                {item.title}
              </h3>
              <p className="text-sm text-[#828D9C]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* IMAGE PHILOSOPHY CARD – kept as-is (you can replace src later if needed) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 rounded-xl overflow-hidden relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Satya Philosophy"
            className="w-full h-72 object-cover"
          />
         <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
  VIEW OUR PHILOSOPHY
</button>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;