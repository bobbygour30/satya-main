import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import assets from "../assets/assets";

/* ================= HERO SLIDES ================= */
const slides = [
  {
    image: assets.banner3,
    headline: "WE CARE ABOUT YOUR SKIN & HAIR",
    subtext:
      "Every treatment at Satya is clinically proven, ethically practiced, and designed to deliver natural, long-lasting results you can trust.",
    cta: "BOOK APPOINTMENT",
  },
  {
    image: assets.banner4,
    headline: "AWARD-WINNING MEDICAL EXCELLENCE",
    subtext:
      "Advanced techniques, medical precision, and patient-first care trusted by thousands across India.",
    cta: "EXPLORE TREATMENTS",
  },
  {
    image: assets.banner2,
    headline: "YOU’RE BEAUTIFUL. WE JUST ENHANCE IT.",
    subtext:
      "We enhance what’s already yours — restoring balance, confidence, and authenticity without overcorrection.",
    cta: "VIEW REAL RESULTS",
  },
];

/* ================= HERO COMPONENT ================= */
export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full bg-[#FFF8EF] overflow-hidden">
      {/* ================= SLIDES ================= */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 min-h-[90vh] flex items-center"
          >
            <div className=" px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* ===== LEFT CONTENT ===== */}
              <div>
                <h1 className="text-4xl md:text-6xl font-semibold text-[#2B333C] leading-tight mb-6">
                  {slide.headline}
                </h1>

                <p className="text-[#828D9C] text-base md:text-lg max-w-lg mb-10">
                  {slide.subtext}
                </p>

                <button className="inline-flex items-center gap-3 bg-[#2B333C] hover:bg-[#9E4A47] transition px-7 py-3 rounded-full text-white font-medium">
                  {slide.cta}
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {/* ===== RIGHT IMAGE ===== */}
              <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= NAVIGATION ================= */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-3 rounded-full text-[#2B333C]"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-3 rounded-full text-[#2B333C]"
      >
        <ChevronRight />
      </button>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              current === index
                ? "bg-[#9E4A47] scale-125"
                : "bg-[#DFDFDD]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
