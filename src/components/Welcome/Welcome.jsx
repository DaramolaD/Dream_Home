import React from "react";
import { aboutUsData } from "../../assets/data/brandData";

import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome secTop p20">
      <h3>We are glad to have you here</h3>
      <p className="para">{aboutUsData.welcome.details}</p>

      <div className="btnCont">
        <Link to="/contact">
          <p className="btn2">Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
