import React from "react";
import img from "../../Assets/img/1.jpg";
import toast from "react-hot-toast";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.photoUrl.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newService = {
      title,
      img,
      price,
      description,
      rating,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service added Successfully");
        }
        console.log(data);
      });
  };
  return (
    <div>
      <div className="hero  h-80" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">Add Services</h1>
            <p className="mb-5 text-white">
              Thanks for visit our add service section. See all the reviews and
              also give your review about our services.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleAddService}>
        <div className="card card-body grid gap-3 grid-cols-1 justify-center items-center">
          <h3 className="mt-5">Wirte your comment</h3>
          <input
            type="text"
            placeholder="Service Name"
            name="name"
            className="input input-bordered w-full "
            required
          />
          <input
            type="text"
            placeholder="Service PhotoURL"
            name="photoUrl"
            className="input input-bordered w-full "
            required
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            className="input input-bordered w-full "
            required
          />
          <textarea
            className="textarea textarea-bordered w-full"
            name="description"
            placeholder="Write your description"
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
            value="Add Service"
          />
        </div>
      </form>
    </div>
  );
};

export default AddService;
