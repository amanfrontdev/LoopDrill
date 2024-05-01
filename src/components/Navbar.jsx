import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [hide, setHide] = useState(false);

  return (
    <div className="z-50 relative m-auto max-w-[1920px] flex flex-row justify-between px-2 sm:px-10 items-center py-4">
      <Link to="/">
        <div className="w-40 h-12">
          <img src="img/navbar/Logo.svg" alt="logo image" />
        </div>
      </Link>
      <div className="flex flex-row justify-center items-center">
        <ul
          className={` md:flex flex-col md:flex-row text-[16px] z-10 transition-all duration-500 ease-in-out  ${hide
            ? "flex top-[76px] left-0 py-10 md:py-0 "
            : "-top-[300px] left-0 hidden"
            } w-full bg-DarkGray top-20 md:top-0 md:h-auto absolute md:relative  gap-4 justify-center items-center `}
        >
          <li className="">
            <Link
              to="/"
              className="text-customLightPurple font-semibold cursor-pointer px-2 py-[6px] rounded-[6px] hover:bg-white transition-all duration-300 ease-in-out "
              onClick={() => setHide(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-customLightPurple cursor-pointer px-2 py-[6px] rounded-[6px] hover:bg-white transition-all duration-300 ease-in-out font-semibold"
              onClick={() => setHide(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/it-services"
              className="text-customLightPurple cursor-pointer px-2 py-[6px] rounded-[6px] hover:bg-white transition-all duration-300 ease-in-out font-semibold"
              onClick={() => setHide(false)}
            >
              IT Services
            </Link>
          </li>
          <li>
            <Link
              to="/it-education"
              className="text-customLightPurple cursor-pointer px-2 py-[6px] rounded-[6px] hover:bg-white transition-all duration-300 ease-in-out font-semibold"
              onClick={() => setHide(false)}
            >
              IT Education
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-customLightPurple cursor-pointer px-2 py-[6px] rounded-lg hover:bg-white transition-all duration-300 ease-in-out font-semibold"
              onClick={() => setHide(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="text-white flex justify-center items-center md:hidden"
        onClick={() => setHide(!hide)}
      >
        {hide ? <RxCross2 size={20} /> : <GiHamburgerMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
