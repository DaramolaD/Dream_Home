import React from "react";
import "./Project.css";
import { maintenance } from "../../assets/img/brand";

const Project = () => {
  return (
    <div className="projects bg1 secTop2">
      <div className="container p20">
        <h3 className="sectionTitle">Projects</h3>
        <div className="mainTimgCont">
          <img src={maintenance} alt="maintenance" />
        </div>
      </div>
    </div>
  );
};

export default Project;
