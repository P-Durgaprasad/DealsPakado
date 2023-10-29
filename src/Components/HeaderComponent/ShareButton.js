import React from 'react';

const ShareButton = ({ productUrl }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this product',
          text: 'Explore this amazing product!',
          url: productUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  return (
    <button onClick={handleShare}>Share</button>
  );
};

export default ShareButton;
