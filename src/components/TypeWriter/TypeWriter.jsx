import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    const typewriterRef = useRef(null);

    useEffect(() => {
        const typewriter = new Typewriter(typewriterRef.current, {
            strings: ['Hello World!', 'This is a typewriter effect in React.', 'Enjoy typing animations!'],
            autoStart: true,
            loop: true,
        });

        return () => {
            typewriter.stop();
        };
    }, []);

    return (
        <div ref={typewriterRef}></div>
    );
};

export default TypeWriter;
