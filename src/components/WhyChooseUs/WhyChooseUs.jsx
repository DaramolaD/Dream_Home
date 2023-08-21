import React from "react";
import "./WhyChooseUs.css";
import { sellingPoint } from "../../assets/data/brandData";

const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs secTop border">
      <div className="whyChooseUsCont p20">
        <h2 className="sectionTitle h2B">Why Choose Us</h2>
        <div className="chooseItems">
          {sellingPoint.map((item) => (
            <div className="chooseItem" key={item.id}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
