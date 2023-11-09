import React from 'react';
import ItemCarousel from './ItemCarousel';
import BrandBoard from './BrandBoard';
import ProductBoard from './ProductBoard';
import DealsDisplay from './DealsDisplay';
import './Css/Home.css';

function Home() {
  
  return (
    <div className="home-main-div">
      <div className="main">
        <BrandBoard />
        <ItemCarousel />
        <ProductBoard />
      </div>
      <div className="deals-menu">
        <DealsDisplay />
      </div>
    </div>
  );
}

export default Home;
