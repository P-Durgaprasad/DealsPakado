import React, { useState } from 'react';
import '../Css/ElectronicsFilter.css';
import all from '../Images/5110770.png';
import HomeOffice from '../Images/homeoffice.png';
import Kitchen from '../Images/kitchen.png';
import Bedroom from '../Images/bedroom.png';
import Bathroom from '../Images/bathroom.png';
import Outdoor from '../Images/outdoor.png';

const FurnitureFilter = ({
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
            <img className="filter-image" src={all} alt="all" />
          </div>
          <div className='filter-text'>
            <span className={`option ${selectedSubCategory === '' ? 'selected-text' : ''}`}>All Furniture's</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'HomeOffice' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('HomeOffice')}>
          <div className='brand-image'>
            <img className="filter-image" src={HomeOffice} alt="Home & Office" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'HomeOffice' ? 'selected-text' : ''}`}>
            <span className="option">Home & Office</span>
          </div>
        </div>
        <div className={`filter-option ${selectedSubCategory === 'Kitchen' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Kitchen')}>
          <div className='brand-image'>
            <img className="filter-image" src={Kitchen} alt="Kitchen" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Kitchen' ? 'selected-text' : ''}`}>
            <span className="option">Kitchen</span>
          </div>
        </div>
        <div className={`filter-option ${selectedSubCategory === 'Bedroom' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Bedroom')}>
          <div className='brand-image'>
            <img className="filter-image" src={Bedroom} alt="Bedroom" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Bedroom' ? 'selected-text' : ''}`}>
            <span className="option">Bedroom</span>
          </div>
        </div>
        <div className={`filter-option ${selectedSubCategory === 'Bathroom' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Bathroom')}>
          <div className='brand-image' >
            <img className="filter-image" src={Bathroom} alt="Bathroom" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Bathroom' ? 'selected-text' : ''}`}>
            <span className="option">Bathroom</span>
          </div>
        </div>
        <div className={`filter-option ${selectedSubCategory === 'Outdoor' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Outdoor')}>
          <div className='brand-image'>
            <img className="filter-image" src={Outdoor} alt="Outdoor" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Outdoor' ? 'selected-text' : ''}`}>
            <span className="option">Living Room</span>
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
        <a href='/furniture' className='clear-filter'>Clear filter</a>
      </div>
     {/* </div> */}
    </div>
  );
};

export default FurnitureFilter;
