import React from 'react';
import './Css/BrandBoard.css';
import amazon from './Images/Amazon_logo.svg.png';
import flipkart from './Images/Flipkart_logo.svg.png';
import ajio from './Images/Ajio.png';
import myntra from './Images/Myntra_logo.png';
import tata from './Images/Tata_Cliq_logo.svg.png';
import paytm from './Images/paytm_mall_logo.png';
import nykaa from './Images/Nykaa_New_Logo.svg.png';
import snapdeal from './Images/Snapdeal_new_official_logo.png';
import zomato from './Images/Zomato_Logo.svg.png';
import swiggy from './Images/Swiggy_logo.svg.png';
import bigbusket from './Images/BigBasket_Logo.png';
import blinkit from './Images/blinkit_logo.webp';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const brands = [
  { id: 1, logo: amazon, brandName: "Amazon" },
  { id: 2, logo: flipkart, brandName: "Flipkart" },
  { id: 3, logo: ajio, brandName: "Ajio" },
  { id: 4, logo: myntra, brandName: "Myntra" },
  { id: 5, logo: tata, brandName: "Tata" },
  { id: 6, logo: paytm, brandName: "Paytm" },
  { id: 7, logo: nykaa, brandName: "Nykaa" },
  { id: 8, logo: snapdeal, brandName: "Snapdeal" },
  { id: 9, logo: zomato, brandName: "Zomato" },
  { id: 10, logo: swiggy, brandName: "Swiggy" },
  { id: 11, logo: bigbusket, brandName: "BigBasket" },
  { id: 12, logo: blinkit, brandName: "Blinkit" },
];

const BrandBoard = () => {
  return (
    <Container className="custom-container">
      <div className="brand-board-main">
        <div className="brand-list-container">
          <h1 id="label-title">Brand Board</h1>
        </div>
        <Row className="d-flex justify-content-center custom-row">
          {brands.map((brand) => (
            <Col key={brand.id} xs={4} sm={4} md={4} lg={4}>
              <Link to={`/brand/${brand.brandName}`} className="brand-link">
                <div className='brand'>
                  <img
                    className="brandboard-brand-image img-fluid"
                    src={brand.logo}
                    alt={`Brand ${brand.brandName}`}
                  />
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default BrandBoard;
