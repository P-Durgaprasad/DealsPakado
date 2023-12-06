import React, { useState, useEffect } from 'react';
import './Css/NewCss.css';
import ShareProduct from '../NavbarComponent/FilterComponents/ShareProduct';
import { Col } from 'react-bootstrap';
// import API from '../API_Config';


function DealsDisplay() {
    const [deals, setDeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const staticDeals = [

        {
            itemId: 3,
            affiliateLink: 'https://amzn.to/3r4mEhp',
            imageUrl: 'https://m.media-amazon.com/images/I/81sTK4zipDL._AC_UY327_FMwebp_QL65_.jpg',
            itemTitle: 'Redmi Note 12 5G Frosted Green 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera',
            originalMRP: 19999,
            offerPrice: 16999,
            affiliateSite: 'Amazon',
            rating: 3,
            category1: 'Mobiles',
            category2: 'Smart Mobiles',
            category3: 'Android Phones',
            brand: 'Redmi',
            reviewsCount: null,
            shopName: 'Amazon',
            shopLink: 'https://amzn.to/3r4mEhp',
            startDate: null,
            endDate: null,
            viewsCount: '1702079999',
            status: '1',
            created_at: '2023-09-10 11:25:10.308711',
            updated_at: '2023-10-19 11:52:26.395127',
        },
        {
            itemId: 26,
            affiliateLink: 'https://amzn.to/3PnhSn8',
            imageUrl: 'https://m.media-amazon.com/images/I/61N5D3EPQFL._SX466_.jpg',
            itemTitle: 'V-Guard Zenora RO UV Water Purifier with Free Pre-filter | 8 Stage Purification with World-class RO Membrane & Next Generation UV Chamber | Free PAN India Installation & 1 Year Comprehensive Warranty | 7 L, Black',
            originalMRP: 15949,
            offerPrice: 9999,
            affiliateSite: 'Amazon',
            rating: 4.3,
            category1: 'Appliances',
            category2: 'WaterPurifiers',
            category3: 'RO UV Water Purifier',
            brand: 'V-Guard',
            reviewsCount: null,
            shopName: 'Amazon',
            shopLink: 'https://amzn.to/3PnhSn8',
            startDate: '2023-09-15 05:53:41.954657',
            endDate: '2023-09-15 05:53:41.954657',
            viewsCount: '1694777021',
            status: '1',
            created_at: '2023-09-15 05:53:41.954657',
            updated_at: '2023-09-15 05:53:41.954657',
        },
        {
            itemId: 30,
            affiliateLink: 'https://amzn.to/3ENpmek',
            imageUrl: 'https://m.media-amazon.com/images/I/71jH20FkqzL._SY450_.jpg',
            itemTitle: 'boAt Wave Style Call Smart Watch with Advanced BT Calling Chip, DIY Watch Face Studio, Coins, 1.69" HD Display, Health Ecosystem, Live Cricket Scores, Quick Replies, HR & SpO2(Active Black)',
            originalMRP: 6499,
            offerPrice: 1099,
            affiliateSite: 'Amazon',
            rating: 3.9,
            category1: 'Electronics',
            category2: 'Smartwatch',
            category3: 'Smart Watch',
            brand: 'boAt',
            reviewsCount: null,
            shopName: 'Amazon',
            shopLink: 'https://amzn.to/3ENpmek',
            startDate: null,
            endDate: null,
            viewsCount: '1695488155',
            status: '1',
            created_at: '2023-09-23 11:25:55.770532',
            updated_at: '2023-09-23 11:25:55.770532',
        },
        {
            itemId: 36,
            affiliateLink: 'https://amzn.to/3LxvpYh',
            imageUrl: 'https://m.media-amazon.com/images/I/61Kp-+0GrHL._UY741_.jpg',
            itemTitle: 'GoSriKi Women Kurta with Pant & Dupatta',
            originalMRP: 2599,
            offerPrice: 659,
            affiliateSite: 'Amazon',
            rating: 3.6,
            category1: 'Fashion',
            category2: 'Womens',
            category3: 'Kurta with Pant & Dupatta',
            brand: 'GoSriKi',
            reviewsCount: null,
            shopName: 'Amazon',
            shopLink: 'https://amzn.to/3LxvpYh',
            startDate: null,
            endDate: null,
            viewsCount: '1695492646',
            status: '1',
            created_at: '2023-09-23 12:40:46.986185',
            updated_at: '2023-09-23 12:40:46.986185',
        },
        {
            itemId: 39,
            affiliateLink: 'https://amzn.to/3ZvhF61',
            imageUrl: 'https://m.media-amazon.com/images/I/618e8PwNtYL._SX450_.jpg',
            itemTitle: 'BSB HOME 120 TC Double Abstract Printed Bedsheet with 2 Pillow Covers | 110 GSM Soft Brushed Microfiber - Breathable & Wrinkle Free - (86 X 88 Inch, Blue & Red)',
            originalMRP: 799,
            offerPrice: 209,
            affiliateSite: 'Amazon',
            rating: 0, // You provided '0' for rating, change it if you have the correct value
            category1: 'HomeFurniture',
            category2: 'BedRoom',
            category3: 'Bedsheet',
            brand: 'BSB',
            reviewsCount: null,
            shopName: 'Amazon',
            shopLink: 'https://amzn.to/3ZvhF61',
            startDate: null,
            endDate: null,
            viewsCount: '1695493566',
            status: '1',
            created_at: '2023-09-23 12:56:06.327906',
            updated_at: '2023-09-23 12:56:06.327906',
        },{
            itemId: 42,
            affiliateLink: 'https://ekaro.in/enkr20230923s35236681',
            imageUrl: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23619116/2023/6/13/fbc7bbb3-d2f6-45ee-bfe8-fba1735f7b051686658299292BitiyabyBhamaGirlsYellowFloralPrintedAngrakhaGottaPattiPureC1.jpg',
            itemTitle: 'Girls Floral Printed Angrakha Gotta Patti Pure Cotton Kurta with Sharara',
            originalMRP: 3999,
            offerPrice: 999,
            affiliateSite: 'Myntra',
            rating: 3.5,
            category1: 'Fashion',
            category2: 'Kids',
            category3: 'Kurta with Sharara',
            brand: 'Bitiya by Bhama',
            reviewsCount: null,
            shopName: 'Myntra',
            shopLink: 'https://ekaro.in/enkr20230923s35236681',
            startDate: null,
            endDate: null,
            viewsCount: '1695499626',
            status: '1',
            created_at: '2023-09-23 14:37:06.347663',
            updated_at: '2023-09-23 14:37:06.347663',
        },{
            itemId: 43,
            affiliateLink: 'https://ekaro.in/enkr20230923s35237196',
            imageUrl: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17361366/2022/3/3/55a8514e-5e96-46e2-aa2e-3fe919a4e4601646303683636CortinaUnisexTurquoiseBlueCurtainsandSheers1.jpg',
            itemTitle: 'Turquoise Blue & Grey Set of 2 Printed Room Darkening Window Curtain',
            originalMRP: 1598,
            offerPrice: 463,
            affiliateSite: 'Myntra',
            rating: 4.5,
            category1: 'HomeFurniture',
            category2: 'BedRoom',
            category3: 'Window Curtain',
            brand: 'Cortina',
            reviewsCount: null,
            shopName: 'Myntra',
            shopLink: 'https://ekaro.in/enkr20230923s35237196',
            startDate: null,
            endDate: null,
            viewsCount: '1695500192',
            status: '1',
            created_at: '2023-09-23 14:46:32.748082',
            updated_at: '2023-09-23 14:46:32.748082',
        },{
            itemId: 44,
            affiliateLink: 'https://ekaro.in/enkr20230923s35237586',
            imageUrl: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1884773/2022/10/28/e69038b8-b29b-4668-8449-fa997c5748591666951851033-Nivea-Unisex-Cocoa-Nourish-48h-Deep-Moisturising-For-Very-Dr-1.jpg',
            itemTitle: 'Unisex Cocoa Nourish 48h Deep Moisturising For Very Dry Skin Body Lotion 400 ml',
            originalMRP: 550,
            offerPrice: 275,
            affiliateSite: 'Myntra',
            rating: 4.6,
            category1: 'Grocery',
            category2: 'Grocery',
            category3: 'Body Lotion',
            brand: 'Nivea',
            reviewsCount: null,
            shopName: 'Myntra',
            shopLink: 'https://ekaro.in/enkr20230923s35237586',
            startDate: '2023-09-23 15:05:44.435304',
            endDate: '2023-09-23 15:09:19.411960',
            viewsCount: '1695501344',
            status: '1',
            created_at: '2023-09-23 15:05:44.435304',
            updated_at: '2023-09-23 15:09:19.411960',
        }
    ];
    useEffect(() => {
        const fetchDeals = async () => {
            try {
                // const response = await fetch(`${API}/api/product/allDeals`);
                // const data = await response.json();

                // if (Array.isArray(data)) {
                    setDeals(staticDeals);
                // } else {
                //     setDeals([]);
                // }

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
                {isLoading ? (
                    <p>Loading...</p>
                ) : currentDeals.length === 0 ? (
                    <div className='no-deals-container'>
                        <p className="no-deals-div">Currently, No Deals Are available</p>
                    </div>
                ) : (currentDeals.map((deal) => (
                    <Col lg={2} md={2} sm={12}>
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