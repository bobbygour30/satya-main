import React from "react";
import assets from "../assets/assets";
import SkinTreatmentGradientBanner from "../components/SkinTreatmentGradientBanner";

const treatments = [
  {
    title: "Carbon Facial",
    image: assets.carbonFacialBanner,
    content:
      "A carbon laser facial is a medical facial that makes the skin look younger and healthier by giving it a bright, healthy glow. It doesn't hurt and doesn't require any downtime. It's good for skin that is oily and prone to acne, as well as skin that is getting older or has been damaged by the sun. Many people call the carbon laser treatment in Delhi by other names, such as China Doll Laser Facial, Hollywood Peel, Black Doll Laser Facial, and Charcoal Black Doll Facial. It's a safe procedure for all skin types that isn't too harsh.",
  },
  {
    title: "Fractional CO2 Laser",
    image: assets.co2FractionalLaserBanner,
    content:
      "Dermatologists all over the world love the fractional carbon dioxide laser because it works well on a lot of skin problems.",
  },
  {
    title: "Laser Hair Removal",
    image: assets.laserHairBanner,
    content:
      "Laser hair removal or laser hair reduction is the most popular treatment at a dermatologist's office. Laser hair reduction is a safe, effective, and long-lasting way to get rid of unwanted hair on any part of the body for both men and women. Dr. Ruchi Agarwal and Dr. Shail Gupta, the founders and top skin specialists at Satya Skin & Hair Clinic, have been using this technology in Delhi for a long time.",
  },
  {
    title: "MNRF",
    image: assets.mnrfBanner,
    content:
      "Micro needling radio frequency (MNRF) is a new treatment that can be used for a number of things, such as acne scars, dull skin, stretch marks, and dark spots. This MNRF treatment uses sterile gold-plated needles to send radio waves through the skin. The micro needles in MNRF make tiny holes in the skin without hurting it, which helps new blood vessels, connective tissue, and collagen to form. This treatment, also known as collagen induction therapy, works wonders for treating the effects of aging on the skin.",
  },
  {
    title: "HIFU",
    image: assets.hifuBanner,
    content:
      "HIFU, or High Intensity Focused Ultrasound is a cosmetic treatment that tightens the skin. It is also known as the  Lunchtime Facelift.  Ultrasound energy is used to make collagen, which helps tighten the skin. HIFU is a very safe and effective way to lift the face and smooth out wrinkles. You can see results after just one session in a few months.",
  },
  {
    title: "Vampire Facelift",
    image: assets.prpBanner,
    content:
      " Vampire facelift  is another name for PRP, which stands for platelet-rich plasma.  PRP is one of the best treatments because it makes the most of nature's natural healing process. In this treatment, the face is hurt in a controlled way using different tools (usually a derma roller, MNRF, fractional laser, or derma pen). Then, platelets (taken from your own blood) are injected into the hurt area, which speeds up healing and causes the skin to make a lot of collagen and elastin. This makes the treatment work and last longer.",
  },
  {
    title: "5 D Facial",
    image: assets.fiveDFacialBanner,
    content:
      "The 5D Skin Revival Facial Treatment at Satya Skin & Hair Clinic in Delhi is a one-of-a-kind and very effective medi-facial. It is a mix of the best skin care technologies.",
  },
  {
    title: "Mesotherapy",
    image: assets.mesotherapyBanner,
    content:
      "Mesotherapy is a treatment that involves surgery. We use injections of vitamins, enzymes, and hormones in this treatment to make skin look younger, tighter, and to get rid of extra fat.",
  },
  {
    title: "Lip Enhancement",
    image: assets.lipEnhancementBanner,
    content:
      "Lip enhancement or augmentation is a procedure that makes the lips fuller. It is a cosmetic procedure that uses injectable fillers to make the lips look fuller or plump. There are many different fillers that can be used, but hyaluronic acid is the most common because it is a natural substance that is already in our bodies.",
  },
  {
    title: "Chemical Peel / Glow Peel",
    image: assets.chemicalPeelBanner,
    content:
      "Chemical peels are lotions, gels, or creams that are slightly acidic and contain one or more active ingredients that help the skin look younger. They are a simple and useful way to keep your skin looking good. The active ingredients in the peel get into your skin and cause the top layers of damaged skin cells to shed in a controlled and even way. This lets new layers show through and makes the skin look new again. Also, it makes new cells and collagen, which makes the skin tone more even. You will see a clear difference in the brightness, clarity, and overall health of your skin after just one session.",
  },
  {
    title: "Dermal Fillers",
    image: assets.dermalFillersBanner,
    content:
      "Dermal fillers are soft tissue fillers that are injected into the skin at different depths to either fill in wrinkles and folds or lift the face. You can also use them to add to certain features and shape the face, like making lips look fuller or giving the chin more definition. They can be used on the upper face, mid face, under-eye area, lower face, and neck. Dermal fillers can make up for areas that are lacking volume. They are made of hyaluronic acid, which is found naturally in the skin, so the procedure is very safe.",
  },
  {
    title: "Mole Removal",
    image: assets.moleRemovalBanner,
    content:
      "People often have moles, which are a type of skin growth. They are little brown spots that are dark. Moles are caused by groups of pigmented cells. Moles usually show up when you're a kid or a teenager. On average, there are 10 to 40 moles, and some of them may fade away, grow bigger, or change color.",
  },
  {
    title: "AFT-SSR",
    image: assets.aftSsrBanner,
    content:
      "AFT-SSR, or Advanced Fluorescent Technology - Selective Spectrum Rejuvenation, is a non-invasive skin rejuvenation treatment that uses light to fix a number of skin problems.",
  },
  {
    title: "PRP Therapy",
    image: assets.prpBanner,
    content:
      "Platelet-Rich Plasma therapy, or the  Vampire Facelift,  is a new treatment that uses the body's natural healing powers to make your skin look younger.",
  },
  {
    title: "Forma Facial",
    image: assets.formaFacialBanner,
    content:
      "Forma is a skin treatment that doesn't hurt and uses heat and radiofrequency to make your skin lift, tighten, and shape. It does this by making collagen in your face. In short, a hot wand rubs your face up and down, making it look like your skin is being ironed. Your face really does look lifted when you're done because your skin is brighter and your jawline is more defined.",
  },
  {
    title: "CLEARLIFT Laser",
    image: assets.clearliftBanner,
    content:
      "CLEARLIFT™ Laser from Alma Lasers is a revolutionary answer to a wide range of skin problems with unmatched accuracy. ClearLift is a fractional, non-ablative laser that doesn't require much downtime and doesn't hurt much. ClearLift makes fine lines, wrinkles, the look of small veins, and redness that comes from vascularity better.",
  },
  {
    title: "ClearSkin Pro",
    image: assets.clearSkinProBanner,
    content:
      "ClearSkin PRO is an FDA-approved, award-winning laser therapy that has great documented results for skin rejuvenation procedures. It has very strong energy emission and is very safe. ClearSkin PRO is a big step forward in therapeutic anti-aging therapies. It can help with wrinkles, lines, tightening pores, and other signs of aging.",
  },
  {
    title: "Botulinum Toxin",
    image: assets.botulinumToxinBanner,
    content:
      "By relaxing the muscles that make wrinkles, injections help to get rid of them. People also use these kinds of shots to treat medical problems like hyperhidrosis, migraines, an overactive bladder, and eye problems. To keep the results, treatments should be done again every three to six months.",
  },
  {
    title: "Skin Polishing / Microdermabrasion",
    image: assets.skinPolishingBanner,
    content:
      "Pixel Er laser is the newest type of Erbium fractional laser. It has both the fractional technology and the ablative effect of the Erbium YAG laser. Micro-ablative columns of laser go deep into the skin and cause controlled damage below the surface.",
  },
  {
    title: "IPL Photofacial",
    image: assets.iplPhotofacialBanner,
    content:
      "Satyaskinhair “ offers a rejuvenation experience that goes deeper than the surface, giving you skin that looks young and healthy. IPL Photofacial will make your skin look better! An IPL Photofacial is short for Intense Pulsed Light Photorejuvenation.",
  },
  {
    title: "Laser Toning / Peel",
    image: assets.laserToningBanner,
    content:
      "Pixel Er laser is the newest type of Erbium fractional laser. It combines the fractional technology with the ablative effect of the Erbium YAG laser. Micro-ablative columns of laser go deep into the skin and cause a controlled injury below the surface.",
  },
];

const SkinTreatment = () => {
 return (
    <section className="bg-white">
      <SkinTreatmentGradientBanner />

      <div className="divide-y divide-gray-100">
        {treatments.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="flex flex-col md:grid md:grid-cols-2">
              {/* Image container - responsive with object-contain, no cropping */}
              <div
                className={`bg-gray-50/50 flex ${
  isEven ? "order-1 md:order-1" : "order-1 md:order-2"
}`}

              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain md:object-fill"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>

              {/* Content - tight on mobile, full visibility */}
              <div
                className={`flex flex-col justify-center
  ${isEven ? "order-2 md:order-2" : "order-2 md:order-1"}
  p-5 sm:p-6 lg:p-10 xl:p-12
  ${
    isEven
      ? "bg-gradient-to-br from-[#fdfaf5] via-[#fffefb] to-white text-[#0E3A43]"
      : "bg-gradient-to-br from-[#0f1a24] via-[#14212b] to-[#1a252c] text-gray-100"
  }`}

              >
                <div className="">
                  <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-gray-500">
                    SATYA
                  </p>

                  <h3 className="text-xl sm:text-2xl  lg:text-4xl font-bold leading-tight">
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-base md:text-sm lg:text-base  leading-relaxed ${
                      isEven ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {item.content}
                  </p>

                  <button
  className={`mt-4 
  px-4 py-2 
  text-xs 
  sm:px-4 sm:py-2 sm:text-sm 
  lg:px-6 lg:py-3 lg:text-base
  font-medium uppercase tracking-wider rounded-full 
  transition-all duration-300 shadow-sm hover:shadow-md 
  transform hover:-translate-y-0.5 ${
    isEven
      ? "bg-[#9E4A47] text-white hover:bg-[#843532]"
      : "bg-gray-700 text-white hover:bg-gray-600"
  }`}
>
  Learn More
</button>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkinTreatment;