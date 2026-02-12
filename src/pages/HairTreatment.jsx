import React from "react";
import assets from "../assets/assets";

const treatments = [
  {
    title: "FUT",
    image: assets.futBanner,
    content:
      "In a hair transplant procedure called FUT, we remove hair from the back of a patient's scalp and transplant it into the bald spots. A strip of skin is cut from the back of your scalp by the surgeon, and the trichophytic closure technique is used to close the wound.",
  },
  {
    title: "FUE",
    image: assets.fueBanner,
    content:
      "FUE is a modern, minimally invasive hair transplant method that takes individual hair follicles, which can hold one to four hairs, directly from the donor area of the scalp, usually the back or sides. Then, these follicles are carefully placed in areas where hair is thinning or missing, which leads to natural-looking hair growth, less scarring, and a faster recovery than traditional strip-based methods.",
  },
  {
    title: "MHT",
    image: assets.mht,
    content:
      "One of these new methods is the Maximum Harvesting Technique (MHT). It combines the old Follicular Unit Transplantation (FUT) method with the new Follicular Unit Extraction (FUE) method very well.",
  },
  {
    title: "Balanced Hair Transplant",
    image: assets.balanced,
    content:
      "Satya is a leader and pioneer in providing honest ways to restore hair. They made a real and well-thought-out plan called Balanced Hair Transplant. This method uses as few drugs as possible, which lowers the risk of side effects and gives you a safe buffer to raise your doses if you get used to them.",
  },
  {
    title: "Eyebrow Restoration",
    image: assets.eyebrowBanner,
    content:
      "Eyebrow hair transplants are important for the beauty of the face because they frame our eyes and make us look better overall. People have been wanting bigger, more defined brows lately, which has led to an increase in the need for eyebrow restoration. Some people have naturally full and thick brows, while others have thin or sparse brows for a number of reasons, such as genetics, illness, accidents, burns, drugs, or compulsive hair-pulling disorders like trichotillomania.",
  },
  {
    title: "Beard Restoration",
    image: assets.beardBanner,
    content:
      "We at Satya know that a full, well-groomed beard can say a lot. Our beard hair transplant services are made to fit your needs, whether you want to make your current beard look better, fill in bald spots, or start a whole new beard. Our team, led by Dr. Shaiil Gupta, India's best hair transplant surgeon, can make your beard dreams come true.",
  },
  {
    title: "Synthetic Hair Transplant",
    image: assets.syntheticImg,
    content:
      "A lot of progress has been made in the medical and surgical restoration of natural hair, but there are some cases where these methods don't work well enough. Synthetic hair transplants help fill this gap by giving people with advanced baldness, a bad donor reserve, or those who don't want to go through with natural hair transplants quick, effective, and natural-looking results.",
  },
  {
    title: "Long Hair Transplant",
    image: assets.longHairImg,
    content:
      "Follicular Unit Transplantation (FUT) is the one-of-a-kind method used. In long hair transplants, the donor area and the area where the grafts will be put in are not shaved, unlike in traditional hair transplants. This keeps your hair from falling out, so you can keep your original hairstyle.",
  },
  {
    title: "Body Hair Transplant",
    image: assets.bodyHairImg,
    content:
      "Hair loss and baldness can be very upsetting and hurt your self-esteem and confidence. Body Hair Transplant  is becoming more popular as a way to restore hair. This groundbreaking procedure goes beyond the usual limits of hair transplantation and gives people who are losing their hair new hope. In this article, we'll learn about the details of body hair transplants, why they're a great option, and why Satya Hair Solutions with Dr. Shaiil Gupta is the best place to go for this cutting-edge procedure.",
  },
  {
    title: "Women’s hair Loss",
    image: assets.femaleBanner,
    content:
      "Hormone problems, anxiety, old age, family history, or health problems can all cause women's hair to fall out. By knowing what causes hair loss, you can come up with a better treatment that works for you.",
  },
  {
    title: "Repair hair transplant",
    image: assets.repairImg,
    content:
      "Repairing a hair transplant or fixing a bad hair transplant result is something that needs to be done right now. Find out why Satya Hair Solutions, led by Dr. Shail Gupta, is the best place in the world to get hair transplants repaired.",
  },
  {
    title: "PRP Treatment",
    image: assets.prp,
    content:
      "Platelet Rich Plasma, or PRP, is a new and revolutionary way to restore hair without surgery. This cutting-edge treatment involves injecting platelet-rich plasma, which is full of platelets, growth factors, and bioactive proteins at levels that are much higher than normal. These parts work together to start the inflammatory cascade, speed up the healing process, and speed up the remodeling of tissue. PRP therapy is known for being natural and safe, and it also works really well.",
  },
  {
    title: "Mesotherapy",
    image: assets.meso,
    content:
      "Anyone can have hair problems, and they can be very frustrating and embarrassing. At Satya Hair Solutions, we are committed to providing a wide range of hair treatment services to help people who are having problems with their hair. Mesotherapy is one of these treatments that has gotten a lot of attention in the medical field, especially for hair loss.",
  },
  {
    title: "Stem Cell Hair Transplant",
    image: assets.stem,
    content:
      "People of all ages and genders are worried about losing their hair. People often try different products and treatments that promise to help hair grow back because they are looking for effective solutions. However, not all of these options work as planned, and some can even make things worse. This is why it's important to get professional advice before starting any hair loss treatment. The stem cell hair transplant is a new method in the field of hair restoration that is showing promise in ongoing trials.",
  },
  {
    title: "Hair Weaving",
    image: assets.weavingImg,
    content:
      "Losing hair can really hurt your self-esteem and confidence. At Satya, we understand that not everyone wants to have surgery, whether it's because of personal choice or skin issues. Hair Weaving Treatment is a safe and effective option for people who want to avoid surgery.",
  },
  {
    title: "Laser comb therapy",
    image: assets.laserComb,
    content:
      "Laser comb therapy uses laser light to gently warm tissues, which starts a process called photobiostimulation. This method uses low-dose laser energy to speed up cellular metabolism and improve blood flow. This treatment aims to make the hair follicles grow in the area that was treated by targeting them.",
  },
  {
    title: "Scalp Micropigmentation (SMP)",
    image: assets.scalpImg,
    content:
      "In a time when social media is all about how things look, looks are very important. There are many cosmetic treatments that claim to enhance natural beauty, but Scalp Micropigmentation (SMP) has stood out as a strong contender. SMP is a method that uses an electric tattooing device to put tiny pigments on the scalp. This makes hair look fuller. Let's find out more about its complexities and possibilities.",
  },
];

const HairTreatment = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0E3A43]">
         Types of Hair Treatment: Which is best for you?
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
