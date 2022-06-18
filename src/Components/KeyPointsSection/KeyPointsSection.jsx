import React from "react";
import PositRelative from "./PositRelative";
import KeyPointsForCard from "./KeyPointsForCard";
import SecHeading from "../SecHeading/SecHeading";

const KeyPointsSection = () => {
  return (
    <div className="indexZed Key_Points_section main-project-area">
      <PositRelative />

      <div className="container">
        <div className="sec-inner align-items-center mb-30">
        <SecHeading subTitle="FEATURE" title="KEY POINTS"  />
          <div className="Key_Points_Conttent">
            <div className="row">
             <KeyPointsForCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPointsSection;
