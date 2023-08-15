import React from "react";
import "./ProjectComponent.css";
import { hero_img } from "../../assets/img";
import projectData from "../../assets/data/projectData";
import { Link } from "react-router-dom";

const ProjectComponent = () => {
  const projectItem = "ty";
  return (
    <div className="projectComponent secTop p20">
      <h2 className="sectionTitle h2B">Projects</h2>
      <div className="projectItemCont">
        {projectData.map((item) => (
          <div className="projectItem" key={item.id}>
            <div className="projectImg">
              <img src={hero_img} alt="project_image" />
            </div>
            <div className="projectContent">
              <h3 className="sectionSubTitle">Lorem ipsum dolor sit amet.</h3>
              <p className="para">Lorem ipsum dolor sit amet.</p>
              <div className="projectDetails">
                <div className="projectDetail">
                  <p className="date">{item.date}</p>
                  <p className="location">{item.location}</p>
                </div>
                <div className="projectType">
                  <p className="residential">{item.type}</p>
                </div>
              </div>
              <Link to={`/project/:${item.id}`} className="btn2">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
