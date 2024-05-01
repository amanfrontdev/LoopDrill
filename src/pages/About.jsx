import React from "react";
import Banner from "../components/Banner";
import Owner from "../components/about/Owner";
import Devtools from "../components/about/Devtools";
import Mission from "../components/about/Mission";
import HeroBanner from "../components/home/HeroBanner";
import MiddleText from "../components/home/MiddleText";
import WorkDone from "../components/home/WorkDone";

const About = () => {

  return (
    <div>
      <Banner text="ABOUT US" />
      <Owner />
      <div className="py-10">
        <MiddleText heading="Journey of LoopDrill" para="Over the years" />
        <HeroBanner para2="In the early days, Yogendra, a skilled software developer and corporate trainer, embarked on his journey as a freelancer. Despite facing numerous challenges in acquiring clients and managing projects, his dedication and constant practice forged strong connections with industry experts and clients. Positive feedback and references bolstered his reputation, propelling him into the market's spotlight." para3="As demand surged, Yogendra transitioned his freelance endeavors into a registered IT company, LoopDrill Pvt Ltd. This evolution marked a pivotal moment in his career, enabling him to expand his reach and services while maintaining the quality craftsmanship he's known for. Today, LoopDrill Pvt Ltd stands as a testament to Yogendra's perseverance and expertise in the ever-evolving landscape of technology." />

        <div className="flex flex-row max-w-[1920px] px-10 mt-20 pb-20 justify-center gap-16 md:gap-24 flex-wrap ">
          <WorkDone widthHeight="w-[180px] lg:w-[240px] h-[150px] lg:h-[220px]" arrow="true" num="2018" heading=" first client from Germany " />
          <WorkDone widthHeight="w-[180px] lg:w-[240px] h-[150px] lg:h-[220px]" arrow="true" num="2019" heading=" started working as technical trainer" />
          <WorkDone widthHeight="w-[180px] lg:w-[240px] h-[150px] lg:h-[220px]" arrow="true" num="2020" heading=" certificate from meta digital marketing " />
          <WorkDone widthHeight="w-[180px] lg:w-[240px] h-[150px] lg:h-[220px]" arrow="true" num="2021" heading=" working as a corporate trainer" />
          <WorkDone widthHeight="w-[180px] lg:w-[240px] h-[150px] lg:h-[220px]" arrow="true" num="2022" heading=" got the Java certificate " />
          <WorkDone widthHeight="w-[180px] lg:w-[240px] h-[150px] lg:h-[220px]" arrow="true" num="2023" heading=" successful managed 20+ clients social media " />
          <WorkDone widthHeight="w-[180px] lg:w-[240px] h-[150px] lg:h-[220px]" arrow="true" num="2024" heading="  register as Pvt Ltd company" />
        </div>

        <Devtools />
      </div>
      <Mission />

    </div>
  );
};

export default About;