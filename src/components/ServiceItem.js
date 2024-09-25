import React from 'react';

function ServiceItem({ title, description }) {
  return (
    <div className="service-item">
      <h4>{title}</h4>
      <div className="line-dec"></div>
      <p>{description}</p>
    </div>
  );
}

export default ServiceItem;