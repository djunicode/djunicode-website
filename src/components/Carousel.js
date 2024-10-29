import React, { useState, useEffect } from "react";
import "../styles/components/carousel.scss";

function Carousel({ children, height = "25rem", hideArrows, objectFit = "contain" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (React.Children.count(children) <= 1) return;
    
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [children]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStart(null);
  };

  return (
    <div 
      className="carousel-root"
      style={{ height }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="carousel-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div 
            key={index} 
            className="carousel-slide"
            style={{ 
              '--object-fit': objectFit 
            }}
          >
            {React.cloneElement(child, {
              style: {
                objectFit,
                width: '100%',
                height: '100%'
              }
            })}
          </div>
        ))}
      </div>

      {!hideArrows && React.Children.count(children) > 1 && (
        <>
          <button className="carousel-arrow prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-arrow next" onClick={nextSlide}>
            ❯
          </button>
        </>
      )}

      {React.Children.count(children) > 1 && (
        <div className="carousel-dots">
          {React.Children.map(children, (_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;