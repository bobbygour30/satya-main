import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#2B333C] relative overflow-hidden py-16 md:py-20 px-6 flex items-center justify-center">
      
      {/* Decorative curved-line pattern – using warm tertiary light */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0 200 C400 350 900 50 1440 200"
            stroke="#DFDFDD"
            strokeWidth="1.2"
          />
          <path
            d="M0 500 C450 650 900 350 1440 500"
            stroke="#DFDFDD"
            strokeWidth="1.1"
          />
          <path
            d="M0 350 C450 500 950 150 1440 350"
            stroke="#DFDFDD"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl text-center mx-auto">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          We will never over
          treat you
        </h2>

        {/* Subtitle */}
        <p className="text-[#DFDFDD] mt-5 text-base md:text-lg leading-relaxed">
          Trusted by 2,000+ employers to deliver more affordable, personalized, and
          validated care—for everyone.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex gap-4 justify-center flex-wrap">
          <button className="px-6 py-3 bg-gradient-to-r from-[#9E4A47] to-[#84332F] hover:opacity-90 text-white font-medium rounded-lg transition shadow-lg">
            Book an appointment
          </button>

          <button className="px-6 py-3 bg-[#FFF8EF] hover:bg-[#FCEBDE] text-[#2B333C] font-medium rounded-lg transition shadow-md">
            Check eligibility
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;