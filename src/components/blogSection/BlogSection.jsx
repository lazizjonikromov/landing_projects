import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/blog-1.jpg";
import Img2 from "../../assets/blog-2.jpg";
import Img3 from "../../assets/blog-3.jpg";
import "./blog_section.scss";

const blogs = [
  {
    title: "How to reach the top of the digital wallet",
    tag: "Product",
    img: Img1,
    date: "May 6, 2023",
  },
  {
    title: "How sascard works with multiple banks",
    tag: "Company",
    img: Img2,
    date: "May 5, 2023",
  },
  {
    title: "Building fintech is still too hard: Introducing sascard",
    tag: "Company",
    img: Img3,
    date: "May 5, 2023",
  },
];

const BlogSection = () => {
  return (
    <section className="blog">
      <Wrapper>
        <div className="blog__text">
          <h3>Explore Our Resources</h3>
          <p>
            Navigate articles, whitepapers, and thought leadership pieces to
            learn more about Sascard.
          </p>
        </div>

        <div className="blog__container">
          {blogs.map((blog, i) => (
            <div className="blog__card" key={i}>
              <div className="blog__card-img">
                <img src={blog.img} alt="" />
              </div>
              <div className="blog__tag">{blog.tag}</div>
              <div className="blog__title">{blog.title}</div>
              <h6>{blog.date}</h6>
            </div>
          ))}
        </div>

        <div className="blog__btn">
          <a href="#" className="button-primary">
            See All Blog
          </a>
        </div>
      </Wrapper>
    </section>
  );
};

export default BlogSection;
