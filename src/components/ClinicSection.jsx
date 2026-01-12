import React, { useEffect, useState } from "react";
import assets from "../assets/assets";

/* ================= IMAGE SETS ================= */
const LEFT_IMAGES = [
  assets.gurgao1,
  assets.gurgao2,
  assets.gurgao3,
];

const RIGHT_IMAGES = [
  assets.delhi1,
  assets.delhi2,
  assets.delhi3,
];

/* ================= SLIDER HOOK ================= */
function useAutoSlider(images, delay = 3500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [images.length, delay]);

  return index;
}

export default function ClinicSection() {
  const leftIndex = useAutoSlider(LEFT_IMAGES, 3600);
  const rightIndex = useAutoSlider(RIGHT_IMAGES, 4200);

  return (
    <section className="w-full bg-[#FFF8EF] py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP TEXT ================= */}
        <p className="text-[#B87C72] uppercase tracking-[3px] text-sm font-medium mb-2">
          Where
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] mb-4">
          Our Care Network
        </h2>

        <p className="text-[#828D9C] max-w-3xl leading-relaxed mb-10">
          Maven partners with thousands of top-rated providers worldwide to deliver
          virtual and in-person care that’s personalized, evidence-based, and built
          around you.
        </p>

        {/* ================= SLIDER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ================= LEFT SLIDER ================= */}
          <div className="relative rounded-xl overflow-hidden h-[280px] md:h-[330px] group shadow-lg">
            {LEFT_IMAGES.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Clinic environment"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                  ${i === leftIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}
                `}
              />
            ))}

            
          </div>

          {/* ================= RIGHT SLIDER ================= */}
          <div className="relative rounded-xl overflow-hidden h-[280px] md:h-[330px] group shadow-lg">

            {RIGHT_IMAGES.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Doctor consultation"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                  ${i === rightIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}
                `}
              />
            ))}

            

          
          </div>

        </div>
      </div>
    </section>
  );
}
