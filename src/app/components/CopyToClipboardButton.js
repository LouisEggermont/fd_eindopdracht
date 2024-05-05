"use client";
import { useState } from 'react';
import copy from 'clipboard-copy';
import { Tooltip } from './Tooltip';

const CopyToClipboardButton = ({ text }) => {
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
        <img
          className='relative h-[1.5rem] sm:w-[4rem] sm:h-[2rem] object-contain hover:scale-110 transition-all duration-200'
          src={`/logos/email.png`} 
          alt="email icon" 
        />            
        </Tooltip>
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
