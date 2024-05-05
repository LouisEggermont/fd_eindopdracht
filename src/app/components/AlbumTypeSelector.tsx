// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { use } from "react";

// export default function AlubmTypeSelectorComponent() {
//     const pathname = usePathname()

//         const getLinkClassName = (path: string) => 
//         `transition-all duration-200 ease-in-out text-[8vw] sm:text-[3vw] ${pathname === path ? 'font-bold' : 'font-thin'}`;

//     return (
//         <div className='flex items-end mt-12'>
//             <Link className={getLinkClassName('/photos/analog')} href="/photos/analog">
//                 Analog
//             </Link>
//             <svg className='flex w-[40vw] sm:w-[10vw] h-[11vw] sm:h-[4vw] items-start mx-[2vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1671 2"> 
//                 <line x2="1671" transform="translate(0 2)" fill="none" stroke="#1c1c1c" strokeWidth="15"/>
//             </svg>
//             <Link className={getLinkClassName('/photos/digi')} href="/photos/digi">
//                 Digital
//             </Link>
//         </div>
//     );
// }
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function AlubmTypeSelectorComponent() {
    const pathname = usePathname();
    const [isAnalog, setIsAnalog] = useState(pathname === "/photos/analog");
    const [isDigital, setIsDigital] = useState(pathname === "/photos/digi");

    useEffect(() => {
        setIsAnalog(pathname === "/photos/analog");
        setIsDigital(pathname === "/photos/digi");
    }, [pathname]);

    const getLinkClassName = (isActive: boolean) =>
        ` text-[1rem] font-sans text-[8vw] transition-all duration-200 scale-100 sm:text-[3vw] ${isActive ? 'font-bold' : 'font-thin'}`;

    return (
        <div className="flex items-end mt-12">
 
                <Link className="" href="/photos/analog">
                <p className={getLinkClassName(isAnalog)}>Analog</p>
            </Link>
            <svg className="flex w-[40vw] sm:w-[10vw] h-[11vw] sm:h-[4vw] items-start mx-[2vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1671 2"> 
                <line x2="1671" transform="translate(0 2)" fill="none" stroke="#1c1c1c" strokeWidth="15"/>
            </svg>
            <Link href="/photos/digi">
                <p className={getLinkClassName(isDigital)}>Digital</p>
            </Link>
        </div>
    );
}
