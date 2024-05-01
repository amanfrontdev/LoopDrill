import React from "react";
import Banner from "../components/Banner";
import Owner from "../components/about/Owner";
import Devtools from "../components/about/Devtools";


const About = () => {
 

  return (
    <div>
      <Banner text="ABOUT US" />
      <Owner />
    
      <Devtools/>
   
    </div>
  );
};

export default About;