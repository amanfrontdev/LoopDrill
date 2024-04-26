import React from "react";

const Paragraph = (props) => {
  console.log(props);
  return (
    <div>
      <p className={props.className}>{props.text}</p>
    </div>
  );
};

export default Paragraph;
