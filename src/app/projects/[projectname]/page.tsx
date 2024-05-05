
import dynamic from 'next/dynamic';
import MdxLayout from '@/app/components/Mdx/MdxLayout';
import fs from 'fs';
import path from 'path';


export const revalidate = 86400; // Revalidate every 24 hours

  export async function generateStaticParams() {
    const contentDirectory = path.join(process.cwd(), 'src/app/content');
    const filenames = fs.readdirSync(contentDirectory);

    return filenames.map((filename) => {
      return {
      filename,
      }
  })
  }


export default async function ProjectPage({
    params,
}: {
  params: { projectname: string; };
}) {

  const MdxPage = dynamic(() =>
    import(`@/app/content/${params.projectname}.mdx`).catch(() => import(`@/app/content/${params.projectname}.mdx`))
  );

  return (
    <MdxLayout><MdxPage/></MdxLayout>

  );
};  