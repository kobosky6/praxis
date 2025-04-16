import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/shared/Button";

const GeneralPractice = () => {
  return (
    <div className="bg-[#f4f4f4] px-4 flex flex-col md:flex-row gap-8">
      <div className="overflow-hidden flex-1">
        <img
          src={null}
          alt=""
          className="h- w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="flex-1 space-y-6 p-4 md:p-8 font-light text-lg text-justify">
        <p className="font-medium text-2xl md:text-3xl text-red-600">
          Your general practice in Rheindahlen
        </p>
        <p>Dear patients, dear visitors,</p>
        <p>
          We are pleased that you have stopped by and would like to give you the
          opportunity to learn more about our practice, our team and, above all,
          our services on our website.
        </p>
        <p>
          At our general practice in Rheindahlen, we help you effectively
          prevent illnesses with preventative measures and support your recovery
          from existing illnesses. We offer a comprehensive range of specialist
          medical care, are happy to be your first point of contact for
          complaints, and provide experienced treatment for chronic illnesses.
        </p>
        <p>
          We always address your specific symptoms and carefully consider
          different treatment options with you. It's important to us to explain
          diagnoses and treatment processes in a way that's easy to understand,
          so you can better understand and support your condition and the
          individualized treatment.
        </p>
        <p>
          The relationship of trust between you and us is crucial for treatment
          – ​​that's why we place such importance on personal, trusting, and
          respectful contact. We take care of your health with plenty of time,
          dedication, and modern technology.
        </p>
        <p>
          Your Claudia Kroker and team <br /> – General practitioner Rheindahlen
          –
        </p>
        <Link className="flex justify-center" to="/services">
          <Button title="To the Team" className="rounded-md mt-10" />
        </Link>
      </div>
    </div>
  );
};

export default GeneralPractice;
