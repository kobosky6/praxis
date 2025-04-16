import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = ({ showContact = true }) => {
  return (
    <>
      {showContact && (
        <div className="flex justify-center mb-8">
          <div className="bg-[#f4f4f4] p-4 md:p-8">
            <p>
              If you have any questions about our practice or our services,{" "}
              <br />
              please give us a call or email us; we'll be happy to help.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Link className="" to="/practice">
                <Button
                  title="Contact"
                  className="rounded-md"
                  icon={<FaPhoneAlt />}
                />
              </Link>
              <a
                className=""
                href="https://www.doctolib.de/einzelpraxis/moenchengladbach/hausarztpraxis-rheindahlen/booking/"
              >
                <Button
                  title="Book an appointment online"
                  className="rounded-md"
                />
              </a>
            </div>
          </div>
        </div>
      )}
      <footer className="flex justify-center bg-[#f29549] text-white p-9 md:p-12">
        <div>
          <span>© All contents are subject to copyright</span> |{" "}
          <Link>Imprint</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
