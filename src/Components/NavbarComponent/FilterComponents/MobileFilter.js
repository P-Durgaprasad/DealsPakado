import React, { useState } from 'react';
import '../Css/ElectronicsFilter.css';
import all from '../Images/5110770.png'
import Mi from '../Images/Mi.png';
import samsung from '../Images/samsung.png'
import vivo from '../Images/Vivo.png';
import oppo from '../Images/Oppo.png';
import realme from '../Images/realme.png';
import apple from '../Images/Apple.png';
import poco from '../Images/poco.png';
import oneplse from '../Images/oneplus.png';
import moto from '../Images/moto.png';
import nokia from '../Images/nokia.png';

const MobileFilter = ({
  selectedBrand,
  onBrandChange,
  onPriceChange
}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200000);
  const handleApply = () => {
    onPriceChange({ minPrice, maxPrice });
  };

  return (
    <div className="product-filter ">
        <div className='brand-section'>
          <div className={`filter-option ${selectedBrand === '' ? 'selected' : ''}`} onClick={() => onBrandChange('')}>
            <div className='brand-image'>
              <img className="filter-image" src={all} alt="All Mobiles - Explore a variety of mobiles with best deals and offers"/>
            </div>
            <div className={`filter-text ${selectedBrand === '' ? 'selected-text' : ''}`}>
              <span className='option' >All Mobile's</span>
            </div>
          </div>
          <div className={`filter-option ${selectedBrand === 'redmi' ? 'selected' : ''}`} onClick={() => onBrandChange('redmi')}>
            <div className='brand-image'>
              <img className="filter-image" src={Mi} alt="MI - Best deals on Redmi mobiles" />
            </div>
            <div className={`filter-text ${selectedBrand === 'redmi' ? 'selected-text' : ''}`}>
              <span className="option">MI</span>
            </div>
          </div>
          <div className={`filter-option ${selectedBrand === 'Samsung' ? 'selected' : ''}`} onClick={() => onBrandChange('Samsung')}>
            <div className='brand-image'>
              <img className="filter-image" src={samsung} alt="Samsung - Explore Samsung mobiles with best discounts"/>
            </div>
            <div className={`filter-text ${selectedBrand === 'Samsung' ? 'selected-text' : ''}`}>
              <span className="option">Samsung</span>
            </div>
          </div>
          <div className={`filter-option ${selectedBrand === 'Vivo' ? 'selected' : ''}`} onClick={() => onBrandChange('Vivo')}>
            <div className='brand-image'>
              <img className="filter-image" src={vivo} alt="Vivo - Best offers on Vivo mobiles" />
            </div>
            <div className={`filter-text ${selectedBrand === 'Vivo' ? 'selected-text' : ''}`}>
              <span className="option">Vivo</span>
            </div>
          </div>
          <div className={`filter-option ${selectedBrand === 'Oppo' ? 'selected' : ''}`} onClick={() => onBrandChange('Oppo')}>
            <div className='brand-image'>
              <img className="filter-image" src={oppo} alt="Oppo - Explore Oppo mobiles with best deals"/>
            </div>
            <div className={`filter-text ${selectedBrand === 'Oppo' ? 'selected-text' : ''}`}>
              <span className="option">Oppo</span>
            </div>
          </div>
          <div className={`filter-option ${selectedBrand === 'Realme' ? 'selected' : ''}`} onClick={() => onBrandChange('Realme')}>
            <div className='brand-image'>
              <img className="filter-image" src={realme} alt="Realme - Best discounts on Realme mobiles" />
            </div>
            <div className={`filter-text ${selectedBrand === 'Realme' ? 'selected-text' : ''}`}>
              <span className="option">Realme</span>
            </div>
          </div>
          <div className={`filter-option ${selectedBrand === 'Apple' ? 'selected' : ''}`} onClick={() => onBrandChange('Apple')}>
            <div className='brand-image'>
              <img className="filter-image" src={apple} alt="Apple - Explore Apple iPhones with best offers"/>
            </div>
            <div className={`filter-text ${selectedBrand === 'Apple' ? 'selected-text' : ''}`}>
              <span className="option">Apple</span>
            </div>
          </div>
          <div className={`filter-option ${selectedBrand === 'Poco' ? 'selected' : ''}`} onClick={() => onBrandChange('Poco')}>
            <div className='brand-image'>
              <img className="filter-image" src={poco} alt="Poco - Best deals on Poco mobiles" />
            </div>
            <div className={`filter-text ${selectedBrand === 'Poco' ? 'selected-text' : ''}`}>
              <span className="option">Poco</span>
            </div>
          </div>
          <div className={`filter-option ${selectedBrand === 'OnePlus' ? 'selected' : ''}`} onClick={() => onBrandChange('OnePlus')}>
            <div className='brand-image'>
              <img className="filter-image" src={oneplse} alt="OnePlus - Explore OnePlus mobiles with best discounts" />
            </div>
            <div className={`filter-text ${selectedBrand === 'OnePlus' ? 'selected-text' : ''}`}>
              <span className="option">OnePlus</span>
            </div>
          </div>
          <div className={`filter-option ${selectedBrand === 'Motorola' ? 'selected' : ''}`} onClick={() => onBrandChange('Motorola')}>
            <div className='brand-image'>
              <img className="filter-image" src={moto} alt="Motorola - Best offers on Motorola mobiles" />
            </div>
            <div className={`filter-text ${selectedBrand === 'Motorola' ? 'selected-text' : ''}`}>
              <span className="option">Motorola</span>
            </div>
          </div>
          <div className={`filter-option ${selectedBrand === 'Nokia' ? 'selected' : ''}`} onClick={() => onBrandChange('Nokia')}>
            <div className='brand-image'>
              <img className="filter-image" src={nokia} alt="Nokia - Explore Nokia mobiles with best deals"/>
            </div>
            <div className={`filter-text ${selectedBrand === 'Nokia' ? 'selected-text' : ''}`}>
              <span className="option">Nokia</span>
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
          <a href='/mobiles' className='clear-filter'>Clear filter</a>
        </div>
    </div >
  );
};

export default MobileFilter;
