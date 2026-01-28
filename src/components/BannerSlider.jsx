import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import assets from "../assets/assets";

/* ================= HERO SLIDES ================= */
const slides = [
  {
    desktopImage: assets.banner3Desktop,
    mobileImage: assets.banner3Mobile,
    headline: "WE CARE ABOUT YOUR SKIN & HAIR",
    subtext:
      "Every treatment at Satya is clinically proven, ethically practiced, and designed to deliver natural, long-lasting results you can trust.",
    cta: "BOOK APPOINTMENT",
  },
  {
    desktopImage: assets.banner4Desktop,
    mobileImage: assets.banner4Mobile,
    headline: "AWARD-WINNING MEDICAL EXCELLENCE",
    subtext:
      "Advanced techniques, medical precision, and patient-first care trusted by thousands across India.",
    cta: "EXPLORE TREATMENTS",
  },
  {
    desktopImage: assets.banner2Desktop,
    mobileImage: assets.banner2Mobile,
    headline: "YOU’RE BEAUTIFUL. WE JUST ENHANCE IT.",
    subtext:
      "We enhance what’s already yours — restoring balance, confidence, and authenticity without overcorrection.",
    cta: "VIEW REAL RESULTS",
  },
  {
  desktopImage: assets.banner1Desktop,
  mobileImage: assets.banner1Mobile,
  headline: "HAIR BHI, HEALTH BHI™ RESULTS THAT LOOK NATURAL & LAST LONGER",
  subtext:
    "Our science-led hair treatments focus on long-term scalp health while delivering visible, natural-looking results you can feel confident about.",
  cta: "VIEW REAL RESULTS",
},

];

/* ================= BANNER SLIDER ================= */
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
    <section className="relative w-full overflow-hidden">
      {/* ================= SLIDES ================= */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full flex-shrink-0 md:min-h-[90vh]"
          >
            {/* ================= DESKTOP BACKGROUND ================= */}
            <div
              className="hidden md:block absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.desktopImage})` }}
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* ================= DESKTOP CONTENT ================= */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 hidden md:block">
              <div className="grid grid-cols-2 items-center min-h-[90vh]">
                <div>
                  <h1 className="text-4xl font-semibold leading-tight mb-6 text-white">
                    {slide.headline}
                  </h1>

                  <p className="text-lg max-w-lg mb-10 text-white/90">
                    {slide.subtext}
                  </p>

                  <button className="inline-flex items-center gap-3 bg-[#9E4A47] hover:bg-[#84332F] transition px-7 py-3 rounded-full text-white font-medium">
                    {slide.cta}
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* ================= MOBILE IMAGE + CONTENT OVERLAY ================= */}
            <div className="md:hidden relative w-full aspect-[3/4]">
              {/* Image */}
              <img
                src={slide.mobileImage}
                alt={slide.headline}
                className="absolute inset-0 w-full h-full object-cover object-bottom"
              />

              {/* Gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Mobile Content */}
              <div className="absolute inset-0 z-10 flex flex-col  px-6 pb-10 mt-10">
                <h1 className="text-3xl font-semibold leading-tight mb-4 text-white">
                  {slide.headline}
                </h1>

                <p className="text-sm mb-6 text-white/90">
                  {slide.subtext}
                </p>

                <button className="inline-flex w-fit items-center gap-3 bg-[#9E4A47] hover:bg-[#84332F] transition px-6 py-3 rounded-full text-white font-medium">
                  {slide.cta}
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= NAVIGATION ================= */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow sm:p-3 p-1 rounded-full text-[#2B333C] z-20"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow sm:p-3 p-1  rounded-full text-[#2B333C] z-20"
      >
        <ChevronRight />
      </button>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
