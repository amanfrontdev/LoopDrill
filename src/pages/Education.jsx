import React from 'react'
import Banner from '../components/Banner'
import Paragraph from '../components/services/Paragraph'
import Cards from '../components/services/Cards'
import { Cfamily, DSA, Java, Python, databases, devTools, frontEnd, mobileTechApp, programmingLang, testing, } from '../data/Data'

const ITEducation = () => {
    return (
        <div>
            <Banner text="IT EDUCATION"/>
            <div className="text-center ">
        <Paragraph
          className=" bg-black font-semibold text-customLightPurple text-3xl tracking-wider px-20 py-14"
          text="JAVA"
        />
        <Cards cardsData={Java} />
      </div>
      <div className="text-center">
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
          text="PYTHON"
        />
        <Cards cardsData={Python} />
      </div>

      <div className="text-center">
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
          text="CFAMILY"
        />
        <Cards cardsData={Cfamily} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
          text="FRONTEND"
        />
        <Cards cardsData={frontEnd} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
          text="PROGRAMMING LANGUAGE"
        />
        <Cards cardsData={programmingLang} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
          text="ANDROID APP"
        />
        <Cards cardsData={mobileTechApp} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
          text="DATABASES"
        />
        <Cards cardsData={databases} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
          text="ALGORITHM"
        />
        <Cards cardsData={DSA} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
          text="DEVELOPER TOOLS"
        />
        <Cards cardsData={devTools} />
      </div>
      <div className="text-center">
        {" "}
        <Paragraph
          className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
          text="TESTING"
        />
        <Cards cardsData={testing} />
      </div>
        </div>
    )
}

export default ITEducation
