import React from "react";
import whatsapp from '../../HeaderComponent/whatsapp.png';

const ShareProduct = ({ url, title ,imageUrl,price,MRP}) => {
  const formattedMessage = `
  🤩 **Snatch This Deal!** ${title} - Only Rs.${price} (Save Rs.${MRP - price})! 🤑
  
  ✨ **Don't Miss Out!** Hurry! Limited Stock Available. ⌛
  
  👀 Check out this amazing product: ${encodeURIComponent(imageUrl)}"
  
  🛒 **Grab Yours Now!** Click here: http://dealspakado.com/buyAt/${encodeURIComponent(url)}`;

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
  const handleShare = () => {
    if (isMobile()) {
      window.open(`whatsapp://send?text=${encodeURIComponent(formattedMessage)}`);
    } else {
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
