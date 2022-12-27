import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "../../Services/ServicesCard";

const Service3 = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  return (
    <div className="mt-24 container mx-auto">
      <h1 className="text-center text-3xl text-white mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 justify-items-center">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service}></ServicesCard>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to={"/services"}>
          <button className="btn btn-warning px-10">see All</button>
        </Link>
      </div>
    </div>
  );
};

export default Service3;
