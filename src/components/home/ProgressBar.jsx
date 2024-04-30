import React, { useState, useEffect } from 'react';

const ProgressBar = ({ maxValue, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < maxValue) {
                setCount(prevCount => prevCount + 1);
            } else {
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [count, maxValue]);

    return (
        <div className='flex justify-center items-center flex-col w-[180px]'>
            <h2 className='text-2xl sm:text-4xl text-white'> {count}+</h2>
            <p className='uppercase tracking-widest text-sm sm:text-lg text-gray-400'>{label}</p>
        </div>
    );
};

export default ProgressBar;
