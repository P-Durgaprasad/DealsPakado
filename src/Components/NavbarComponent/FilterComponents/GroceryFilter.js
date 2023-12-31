import React, { useState } from 'react';
import '../Css/ElectronicsFilter.css';
import all from '../Images/5110770.png';
import rice from '../Images/rice.png';
import snacks from '../Images/snacks.png';
import HouseHolds from '../Images/HouseHolds.png';
import Body from '../Images/Body.png';
import DryFruits from '../Images/dryfruits.png';

const GroceryFilter = ({
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
            <img className="filter-image" src={all} alt="All Groceries - Explore a variety of groceries for best deals and offers" />
          </div>
          <div className={`filter-text ${selectedSubCategory === '' ? 'selected-text' : ''}`}>
            <span className='option' >All Groceries</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'food' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('food')}>
          <div className='brand-image'>
            <img className="filter-image" src={rice} alt="Rice, Atta, Dal - Best deals on essential food items" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'food' ? 'selected-text' : ''}`}>
            <span className="option">Rice, Atta, Dal</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'snacks' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('snacks')}>
          <div className='brand-image'>
            <img className="filter-image" src={snacks} alt="Snacks - Enjoy delicious snacks with best discounts" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'snacks' ? 'selected-text' : ''}`}>
            <span className="option">Snacks</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'HouseHolds' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('HouseHolds')}>
          <div className='brand-image'>
            <img className="filter-image" src={HouseHolds} alt="Household's - Best deals on household items" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'HouseHolds' ? 'selected-text' : ''}`}>
            <span className="option">Household's</span>
          </div>
        </div>

        <div className={`filter-option ${selectedSubCategory === 'Bodycare' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Bodycare')}>
          <div className='brand-image'>
            <img className="filter-image" src={Body} alt="BodyCare - Personal care products with best offers" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Bodycare' ? 'selected-text' : ''}`}>
            <span className="option">Personal Care</span>
          </div>
        </div>
        <div className={`filter-option ${selectedSubCategory === 'Dryfruits' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Dryfruits')}>
          <div className='brand-image'>
            <img className="filter-image" src={DryFruits} alt="Dry Fruits - Best deals on healthy dry fruits" />
          </div>
          <div className={`filter-text ${selectedSubCategory === 'Dryfruits' ? 'selected-text' : ''}`}>
            <span className="option">Dry Fruits</span>
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
        <a href='/grocery' className='clear-filter'>Clear filter</a>
      </div>
    </div>
  );
};

export default GroceryFilter;
