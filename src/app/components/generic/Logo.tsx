import Link from "next/link";

const Logo = ({ className, text }: { className: string, text: string }) => {
  return (
    // <div className={`font-helvetica font-bold text-[20vw] lg:text-[12vw] sm:text-[20vw] md:text-[20vw] sm text-wrap leading-none pt-20 transition-all duration-500 ease-in-out break-words w-full`}>
    <div className={`font-helvetica font-bold ${className} leading-none pt-20 transition-all duration-500 ease-in-out`}>
      <Link href={"/"}>LOUIS</Link>{text ? <span className="font-normal text-[4vw]">&gt;{text}</span> : null}
      <br /><Link className="break-words" href={"/"}>EGGERMONT</Link>
    </div>
  );
}

export default Logo;
