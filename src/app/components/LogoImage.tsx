import Image from 'next/image';

interface LogoImageProps {
  src: string;
  alt: string;
  href: string;
}

const LogoImage = ({ src, alt, href }: LogoImageProps) => {
  return (
    <a href={`${href}`} target="_blank" className='h-10 flex items-center justify-center'>
        <img className='h-full object-contain' src={`/logos/${src}.png`} alt={alt} />
    </a>
  )
};

export default LogoImage;