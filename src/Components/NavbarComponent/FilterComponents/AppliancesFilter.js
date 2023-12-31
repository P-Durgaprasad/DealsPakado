import React, { useState } from 'react';
import '../Css/ElectronicsFilter.css';
import All from '../Images/5110770.png';
import TV from '../Images/TV.png';
import Refrigerator from '../Images/refrigerator1.png';
import Ac from '../Images/AC.png';
import Washing from '../Images/Washing.png';
import Microwave from '../Images/Micro.png';
import Water from '../Images/Water.png';

const AppliancesFilter = ({
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
        <div className="product-filter ">
            {/* <div className='col-sm-12 col-lg-9 col-md-9'> */}
            <div className='brand-section '>
                <div className={`filter-option ${selectedSubCategory === '' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('')}>
                    <div className='brand-image'>
                        <img className="filter-image" src={All} alt="Filter option for all appliances" />
                    </div>
                    <div className={`filter-text ${selectedSubCategory === '' ? 'selected-text' : ''}`}>
                        <span className="option">All Appliance's</span>
                    </div>
                </div>

                <div className={`filter-option ${selectedSubCategory === 'Refrigerators' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Refrigerators')}>
                    <div className='brand-image'>
                        <img className="filter-image" src={Refrigerator} alt="Filter option for Refrigerators" />
                    </div>
                    <div className={`filter-text ${selectedSubCategory === 'Refrigerators' ? 'selected-text' : ''}`}>
                        <span className="option">Refrigerator's</span>
                    </div>
                </div>

                <div className={`filter-option ${selectedSubCategory === 'WashingMachines' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('WashingMachines')}>
                    <div className='brand-image'>
                        <img className="filter-image" src={Washing} alt="Filter option for Washing Machines" />
                    </div>
                    <div className={`filter-text ${selectedSubCategory === 'WashingMachines' ? 'selected-text' : ''}`}>
                        <span className="option">Washing Machine's</span>
                    </div>
                </div>

                <div className={`filter-option ${selectedSubCategory === 'Televisions' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('Televisions')}>
                    <div className='brand-image'>
                        <img className="filter-image" src={TV} alt="Filter option for Televisions" />
                    </div>
                    <div className={`filter-text ${selectedSubCategory === 'Televisions' ? 'selected-text' : ''}`}>
                        <span className="option">TV's</span>
                    </div>
                </div>

                <div className={`filter-option ${selectedSubCategory === 'AirConditioners' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('AirConditioners')}>
                    <div className='brand-image'>
                        <img className="filter-image" src={Ac} alt="Filter option for Air Conditioners" />
                    </div>
                    <div className={`filter-text ${selectedSubCategory === 'AirConditioners' ? 'selected-text' : ''}`}>
                        <span className="option">AC's</span>
                    </div>
                </div>

                <div className={`filter-option ${selectedSubCategory === 'WaterPurifiers' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('WaterPurifiers')}>
                    <div className='brand-image'>
                        <img className="filter-image" src={Water} alt="Filter option for Water Purifiers" />
                    </div>
                    <div className={`filter-text ${selectedSubCategory === 'WaterPurifiers' ? 'selected-text' : ''}`}>
                        <span className="option">WaterPurifier's</span>
                    </div>
                </div>

                <div className={`filter-option ${selectedSubCategory === 'MicrowaveOvens' ? 'selected' : ''}`} onClick={() => onSubCategoryChange('MicrowaveOvens')}>
                    <div className='brand-image'>
                        <img className="filter-image" src={Microwave} alt="Filter option for MicrowaveOvens" />
                    </div>
                    <div className={`filter-text ${selectedSubCategory === 'MicrowaveOvens' ? 'selected-text' : ''}`}>
                        <span className="option">MicrowaveOven's</span>
                    </div>
                </div>

            </div>
            {/* </div> */}
            {/* <div className='col-sm-12 col-lg-3  col-md-3 '> */}
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
                <a href='/appliances' className='clear-filter'>Clear filter</a>
            </div>
            {/* </div> */}
        </div>
    );
};


export default AppliancesFilter;
