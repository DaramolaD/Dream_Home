import React from "react";
import "./Footer.css";
import navLink from "../../assets/data/navLink";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container p20">
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
      </div>
    </div>
  );
};

export default Footer;
