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
        window.open(productDetails.affiliateLink, '_blank');
        setHasRedirected(true); 
      } else {
        console.error('No affiliate link available for redirection.');
      }
    };

    if (!hasRedirected && productDetails) {
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
