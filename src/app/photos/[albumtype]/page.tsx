
import AlbumListComponent from '@/app/components/AlbumListComponent';

  export async function generateStaticParams() {
    const albumtypes = ['analog', 'digi'];

    return albumtypes.map((albumtype) => {
      return {
        albumtype,
      }
  })
  }

export default async function AlbumPageAnalog({
    params,
    }: {
     params: {albumtype: string };
   }) {
 

return (
         <AlbumListComponent albumtype={params.albumtype}></AlbumListComponent>

);
 };