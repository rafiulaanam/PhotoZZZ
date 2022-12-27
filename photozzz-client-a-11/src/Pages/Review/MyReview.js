import React from "react";
import toast from "react-hot-toast";

const MyReview = ({ review }) => {
  const { subject, message, _id } = review;

  const handleDelete = () => {
    const agree = window.confirm(
      "Are you sure you want to delete this comment ?"
    );
    if (agree) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Delete Successful");
          }
          console.log(data);
        });
    }
  };

  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{subject}</h2>
        <p>{message}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
          <button onClick={handleDelete} className="btn btn-error btn-outline">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
