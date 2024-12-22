import React from 'react'
import './PortfolioList.css'

function PortfolioList({ items }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="col">
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src={`/img/${item.image}`} alt={item.title} />
            </div>
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PortfolioList
