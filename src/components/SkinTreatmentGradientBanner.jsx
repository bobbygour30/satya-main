import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/* ---------- EMAILJS CONFIG ---------- */
const EMAILJS_SERVICE_ID = "service_s1wuxko";
const EMAILJS_TEMPLATE_ID = "template_piotf2h";
const EMAILJS_PUBLIC_KEY = "jvQvxfc2D2VG7cqSp";
/* ------------------------------------ */

const SkinTreatmentGradientBanner = () => {
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
    <section
      className="
      w-full 
      bg-gradient-to-br 
      from-[#3b1614] 
      via-[#5c2623] 
      to-[#9E4A47] 
      py-12 md:py-20 
      px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-5 text-[#F5EDEB]">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug">
            Advanced Skin Treatments at Satya Skin & Hair Solutions
          </h2>

          <p className="text-sm sm:text-base leading-relaxed">
            We provide comprehensive skin solutions under the guidance of experienced doctors, helping you achieve healthy, clear, and youthful skin.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            From acne treatment, pigmentation correction, chemical peeling, laser skin rejuvenation, anti-aging treatments, Botox, fillers, and medi-facials — every treatment is customized after a thorough skin analysis.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            Our board-certified dermatologists focus on treating the cause, not just the symptoms. Whether it’s acne scars, uneven tone, dullness, open pores, or premature aging, we combine science-driven protocols with advanced technology for safe, natural-looking outcomes.
          </p>

          <p className="text-white text-sm sm:text-base font-medium">
            Book your personalized skin consultation today and take the first step towards healthy and confident skin.
          </p>

        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="
            bg-gradient-to-br 
            from-[#fdfaf5] 
            via-[#fffefb] 
            to-white 
            rounded-2xl 
            shadow-2xl 
            p-6 sm:p-8 
            border border-white/20"
        >

          <h3 className="text-lg sm:text-xl font-semibold text-[#0E3A43] mb-5 text-center">
            Book Skin Consultation
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-3 py-2.5 rounded-md border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-[#9E4A47]
                         text-sm"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Contact Number"
              className="w-full px-3 py-2.5 rounded-md border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-[#9E4A47]
                         text-sm"
            />

            {/* Hidden field for template differentiation */}
            <input
              type="hidden"
              name="message"
              value="Skin Treatment Banner Enquiry"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2.5 rounded-md text-sm font-medium transition-all duration-300
                ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-[#9E4A47] hover:bg-[#843532] text-white"
                }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-xs text-center mt-2">
                Thank you! Our team will contact you within 24 hours.
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

export default SkinTreatmentGradientBanner;
