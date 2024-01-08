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
  selectedCategory, 
  onCategoryChange,
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
          <img className="filter-image" src={fashioncode} alt="Exclusive Fashion Coupons - Discover best exclusive coupon codes for women's fashion" />
        </div>
        <div className={`filter-text ${selectedCategory === 'FashionCode' ? 'selected-text' : ''}`}>
          <span className="option">Fashion</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'TravellingCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('TravellingCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={Travel} alt="Best Exclusive Travel Coupons - Save on your travel expenses with the top exclusive coupon codes" />
        </div>
        <div className={`filter-text ${selectedCategory === 'TravellingCode' ? 'selected-text' : ''}`}>
          <span className="option">Travel</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'ElectronicsCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('ElectronicsCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={electronics} alt="Exclusive Electronics Coupons - Unlock discounts on electronic gadgets and appliances" />
        </div>
        <div className={`filter-text ${selectedCategory === 'ElectronicsCode' ? 'selected-text' : ''}`}>
          <span className="option">Electronics</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'PaymentCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('PaymentCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={payments} alt="Exclusive Payment Coupons - Enjoy savings on various payment methods with special codes" />
        </div>
        <div className={`filter-text ${selectedCategory === 'PaymentCode' ? 'selected-text' : ''}`}>
          <span className="option">Payment</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'FoodCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('FoodCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={food} alt="Exclusive Food & Dining Coupons - Get discounts on delicious meals with coupon codes" />
        </div>
        <div className={`filter-text ${selectedCategory === 'FoodCode' ? 'selected-text' : ''}`}>
          <span className="option">Food & Dining</span>
        </div>
      </div>

      <div className={`filter-option ${selectedCategory === 'EntertainmentCode' ? 'selected' : ''}`} onClick={() => onCategoryChange('EntertainmentCode')}>
        <div className='brand-image'>
          <img className="filter-image" src={movie} alt="Exclusive Entertainment Coupons - Save on movie tickets and more with exclusive codes" />
        </div>
        <div className={`filter-text ${selectedCategory === 'EntertainmentCode' ? 'selected-text' : ''}`}>
          <span className="option">Entertainment</span>
        </div>
      </div>

    </div>
  </div>
);

export default CouponFilter;
