import React, { useState, useEffect } from "react";
import logo from '../FooterComponent/Images/Telegram_Logo.png';

const JoinTelegram = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const channelLink = "https://t.me/dealspakado";

  const handleButtonClick = () => {
    if (isDesktop) {
      // Open the Telegram link in a new tab.
      window.open(channelLink, "_blank");
    } else {
      // Check if Telegram is installed on the user's device.
      const isTelegramInstalled = window.matchMedia("(platform: iphone)").matches || window.matchMedia("(platform: android)").matches;

      // If Telegram is installed, open it. Otherwise, open the Telegram link in the browser.
      if (isTelegramInstalled) {
        window.open(`tg://resolve?domain=my_telegram_channel`);
      } else {
        window.open(channelLink, "_blank");
      }
    }
  };

  useEffect(() => {
    setIsDesktop(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <button className="telegram_text" onClick={handleButtonClick}>
      <img src={logo} className='telegram-img' alt="Telegram logo" />
      {/* <p className="telegram_title">Follow Our Telegram Channel</p> */}
    </button>
  );
};

export default JoinTelegram;
