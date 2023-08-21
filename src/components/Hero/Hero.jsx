import React from "react";
import "./Hero.css";
import { heroImg } from "../../assets/img/brand";
import { star } from "../../assets/icons";
import { heroData } from "../../assets/data/brandData";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_content p20">
        <h1 className="heading">
          We work to help you
          <br />
          Build your dream building
        </h1>
        <ul className="content_item">
          {heroData.map((heroItem) => (
            <li className="no" key={heroItem.no}>
              {!heroItem.img ? (
                <p>{heroItem.no}</p>
              ) : (
                <div className="star_cont">
                  <p>{heroItem.no}</p>
                  {heroItem.img && (
                    <img className="heroItem_star" src={star} alt="star_icon" />
                  )}
                </div>
              )}
              <div className="spanCont">
                <span className="span">{heroItem.para1}</span>
                <span>{heroItem.para2}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="bgColor"></div>
      </div>
      <div className="hero_img">
        <div className="hero_Img_text">
          <h3>Avenues of Excellence, Crafted by Alliance</h3>
          <p>"Dedication to quality, partnership, excellence and delivering of top-notch construction solutions."</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
