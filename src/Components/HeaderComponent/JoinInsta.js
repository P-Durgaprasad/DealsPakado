import React, { useState, useEffect } from "react";
import logo from '../FooterComponent/Images/Instagram_logo.png';

const JoinInsta = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const channelLink = "https://www.instagram.com/dealspakado";

  const handleButtonClick = () => {
    if (isDesktop) {
      // Open the Instagram link in a new tab.
      window.open(channelLink, "_blank");
    } else {
      // Check if the Instagram app is installed on the user's device.
      const isInstagramInstalled = window.matchMedia("(platform: iphone)").matches || window.matchMedia("(platform: android)").matches;

      // If the Instagram app is installed, open it. Otherwise, open the Instagram link in the browser.
      if (isInstagramInstalled) {
        window.open(`instagram://share?url=https://www.instagram.com/dealspakado`);
      } else {
        window.open(channelLink, "_blank");
      }
    }
  };

  useEffect(() => {
    setIsDesktop(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <button className="instagram_text" onClick={handleButtonClick}>
      <img src={logo} className='instagram-img' alt="Instagram logo" />
    </button>
  );
};

export default JoinInsta;
