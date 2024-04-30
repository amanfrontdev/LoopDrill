import React from "react";
import Banner from "../components/Banner";
import Paragraph from "../components/services/Paragraph";
import Cards from "../components/services/Cards";
import {
  Cfamily,
  DSA,
  Java,
  Python,
  databases,
  devTools,
  frontEnd,
  mobileTechApp,
  programmingLang,
  security,
  testing,
} from "../data/Data";

const ITEducation = () => {
  return (
    <div>
      <Banner text="IT EDUCATION" />
      <div className="text-center ">
        <Paragraph text="JAVA" />
        <Cards cardsData={Java} />
      </div>
      <div className="text-center">
        <Paragraph text="PYTHON" />
        <Cards cardsData={Python} />
      </div>

      <div className="text-center">
        <Paragraph text="CFAMILY" />
        <Cards cardsData={Cfamily} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph text="FRONTEND" />
        <Cards cardsData={frontEnd} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph text="PROGRAMMING LANGUAGE" />
        <Cards cardsData={programmingLang} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph text="ANDROID APP" />
        <Cards cardsData={mobileTechApp} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph text="DATABASES" />
        <Cards cardsData={databases} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph text="ALGORITHM" />
        <Cards cardsData={DSA} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph text="DEVELOPER TOOLS" />
        <Cards cardsData={devTools} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph text="TESTING" />
        <Cards cardsData={testing} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph text="SECURITY" />
        <Cards cardsData={security} />
      </div>
    </div>
  );
};

export default ITEducation;
