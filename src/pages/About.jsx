import React from "react";
import Banner from "../components/Banner";
import Owner from "../components/about/Owner";
import Devtools from "../components/about/Devtools";
import Mission from "../components/about/Mission";


const About = () => {
 

  return (
    <div>
      <Banner text="ABOUT US" />
      <Owner />
    <Mission/>
      <Devtools/>
   
    </div>
  );
};

export default About;