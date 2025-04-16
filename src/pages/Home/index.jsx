import React from "react";
import { CgDanger } from "react-icons/cg";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";
import Services from "./components/Services";
import GeneralPractice from "./components/GeneralPractice";
import Practices from "./components/Practices";

const Home = () => {
  return (
    <div className="space-y-14 pb-20 pt-28 md:pb-28 md:pt-32 px-6 md:max-w-[75rem] mx-auto">
      <div>Image div</div>
      <div className="text-center">
        <h3 className="font-medium md:text-3xl text-xl text-[#e43c39] mb-4">
          Competence and experience for your health Family doctor Rheindahlen
        </h3>
        <p className="font-light md:text-3xl text-xl">
          Your own health is a very personal matter. We at your Rheindahlen
          family doctor understand this, and we repay the trust you place in us
          with maximum commitment. Because the well-being of our patients is our
          driving force.
        </p>
      </div>
      <div className="border-[0.5px] border-[#f29549] md:mx-8 p-8 flex gap-4">
        <CgDanger className="text-[#f29549]" />
        <div className="space-y-10">
          <p className="text-red-600 font-bold text-xl">
            Digital health applications
          </p>
          <p>Dear patients,</p>
          <p className="">
            Our practice can prescribe all digital health applications (DiGa)
            for you . You can find an overview here:
            <a href="https://diga.bfarm.de/de/diga-nutzer" target="_blank">
              https://diga.bfarm.de/de/diga-nutzer
            </a>
          </p>
          <Link to="/contact">
            <Button title="Contact Form" className="mt-10 rounded-md" />
          </Link>
        </div>
      </div>
      <Services />
      <GeneralPractice />
      <div className="bg-[#f5a14c] p-4 md:p-44">
        <p className="font-medium text-2xl md:text-3xl text-white text-justify">
          Primary care, prevention, alternative medicine and more – as your
          family doctor in Rheindahlen, we are your trusted partner for all your
          health needs and do our best to provide optimal treatment.
        </p>
      </div>
      <Practices />
    </div>
  );
};

export default Home;
