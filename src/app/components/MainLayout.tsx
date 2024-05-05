// "use client";
// import { usePathname } from 'next/navigation'
// import ArrowBack from "../components/ArrowBack";
// import Logo from './generic/Logo';
// import AlubmTypeSelectorComponent from './AlbumTypeSelector';

// export default function MainLayout({ children }: { children: React.ReactNode }) {
//     const pathname = usePathname();

//     let logoText = '';

//     if (pathname !== "/") {
//         logoText = pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1);
//     }

//     return (
//         <main className="flex flex-col items-center">
//             <div className=" w-5/6"> 
//                 {
//                     pathname.startsWith('/photos/') && pathname.split('/').length > 3 
//                     || pathname.startsWith('/projects/') && pathname.split('/').length > 2 
//                     ? <ArrowBack/> 
//                     : (
//                         <div className='flex flex-col sm:flex-row justify-between'>
//                             <Logo text={logoText} size={pathname !== "/" ? true : false} />
//                             {pathname.startsWith('/photos') ? <AlubmTypeSelectorComponent/>: null}
//                         </div>
//                     )
//                 }   
//                 {children}
//             </div>
//         </main>
//     );
// }

// Maybe add memo hook if above used 

"use client";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import ArrowBack from "../components/ArrowBack";
import Logo from './generic/Logo';
import AlubmTypeSelectorComponent from './AlbumTypeSelector';
import Slider from './Slider';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const [logoText, setLogoText] = useState(() => getLogoText(pathname));
    const [isSmallLogo, setIsSmallLogo] = useState(pathname !== "/");
    const [showContent, setShowContent] = useState(pathname === "/");

    useEffect(() => {
        setLogoText(getLogoText(pathname));
        setIsSmallLogo(pathname !== "/");
        setShowContent(pathname === "/");
    }, [pathname]);

    const linkClass = "hover:scale-110 transition-all duration-100 ease-in-out";

    const handleLinkClick = (text: string) => {
        setLogoText(text);
        setIsSmallLogo(true);
        setShowContent(false);
        router.push('/');
    };

    const handleLogoClick = () => {
        router.push('/');
    };

    return (
        <main className="flex flex-col items-center">
            <div className=" w-5/6"> 
                {
                    pathname.startsWith('/photos/') && pathname.split('/').length > 3 
                    || pathname.startsWith('/projects/') && pathname.split('/').length > 2 
                    ? <ArrowBack/> 
                    : (
                        <div className='flex flex-col sm:flex-row justify-between'>
                            <Logo text={logoText} size={isSmallLogo} onClick={handleLogoClick} />
                            {pathname.startsWith('/photos') ? <AlubmTypeSelectorComponent/>: null}
                        </div>
                    )
                }

                {showContent && (

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ ease: 'easeInOut', duration: 0.5 }}
>
                    <div> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1671 2"> 
                            <line x2="1671" transform="translate(0 2)" fill="none" stroke="#1c1c1c" strokeWidth="4"/>
                        </svg>
                        <Slider textContent="Developer Designer Motorcyclist Photographer MCT-student PR&Media" />
                        <div className="flex gap-6 sm:gap-16 justify-end text-[1rem] md:text-[2rem] hover:prose-p:scale-110">
                            <Link className={linkClass} href={"/projects"} onClick={() => handleLinkClick('Projects')}>Projects</Link>
                            <Link className={linkClass} href={"/photos"} onClick={() => handleLinkClick('Photos')}>Photos</Link>
                            <Link className={linkClass} href={"/about"} onClick={() => handleLinkClick('About')}>About</Link>
                        </div>
                    </div>
                    </motion.div>
                )}

                {children}
            </div>
        </main>
    );
}

function getLogoText(pathname: string): string {
    if (pathname !== "/") {
        return pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1);
    }
    return '';
}
