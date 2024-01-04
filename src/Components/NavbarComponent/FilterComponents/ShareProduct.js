import React from "react";
import whatsapp from '../../HeaderComponent/whatsapp.png';

const ShareProduct = ({ affurl, title, imageUrl, price, MRP }) => {
  const formattedMessage = `
  🎉 **Exciting News!** ${title} is now available at a special price of Rs.${price} (Save Rs.${MRP - price})! 🎁
  
  🚀 **Hurry Up!** Limited Stock Available. ⏳
  
  👀 Dive into this fantastic deal: ${imageUrl}"
  
  🛒 **Grab Yours Now on DealsPakado ** Click here ${affurl} for more details.

  ✨ Don't miss out on more amazing deals at DealsPakado.com! 🌟`;




  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const handleShare = () => {
    const whatsappLink = isMobile()
      ? `whatsapp://send?text=${encodeURIComponent(formattedMessage)}`
      : `https://web.whatsapp.com/send?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappLink);
  };

  return (
    <>
      <button type="button" onClick={handleShare} className="btn-share">
        <img src={whatsapp} alt="Share" className="btn-share-image" />
        <p className="btn-share-text"> Share</p>
      </button>
    </>
  );
};

export default ShareProduct;