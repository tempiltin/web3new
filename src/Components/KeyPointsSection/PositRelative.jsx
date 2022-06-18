import React from "react";
import stone1 from "../../assets/images/icons/stone1.svg";
import stone2 from "../../assets/images/icons/stone2.svg";
import stone3 from "../../assets/images/icons/stone3.svg";
const PositRelative = () => {
  return (
    <div className="keyPointBg">
      <div className="bgStone">
        <span className="stone1">
          <img src={stone1} alt="" />
        </span>
        <span className="stone2">
          <img src={stone2} alt="" />
        </span>
        <span className="stone3">
          <img src={stone3} alt="" />
        </span>
      </div>
    </div>
  );
};

export default PositRelative;
