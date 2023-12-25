import React, { useState } from 'react';
import '../Css/ElectronicsFilter.css';
import all from '../Images/5110770.png'
import Babydress from '../Images/BabyDress.png';
import diapers from '../Images/diapers.png';

const BabyFilter = ({
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
            <img className="filter-image" src={all} alt="All Appliances" />
          </div>
          <div className={`filter-text ${selectedSubCategory === '' ? 'selected-text' : ''}`}>
            <span className="option">All Items</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'BabyDress' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('BabyDress')}>
          <div className='brand-image'>
            <img className="filter-image" src={Babydress} alt="BabyDress" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'BabyDress' ? 'selected-text' : ''}`}>
            <span className="option">Clothing</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'diapers' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('diapers')}>
          <div className='brand-image'>
            <img className="filter-image" src={diapers} alt="Diapers" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'diapers' ? 'selected-text' : ''}`}>
            <span className="option">Diapers and Changing</span>
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
        <a href='/babyitems' className='clear-filter'>Clear filter</a>
      </div>
      {/* </div> */}
    </div >
  );
};

export default BabyFilter;
