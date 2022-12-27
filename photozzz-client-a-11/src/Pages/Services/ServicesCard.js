import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {

    const {_id,img,title,price,rating,description}= service;


    return (
        <div className="card card-compact w-96  shadow-xl bg-white">
  <figure>
  <PhotoProvider>
      <PhotoView src={img}>
      <img src={img} alt="Shoes" />
      </PhotoView>
    </PhotoProvider>
    
  
  </figure>
  <div className="card-body">
    <h2 className="card-title text-black">{title}</h2>
    <p>Price: ${price}</p>
    <div className="rating">
    <p>Rating: {rating}</p>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<p>{description}</p>
    <div className="card-actions justify-end">
     <Link to={`/services/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;