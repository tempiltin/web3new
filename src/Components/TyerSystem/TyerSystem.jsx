import React from "react";
import SecHeading from "../SecHeading/SecHeading";
import TierSystemConttent from "./Tier_System_Conttent";
const TyerSystem = () => {
  return (
    <div className="Tier_System_section main-project-area">
      <div className="container">
        <div className="sec-inner align-items-center mb-30">
        <SecHeading subTitle="Allocations" title="Tier System"  />
        <TierSystemConttent />
        </div>
      </div>
    </div>
  );
};

export default TyerSystem;
