import React from "react";
import "../assets/Component.css";
import {FaTwitter,FaFacebook,FaInstagram,FaYoutube,FaLinkedin,} from "react-icons/fa";

const socialMediaIcons = [
  {
    icon: <FaTwitter />,
    href: "https://www.linkedin.com/in/yaman-mahawar-a29040231/",
  },
  {
    icon: <FaFacebook />,
    href: "https://www.linkedin.com/in/yaman-mahawar-a29040231/",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.linkedin.com/in/yaman-mahawar-a29040231/",
  },
  {
    icon: <FaYoutube />,
    href: "https://www.linkedin.com/in/yaman-mahawar-a29040231/",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/yaman-mahawar-a29040231/",
  },
];

const Footer = () => {
  return (

      <footer className=" .width-box2 flex flex-col items-center bg-customPurple text-center text-surface dark:text-white">
        <div className="container pt-9">
          {/* Social media icons container */}
          <div className="mb-6 flex justify-center space-x-2">
            {socialMediaIcons.map((socialIcon, index) => (
              <a
                key={index}
                href={socialIcon.href}
                type="button"
                className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-customLightPurple  focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              >
                <span className="mx-auto h-5 w-5 text-white">
                  {socialIcon.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
        {/*Copyright section*/}
        <div className="w-full bg-black/5 p-4 text-center">
          © 2023 Copyright: Loopdrill
          <p> Designed & Developed by Shivam || Yaman</p>
        </div>
      </footer>
 
  );
};

export default Footer;
