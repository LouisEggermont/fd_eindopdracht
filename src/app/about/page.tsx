import Image from 'next/image'
import LogoImage from '../components/LogoImage'

export default function AboutPage() {
    return (
        <div className='flex lg:flex-row-reverse flex-col justify-between gap-6 my-11'>
            <div className=''>
            <Image priority className=' shadow-lg' src={`/pictures/about/aboutimage.jpg`} alt="picture of me explaining" width={600} height={400} /> 
            </div>
            <div className='flex flex-col justify-between max-w-[550px]'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='w-full flex gap-6 mt-10'>

                        <LogoImage href='https://github.com/LouisEggermont' src="github" alt="github icon"/>
                        <LogoImage href='https://www.linkedin.com/in/louis-eggermont-2752b22b4/' src="linkedin" alt="linkedin icon"/>
                        <LogoImage href='https://www.instagram.com/eggermontlouis/' src="instagram" alt="instagram icon"/>
                        <LogoImage href='mailto:louis.eggermont@student.howest.be' src="email" alt="email icon"/>
                        <LogoImage href='https://mct.be/' src="education" alt="education icon" />
                </div>
            </div>
        </div>
    );
}
