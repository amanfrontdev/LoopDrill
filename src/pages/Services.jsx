import React from "react";

import Cards from "../components/services/Cards";
import {
  cardsData,
  cardsData1,
  cardsData2,
  cardsData3,
  headings,
} from "../data/Data";
import Paragraph from "../components/services/Paragraph";

const ITServices = () => {
  return (
    <div>
      <div className="text-center">
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl tracking-wider px-20"
          text="MOBILE  APP DEVELOPMENT"
        />
        <Cards cardsData={cardsData} />
      </div>
      <div className="text-center">
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20"
          text="MOBILE  APP DEVELOPMENT"
        />
        <Cards cardsData={cardsData1} />
      </div>

      <div className="text-center">
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20"
          text="MOBILE  APP DEVELOPMENT"
        />
        <Cards cardsData={cardsData2} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20"
          text="MOBILE  APP DEVELOPMENT"
        />
        <Cards cardsData={cardsData3} />
      </div>
    </div>
  );
};

export default ITServices;
