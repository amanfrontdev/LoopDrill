import React from 'react'
import TypeWriter from '../components/TypeWriter/TypeWriter'
import Paragraph from '../components/services/Paragraph'
import Cards from '../components/services/Cards'
import { cardsData, cardsData1, cardsData2, cardsData3 } from '../data/Data'
import MiddleText from '../components/home/MiddleText'
import ProgressBar from '../components/home/ProgressBar'
import WorkDone from '../components/home/WorkDone'


const Home = () => {
    return (
        <section className='max-w-[1920px] mx-auto'>
            {/* first section  */}
            <div className="flex flex-col md:flex-row h-[90vh] bg-slate-300">
                <div className="w-full flex pt-32 ">
                    <div className=" mx-auto text-center px-1">
                        <div className='bg-slate-500'>
                            <TypeWriter />
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-customLightPurple mb-4">Creating strategies for </h1>
                        <p className="text-xl sm:text-2xl md:text-4xl text-DarkGray">Creating strategies for cutting-edge technology trends.</p>
                        <p className='mx-auto text-xs max-w-[600px] lg:max-w-[800px] sm:text-md md:text-xl mt-2 text-DarkGray/90 font-medium'>OFFERING EFFECTIVE SOLUTIONS, OUR SOFTWARE DEVELOPMENT COMPANY SPECIALIZES IN CRAFTING INNOVATIVE SOFTWARE PRODUCTS</p>
                    </div>
                </div>
            </div>

            {/* second section  */}
            <div className="text-center pt-10 ">
                <MiddleText heading="What we serve" para="Our Software Development Service" />
                <Cards cardsData={cardsData} />
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
            <div>
                <MiddleText heading="How work is done in" para="Loopdrill" />
                <div className="flex flex-row max-w-[1920px] px-10 mt-20 pb-20 justify-center gap-6 flex-wrap ">
                    <WorkDone num="01" heading="Information Gathering" para="We meticulously collect every detail, beginning with your vision and delving deep into the core ideas within your mind." />
                    <WorkDone num="02" heading="Research and brainstorm" para="Thoroughly analyzing your competitors' businesses, we craft unique selling points that set your business apart in the market." />
                    <WorkDone num="03" heading="Design blueprintg" para="A collaborative effort combining diverse ideas and thorough research to pave a path where everything can flow smoothly" />

                    <WorkDone num="04" heading="Development" para="All the gathered resources will be utilized, transforming into reality through the enchantment of coding." />
                    <WorkDone num="05" heading="Code review" para="Dedicated to addressing both minor hiccups and major challenges in the project, resolving them promptly." />
                    <WorkDone num="06" heading="Testing" para="Once all preparations are complete on the developer's end, the focus shifts to identifying and resolving any bugs that may arise." />

                    <WorkDone num="07" heading="Project deliver" para="With everything in place, your project is poised to launch into the market, ready to achieve remarkable success." />
                </div>


            </div>

        </section>
    )
}

export default Home
