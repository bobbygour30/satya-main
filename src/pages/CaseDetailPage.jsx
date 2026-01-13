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
    <div className="bg-[#1a1f26] text-white min-h-screen pb-24">
      {/* ===============================
         HERO
      =============================== */}
      <section className="pt-24 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-serif text-4xl md:text-6xl mb-6"
        >
          2 Brother Hair Transplant Result <br />
          <span className="text-[#ffede0] italic">
            Advance FUE Hair Transplant (DSFT)
          </span>
        </motion.h1>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          Discover Prakhar’s real FUE Hair Transplant journey at Satya. how DSFT,
          minimal medicine, and balanced planning delivered natural, long-lasting
          Hair Transplant results without donor damage.
        </p>
      </section>

      {/* ===============================
         IMAGE
      =============================== */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-20 px-6"
      >
        <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src={assets.prakhar}
            alt="Prakhar Hair Transplant Result"
            className="w-full h-[620px] object-contain bg-black"
          />
        </div>
      </motion.section>

      {/* ===============================
         CONTENT
      =============================== */}
      <section className="max-w-4xl mx-auto px-6 mt-24 space-y-12 text-gray-300 leading-relaxed text-lg">
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

        <h2 className="font-serif text-3xl text-[#ffede0]">
          The Shortcut Trap
        </h2>

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

        <h2 className="font-serif text-3xl text-[#ffede0]">
          Choosing the Satya
        </h2>

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

        <h2 className="font-serif text-3xl text-[#ffede0]">
          DSFT and the Balanced Hair Transplant Philosophy
        </h2>

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
          uniform density distribution, and strict donor conservation.
        </p>

        <p>
          The approach delivers three crucial outcomes that matter most to
          patients. A natural look that does not reveal surgery. A preserved
          donor that remains healthy for future needs. Long term results that do
          not collapse when medicine is reduced or stopped.
        </p>

        <h2 className="font-serif text-3xl text-[#ffede0]">
          The Result One Year Later
        </h2>

        <p>
          At the twelve month mark, the difference between the two brothers
          became striking. Prakhar’s hair looked stable, dense, and completely
          natural.
        </p>

        <p>
          His donor area remained intact, allowing flexibility for the future if
          ever needed.
        </p>

        <p>
          Prakhar did not just regain hair. He regained confidence without
          sacrificing health.
        </p>

        <h2 className="font-serif text-3xl text-[#ffede0]">
          The Core Lesson
        </h2>

        <p>
          Hair transplants are not about finding the cheapest deal or the highest
          graft count. They are about planning, precision, and preservation.
        </p>

        <h2 className="font-serif text-3xl text-[#ffede0]">
          Why Satya Skin and Hair Solutions Stands Apart
        </h2>

        <p>
          Satya’s philosophy is built on technique over tactics. DSFT ensures
          high graft survival with minimal trauma. The Balanced Hair Transplant
          approach protects the donor while delivering natural density.
        </p>

        <p>
          Visit Satya Skin and Hair Solutions at DLF Phase 4, Gurgaon.
          <br />
          Call +91 9910094945 or explore more at
          satyaskinhairsolutions.com.
        </p>

        <h2 className="font-serif text-3xl text-[#ffede0]">
          Frequently Asked Questions
        </h2>

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
