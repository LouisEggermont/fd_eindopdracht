export default async function ProjectPage({
    params,
}: {
  params: { projectname: string; };
}) {


  return (
    <p className='font-bold text-6xl'>{params.projectname}</p>

  );
};