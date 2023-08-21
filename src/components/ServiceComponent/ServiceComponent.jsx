import React from "react";

import "./ServiceComponent.css";
import { serviceData } from "../../assets/data/brandData";
import { Link } from "react-router-dom";

const ServiceComponent = () => {
  return (
    <div className="serviceComponent mTop3 border p20">
      <div className="container">
        <h2 className="sectionTitle h2B">Our Service</h2>
        <p className="para">{serviceData.service}</p>
        <ul className="serviceListing">
          {serviceData.servicesItem.map((item) => (
            <li className="" key={item.id}>
              <Link to="services" className="serviceListingItem">
                <h3>{item.title}</h3>
                <p className="para">{item.details}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="btnCont">
          <Link to="/contact">
            <p className="btn2">Contact Us</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
