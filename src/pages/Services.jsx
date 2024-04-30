import React from "react";

import Cards from "../components/services/Cards";
import { cardsData, cardsData1, cardsData2, cardsData3 } from "../data/Data";
import Paragraph from "../components/services/Paragraph";
import Banner from "../components/Banner";

const ITServices = () => {
    return (
        <div >
            <Banner text="IT SERVICES" />
            <div className="text-center pt-10 ">
                <Paragraph text="MOBILE  APP DEVELOPMENT" />
                <Cards cardsData={cardsData} />
            </div>
            <div className="text-center">
                <Paragraph text="WEB SOLUTION" />
                <Cards cardsData={cardsData1} />
            </div>

            <div className="text-center">
                <Paragraph text="DESIGN" />
                <Cards cardsData={cardsData2} />
            </div>
            <div className="text-center">
                {" "}
                <Paragraph text="ECOMMERCE" />
                <Cards cardsData={cardsData3} />
            </div>
        </div>
    );
};

export default ITServices;
