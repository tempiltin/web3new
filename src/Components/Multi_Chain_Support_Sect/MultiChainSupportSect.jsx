import React from "react";
import Support from "../../assets/images/homeV2/Multi_Chain_Support.png";
import SecHeading from "../SecHeading/SecHeading";
import svg from "../../assets/images/icons/icon-Check.svg";
const MultiChainSupportSect = () => {

  return (
    <div className="indexZed Multi_Chain_Support_Sect">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="Multi_Chain_Support_Left_Sect  fadeInLeft"
              style={{
                visibility: "visible",
                animationDuration: "0.4s",
                animationDelay: "0.2s",
                animationName: "fadeInLeft",
              }}
            >
              <div className="Multi_Chain_Support_img">
                <img src={Support} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="Multi_Chain_Support_right_Sect  fadeInRight"
              style={{
                visibility: "visible",
                animationDuration: " 0.4s",
                animationDelay: "0.2s",
                animationName: "fadeInRight",
              }}
            >
              <div className="sec-inner align-items-center mb-30">
                <SecHeading subTitle="INTEGRATION" title="MULTI-CHAIN SUPPORT"/>
                <div className="Multi_Chain_Support_right_Content">
                  <p>
                    It must explain to you how all this mistaken idea of new gem
                    denouncing pleasure and praising pain that they cannot
                    foresee The gain and trouble that are bound to ensue.
                  </p>
                  <div className="Multi_Chain_Support_right_list">
                    <ul>
                      <li>
                        <span>
                          <img src={svg} alt="img" className="img-fluid" />
                        </span>
                        Binance Smart Chain
                      </li>
                      <li>
                        <span>
                          <img src={svg} alt="img" className="img-fluid" />
                        </span>
                        Ethereum
                      </li>
                      <li>
                        <span>
                          <img src={svg} alt="img" className="img-fluid" />
                        </span>
                        Polygon (Matic)
                      </li>
                    </ul>
                    <ul className="m-0">
                      <li>
                        <span>
                          <img src={svg} alt="img" className="img-fluid" />
                        </span>
                        Avalanche
                      </li>
                      <li>
                        <span>
                          <img src={svg} alt="img" className="img-fluid" />
                        </span>
                        Fuse
                      </li>
                      <li>
                        <span>
                          <img src={svg} alt="img" className="img-fluid" />
                        </span>
                        OKEX Chain
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiChainSupportSect;
