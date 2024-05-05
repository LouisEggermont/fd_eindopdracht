const Logo = ({ size, text, onClick }: { size: boolean, text: string, onClick?: () => void }) => {
  if (size) { 
    return (
      <div className={`font-helvetica font-bold sm:text-[7vw] text-[12.65vw] leading-none pt-20 transition-all duration-500 ease-in-out`}>
        <button onClick={onClick}>LOUIS</button>{text ? <span className="transition-opacity font-normal text-[8vw] sm:text-[4vw]">&gt;{text}</span> : null}
        <br /><button onClick={onClick} className="break-words">EGGERMONT</button>
      </div>
    );
  } else {
    return (
      <div className={`font-helvetica font-bold text-[12.65vw] leading-none pt-20 transition-all duration-500 ease-in-out`}>
        <button onClick={onClick}>LOUIS</button>{text ? <span className="transition-opacity font-normal text-[8vw] sm:text-[4vw]">&gt;{text}</span> : null}
        <br /><button onClick={onClick}>EGGERMONT</button>
      </div>
    );
  }
}

export default Logo;