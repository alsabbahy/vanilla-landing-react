import React from 'react'
import PortfolioList from '../components/PortfolioList'
import { portfolioItems } from '../data/portfolioItems'

function Portfolio() {
  return (
    <div className="portfolio-content" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Our Portfolio</h2>
              <span>Check out our latest work</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PortfolioList items={portfolioItems} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
