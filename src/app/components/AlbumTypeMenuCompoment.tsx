"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '../components/generic/Logo';

interface AlbumTypeMenuCompomentProps {
  children: React.ReactNode;
}

const AlbumTypeMenuCompoment: React.FC<AlbumTypeMenuCompomentProps> = () => {
    const pathname = usePathname()

  return (
   
        <div className=' flex'>
          <Logo text={"Photos"} className={`text-[6rem] leading-none pt-20 transition-all duration-500 ease-in-out`} />
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
        </div>
  );
};

export default AlbumTypeMenuCompoment;