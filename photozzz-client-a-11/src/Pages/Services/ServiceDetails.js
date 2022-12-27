import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CommentArea from "./CommentArea";
import ReviewCard from "./ReviewCard";

const ServiceDetails = () => {
  const service = useLoaderData();

  const { img, title, facility, _id } = service;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/comments?id=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  return (
    <>
      <div className="hero  h-80" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">{title}</h1>
            <p className="mb-5 text-white">
              Thanks for visit our service section. See all the details which
              service is related to you.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
        <div className="card  bg-neutral text-neutral-content">
          <div className="card-body h-full items-center text-center">
            <h2 className="card-title underline">We provide those Service</h2>
            {facility?.map((details, i) => (
              <p key={i}>
                {i + 1}. {details.name}
              </p>
            ))}
          </div>
        </div>

        <div>
          <CommentArea id={_id}></CommentArea>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-center">Comment Section</h1>
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} id={_id}></ReviewCard>
      ))}
    </>
  );
};

export default ServiceDetails;
