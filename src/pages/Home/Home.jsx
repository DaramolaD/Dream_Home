import React from "react";

import "./Home.css";
import { hero_img } from "../../assets/img";
import { About, Hero, ProjectComponent, ServiceComponent, Welcome, WhyChooseUs } from "../../components";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import CTA from "../../components/CTA/CTA";


const Home = () => {
  
  return (
    <section className="home bg1">
      <div className="container">
        <Hero />
        <Welcome />
        <About />
        <ServiceComponent />
        <WhyChooseUs />
        <ProjectComponent />
        <BlogComponent />
        <CTA />
      </div>
    </section>
  );
};

export default Home;
