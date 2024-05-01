import React from 'react'
import Cards from '../components/services/Cards'
import { homeCardData } from '../data/Data'
import MiddleText from '../components/home/MiddleText'
import ProgressBar from '../components/home/ProgressBar'
import WorkDone from '../components/home/WorkDone'
import HeroBanner from '../components/home/HeroBanner'


const Home = () => {
    return (
        <section className='w-full -z-10'>
            {/* first section  */}
            <div className='w-full flex bg-DarkGray'>
                <HeroBanner heading="Creating strategies" para1="for cutting-edge technology trends." para2="OFFERING EFFECTIVE SOLUTIONS, OUR SOFTWARE DEVELOPMENT COMPANY SPECIALIZES IN CRAFTING INNOVATIVE SOFTWARE PRODUCTS." />
            </div>

            {/* second section  */}
            <div className="text-center pt-10 ">
                <MiddleText heading="What we serve" para="Our Software Development Service" />
                <Cards cardsData={homeCardData} />
            </div>

            {/* third section */}
            <div className="text-center pt-10 py-40">
                <MiddleText heading="Success ratio" para="Dill makes person perfect" />
                <div className='flex flex-row flex-wrap px-4 items-center gap-4 max-w-[1024px] mx-auto justify-center sm:justify-between mt-8'>
                    <ProgressBar maxValue={125} label="Success projects" />
                    <ProgressBar maxValue={249} label="Success placed students" />
                    <ProgressBar maxValue={5} label="Min Exp staff" />
                    <ProgressBar maxValue={600} label="Happy customers" />
                </div>
            </div>

            {/* fourth section  */}
            <div className='w-full bg-DarkGray'>
                <div className='py-20 mx-auto max-w-[1920px]'>
                    <MiddleText heading="How work is done in" para="Loopdrill" />
                    <div className="flex flex-row max-w-[1920px] px-10 mt-20 pb-20 justify-center gap-16 md:gap-24 flex-wrap ">
                        <WorkDone widthHeight="w-[250px] lg:w-[300px] h-[200px] lg:h-[260px]" arrow="true" num="01" heading="Information Gathering" para="We meticulously collect every detail, beginning with your vision and delving deep into the core ideas within your mind." />
                        <WorkDone widthHeight="w-[250px] lg:w-[300px] h-[200px] lg:h-[260px]" arrow="true" num="02" heading="Research and brainstorm" para="Thoroughly analyzing your competitors' businesses, we craft unique selling points that set your business apart in the market." />
                        <WorkDone widthHeight="w-[250px] lg:w-[300px] h-[200px] lg:h-[260px]" arrow="true" num="03" heading="Design blueprint" para="A collaborative effort combining diverse ideas and thorough research to pave a path where everything can flow smoothly" />

                        <WorkDone widthHeight="w-[250px] lg:w-[300px] h-[200px] lg:h-[260px]" arrow="true" num="04" heading="Development" para="All the gathered resources will be utilized, transforming into reality through the enchantment of coding." />
                        <WorkDone widthHeight="w-[250px] lg:w-[300px] h-[200px] lg:h-[260px]" arrow="true" num="05" heading="Code review" para="Dedicated to addressing both minor hiccups and major challenges in the project, resolving them promptly." />
                        <WorkDone widthHeight="w-[250px] lg:w-[300px] h-[200px] lg:h-[260px]" arrow="true" num="06" heading="Testing" para="Once all preparations are complete on the developer's end, the focus shifts to identifying and resolving any bugs that may arise." />

                        <div className=''>
                            <WorkDone widthHeight="w-[250px] lg:w-[300px] h-[200px] lg:h-[260px]" arrow="false" num="07" heading="Project deliver" para="With everything in place, your project is poised to launch into the market, ready to achieve remarkable success." />
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default Home
