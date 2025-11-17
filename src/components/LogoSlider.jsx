import React from "react";

/**
 * LogoSliderOptimized
 * - Provide an array of image URLs in `logos`.
 * - The component duplicates the array once (so total = 2 copies).
 * - Add the provided CSS to your global stylesheet (see below).
 */
const LogoSlider = ({ logos = [] }) => {
  if (!logos || logos.length === 0) return null;

  // Duplicate only once — CSS handles seamless loop
  const logosDup = [...logos, ...logos];

  return (
    <div className="w-full py-10 bg-[#FFF8EF]  border-t border-b border-[#FCEBDE]">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        
        {/* Optional subtle edge fade – using warm tertiary light */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFF8EF] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFF8EF] to-transparent z-10 pointer-events-none"></div>

        <div className="logo-slider">
          <div className="logo-track" aria-hidden="true">
            {logosDup.map((src, i) => (
              <div
                key={i}
                className="logo-item flex-shrink-0 mx-8 md:mx-12"
                role="presentation"
              >
                <img
                  src={src}
                  alt={`partner-logo-${i}`}
                  className="logo-img h-10 md:h-14 lg:h-20 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional centered label */}
      <div className="text-center mt-6">
        <p className="text-[#828D9C] text-sm md:text-base tracking-wider uppercase font-medium">
          Trusted by leading organizations worldwide
        </p>
      </div>
    </div>
  );
};

export default LogoSlider;