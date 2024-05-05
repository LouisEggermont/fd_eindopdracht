import styles from './ProseOverride.module.css';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${styles.prose} prose font-helvetica max-w-[100%] my-10 sm:my-16 sm:prose-h2:text-6xl prose-h2:text-4xl prose-h2:font-normal prose-h2:mb-4  md:prose-p:w-[90%] last:prose-p:mb-0 md:prose-img:w-[45%] lg:prose-img:w-[30%] prose-img:m-0`}>
      {children}
    </div>
  );
}