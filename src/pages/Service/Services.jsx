import React from "react";
import { serviceData } from "../../assets/data/brandData";
import { aboutUsData } from "../../assets/data/brandData";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  return (
    <div className="services bg1 secTop2">
      <div className="container p20">
        <motion.h2
          className="sectionHeading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Service
        </motion.h2>
        <div className="brand_text">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {serviceData.title}
          </motion.h3>
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
            Welcome to our comprehensive range of construction services that
            cater to diverse needs. At Alliance Avenues Construction, we blend
            innovation with expertise to bring your architectural dreams to
            life. Explore our array of services designed to transform spaces
            into remarkable realities.
          </motion.p>
        </div>

        <ul className="servicesList mTop">
          {serviceData.servicesItem.map((item) => (
            <li className="servicesItem" key={item.id}>
              <div className="serviceItemContent">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {item.title}
                </motion.h3>
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
                  {item.details}
                </motion.p>
              </div>
              <motion.div
                className="img_container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={item.img} alt="service_img" />
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;

// This is my current linkdin profile and others, and i want you to optimizie it for a react software development rollupVersion. Could you help optimize it using the most ranking keywords in frontend development?. Use both soft and hard skills hugely demanded for in the industry
