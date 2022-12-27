import React from 'react';
import img from '../../Assets/img/1.jpg'

const Orders = () => {
    return (
        <div>
              <div className="hero  h-80" style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">My Orders</h1>
      <p className="mb-5 text-white">Thanks for visit our order section. See all the details which order you want to checkout.</p>
    
    </div>
  </div>
</div>





        </div>
    );
};

export default Orders;