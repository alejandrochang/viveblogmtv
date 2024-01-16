// src/components/BlogPost.tsx

import React from "react";
import { BlogPostData } from "../data/mockData";

interface BlogPostProps {
  post: BlogPostData;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <iframe
      width="560"
      height="315"
      src={post.src}
      title={post.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </article>
);

export default BlogPost;
