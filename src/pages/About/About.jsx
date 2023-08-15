import React from "react";
import "./About.css";
import { hero_img } from "../../assets/img";

const About = () => {
  return (
    <div className="about bg1 secTop2">
      <div className="container p20">
        <h2 className="sectionTitle">About</h2>
        <div className="brand_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis beatae dolore sequi. Sit deleniti ipsam error officiis dolores cumque molestiae asperiores beatae. Quidem tenetur velit ad nobis incidunt repudiandae doloribus voluptatibus error, eveniet minima, animi, voluptatum vero praesentium sit?
        </div>
        <div className="brand_history secTop">
          <img src={hero_img} alt="about_img" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quasi facilis harum optio laborum rem maxime reiciendis vel enim natus corporis fuga quidem, adipisci delectus suscipit repellendus sed nulla. Voluptatum!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
