import React, { useState,useEffect  } from "react";
import logo from './whatsapp-footer.png';

const JoinWhatsApp = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const channelLink = "https://whatsapp.com/channel/0029Va88RYJAjPXIZN7pHm0t";

  const handleButtonClick = () => {
    if (isDesktop) {
      window.open(channelLink, "_blank");
    } else {
      const isWhatsAppInstalled = window.matchMedia("(platform: iphone)").matches || window.matchMedia("(platform: android)").matches;
      if (isWhatsAppInstalled) {
        window.open(`whatsapp://wa.me/?text=${channelLink}`);
      } else {
        window.open(channelLink, "_blank");
      }
    }
  };

  useEffect(() => {
    setIsDesktop(window.matchMedia("(hover: none)").matches);
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button className="whatsapp_text" onClick={handleButtonClick}>
    <img src={logo}  className='whatsapp-img' alt="Follow us on whatsapp for the latest updates and deals" />
  </button>
  );
};

export default JoinWhatsApp;
