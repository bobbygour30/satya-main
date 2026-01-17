import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import assets from "../assets/assets"; // adjust path if needed

export default function Shubham() {
  const [index, setIndex] = useState(0);
  const images = [assets.shubham4, assets.shubham3]; // Before & After toggle (update these assets if needed)

  useEffect(() => {
    document.title =
      "Shubham’s Corrective Hair Transplant – The Science Behind Real, Sustainable Results | Satya Skin & Hair";
  }, []);

  return (
    <div className="bg-[#FFF8EF] text-[#2B333C] min-h-screen">
      {/* HERO – Smaller & better centered */}
      <section className="">
        <div className="grid lg:grid-cols-2 min-h-[480px] md:min-h-[540px] lg:min-h-[580px] xl:min-h-[640px]">
          {/* IMAGE SIDE */}
          <div className="relative bg-black">
            <img
              src={images[index]}
              alt={`${index === 0 ? "Before" : "After"} Corrective Hair Transplant – Shubham`}
              className="w-full h-full object-cover"
            />

            {/* BEFORE / AFTER CONTROLS – centered & slightly smaller */}
            <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-10">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full px-3 sm:px-4 py-2 sm:py-2.5">
                <button
                  onClick={() => setIndex(0)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/25 transition"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex bg-white/35 rounded-full overflow-hidden">
                  <button
                    onClick={() => setIndex(0)}
                    className={`px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-medium transition ${
                      index === 0
                        ? "bg-[#9E4A47] text-white"
                        : "text-white hover:bg-white/25"
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setIndex(1)}
                    className={`px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-medium transition ${
                      index === 1
                        ? "bg-[#9E4A47] text-white"
                        : "text-white hover:bg-white/25"
                    }`}
                  >
                    After
                  </button>
                </div>

                <button
                  onClick={() => setIndex(1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/25 transition"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* CONTENT PANEL – centered & better spacing */}
          <div className="bg-[#FFF8EF] text-[#0E3A43] px-8 sm:px-12 md:px-16 lg:px-20 py-12 md:py-16 lg:py-20 flex items-center justify-center">
            <div className="max-w-lg w-full space-y-8 md:space-y-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-center lg:text-left">
                Shubham
              </h1>

              <div className="text-center lg:text-left">
                <p className="text-xs sm:text-sm uppercase tracking-wide opacity-70 mb-2">
                  Treatment
                </p>
                <p className="text-base sm:text-lg font-medium">
                  Corrective / Repair Hair Transplant
                </p>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-xs sm:text-sm uppercase tracking-wide opacity-70 mb-2">
                  Methods
                </p>
                <p className="text-lg sm:text-xl font-semibold">
                  MHT + DSFT Advance FUE
                </p>
                <p className="text-sm sm:text-base opacity-90">
                  FUT + FUE + Beard | Min-Med Protocol
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20 space-y-10 md:space-y-12 text-[#2B333C] text-base sm:text-lg leading-relaxed">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#0E3A43] text-center md:text-left">
          Shubham’s Corrective Hair Transplant – The Science Behind Real, Sustainable Results
        </h2>

        <p className="text-xl sm:text-2xl font-medium text-[#0E3A43] italic border-l-4 border-[#9E4A47] pl-6 py-3">
          When Shubham first walked into Satya, he had lost not just hair, but trust.
        </p>

        <p>
          His earlier hair transplant looked impressive for a few months, but it was held together by high doses of Finasteride and Minoxidil. Once he stopped them, the entire structure collapsed, leaving wide gaps, donor scars, and emotional fatigue.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          The Hidden Reality of Many ‘Successful’ Transplants
        </h3>
        <p>
          What seems like success at first often hides poor technique behind medication. In Shubham’s repair case, his donor was overharvested, and multi-graft follicles were cherry-picked. The remaining single units were left unused, making density appear uneven and unnatural. Within a year, non-transplanted hair also began shedding.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          Why MHT (FUT + FUE + Beard) Was the Answer
        </h3>
        <p>
          We planned Shubham’s corrective procedure using <strong>MHT (Maximum Harvest Technique)</strong> — a strategic blend of FUT, FUE, and Beard extraction. This ensured:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maximum grafts from safe donor zones</li>
          <li>Uniform coverage across front, mid-scalp, and crown</li>
          <li>Natural hairline using single-unit grafts</li>
          <li>Preserved donor for any future touch-ups</li>
        </ul>
        <p>
          Where most clinics avoid FUT, Satya used it strategically — resulting in a nearly invisible scar thanks to modern trichophytic closure.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          Min-Med Approach – Less Medicine, More Skill
        </h3>
        <p>
          Unlike the previous clinic’s full-dose reliance, Dr. Shail prescribed only ~¼th the standard dose of Finasteride and Minoxidil. This protected hormonal balance while still supporting excellent growth. The results prove what Satya stands for: <strong>Skill Over Pill</strong>.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          DSFT – Direct Stimulated Follicular Transplant (Advance FUE)
        </h3>
        <p>
          Under the DSFT protocol, grafts are stimulated at micro-levels before placement — delivering ~97% survival rate and healthier, stronger regrowth. Every follicle is treated as a living unit: scientifically preserved, artistically implanted.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          Results That Last
        </h3>
        <p>
          Today Shubham has natural, even density from hairline to crown. His FUT scar is practically invisible, donor area remains healthy, and he is free from daily medicine dependence. The transformation restored not just his hair — but his belief in ethical, long-term medicine.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          What You Can Learn from Shubham’s Case
        </h3>
        <ul className="list-disc pl-6 space-y-3 font-medium">
          <li>Don’t judge results by early growth — look for longevity</li>
          <li>More grafts ≠ better outcome — smart planning matters</li>
          <li>FUT scars are minimal when done by experts</li>
          <li>Medicine supports growth; it shouldn’t be the foundation</li>
        </ul>

        {/* FAQs */}
        <div className="mt-12 pt-8 border-t border-[#FCEBDE]">
          <h3 className="text-2xl font-semibold text-[#0E3A43] mb-6">FAQs</h3>
          <div className="space-y-6">
            <div>
              <p className="font-semibold">Q1. What is MHT in hair transplant?</p>
              <p>MHT combines FUT, FUE, and body/beard hair extraction for maximum grafts while keeping the donor safe and natural.</p>
            </div>
            <div>
              <p className="font-semibold">Q2. Is FUT scar-free?</p>
              <p>With modern trichophytic closure, FUT leaves only a thin, near-invisible line.</p>
            </div>
            <div>
              <p className="font-semibold">Q3. How much medicine is necessary post-transplant?</p>
              <p>At Satya, our Min-Med Approach uses the lowest effective dose — only if truly needed.</p>
            </div>
            <div>
              <p className="font-semibold">Q4. What makes DSFT special?</p>
              <p>DSFT (Advanced FUE) enhances graft survival by pre-implant stimulation, ensuring stronger and faster growth.</p>
            </div>
            <div>
              <p className="font-semibold">Q5. Can failed transplants be repaired?</p>
              <p>Yes. With correct planning, donor assessment, and balanced technique, most failed cases can be successfully restored.</p>
            </div>
          </div>
        </div>

        <div className="text-center py-10 md:py-12">
          <p className="text-xl font-semibold text-[#0E3A43]">
            Shubham’s case proves that truthful science and skilled hands can rebuild what shortcuts destroy.
          </p>
          <p className="mt-4 font-medium">
            If your previous transplant failed or you’re worried about long-term medicine use, Satya offers a safer, smarter path.
          </p>
        </div>

        <div className="text-center border-t border-[#FCEBDE] pt-10 mt-8">
          <p className="font-semibold">📍 Satya Skin & Hair Solutions, DLF Phase 4, Gurgaon</p>
          <p className="font-semibold">📞 +91 9910094945</p>
          <p className="font-semibold">
            🌐{" "}
            <a
              href="https://satyaskinhairsolutions.com"
              className="text-[#9E4A47] hover:underline"
            >
              satyaskinhairsolutions.com
            </a>
          </p>
          <p className="mt-2">
            📸 @drshailgupta | @satyaskinandhair
          </p>
        </div>
      </section>

      {/* IMAGE GALLERY – Updated for Shubham */}
      <section className="mt-12 sm:mt-20 px-6 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto rounded-3xl bg-white/40 p-6 sm:p-10 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#2B333C] mb-8 text-center">
            Shubham's Progress & Results
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[assets.shubham1, assets.shubham2, assets.shubham5, assets.shubham6].map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-[#FCEBDE] shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt={`Shubham corrective hair transplant result ${i + 1}`}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}