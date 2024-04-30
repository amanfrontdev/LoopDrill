import React from "react";

import Banner from "../components/Banner";

const About = () => {
  const [displayText, setDisplayText] = useState("Default Text");

  const handleClick = (text) => {
    setDisplayText(text);
  };

  const buttons = [
    { text: "Button 1", onClick: () => handleClick("Button 1 Clicked") },
    { text: "Button 2", onClick: () => handleClick("Button 2 Clicked") },
    { text: "Button 1", onClick: () => handleClick("Button 1 Clicked") },
    { text: "Button 2", onClick: () => handleClick("Button 2 Clicked") },
    { text: "Button 1", onClick: () => handleClick("Button 1 Clicked") },
    { text: "Button 2", onClick: () => handleClick("Button 2 Clicked") },
    { text: "Button 1", onClick: () => handleClick("Button 1 Clicked") },
    { text: "Button 2", onClick: () => handleClick("Button 2 Clicked") },
  ];
  return (
    <div>
      <Banner text="ABOUT US" />
      <div className="flex flex-row items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="flex space-x-4"> {/* Added space-x-4 for horizontal spacing */}
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {button.text}
            </button>
          ))}
        </div>
        <p className="text-white">{displayText}</p>
      </div>
    </div>
  );
};
export default About;
