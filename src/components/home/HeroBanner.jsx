import React from 'react'

const HeroBanner = ({ heading, para1, para2, para3, img }) => {
    return (
        <div className="flex flex-col w-full mx-auto md:flex-row items-center justify-center py-20 px-4">
            <div className="w-12/12 text-center items-center md:text-start md:w-7/12 flex px-4 sm:px-10">
                <div className="px-1">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-customLightPurple mb-4">{heading}</h1>
                    <p className="text-xl sm:text-2xl md:text-4xl text-white">{para1}</p>
                    <p className='mx-auto max-w-[500px] md:max-w-[600px] text-xs sm:text-md md:text-lg mt-2 text-white/90 font-medium'>{para2}</p>
                    <p className='mx-auto max-w-[500px] md:max-w-[600px] text-xs sm:text-md md:text-lg mt-2 text-white/90 font-medium'>{para3}</p>
                </div>
            </div>
            <div className='w-[200px] sm:w-[400px] pt-12 '>
                <img src={img} className='object-cover w-full' alt='loopdrill' />
            </div>
        </div>
    )
}

export default HeroBanner
