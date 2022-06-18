import React from "react";
import RMcheckicon from "./RMcheckicon";

const RoadMapSlide = () => {
  return (
    <div
      id="RoadmapV2_2021"
      className="tabcontent animate_opacity"
      style={{ display: "block" , width: "100%" }}
    >
      <div className="RoadmapV2TabContent RoadmapV2TabContent_2021">
        <div className="RoadMapSilkSliderSection">
          <div className="row m-0">

            <div className="col-md-4">
              <div className="RoadMapContents">
                <h3>Q1 2021</h3>
                <div className="RoadmapListSect">
                  <div className="CheckIconBg">
                    <RMcheckicon />
                  </div>
                  <ul>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      Seed Sale
                    </li>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      IDO &amp; Token DEX Listing
                    </li>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      Contract Audit
                    </li>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      Staking
                    </li>
                    <li className="m-0">
                      <span>
                        <RMcheckicon />
                      </span>
                      Integration of POLYGON
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="RoadMapContents">
                <h3>Q2 2021</h3>
                <div className="RoadmapListSect">
                  <div className="CheckIconBg">
                    <RMcheckicon />
                  </div>
                  <ul>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      Launch on GamFi
                    </li>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      Auction system integration.
                    </li>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      Mobile app for iOS and Android.
                    </li>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      Development of NFT Marketplace
                    </li>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      Game launch
                    </li>
                    <li className="m-0">
                      <span>
                        <RMcheckicon />
                      </span>
                      Website with MVP Release
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="RoadMapContents">
                <h3>Q3 2021</h3>
                <div className="RoadmapListSect">
                  <div className="CheckIconBg">
                  <RMcheckicon />
                  </div>
                  <ul>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      Launchpad Release
                    </li>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      Access for indie game developers
                    </li>
                    <li>
                      <span>
                        <RMcheckicon />
                      </span>
                      New Staking Tiers
                    </li>
                    <li className="m-0">
                      <span>
                        <RMcheckicon />
                      </span>
                      Public token sell
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapSlide;
