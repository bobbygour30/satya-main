import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import assets from "../assets/assets"; // adjust path if needed

export default function CaseDetailPage() {
  const [index, setIndex] = useState(0);
  const images = [assets.prakhar1, assets.prakhar3]; // Before & After main toggle

  useEffect(() => {
    document.title =
      "Two Brothers, Two Hair Transplants, Why One Result Lasted and the Other Failed | Satya Skin & Hair";
  }, []);

  return (
    <div className="bg-[#FFF8EF] text-[#2B333C] min-h-screen">
      {/* HERO – Reduced & Responsive Height */}
      <section className="">
        <div className="grid lg:grid-cols-2 min-h-[520px] md:min-h-[580px] lg:min-h-[620px] xl:min-h-[680px]">
          {/* IMAGE SIDE */}
          <div className="relative bg-black">
            <img
              src={images[index]}
              alt={`${index === 0 ? "Before" : "After"} Hair Transplant – Prakhar`}
              className="w-full h-full object-cover"
            />

            {/* BEFORE / AFTER CONTROLS */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
              <div className="flex items-center gap-3 sm:gap-4 bg-white/25 backdrop-blur-md border border-white/40 rounded-full px-4 sm:px-5 py-2.5 sm:py-3">
                <button
                  onClick={() => setIndex(0)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/20 transition"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex bg-white/30 rounded-full overflow-hidden">
                  <button
                    onClick={() => setIndex(0)}
                    className={`px-5 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition ${
                      index === 0
                        ? "bg-[#9E4A47] text-white"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setIndex(1)}
                    className={`px-5 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition ${
                      index === 1
                        ? "bg-[#9E4A47] text-white"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    After
                  </button>
                </div>

                <button
                  onClick={() => setIndex(1)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/20 transition"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* CONTENT PANEL */}
          <div className="bg-[#FFF8EF] text-[#0E3A43] px-8 sm:px-10 md:px-16 py-16 md:py-20 flex items-center">
            <div className="max-w-md w-full">
              <h1 className="text-4xl sm:text-5xl font-serif mb-10 sm:mb-14 leading-tight">
                Prakhar A
              </h1>

              <div className="mb-10 sm:mb-12">
                <p className="text-xs sm:text-sm uppercase tracking-wide opacity-70 mb-3 sm:mb-4">
                  Treatment
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Hair Transplant
                </p>
              </div>

              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wide opacity-70 mb-3 sm:mb-4">
                  Methods
                </p>
                <p className="text-lg sm:text-xl font-semibold">
                  Advance FUE Hair Transplant (DSFT)
                </p>
                <p className="text-sm sm:text-base opacity-90">
                  Direct Stimulated Follicular Transplant – Min-Med Protocol
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* MAIN CONTENT – Full Story */}
      <section className="max-w-7xl mx-auto px-6 py-10 sm:py-16 space-y-10 text-[#2B333C] text-base sm:text-lg leading-relaxed">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#0E3A43] mb-6">
          Two Brothers, Two Hair Transplants – Why One Result Lasted and the Other Failed
        </h2>

        <p className="text-xl sm:text-2xl font-medium text-[#0E3A43] italic border-l-4 border-[#9E4A47] pl-6 py-2">
          At Satyaskinhair, founded by Dr Shail Gupta and Dr Ruchi Agarwal, we have seen thousands of hair transplant cases over the years. Some are first-time transplants. Many are corrective surgeries after failures elsewhere.
        </p>

        <p>
          Among them, Prakhar’s story stands out, because it doesn’t just involve one patient, but two brothers who chose very different paths.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Both were young.</li>
          <li>Both had similar hair loss patterns.</li>
          <li>Both decided to get a transplant around the same time.</li>
        </ul>

        <p>
          But one made his decision based on planning and ethics, while the other was influenced by hair graft numbers, lower cost, and aggressive medication.
        </p>

        <p className="font-semibold">
          The results they live with today are drastically different.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-12 mb-4">
          Prakhar’s Consultation at Satya
        </h3>
        <p>
          When Prakhar visited us, the focus was not just on “filling empty areas” but on:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Understanding his hair loss pattern</li>
          <li>Preserving his donor for lifetime</li>
          <li>Designing a natural, age-appropriate hairline</li>
          <li>Using the least possible medication</li>
        </ul>

        <p>
          We proposed a DSFT (Direct Stimulated Follicular Transplant) Advance FUE hair transplant with a realistic graft count, balanced density, and a Min-Med protocol with around 1.5 mg/week.
        </p>

        <p>
          We explained clearly what surgery can do, what medicine can do, and where the limits are. He understood that our goal was not to “max out” his donor or overload him with drugs, but to give him natural, sustainable results.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-12 mb-4">
          His Brother’s Decision: Grafts, Discounts, and Full Medicines
        </h3>
        <p>
          Prakhar’s brother chose another clinic. They offered almost double the grafts at half the cost, with promises of “amazing, dense results” plus full-dose medications.
        </p>

        <p>
          It sounded like a deal. Big numbers. Fast promises. In the short term, his result looked impressive. In photos, it seemed like he had “won” compared to Prakhar.
        </p>

        <p>
          But the foundation of that result was not surgical skill — it was heavy medication and overuse of grafts.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-12 mb-4">
          The Illusion of Medicine-Driven Results
        </h3>
        <p>
          Medicines like Finasteride and Minoxidil can increase shaft thickness, hold on to weak hairs for some time, and create the appearance of density.
        </p>

        <p>
          When used ethically, in the right dose and with monitoring, they can support a good transplant. However, when used in full doses to prop up a weak surgery, they create an illusion.
        </p>

        <p>
          Once the body adapts or the patient tapers the medicine, the illusion fades. This is exactly what happened with Prakhar’s brother.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-12 mb-4">
          One Year Later: The Reality Check
        </h3>
        <p>
          Prakhar’s result looked natural, balanced, and stable. His donor was intact. His hairline suited his face and age. His medicine was minimal and safe.
        </p>

        <p>
          His brother’s result started to collapse: density reduced, the illusion faded, donor had already been overused.
        </p>

        <p className="font-semibold">
          In simple terms: Prakhar still had the result + health + donor. His brother had lost all three.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-12 mb-4">
          Hair Transplant at a Young Age: The Hidden Risk
        </h3>
        <p>
          When you undergo a hair transplant at a young age, three things matter more than anything:
        </p>
        <ol className="list-decimal pl-6 space-y-2 font-medium">
          <li>Long-term planning</li>
          <li>Donor preservation</li>
          <li>Honest discussion about medication</li>
        </ol>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-12 mb-4">
          Pay for Skill, Not for Pill
        </h3>
        <p className="italic text-lg">
          “Pay the bill for the skill, not for the pill.”
        </p>

        <p>
          Because when a result is medicine-dependent, it is temporary by definition.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-12 mb-4">
          Why Satya’s Approach Is Different
        </h3>
        <p>
          At Satya, every case — especially in young patients — is handled with conservative, honest planning, realistic graft numbers, Min-Med Approach, donor mapping, long-term strategy, and transparent communication.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-12 mb-4">
          Key Lessons From Prakhar’s Case
        </h3>
        <ul className="list-disc pl-6 space-y-3 font-medium">
          <li>Don’t choose a clinic only on graft numbers or cost.</li>
          <li>Ask how much of the result comes from surgery vs medicine.</li>
          <li>Make sure your donor is respected and preserved.</li>
          <li>Especially at a young age, think in decades, not in months.</li>
          <li>A stable, natural result with minimal medicine is always better than a flashy, short-lived one.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-12 mb-4">
          Conclusion
        </h3>
        <p>
          Prakhar and his brother started from the same place. Their choices took them in completely different directions.
        </p>

        <p>
          One chose balanced planning, DSFT, and minimal medicine, and kept his hair, health, and donor. The other chose numbers, discounts, and heavy pills, and paid for it with all three.
        </p>

        <p className="font-semibold text-xl">
          If you’re planning a hair transplant, especially at a young age, let their story guide you.
        </p>

        <p className="text-center py-8 text-[#0E3A43] font-medium text-lg">
          Choose the truth. Choose long-term thinking. Choose a clinic that protects your hair, health, and donor — not just your “before-after” photo.
        </p>

        <div className="text-center border-t border-[#FCEBDE] pt-8 mt-8">
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
        </div>
      </section>

      {/* YOUTUBE VIDEO */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Fsi5_On4q_8"
              title="Prakhar Hair Transplant Result – Satya Skin & Hair"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="mt-16 sm:mt-24 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl  p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#2B333C] mb-6 sm:mb-8 text-center">
            Prakhar’s Progress & Results
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[assets.prakhar1, assets.prakhar2, assets.prakhar3].map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-[#FCEBDE] shadow-sm"
              >
                <img
                  src={img}
                  alt={`Prakhar hair transplant result ${i + 1}`}
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