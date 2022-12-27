import React from 'react';
import img1 from '../../../Assets/img/1.jpg'
import img2 from '../../../Assets/img/2.jpg'
import img3 from '../../../Assets/img/3.jpg'
import img4 from '../../../Assets/img/4.jpg'
import './Banner.css'


const Banner = () => {
    return (
      <div className='container mx-auto '>
  <div className="carousel  w-full rounded-lg">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='img-gradient'>
    <img src={img1} className="w-full " alt="" />
    </div>
    
  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    
    </div>
    
    <div className="absolute  transform -translate-y-1/2 left-32 pt-40 ml-6 top-1/4">
     <h1 className='text-5xl font-bold  text-white'> Psychology of Creative <br/> Photography</h1>
     <p className='mt-8 text-white'>Phoblographer may seem like just another cultural/analytical site. <br/> However, like Creative Bloom, this blog includes a lot of great gear <br/> reviews and is a place where photography aficionados.</p>
    
    </div>
    
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img2} className="w-full " alt="" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>

    <div className="absolute  transform -translate-y-1/2 left-32 pt-40 ml-6 top-1/4">
     <h1 className='text-5xl font-bold  text-white'> Many of the world’s most prominent<br/> Photography</h1>
     <p className='mt-8 text-white'>Phoblographer may seem like just another cultural/analytical site. <br/> However, like Creative Bloom, this blog includes a lot of great gear <br/> reviews and is a place where photography aficionados.</p>
    
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img3} className="w-full " alt="" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>

    <div className="absolute  transform -translate-y-1/2 left-32 pt-40 ml-6 top-1/4">
     <h1 className='text-5xl font-bold  text-white'> Hack it as a successful <br/> Photography</h1>
     <p className='mt-8 text-white'>Phoblographer may seem like just another cultural/analytical site. <br/> However, like Creative Bloom, this blog includes a lot of great gear <br/> reviews and is a place where photography aficionados.</p>
    
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className='img-gradient'>
    <img src={img4} className="w-full " alt="" />
    </div>

    <div className="absolute  transform -translate-y-1/2 left-32 pt-40 ml-6 top-1/4">
     <h1 className='text-5xl font-bold  text-white'> Jamie Swanson writes <br/> Photography</h1>
     <p className='mt-8 text-white'>Phoblographer may seem like just another cultural/analytical site. <br/> However, like Creative Bloom, this blog includes a lot of great gear <br/> reviews and is a place where photography aficionados.</p>
    
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      </div>
    );
};

export default Banner;