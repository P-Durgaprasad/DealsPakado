import React, { useState } from 'react';
import '../Css/ElectronicsFilter.css';
import all from '../Images/5110770.png';
import men from '../Images/MensFashion.png';
import women from '../Images/WomenFashion3.png';
import kids from '../Images/KidsFashion1.png';
import men_access from '../Images/MensAccessories.png';
import women_access from '../Images/WomensA.png';


const FashionFilter = ({
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
      <div className='col-sm-12 col-lg-9 col-md-9'>
      <div className='brand-section'>
        <div className={`filter-option ${selectedSubCategory === '' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('')}>
          <div className='brand-image'>
            <img className="filter-image" src={all} alt="all" />
          </div>
          <div className={`filter-text ${selectedSubCategory === '' ? 'selected-text' : ''}`}>
            <span className="option">All Fashion's</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Mens' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Mens')}>
          <div className='brand-image'>
            <img className="filter-image" src={men} alt="all" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Mens' ? 'selected-text' : ''}`}>
            <span className="option">Men's</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Womens' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Womens')}>
          <div className='brand-image'>
            <img className="filter-image" src={women} alt="all" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Womens' ? 'selected-text' : ''}`}>
            <span className="option">Women's</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Kids' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Kids')}>
          <div className='brand-image'>
            <img className="filter-image" src={kids} alt="Kids" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Kids' ? 'selected-text' : ''}`}>
            <span className="option">Kid's</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Mens_accessories' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Mens_accessories')}>
          <div className='brand-image'>
            <img className="filter-image" src={men_access} alt="Mens_accessories" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Mens_accessories' ? 'selected-text' : ''}`}>
            <span className="option">Men's Accessories</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Womens_accessories' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Womens_accessories')}>
          <div className='brand-image'>
            <img className="filter-image" src={women_access} alt="Womens_accessories" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Womens_accessories' ? 'selected-text' : ''}`}>
            <span className="option">Women's Accessories</span>
          </div>
        </div>
      </div>
      </div>
      <div className='col-sm-12 col-lg-3 col-md-3'>
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
        <a href='/fashion' className='clear-filter'>Clear filter</a>
      </div>
      </div>
    </div >
  );
};


export default FashionFilter;
