import React, { useState, useEffect } from "react";
import logo from '../FooterComponent/Images/Telegram_Logo.png';

const JoinTelegram = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const channelLink = "https://t.me/dealspakado";

  const handleButtonClick = () => {
    if (isDesktop) {
      window.open(channelLink, "_blank");
    } else {
      const isTelegramInstalled = window.matchMedia("(platform: iphone)").matches || window.matchMedia("(platform: android)").matches;
      if (isTelegramInstalled) {
        window.open(`tg://resolve?domain=dealspakado`);
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
      <img src={logo} className='telegram-img' alt="Join us on Telegram for exclusive deals and updates" />
    </button>
  );
};

export default JoinTelegram;
