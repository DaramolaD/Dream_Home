import React from "react";
import "./ProjectComponent.css";
import { project_1, project_2 } from "../../assets/img";
import projectData from "../../assets/data/projectData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectComponent = () => {
  const projectItem = "ty";
  return (
    <div className="projectComponent secTop p20">
      <motion.h2
        className="sectionTitle h2B"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Projects
      </motion.h2>
      <div className="projectItemCont">
        {projectData.map((item) => (
          <div className="projectItem" key={item.id}>
            <motion.div
              className="projectImg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img src={item.img} alt="project_image" />
            </motion.div>
            <motion.div
              className="projectContent"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3 className="sectionSubTitle">{item.subTitle}</h3>
              <p className="para">{item.para}</p>
              <div className="projectDetails">
                <div className="projectDetail">
                  <p className="date">{item.date}</p>
                  <p className="location">{item.location}</p>
                </div>
                <div className="projectType">
                  <p className="residential">{item.type}</p>
                </div>
              </div>
              {/* <Link to={`/project/:${item.id}`} className="btn2"> */}
              <Link to="/" className="readMore">
                View
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
