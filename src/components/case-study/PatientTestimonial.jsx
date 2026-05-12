import React from "react";

const PatientTestimonial = () => {
  return (
    <section className="w-full bg-[#C76F4A] overflow-hidden">
      <div className="relative max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-28">
        
        {/* Decorative Quotes */}
        <div className="absolute top-0 left-4 md:left-8 opacity-[0.08] pointer-events-none select-none">
          <span className="font-serif text-[220px] leading-none text-[#F6ECDD]">
            “
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.8fr] gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="relative z-10 pt-10 lg:pt-16">
            <blockquote className="font-serif italic text-[#FFF6EE] text-[34px] md:text-[46px] lg:text-[58px] leading-[1.28] tracking-[-0.03em] max-w-[1180px]">
              "I had lost hope before coming to Satya. What they did in
              28 months, no one else could in years. I look in the mirror
              now and feel like myself again — younger, confident, whole."
            </blockquote>
          </div>

          {/* Right Profile */}
          <div className="flex flex-col items-center lg:items-end">
            
            {/* Circle */}
            <div className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-[#8E5439] border border-white/10 flex items-center justify-center relative">
              
              <div className="flex flex-col items-center opacity-30">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-[#F6ECDD]"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>

                <span className="mt-3 text-[10px] tracking-[0.28em] uppercase text-[#F6ECDD]">
                  Patient Photo
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="mt-8 text-center lg:text-left w-full max-w-[360px]">
              <h3 className="font-serif text-[42px] leading-none text-[#FFF6EE]">
                Lokesh
              </h3>

              <p className="mt-3 text-[11px] tracking-[0.22em] uppercase text-[#F5D7C6]">
                34 YRS · DELHI NCR · HAIR RESTORATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonial;