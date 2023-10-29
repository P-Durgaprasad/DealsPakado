import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Css/ItemCarousel.css';
import API from '../API_Config';
function ItemCarousel() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/api/carousel/showAll`);  
        const jsonData = await response.json();
        if (Array.isArray(jsonData)) {
          setData(jsonData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleChangeIndex = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <div className='empty-deals'>
        <p className="no-deals-div">Currently No Deals Are available</p>
        </div>
      ) :  (
        data.length > 0 && (
          <ImageGallery
            items={data.map((item) => ({
              original: item.imageUrl,
              thumbnailLabel: item.title,
              renderItem: () => (
                <a href={`${item.affiliateLink}`} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                  <div className='image-div'>
                  <img className='image-slider' src={item.imageUrl} alt={item.title} />
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
            autoplayTimeout={5000}
            loop={true}
          />
        )
      )}
    </div>
  );
}

export default ItemCarousel;
