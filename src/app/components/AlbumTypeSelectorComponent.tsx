"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

export default function AlubmTypeSelectorComponent() {
    const pathname = usePathname()
    return (
        <div className=' flex items-end justify-end'>
        <Link href="/photos/analog" className={`transition-all duration-200 ease-in-out mr-10 text-[3rem] ${pathname === '/photos/analog' ? 'font-bold' : 'font-thin'}`}>
          Analog
        </Link>
        <svg className='flex w-[30%] h-16 items-start' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1671 2"> 
          <line x2="1671" transform="translate(0 2)" fill="none" stroke="#1c1c1c" strokeWidth="15"/>
        </svg>
        <Link href="/photos/digi" className={`transition-all duration-200 ease-in-out ml-10 text-[3rem] ${pathname === '/photos/digi' ? 'font-bold' : 'font-thin'}`}>
          Digital
        </Link>
      </div>
    );
}