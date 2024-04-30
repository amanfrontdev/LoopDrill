import React from 'react'
import { FaLinkedin } from "react-icons/fa"; // Import FaLinkedin icon
import yaman from "../../assets/images/yoginder.jpg";
import mam from "../../assets/images/mam.jpg";
const Owner = () => {
    const linkedInUrls = [
        "https://www.linkedin.com/in/yogendra-bire-580a30160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "https://www.linkedin.com/in/smriti-kumari-a7aba02a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      ];
    
      const data = [
        {
          imageUrl: yaman,
          keyValuePairs: {
            Name: "John Doe",
            Occupation: "Software Engineer",
            LinkedIn: linkedInUrls[0], // LinkedIn URL for John Doe
          },
        },
        {
          imageUrl: mam,
          keyValuePairs: {
            Name: "Jane Smith",
            Occupation: "Graphic Designer",
            LinkedIn: linkedInUrls[1], // LinkedIn URL for Jane Smith
          },
        },
      ];
    
  return (
    <div>
            <div className="bg-DarkGray">
        {" "}
        <div className="container bg-DarkGray mx-auto px-4 py-20 flex flex-wrap justify-evenly gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex bg-DarkBlack flex-col items-center rounded-lg overflow-hidden relative"
              style={{
                boxShadow: "0px 0px 0px transparent",
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0px 0px 15px rgba(255,255,255, 0.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0px 0px 0px transparent")
              }
            >
              <div className="h-96 w-96 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt="avatar"
                  className="object-cover w-full h-full p-2 transition-all duration-300 transform scale-100 hover:scale-110"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                {Object.entries(item.keyValuePairs).map(([key, value]) => (
                  <p key={key} className="mb-2 text-white font-semibold">
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
    </div>
  )
}

export default Owner