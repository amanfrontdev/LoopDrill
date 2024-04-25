import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-customPurple mx-auto max-w-[1560px] border-black flex flex-row justify-between px-2 sm:px-10 py-4 ">
      <div>
        <div>Logo Image</div>
      </div>
      <div>
        <ul className="flex flex-row gap-10">
          <li>
            <Link to="/" className="text-white cursor-pointer px-2 py-[6px] rounded-[6px] hover:bg-customLightPurple" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white cursor-pointer px-2 py-[6px] rounded-[6px] hover:bg-customLightPurple" >
              About
            </Link>
          </li>
          <li>
            <Link to="/it-services" className="text-white cursor-pointer px-2 py-[6px] rounded-[6px] hover:bg-customLightPurple" >
              Services
            </Link>
          </li>
          <li>
            <Link to="/it-education" className="text-white cursor-pointer px-2 py-[6px] rounded-[6px] hover:bg-customLightPurple" >
              Education
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white cursor-pointer px-2 py-[6px] rounded-lg hover:bg-customLightPurple" >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
