import React, { useEffect, useState } from "react";
import { useContext } from "react";
import img from "../../Assets/img/1.jpg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyReview from "./MyReview";

const Review = () => {
  const { user } = useContext(AuthContext);

  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
      headers: {
        authorization:  `bearer ${localStorage.getItem('accessToken')}}` //for jwt
      }
    })
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  return (
    <div>
      <div className="hero  h-80" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">My Review</h1>
            <p className="mb-5 text-white">
              Thanks for visit our review section. See all the reviews and also
              give your review about our services.
            </p>
          </div>
        </div>
      </div>

      {!myReviews[0] ? (
        <div className="flex justify-center items-center py-48">
          <h1 className="text-5xl text-white font-bold ">
            No Review were added
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto justify-items-center my-20">
          {myReviews.map((review) => (
            <MyReview key={review._id} review={review}></MyReview>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
