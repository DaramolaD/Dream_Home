import React from "react";
import "./CTA.css";
import { Link } from "react-router-dom";
import { arrow_slant } from "../../assets/img";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="cta secTop p20">
      <motion.h3
        className="sectionTitle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        So, can we <br /> discuss your project!
      </motion.h3>
      <motion.div
        className="ctaImg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <Link to="/contact">
          <img src={arrow_slant} alt="cta_image" />
        </Link>
      </motion.div>
      <motion.p
        className="stroke"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        DREAMY
      </motion.p>
    </div>
  );
};

export default CTA;
