import React from "react";
import "./BlogComponent.css";
import { hero_img } from "../../assets/img";

const blog = [
  {
    id: 1,
    date: "Tue 07 Feb 2020",
    title: "How interior design and archecteture can work for seamless design",
  },
  {
    id: 2,
    date: "Tue 07 Feb 2020",
    title: "How interior design and archecteture can work for seamless design",
  },
];

const BlogComponent = () => {
  return (
    <div className="blog_section secTop p20 h2B">
      <h2 className="sectionTitle h2B">Blog</h2>
      <div className="blog_items">
        {blog.map((item) => (
          <div className="blog_item">
            <div className="blog_img">
              <img src={hero_img} alt="blog_image" />
            </div>
            <div className="blogContent">
              <p className="date">{item.date}</p>
              <p className="title">{item.title}</p>
              <button className="readMore">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
