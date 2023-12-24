import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Css/NewCss.css';
import FilterResult from '../NavbarComponent/FilterComponents/FilterResult';
import API from '../API_Config';

function SelectBrand() {
  const { brandName } = useParams();
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `${API}/api/product/Deals/website?Website=${brandName}`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (Array.isArray(data)) {
        setDeals(data);
      } else {
        setDeals([]);
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <FilterResult products={deals} />;
}

export default SelectBrand;
