import React from "react";

const BtnTransparent = (props) => {
  return (
    <>
      <a className="readon black-shape Apply_Project_Btn" href={props.btnLink}>
        <span className="btn-text">{props.btnName}</span>
        <span className="hover-shape1"></span>
        <span className="hover-shape2"></span>
        <span className="hover-shape3"></span>
      </a>
    </>
  );
};

export default BtnTransparent;
