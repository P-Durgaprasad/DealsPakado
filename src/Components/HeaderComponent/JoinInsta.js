import React, { useState, useEffect } from "react";
import logo from '../FooterComponent/Images/Instagram_logo.png';

const JoinInsta = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const channelLink = "https://www.instagram.com/dealspakado";

  const handleButtonClick = () => {
    if (isDesktop) {
      window.open(channelLink, "_blank");
    } else {
      const isInstagramInstalled = window.matchMedia("(platform: iphone)").matches || window.matchMedia("(platform: android)").matches;
      if (isInstagramInstalled) {
        window.open(`instagram://user?username=dealspakado`);
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
