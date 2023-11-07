import React from "react";
import whatsapp from '../../HeaderComponent/whatsapp.png';

const ShareProduct = ({ url, title ,imageUrl,price}) => {
  const formattedMessage = `*${title}* - Offer Price: Rs.${price}\n\nImage: ${imageUrl}\n\nBuy : ${url}`;
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
  const handleShare = () => {
    if (isMobile()) {
      // Open WhatsApp on mobile
      window.open(`whatsapp://send?text=${encodeURIComponent(formattedMessage)}`);
    } else {
      // Open WhatsApp Web on desktop
      window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(formattedMessage)}`);
    }
  };

  return (
    <>
    <button type="button" onClick={handleShare} className="btn btn-share">
    <img src={whatsapp} alt="Share" className="btn-share-image" />
    <p className="btn-share-text"> Share</p>
  </button>
  </>
  );
};

export default ShareProduct;
