"use client";
import assets from "../assets/assets";

const doctors = [
  {
    name: "Dr. Shail Gupta",
    image: assets.drShailGupta,
    description:
      "Dr. Shail Gupta is a leading OB-GYN and fertility specialist with over 15 years of experience supporting families through conception and beyond.",
  },
  {
    name: "Dr. Ruchi Agarwal",
    image: assets.drRuchiAgarwal,
    description:
      "Dr. Ruchi Agarwal specializes in high-risk pregnancy and maternal-fetal medicine, delivering compassionate, evidence-based care.",
  },
];

export default function Team() {
  return (
    <section className="w-full bg-[#FFF8EF] py-16 px-6 md:px-20">
      <div className="max-w-[1500px] mx-auto">
        {/* TOP TEXT */}
        <p className="text-[#B87C72] uppercase tracking-[3px] text-sm font-medium mb-2">
          Who we are
        </p>

        <div className="flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C]">
            Our Care Team
          </h2>
        </div>

        <p className="text-[#828D9C] max-w-3xl leading-relaxed mt-3 mb-10 md:mb-12">
          Meet the experts behind Satya Skin & Hair Solutions, a trusted team of dermatologists and hair restoration specialists delivering personalized, high-quality skin and hair care with honesty, precision, and proven results
        </p>

        {/* DOCTORS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-2xl shadow-lg border border-[#FCEBDE] overflow-hidden flex flex-col lg:flex-row min-h-[380px] lg:min-h-[420px] hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image container with intrinsic aspect ratio */}
              <div className="relative w-full lg:w-3/5 aspect-[4/5] lg:aspect-auto overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Text content */}
              <div className="p-7 sm:p-8 lg:p-10 flex flex-col justify-center lg:w-2/5">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#2B333C] mb-4 sm:mb-5">
                  {doctor.name}
                </h3>
                <p className="text-[#828D9C] leading-relaxed text-base sm:text-[1.05rem]">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}