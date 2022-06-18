import React from "react";
import BGShape from '../../assets/images/bg/BGShape.svg'
const Tier_System_Conttent = () => {
  return (
    <div className="Tier_System_Conttent">
      <div
        className="Tier_System_Headings  fadeInUp"
        style={{
          visibility: "visible",
          animationDuration: "0.4s",
          animationDelay: "0.2s",
          animationName: "fadeInUp",
        }}
      >
        <ul>
          <li className="tiersHeadings">Tiers</li>
          <li className="StakingHeadings">Staking</li>
          <li className="allocationHeadings">allocation</li>
          <li className="RequirementsHeadings">Requirements</li>
          <li className="KYCHeadings">KYC</li>
          <li className="m-0 WeightHeadings">Weight</li>
        </ul>
      </div>
      <div
        className="Tier_System_Items fadeInUp"
        style={{
          visibility: "visible",
          animationDuration: "0.5s",
          animationDelay: "0.3s",
          animationName: "fadeInUp",
        }}
      >
        <ul>
          <li className="tiersItem">
            <span>
              <img
                src={""}
                alt="icon"
                className="img-fluid"
              />
            </span>
            <strong>Silver</strong>
          </li>
          <li className="StakingItem">$ 10,000</li>
          <li className="allocationItem">Lottery (20%)</li>
          <li className="RequirementsItem">Whitelist Task</li>
          <li className="KYCItem">No</li>
          <li className="WeightItem">2.5x</li>
        </ul>
        <div className="bgShape">
          <img src={BGShape} alt="img" className="img-fluid" />
        </div>
        <span className="bordarShadowRed1"></span>
        <span className="bordarShadowRed2"></span>
        <span className="bordarShadowGreen1"></span>
        <span className="bordarShadowGreen2"></span>
      </div>
    </div>
  );
};
export default Tier_System_Conttent;