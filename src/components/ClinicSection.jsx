import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
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

/* ================= STAR RATING ================= */
function StarRating({ rating }) {
  const percentage = (rating / 5) * 100;

  return (
    <div className="flex items-center justify-center gap-3 mt-1">

      {/* Google Icon */}
      <FcGoogle className="text-lg" />

      {/* Stars */}
      <div className="relative text-[18px] leading-none">
        {/* Empty Stars */}
        <div className="text-[#E5E7EB] tracking-[1px]">★★★★★</div>

        {/* Filled Stars */}
        <div
          className="absolute inset-0 overflow-hidden text-[#F5B301] tracking-[1px]"
          style={{ width: `${percentage}%` }}
        >
          ★★★★★
        </div>
      </div>

      {/* Numeric Rating */}
      <span className="text-sm font-medium text-[#2B333C]">
        {rating}
      </span>
    </div>
  );
}

export default function ClinicSection() {
  const leftIndex = useAutoSlider(LEFT_IMAGES, 3600);
  const rightIndex = useAutoSlider(RIGHT_IMAGES, 4200);

  return (
    <section className="w-full bg-[#FFF8EF] py-14 px-6 md:px-20">
      <div className="">

        {/* ================= TOP TEXT ================= */}
        <p className="text-[#B87C72] uppercase tracking-[3px] text-sm font-medium mb-2">
          Where
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] mb-4">
          Our Advanced Care Centre
        </h2>

        <p className="text-[#828D9C] max-w-3xl leading-relaxed mb-10">
          Our clinics in Gurugram and Delhi combine advanced medical technology
          with expert care, delivering safe, ethical, and world class skin and
          hair treatments in premium clinical settings.
        </p>

        {/* ================= SLIDER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ================= GURUGRAM ================= */}
          <div>
            <div className="relative rounded-xl overflow-hidden h-[280px] md:h-[470px] shadow-lg">
              {LEFT_IMAGES.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Gurugram Clinic"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                    ${i === leftIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}
                  `}
                />
              ))}
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-[#2B333C]">
                Gurugram
              </h3>
              <StarRating rating={4.8} />
            </div>
          </div>

          {/* ================= DELHI ================= */}
          <div>
            <div className="relative rounded-xl overflow-hidden h-[280px] md:h-[470px] shadow-lg">
              {RIGHT_IMAGES.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Delhi Clinic"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                    ${i === rightIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}
                  `}
                />
              ))}
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-[#2B333C]">
                Delhi
              </h3>
              <StarRating rating={4.6} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
