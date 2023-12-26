import React from 'react';
import ItemCarousel from './ItemCarousel';
import BrandBoard from './BrandBoard';
import ProductBoard from './ProductBoard';
import DealsDisplay from './DealsDisplay';
import './Css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

function Home() {

  return (
<div className="home-main-div container-fluid">
  <div className="main">
    <Container fluid>
      <Row xs={1} sm={1} md={1} lg={3} xl={3} xxl={3} xxxl={3}>
        <Col>
          <BrandBoard />
        </Col>
        <Col>
          <ItemCarousel />
        </Col>
        <Col>
          <ProductBoard />
        </Col>
      </Row>
    </Container>
  </div>
  <DealsDisplay />
</div>

  );
}

export default Home;
