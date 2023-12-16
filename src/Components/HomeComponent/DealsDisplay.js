import React, { useState, useEffect } from 'react';
import './Css/NewCss.css';
import ShareProduct from '../NavbarComponent/FilterComponents/ShareProduct';
import { Col } from 'react-bootstrap';
import API from '../API_Config';


function DealsDisplay() {
    const [deals, setDeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                const response = await fetch(`${API}/api/product/allDeals`);
                const data = await response.json();

                if (Array.isArray(data)) {
                    setDeals(data);
                } else {
                    setDeals([]);
                }

                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchDeals();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const dealsPerPage = 49;

    const indexOfLastDeal = currentPage * dealsPerPage;
    const indexOfFirstDeal = indexOfLastDeal - dealsPerPage;
    const currentDeals = deals.slice(indexOfFirstDeal, indexOfLastDeal);

    function goToPage(pageNumber) {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    }

    function goToPreviousPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function goToNextPage() {
        if (currentPage < Math.ceil(deals.length / dealsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }
    function renderStars(rating) {
        if (rating === 0) {
            return "No reviews";
        }

        const fullStars = Math.floor(rating);
        const halfStarred = rating - fullStars >= 0.5;

        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<span key={i} className="star">&#9733;</span>);
            } else if (halfStarred && i === Math.ceil(rating)) {
                stars.push(<span key={i} className="star">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="star">&#9734;</span>);
            }
        }

        return stars;
    }


    return (
        <div className='container-fluid '>
        <div className='deals-container-main'>
            <div className="deals-container">
            <div className='row'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : currentDeals.length === 0 ? (
                    <div className='no-deals-container'>
                        <p className="no-deals-div">Currently, No Deals Are available</p>
                    </div>
                ) : (currentDeals.map((deal) => (
                    
                    <Col lg={2} md={2} sm={12} style={{marginBottom:'24px'}}>
                    <div className='main-deal-card' key={deal.itemId}>
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
                                                    <div className="no-reviews">No Review's</div>
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
                                    <ShareProduct url={deal.affiliateLink} title={deal.itemTitle} id={deal.itemId} imageUrl={deal.imageUrl} price={deal.offerPrice} MRP={deal.originalMRP} />
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                   
                )))}
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
                {Array.from({ length: Math.ceil(deals.length / dealsPerPage) }, (_, index) => (
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
                    disabled={currentPage === Math.ceil(deals.length / dealsPerPage)}
                >
                    &#8250;
                </button>
            </div>
        </div>
        </div>
    );
}

export default DealsDisplay;