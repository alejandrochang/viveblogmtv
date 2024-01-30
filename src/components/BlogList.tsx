import React from "react";
import { BlogListProps } from "../data/mockData";
import Verse from "./Verse";

const BlogList: React.FC<BlogListProps> = ({ posts, seriesScripture }) => (
  <div className="blog-post-container">
    <Verse scripture={seriesScripture[0]} />
    {posts.map(({ id, title, content, coverImg, series }) => (
      <div key={id} className="blog-post" onClick={() => window.location.href = `/sermon/${id}`}>
        <img src={coverImg} alt={title} />
        <div className="blog-content">
          <p className="title">{title}</p>
          <p>{series}</p>
          <br />
          <p>{content}</p>
        </div>
      </div>
    ))}
  </div>
);

export default BlogList;
