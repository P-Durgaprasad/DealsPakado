import React from "react";
import whatsapp from '../../HeaderComponent/whatsapp.png';

const ShareProduct = ({ affurl, affsite, title, imageUrl, price, MRP }) => {
  const formattedMessage = `
  🎉 **Exciting News!** 🌟 Brace yourselves! The enchanting ${title} is now up for grabs at an unbelievable price of Rs.${price} on ${affsite}! 🚀 Save a whopping Rs.${MRP - price} - that's a steal! 💰 Original MRP: Rs.${MRP}! 🎁
  
  🔥 **Hurry Up!** ⏳ Limited stock available. Seize this golden opportunity before it slips away!
  
  👀 Dive into bliss with this fantastic deal! 🌈 Check it out here: ${imageUrl}"
  
  🛒 **Grab Yours Now on DealsPakado!** Click here ${affurl} for more details. 🛍️
  
  ✨ Explore more jaw-dropping deals at DealsPakado.com! 🌟 Your exclusive Offer Price is waiting! 💥 Don't miss out - shop smart! 🌟`;
  
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