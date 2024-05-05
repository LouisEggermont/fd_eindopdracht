import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image'
import { Metadata } from 'next';


async function getProjectsAndThumbnail() {
  const contentDirectory = path.join(process.cwd(), 'src/app/content');
  const projectNames = fs.readdirSync(contentDirectory);

  const projects = await Promise.all(projectNames.map(async (project) => {
    const projectName = project.replace(/\.mdx$/, '');
    const imageDirectory = path.join(process.cwd(), `/public/pictures/projects/${projectName}`);
    const imageNames = fs.readdirSync(imageDirectory);
    const firstImage = imageNames[0];
    return { name: projectName, firstImage };
  }));

  return { props: { projects } };
}

export default async function Page() {
 const { props: { projects } } = await getProjectsAndThumbnail();
  return (
    <div className='my-10 sm:my-12 md:my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
      {projects.map((project, index) => (
        <div key={index}>
          <Link href={`/projects/${project.name}`}>
          <div className="relative w-full pb-[56.25%] hover:scale-102 transition-all ease-in-out duration-200">
              <Image  className='shadow-lg object-cover'
                src={`/pictures/projects/${project.name}/${project.firstImage}`} 
                alt={`${project.name} example image`}
                fill
                sizes='(max-width: 640  px) 100vw, (max-width: 786px) 50vw, 33vw'
                priority
              />
              </div>
              <p className='sm:text-2xl text-xl mt-2'>{project.name}  </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
