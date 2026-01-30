import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import assets from "../assets/assets";

/* ========================================================================
   LOKESH LOHIA – CASE STUDY PAGE
   Desktop design unchanged
   Mobile fully responsive
======================================================================== */

export default function Lokesh() {
  /* ================= BEFORE / AFTER ================= */
  const [index, setIndex] = useState(0);
  const images = [assets.lokesh1, assets.lokesh];

  /* ================= LIGHTBOX ================= */
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (imgs, i) => {
    const valid = imgs.filter(Boolean);
    if (valid.length) {
      setLightboxImages(valid);
      setLightboxIndex(i);
    }
  };

  const closeLightbox = () => {
    setLightboxImages([]);
    setLightboxIndex(null);
  };

  const prevImage = () => {
    setLightboxIndex((p) =>
      p === 0 ? lightboxImages.length - 1 : p - 1
    );
  };

  const nextImage = () => {
    setLightboxIndex((p) =>
      p === lightboxImages.length - 1 ? 0 : p + 1
    );
  };

  useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, lightboxImages]);

  useEffect(() => {
    document.title =
      "Repair Hair Transplant | Medicine Failure to Natural Results | Satya Skin & Hair";
  }, []);

  /* ================= TABLE DATA ================= */
  const rows = [
    {
      label: "Before 1st Surgery",
      images: [
        assets.leftViewBeforeSurgery,
        assets.frontViewBeforeSurgery,
        assets.rightViewBeforeSurgery,
        assets.backViewBeforeSurgery,
      ],
    },
    {
      label: "Immediate 1st Surgery",
      images: [
        assets.leftViewImmediate,
        assets.immediateFrontView,
        assets.rightViewImmediate,
        assets.immediateBackView,
      ],
    },
    {
      label: "1st Surgery 6 Month",
      images: [
        assets.leftViewMonth6,
        assets.month6FrontView,
        assets.rightViewMonth6,
        assets.backView15Days,
      ],
    },
    {
      label: "Immediate 2nd Surgery",
      images: [
        assets.leftViewImmediate2ndSurgery,
        assets.frontViewImmediate2ndSurgery,
        assets.rightViewImmediate2ndSurgery,
        assets.immediate2ndSurgery,
      ],
    },
    {
      label: "2nd Surgery 7 Month",
      images: [
        assets.leftViewMonth7_2ndSurgery,
        assets.month7_2ndSurgeryFrontView,
        assets.rightViewMonth7_2ndSurgery,
        assets.backViewAfter7Month2ndSurgery,
      ],
    },
  ];

  /* ================= TABLE RENDER ================= */
  const renderProgressTable = () => (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[900px] w-full border border-[#FCEBDE] bg-white rounded-xl shadow-sm">
        <thead>
          <tr className="bg-[#FFF8EF]/60">
            <th className="border p-3 text-left">Stage</th>
            <th className="border p-3 text-center">Front Left</th>
            <th className="border p-3 text-center">Front</th>
            <th className="border p-3 text-center">Front Right</th>
            <th className="border p-3 text-center">Top / Back</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              <td className="border p-3 whitespace-nowrap font-medium bg-[#FFF8EF]/30">
                {row.label}
              </td>
              {row.images.map((img, i) => (
                <td key={i} className="border p-2">
                  <div
                    className="cursor-pointer hover:shadow-md transition rounded overflow-hidden"
                    onClick={() => openLightbox(row.images, i)}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-24 sm:h-28 md:h-32 object-contain"
                      loading="lazy"
                    />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-[#2B333C]">
          Lokesh Lohia
        </p>
        <p className="text-sm opacity-80">
          SATYA SKIN & HAIR SOLUTIONS
        </p>
      </div>
    </div>
  );

  /* ================= JSX ================= */
  return (
    <div className="bg-[#FFF8EF] min-h-screen text-[#2B333C]">

      {/* ================= HERO ================= */}
      <section className="pt-6 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden min-h-[75vh] lg:min-h-[90vh]">

            {/* IMAGE SIDE */}
            <div className="relative h-[50vh] sm:h-[60vh] lg:h-auto">
              <img
                src={images[index]}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* BEFORE AFTER */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 bg-white/30 backdrop-blur border rounded-full px-3 py-2">
                  <button onClick={() => setIndex(0)}>
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    onClick={() => setIndex(0)}
                    className={`px-3 py-1 text-xs rounded-full ${
                      index === 0
                        ? "bg-[#9E4A47] text-white"
                        : "text-white"
                    }`}
                  >
                    Before
                  </button>

                  <button
                    onClick={() => setIndex(1)}
                    className={`px-3 py-1 text-xs rounded-full ${
                      index === 1
                        ? "bg-[#9E4A47] text-white"
                        : "text-white"
                    }`}
                  >
                    After
                  </button>

                  <button onClick={() => setIndex(1)}>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="bg-[#2B333C] text-white flex items-center px-6 sm:px-10 lg:px-14 py-10">
              <div className="max-w-lg space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
                  Lokesh Lohia
                </h1>

                <div>
                  <p className="text-xs opacity-70">Treatment</p>
                  <p className="text-lg">
                    Redo / Repair Hair Transplant
                  </p>
                </div>

                <div>
                  <p className="text-xs opacity-70">Methods</p>
                  <p className="text-xl font-semibold">MHT + DSFT</p>
                  <p className="text-sm">
                    FUT + FUE | Min-Med Protocol
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 leading-relaxed">

  {/* H1 */}
  <h1 className="text-3xl sm:text-4xl font-semibold text-[#0E3A43]">
    “Lokesh Lohia’s Redo Hair Transplant, How Skill and Science Rebuilt What Medicines Couldn’t”
  </h1>

  {/* Introduction */}
  <p className="text-xl italic border-l-4 border-[#9E4A47] pl-6">
    Lokesh Lohia’s story is one many patients can relate to — a promising first hair
    transplant that slowly lost its shine once the medicines stopped.
  </p>

  <p>
    At Satyaskinhair, we see this often: patients over-medicated to mask poor
    technique.
  </p>

  {/* First Transplant */}
  <h3 className="text-2xl font-semibold text-[#0E3A43]">
    The First Transplant – A Quick Fix Gone Wrong
  </h3>

  <p>
    Lokesh underwent a transplant that looked fine initially. The problem?
    It was built on daily <strong>Finasteride 1 mg</strong> and
    <strong> Minoxidil 10%</strong>, not on surgical skill.
  </p>

  <p>
    Once he stopped medication, the grafts revealed their true alignment —
    wrong angles, sparse density, and visible gaps.
  </p>

  <p>
    He realised he hadn’t received a hair transplant that could stand without drugs,
    just a temporary illusion.
  </p>

  {/* Medicines */}
  <h3 className="text-2xl font-semibold text-[#0E3A43]">
    Why Medicines Aren’t the Solution
  </h3>

  <p>
    Medicines can support your hair transplant, but they shouldn’t define it.
    When dosage becomes the foundation of success, results collapse the moment
    you stop.
  </p>

  <p>
    That’s why Satyaskinhair follows the <strong>Min-Med Approach</strong>,
    prescribing only what’s necessary and letting surgical skill do the rest.
  </p>

  {/* Diagnosis */}
  <h3 className="text-2xl font-semibold text-[#0E3A43]">
    The Satya Diagnosis
  </h3>

  <p>Lokesh’s scalp had multiple challenges:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Low, uneven hairline</li>
    <li>Donor over-extraction</li>
    <li>Grafts placed at unnatural directions</li>
    <li>High dependency on medication</li>
  </ul>

  <p>
    Dr. Shail Gupta advised a redo transplant using the
    <strong> MHT (FUT + FUE)</strong> technique under
    <strong> DSFT</strong>, ensuring high survival, safe donor management,
    and long-term balance.
  </p>

  {/* ================= VIDEO ================= */}
  <div className="py-10">
    <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/PWxwgQsRwcI"
          title="Lokesh Lohia Hair Transplant"
          allowFullScreen
        />
      </div>
    </div>
  </div>

  {/* Solution */}
  <h3 className="text-2xl font-semibold text-[#0E3A43]">
    The Solution – Two MHT Surgeries
  </h3>

  <p className="font-semibold">First Surgery – 2700 Grafts</p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Extraction of wrongly placed grafts</li>
    <li>Artistic natural hairline redesign</li>
  </ul>

  <p className="font-semibold mt-4">Second Surgery – 3400 Grafts</p>
  <ul className="list-disc pl-6 space-y-1">
    <li>Mid-scalp density enhancement</li>
    <li>FUT + FUE combination for maximum grafts with minimal scarring</li>
  </ul>

  <p>
    Finasteride was reduced to <strong>1 mg per week</strong>,
    shifting reliance from chemicals to craftsmanship.
  </p>

  {/* Why Worked */}
  <h3 className="text-2xl font-semibold text-[#0E3A43]">
    Why DSFT and Balanced Planning Worked
  </h3>

  <ul className="list-disc pl-6 space-y-2">
    <li><strong>97% Graft Survival</strong> through precise handling and stimulation</li>
    <li><strong>Balanced Design</strong> matched to age-appropriate recession</li>
    <li><strong>Donor Preservation</strong> with barely visible FUT scars</li>
    <li><strong>Zero Over-Medication</strong>, health preserved long-term</li>
  </ul>

  {/* Outcome */}
  <h3 className="text-2xl font-semibold text-[#0E3A43]">
    The Outcome
  </h3>

  <p>
    Two years later, Lokesh enjoys a natural, dense look with zero dependence
    on medication. His donor remains intact, proving that balanced planning
    ensures longevity.
  </p>

  <blockquote className="border-l-4 border-[#9E4A47] pl-6 italic text-lg">
    “The first transplant gave me hair. Satya gave me peace of mind.”
    <span className="block mt-2 font-semibold">— Lokesh Lohia</span>
  </blockquote>

  {/* FAQs */}
  <h3 className="text-2xl font-semibold text-[#0E3A43]">
    FAQs
  </h3>

  <div className="space-y-4">
    <p><strong>Q1. What is a Redo Hair Transplant?</strong><br />
      A repair procedure for patients dissatisfied with earlier transplants,
      correcting poor design, angles, or donor misuse.
    </p>

    <p><strong>Q2. What is MHT (Maximum Harvest Technique)?</strong><br />
      A combination of FUE + FUT that safely extracts more grafts while
      keeping scarring minimal.
    </p>

    <p><strong>Q3. Why use DSFT?</strong><br />
      DSFT ensures direct stimulation during implantation, achieving
      97% survival and faster growth.
    </p>

    <p><strong>Q4. What is the Min-Med Approach?</strong><br />
      Satya’s proprietary low-medicine protocol that protects long-term health.
    </p>

    <p><strong>Q5. Can repair transplants look natural?</strong><br />
      Yes — when done with correct angulation, density planning, and donor
      conservation, as seen in Lokesh’s case.
    </p>
  </div>

</section>


      {/* ================= TABLE ================= */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-7xl mx-auto bg-white/40 rounded-3xl p-6 sm:p-10">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Lokesh’s Progress & Results
          </h3>
          {renderProgressTable()}
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImages[lightboxIndex]}
              alt=""
              className="max-w-[95%] max-h-[90vh] object-contain"
            />

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
