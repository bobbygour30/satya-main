import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import assets from "../assets/assets"

/* ================= HERO SLIDES ================= */
const slides = [
  {
    image: assets.banner3,
    headline: "Clinically Proven Skin & Hair Treatments",
    subtext:
      "Every treatment at Satya is backed by clinical evidence, medical precision, and ethical practice — delivering results that are safe, natural, and scientifically validated.",
    cta: "Find My Treatment",
  },
  {
    image: assets.banner4,
    headline: "Award-Winning Excellence in Hair and Skin Restoration",
    subtext:
      "Recognized for consistently delivering natural outcomes through advanced techniques, meticulous planning, and patient-first medical standards.",
    cta: "Explore Hair Restoration",
  },
  {
    image: assets.banner2,
    headline: "You're Beautiful we just make you Realize it.",
    subtext:
      "Our approach enhances what’s already yours — restoring balance, proportion, and confidence without overcorrection or artificial results.",
    cta: "See Real Repair Cases",
  },
  {
    image: assets.banner1,
    headline: "Hair Bhi. Health Bhi. Results That Look Natural & Last Longer.",
    subtext:
      "We treat hair as part of your overall health — combining dermatology, nutrition, and long-term planning for results that grow stronger with time.",
    cta: "Discover Skin Treatments",
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
    <section className="relative w-full overflow-hidden bg-[#FFF8EF]">
      {/* ================= SLIDES ================= */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[90vh] relative"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#2B333C]/60" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="text-center text-[#FFF8EF]">
                <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
                  {slide.headline}
                </h1>
                <p className="text-sm md:text-lg text-[#DFDFDD] mb-8">
                  {slide.subtext}
                </p>

                <button className="bg-[#9E4A47] hover:bg-[#B87C72] transition px-8 py-3 rounded-full font-medium text-white">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= NAVIGATION ================= */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-2/3 sm:top-1/2 -translate-y-2/3 sm:-translate-y-1/2 bg-[#FFF8EF]/90 hover:bg-[#FFF8EF] p-2 rounded-full text-[#2B333C]"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-2/3 sm:top-1/2 -translate-y-2/3 sm:-translate-y-1/2 bg-[#FFF8EF]/90 hover:bg-[#FFF8EF] p-2 rounded-full text-[#2B333C]"
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
                : "bg-[#DFDFDD]/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
