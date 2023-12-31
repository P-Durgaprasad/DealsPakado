import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className='menubar menubarview'>
        <ul className="menu-bar">
          <li className="selected">
            <Link to="/deals">
              <img src={Deals} alt="Best Deals - Special Offers" className='nav-img' />
              <div className='nav-text'>Deals </div>
            </Link>
          </li>
          <li className="selected">
            <Link to="/mobiles">
              <img src={mobileIcon} alt="Mobile Phones - Latest Models" className='nav-img' />
              <div className='nav-text'>Mobiles</div>
            </Link>
          </li>
          <li className="selected">
            <Link to="/fashion">
              <img src={fashionIcon} alt="Fashion - Trendy Clothing" className='nav-img' />
              <div className='nav-text'>Fashion</div>
            </Link>
          </li>
          <li className="selected">
            <Link to="/electronics">
              <img src={appliancesIcon} alt="Electronics - Gadgets and Appliances" className='nav-img' />
              <div className='nav-text'>Electronics</div>
            </Link>
          </li>
          <li className="selected">
            <Link to="/furniture">
              <img src={furnitureIcon} alt="Home & Furniture - Stylish Décor" className='nav-img' />
              <div className='nav-text'>Furniture</div>
            </Link>
          </li>
          <li className="selected">
            <Link to="/appliances">
              <img src={electronicsIcon} alt="Appliances - Home Essentials" className='nav-img' />
              <div className='nav-text'>Appliances</div>
            </Link>
          </li>
          <li className="selected">
            <Link to="/babyitems">
              <img src={Personal} alt="Baby Items - Adorable Products" className='nav-img' />
              <div className='nav-text'>Baby's</div>
            </Link>
          </li>
          <li className="selected">
            <Link to="/sports">
              <img src={Sports} alt="Sports - Fitness and Recreation" className='nav-img' />
              <div className='nav-text'>Sports</div>
            </Link>
          </li>
          <li className="selected">
            <Link to="/grocery">
              <img src={Grocery} alt="Grocery - Fresh and Pantry Items" className='nav-img' />
              <div className='nav-text'>Grocery</div>
            </Link>
          </li>
          <li className="selected">
            <Link to="/under99">
              <img src={store} alt="Products Under $99 - Affordable Deals" className='nav-img' />
              <div className='nav-text'>Under@99</div>
            </Link>
          </li>
          <li className="selected">
            <Link to="/coupon">
              <img src={coupon} alt="Coupons - Money-saving Offers" className='nav-img' />
              <div className='nav-text'>Coupons</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
