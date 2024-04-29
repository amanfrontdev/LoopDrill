import React from "react";

const Paragraph = (props) => {
  console.log(props);
  return (
    <div>
      <p className="bg-black font-semibold text-customLightPurple text-3xl tracking-wider px-4 sm:px-20 py-0 sm:py-14">{props.text}</p>
    </div>
  );
};

export default Paragraph;
