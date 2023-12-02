import React from 'react';
import { Link } from 'react-router-dom';
import { row } from 'react-bootstrap';
import './Css/Navbar.css';

import mobileIcon from './Images/mobile-icon.png';
import fashionIcon from './Images/fashion-icon.png';
import electronicsIcon from './Images/Electrionic-icon.png';
import furnitureIcon from './Images/furniture-icon.png';
import appliancesIcon from './Images/appliances-icon.png';
import store from './Images/99.png';
import Deals from './Images/Deals1.png';
import Grocery from './Images/Grocery.png';
import coupon from './Images/coupon.png';
import Personal from './Images/Baby.png';
import Sports from './Images/Sports.png';

function Navbar() {
  return (
    
    <nav className='container-fluid '>
      <div class=" ">
        <div className='menubar menubarview'>
      <ul className="menu-bar">
        <li className="selected">
          <Link to="/deals">
            <img src={Deals} alt="Best_Deals" className='nav-img' />
           <div className='nav-text'>Deals </div>
          </Link>
        </li>
        <li className="selected">
          <Link to="/mobiles">
            <img src={mobileIcon} alt="Mobiles" className='nav-img' />
            <div className='nav-text'>Mobiles</div>
          </Link>
        </li>
        <li className="selected">
          <Link to="/fashion">
            <img src={fashionIcon} alt="Fashion" className='nav-img' />
            <div className='nav-text'>Fashion</div>
         </Link>
        </li>
        <li className="selected">
          <Link to="/electronics">
            <img src={appliancesIcon} alt="Electronics" className='nav-img' />
            <div className='nav-text'>Electronics</div>
          </Link>
        </li>
        <li className="selected">
          <Link to="/furniture">
            <img src={furnitureIcon} alt="Home & Furniture" className='nav-img' />
            <div className='nav-text'>Furniture</div>
          </Link>
        </li>
        <li className="selected">
          <Link to="/appliances">
            <img src={electronicsIcon} alt="Appliances" className='nav-img' />
            <div className='nav-text'>Appliances</div>
          </Link>
        </li>
        <li className="selected">
          <Link to="/babyitems">
            <img src={Personal} alt="Baby_Items" className='nav-img'/>
            <div className='nav-text'>Baby's</div>
          </Link>
        </li>
        <li className="selected">
          <Link to="/sports">
            <img src={Sports} alt="sports" className='nav-img'/>
            <div className='nav-text'>Sports</div>
          </Link>
        </li>
        <li className="selected">
          <Link to="/grocery">
            <img src={Grocery} alt="Grocery" className='nav-img'/>
            <div className='nav-text'>Grocery</div>
          </Link>
        </li>
        <li className="selected">
          <Link to="/under99">
            <img src={store} alt="Under@99" className='nav-img' />
            <div className='nav-text'>Under@99</div>
          </Link>
        </li>
        <li className="selected">
          <Link to="/coupon">
            <img src={coupon} alt="coupon" className='nav-img' />
            <div className='nav-text'>Coupons</div>
          </Link>
        </li>
      </ul>
       </div>
      </div>
    </nav>
 
  );
}

export default Navbar;
