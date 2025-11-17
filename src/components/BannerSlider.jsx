import React, { useEffect, useState } from "react";

const BannerSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
    "https://images.unsplash.com/photo-1511895426328-dc8714191300",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] md:h-[85vh] overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out 
          ${index === current ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay – slightly lighter to work with warm theme */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-2xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Evidence-based women’s and family{" "}
          <span className="italic font-light text-[#FFF8EF]">healthcare</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl font-light text-[#DFDFDD]">
          Expert care across every life stage.
        </p>

        <div className="mt-8 flex gap-4">
          {/* Primary Button - Gradient */}
          <button className="px-6 py-3 bg-gradient-to-r from-[#9E4A47] to-[#84332F] hover:opacity-90 transition rounded-lg font-medium text-white shadow-lg">
            Explore platform
          </button>

          {/* Secondary Button - Warm border + hover */}
          <button className="px-6 py-3 border-2 border-[#B87C72] text-white hover:bg-[#FFF8EF]/20 hover:border-[#FFF8EF] hover:text-[#FFF8EF] transition rounded-lg font-medium backdrop-blur-sm">
            Get care
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;