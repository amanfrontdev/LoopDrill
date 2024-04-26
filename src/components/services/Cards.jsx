import React, { useState } from "react";
import "../../index.css";
// import Paragraph from "./Paragraph";
// import { headings } from "../../data/Data";

const Cards = ({ cardsData }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1); // Track which card is expanded

  const handleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div>
      
      <div className="bg-black ">
      
        <div className="flex  gap-x-3 flex-col md:flex-row justify-center max-w-[1920px] m-auto px-10 py-10">
          
          {cardsData.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`relative rounded-b-3xl  overflow-hidden   text-2xl tracking-normal p-2 font-semibold w-full ${
                  isExpanded
                    ? "w-[100%] min-h-32 text-customPurple"
                    : " text-white w-full md:w-[12%] min-h-10"
                } md:h-[20rem] transition-width duration-1000 ease-in-out`}
                style={{
                  background: ` linear-gradient(to top, #000000, #7448fe, #FFFFFF)  `,
                  marginBottom: "2rem",
                  boxShadow: " 0 4px 6px rgba(255,255,255, 0.1)",
                }}
                onClick={() => handleExpand(index)}
              >
                
                {/* <Paragraph paragraph={headings}/> */}
                <div
                  className={`absolute break-words ${
                    isExpanded ? "top-4 left-4" : "bottom-20 left-4"
                  } transform ${
                    isExpanded ? "rotate-0" : " md:rotate-90"
                  } transition-transform duration-300`}
                  style={{ display: isExpanded ? "block" : "none" }}
                >
                  {item.title}
                </div>
                <div
                  className={`absolute left-6 bottom-2 md:bottom-20 whitespace-nowrap md:-left-6 transform transition-transform duration-1000 ${
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
