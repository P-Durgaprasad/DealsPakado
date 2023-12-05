import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import './Css/ItemCarousel.css';
// import { row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import useSWR from 'swr';
// import API from '../API_Config';

function ItemCarousel() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const { data: carouselData, error: fetchError } = useSWR(
  //   `${API}/api/carousel/showAll`,
  //   async (url) => {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const jsonData = await response.json();
  //       return Array.isArray(jsonData) ? jsonData : [];
  //     } catch (err) {
  //       throw new Error('Failed to fetch data');
  //     }
  //   }
  // );

  // Static data
  const staticDeals = [
    {
      itemId: 1,
      affiliateLink: 'https://amzn.to/3EKnK5a',
      imageUrl: 'https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/BAU/realme/CLP/60x/19Sept/D94696972_Launch_catpage_1400x800_2._CB578470111_.jpg',
      itemTitle: 'Amazon-Realme-Narzo',
      originalMRP: null,
      offerPrice: null,
      affiliateSite: 'Amazon',
      rating: null,
      category1: 'Wireless',
      category2: null,
      category3: null,
      brand: null,
      reviewsCount: null,
      shopName: 'Amazon',
      shopLink: 'https://amzn.to/3EKnK5a',
      startDate: '2023-09-19 07:33:17.126732',
      endDate: '2023-09-19 09:27:09.549047',
      viewsCount: '1702079999',
      status: '1',
      created_at: '2023-09-19 07:33:17.126732',
      updated_at: '2023-09-19 09:27:09.549047',
    }
  ];

  useEffect(() => {
    // if (fetchError) {
    //   setError(fetchError);
    // } else if (carouselData) {
    //   setData([...staticDeals, ...carouselData]);
    // }
    setData(staticDeals);
    setIsLoading(false);
  // }, [fetchError, carouselData]);

  },[]);
  const handleChangeIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Col sm={4}>
    <div className="carousel-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Server Down, Please Try again !</p>
      ) : data.length === 0 ? (
        <div className="empty-deals">
          <p className="no-deals-div">Currently, No Deals Are Available</p>
        </div>
      ) : (
        <ImageGallery
          items={data.map((item) => ({
            original: item.imageUrl,
            thumbnailLabel: item.title,
            renderItem: () => (
              <a
                href={`${item.affiliateLink}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="image-div">
                  <img
                    className="image-slider"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>
              </a>
            ),
          }))}
          currentIndex={index}
          onClick={(currentIndex) => handleChangeIndex(currentIndex)}
          slidesPerView={1}
          spaceBetween={10}
          autoPlay={true}
          disableKeyDown={true}
          autoplayTimeout={1000}
          loop={true}
        />
      )}
    </div>
    </Col>
  );
}

export default ItemCarousel;
