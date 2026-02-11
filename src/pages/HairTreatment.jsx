import React from "react";
import assets from "../assets/assets";




const treatments = [
  {
    title: "FUT",
    image: assets.futBanner,
    content:
      "FUT is a hair transplant procedure in which we take out hair from the back of a patient’s scalp & put it in the bald areas. The surgeon cuts a strip of skin from the back of your scalp; the gap is stitched using the trichophytic closure technique",
  },
  {
    title: "FUE",
    image: assets.fueBanner,
    content:
      "FUE is a hair transplant procedure in which we take out hair from the back of a patient’s scalp & put it in the bald areas. The surgeon cuts a strip of skin from the back of your scalp; the gap is stitched using the trichophytic closure technique",
  },
  {
    title: "MHT",
    image: assets.mht,
    content:
      "Among these pioneering techniques stands the Maximum Harvesting Technique (MHT), a brilliant fusion of the traditional Follicular Unit Transplantation (FUT) and the modern Follicular Unit Extraction (FUE) methods.",
  },
  {
    title: "Balanced Hair Transplant",
    image: assets.balanced,
    content:
      "Satya, as a leader and pioneer in providing honest hair restoration solutions, which has formulated an authentic and strategic plan called Balanced Hair TransplantTM. This approach comprehends minimal use of medications, thereby reducing the risk of side effects and providing a safe buffer to increase dosages in case of tolerance development.",
  },
  {
    title: "Eyebrow Restoration",
    image: assets.eyebrowBanner,
    content:
      "Eyebrow Hair Transplant in Delhi is essential to facial aesthetics since they frame our eyes and make us seem better overall. With people aiming for bigger, more defined brows, the demand for eyebrow restoration has increased recently. While some people are endowed with naturally full and thick brows, others may have thin or sparse brows for a variety of reasons.",
  },
    //   {
    //     title: "Beard Restoration",
    //     image: beardImg,
    //     content:
    //       "At Satya Hair Solutions, we understand that a full, well-groomed beard can speak volumes. Whether you aim to enhance your existing beard, fill in patchy areas, or create a brand-new beard, our beard hair transplant services are tailored to your unique needs. Led by Dr. Shail Gupta, India’s best hair transplant surgeon, our team specializes in transforming",
    //   },
    //   {
    //     title: "Synthetic Hair Transplant",
    //     image: syntheticImg,
    //     content:
    //       "A lot of advancement has been made in the medical and surgical restoration of natural hair, but there are some special cases where these techniques fail to provide an adequate solution. Synthetic hair transplants help to bridge this gap by providing quick, effective, and natural-looking results in patients with advanced grades of baldness or poor donor",
    //   },
    //   {
    //     title: "Long Hair Transplant",
    //     image: longHairImg,
    //     content:
    //       "The unique technique employed is Follicular Unit Transplantation (FUT). Unlike traditional hair transplants where the donor area is shaved, in long hair transplants, neither the donor area nor the area where the grafts are to be implanted is shaved. This preservation of your existing hair allows you to maintain your original hairstyle.",
    //   },
    //   {
    //     title: "Body Hair Transplant",
    //     image: bodyHairImg,
    //     content:
    //       "Hair loss and baldness can be deeply distressing, impacting one’s self-esteem and overall confidence. In the field of hair restoration surgeries, one solution that’s gaining traction is Body Hair Transplant in Delhi, India. This revolutionary procedure extends beyond the traditional boundaries of hair transplantation, offering new hope to individuals struggling",
    //   },
    //   {
    //     title: "Women’s hair Loss",
    //     image: womenImg,
    //     content:
    //       "Women’s hair Loss may result from an array of things like hormone disorder, anxiety, old age, hereditary or health problems. By understanding the root causes behind hair loss, one can devise a more relevant course suited for their type.",
    //   },
    //   {
    //     title: "Repair hair transplant",
    //     image: repairImg,
    //     content:
    //       "Repair hair transplant or correction of a wrong hair transplant result, has become the need of the hour. Know why Satya Hair Solutions, under the guidance of Dr. Shail Gupta is known as number one Repair Hair Transplant Clinic in the world.",
    //   },
    //   {
    //     title: "PRP",
    //     image: prpImg,
    //     content:
    //       "Platelet Rich Plasma, or PRP, has emerged as a revolutionary non-surgical technique in the realm of hair restoration. This cutting-edge treatment involves the injection of platelet-rich plasma, a substance teeming with a supra-physiological concentration of platelets and an abundance of growth factors and bioactive proteins. These components work in tandem",
    //   },
    //   {
    //     title: "Mesotherapy",
    //     image: mesoImg,
    //     content:
    //       "Hair problems can affect anyone and often lead to frustration and embarrassment. At Satya Hair Solutions, we are dedicated to offering a wide array of hair treatment services to help those struggling with hair-related issues. One such effective treatment that has gained attention in the medical field in general and hair loss treatment, in particular, is",
    //   },
    //   {
    //     title: "Stem Cell Hair Transplant",
    //     image: stemCellImg,
    //     content:
    //       "Hair loss is a common concern that affects people of all ages and genders. The quest for effective solutions often leads individuals to try various products and treatments that promise hair regrowth. However, not all of these options deliver the desired results and some can even cause further damage. This is why seeking expert advice before",
    //   },
    //   {
    //     title: "Hair Weaving",
    //     image: weavingImg,
    //     content:
    //       "Hair loss can be a profound blow to one’s self-esteem and confidence. At Satya Hair Solutions, we acknowledge that not everyone is inclined toward surgical interventions, be it due to personal choice or skin-related concerns. For individuals seeking non-surgical alternatives, Hair Weaving Treatment emerges as a safe and effective option.",
    //   },
    //   {
    //     title: "Laser comb therapy",
    //     image: laserImg,
    //     content:
    //       "Laser comb therapy is rooted in the utilization of laser light to gently warm tissues, sparking a process known as photobiostimulation. This technique harnesses the power of low-dose laser energy to enhance cellular metabolism and bolster blood circulation. By targeting the hair follicles, this therapy aims to promote their growth in the treated area.",
    //   },
    //   {
    //     title: "Scalp Micropigmentation (SMP)",
    //     image: smpImg,
    //     content:
    //       "In an age dominated by the visual allure of social media, appearance holds a paramount role. With a multitude of cosmetic treatments promising to accentuate natural beauty, Scalp Micropigmentation, or SMP, has emerged as a remarkable contender. SMP, a technique that deposits micro pigments onto the scalp through an electric tattooing",
    //   },
];

const HairTreatment = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0E3A43]">
          Hair Treatments
        </h1>
        <div className="w-24 h-[3px] bg-[#9E4A47] mx-auto mt-4"></div>
      </div>

      <div className="space-y-24">
        {treatments.map((item, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden  ${
                  reverse ? "md:order-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[480px] object-contain rounded"
                />
              </div>

              {/* Content */}
              <div
                className={`border-l-4 border-[#9E4A47] pl-6 ${
                  reverse ? "md:order-1" : ""
                }`}
              >
                <p className="text-sm tracking-widest text-gray-500 mb-2">
                  SATYA
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold text-[#0E3A43] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {item.content}
                </p>

                <button className="bg-[#9E4A47] text-white px-6 py-3 text-sm tracking-widest uppercase transition duration-300 hover:bg-[#0E3A43]">
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HairTreatment;
