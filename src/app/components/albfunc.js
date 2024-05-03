import fs from 'fs';
import path from 'path';

export function getAllAlbumIds(subdirectory) {
  const baseDirectory = 'public/photos/';
  const albumsDirectory = path.join(process.cwd(), baseDirectory, subdirectory);
  const fileNames = fs.readdirSync(albumsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName,
      },
    };
  });
}
export function getPicturesForAlbum(albumDirectory) {
  const fullDirectory = path.join(process.cwd(), 'public/photos/', albumDirectory);
  const fileNames = fs.readdirSync(fullDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace('.jpg', ''),
      },
    };
  });
}