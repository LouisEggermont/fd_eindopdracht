import Image from 'next/image'
import fs from 'fs';
import path from 'path';

export async function getImages(imageFolder: string) {
    const contentDirectory = path.join(process.cwd(), `public/pictures/projects/${imageFolder}`);
    const filenames = fs.readdirSync(contentDirectory);
  
    return filenames;
}

export default async function MdxImages({ imageFolder }: { imageFolder: string }) {
    const images = await getImages(imageFolder);

    return (
        <div className="w-full mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
            {images.map((image, index) => (
                <div key={index} className="w-full relative pb-[56.25%]">
                    <Image 
                    className='shadow-lg object-cover'
                        src={`/pictures/projects/${imageFolder}/${image}`} 
                        fill
                        sizes='(max-width: 640  px) 100vw, (max-width: 786px) 50vw, 33vw'
                        priority
                        alt={`${imageFolder} project detail picture`} 
                    />
                </div>
            ))}
        </div>
    );
}