import React, { useState } from 'react';
import '../../HomeComponent/Css/NewCss.css';
import ShareProduct from './ShareProduct';
import { Col, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterResult = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dealsPerPage = 10;
  const indexOfLastDeal = currentPage * dealsPerPage;
  const indexOfFirstDeal = indexOfLastDeal - dealsPerPage;
  const currentDeals = products.slice(indexOfFirstDeal, indexOfLastDeal);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(products.length / dealsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star">&#9733;</span>);
      } else if (halfStar && i === Math.ceil(rating)) {
        stars.push(<span key={i} className="star">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>);
      }
    }

    return stars;
  };

  const renderPaginationItems = () => {
    const totalPageCount = Math.ceil(products.length / dealsPerPage);
    const paginationItems = [];

    if (totalPageCount > 3) {
      paginationItems.push(
        <li key={1} className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
          <button className="pagination-button page-link" onClick={() => goToPage(1)}>
            1
          </button>
        </li>
      );

      if (currentPage > 3) {
        paginationItems.push(
          <li key="ellipsis1" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }

      for (let i = Math.max(currentPage - 1, 2); i <= Math.min(currentPage + 1, totalPageCount - 1); i++) {
        paginationItems.push(
          <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
            <button className="pagination-button page-link" onClick={() => goToPage(i)}>
              {i}
            </button>
          </li>
        );
      }

      if (currentPage < totalPageCount - 1) {
        paginationItems.push(
          <li key="ellipsis2" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }

      paginationItems.push(
        <li key={totalPageCount} className={`page-item ${currentPage === totalPageCount ? 'active' : ''}`}>
          <button className="pagination-button page-link" onClick={() => goToPage(totalPageCount)}>
            {totalPageCount}
          </button>
        </li>
      );
    } else {
      for (let i = 1; i <= totalPageCount; i++) {
        paginationItems.push(
          <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
            <button className="pagination-button page-link" onClick={() => goToPage(i)}>
              {i}
            </button>
          </li>
        );
      }
    }

    return paginationItems;
  };

  return (
    <div className='deals-container-main'>
      <div className="deals-container">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} xxxl={8} style={{ width: '100%' }} className="row-container">
          {products.length === 0 ? (
            <div className='no-deals-container'>
              <p className="no-deals-div">Currently, No Deals Are available</p>
            </div>
          ) : (
            currentDeals.map((deal) => (
              <Col key={deal.itemId} xs={12} sm={6} md={4} lg={4} xl={3} xxl={2} xxxl={2} style={{ margin: '5px 0' }}>
                <Card className='main-deal-card' key={deal.itemId}>
                  <Card.Body>
                    <div className='deal-body-div'>
                      <Card.Link href={deal.affiliateLink} target="_blank" rel="noopener noreferrer">
                        <div className='deal-image-div'>
                          <img src={deal.imageUrl} alt={deal.title} className='deal-image' />
                        </div>
                      </Card.Link>
                      <div className='deal-title-div'>
                        <h1 className='deal-title'>{deal.itemTitle}</h1>
                      </div>
                      <div className='deal-down-div'>
                        <div className='brand-name-rating'>
                          <div className='brandName-info'>
                            {deal.affiliateSite}
                          </div>
                          <div className="deal-rating">
                            {deal.rating > 0 ? (
                              <div className='deals-stars'>
                                <div className="deal-rating-number">
                                  <span>{parseFloat(deal.rating).toFixed(1)}</span>
                                </div>
                                <div className='rating'>
                                  {renderStars(deal.rating)}
                                </div>
                              </div>
                            ) : (
                              <div className="no-reviews">No Reviews</div>
                            )}
                          </div>
                        </div>
                        <div className="deal-info">
                          <div className="regular-price">
                            Rs.{deal.originalMRP.toLocaleString()}/-
                          </div>
                          <div className="deal-price">
                            Rs.{deal.offerPrice.toLocaleString()}/-
                          </div>
                          <span className="offer-label">
                            {Math.round(((deal.originalMRP - deal.offerPrice) / deal.originalMRP) * 100)}% Off
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='shopnow'>
                      <Card.Link href={deal.affiliateLink} className='shop-now-button' target="_blank" rel="noopener noreferrer">
                        Shop Now
                      </Card.Link>
                      <div className='whatsapp-share'>
                        <ShareProduct affurl={deal.affiliateLink} affsite={deal.affiliateSite} title={deal.itemTitle} imageUrl={deal.imageUrl} price={deal.offerPrice} MRP={deal.originalMRP} />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </div>
      <div className="pagination-container">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button type="button" className="pagination-button page-link" onClick={goToPreviousPage} tabIndex="-1" disabled={currentPage === 1}>
                &#8249; 
              </button>
            </li>
            {renderPaginationItems()}
            <li className={`page-item ${currentPage === Math.ceil(products.length / dealsPerPage) ? 'disabled' : ''}`}>
              <button type="button" className="pagination-button page-link" onClick={goToNextPage} disabled={currentPage === Math.ceil(products.length / dealsPerPage)}>
                 &#8250;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FilterResult;
