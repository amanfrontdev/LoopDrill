import React, { useState } from "react";
import "../../index.css";

const Cards = ({ cardsData }) => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default to first card expanded

  const handleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div>
      <div className="bg-black">
        <div className="flex gap-x-5 flex-col md:flex-row justify-center max-w-[1920px] m-auto px-10 py-20">
          {cardsData.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden text-2xl tracking-normal p-2 font-semibold w-full ${isExpanded
                  ? "w-[100%] min-h-40 text-customPurple"
                  : " text-white w-full md:w-[18%] min-h-16 justify-center items-center flex "
                  } md:h-[32rem] transition-width duration-1000 ease-in-out`}
                style={{
                  background: `linear-gradient(to top, #000000, #7448fe, #FFFFFF)`,
                  marginBottom: "2rem",
                  boxShadow: "0 4px 6px rgba(255,255,255, 0.08)",
                }}
                onClick={() => handleExpand(index)}
              >
                <div
                  className={`absolute ${isExpanded ? "top-4 left-4" : "bottom-32 left-4"
                    } transform ${isExpanded ? "rotate-0" : " md:rotate-90"
                    } transition-transform duration-300 leading-[18px] text-[18px] sm:text-[20px]`}
                  style={{ display: isExpanded ? "block" : "none" }}
                >
                  {item.title}
                </div>
                <div
                  className={`absolute whitespace-nowrap text-[14px] sm:text-[20px] transform transition-transform duration-1000 ${isExpanded ? "rotate-0" : " md:-rotate-90"
                    }`}
                  style={{ display: isExpanded ? "none" : "block" }}
                >
                  {item.title1}
                </div>
                {isExpanded && (
                  <div className="text-[14px] text-start sm:text-[16px] leading-[20px] text-white sm:text-customLightPurple" style={{ marginTop: "3rem", marginLeft: ".5rem" }}>
                    {item.text}
                  </div>
                )}
                {isExpanded && (
                  <div className="flex gap-4 flex-col text-[14px] text-start sm:text-[16px] leading-[20px]" style={{ marginTop: "1.5rem", marginLeft: ".5rem" }}>
                    {item?.subTitle?.map((subCategory, index) => {
                      return (
                        <div key={index} className="capitalize bg-white py-2 px-2  rounded-[10px]">
                          {subCategory}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
