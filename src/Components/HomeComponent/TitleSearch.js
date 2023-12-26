import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';
import API from '../API_Config';

const TitleSearch = () => {
  const { title } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (title) {
          console.log(title);
          const url = `${API}/api/product/title?title=${encodeURIComponent(title)}`;
          console.log(title);
          const response = await fetch(url);
          const data = await response.json();

          if (Array.isArray(data) && data.length > 0) {
            setProductDetails(data[0]);
          } else {
            setError('Invalid or missing product details in the response.');
          }
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProductDetails();
  }, [title]);

  useEffect(() => {
    if (productDetails && productDetails.affiliateLink) {
      console.log(productDetails.affiliateLink);
      window.open(productDetails.affiliateLink, '_blank');
    } else if (error) {
      console.error(error);
    }
  }, [productDetails, error]);

  return (
    <div>
        <Home />
    </div>
  );
};

export default TitleSearch;
