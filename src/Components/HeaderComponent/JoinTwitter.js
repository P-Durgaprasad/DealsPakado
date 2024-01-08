import React from "react";
import logo from '../FooterComponent/Images/X_logo.png';

const JoinTwitter = () => {
  const channelLink = "https://twitter.com/dealspakado";

  const handleTwitterButtonClick = () => {
    window.open(channelLink, "_blank");
  };

  return (
    <button className="twitter-text" onClick={handleTwitterButtonClick}>
      <img src={logo} className='twitter-img'alt="Follow us on Twitter for the latest updates and deals"/>
    </button>
  );
};

export default JoinTwitter;
