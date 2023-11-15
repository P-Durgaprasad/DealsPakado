import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import './Css/ItemCarousel.css';
import API from '../API_Config';
import useSWR from 'swr';

function ItemCarousel() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { data: carouselData } = useSWR(
    `${API}/api/carousel/showAll`,
    async (url) => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        if (Array.isArray(jsonData)) {
          return jsonData;
        }
        return [];
      } catch (err) {
        console.error('Error fetching data:', err);
        return [];
      }
    }
  );

  useEffect(() => {
    if (carouselData) {
      setData(carouselData);
      setIsLoading(false);
    }
  }, [carouselData]);

  const handleChangeIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      {isLoading ? (
        <p>Loading...</p>
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
  );
}

export default ItemCarousel;
