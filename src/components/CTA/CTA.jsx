import React from "react";
import "./CTA.css";
import { Link } from "react-router-dom";
import { arrow_slant } from "../../assets/img";

const CTA = () => {
  return (
    <div className="cta secTop p20">
      <h3 className="sectionTitle">
        So, can we <br /> discuss your project!
      </h3>
      <div className="ctaImg">
        <Link to="/contact">
          <img src={arrow_slant} alt="cta_image" />
        </Link>
      </div>
      <p className="stroke">DREAMY</p>
    </div>
  );
};

export default CTA;
