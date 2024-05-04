"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';
import Modal from '@/app/components/Modal';

type PictureListProps = {
  albumname: string,
  pictures: {
    resources: {
      public_id: string,
      width: number,
      height: number,
      aspect_ratio: number,
      filename: string
    }[]
  }
}

const PictureList: React.FC<PictureListProps> = ({ albumname, pictures }) => {
        const router = useRouter();
        const pathname = usePathname();
        const searchParams = useSearchParams()
        // const navigate = useNavigate();
        const imageIndex = (searchParams.get('image'));
        const imageIndexNumber = imageIndex ? parseInt(imageIndex) + 1 : null;
        console.log(pictures.resources[0]);

  return (
    <div>
      <h2 className='my-10 sm:my-12 md:my-20 font-bold text-6xl'>{decodeURIComponent(albumname)}</h2>
      <div className='w-full mx-auto my-10 gap-5 columns-1 sm:columns-2 md:columns-3 space-y-5'>
        {pictures.resources.map((picture: any, index: number) => (
          <div className='cursor: zoom-in' key={picture.public_id}>
            <Link href={`${pathname}?image=${index}`} scroll={false}>
              <CldImage
              className='shadow-lg'
                src={picture.public_id}
                width={picture.width}
                height={picture.height}
                aspectRatio={picture.aspect_ratio}
                sizes="(max-width: 640px) 100vw, (max-width: 786px) 50vw, 33vw"
                crop="fill"
                gravity="auto"
                alt={picture.filename}
                quality="50"
                format='auto'
              />
            </Link>
          </div>
        ))}
      </div>

   {imageIndexNumber && (
    <Modal onClose={() => {history.back()}}>
      <button onClick={() => {history.back()}}>Close</button>
       <CldImage
       src={pictures.resources[imageIndexNumber - 1].public_id}
       width={pictures.resources[imageIndexNumber - 1].width}
       height={pictures.resources[imageIndexNumber - 1].height}
       aspectRatio={pictures.resources[imageIndexNumber - 1].aspect_ratio}
       alt={pictures.resources[imageIndexNumber - 1].filename}
       />
    </Modal>
    )}
    </div>
  );
}

export default PictureList;