import React from "react";
import "./About.css";
import { aboutUsData } from "../../assets/data/brandData";
import { aboutVideo, storyImg } from "../../assets/img/brand";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about bg1 secTop2">
      <div className="container p20">
        <motion.h2
          className="sectionHeading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          About
        </motion.h2>
        <motion.div
          className="brand_text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="sectionTitle">{aboutUsData.welcome.details}</h3>
        </motion.div>
        <div className="brand_story mTop3">
          <motion.div
            className="aboutImgCont"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={storyImg} alt="about_img" />
          </motion.div>
          <div className="storyCont">
            <motion.h3
              className="sectionTitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {aboutUsData.story.title}
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
              {aboutUsData.story.details}
            </motion.p>
          </div>
        </div>

        <div className="philosophy mTop3">
          <motion.h3
            className="sectionTitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {aboutUsData.philosophy.title}
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
            {aboutUsData.philosophy.details}
          </motion.p>
        </div>

        <div className="approach mTop3">
          <div className="approachContent">
            <motion.h3
              className="sectionTitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {aboutUsData.approach.title}
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
              {aboutUsData.approach.details}
            </motion.p>
          </div>
          <motion.div
            className="video"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* <video src={aboutVideo} loop="" muted="" autoplay=""></video> */}
            <video autoPlay muted loop controls>
              <source src={aboutVideo} type="video/mp4" />
              <p className="para">
                Sorry, Your Browser doesn't support Embedded videos.{" "}
              </p>
            </video>
          </motion.div>
        </div>

        <div className="vision mTop3">
          <motion.h3
            className="sectionTitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {aboutUsData.vision.title}
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
            {aboutUsData.vision.details}
          </motion.p>
        </div>
        {/* <div className="team mTop3"> */}
        {/* Team */}
        {/* <h3>{aboutUsData.vision.title}</h3>
          <p>{aboutUsData.vision.details}</p> */}
        {/* </div> */}

        <motion.div
          className="aboutCta mTop3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <div className="ctaContent">
            <motion.h3
              className="sectionTitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {aboutUsData.alliance.title}
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
              {aboutUsData.alliance.details}
            </motion.p>
          </div>
          <Link to="/contact" className="btn2">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
