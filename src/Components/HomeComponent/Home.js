import React from 'react';
import ItemCarousel from './ItemCarousel';
import BrandBoard from './BrandBoard';
import ProductBoard from './ProductBoard';
import DealsDisplay from './DealsDisplay';
import './Css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  return (
    <div className="home-main-div">
      <div className="main ">
        <BrandBoard />
        <ItemCarousel />
        <ProductBoard />
      </div>    
        <DealsDisplay />
    </div>
  );
}

export default Home;
