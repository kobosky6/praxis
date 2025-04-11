import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-[#f29549] text-white p-9 md:p-12">
      <div>
        <span>© All contents are subject to copyright</span> |{" "}
        <Link>Imprint</Link>
      </div>
    </footer>
  );
};

export default Footer;
