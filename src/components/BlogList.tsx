import React from "react";
import { BlogListProps } from "../data/mockData";

const BlogList: React.FC<BlogListProps> = ({ posts }) => (
  <div className="blog-post-container">
    {posts.map(({ id, title, content, src }) => (
      <div key={id} className="blog-post">
        <h2>{title}</h2>
        <p>{content}</p>
        <iframe
          width="560"
          height="315"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    ))}
  </div>
);

export default BlogList;
