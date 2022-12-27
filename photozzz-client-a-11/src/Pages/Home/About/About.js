import React from 'react';

import img from '../../../Assets/img/1.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img alt='' src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
        <span className='text-orange-600'>About Us</span>
      <h1 className="text-5xl font-bold">We do The Photography</h1>
      <p className="py-6">We provide qualityfull Photo in every situation in everywhere</p>
      <button  className="btn btn-accent">Hire Us</button>

   
    </div>
  </div>
</div>











        </div>
    );
};

export default About;