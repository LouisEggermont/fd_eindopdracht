
import AlbumListComponent from '@/app/components/AlbumList';

export const revalidate = 86400; // Revalidate every 24 hours

  export async function generateStaticParams() {
    const albumtypes = ['analog', 'digi'];

    return albumtypes.map((albumtype) => {
      return {
        albumtype,
      }
  })
  }

export default async function AlbumPage({
    params,
    }: {
     params: {albumtype: string };
   }) {
 

return (
         <AlbumListComponent albumtype={params.albumtype}></AlbumListComponent>
        // <p className=' font-normal hover:font-bold transition-all duration-1000 drop-shadow-2xl'>{params.albumtype}</p>

);
 };