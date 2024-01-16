// src/components/BlogPost.tsx

import React from 'react';
import { BlogPostData } from '../data/mockData';

interface BlogPostProps {
  post: BlogPostData;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </article>
);

export default BlogPost;
