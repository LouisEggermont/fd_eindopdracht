  import { cache } from 'react';
  import Link from 'next/link';
  import CldImageComponent from '@/app/components/CldImageComponent';

  let cloudinary = require('cloudinary').v2;

  cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true
    });

    const getRandomNumber = cache(async () => {
    // async function getRandomNumber() {
      return Math.floor(Math.random() * 100);
    });

    async function getFirstImage(folderName: string) {
      const result = await cloudinary.search
        .expression(`folder:"${folderName}/*"`)
        .sort_by('public_id', 'desc')
        .max_results(1)
        .execute();
    
      return result.resources[0].public_id;
    }

    export const getFolders = cache(async (subdirectory: string) => {
    // async function getFolders(subdirectory: string) {
    
      const result = await cloudinary.api.sub_folders(subdirectory);
    
      const foldersWithImages = await Promise.all(
        result.folders.map(async (folder: any) => { // Specify the type of 'folder' as 'any'
          folder.firstImageUrl = await getFirstImage(folder.path);
          return folder;
        })
      );
    
      return foldersWithImages;
    });



    export const revalidate = 3600 

  //   let AlbumsList = async ({ directory }: { directory: string }) => {
  export default async function AlbumListComponent({albumtype}: {albumtype:  string }) {

    async function getRandomNumber2() {
      return Math.floor(Math.random() * 100);
    }
  
    const folders = await getFolders(albumtype);
  //    console.log(folders);

  return (

      // <div className='flex justify-between mt-24 flex-wrap'>
          <div className='my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
            {folders.map((folder: any) => (
              <div className='' key={folder.path}>
                <Link href={`/photos/${albumtype}/${encodeURIComponent(folder.name)}`}>
                  <CldImageComponent
                    src={folder.firstImageUrl}
                    width='505'
                    height='284'
                    aspectRatio="16:9"
                    sizes="100vw"
                    crop="fill"
                    gravity="auto"
                    alt="Album Image"
                  />
                  <p className=' text-2xl mt-4'>{folder.name}</p>
                </Link>
              </div>
            ))}
        </div> 
  );
  };