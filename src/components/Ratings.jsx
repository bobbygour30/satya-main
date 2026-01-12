import { useEffect, useRef, useState } from "react";

export default function Ratings() {
  return (
    <section className="w-full bg-[#FFF8EF] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ================= TRUSTED BY ================= */}
        <div className="rounded-3xl bg-[#FCEBDE] border border-[#DFDFDD] px-6 md:px-12 py-14">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-[#828D9C] mb-3">
              Trusted By
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#2B333C]">
              Patients Across the Globe
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
            <Stat value="65000+" label="Procedures Successfully Performed" />
            <Divider />
            <Stat value="46+" label="Years of Combined Experience" />
            <Divider />
            <Stat value="44+" label="Countries Served Worldwide" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TRUST STAT ================= */
function Stat({ value, label }) {
  const statRef = useRef(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract number & suffix
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    if (statRef.current) observer.observe(statRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const duration = 1600;
    const increment = Math.ceil(numericValue / (duration / 16));

    const counter = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);
  };

  return (
    <div ref={statRef} className="text-center max-w-[220px]">
      <p className="text-3xl sm:text-4xl font-bold text-[#9E4A47]">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm text-[#828D9C] mt-2 leading-relaxed">
        {label}
      </p>
    </div>
  );
}

/* ================= DIVIDER ================= */
function Divider() {
  return (
    <div className="hidden sm:block h-12 w-px bg-[#DFDFDD]" />
  );
}
