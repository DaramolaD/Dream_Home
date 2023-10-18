import React from "react";
import { aboutUsData } from "../../assets/data/brandData";

import "./Welcome.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="welcome secTop p20">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        We are glad to have you here
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
        {aboutUsData.welcome.details}
      </motion.p>

      <motion.div
        className="btnCont"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Link to="/contact">
          <p className="btn2 btnContactUs">Contact Us</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default Welcome;
