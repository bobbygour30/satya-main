import { useEffect, useRef } from "react";
import assets from "../assets/assets";

const LOGOS = [
  {
    image: assets.logo1,
    name: "ISHRS",
    full: "International Society of Hair Restoration Surgery",
    hover:
      "Proud member of ISHRS, the global authority advancing excellence and ethics in hair restoration surgery.",
  },
  {
    image: assets.logo2,
    name: "IAHRS",
    full: "International Alliance of Hair Restoration Surgeons",
    hover:
      "Recognized by IAHRS, an elite association representing the world’s top hair restoration surgeons.",
  },
  {
    image: assets.logo3,
    name: "ACSI",
    full: "Association of Cutaneous Surgeons of India",
    hover:
      "Affiliated with ACSI, India’s leading body for advanced dermatosurgery and aesthetic procedures.",
  },
  {
    image: assets.logo4,
    name: "AAAM",
    full: "American Academy of Aesthetic Medicine",
    hover:
      "Certified by AAAM for advanced aesthetic, cosmetic, and anti-aging medical practices.",
  },
  {
    image: assets.logo5,
    name: "IADVL",
    full: "Indian Association of Dermatologists, Venereologists & Leprologists",
    hover:
      "Registered member of IADVL, ensuring ethical, scientific, and clinically proven dermatological care.",
  },
];

export default function LogoSlider() {
  const trackRef = useRef(null);

  // subtle infinite scroll
  useEffect(() => {
    const track = trackRef.current;
    let start = 0;

    const animate = () => {
      start -= 0.3;
      if (Math.abs(start) >= track.scrollWidth / 2) {
        start = 0;
      }
      track.style.transform = `translateX(${start}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="w-full bg-[#FFF8EF] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP TAGLINE */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-[#828D9C] mb-3">
            Our Legacy
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2B333C] max-w-3xl mx-auto">
            “Our legacy is written not in words, but in results.”
          </h2>
        </div>

        {/* LOGO STRIPE */}
        <div className="relative">
          {/* FADES */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#FFF8EF] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#FFF8EF] to-transparent z-10" />

          <div className="overflow-hidden">
            <div ref={trackRef} className="flex gap-8 w-max py-6">
              {[...LOGOS, ...LOGOS].map((logo, index) => (
                <LogoItem key={index} {...logo} />
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="text-center mt-14">
          <p className="text-sm md:text-base text-[#828D9C] max-w-3xl mx-auto">
            “Our work meets the global standards of artistry, ethics, and
            scientific excellence.”
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= SINGLE LOGO ================= */
function LogoItem({ image, name, full, hover }) {
  return (
    <div className="group relative min-w-[260px] sm:min-w-[300px] bg-[#FCEBDE] border border-[#DFDFDD] rounded-2xl px-6 py-6 text-center transition hover:border-[#9E4A47]">
      {/* IMAGE LOGO */}
      <div className="h-20 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-[190px] object-contain"
        />
      </div>

      {/* FULL NAME */}
      <div className="text-xs text-[#828D9C] leading-snug">
        {full}
      </div>

      {/* HOVER OVERLAY */}
      <div className="absolute inset-0 bg-[#9E4A47] text-[#FFF8EF] rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-sm leading-relaxed text-center">
        {hover}
      </div>
    </div>
  );
}
