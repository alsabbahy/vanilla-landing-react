import React from 'react';
import PortfolioItem from './PortfolioItem';

function PortfolioList({ items }) {
  return (
    <div id="owl-testimonials" className="owl-carousel owl-theme">
      {items.map((item) => (
        <PortfolioItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default PortfolioList;
