"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';


import Logo from "./components/generic/Logo";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import Link from 'next/link';

export default function Page() {
  // const router = useRouter();

  // // const [logoSize, setLogoSize] = useState('text-[12rem]');
  // const [logoSize, setLogoSize] = useState('text-[13vw]');
  // const [logoText, setLogoText] = useState('');


  // const handleClick = async ( text: string) => {
  //   // setLogoSize('text-[6rem]');
  //   setLogoSize('text-[7vw]'); 
  //   setLogoText(text); 
  //   await new Promise(resolve => setTimeout(resolve, 500));
  //   // router.push(`/${text.toLowerCase()}`);
  // };

  return (
      <div> 
        {/* <Logo text={logoText} className={`${logoSize} leading-none pt-20 transition-all duration-500 ease-in-out`} /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1671 2"> 
          <line x2="1671" transform="translate(0 2)" fill="none" stroke="#1c1c1c" strokeWidth="4"/>
        </svg>
        <Slider textContent="Developer Designer Motorcyclist Photographer MCT-student PR&Media" />
        {/* <Menu/> */}
        <div className="flex gap-16 justify-end text-[2rem]">
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/photos"}>Photos</Link>
        <Link href={"/about"}>About</Link>
        </div>
      </div>
  );
}