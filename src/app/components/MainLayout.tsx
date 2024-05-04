"use client";
import { usePathname } from 'next/navigation'
import ArrowBack from "../components/ArrowBack";
import Logo from './generic/Logo';
import AlubmTypeSelectorComponent from './AlbumTypeSelector';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    let logoText = '';

    if (pathname !== "/") {
        logoText = pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1);
    }

    return (
        <main className="flex flex-col items-center">
            <div className=" w-5/6"> 
                {
                    pathname.startsWith('/photos/') && pathname.split('/').length > 3 
                    || pathname.startsWith('/projects/') && pathname.split('/').length > 2 
                    ? <ArrowBack/> 
                    : (
                        <div className='flex flex-col sm:flex-row justify-between'>
                            <Logo text={logoText} size={pathname !== "/" ? true : false} />
                            {pathname.startsWith('/photos') ? <AlubmTypeSelectorComponent/>: null}
                        </div>
                    )
                }
                {children}
            </div>
        </main>
    );
}