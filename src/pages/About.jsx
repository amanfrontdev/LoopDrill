import React from "react";
import { FaLinkedin } from 'react-icons/fa'; // Import FaLinkedin icon
import yaman from "../assets/images/yoginder.jpg";
import mam from "../assets/images/mam.jpg";
import Banner from "../components/Banner";

const About = () => {
  const linkedInUrls = [
    "https://www.linkedin.com/in/yogendra-bire-580a30160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "https://www.linkedin.com/in/smriti-kumari-a7aba02a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  ];

  const data = [
    {
      imageUrl: yaman,
      keyValuePairs: {
        Name: 'John Doe',
        Occupation: 'Software Engineer',
        LinkedIn: linkedInUrls[0], // LinkedIn URL for John Doe
      },
    },
    {
      imageUrl: mam,
      keyValuePairs: {
        Name: 'Jane Smith',
        Occupation: 'Graphic Designer',
        LinkedIn: linkedInUrls[1], // LinkedIn URL for Jane Smith
      },
    },
  ];

  return (
    <div>
      <Banner text="ABOUT US" />
      <div className="container mx-auto px-4 py-20 flex flex-wrap justify-evenly gap-6"
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{boxShadow: " 0 4px 6px rgba(255,255,255, 0.3)",}}
            className="flex  flex-col items-center rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="h-96 w-96 overflow-hidden relative">
              <img
                src={item.imageUrl}
                alt="avatar"
                className="object-cover w-full h-full p-2 transition-all duration-300 transform scale-100 hover:scale-110"
              />
            </div>
            <div className="p-4 flex flex-col items-center  w-full bg-white">
              {Object.entries(item.keyValuePairs).map(([key, value]) => (
                <p key={key} className="mb-2 text-customLightPurple font-semibold">
                  {key === "LinkedIn" ? (
                    <a href={value} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  ) : (
                    value
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
