import React, { useState } from "react";
import "../../index.css";

const Cards = ({ cardsData }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1); // Track which card is expanded

  const handleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div>
      <div className="bg-black ">
        <div className="flex  gap-x-5 flex-col md:flex-row justify-center max-w-[1920px] m-auto px-10 py-40">
          {cardsData.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden text-2xl tracking-normal p-2 font-semibold w-full ${
                  isExpanded
                    ? "w-[100%] min-h-40 text-customPurple"
                    : " text-white w-full md:w-[18%] min-h-16 justify-center items-center flex "
                } md:h-[28rem] transition-width duration-1000 ease-in-out`}
                style={{
                  background: ` linear-gradient(to top, #000000, #7448fe, #FFFFFF)  `,
                  marginBottom: "2rem",
                  boxShadow: " 0 4px 6px rgba(255,255,255, 0.08)",
                }}
                onClick={() => handleExpand(index)}
              >
                <div
                  className={`absolute break-words ${
                    isExpanded ? "top-4 left-4" : "bottom-32 left-4"
                  } transform ${
                    isExpanded ? "rotate-0" : " md:rotate-90"
                  } transition-transform duration-300`}
                  style={{ display: isExpanded ? "block" : "none" }}
                >
                  {item.title}
                </div>
                <div
                  className={`absolute whitespace-nowrap  transform transition-transform duration-1000 ${
                    isExpanded ? "rotate-0" : " md:-rotate-90"
                  }`}
                  style={{ display: isExpanded ? "none" : "block" }}
                >
                  {item.title1}
                </div>
                {isExpanded && (
                  <div style={{ marginTop: "3rem", marginLeft: "1rem" }}>
                    {item.text}
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
