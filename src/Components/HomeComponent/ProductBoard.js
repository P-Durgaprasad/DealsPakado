import React from 'react';
import './Css/ProductBoard.css';
import mobile from './Images/smartphone.png';
import laptop from './Images/laptop_22935.png';
import smartwatch from './Images/digital-watch_8469160.png';
import ac from './Images/air-conditioner-32-64.png';
import tv from './Images/tv-27-64.png';
import fridge from './Images/fridge-5-512.png';
import headphone from './Images/headphones-16-64.png';
import shoe from './Images/shoes.png';
import buds from './Images/earheadphones.png';
import printer from './Images/printer-78-64.png';
import beauty from './Images/beauty-care-2-48.png';
import footwear from './Images/footware.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function ProductBoard() {
  const brands = [
    { id: 1, logo: mobile, title: 'Mobile', value: 'Mobile' },
    { id: 2, logo: laptop, title: 'Laptop', value: 'Laptop' },
    { id: 3, logo: smartwatch, title: 'Smart Watch', value: 'smartwatch' },
    { id: 4, logo: ac, title: 'AC', value: 'AirConditioners' },
    { id: 5, logo: tv, title: 'TV', value: 'Televisions' },
    { id: 6, logo: fridge, title: 'Fridge', value: 'Refrigerators' },
    { id: 7, logo: headphone, title: 'Head Phone', value: 'Headphones' },
    { id: 8, logo: shoe, title: 'Shoe', value: 'shoes' },
    { id: 9, logo: buds, title: 'Ear Buds', value: 'Buds' },
    { id: 10, logo: printer, title: 'Printer', value: 'printer' },
    { id: 11, logo: beauty, title: 'Beauty', value: 'Beauty' },
    { id: 12, logo: footwear, title: 'Footwear', value: 'Footware' }
  ];

  return (
    <Container className="custom-container">
      <div className='productboardmain'>
        <div className='productlistcontainer'>
          <h1 id="productlabetitle">Product Board</h1>
        </div>
        <Row className="d-flex justify-content-center custom-one">
          {brands.map(brand => (
            <Col key={brand.id} xs={4} sm={4} md={4} lg={4}>
              <Link to={`/product/${brand.value}`} key={brand.id} style={{ textDecoration: 'none' }}>
                <div className='product' >
                  <img src={brand.logo} alt={`Product ${brand.title}`} className='productlogo' />
                  <p className='producttitle'>{brand.title}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default ProductBoard;
