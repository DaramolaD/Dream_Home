import React from "react";
import { serviceData } from "../../assets/data/brandData";
import { aboutUsData } from "../../assets/data/brandData";

import "./Services.css";

const Services = () => {
  return (
    <div className="services bg1 secTop2">
      <div className="container p20">
        <h2 className="sectionHeading">Service</h2>
        <div className="brand_text">
          <h3>{serviceData.title}</h3>
          <p className="para">
            Welcome to our comprehensive range of construction services that
            cater to diverse needs. At Alliance Avenues Construction, we blend
            innovation with expertise to bring your architectural dreams to
            life. Explore our array of services designed to transform spaces
            into remarkable realities.
          </p>
        </div>

        <ul className="servicesList mTop">
          {serviceData.servicesItem.map((item) => (
            <li className="servicesItem" key={item.id}>
              <div className="serviceItemContent">
                <h3>{item.title}</h3>
                <p className="para">{item.details}</p>
              </div>
              <img src={item.img} alt="service_img" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;


// This is my current linkdin profile and others, and i want you to optimizie it for a react software development rollupVersion. Could you help optimize it using the most ranking keywords in frontend development?. Use both soft and hard skills hugely demanded for in the industry
