import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/* ---------- EMAILJS CONFIG ---------- */
const EMAILJS_SERVICE_ID = "service_s1wuxko";
const EMAILJS_TEMPLATE_ID = "template_piotf2h";
const EMAILJS_PUBLIC_KEY = "jvQvxfc2D2VG7cqSp";
/* ------------------------------------ */

const HairTreatmentGradientBanner = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      formRef.current.reset();
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#FCEBDE] py-12 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0E3A43] leading-snug">
            Advanced Hair Treatment Services at Satya Skin & Hair Solutions
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            We provide extensive and scientifically designed hair treatment
            solutions for all stages of hair loss under expert supervision.
          </p>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Services include FUT, FUE, Corrective & Long Hair Transplants,
            Beard & Eyebrow Restoration, PRP, GFC Treatment, DHT management,
            and customized hair fall therapies.
          </p>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Each patient undergoes detailed scalp diagnosis to determine
            genetic, hormonal, stress-related, or post-transplant causes.
          </p>

          <p className="text-[#9E4A47] text-sm sm:text-base font-semibold">
            Ethical, personalized, and medically sound solutions designed
            for lasting confidence.
          </p>

        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-[#f3d6c8]">

          <h3 className="text-lg sm:text-xl font-semibold text-[#0E3A43] mb-5 text-center">
            Contact Us
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-3 py-3 rounded-md border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-[#9E4A47]
                         text-sm transition"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Contact Number"
              className="w-full px-3 py-3 rounded-md border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-[#9E4A47]
                         text-sm transition"
            />

            {/* Hidden message field */}
            <input
              type="hidden"
              name="message"
              value="Hair Treatment Banner Enquiry"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md text-sm font-medium transition-all duration-300
                ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-[#9E4A47] hover:bg-[#84332F] text-white shadow-md hover:shadow-lg"
                }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-xs text-center mt-2">
                Thank you! We will contact you within 24 hours.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-xs text-center mt-2">
                Something went wrong. Please try again.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default HairTreatmentGradientBanner;
