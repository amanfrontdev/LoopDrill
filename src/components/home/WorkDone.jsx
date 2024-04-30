import React from 'react'

const WorkDone = ({ heading, para, num, arrow }) => {
    return (
        <div className='relative'>
            <div className="w-[250px] sm:w-[300px] h-[200px] sm:h-[260px] shadowBox flex-col bg-black hover:bg-customPurple  text-white p-4 rounded-lg flex">
                <p className='text-2xl sm:text-6xl w-full flex justify-end'>
                    {num}
                </p>
                <div className='text-md sm:text-2xl uppercase'>
                    {heading}
                </div>
                <p className='text-white/50 text-[13px] sm:text-[16px]'>
                    {para}
                </p>
            </div>
            {arrow === "true" &&
                <div className="flex absolute -bottom-10 left-[40%] md:-right-12 md:top-[50%] items-center justify-center animate-ping">
                    <svg className="w-6 h-6 text-white ml-4 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            }
        </div>
    )
}

export default WorkDone
