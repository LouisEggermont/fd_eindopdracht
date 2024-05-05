export default function MdxBody({ children }: { children: React.ReactNode }) {

    return (
    <div className="w-full mx-auto columns-1 sm:columns-2">
        {children}
      </div>
    )
  }