import React from 'react';
import './Css/BrandBoard.css';
import amazon from './Images/Amazon_logo.svg.png';
import flipkart from './Images/Flipkart_logo.svg.png';
import ajio from './Images/Ajio-1200x800.png';
import myntra from './Images/Myntra_logo.png';
import tata from './Images/Tata_Cliq_logo.svg.png';
import paytm from './Images/paytm_mall_logo.png';
import nykaa from './Images/Nykaa_New_Logo.svg.png';
import snapdeal from './Images/Snapdeal_new_official_logo.png';
import zomato from './Images/Zomato_Logo.svg.png';
import swiggy from './Images/Swiggy_logo.svg.png';
import bigbusket from './Images/BigBasket_Logo.png';
import blinkit from './Images/blinkit_logo.webp';
import { Link } from 'react-router-dom';


function BrandBoard() {
  // Example brand data
  const brands = [
    { id: 1, logo: amazon,brandName:'Amazon' },
    { id: 2, logo: flipkart,brandName:'Flipkart' },
    { id: 3, logo: ajio,brandName:'Ajio' },
    { id: 4, logo: myntra,brandName:'Myntra' },
    { id: 5, logo: tata ,brandName:'Tata'},
    { id: 6, logo: paytm,brandName:'Paytm' },
    { id: 7, logo: nykaa,brandName:'Nykaa' },
    { id: 8, logo: snapdeal,brandName:'Snapdeal'},
    { id: 9, logo: zomato,brandName:'Zomato' },
    { id: 10, logo: swiggy,brandName:'Swiggy' },
    { id: 11, logo: bigbusket,brandName:'BigBusket' },
    { id: 12, logo: blinkit,brandName:'Blinkit'},
    // Add more brands here
  ];

  return (
    <div className='brand-board-main'>
      <div className='brand-list-container'>
      <div id="label-title">Brand Board</div>
        <div className='brand-list'>
          {brands.map(brand => (
            <Link to={`/brand/${brand.brandName}`}>
            <div className='brand' key={brand.id}>
              <img className='brandboard-brand-image' src={brand.logo} alt={`Brand ${brand.id}`} />
              </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandBoard;
