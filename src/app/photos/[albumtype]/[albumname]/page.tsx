  import React from 'react';
// import { useRouter } from 'next/router';
import Image from 'next/image';
import CldImageComponent from '@/app/components/CldImageComponent';
import ArrowBack from '@/app/components/ArrowBack';
import Modal from '@/app/components/Modal';
import Link from 'next/link';
import PictureList from '@/app/components/PictureList';
// import { getPicturesForAlbum } from '../../../../components/albfunc';


async function getPicturesForAlbum(subdirectory: string) {
  
  var cloudinary = require('cloudinary');

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });


    var result = await cloudinary.v2.search.expression(
      `folder:"${subdirectory}/*"`
      ).sort_by('public_id','desc').max_results(30).execute();

    return result;
}

export default async function AlbumPage({
    params,
}: {
  params: { albumtype: string; albumname: string };
}) {
    console.log(params.albumtype + "/" + decodeURIComponent(params.albumname));
  const pictures = await getPicturesForAlbum(params.albumtype + "/" + decodeURIComponent(params.albumname));
//   console.log(pictures);

  return (


// {/* <div><h2 className=' mt-12 font-bold text-6xl'>{decodeURIComponent(params.albumname)}</h2>



// <div className=' w-full mx-auto my-10 gap-5 columns-1 sm:columns-2 md:columns-3 space-y-5'>
//            {pictures.resources.map((picture: any, index: number) => (
//                <div className='' key={picture.public_id}>
//                 <Link href={`/image=${index.toString()}`}>
//                       <CldImageComponent
//                            src={picture.public_id}
//                            width={picture.width}
//                             height={picture.height}
//                             aspectRatio={picture.aspect_ratio}
              
//                        />
//                        </Link>
//                </div>
//            ))}
//            {/* <Modal>     <CldImageComponent
//                            src={pictures.resources[2].public_id}
//                            width={pictures.resources[2].width}
//                             height={pictures.resources[2].height}
//                             aspectRatio={pictures.resources[2].aspect_ratio}
//                        /></Modal> */}
//            </div> 
//      </div> */}
<PictureList albumname={decodeURIComponent(params.albumname)} pictures={pictures} />
  );
};
