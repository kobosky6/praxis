import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Button from "./Button";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigations = [
    { path: "/", name: "Home" },
    { path: "/services", name: "Service" },
    { path: "/team", name: "Team" },
    { path: "/practice", name: "Practice" },
    { path: "/contact", name: "Contact" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <nav
      className={`fixed w-full z-50 flex items-center justify-between px-4 md:px-10 py-4 shadow-md`}
    >
      <Link href="/" className="inline-flex gap-2 items-center font-bold">
        <img src={logo} alt="" />
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        {navigations.map((nav) => (
          <Link
            key={nav.path}
            href={nav.path}
            className="hover:text-[#f29549] active:text-[#f29549] hover:border-t-2 py-6 hover:border-t-[#f29549]"
          >
            {nav.name}
          </Link>
        ))}
        <Link href="" className="hidden md:block">
          <Button title="Book an appointment online" className="rounded-md" />
        </Link>
      </div>

      {/* Hamburger Icon - Mobile only */}
      <div className="md:hidden">
        {menuOpen ? (
          <FiX
            size={28}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          />
        ) : (
          <MdMenu
            size={28}
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer"
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white absolute top-16 left-0 w-full shadow-md z-50 flex flex-col items-center space-y-4 py-6 md:hidden">
          {navigations.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:underline"
            >
              {nav.name}
            </Link>
          ))}
          <Button title="Book an appointment online" className="rounded-md" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
