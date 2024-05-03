// 'use client';
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Slider = ({ textContent }: { textContent: string }) => {
//     const firstText = useRef(null);
//     const secondText = useRef(null);
//     let xPercent = 0;
//     let direction = -1;
  
//     useEffect(() => {
//       requestAnimationFrame(animation);
//     }, [])
  
//     const animation = () => {
//         if (xPercent <= -100) {
//             xPercent = 0;
//             gsap.set(firstText.current, { clearProps: 'xPercent' });
//             gsap.set(secondText.current, { clearProps: 'xPercent' });
//         }
//         gsap.set(firstText.current, { xPercent: xPercent });
//         gsap.set(secondText.current, { xPercent: xPercent });
//         xPercent += 0.03 * direction;
//         requestAnimationFrame(animation);
//     }

//     return (
//         <div className="w-full relative overflow-hidden h-96 flex">
//             <p ref={firstText} className="text-8xl font-thin whitespace-nowrap">
//                 {textContent}&nbsp; 
//             </p>
//             <p ref={secondText} className="text-8xl font-thin whitespace-nowrap">
//                 {textContent}&nbsp;
//             </p>
//         </div>
//     );
// };

// export default Slider;

//  With scrolling 
// https://www.youtube.com/watch?v=AqMESJ51e3o&t=67s

'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Slider = ({ textContent }: { textContent: string }) => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    let xPercent = 0;
    let direction = -1;
    let scrollSpeed = 0.03; // Initial scroll speed
  
    useEffect(() => {
      // Add event listener for wheel event
      window.addEventListener('wheel', handleScroll);
      requestAnimationFrame(animation);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }, [])
  
    const animation = () => {
        if (xPercent <= -100) {
            xPercent = 0;
            gsap.set(firstText.current, { clearProps: 'xPercent' });
            gsap.set(secondText.current, { clearProps: 'xPercent' });
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        xPercent += scrollSpeed * direction;
        requestAnimationFrame(animation);
    }

    const handleScroll = (event: WheelEvent) => {
      // Adjust scroll speed based on the direction of the scroll
      scrollSpeed += event.deltaY > 0 ? -0.01 : 0.01;
      // Ensure scroll speed stays within a reasonable range
      scrollSpeed = Math.max(0.01, Math.min(scrollSpeed, 0.1));
    }

    return (
        <div className="w-full relative overflow-hidden h-[20vh] flex">
            <p ref={firstText} className=" leading-none text-[7vw] font-thin whitespace-nowrap">
                {textContent}&nbsp; 
            </p>
            <p ref={secondText} className=" leading-none text-[7vw] font-thin whitespace-nowrap"> 
                {textContent}&nbsp;
            </p>
        </div>
    );
};

export default Slider;
