import React from "react";

const H2 = (props) => {
  return (
    <>
      <h2
        className="wow fadeInUp"
        data-wow-delay="0.4s"
        data-wow-duration="0.7s"
        style={{visibility: "visible", animationDuration: "0.7s" , animationDelay: "0.4s" , animationName: "fadeInUp"}}
      >
       {props.title1} <span>{props.title2}</span> {props.title3}
      </h2>
    </>
  );
};

export default H2;
