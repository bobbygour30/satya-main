"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import assets from "../assets/assets";

export default function FaceLoveForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    care: "",
    name: "",
    phone: "",
  });

  const next = () => setStep((s) => s + 1);

  return (
    <section className="w-full bg-[#FFF8EF] py-14 px-4">
      <div className="max-w-6xl mx-auto">

        <AnimatePresence mode="wait">
          {/* STEP CONTAINER */}
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white border border-[#FCEBDE] rounded-[32px] overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2"
          >
            {/* LEFT IMAGE */}
            <div className="relative h-[280px] md:h-auto">
              <img
                src={assets.form}
                alt="Clinic"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative p-8 md:p-14 flex flex-col justify-center">

            

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <h2 className="text-3xl md:text-4xl font-light text-[#2B333C] mb-6">
                    What brings you here today?
                  </h2>

                  <div className="space-y-3 text-sm text-[#2B333C]">
                    {[
                      "Skin Concerns",
                      "Hair Concerns",
                    ].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setFormData({ ...formData, care: option });
                          next();
                        }}
                        className="w-full text-left px-5 py-3 rounded-lg border border-[#FCEBDE] bg-[#FFF8EF] hover:border-[#9E4A47] transition"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <h2 className="text-3xl md:text-4xl font-light text-[#2B333C] mb-6">
                    What’s your name?
                  </h2>

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#FFF8EF] border border-[#FCEBDE] rounded-lg px-5 py-4 text-sm outline-none focus:border-[#9E4A47]"
                  />

                  <button
                    onClick={next}
                    className="mt-6 w-fit bg-[#2B333C] text-white px-6 py-3 rounded-full text-sm hover:opacity-90"
                  >
                    Continue →
                  </button>
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <>
                  <h2 className="text-3xl md:text-4xl font-light text-[#2B333C] mb-6">
                    Hi {formData.name || "there"}, do you have a phone number?
                  </h2>

                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#FFF8EF] border border-[#FCEBDE] rounded-lg px-5 py-4 text-sm outline-none focus:border-[#9E4A47]"
                  />

                  <button
                    className="mt-6 w-fit bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white px-8 py-3 rounded-full text-sm shadow-lg hover:opacity-90"
                  >
                    Submit
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
