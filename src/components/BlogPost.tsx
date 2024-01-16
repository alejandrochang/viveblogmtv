// src/components/BlogPost.tsx

import React from "react";
import { BlogPostData } from "../data/mockData";

interface BlogPostProps {
  post: BlogPostData;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => (
  <article>
    <h2>{post.title}</h2>
    <iframe
      src={post.src}
      title={post.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
    <p>{post.content}</p>
  </article>
);

export default BlogPost;
