import Image from 'next/image'
import LogoImage from '../components/LogoImage'

export default function AboutPage() {
    return (
        <div className='flex lg:flex-row-reverse flex-col justify-end justify-between gap-6 my-11'>
            <div className=''>
            <Image src={`/pictures/aboutimage.jpg`} alt="dd" width="600" height="64" /> 
            </div>
            <div className='flex flex-col justify-between max-w-[550px]'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className=' flex gap-3 mt-10'>

                        <LogoImage href='https://github.com/LouisEggermont' src="github" alt="dd"/>
                        <LogoImage href='https://www.linkedin.com/in/louis-eggermont-2752b22b4/' src="linkedin" alt="dd"/>
                        <LogoImage href='https://www.instagram.com/eggermontlouis/' src="instagram" alt="dd"/>
                        <LogoImage href='mailto:louis.eggermont@student.howest.be' src="email" alt="dd"/>
                        <LogoImage href='https://mct.be/' src="education" alt="dd" />
                </div>
            </div>
        </div>
    );
}
