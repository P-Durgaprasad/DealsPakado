import React, { useState } from "react";
import { BsShare } from "react-icons/bs";

const ShareButton = ({ productUrl }) => {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    setIsSharing(true);

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this product",
          text: "Explore this amazing product!",
          url: productUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }

    setIsSharing(false);
  };

  return (
    <button
      onClick={handleShare}
      disabled={isSharing}
    >
      <BsShare /> Share
    </button>
  );
};

export default ShareButton;
