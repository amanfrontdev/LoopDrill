import React from 'react'

const MiddleText = ({ heading, para }) => {
    return (
        <div className='text-center max-w-[550px] mx-auto w-full'>
            <div className='text-lg text-white'>
                {heading}
            </div>
            <p className='text-customPurple text-xl sm:text-4xl uppercase'>
                {para}
            </p>
        </div>
    )
}

export default MiddleText
