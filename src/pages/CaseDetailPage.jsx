import { useEffect } from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

export default function CaseDetailPage() {
  /* ===============================
     SEO
  =============================== */
  useEffect(() => {
    document.title =
      "2 Brother Hair Transplant Result | Advance FUE Hair Transplant (DSFT)";

    const metaDescription = document.querySelector(
      "meta[name='description']"
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover Prakhar’s real FUE Hair Transplant journey at Satya. how DSFT, minimal medicine, and balanced planning delivered natural, long-lasting Hair Transplant results without donor damage."
      );
    }
  }, []);

  return (
    <div className="bg-[#FFF8EF] text-[#2B333C] min-h-screen pb-32">
      {/* ===============================
         HERO
      =============================== */}
      <section className="pt-28 px-6 max-w-6xl mx-auto">
        <p className="uppercase tracking-[3px] text-sm text-[#9E4A47] mb-3">
          Case Study
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
          2 Brother Hair Transplant Result
        </h1>

        <h2 className="text-xl md:text-2xl text-[#9E4A47] font-medium mb-8">
          Advance FUE Hair Transplant (DSFT)
        </h2>

        <p className="text-[#828D9C] text-lg max-w-4xl leading-relaxed mb-12">
          How the Right Technique Outperformed Double Grafts and Half Price
          Promises
        </p>

        {/* META INFO */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm border-y border-[#DFDFDD] py-6 mb-16">
          <div>
            <p className="text-[#9E4A47] font-medium">Client</p>
            <p>Prakhar</p>
          </div>
          <div>
            <p className="text-[#9E4A47] font-medium">Occupation</p>
            <p>Businessman</p>
          </div>
          <div>
            <p className="text-[#9E4A47] font-medium">Treatment</p>
            <p>Hair Transplant</p>
          </div>
          <div>
            <p className="text-[#9E4A47] font-medium">Clinic Branch</p>
            <p>Sector 28, Gurugram</p>
          </div>
          <div>
            <p className="text-[#9E4A47] font-medium">Year</p>
            <p>2024</p>
          </div>
          <div>
            <p className="text-[#9E4A47] font-medium">Hair Transplant Surgeon</p>
            <p>Dr Shail Gupta</p>
          </div>
        </div>
      </section>

      {/* ===============================
         YOUTUBE VIDEO
      =============================== */}
      <section className="px-6 mb-24">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Fsi5_On4q_8"
              title="Prakhar Hair Transplant Result"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ===============================
         CONTENT
      =============================== */}
      <section className="max-w-4xl mx-auto px-6 space-y-8 text-[#828D9C] text-lg leading-relaxed">
        <p>
          Hair loss often runs in families, and when two brothers experience the
          same pattern of thinning, most people assume the outcome will also be
          the same. Prakhar’s journey proves otherwise. His story highlights a
          reality that many patients discover too late.
        </p>

        <p>
          In hair transplantation, cheaper packages, higher graft numbers, and
          aggressive medication do not guarantee lasting results. Planning,
          technique, and respect for the body matter far more.
        </p>

        <p>
          Prakhar came to Satya Skin & Hair Solutions after closely observing his
          own brother’s experience. What he saw made him pause and rethink every
          shortcut that is aggressively marketed in the hair transplant
          industry.
        </p>

        <h3 className="text-2xl font-semibold text-[#2B333C]">
          The Shortcut Trap
        </h3>

        <p>
          Prakhar’s brother chose a clinic that promised double grafts at almost
          half the price. The offer sounded irresistible. A high graft count was
          combined with strong doses of medication to create rapid, dense looking
          results. In the first few months, the outcome appeared impressive.
          Friends complimented him, and the decision felt validated.
        </p>

        <p>
          Within a year, reality surfaced. The density began to thin as medication
          support fluctuated. Side effects from prolonged drug use started to
          show. More importantly, the donor area told a worrying story.
          Overharvesting had left it visibly depleted, limiting future correction
          options. What looked like a financial savings eventually turned into
          stress, disappointment, and irreversible donor loss.
        </p>

        <p>
          Watching this unfold, Prakhar realized that the real cost of a hair
          transplant is not measured on the day of surgery, but years later.
        </p>

        <h3 className="text-2xl font-semibold text-[#2B333C]">
          Choosing the Satya
        </h3>

        <p>
          Prakhar decided to consult Dr Shail Gupta, known for his ethical and
          health first philosophy. From the first interaction, the focus was not
          on selling graft numbers or fast results. Instead, the consultation
          revolved around donor safety, long term planning, and how much medicine
          the body actually needs.
        </p>

        <p>
          Dr Shail follows the Min Med Approach, where medicine is either avoided
          or prescribed in the smallest effective dose. In Prakhar’s case, the
          requirement was limited to around one to one and a half milligrams per
          week. The emphasis was clear. The surgery must deliver the result, not
          the medication.
        </p>

        <h3 className="text-2xl font-semibold text-[#2B333C]">
          DSFT and the Balanced Hair Transplant Philosophy
        </h3>

        <p>
          Prakhar’s procedure was planned using DSFT or Direct Stimulated
          Follicular Transplant. This technique focuses on gentle extraction,
          precise graft handling, and correct angulation to improve graft
          survival and natural growth patterns. At Satya, DSFT consistently
          delivers a graft survival rate that exceeds ninety seven percent when
          performed under proper protocols.
        </p>

        <p>
          Rather than chasing maximum graft numbers, Dr Shail designed a Balanced
          Hair Transplant. This philosophy prioritizes artistic hairline design,
          uniform density distribution, and strict donor conservation. Every
          graft is placed with a long term view in mind, ensuring that the scalp
          looks natural not only today, but years down the line.
        </p>

        <p>
          The approach delivers three crucial outcomes that matter most to
          patients. A natural look that does not reveal surgery. A preserved
          donor that remains healthy for future needs. Long term results that do
          not collapse when medicine is reduced or stopped.
        </p>
      </section>

      {/* ===============================
         IMAGE SLIDER (REFERENCE STYLE)
      =============================== */}
      <section className="mt-28 px-6">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-2xl font-semibold text-[#2B333C] mb-10 text-center">
      Prakhar’s Progress & Results
    </h3>

    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
      {/* MAIN IMAGE */}
      <div className="rounded-2xl overflow-hidden mb-6">
        <img
          src={assets.prakhar}
          alt="Prakhar Hair Transplant Result"
          className="w-full h-auto"
        />
      </div>

      {/* SUPPORTING IMAGES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="rounded-xl overflow-hidden border border-[#FCEBDE]">
          <img
            src={assets.prakhar1}
            alt="Prakhar Hair Transplant Progress 1"
            className="w-full h-auto"
          />
        </div>

        <div className="rounded-xl overflow-hidden border border-[#FCEBDE]">
          <img
            src={assets.prakhar2}
            alt="Prakhar Hair Transplant Progress 2"
            className="w-full h-auto"
          />
        </div>

        <div className="rounded-xl overflow-hidden border border-[#FCEBDE]">
          <img
            src={assets.prakhar3}
            alt="Prakhar Hair Transplant Progress 3"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ===============================
         FINAL CONTENT + FAQ
      =============================== */}
      <section className="max-w-4xl mx-auto px-6 mt-28 space-y-8 text-[#828D9C] text-lg leading-relaxed">
        <h3 className="text-2xl font-semibold text-[#2B333C]">
          The Result One Year Later
        </h3>

        <p>
          At the twelve month mark, the difference between the two brothers became
          striking. Prakhar’s hair looked stable, dense, and completely natural.
          The growth came from strong, well placed follicles rather than
          temporary pharmaceutical stimulation. His donor area remained intact,
          allowing flexibility for the future if ever needed.
        </p>

        <p>
          In contrast, his brother’s initial density continued to fluctuate with
          medication use. Areas of thinning became more noticeable, and donor
          correction options were limited due to earlier overharvesting. What was
          once seen as a smart bargain now looked like a compromised decision.
        </p>

        <p>
          Prakhar did not just regain hair. He regained confidence without
          sacrificing health.
        </p>

        <h3 className="text-2xl font-semibold text-[#2B333C]">
          The Core Lesson
        </h3>

        <p>
          Prakhar’s story reinforces an essential truth. Hair transplants are not
          about finding the cheapest deal or the highest graft count. They are
          about planning, precision, and preservation. Shortcuts may deliver fast
          visuals, but only skill delivers longevity.
        </p>

        <p>
          As Dr Shail Gupta often explains to patients, you should pay for the
          surgeon’s expertise, not for pills that create temporary illusions.
        </p>

        <h3 className="text-2xl font-semibold text-[#2B333C]">
          Why Satya Skin and Hair Solutions Stands Apart
        </h3>

        <p>
          Satya’s philosophy is built on technique over tactics. DSFT ensures high
          graft survival with minimal trauma. The Balanced Hair Transplant
          approach protects the donor while delivering natural density. The Min
          Med philosophy keeps patient health at the center of every decision.
          For complex cases, advanced planning methods like Maximum Harvest
          Technique are available without compromising safety.
        </p>

        <p>
          Every recommendation is customized, transparent, and rooted in long
          term outcomes rather than short term marketing.
        </p>

        <p>
          If you are considering a hair transplant, look beyond discounts and
          dramatic promises. Choose a clinic that values skill, safety, and
          sustainability.
        </p>

        <p>
          Visit Satya Skin and Hair Solutions at DLF Phase 4, Gurgaon.
          <br />
          Call +91 9910094945 or explore more at
          satyaskinhairsolutions.com.
        </p>

        <p className="font-medium">
          Real results are built with planning, not shortcuts.
        </p>

        <h3 className="text-2xl font-semibold text-[#2B333C]">
          Frequently Asked Questions
        </h3>

        <p>
          <strong>Why did Prakhar’s results last longer</strong>
          <br />
          Because his growth came from real, well planned follicular grafts
          rather than heavy medication driven stimulation.
        </p>

        <p>
          <strong>Can medicine alone replace surgery</strong>
          <br />
          Medicine can slow hair loss or temporarily improve appearance, but it
          cannot permanently restore lost hair.
        </p>

        <p>
          <strong>What is the ideal medicine dose after a transplant</strong>
          <br />
          There is no fixed number. At Satya, it is customized and often kept
          minimal or avoided entirely depending on the patient.
        </p>
      </section>
    </div>
  );
}
