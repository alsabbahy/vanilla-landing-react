import React from 'react';
import ServiceInfo from '../components/ServiceInfo';
import ServiceItem from '../components/ServiceItem';

function Service() {
  const serviceItems = [
    {
      title: "Backend Development",
      description: "Expertise in building robust server-side applications, APIs, and databases using technologies like Node.js, Express, MongoDB, and SQL. Proficient in creating scalable and efficient backend systems."
    },
    {
      title: "Frontend Development",
      description: "Proficient in modern frontend technologies such as React, HTML5, CSS3, and JavaScript. Skilled in creating responsive and dynamic user interfaces, ensuring a seamless user experience."
    },
    {
      title: "Tutoring",
      description: "I am a tutor for programming in many languages such as Python, Java, C++, and JavaScript. I can help you with your programming problems."
    },
    {
      title: "Juniors Mentoring",
      description: "I am a mentor for juniors in programming. I can help you with your programming problems."
    }
  ];

  return (
    <div className="service-content" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ServiceInfo />
          </div>
          <div className="col-md-8">
            <div className="row">
              {serviceItems.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <ServiceItem title={item.title} description={item.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
