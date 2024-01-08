import React, { useState, useEffect } from 'react';
import logo from '../FooterComponent/Images/Facebook_logo_.png';

const JoinFacebook = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const channelLink = "fb://page/profile.php?id=61554018497801";
  const fallbackUrl = "https://www.facebook.com/profile.php?id=61554018497801";

  const handleButtonClick = () => {
    if (isDesktop) {
      window.open(channelLink, "_blank");
    } else {
      const isFacebookInstalled = window.matchMedia("(platform: iphone)").matches || window.matchMedia("(platform: android)").matches;

      if (isFacebookInstalled) {
        window.open(channelLink, "_blank");
      } else {
        window.open(fallbackUrl, "_blank");
      }
    }
  };
  useEffect(() => {
    setIsDesktop(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <button className="facebook_text" onClick={handleButtonClick}>
      <img src={logo} className='facebook-img' alt="Join us on Facebook for updates and more" />
    </button>
  );
};

export default JoinFacebook;
