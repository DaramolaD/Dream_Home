import React from "react";
import "./Footer.css";
import navLink from "../../assets/data/navLink";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer">
      <motion.div
        className="container p20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="footerCont flexBtw">
          <div className="brand">
            <h4>Dreamy Home</h4>
          </div>
          <div className="footerNav flex">
            {navLink.map((item) => (
              <Link to={`/${item.navLink}`} key={item.id}>
                <li className="nav_link btn">{item.navName}</li>
              </Link>
            ))}
          </div>
        </div>
        <div className="privacy flexBtw">
          <span>&#169;2023</span>
          <p className="stroke">DREAMY</p>
          <span>Privacy Policy</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
