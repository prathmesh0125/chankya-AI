import React, { useState, useEffect } from 'react';
import { BiHeart, BiShareAlt, BiCopy, BiDislike, BiDotsHorizontal } from 'react-icons/bi';
import { RiThumbDownLine } from 'react-icons/ri';

export default function BottomStrip({ resultData }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [shareClicked, setShareClicked] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsPopoverOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCopyClick = async () => {
    try {
      // Copy the text to the clipboard
      await navigator.clipboard.writeText(
        document.querySelector(".result-data p").innerText
      );
      setCopyClicked("Copied");
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  const handleLikeClick = () => {
    // Example logic for handling liking
    console.log("Liked");
    setLikeClicked(!likeClicked); // Toggle like state
    setDislikeClicked(false); // Reset dislike state
  };

  const handleDislikeClick = () => {
    // Example logic for handling disliking
    console.log("Disliked");
    setDislikeClicked(!dislikeClicked); // Toggle dislike state
    setLikeClicked(false); // Reset like state
  };

  const handleShareClick = () => {
    // Example logic for handling sharing
    console.log("Shared");
    setShareClicked(!shareClicked); // Toggle share state
  };

  const handleReportClick = () => {
    // Example logic for handling reporting
    console.log("Reported");
  };

  return (
    <>
      {isVisible && (
        <div className="relative inset-x-0 flex items-center justify-center gap-6 m-auto -bottom-4">
          <TextButton
            Icon={BiHeart}
            text={likeClicked ? "Liked" : "Like"}
            onClick={handleLikeClick}
            clicked={likeClicked}
          />
          <TextButton
            Icon={RiThumbDownLine}
            text={dislikeClicked ? "Disliked" : "Dislike"}
            onClick={handleDislikeClick}
            clicked={dislikeClicked}
          />
          <TextButton
            Icon={BiShareAlt}
            text={shareClicked ? "Shared" : "Share"}
            onClick={handleShareClick}
            clicked={shareClicked}
          />
          <TextButton
            Icon={BiCopy}
            text={copyClicked ? "Copied" : "Copy"}
            onClick={handleCopyClick}
            clicked={copyClicked}
          />
          <div className="relative">
            <TextButton Icon={BiDotsHorizontal} text="More" onClick={() => setIsPopoverOpen(!isPopoverOpen)} />
            {isPopoverOpen && (
              <div className="absolute right-0 -mt-20 w-32 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 report-button"
                  >
                    Report illegal
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function TextButton({ Icon, text, onClick, tooltip, clicked }) {
  return (
    <button
      className={`flex items-center justify-center rounded-full p-2 focus:outline-none relative ${clicked ? 'bg-gray-300' : ''}`}
      onClick={onClick}
    >
      <Icon className="w-6 h-6 mr-2" />
      <span className="text-sm">{text}</span>
      {tooltip && (
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-1 py-0.5 rounded shadow">
          {tooltip}
        </span>
      )}
    </button>
  );
}
