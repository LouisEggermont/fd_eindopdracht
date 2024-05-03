"use client";
import { CldImage } from 'next-cloudinary';

interface CldImageComponentProps {
  aspectRatio: string;
  width: string;
  height: string;
  src: string;
  sizes: string;
  crop: string;
  gravity: string;
  alt: string;
}

const CldImageComponent: React.FC<CldImageComponentProps> = ({
  aspectRatio,
  width,
  height,
  src,
  sizes,
  crop,
  gravity,
  alt,
}) => {
  return (
   <CldImage
      aspectRatio={aspectRatio}
      width={parseInt(width)}
      height={parseInt(height)}
      src={src}
      // sizes="(max-width: 768px) 100vw,
      // (max-width: 1200px) 50vw,
      // 33vw"
        sizes="(max-width: 640px) 100vw, (max-width: 786px) 50vw, 33vw"
      crop="fill"
      gravity="auto"
      alt={alt}
      quality={20}
    />

  );
};

export default CldImageComponent;