import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewPost = () => {
   const {title,img,details,comments} = useLoaderData()
   const {description} =details[0];

    return (
        <div className='my-20' >
            <div className='flex justify-center'><img src={img} alt="" /></div>

          <div className='container mx-auto'>
          <h1 className="text-4xl font-semibold mt-20 text-center">{title}</h1>
          <p className='text-center mt-5 underline'>{comments} Comments</p>
            <p className='mt-10'>{description}</p>
          </div>
        </div>
    );
};

export default ViewPost;