import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import assets from "../assets/assets";

export default function Lokesh() {
  /* ================= BEFORE / AFTER ================= */
  const [mode, setMode] = useState(0); // 0: before, 1: after
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeImages = [
    assets.frontViewBeforeSurgery,
    assets.leftViewBeforeSurgery,
    assets.rightViewBeforeSurgery,
    assets.backViewBeforeSurgery,
  ];

  const afterImages = [
    assets.month7_2ndSurgeryFrontView,
    assets.leftViewMonth7_2ndSurgery,
    assets.rightViewMonth7_2ndSurgery,
    assets.backViewAfter7Month2ndSurgery,
  ];

  const currentImages = mode === 0 ? beforeImages : afterImages;
  const displayedImage = currentImages[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const imgs = mode === 0 ? beforeImages : afterImages;
      return prev === 0 ? imgs.length - 1 : prev - 1;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const imgs = mode === 0 ? beforeImages : afterImages;
      return prev === imgs.length - 1 ? 0 : prev + 1;
    });
  };
  const switchToBefore = () => {
    setMode(0);
    // REMOVE: setCurrentIndex(0);
    // Now it will keep whatever currentIndex was
  };

  const switchToAfter = () => {
    setMode(1);
    // REMOVE: setCurrentIndex(0);
    // Now it will keep whatever currentIndex was
  };

  useEffect(() => {
    setCurrentIndex((prevIndex) => {
      const images = mode === 0 ? beforeImages : afterImages;
      // Clamp the index to valid range
      return Math.min(prevIndex, images.length - 1);
    });
  }, [mode, beforeImages, afterImages]);

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
    setLightboxIndex((p) => (p === 0 ? lightboxImages.length - 1 : p - 1));
  };

  const nextImage = () => {
    setLightboxIndex((p) => (p === lightboxImages.length - 1 ? 0 : p + 1));
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
        assets.frontViewBeforeSurgery,
        assets.leftViewBeforeSurgery,
        assets.rightViewBeforeSurgery,
        assets.backViewBeforeSurgery,
      ],
    },
    {
      label: "Immediate 1st Surgery",
      images: [
        assets.immediateFrontView,
        assets.leftViewImmediate,
        assets.rightViewImmediate,
        assets.immediateBackView,
      ],
    },
    {
      label: "6 Months Post 1st Surgery",
      images: [
        assets.month6FrontView,
        assets.leftViewMonth6,
        assets.rightViewMonth6,
        assets.backView15Days,
      ],
    },
    {
      label: "Immediate 2nd Surgery",
      images: [
        assets.frontViewImmediate2ndSurgery,
        assets.leftViewImmediate2ndSurgery,
        assets.rightViewImmediate2ndSurgery,
        assets.immediate2ndSurgery,
      ],
    },
    {
      label: "7 Month Post 2nd Surgery",
      images: [
        assets.month7_2ndSurgeryFrontView,
        assets.leftViewMonth7_2ndSurgery,
        assets.rightViewMonth7_2ndSurgery,
        assets.backViewAfter7Month2ndSurgery,
      ],
    },
  ];

  /* ================= TABLE RENDER ================= */
  const renderProgressTable = () => (
    <div className="w-full overflow-x-auto sm:text-xs text-[8px]">
      <table className=" w-full border border-[#FCEBDE] bg-white rounded-xl shadow-sm">
        <thead>
          <tr className="bg-[#FFF8EF]/60">
            <th className="border p-3 text-left font-medium">View</th>
            {rows.map((row) => (
              <th
                key={row.label}
                className="border p-3 text-center font-medium bg-[#FFF8EF]/40"
              >
                {row.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Row 0: Front */}
          <tr>
            <td className="border p-3 font-medium bg-[#FFF8EF]/30 text-left">
              Front
            </td>
            {rows.map((row, stageIndex) => (
              <td key={stageIndex} className="border p-0 ">
                <div
                  className="cursor-pointer transition overflow-hidden"
                  onClick={() => openLightbox(row.images, 0)}
                >
                  <img
                    src={row.images[0]}
                    alt=""
                    className="w-full h-16 sm:h-40 md:h-48 lg:h-56 sm:object-contain"
                    loading="lazy"
                  />
                </div>
              </td>
            ))}
          </tr>

          {/* Row 1: Right */}
          <tr>
            <td className="border p-3 font-medium bg-[#FFF8EF]/30 text-left">
              Right
            </td>
            {rows.map((row, stageIndex) => (
              <td key={stageIndex} className="border">
                <div
                  className="cursor-pointer hover:shadow-md transition rounded overflow-hidden"
                  onClick={() => openLightbox(row.images, 1)}
                >
                  <img
                    src={row.images[1]}
                    alt=""
                    className="w-full h-16 sm:h-40 md:h-48 lg:h-56 sm:object-contain"
                    loading="lazy"
                  />
                </div>
              </td>
            ))}
          </tr>

          {/* Row 2: Left */}
          <tr>
            <td className="border p-3 font-medium bg-[#FFF8EF]/30 text-left">
              Left
            </td>
            {rows.map((row, stageIndex) => (
              <td key={stageIndex} className="border">
                <div
                  className="cursor-pointer hover:shadow-md transition rounded overflow-hidden"
                  onClick={() => openLightbox(row.images, 2)}
                >
                  <img
                    src={row.images[2]}
                    alt=""
                    className="w-full h-16 sm:h-40 md:h-48 lg:h-56 sm:object-contain"
                    loading="lazy"
                  />
                </div>
              </td>
            ))}
          </tr>

          {/* Row 3: Top / Back */}
          <tr>
            <td className="border p-3 font-medium bg-[#FFF8EF]/30 text-left">
              Top / Back
            </td>
            {rows.map((row, stageIndex) => (
              <td key={stageIndex} className="border">
                <div
                  className="cursor-pointer hover:shadow-md transition rounded overflow-hidden"
                  onClick={() => openLightbox(row.images, 3)}
                >
                  <img
                    src={row.images[3]}
                    alt=""
                    className="w-full h-16 sm:h-40 md:h-48 lg:h-56 sm:object-contain"
                    loading="lazy"
                  />
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-[#2B333C]">Lokesh Lohia</p>
        <p className="text-sm opacity-80">SATYA SKIN & HAIR SOLUTIONS</p>
      </div>
    </div>
  );

  /* ================= JSX ================= */
  return (
    <div className="bg-[#FFF8EF] min-h-screen text-[#2B333C] ">
      {/* ================= HERO ================= */}
      <section className="">
        <div className="max-w-[1380px] mx-auto sm:px-6">
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden min-h-[45vh] lg:min-h-[55vh]">
            {/* IMAGE SIDE */}
            <div className="relative w-full overflow-hidden rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
              {/* Lock the aspect ratio - adjust 0.75 = 3:4, 0.8 = 4:5, 0.5625 = 9:16 etc. */}
              <div className="relative w-full pb-[120%] lg:pb-[119%]">
                {" "}
                {/* ← this creates fixed ratio */}
                <img
                  src={displayedImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* BEFORE / AFTER CONTROLS */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <div className="flex items-center gap-2 bg-white/30 backdrop-blur border border-white/40 rounded-full px-3 py-2 shadow-sm">
                  <button onClick={prevSlide} className="text-white">
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    onClick={switchToBefore}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      mode === 0
                        ? "bg-[#9E4A47] text-white"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    Before
                  </button>

                  <button
                    onClick={switchToAfter}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      mode === 1
                        ? "bg-[#9E4A47] text-white"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    After
                  </button>

                  <button onClick={nextSlide} className="text-white">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="bg-[#2B333C] text-white px-6 sm:px-10 lg:px-14 py-12 flex items-center">
              <div className="max-w-5xl space-y-6">
                {/* Heading */}
                <div className="space-y-1">
                  <p className="uppercase tracking-widest text-xs text-white/60">
                    Patient Transformation Details
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                    Lokesh Lohia’s Hair Restoration Journey
                  </h2>
                </div>

                {/* Divider */}
                <div className="w-24 h-[2px] bg-[#9E4A47]" />

                {/* Details */}
                <div className="grid gap-4 sm:gap-6 text-sm sm:text-base">
                  <p className="leading-relaxed">
                    <span className="text-white/70">Patient Name</span>
                    <span className="block text-lg sm:text-xl font-medium mt-1">
                      Lokesh Lohia
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">
                      Total Grafts Implanted
                    </span>
                    <span className="block mt-1">
                      <span className="font-medium text-white">
                        1st Surgery:
                      </span>{" "}
                      2700 MHT
                      <span className="mx-2 text-white/40">|</span>
                      <span className="font-medium text-white">
                        2nd Surgery:
                      </span>{" "}
                      3400 MHT
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Technique Used</span>
                    <span className="block mt-1 text-white">
                      MHT{" "}
                      <span className="text-white/50">
                        (Combined with DSFT)
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6 py-12 sm:py-16 space-y-10 leading-relaxed">
        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#0E3A43]">
          Repair Hair Transplant Case Study | Hair Transplant in Gurgaon
        </h1>

        {/* Introduction */}
        <p className="text-xl italic border-l-4 border-[#9E4A47] pl-6">
          Repair hair transplant cases are more complex than first-time
          procedures. The process requires teams to fix existing surgical errors
          while dealing with restrictions on available donor sites. 
        </p>

        <p>
          The case study documents Lokesh Lohia's hair restoration journey while
          demonstrating how sustained outcomes depend on comprehensive planning
          and ethical procedures and surgical expertise.
        </p>

        <p>
          Lokesh’s experience also demonstrates how excessive medication can
          temporarily hide poor transplant outcomes, only for problems to
          surface later.
        </p>

        {/* Lokesh First Hair Transplant By Other Clinic */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Lokesh First Hair Transplant By Other Clinic
        </h3>

        <p>
          Before getting in touch with Satyaskinhair, Lokesh Lohia already had
          undergone a hair transplant.
        </p>

        <p>Initially:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The results appeared acceptable</li>
          <li>Density appeared appropriate.</li>
          <li>Problems with the hairline were not immediately apparent.</li>
        </ul>

        <p>Over time:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Medication was cut back on and eventually stopped.</li>
          <li>The actual result of the procedure became apparent.</li>
          <li>
            There were obvious indications that the transplant was failing.
          </li>
          <li>
            Lokesh needed a repair hair transplant at this point rather than a
            standard improvement.
          </li>
        </ul>

        <p>
          On that occasion, what Lokesh needed was a reconstructive  hair
          transplantation, not a run-of-the-mill enhancement.
        </p>

        {/* Problems Identified During Evaluation */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Problems Identified During Evaluation
        </h3>

        <p>The first surgery had some complications.</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Poorly designed and unnatural hairline</li>
          <li>Incorrect graft angles and directions</li>
          <li>Overuse of grafts to create a low hairline</li>
          <li>Donor area planning not done for long-term needs</li>
          <li>No clarity provided about medication dependency</li>
        </ul>

        <p>
          These problems made the original transplant unsustainable without
          continuous medication.
        </p>

        {/* Role of Medication in Masking the Results */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Role of Medication in Masking the Results
        </h3>

        <p>Lokesh had been prescribed:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Finasteride 1 mg daily</li>
          <li>High-strength minoxidil applications</li>
        </ul>

        <p>Impact of this approach:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Medication increased temporary thickness</li>
          <li>Density appeared better than it actually was</li>
          <li>Surgical flaws were hidden</li>
        </ul>

        <p>Once medication was stopped:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Density reduced</li>
          <li>Hairline defects became evident</li>
          <li>Poor graft placement was clearly visible</li>
        </ul>

        <p>
          This case highlights that medication should support a transplant, not
          mask surgical errors.
        </p>

        {/* View - already handled by table */}

        {/* Repair Hair Transplant Planning At Satyaskinhair */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Repair Hair Transplant Planning At Satyaskinhair
        </h3>

        <p>
          The repair strategy focused on long-term stability rather than
          short-term cosmetic improvement.
        </p>

        <p>Key planning principles:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Reduce dependency on medication</li>
          <li>Reassess true hair loss pattern</li>
          <li>Preserve donor area for future needs</li>
          <li>Redesign hairline conservatively</li>
        </ul>

        <p>
          Medication was reduced to a minimal weekly dose to allow realistic
          assessment and sustainable results.
        </p>

        {/* Hairline Redesign Strategy at Satya */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Hairline Redesign Strategy at Satya
        </h3>

        <p>The new hairline was planned considering:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Lokesh’s age</li>
          <li>Current pattern of hair loss</li>
          <li>Expected future progression</li>
          <li>Natural facial proportions</li>
        </ul>

        <p>Instead of recreating a low hairline, the design aimed for:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Natural appearance</li>
          <li>Age-appropriate density</li>
          <li>Long-term aesthetic balance</li>
        </ul>

        {/* Surgical Technique Used: MHT (FUT + FUE) */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Surgical Technique Used: MHT (FUT + FUE)
        </h3>

        <p>
          Lokesh underwent two repair hair transplant surgeries using the MHT
          (Maximum Harvest Technique).
        </p>

        <p>Surgical details:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>First surgery: 2700 grafts</li>
          <li>Second surgery: 3400 grafts</li>
          <li>Combination of FUT and FUE techniques</li>
        </ul>

        <p>Key steps involved:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Extraction of wrongly placed grafts</li>
          <li>Reuse of viable grafts where possible</li>
          <li>Strategic harvesting from the safe donor zone</li>
        </ul>

        {/* Why FUT Was Necessary in This Repair Case */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Why FUT Was Necessary in This Repair Case?
        </h3>

        <p>
          FUT played a critical role in achieving a safe and sustainable repair.
        </p>

        <p>Advantages of using FUT:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Higher graft yield compared to FUE alone</li>
          <li>Better access to the safe donor zone</li>
          <li>Reduced risk of donor overharvesting</li>
          <li>Preservation of donor density</li>
        </ul>

        <p>Trichophytic closure was used to ensure:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Minimal scarring</li>
          <li>Fine linear scar</li>
          <li>Donor area remained cosmetically acceptable</li>
        </ul>

        <p>
          FUE alone would have increased the risk of donor depletion in this
          case.
        </p>

        {/* ================= TABLE ================= */}
        <section className="px-4 sm:px-6 pb-16">
          <div className=" bg-white/40 rounded-3xl ">
            <h3 className="text-2xl font-semibold text-center lg:mb-4">
              Lokesh’s Progress & Results
            </h3>
            <p className="mb-8 text-center sm:hidden block text-xs">
              Click on the images to view full size
            </p>
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

        {/* Results and Improvements */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Results and Improvements
        </h3>

        <p>Post-repair outcomes included:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Improved hairline shape</li>
          <li>Correct graft direction and flow</li>
          <li>Better facial harmony</li>
          <li>Stable appearance even with reduced medication</li>
        </ul>

        <p>Donor area assessment showed:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>No visible thinning</li>
          <li>No patchy extraction marks</li>
          <li>Healthy donor density</li>
        </ul>

        <p>
          The repair transplant provided a stable result without heavy reliance
          on medication.
        </p>

        {/* Key Learnings from This Case */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Key Learnings from This Case
        </h3>

        <p>This repair hair transplant case highlights important lessons:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Poor surgery cannot be fixed by medication alone</li>
          <li>Hairline design must account for future hair loss</li>
          <li>Repair transplants require advanced surgical expertise</li>
          <li>Donor preservation is critical in every case</li>
          <li>Transparency about medication is essential</li>
        </ul>

        {/* Conclusion */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">Conclusion</h3>

        <p>
          Lokesh Lohia's experience with a hair transplant repair highlights how
          poor planning and overuse of medications can result in long-term
          disappointment. A hair transplant repair is not simply about adding
          more grafts, but rather about fixing errors and preserving future
          treatment possibilities.
        </p>

        <p>
          Through thoughtful planning, the right choice of techniques, and a
          cautious approach, a previously failed hair transplant can be
          corrected to deliver a stable and natural-looking outcome.
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

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">FAQs</h3>

        <div className="space-y-4">
          <div>
            <p>
              <strong>What is a Repair Hair Transplant?</strong>
            </p>
            <p>
              A Repair Hair Transplant is a procedure performed on patients who
              are unhappy with their previous hair transplants. It addresses
              issues such as poor design, incorrect angles, or improper use of
              the donor area.
            </p>
          </div>

          <div>
            <p>
              <strong>What is MHT (Maximum Harvest Technique)?</strong>
            </p>
            <p>
              MHT is a method that combines FUE and FUT hair transplant
              techniques to safely extract a larger number of grafts from the
              donor area while keeping scarring to a minimum.
            </p>
          </div>

          <div>
            <p>
              <strong>Why use DSFT?</strong>
            </p>
            <p>
              DSFT, or Direct Stimulation Follicular Transplant, helps stimulate
              the grafts during the implantation process, leading to a 97% graft
              survival rate and quicker hair growth.
            </p>
          </div>

          <div>
            <p>
              <strong>What is the Min-Med Approach?</strong>
            </p>
            <p>
              The Min-Med Approach is a proprietary method developed by Dr.
              Satya that uses a low or no dose of Finasteride, helping to
              protect the patient's long-term health.
            </p>
          </div>

          <div>
            <p>
              <strong>Can repair transplants look natural?</strong>
            </p>
            <p>
              Yes, a natural appearance can be achieved through proper
              angulation, careful planning of density, and conservation of the
              donor area, as demonstrated in Lokesh’s case.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
