import React from "react";
import logo from '../FooterComponent/Images/X_logo.png';

const JoinTwitter = () => {
  const channelLink = "https://x.com/PrasadPenumaka_?t=SQZsR4YYiDD_AvP6ZjrJVA&s=08";

  const handleTwitterButtonClick = () => {
    window.open(channelLink, "_blank");
  };

  return (
    <button className="twitter-text" onClick={handleTwitterButtonClick}>
      <img src={logo} className='twitter-img' alt="Twitter logo" />
    </button>
  );
};

export default JoinTwitter;
