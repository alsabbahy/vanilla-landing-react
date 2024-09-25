import React from 'react';
import PortfolioList from '../components/PortfolioList';
import { portfolioItems } from '../data/portfolioItems';

function Portfolio() {
  return (
    <div className="parallax-content projects-content" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <PortfolioList items={portfolioItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
