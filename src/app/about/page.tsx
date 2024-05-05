import Image from 'next/image'
import LogoImage from '../components/LogoImage'
import CopyToClipboardButton from '../components/CopyToClipboardButton'
import { Tooltip } from '../components/Tooltip';

export default function AboutPage() {
    return (
        <div className='flex lg:flex-row-reverse flex-col justify-between gap-6 my-11 prose-p:text-[#4a4a4a] prose-p:leading-relaxed'>
            <div className=''>
            <Image priority className=' shadow-lg' src={`/pictures/about/aboutimage.jpg`} alt="picture of me explaining" width={600} height={400} /> 
            </div>
                        <div className='flex flex-col justify-between max-w-[550px]'>
                            {/* <p>Ik ben een 21-jarige student aan Howest Kortrijk, waar ik Multimedia Creative Technologies studeer met een focus op &ldquo;Next Web Development&rdquo;. Mijn intresse voor webontwikkeling begon tijdens mijn middelbare schooltijd aan Athena Campus Heule. <br /><br />Naast webontwikkeling ben ik ook een liefhebber van analoge fotografie en vervulde ik twee jaar lang de functie &ldquo;PR &amp; Media&rdquo; bij mijn studentenclub EcLipticA. In mijn vrije tijd geniet ik van motorrijden en blijf ik bezig met zowel design als development. Wil je me nog beter leren kennen? hieronder vind je enkele links</p> */}
            <p>I am a 21-year-old student at Howest Kortrijk, where I am studying Multimedia Creative Technologies with a focus on &ldquo;Next Web Development&rdquo;. My interest in web development started during my secondary school years at Athena Campus Heule. <br /><br /> In addition to web development, I am also a fan of analog photography and I served as head of &ldquo;PR &amp; Media&rdquo; for my students association EcLipticA for two years. In my free time I enjoy motorcycling and I stay involved in both design and development. Want to get to know me better? You can find some links below.</p>
                            <div className='w-full flex gap-6 mt-10'>

                                    <LogoImage href='https://github.com/LouisEggermont' src="github" alt="github icon"/>
                                    <LogoImage href='https://www.linkedin.com/in/louis-eggermont-2752b22b4/' src="linkedin" alt="linkedin icon"/>
                                    <LogoImage href='https://www.instagram.com/eggermontlouis/' src="instagram" alt="instagram icon"/>                
                                    <CopyToClipboardButton text={"louis.eggermont@student.howest.be"} />                      
                                    <LogoImage href='https://mct.be/' src="education" alt="education icon" />
                                    
                            </div>
                        </div>
        </div>
    );
}
