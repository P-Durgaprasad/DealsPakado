import React, { useState } from 'react';
import '../Css/ElectronicsFilter.css';
import all from '../Images/5110770.png';
import MensSports from '../Images/MensSports.png';
import WomensSports from '../Images/WomenSports.png';
import games from '../Images/Sports.png';

const SportsFilter = ({
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
      <div className='brand-section'>
        <div className={`filter-option ${selectedSubCategory === '' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('')}>
          <div className='brand-image'>
            <img className="filter-image" src={all} alt="All Sports - Explore a wide range of sports products"/>
          </div>
          <div className={`filter-text ${selectedSubCategory === '' ? 'selected-text' : ''}`}>
            <span className="option">All Sports</span>
          </div>
        </div>
        <div className={`filter-option ${selectedSubCategory === 'MensSportswear' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('MensSportswear')}>
          <div className='brand-image'>
            <img className="filter-image" src={MensSports} alt="Men's Sportswear - Browse and shop for Men's sports clothing"/>
          </div>
          <div className={`filter-text ${selectedSubCategory === 'MensSportswear' ? 'selected-text' : ''}`}>
            <span className="option">Mens Sportswear</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'WomensSportswear' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('WomensSportswear')}>
          <div className='brand-image'>
            <img className="filter-image" src={WomensSports} alt="Women's Sportswear - Explore Women's sports clothing"/>
          </div>
          <div className={`filter-text ${selectedSubCategory === 'WomensSportswear' ? 'selected-text' : ''}`}>
            <span className="option">Womens Sportswear</span>
          </div>
        </div>
        <div className={`filter-option ${selectedSubCategory === 'Game' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Game')}>
          <div className='brand-image'>
            <img className="filter-image" src={games} alt="Game Accessories - Find deals on gaming accessories" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Game' ? 'selected-text' : ''}`}>
            <span className="option">Game Accessories</span>
          </div>
        </div>
      </div>
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
        <a href='/sports' className='clear-filter'>Clear filter</a>
      </div>
    </div>
  );
};
export default SportsFilter;
