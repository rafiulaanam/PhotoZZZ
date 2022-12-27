import React from 'react';
import { useLoaderData } from 'react-router-dom';

import img from '../../Assets/img/1.jpg'
import BlogCard from './BlogCard';
import BlogQ from './BlogQ';

const Blog = () => {
    const blogs = useLoaderData() 
    return (
        <div>
            <div className="hero  h-80" style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Blogs</h1>
      <p className="mb-5 text-white">Thanks for visit our blog section. See all the details which blog you want to read.</p>
    
    </div>
  </div>
        </div>

<div>
  <BlogQ></BlogQ>
</div>
        
      <div className='mt-10'>
      {
            blogs.map(blog=><BlogCard
            key={blog.id}
            blog={blog}
            ></BlogCard>)
       }
      </div>











        </div>
    );
};

export default Blog;