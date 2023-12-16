import React, { useState, useEffect } from "react";
import logo from '../FooterComponent/Images/YouTube_Logo.png';

const JoinYouTube = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const channelLink = "https://www.youtube.com/channel/UCAM-fJg-odtigo5sQeEDv7A";

  const handleButtonClick = () => {
    if (isDesktop) {
      window.open(channelLink, "_blank");
    } else {
      const isYouTubeInstalled = window.matchMedia("(platform: iphone)").matches || window.matchMedia("(platform: android)").matches;
      if (isYouTubeInstalled) {
        window.open(`https://www.youtube.com/channel/UCAM-fJg-odtigo5sQeEDv7A`);
      } else {
        window.open(channelLink, "_blank");
      }
    }
  };

  useEffect(() => {
    setIsDesktop(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <button className="youtube_text" onClick={handleButtonClick}>
      <img src={logo} className='youtube-img' alt="YouTube logo" />
    </button>
  );
};

export default JoinYouTube;
