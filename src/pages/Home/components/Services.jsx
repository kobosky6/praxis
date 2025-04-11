import React from "react";
import { services } from "../../../constants";
import { Link } from "react-router-dom";
import Button from "../../../components/shared/Button";

const Services = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <p className="font-medium md:text-3xl text-center text-xl text-[#e43c39] mb-4">
        Our services
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className=" w-full bg-[#f6a75a] text-white p-4 text-lg font-semibold">
              {service.title}
            </div>
          </div>
        ))}
      </div>
      <Link className="flex justify-center" to="/services">
        <Button title="All Services" className="rounded-md mt-10" />
      </Link>
    </section>
  );
};

export default Services;
