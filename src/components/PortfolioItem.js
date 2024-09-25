import React from 'react';

function PortfolioItem({ image, bigImage, title, price }) {
  return (
    <div className="item">
      <div className="testimonials-item">
        <a href={`img/${bigImage}`} data-lightbox="image-1">
          <img src={`img/${image}`} alt={title} />
        </a>
        <div className="text-content">
          <h4>{title}</h4>
          <span>${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;