  import React from "react";
  import digital from "../../assets/images/ui_ux-.png";
  import ecommerce from "../../assets/images/ecom.png";
  import uiux from "../../assets/images/mob.png";
  import mobile from "../../assets/images/weeb.png";
  import web from "../../assets/images/dm.png";
  import MiddleText from "../home/MiddleText";

  const Devtools = () => {
    const data = [
      { title: "Title 1", text: "Text 1", image: digital },
      { title: "Title 4", text: "Text 4", image: mobile },
      { title: "Title 3", text: "Text 3", image: uiux },
      { title: "Title 2", text: "Text 2", image: ecommerce },
      { title: "Title 3", text: "Text 3", image: web },
   
      
     
    ];
    return (
      <div className="mt-20">
        <div className="flex flex-col justify-center py-10 items-center text-customPurple">
          <MiddleText heading="Our Offerings" para="This is what we have for you" />
        </div>
        <div className="flex w-full max-w-[1920px] mx-auto flex-wrap justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center items-center mb-4"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover object-center w-full  h-full transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-100 transition duration-500">
                  <h2 className="text-white text-4xl font-bold mb-4">
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
