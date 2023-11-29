import React, { useState, useEffect } from "react";
import logo from '../FooterComponent/Images/YouTube_Logo.png';

const JoinYouTube = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const channelLink = "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA";

  const handleButtonClick = () => {
    if (isDesktop) {
      // Open the YouTube link in a new tab.
      window.open(channelLink, "_blank");
    } else {
      // Check if the YouTube app is installed on the user's device.
      const isYouTubeInstalled = window.matchMedia("(platform: iphone)").matches || window.matchMedia("(platform: android)").matches;

      // If the YouTube app is installed, open it. Otherwise, open the YouTube link in the browser.
      if (isYouTubeInstalled) {
        window.open(`youtube://channel/UCwfaAHy4zQUb2APNOGXUCCA`);
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
