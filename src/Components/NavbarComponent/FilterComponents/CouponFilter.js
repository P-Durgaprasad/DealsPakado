import React from 'react';
import '../Css/ElectronicsFilter.css';
import fashioncode from '../Images/FashionCodes.png';
import all from '../Images/5110770.png';
import Travel from '../Images/Traveling.png';
import electronics from '../Images/ElectronicsCodes.png';
import payments from '../Images/PaymentCodes.png';
import food from '../Images/foodCodes.png';
import movie from '../Images/MovieCodes.png';

const CouponFilter = ({
  selectedCategory, // Change selectedSubCategory to selectedCategory
  onCategoryChange, // Change onSubCategoryChange to onCategoryChange
}) => (
  <div className="product-filter">
    <div className='brand-section'>
      <div className={`filter-option ${selectedCategory === '' ? 'selected' : ''}`} onClick={() => onCategoryChange('')}>
        <div className='brand-image'>
          <img className="filter-image" src={all} alt="All CouponCodes" />
        </div>
        <div className={`filter-text ${selectedCategory === '' ? 'selected-text' : ''}`}>
          <span className="option">All Coupon's</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'FashionCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('FashionCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={fashioncode} alt="Shop women's fashion with exclusive coupon codes" />
        </div>
        <div className={`filter-text ${selectedCategory === 'FashionCode' ? 'selected-text' : ''}`}>
          <span className="option">Fashion</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'TravellingCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('TravellingCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={Travel} alt="TravellingCode" />
        </div>
        <div className={`filter-text ${selectedCategory === 'TravellingCode' ? 'selected-text' : ''}`}>
          <span className="option">Travel</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'ElectronicsCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('ElectronicsCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={electronics} alt="ElectronicsCode" />
        </div>
        <div className={`filter-text ${selectedCategory === 'ElectronicsCode' ? 'selected-text' : ''}`}>
          <span className="option">Electronics</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'PaymentCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('PaymentCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={payments} alt="PaymentCode" />
        </div>
        <div className={`filter-text ${selectedCategory === 'PaymentCode' ? 'selected-text' : ''}`}>
          <span className="option">Payment</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'FoodCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('FoodCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={food} alt="FoodCode" />
        </div>
        <div className={`filter-text ${selectedCategory === 'FoodCode' ? 'selected-text' : ''}`}>
          <span className="option">Food & Dining</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'EntertainmentCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('EntertainmentCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={movie} alt="Smart Watches" />
        </div>
        <div className={`filter-text ${selectedCategory === 'EntertainmentCode' ? 'selected-text' : ''}`}>
          <span className="option">Entertainment</span>
        </div>
      </div>

    </div>
  </div>
);

export default CouponFilter;
