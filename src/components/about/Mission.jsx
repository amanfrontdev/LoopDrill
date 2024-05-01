import React from "react";
import "../../assets/images/banner.jpg"
const Mission = () => {
  const array = [
    {
      heading: "OUR MISSION",
      text: "Delivering groundbreaking web and mobile software solutions that redefine competitiveness and innovation. Catering to businesses of all sizes, structures, and those brimming with inventive concepts. Additionally, we extend our expertise to serve the educational sector, enriching it with transformative digital solutions.",
    },
    {
      heading: "OUR VISION",
      text: "Crafting an innovative digital landscape, we meticulously design a vision for your organization's flourishing future. With precision and creativity, we sculpt solutions that serve as catalysts for sustained business growth. Our commitment lies in developing products that not only meet your immediate needs but also pave the way for long-term success and prosperity.",
    },
  ];

  return (
    <div className="w-full text-white text-center sm:text-start flex py-0 sm:py-10">
      <div className="max-w-[1920px] mx-auto h-full p-4 sm:p-8 flex flex-col whitespace-normal">
        {array.map((item, index) => (
          <div key={index} className="flex flex-col justify-between py-10 sm:py-20">
            <h2 className="text-4xl text-customPurple font-extrathin">{item.heading}</h2>
            <p className="mt-4">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
