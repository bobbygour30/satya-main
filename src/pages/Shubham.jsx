import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import assets from "../assets/assets";

export default function Shubham() {
  /* ================= BEFORE / AFTER ================= */
  const [mode, setMode] = useState(0); // 0: before, 1: after
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeImages = [
    assets.shubham4,
    assets.shubhamLeftViewBeforeSurgery,
    assets.shubhamRightViewBeforeSurgery,
    assets.shubhamBackViewBeforeSurgery,
  ];

  const afterImages = [
    assets.shubham3,
    assets.shubhamLeftView15Year,
    assets.shubhamRightView7Months2,
    assets.shubhamBackView15Year,
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
      "Shubham’s Corrective Hair Transplant – The Science Behind Real, Sustainable Results | Satya Skin & Hair";
  }, []);

  /* ================= TABLE DATA ================= */
  const rows = [
    {
      label: "Before 1st Surgery",
      images: [
        assets.shubhamFrontViewBeforeSurgery,
        assets.shubhamLeftViewBeforeSurgery,
        assets.shubhamRightViewBeforeSurgery,
        assets.shubhamBackViewBeforeSurgery,
      ],
    },
    {
      label: "Immediate 1st Surgery",
      images: [
        assets.shubhamFrontViewImmediate,
        assets.shubhamLeftViewImmediate,
        assets.shubhamRightView2Weeks,
        assets.shubhamBackViewImmediate,
      ],
    },
    {
      label: "6 Months Post 1st Surgery",
      images: [
        assets.shubhamFrontView5Month,
        assets.shubhamLeftView5Month,
        assets.shubhamRightView5Month,
        assets.shubhamBackView5Month,
      ],
    },
    {
      label: "Immediate 2nd Surgery",
      images: [
        assets.shubhamFrontView7Months1,
        assets.shubhamLeftView1Year,
        assets.shubhamRightView7Months1,
        assets.shubhamBackView1Year,
      ],
    },
    {
      label: "7 Month Post 2nd Surgery",
      images: [
        assets.shubhamFrontView7Months2,
        assets.shubhamLeftView15Year,
        assets.shubhamRightView7Months2,
        assets.shubhamBackView15Year,
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
        <p className="text-lg font-semibold text-[#2B333C]">Shubham</p>
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
                      Shubham Kumar
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Total Grafts Implanted</span>
                    <span className="block mt-1">
                      <span className="font-medium text-white">5000 grafts</span>
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Technique Used</span>
                    <span className="block mt-1 text-white">
                      MHT{" "}
                      <span className="text-white/50">
                        (FUT + FUE + Beard)
                      </span>
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Medication Protocol</span>
                    <span className="block mt-1 text-white">
                      Finasteride 2mg/week
                    </span>
                  </p>

                  <p className="leading-relaxed">
                    <span className="text-white/70">Changed Medication (18 Feb 2025)</span>
                    <span className="block mt-1 text-white">
                      Finasteride 2mg/week + Dutasteride 0.5mg/week + HA + Tricosphire serum
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
          “Shubham’s Repair Hair Transplant , The Science Behind Real, Sustainable Results”
        </h1>

        <p>
          Repair hair transplant cases are some of the most complicated procedures in hair transplantation. They entail correcting surgical errors from previous hair transplants while dealing with a depleted donor site and hair loss. 
        </p>

        <p>
          This case study illustrates Shubham’s repair hair transplant experience following a totally failed first procedure and how proper technique choice and reduced medication resulted in stable and natural outcomes.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Background: Totally Failed Hair Transplant
        </h3>

        <p>
          Shubham had already undergone a hair transplant procedure at another center.
        </p>

        <p><strong>Initially:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>The hair transplant procedure seemed satisfactory</li>
          <li>The results were backed by full doses of medicines</li>
        </ul>

        <p><strong>Later:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>There was massive hair loss in the non-transplanted areas</li>
          <li>There were visible gaps in the transplanted area</li>
          <li>The density was irregular and unnatural</li>
        </ul>

        <p>
          What initially seemed like a success story turned out to be a totally failed hair transplant procedure.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Problems Identified During Evaluation
        </h3>

        <p>
          The following critical problems were identified during the evaluation:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Poor graft survival in the transplanted area</li>
          <li>Gaps between the transplanted grafts</li>
          <li>Hair loss in the non-transplanted areas</li>
          <li>The donor area was already compromised</li>
          <li>Multigrafts were selectively harvested (cherry-picked)</li>
          <li>Single hair grafts were left behind, leaving no options for the future</li>
        </ul>

        <p>
          This makes Shubham a high-risk patient for undergoing repeat surgery if not planned properly.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Why Repeat FUE Alone Would Have Failed
        </h3>

        <p>
          Many clinics recommended that Shubham undergo another FUE procedure.
          However, this would have been a bad idea because:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>The donor area is already depleted</li>
          <li>Another FUE procedure would accentuate the donor thinning</li>
          <li>The number of grafts is limited and cannot be used to cover the front, mid-scalp, and top of the head simultaneously</li>
          <li>The long-term donor area safety would be jeopardized</li>
        </ul>

        <p>
          In this particular situation, another FUE alone would have further exacerbated the problem rather than solving it.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Corrective Hair Transplant Planning
        </h3>

        <p>The corrective plan involved:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Maximizing graft harvest</li>
          <li>Preserving existing donor hair</li>
          <li>Closing density deficiencies on the scalp</li>
          <li>Decreasing reliance on medical treatments</li>
        </ul>

        <p>
          The goal was not immediate aesthetic correction but rather long-term stability.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Surgical Methodology Used: MHT (FUT + FUE + Beard)
        </h3>

        <p>
          Shubham underwent a corrective hair transplant procedure utilizing the MHT method, which incorporates:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>FUT for large graft procurement from the secure donor area</li>
          <li>FUE for strategic harvesting, if needed</li>
          <li>Body hair transplant (beard grafts) to complement the scalp donor area</li>
        </ul>

        <p>
          This enabled the team to cover:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Front area</li>
          <li>Mid-scalp area</li>
          <li>Crown area</li>
        </ul>

        <p>
          All three areas were treated as part of a single, carefully planned corrective strategy.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          FUT Scar Reality in This Case
        </h3>

        <p>
          One of the major apprehensions of patients is the possibility of the FUT scar being noticeable.
          In Shubham’s situation:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>The FUT scar was minimal</li>
          <li>There were no visible incision lines</li>
          <li>The scar was hidden even when the hair was short</li>
        </ul>

        <p>
          This shows that when done properly, the FUT scar is not a restrictive factor in corrective hair transplant procedures.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Medication Protocol: Minimal and Scientific
        </h3>

        <p>
          Another characteristic feature of this case is the medication protocol.
          Medications prescribed to Shubham are:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Almost one-fourth of the usual prescribed doses</li>
          <li>Only USFDA-approved doses of finasteride and minoxidil</li>
        </ul>

        <p><strong>Advantages of this protocol:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Less systemic dependency</li>
          <li>Surgical results are easily visible</li>
          <li>Long-term hair and scalp health is better</li>
        </ul>

        <p>
          This again emphasized that medications should complement surgery, not mask poor surgical skills.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Results and Outcome
        </h3>

        <p>
          After the repair, the following results were obtained:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Increased density in the front, mid-scalp, and crown regions</li>
          <li>Enhanced grafting distribution and flow</li>
          <li>Stabilized hair loss with minimal medication</li>
          <li>Maintained donor area appearance</li>
        </ul>

        <p>
          The corrective hair transplant achieved balance rather than pursuing artificial density.
        </p>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">
          Key Learnings from This Repair Hair Transplant Case
        </h3>

        <ul className="list-disc pl-6 space-y-1">
          <li>Failed hair transplants may initially appear satisfactory because of medication</li>
          <li>Donor area mismanagement leads to long-term constraints</li>
          <li>Repeat FUE is not indicated in all repair situations</li>
          <li>FUT, FUE, and body hair transplant may salvage difficult cases</li>
          <li>Minimal finasteride may be adequate if surgical planning is optimal</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0E3A43]">Conclusion</h3>

        <p>
          Shubham’s case illustrates that the success of repair hair transplant surgery relies on proper diagnosis, surgical technique, and honest planning. A failed transplant procedure cannot be corrected by doing the same thing again and again, which is just a mistake.
        </p>

        <p>
          This case reiterates that repair hair transplant surgery is a surgical specialty based on science, art, and honest intentions, and not on aggressive grafting or excessive medication.
        </p>

        {/* ================= TABLE ================= */}
        <section className="px-4 sm:px-6 pb-16">
          <div className=" bg-white/40 rounded-3xl ">
            <h3 className="text-2xl font-semibold text-center lg:mb-4">
              Shubham’s Progress & Results
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
            Shubham’s case proves that truthful science and skilled hands can
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