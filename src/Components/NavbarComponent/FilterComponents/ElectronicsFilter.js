import React, { useState } from 'react';
import '../Css/ElectronicsFilter.css';
import all from '../Images/5110770.png';
import accessories from '../Images/ComputerAccessories.png';
import Desktops from '../Images/Desktop.png';
import GamingLaptop from '../Images/GamingLaptop.png';
import Laptops from '../Images/Laptop.png';
import Camera from '../Images/camera.png';
import headphones from '../Images/headphones.png';
import smartwatch from '../Images/smartwatchs.png';

const ElectronicsFilter = ({
  selectedSubCategory,
  onSubCategoryChange,
  onPriceChange
}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200000);
  const handleApply = () => {
    onPriceChange({ minPrice, maxPrice });
  };
  return (
    <div className="product-filter">
      {/* <div className='col-sm-12 col-lg-9 col-md-9'> */}
      <div className='brand-section'>
        <div className={`filter-option ${selectedSubCategory === '' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('')}>
          <div className='brand-image'>
            <img className="filter-image" src={all} alt="All Electronics - Explore a variety of electronic devices" />
          </div>
          <div className={`filter-text ${selectedSubCategory === '' ? 'selected-text' : ''}`}>
            <span className="option">All Electronics</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Laptops' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Laptops')}>
          <div className='brand-image'>
            <img className="filter-image" src={Laptops} alt="Laptops - Explore a wide range of laptops for all needs" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Laptops' ? 'selected-text' : ''}`}>
            <span className="option">Laptops</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'GamingLaptop' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('GamingLaptop')}>
          <div className='brand-image'>
            <img className="filter-image" src={GamingLaptop} alt="Gaming Laptops - Experience high-performance gaming with these laptops" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'GamingLaptop' ? 'selected-text' : ''}`}>
            <span className="option">Gaming Laptops</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Desktops' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Desktops')}>
          <div className='brand-image'>
            <img className="filter-image" src={Desktops} alt="Desktops - Find powerful desktop computers for various tasks" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Desktops' ? 'selected-text' : ''}`}>
            <span className="option">Desktops</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'ComputerAccessories' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('ComputerAccessories')}>
          <div className='brand-image'>
            <img className ="filter-image" src={accessories} alt="Computer Accessories - Enhance your setup with computer accessories" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'ComputerAccessories' ? 'selected-text' : ''}`}>
            <span className="option">Accessories</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Headphones' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Headphones')}>
          <div className='brand-image'>
            <img className="filter-image" src={headphones} alt="Headphones - Enjoy immersive audio with high-quality headphones" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Headphones' ? 'selected-text' : ''}`}>
            <span className="option">Headphones</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Smartwatch' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Smartwatch')}>
          <div className='brand-image'>
            <img className="filter-image" src={smartwatch} alt="Smart Watches - Stay connected with stylish and functional smartwatches" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Smartwatch' ? 'selected-text' : ''}`}>
            <span className="option">Smart Watches</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Camera' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Camera')}>
          <div className='brand-image'>
            <img className="filter-image" src={Camera} alt="Cameras - Capture moments with high-quality cameras" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Camera' ? 'selected-text' : ''}`}>
            <span className="option">Cameras</span>
          </div>
        </div>

      </div>
      {/* </div> */}
      {/* <div className='col-sm-12 col-lg-3 col-md-3'> */}
      <div className="filter-section-price">
        <label id='price-label'>Set Price Range:</label>
        <div className="price-filter">
          <input
            type="number"
            id='minValue'
            placeholder="Min price"
            onChange={(e) => setMinPrice(e.target.value)}
            min={0}
          />
          <input
            type="number"
            id='maxValue'
            placeholder="Max price"
            onChange={(e) => setMaxPrice(e.target.value)}
            max={200000}
          />
          <button className='Apply-button' onClick={handleApply}>Apply</button>
        </div>
        <a href='/electronics' className='clear-filter'>Clear filter</a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ElectronicsFilter;
