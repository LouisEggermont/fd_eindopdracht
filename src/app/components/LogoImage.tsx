
import Image from 'next/image';

interface LogoImageProps {
  src: string;
  alt: string;
  href: string;
}

const LogoImage = ({ src, alt, href }: LogoImageProps) => {
  return (
        <a href={href} target="_blank" className='relative w-[10%] h-[1.5rem] sm:w-[4rem] sm:h-[2rem]'>
      <Image className='object-contain'
          src={`/logos/${src}.png`} 
          alt={alt} 
          fill
          sizes="10vw"
        />
        </a>
  );
};

export default LogoImage;