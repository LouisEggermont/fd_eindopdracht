  import Link from 'next/link';
  import CldImageComponent from '@/app/components/CldImage';

  let cloudinary = require('cloudinary').v2;

  cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true
    });

    async function getFirstImage(folderName: string) {
      const result = await cloudinary.search
        .expression(`folder:"${folderName}/*"`)
        .sort_by('public_id', 'desc')
        .max_results(1)
        .execute();
    
      return result.resources[0].public_id;
    }

    export const getFolders = async (subdirectory: string) => {
    
      const result = await cloudinary.api.sub_folders(subdirectory);
    
      const foldersWithImages = await Promise.all(
        result.folders.map(async (folder: any) => {
          folder.firstImageUrl = await getFirstImage(folder.path);
          return folder;
        })
      );
    
      return foldersWithImages;
    };


  export default async function AlbumListComponent({albumtype}: {albumtype:  string }) {
    try {
      const folders = await getFolders(albumtype);

      if (albumtype === 'analog') {
          folders.sort((a: any, b: any) => {
              const rollNumberA = parseInt(a.name.replace('Roll ', ''));
              const rollNumberB = parseInt(b.name.replace('Roll ', ''));
              return rollNumberA - rollNumberB;
          });
          
      }

      return (
          <div className='my-10 sm:my-12 md:my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
              {folders.map((folder: any) => (
                  <div className='' key={folder.path}>
                      <Link href={`/photos/${albumtype}/${encodeURIComponent(folder.name)}`}>
                          <CldImageComponent
                              src={folder.firstImageUrl}
                              width='505'
                              height='284'
                              aspectRatio="16:9"
                              sizes="(max-width: 640  px) 100vw, (max-width: 786px) 50vw, 33vw"
                              crop="fill"
                              gravity="auto"
                              alt={`${folder.name} folder image`}
                          />
                          <p className='sm:text-2xl text-xl mt-2'>{folder.name}</p>
                      </Link>
                  </div>
              ))}
          </div>
      );
  } catch (error: any) {
    return (
      <div className='w-full h-[80vh] flex justify-center items-center font-bold'>
        <p>Error while fetching images: {error.error ? error.error.message : error}</p>
      </div>
    );
  }
  };



  