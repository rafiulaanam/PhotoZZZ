import React from "react";
import img from "../../Assets/img/1.jpg";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const services = useLoaderData();

  return (
    <div className="my-10">
      <div className="hero  h-80" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">
              All Our Services
            </h1>
            <p className="mb-5 text-white">
              Thanks for visit our service section. See all the details which
              service is related to you.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 container mx-auto justify-items-center my-20">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
