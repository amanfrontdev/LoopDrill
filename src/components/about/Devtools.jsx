import React from "react";
import yoginder from "../../assets/images/yoginder.jpg";
import MiddleText from "../home/MiddleText";

const Devtools = () => {
  const data = [
    { title: "Title 1", text: "Text 1", image: yoginder },
    { title: "Title 2", text: "Text 2", image: yoginder },
    { title: "Title 3", text: "Text 3", image: yoginder },
    { title: "Title 4", text: "Text 4", image: yoginder },
    { title: "Title 5", text: "Text 5", image: yoginder },
    { title: "Title 6", text: "Text 6", image: yoginder },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center py-10 items-center text-customPurple">
       <MiddleText heading="Our Offerings" para="This is what we have for you"/>
      </div>
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full flex-wrap sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 "
          >
            <div className="relative overflow-hidden group">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full  transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
                <h2 className="text-white text-lg font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-white text-sm mb-4">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 px-4 lg:px-0">
        <div className="max-w-xl mx-auto lg:max-w-4xl">
          <p className="text-white">
            At LoopDrill, we measure our prosperity by your prosperity. We
            accept that it isn't just about making something great, everything
            without a doubt revolves around conveying the genuine outcomes that
            drive your business to a higher level. Here, we're glad for having
            the best customer base all over the planet with the best reviews on
            Grip.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Devtools;
