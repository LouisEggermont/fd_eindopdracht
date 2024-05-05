// https://www.youtube.com/watch?v=AqMESJ51e3o&t=67s

'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const Slider = ({ textContent }: { textContent: string }) => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const textClass = "leading-none sm:text-[6rem] text-[2.5rem] font-thin whitespace-nowrap leading-none";
    let xPercent = 0;
    let direction = -1;
  
    useEffect(() => {
      // Add event listener for wheel event
      requestAnimationFrame(animation);

    })
  
    const animation = () => {
        // Check if the refs are not null
        if (firstText.current && secondText.current) {
            if (xPercent <= -100) {
                xPercent = 0;
            } 
            if (xPercent > 0) {
                xPercent = -100;
            }
            gsap.set(firstText.current, { xPercent: xPercent });
            gsap.set(secondText.current, { xPercent: xPercent });
    
            xPercent += 0.02 * direction;
        }
        requestAnimationFrame(animation);
    }

    return (
        <div className="w-full relative overflow-hidden h-[10vh] sm:h-[20vh] flex">
            <p ref={firstText} className={textClass}>
                {textContent}&nbsp; 
            </p>
            <p ref={secondText} className={textClass}> 
                {textContent}&nbsp;
            </p>
        </div>
    );
};

export default Slider;
