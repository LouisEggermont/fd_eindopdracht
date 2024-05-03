import React, { useEffect, useState } from 'react';
import Link from 'next/link';

let cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

async function getFolder(subdirectory: string) {
  var result = await cloudinary.api.sub_folders(subdirectory);
  return result;
}

let AlbumsList = async ({ directory }: { directory: string }) => {
  let folders = await getFolder(directory);
  console.log(folders);

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {folders.folders.map((folder: any) => (
          <li key={folder.path}>
            <Link href={`/photos/albums/${directory}/${encodeURIComponent(folder.name)}`}>
              {folder.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsList;