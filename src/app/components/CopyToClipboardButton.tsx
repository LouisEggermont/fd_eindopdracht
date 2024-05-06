"use client";
import Image from 'next/image';
import { useState } from 'react';
import copy from 'clipboard-copy';
import { Tooltip } from './Tooltip';

interface CopyToClipboardButtonProps {
  text: string;
}

const CopyToClipboardButton = ({ text }: CopyToClipboardButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(text);
      setIsCopied(true);
    } catch (error) {
      console.error('Failed to copy text to clipboard', error);
    }
  };

  return (
    <div>
      <button onClick={handleCopyClick}>
        <Tooltip content={isCopied ? 'Copied!' : 'Copy to Clipboard'}>
          <div className='relative w-[1.5rem] h-[1.5rem] sm:w-[4rem] sm:h-[2rem]'>
            <Image
              src="/logos/email.png"
              alt="email icon"
              fill
              sizes='10vw'
              className="hover:scale-110 transition-all duration-200 object-contain"
            />
          </div>
        </Tooltip>
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
