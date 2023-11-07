import React, { useState,useEffect  } from "react";
import logo from './whatsapp.png';

const JoinWhatsApp = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const channelLink = "https://whatsapp.com/channel/0029Va88RYJAjPXIZN7pHm0t";

  const handleButtonClick = () => {
    if (isDesktop) {
      // Open the WhatsApp link in a new tab.
      window.open(channelLink, "_blank");
    } else {
      // Check if WhatsApp is installed on the user's device.
      const isWhatsAppInstalled = window.matchMedia("(platform: iphone)").matches || window.matchMedia("(platform: android)").matches;

      // If WhatsApp is installed, open it. Otherwise, open the WhatsApp link in the browser.
      if (isWhatsAppInstalled) {
        window.open(`whatsapp://wa.me/?text=${channelLink}`);
      } else {
        window.open(channelLink, "_blank");
      }
    }
  };

  useEffect(() => {
    setIsDesktop(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <button className="whatsapp_text" onClick={handleButtonClick}>
    <img src={logo}  className='whatsapp-img' alt="WhatsApp logo" />
    {/* <p className="whatsapp_title">Follow Our WhatsApp Channel</p> */}
  </button>
  );
};

export default JoinWhatsApp;
