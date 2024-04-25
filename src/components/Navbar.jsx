import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <div className="bg-customPurple mx-auto max-w-[1560px] border-black flex flex-row justify-between px-2 sm:px-10 py-4 ">
    <div>
      <div>Logo Image</div>
    </div>
    <div>
      <ul className="flex flex-row gap-10 ">
        <li>
          <Link
            to="/"
            className="text-white cursor-pointer hover:text-gray-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white cursor-pointer hover:text-gray-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="text-white cursor-pointer hover:text-gray-300"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white cursor-pointer hover:text-gray-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Navbar;
