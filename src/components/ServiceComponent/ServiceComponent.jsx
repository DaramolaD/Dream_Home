import React from "react";

import "./ServiceComponent.css";
import { serviceData } from "../../assets/data/brandData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceComponent = () => {
  return (
    <div className="serviceComponent mTop3 border p20">
      <div className="container">
        <motion.h2
          className="sectionTitle h2B"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Our Service
        </motion.h2>
        <motion.p
          className="para"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {serviceData.service}
        </motion.p>
        <ul className="serviceListing">
          {serviceData.servicesItem.map((item) => (
            <motion.li
              className=""
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to="services" className="serviceListingItem">
                <h3>{item.title}</h3>
                <p className="para">{item.details}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="btnCont"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <Link to="/contact">
            <p className="btn2">Contact Us</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceComponent;
