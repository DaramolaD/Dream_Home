import React from "react";
import "./About.css";
import { aboutUsData } from "../../assets/data/brandData";
import { aboutVideo, storyImg } from "../../assets/img/brand";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about bg1 secTop2">
      <div className="container p20">
        <h2 className="sectionHeading">About</h2>
        <div className="brand_text">
          <h3 className="sectionTitle">{aboutUsData.welcome.details}</h3>
        </div>
        <div className="brand_story mTop3">
          <img src={storyImg} alt="about_img" />
          <div className="storyCont">
            <h3 className="sectionTitle">{aboutUsData.story.title}</h3>
            <p className="para">{aboutUsData.story.details}</p>
          </div>
        </div>

        <div className="philosophy mTop3">
          <h3 className="sectionTitle">{aboutUsData.philosophy.title}</h3>
          <p className="para">{aboutUsData.philosophy.details}</p>
        </div>

        <div className="approach mTop3">
          <div className="approachContent">
            <h3 className="sectionTitle">{aboutUsData.approach.title}</h3>
            <p className="para">{aboutUsData.approach.details}</p>
          </div>
          <div className="video">
            {/* <video src={aboutVideo} loop="" muted="" autoplay=""></video> */}
            <video autoplay muted loop>
              <source src={aboutVideo} type="video/mp4" />
              <p className="para">Sorry, Your Browser doesn't support Embedded videos. </p>
            </video>
          </div>
        </div>

        <div className="vision mTop3">
          <h3 className="sectionTitle">{aboutUsData.vision.title}</h3>
          <p className="para">{aboutUsData.vision.details}</p>
        </div>
        {/* <div className="team mTop3"> */}
          {/* Team */}
          {/* <h3>{aboutUsData.vision.title}</h3>
          <p>{aboutUsData.vision.details}</p> */}
        {/* </div> */}

        <div className="aboutCta mTop3">
          <div className="ctaContent">
            <h3 className="sectionTitle">{aboutUsData.alliance.title}</h3>
            <p className="para">{aboutUsData.alliance.details}</p>
          </div>
          <Link to="/contact" className="btn2">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
