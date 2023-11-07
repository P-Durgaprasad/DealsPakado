import React ,{useState,useEffect} from 'react';
import logo from '../FooterComponent/Images/Facebook_logo_.png';

const JoinFacebook = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const channelLink = "fb://page/my_facebook_page";
  const fallbackUrl = "https://facebook.com/my_facebook_page";

  const handleButtonClick = () => {
    if (isDesktop) {
      // Open the Telegram link in a new tab.
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
      <img src={logo} className='facebook-img' alt="Facebook logo" />
    </button>
  );
};

export default JoinFacebook;
