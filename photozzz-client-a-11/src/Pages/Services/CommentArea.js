import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const CommentArea = ({ id }) => {
  const { user } = useContext(AuthContext);
  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const subject = form.subject.value;
    const message = form.message.value;
    const rating = form.rating.value;

    const comment = {
      userName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      serviceId: id,
      subject,
      message,
      rating,
    };
    console.log(comment);

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Comment Success");
        }
        console.log(data);
      });
  };

  return (
    <div className="text-center card card-body bg-base-300 h-full">
      <h1 className="text-3xl text-bold">Customer Review Section</h1>

      <form onSubmit={handleComment}>
        <div className="grid gap-3 grid-cols-1 justify-center items-center">
          <h3 className="mt-5">Wirte your comment</h3>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="input input-bordered w-full "
            required
          />
          <textarea
            className="textarea textarea-bordered w-full"
            name="message"
            placeholder="Write your comments"
            required
          ></textarea>
          <select name="rating" className="select select-bordered w-full ">
            <option disabled>Rating</option>
            <option value={"5.0"}>5.0</option>
            <option value={"4.5"}>4.5</option>
            <option value={"4.0"}>4.0</option>
            <option value={"3.5"}>3.5</option>
            <option value={"3.0"}>3.0</option>
          </select>
          <input
            className="btn btn-primary mt-10 mb-10"
            type="submit"
            value="comment"
          />
        </div>
      </form>
    </div>
  );
};

export default CommentArea;
