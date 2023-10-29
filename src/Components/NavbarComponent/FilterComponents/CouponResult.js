import React from 'react';
import '../Css/CouponResult.css';

const CouponResult = ({ products }) => {

  return (
    <div className="coupon-list">
      {products.map((product) => (
        <div key={product.id} className="coupon-card">
          <div className="coupon-details">
            <img src={product.image} alt={product.code} className="coupon-image" />
            <div className="coupon-code">{product.code}</div>
            <div className="coupon-percentage">{product.percentage}% off</div>
            <div className="coupon-website">
              Website: <a href={product.website} target="_blank" rel="noopener noreferrer">{product.website}</a>
            </div>
            <div className="coupon-category">Category: {product.category}</div>
            <div className="coupon-expires">Expires At: {product.expiresAt}</div>
            <div className={`coupon-status ${product.status === true ? 'active' : 'expired'}`}>
              Status: {product.status === true ? 'Active' : 'Expired'}
            </div>
          </div>
          <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="get-deal-button">Get Deal</a>
        </div>
      ))}
    </div>
  );
};

export default CouponResult;
