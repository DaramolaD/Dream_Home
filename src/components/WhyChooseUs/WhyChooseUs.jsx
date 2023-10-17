import React from "react";
import "./WhyChooseUs.css";
import { sellingPoint } from "../../assets/data/brandData";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs secTop border">
      <div className="whyChooseUsCont p20">
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
          Why Choose Us
        </motion.h2>
        <div className="chooseItems">
          {sellingPoint.map((item) => (
            <motion.div
              className="chooseItem"
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
              <p className="no">{item.id}</p>
              <div className="chooseItem_content">
                <h3 className="sectionSubTitle">{item.title}</h3>
                <ul className="points">
                  {item.text.map((item) => (
                    <li className="para" key={item.id}>
                      {item.text_i}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
