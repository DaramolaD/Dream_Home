import React from "react";
import "./News.css";
import { maintenance } from "../../assets/img/brand";
import { motion } from "framer-motion";

const News = () => {
  return (
    <div className="new bg1 secTop2">
      <div className="container p20">
        <motion.h3
          className="sectionTitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          News
        </motion.h3>
        <div className="mainTimgCont">
          <img src={maintenance} alt="maintenance" />
        </div>
      </div>
    </div>
  );
};

export default News;
