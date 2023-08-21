import React from "react";
import "./BlogComponent.css";
import { blog } from "../../assets/data/blogData";

const BlogComponent = () => {
  return (
    <div className="blog_section secTop p20 h2B">
      <h2 className="sectionTitle h2B">Blog</h2>
      <div className="blog_items">
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
      </div>
    </div>
  );
};

export default BlogComponent;
