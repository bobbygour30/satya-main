import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import assets from "../assets/assets"; // adjust path if needed

export default function Arjun() {
  const [index, setIndex] = useState(0);
  const images = [assets.arjun1, assets.arjun6]; // Before & After toggle (update these assets if needed)

  // ── Lightbox / Modal state ──
  const [selectedImage, setSelectedImage] = useState(null);

  const progressImages = [assets.arjun5, assets.arjun4, assets.arjun3, assets.arjun2];

  useEffect(() => {
    document.title =
      "Arjun’s Repair Hair Transplant – 5000 Grafts Corrective Case | Satya Skin & Hair";
  }, []);

  // Optional: close modal with Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedImage]);

  return (
    <div className="bg-[#FFF8EF] text-[#2B333C] min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#FFF8EF] pt-6 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 h-[60vh] md:h-[65vh] lg:h-[70vh] rounded-3xl">
            
            {/* IMAGE SIDE */}
            <div className="relative h-full rounded-3xl lg:rounded-r-none overflow-hidden">
              <img
                src={images[index]}
                alt={`${index === 0 ? "Before" : "After"} Repair Hair Transplant – Arjun`}
                className="w-full h-full object-cover"
              />

              {/* BEFORE / AFTER CONTROLS */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/40 rounded-full px-3 py-2">
                  <button
                    onClick={() => setIndex(0)}
                    className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/25 transition"
                  >
                    <ChevronLeft size={14} />
                  </button>

                  <div className="flex bg-white/35 rounded-full overflow-hidden">
                    <button
                      onClick={() => setIndex(0)}
                      className={`px-4 py-1 text-xs font-medium transition ${
                        index === 0
                          ? "bg-[#9E4A47] text-white"
                          : "text-white hover:bg-white/25"
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setIndex(1)}
                      className={`px-4 py-1 text-xs font-medium transition ${
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
                    className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/25 transition"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* ================= CONTENT SIDE (DARK + SVG) ================= */}
            <div className="relative bg-[#2B333C] text-white px-6 sm:px-10 lg:px-14 flex items-center rounded-3xl lg:rounded-l-none overflow-hidden">

              {/* DECORATIVE SVG BACKGROUND */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg
                  viewBox="0 0 1440 800"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M0 200 C400 350 900 50 1440 200"
                    stroke="#DFDFDD"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M0 500 C450 650 900 350 1440 500"
                    stroke="#DFDFDD"
                    strokeWidth="1.1"
                  />
                  <path
                    d="M0 350 C450 500 950 150 1440 350"
                    stroke="#DFDFDD"
                    strokeWidth="0.8"
                  />
                </svg>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 max-w-lg space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
                  Arjun
                </h1>

                <div>
                  <p className="text-xs uppercase tracking-wide opacity-70 mb-1">
                    Treatment
                  </p>
                  <p className="text-base sm:text-lg font-medium">
                    Repair / Corrective Hair Transplant
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide opacity-70 mb-1">
                    Methods
                  </p>
                  <p className="text-lg sm:text-xl font-semibold">
                    FUT Repair + Limited FUE
                  </p>
                  <p className="text-sm opacity-90">
                    ~5000 Grafts Total | Min-Med Protocol
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20 space-y-10 md:space-y-12 text-[#2B333C] text-base sm:text-lg leading-relaxed">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#0E3A43] text-center md:text-left">
          Arjun’s Repair Hair Transplant – Why Truth Outlasts Promises
        </h2>

        <p className="text-xl sm:text-2xl font-medium text-[#0E3A43] italic border-l-4 border-[#9E4A47] pl-6 py-3">
          Arjun’s story began with hope and ended with hard-earned wisdom.
        </p>

        <p>
          He had once visited Satya for consultation but chose another clinic offering low cost and big claims. The result: gaps, poor density, and a large donor scar. When the medicine’s effect faded, the flaws surfaced — and so did the truth.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          The First Mistake
        </h3>
        <p>
          The clinic promised “5000 Grafts Hair Transplant, celebrity results, and no scar.” But high doses of Finasteride gave only short-term fullness. When he discontinued them, the density disappeared and the donor looked damaged.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          The Return to Truth
        </h3>
        <p>
          Disappointed but determined, Arjun came back to Satya Skin & Hair, where he had once received an honest plan. This time, he chose expertise over excitement.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          Satya’s Corrective Plan
        </h3>
        <p>
          Dr. Shail Gupta performed a <strong>FUT repair hair transplant</strong> to remove the previous wide scar and combined it with limited FUE for refined density. The strategy ensured:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>A single, fine-line scar</li>
          <li>No donor wastage</li>
          <li>Balanced front-to-crown density</li>
          <li>Natural-looking hairline and temples</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          Min-Med Micro-Dosing
        </h3>
        <p>
          Instead of full-dose Finasteride, Arjun received micro-dosing — less than ¼th of typical regimens. This protected his health while sustaining new growth. Satya’s Min-Med Approach ensures medicine complements, not controls, the transplant.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          Balanced Hair Transplant Philosophy
        </h3>
        <p>
          At Satya, every case balances graft count, donor conservation, and natural aesthetics. A balanced plan delivers stability, not shock-value density. That’s why his new hairline blends effortlessly, temples are soft, and the result looks truly permanent.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          Arjun’s Reflection
        </h3>
        <p className="italic">
          “The first time, I heard what I wanted. The second time, I heard what I needed.”
        </p>
        <p>
          His case is proof that skill guided by honesty builds results that don’t depend on pills.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43] mt-10 mb-4">
          Key Learnings
        </h3>
        <ul className="list-disc pl-6 space-y-3 font-medium">
          <li>Don’t fall for inflated graft numbers</li>
          <li>Medicines can support, not substitute, surgical skill</li>
          <li>FUT scars can be minimal when done right</li>
          <li>Choose a clinic that shows truth, not temptation</li>
        </ul>

        {/* IMAGE GALLERY – Updated for Arjun with lightbox */}
        <section className="mt-12 sm:mt-20 px-6 pb-12 sm:pb-20">
          <div className="max-w-7xl mx-auto rounded-3xl bg-white/40 p-6 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#2B333C] mb-8 text-center">
              Arjun's Progress & Results
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {progressImages.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-[#FCEBDE] shadow-sm hover:shadow-md transition cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Arjun repair hair transplant result ${i + 1}`}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <div className="mt-12 pt-8 border-t border-[#FCEBDE]">
          <h3 className="text-2xl font-semibold text-[#0E3A43] mb-6">FAQs</h3>
          <div className="space-y-6">
            <div>
              <p className="font-semibold">Q1. Can FUT and FUE be combined?</p>
              <p>Yes. The combination, when properly planned, increases graft yield while keeping the donor safe.</p>
            </div>
            <div>
              <p className="font-semibold">Q2. What is micro-dosing Finasteride?</p>
              <p>A customised low-dose plan that maintains results without hormonal overload.</p>
            </div>
            <div>
              <p className="font-semibold">Q3. Does FUT leave a scar?</p>
              <p>A fine, nearly invisible line with trichophytic closure, as seen in Arjun’s case.</p>
            </div>
            <div>
              <p className="font-semibold">Q4. Can a failed transplant be repaired?</p>
              <p>Absolutely. With proper donor mapping and technique selection, most failures can be corrected.</p>
            </div>
            <div>
              <p className="font-semibold">Q5. Why Satya?</p>
              <p>Because Satya stands for Science, Artistry, Truth, Your Identity, Affection — not marketing gimmicks.</p>
            </div>
          </div>
        </div>

        <div className="text-center py-10 md:py-12">
          <p className="text-xl font-semibold text-[#0E3A43]">
            Arjun’s result shows that when honesty guides the plan, success follows naturally.
          </p>
          <p className="mt-4 font-medium">
            At Satya, every graft is placed with science, every word backed by truth.
          </p>
        </div>

        <div className="text-center border-t border-[#FCEBDE] pt-10 mt-8">
          <p className="font-semibold">📍 Satya Skin & Hair Solutions, DLF Phase 4, Gurgaon</p>
          <p className="font-semibold">📞 +91 9910094945</p>
          <p className="mt-2">
            📸 @drshailgupta | @satyaskinandhair
          </p>
        </div>
      </section>

      {/* ── LIGHTBOX / FULL IMAGE MODAL ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)} // close on backdrop click
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Arjun full progress image"
              className="max-w-full max-h-[90vh] object-contain"
            />

            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition"
              onClick={() => setSelectedImage(null)}
              aria-label="Close full image"
            >
              <X size={28} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}