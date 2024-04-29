import React from "react";

import Cards from "../components/services/Cards";
import { cardsData, cardsData1, cardsData2, cardsData3 } from "../data/Data";
import Paragraph from "../components/services/Paragraph";
import Banner from "../components/Banner";

const ITServices = () => {
    return (
        <div className="">
            <Banner text="IT SERVICES" />
            <div className="text-center ">
                <Paragraph
                    className=" bg-black font-semibold text-customLightPurple text-3xl tracking-wider px-20 py-14"
                    text="MOBILE  APP DEVELOPMENT"
                />
                <Cards cardsData={cardsData} />
            </div>
            <div className="text-center">
                <Paragraph
                    className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
                    text="WEB SOLUTION"
                />
                <Cards cardsData={cardsData1} />
            </div>

            <div className="text-center">
                <Paragraph
                    className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
                    text="DESIGN"
                />
                <Cards cardsData={cardsData2} />
            </div>
            <div className="text-center">
                {" "}
                <Paragraph
                    className="bg-black font-semibold text-customLightPurple text-3xl  tracking-wider px-20 py-14"
                    text="ECOMMERCE"
                />
                <Cards cardsData={cardsData3} />
            </div>
        </div>
    );
};

export default ITServices;
