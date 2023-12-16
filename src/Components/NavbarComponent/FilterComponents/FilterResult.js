import React, { useState } from 'react';
import '../../HomeComponent/Css/NewCss.css';
import ShareProduct from './ShareProduct';
import { Col } from 'react-bootstrap';

const FilterResult = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dealsPerPage = 50;
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

  return (
    <div className='deals-container-main'>
      <div className="deals-container">
      <div className='row '>
        {products.length === 0 ? (
          <div className='no-deals-container'>
          <p className="no-deals-div">Currently, No Deals Are available</p>
          </div>
        ) : (
          currentDeals.map((deal) => (
            <Col lg={2} md={3} sm={12} style={{marginBottom:'24px'}}>
            <div className='main-deal-card'key={deal.itemId}>
              <div key={deal.itemId} className="deal-card">
                <a href={deal.affiliateLink} className='brandUrl' target="_blank" rel="noopener noreferrer">
                  <div className='deal-body-div'>
                    <div className='deal-image-div'>
                      <img src={deal.imageUrl} alt={deal.title} className='deal-image' />
                    </div>
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
                </a>
                <div className='shopnow'>
                  <div className='show-now-link'>
                    <a href={deal.affiliateLink} className='shop-now-button' target="_blank" rel="noopener noreferrer">
                      Shop Now
                    </a>
                  </div>
                  <div className='whatsapp-share'>
                    <ShareProduct url={deal.affiliateLink} title={deal.itemTitle} imageUrl={deal.imageUrl} price={deal.offerPrice} />
                  </div>
                </div>
              </div>
            </div>
            </Col>
          ))
        )}
      
      
      </div>
      </div>
      <div className="pagination-container">
        <button
          onClick={goToPreviousPage}
          className="pagination-button arrow-button"
          disabled={currentPage === 1}
        >
          &#8249;
        </button>
        {Array.from({ length: Math.ceil(products.length / dealsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className="pagination-button arrow-button"
          disabled={currentPage === Math.ceil(products.length / dealsPerPage)}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default FilterResult;
