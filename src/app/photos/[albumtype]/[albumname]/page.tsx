import React from 'react';

import PictureList from '@/app/components/PictureList';


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
  const pictures = await getPicturesForAlbum(params.albumtype + "/" + decodeURIComponent(params.albumname));


  return (

<PictureList albumname={decodeURIComponent(params.albumname)} pictures={pictures} />
  );
};
