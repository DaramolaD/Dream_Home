import React, { useRef, useState } from "react";
import "./BlogComponent.css";
import { blog } from "../../assets/data/blogData";
import { motion } from "framer-motion";

const BlogComponent = () => {
  
  return (
    <motion.div
      className="blog_section secTop p20 h2B"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h2 className="sectionTitle h2B">Blog</h2>
      <motion.div className="blog_items">
        {blog.map((item) => (
          <div className="blog_item" key={item.id}>
            <div className="blog_img">
              <img src={item.img} alt="blog_image" />
            </div>
            <div className="blogContent">
              <p className="date">{item.date}</p>
              <div className="blog_text_cont">
                <p className="title">{item.title}</p>
                <button className="readMore">Read More</button>
              </div>
            </div>
          </div>
        ))}
        
      </motion.div>
    </motion.div>
  );
};

export default BlogComponent;
