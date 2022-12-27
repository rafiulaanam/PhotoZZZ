import React from "react";

const ReviewCard = ({review}) => {

    const {subject,message,rating} = review;


  return (
    <div className="card card-side bg-base-200 mt-5 shadow-xl">
      <figure>
        <div className="avatar flex items-center">
          <div className="w-20 h-20 rounded-full">
            <img src={''} alt=''/>
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{subject}</h2>
        <p>{message}</p>

        <div className="flex">
        <p>Rating: {rating}</p>

        <div className="rating rating-md rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" defaultChecked={false} />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" 
  defaultChecked={rating==='2.0' ? true : false} />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1"
  defaultChecked={rating==='2.5' ? true : false}/>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2"
  defaultChecked={rating==='3.0' ? true : false} />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" 
  defaultChecked={rating==='3.5' ? true : false} />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" 
  defaultChecked={rating==='4.0 '? true : false}/>
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" 
  defaultChecked={rating==='4.5' ? true : false} />
  <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2"
  defaultChecked={rating==='5.0 '? true : false}/>
</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
