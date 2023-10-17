import React from "react";
import { aboutUsData } from "../../assets/data/brandData";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about mTop3 border p20">
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
          About Us
        </motion.h2>
        <motion.p
          className="para"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {aboutUsData.about}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
