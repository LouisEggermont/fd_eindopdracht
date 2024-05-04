

export default function MdxLayout({ children }: { children: React.ReactNode }) {

    return (
    <div className="max-w-[100%] my-10 sm:my-16 prose sm:prose-h2:text-6xl prose-h2:text-4xl prose-h2:font-normal prose-h2:mb-4 md:prose-p:w-[47%] md:prose-p:mb-16  md:prose-img:w-[45%] lg:prose-img:w-[30%] prose-img:m-0">
        {children}
      </div>
    )
  }