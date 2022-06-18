import React from "react";

const BtnYellow = (props) => {
  return (
    <>
      <a
        href={props.btnLink}
        className="readon white-btn hover-shape VIEW_Projects_Btn"
      >
        <span className="btn-text">{props.btnName}</span>
        <span className="hover-shape1"></span>
        <span className="hover-shape2"></span>
        <span className="hover-shape3"></span>
      </a>
    </>
  );
};

export default BtnYellow;
