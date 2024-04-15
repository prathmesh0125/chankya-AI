import React, { useState } from 'react';
import { BiHeart, BiShareAlt, BiCopy, BiDislike, BiDotsHorizontal } from 'react-icons/bi';
import { RiThumbDownLine } from 'react-icons/ri';
export default function BottomStrip() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className="relative inset-x-0  flex items-center justify-center  gap-6 m-auto -bottom-4">
      <TextButton Icon={BiHeart} text="Like" />
      <TextButton Icon={RiThumbDownLine} text="Dislike" />
      <TextButton Icon={BiShareAlt} text="Share" />
        <TextButton Icon={BiCopy} text="Copy" />
      <div className="relative">
        <TextButton
          Icon={BiDotsHorizontal}
          text="More"
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        />
        {isPopoverOpen && (
           <div className="absolute right-0 -mt-20  w-32 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
           <div className="py-1">
             <a
               href="#"
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
             >
               Report illegal
             </a>
           </div>
         </div>
        )}
      </div>
    </div>
  );
}

function TextButton({ Icon, text, onClick }) {
  return (
    <button
      className="flex items-center justify-center rounded-full p-2 focus:outline-none"
      onClick={onClick}
    >
      <Icon className="w-6 h-6 mr-2" />
      <span className="text-sm">{text}</span>
    </button>
  );
}
