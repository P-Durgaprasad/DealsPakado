import React from 'react';
import ItemCarousel from './ItemCarousel';
import BrandBoard from './BrandBoard';
import ProductBoard from './ProductBoard';
import DealsDisplay from './DealsDisplay';
import './Css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  return (
    <div className="home-main-div container-fluid">
      <div className="main ">
        <div className='row'>
          <BrandBoard />
          <ItemCarousel />
          <ProductBoard />
        </div>
      </div>    
        <DealsDisplay />
    </div>
  );
}

export default Home;
