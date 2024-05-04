import Link from "next/link";

const Logo = ({ size, text }: { size: boolean, text: string }) => {
  if (size) {
    return (
      <div className={`font-helvetica font-bold sm:text-[7vw] text-[12.65vw] leading-none pt-20 transition-all duration-500 ease-in-out`}>
        <Link href={"/"}>LOUIS</Link>{text ? <span className="font-normal text-[8vw] sm:text-[4vw]">&gt;{text}</span> : null}
        <br /><Link className="break-words" href={"/"}>EGGERMONT</Link>
      </div>
    );
  } else {
    return (
      <div className={`font-helvetica font-bold text-[12.65vw] leading-none pt-20 transition-all duration-500 ease-in-out`}>
        <Link href={"/"}>LOUIS</Link>{text ? <span className="font-normal text-[8vw] sm:text-[4vw]">&gt;{text}</span> : null}
        <br /><Link href={"/"}>EGGERMONT</Link>
      </div>
    );
  }
}

export default Logo;