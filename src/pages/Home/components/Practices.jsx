import React from "react";
import { practices } from "../../../constants";
import { Link } from "react-router-dom";
import Button from "../../../components/shared/Button";

const Practices = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <p className="font-medium md:text-3xl text-center text-xl text-[#e43c39] mb-4">
        Our practice
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {practices.map((practice, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={practice.imageSrc}
              alt={practice.title}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <div className=" w-full p-4 text-lg font-semibold">
              {practice.title}
            </div>
          </div>
        ))}
      </div>
      <Link className="flex justify-center" to="/practice">
        <Button title="More about the practice" className="rounded-md mt-10" />
      </Link>
    </section>
  );
};

export default Practices;
