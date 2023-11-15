import React, { useState } from 'react';
import '../Css/CouponResult.css';

const CouponResult = ({ products }) => {
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

  return (
    <div className="coupon-list">
      <div className='coupon-display'>
        {products.length === 0 ? (
          <div className="no-coupons-container">
            <div className="no-coupons-message">Currently, No Coupons Are Available</div>
          </div>
        ) : (
          <>
            {currentDeals.map((product) => (
              <div key={product.id} className="coupon-card">
                <div className="coupon-details">
                  <img src={product.image} alt={product.code} className="coupon-image" />
                  <div className="coupon-code">{product.code}</div>
                  <div className="coupon-percentage">{product.percentage}% off</div>
                  <div className="coupon-website">
                    <a href={product.website} target="_blank" rel="noopener noreferrer">{product.website}</a>
                  </div>
                  <div className="coupon-category">Category: {product.category}</div>
                  <div className="coupon-expires">Expires At: {product.expiresAt}</div>
                  <div className={`coupon-status ${product.status === true ? 'active' : 'expired'}`}>
                    Status: {product.status === true ? 'Active' : 'Expired'}
                  </div>
                </div>
                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="get-deal-button">
                  Get Deal
                </a>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="pagination-container">
        <button
          onClick={goToPreviousPage}
          className="pagination-button arrow-button"
          disabled={currentPage === 1}
        >
          &#8249;
        </button>
        {Array.from(
          { length: Math.ceil(products.length / dealsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          )
        )}
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

export default CouponResult;
