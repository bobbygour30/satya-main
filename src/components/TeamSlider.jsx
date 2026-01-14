"use client";
import assets from "../assets/assets";

const doctors = [
  {
    name: "Dr. Shail Gupta",
    role: "Founder & Hair Transplant Specialist",
    image: assets.drShailGupta,
    description:
      "Dr. Shail Gupta is a board certified dermatologist and an esteemed hair transplant expert, as well as the founder of Satya Skin & Hair Solutions. His approach to treatment is deeply holistic, focusing not only on physical results but also on emotional well-being. Beyond clinical practice, Dr. Gupta actively educates and advocates for skin and hair health through social platforms, reaching and inspiring a global audience. A multifaceted personality—musician, artist, writer, composer, sportsman, and subconscious healer he motivates patients and society alike, establishing himself as a respected global authority in dermatology and hair restoration.",
  },
  {
    name: "Dr. Ruchi Agarwal",
    role: "Co-Founder & Consultant Dermatologist",
    image: assets.drRuchiAgarwal,
    description:
      "Dr. Ruchi Agarwal is a board certified dermatologist and co-founder of Satya Skin & Hair Solutions, bringing over 20 years of experience in clinical and cosmetic dermatology. She specializes in dermato-surgical and advanced aesthetic procedures, supported by world class training. Known for her empathetic, patient-first approach, Dr. Ruchi emphasizes attentive listening and personalized treatment planning ensuring every patient feels heard, understood, and confidently guided.",
  },
];

export default function Team() {
  return (
    <section className="w-full bg-[#FFF8EF] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-[#B87C72] uppercase tracking-[3px] text-sm font-medium mb-2">
          Who we are
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C] mb-4">
          Our Care Team
        </h2>

        <p className="text-[#828D9C] max-w-3xl leading-relaxed mb-16">
          Meet the experts behind Satya Skin & Hair Solutions, a trusted team of dermatologists and hair restoration specialists delivering personalized, high quality skin and hair care with honesty, precision, and proven results.
        </p>

        {/* Doctors */}
        <div className="space-y-20">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } gap-10 lg:gap-14 items-start`}
            >
              {/* IMAGE */}
              <div className="w-full lg:w-[38%]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-auto block rounded-2xl shadow-md"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full lg:w-[62%]">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#2B333C] mb-2">
                  {doctor.name}
                </h3>

                <p className="text-[#9E4A47] font-medium mb-5">
                  {doctor.role}
                </p>

                <div className="w-16 h-[2px] bg-[#9E4A47] mb-6" />

                <p className="text-[#828D9C] leading-relaxed text-[1.05rem] max-w-none">
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
