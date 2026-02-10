import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import assets from "../assets/assets";

export default function Gopal() {
  /* ================= BEFORE / AFTER ================= */
  const [mode, setMode] = useState(0); // 0: before, 1: after
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeImages = [
    assets.gopalFrontViewBeforeSurgery,
    assets.gopalLeftViewBeforeSurgery,
        assets.gopalRightViewBeforeSurgery,
        assets.gopalBackViewBeforeSurgery,
  ];

  const afterImages = [
    assets.gopal,
    assets.gopalLeftView15Year,
        assets.gopalRightView15Year,  
        assets.gopalBackView15Year,
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
  };

  const switchToAfter = () => {
    setMode(1);
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
      "Gopal’s Hair Transplant Journey – Conservative Approach for Lasting Results | Satya Skin & Hair";
  }, []);

  /* ================= TABLE DATA ================= */
  const rows = [
    {
      label: "Before Surgery",
      images: [
        assets.gopalFrontViewBeforeSurgery,
        assets.gopalLeftViewBeforeSurgery,
        assets.gopalRightViewBeforeSurgery,
        assets.gopalBackViewBeforeSurgery,
      ],
    },
    {
      label: "8 Months Post Surgery",
      images: [
        assets.gopalFrontView8Month,
        assets.gopalLeftView8Month,
        assets.gopalRightView8Month,
        assets.gopalBackView8Month,
      ],
    },
    {
      label: "1.5 Year Post Surgery",
      images: [
        assets.gopal,
        assets.gopalLeftView15Year,
        assets.gopalRightView15Year,  
        assets.gopalBackView15Year,
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
        <p className="text-lg font-semibold text-[#2B333C]">Gopal</p>
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

            {/* CONTENT SIDE - Updated like Lokesh */}
            <div className="bg-[#2B333C] text-white px-6 sm:px-10 lg:px-14 py-12 flex items-center">
              <div className="max-w-5xl space-y-6">
                

                {/* Divider */}
                <div className="w-24 h-[2px] bg-[#9E4A47]" />

                {/* Details */}
                <div className="grid gap-4 sm:gap-6 text-sm sm:text-base">
                  <p className="leading-relaxed">
                    <span className="text-white/70">Patient Name</span>
                    <span className="block text-lg sm:text-xl font-medium mt-1">
                      Gopal Krishna
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Location</span>
                    <span className="block text-lg sm:text-xl font-medium mt-1">
                      Canada
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Hair Loss Grade</span>
                    <span className="block text-lg sm:text-xl font-medium mt-1">
                      Grade 3 (Frontal Hairline)
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Total Grafts Implanted</span>
                    <span className="block mt-1">
                      <span className="font-medium text-white">2000 grafts</span>
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Technique Used</span>
                    <span className="block mt-1 text-white">
                      FUE using DSFT
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Medication Protocol</span>
                    <span className="block mt-1 text-white">
                      Finasteride 2mg/week
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Area Treated</span>
                    <span className="block mt-1 text-white">
                      Frontal hairline zone
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
          Case Study of Hair Transplant | Hair Transplant journey of Gopal Krishna
        </h1>

        <p>
          The hair transplant journey of the individual, Gopal Krishna, is discussed under the case study as the individual is a 27-year-old whose hairline recession is of Grade 3, which was addressed effectively through the conservative use of grafts and limited consumption of medication. 
          The main concern for this case was not just the restoration of hairline density but also maintaining future options while ensuring hair and scalp health.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Background: Early Hairline Recession at a Young Age
        </h3>

        <p>
          Gopal was experiencing:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Grade 3 frontal hairline recession</li>
          <li>Loss primarily limited to the frontal zone</li>
          <li>Early-stage hair loss progression</li>
        </ul>

        <p>
          At this age, hair loss can continue over time, making it essential to avoid overcorrection in the initial surgery.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Conflicting Opinions from Other Clinics
        </h3>

        <p>
          Before choosing Satya, Gopal consulted multiple clinics.
          What was commonly suggested:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>A much lower hairline design</li>
          <li>Use of 3000+ grafts</li>
          <li>Aggressive frontal packing</li>
        </ul>

        <p>
          These approaches focused on immediate visual density but did not adequately address long-term hair loss progression.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Clinical Evaluation and Planning at Satya
        </h3>

        <p>
          At Satya Skin & Hair Solutions, the evaluation focused on the hair loss journey, not just the current appearance.
          Key planning principles:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Preserve donor area for future needs</li>
          <li>Avoid an artificially low hairline</li>
          <li>Match hairline design to age and facial proportions</li>
          <li>Use only the grafts that were truly required</li>
        </ul>

        <p>
          Based on this assessment, a conservative plan was advised.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Surgical Technique Used: DSFT-Based FUE
        </h3>

        <p>
          Gopal underwent a hair transplant using DSFT, the advanced version of FUE.
          Surgical details:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>2000 grafts transplanted</li>
          <li>Grafts placed only in the frontal hairline zone</li>
          <li>Natural angles and direction maintained</li>
          <li>Density planned to age naturally with time</li>
        </ul>

        <p>
          This ensured a balanced and realistic hairline restoration.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Medication Strategy: Minimal and Supportive
        </h3>

        <p>
          Instead of full-dose medication, Gopal was advised:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Finasteride at 2 mg per week only</li>
        </ul>

        <p>Benefits of this approach:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Reduced medication dependency</li>
          <li>Better long-term systemic tolerance</li>
          <li>Results driven mainly by surgical planning</li>
        </ul>

        <p>
          Medication was used as support, not as a substitute for technique.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Results and Outcome
        </h3>

        <p>
          Post-transplant assessment showed:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Natural-looking frontal hairline</li>
          <li>Improved facial balance and confidence</li>
          <li>No signs of overcorrection</li>
          <li>Healthy donor area without visible depletion</li>
        </ul>

        <p>
          The result appeared age-appropriate and sustainable rather than exaggerated.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Why This Approach Worked
        </h3>

        <ul className="list-disc pl-6 space-y-1">
          <li>Conservative graft usage prevented donor overuse</li>
          <li>DSFT ensured high-quality graft placement</li>
          <li>Minimal medication reduced health risks</li>
          <li>Long-term planning protected future hair restoration options</li>
        </ul>

        <p>
          This approach helped Gopal achieve both aesthetic improvement and peace of mind.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Key Learnings from This Hair Transplant Case
        </h3>

        <ul className="list-disc pl-6 space-y-1">
          <li>When we enhance the density of hair transplants among young individuals, we must focus on planning rather than density</li>
          <li>Not all low hairs are beneficial in the future</li>
          <li>Less grafts, used correctly, do better than more grafts,</li>
          <li>The drug should facilitate surgery; it should not compensate for overdesign</li>
          <li>Donor preservation is an important aspect for the management of hair for a lifetime</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">Conclusion</h3>

        <p>
          In the case of Gopal Krishna, it is evident that a hair transplant result is not necessarily defined by the number of grafts used. The hair loss journey, using DSFT-based FUE and medication at a minimum, produced a natural and stable result.
        </p>

        <p>
          This case illustrates the importance of planning and execution, particularly with younger individuals and those experiencing early stages of hair loss.
        </p>

        {/* ================= TABLE ================= */}
        <section className="px-4 sm:px-6 pb-16">
          <div className=" bg-white/40 rounded-3xl ">
            <h3 className="text-2xl font-semibold text-center lg:mb-4">
              Gopal’s Progress & Results
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

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-[#0E3A43]">FAQs</h3>

        <div className="space-y-4">
          <div>
            <p>
              <strong>Q1. What is MHT in hair transplant?</strong>
            </p>
            <p>
              MHT combines FUT, FUE, and body/beard hair extraction for maximum
              grafts while keeping the donor safe and natural.
            </p>
          </div>

          <div>
            <p>
              <strong>Q2. Is FUT scar-free?</strong>
            </p>
            <p>
              With modern trichophytic closure, FUT leaves only a thin,
              near-invisible line.
            </p>
          </div>

          <div>
            <p>
              <strong>
                Q3. How much medicine is necessary post-transplant?
              </strong>
            </p>
            <p>
              At Satya, our Min-Med Approach uses the lowest effective dose —
              only if truly needed.
            </p>
          </div>

          <div>
            <p>
              <strong>Q4. What makes DSFT special?</strong>
            </p>
            <p>
              DSFT (Advanced FUE) enhances graft survival by pre-implant
              stimulation, ensuring stronger and faster growth.
            </p>
          </div>

          <div>
            <p>
              <strong>Q5. Can failed transplants be repaired?</strong>
            </p>
            <p>
              Yes. With correct planning, donor assessment, and balanced
              technique, most failed cases can be successfully restored.
            </p>
          </div>
        </div>

        <div className="text-center py-10 md:py-12">
          <p className="text-xl font-semibold text-[#0E3A43]">
            Gopal’s case proves that truthful science and skilled hands can
            rebuild what shortcuts destroy.
          </p>
          <p className="mt-4 font-medium">
            If your previous transplant failed or you’re worried about long-term
            medicine use, Satya offers a safer, smarter path.
          </p>
        </div>

        <div className="text-center border-t border-[#FCEBDE] pt-10 mt-8">
          <p className="font-semibold">
            📍 Satya Skin & Hair Solutions, DLF Phase 4, Gurgaon
          </p>
          <p className="font-semibold">📞 +91 9910094945</p>
          <p className="mt-2">📸 @drshailgupta | @satyaskinandhair</p>
        </div>
      </section>
    </div>
  );
}