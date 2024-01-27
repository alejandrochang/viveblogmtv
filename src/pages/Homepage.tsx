import React from 'react';
import BlogList from '../components/BlogList';
// import SideNavigation from '../components/SideNavigation';
import { mockData } from '../data/mockData';

const HomePage: React.FC = () => (
  <div className='blog-container'>
    {/* <SideNavigation /> */}
    <BlogList posts={mockData.posts} />
  </div>
);

export default HomePage;
