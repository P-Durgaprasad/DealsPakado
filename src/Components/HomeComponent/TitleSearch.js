import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';
import API from '../API_Config';

const TitleSearch = () => {
  const { title } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (title) {
          const url = `${API}/api/product/title?title=${encodeURIComponent(title)}`;
          const response = await fetch(url);
          const data = await response.json();

          if (Array.isArray(data) && data.length > 0) {
            setProductDetails(data[0]);
          } else {
            console.error('Invalid or missing product details in the response.');
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    const redirectToAffiliate = async () => {
      if (productDetails && productDetails.affiliateLink) {

          const newWindow = window.open(productDetails.affiliateLink, '_blank');

          if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            alert('Pop-ups are blocked. Please enable pop-ups to proceed.');
          } else {
            setHasRedirected(true);
          }
        }
      };

    if (!hasRedirected && productDetails) {
      // Trigger pop-up on component mount
      redirectToAffiliate();
    } else {
      fetchProductDetails();
    }
  }, [title, productDetails, hasRedirected]);

  return (
    <div>
      <Home />
    </div>
  );
};

export default TitleSearch;
