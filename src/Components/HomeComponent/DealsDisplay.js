import React, { useState, useEffect } from 'react';
import './Css/NewCss.css';
import API from '../API_Config';
import FilterResult from '../NavbarComponent/FilterComponents/FilterResult';

function DealsDisplay() {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch(`${API}/api/product/allDeals`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setDeals(data);
        } else {
          setDeals([]);
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchDeals();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <FilterResult products={deals} />
  );
}

export default DealsDisplay;
