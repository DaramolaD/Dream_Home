import React from "react";
import "./Hero.css";
import { heroImg } from "../../assets/img/brand";
import { star } from "../../assets/icons";
import { heroData } from "../../assets/data/brandData";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_content p20">
        <motion.h1
          className="heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          We work to help you
          <br />
          Build your dream building
        </motion.h1>
        <motion.ul
          className="content_item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
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
        </motion.ul>
        <div className="bgColor"></div>
      </div>
      <div className="hero_img">
        <div className="hero_Img_text">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Avenues of Excellence, Crafted by Alliance
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            "Dedication to quality, partnership, excellence and delivering of
            top-notch construction solutions."
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
