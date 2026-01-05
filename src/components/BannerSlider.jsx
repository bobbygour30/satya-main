import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import assets from "../assets/assets"

/* ================= HERO SLIDES ================= */
const slides = [
  {
    image:
      assets.banner1,
    headline: "Where Truth Meets Transformation",
    subtext:
      "At Satya, we don’t sell dreams — we restore them. Every result here is built on ethics, artistry, and medical science that stands the test of time.",
    cta: "Find My Treatment",
  },
  {
    image:
      assets.banner2,
    headline: "Reclaim What You Thought You Lost",
    subtext:
      "From thinning crowns to receding hairlines — we restore your confidence with techniques that preserve your donor, your health, and your natural identity.",
    cta: "Explore Hair Restoration",
  },
  {
    image:
      assets.banner3,
    headline: "We Fix What Others Couldn’t",
    subtext:
      "Thousands come to Satya after failed or unnatural procedures. Our world-recognized repair expertise revives damaged donors, uneven hairlines, and lost trust.",
    cta: "See Real Repair Cases",
  },
  {
    image:
      assets.banner4,
    headline: "Skin That Reflects the Best of You",
    subtext:
      "Erase years of dullness, acne scars, and pigmentation with dermatologist-led solutions — designed for glow that feels natural, not forced.",
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
              <div className="max-w-3xl text-center text-[#FFF8EF]">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FFF8EF]/90 hover:bg-[#FFF8EF] p-2 rounded-full text-[#2B333C]"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FFF8EF]/90 hover:bg-[#FFF8EF] p-2 rounded-full text-[#2B333C]"
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
