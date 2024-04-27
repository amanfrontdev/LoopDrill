import React from "react";

const Banner = (props) => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 font-[sans-serif] p-20">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <h2 className="text-white text-3xl font-bold mb-4">{props.text}</h2>
        </div>
      </div>
    </>
  );
};

export default Banner;
