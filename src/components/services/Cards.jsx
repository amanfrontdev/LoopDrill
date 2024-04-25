import React, { useState } from "react";

const Cards = ({ cardsData }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1); // Track which card is expanded

  const handleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-center max-w-[1920px] px-10 py-10 bg-red-500">

          {cardsData.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`relative text-white overflow-hidden p-4 w-full ${isExpanded ? "w-[100%] min-h-32 " : "w-full md:w-[15%] min-h-10"} md:h-[20rem] transition-width duration-1000 ease-in-out`}
                style={{ background: `linear-gradient(to right, #4f46e5, #964fe5)`, marginBottom: "1rem", }}
                onClick={() => handleExpand(index)}
              >
                <div className={`absolute ${isExpanded ? "top-4 left-4" : "bottom-20 left-4"} transform ${isExpanded ? "rotate-0" : " md:rotate-90"} transition-transform duration-300`}
                  style={{ display: isExpanded ? "block" : "none" }}
                >
                  {item.title}
                </div>
                <div className={`absolute left-4 bottom-2 md:bottom-20 whitespace-nowrap md:-left-6 transform transition-transform duration-1000 ${isExpanded ? "rotate-0" : " md:-rotate-90"}`}
                  style={{ display: isExpanded ? "none" : "block" }}
                >
                  {item.title1}
                </div>
                {isExpanded && (
                  <div style={{ marginTop: "2rem" }}>{item.text}</div>
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
