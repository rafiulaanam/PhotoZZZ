import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { img, title, description, _id } = blog;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mt-10">
        <img src={img} alt="Movie" className="w-1/4" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/viewpost/${_id}`}>
              <button className="btn btn-primary">View Post</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
