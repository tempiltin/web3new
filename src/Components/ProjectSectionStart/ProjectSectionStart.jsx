import React from "react";
import SecHeading from "../SecHeading/SecHeading";

import ff from "../../assets/images/project/project-image.png";
import icon from "../../assets/images/project/project-single-image.png";
const ProjectSectionStart = () => {
  const byFunc = () => {
    alert("hello vorld");
  };
  return (
    <div className="indexZed gamfi-project-section ProjectPools_Sect main-project-area pb-0">
      <div className="container">
        <div className=" sec-inner align-items-center d-flex justify-content-between mb-30">
          <SecHeading subTitle="Explore" title="PROJECT POOLS" />

          <div className="gamfi-btn-area ProjectV2_TabBtns">
            <ul>
              <li
                className="ProjectV2_tablinks m-0"
                onClick={byFunc}
                id="OpenProject"
              >
                <button className="readon white-btn black-shape">
                  <span className="btn-text">On going</span>
                  <span className="hover-shape1"></span>
                  <span className="hover-shape2"></span>
                  <span className="hover-shape3"></span>
                </button>
              </li>

              <li className="ProjectV2_tablinks" onClick={byFunc}>
                <button className="readon white-btn black-shape">
                  <span className="btn-text">UPCOMING</span>
                  <span className="hover-shape1"></span>
                  <span className="hover-shape2"></span>
                  <span className="hover-shape3"></span>
                </button>
              </li>

              <li className="ProjectV2_tablinks" onClick={byFunc}>
                <button className="readon white-btn black-shape">
                  <span className="btn-text">ENDED</span>
                  <span className="hover-shape1"></span>
                  <span className="hover-shape2"></span>
                  <span className="hover-shape3"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="ProjectV2_TabContentSect">
          <div
            id="ProectV2_OnGoing"
            className="ProjectV2_tabcontent animate_opacity"
            style={{ display: "block" }}
          >
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="project-item project_itemV2 hover-shape-border  fadeInRight"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.4s",
                    animationDelay: "0.2s",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="project-info d-flex">
                    <a href="#!">
                      <img src={ff} alt="" />
                    </a>
                    <div className="project-auother">
                      <h4 className="mb-10">Galaxy War</h4>
                      <div className="dsc">PRICE (GAC) = 0.59 BUSD</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-header d-flex justify-content-between">
                      <div className="heading-title heading-titleV2">
                        <div className="price-counter">
                          <div className="timer timer_1">
                            <ul>
                              <li className="days">
                                1 <span>D</span>
                              </li>
                              <li className="hours">
                                15 <span>H</span>
                              </li>
                              <li className="minutes">
                                44 <span>M</span>
                              </li>
                              <li className="seconds">
                                {" "}
                                5 <span>S</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="project-icon">
                        <img src={icon} alt="" />
                      </div>
                    </div>
                    <div className="project-media">
                      <ul className="project-listing">
                        <li>
                          Min allocation <span>0.33 BUSD</span>
                        </li>
                        <li>
                          Max allocation <span>900.00 BUSD</span>
                        </li>
                        <li>
                          Targeted raise <span>200,000 BUSD</span>
                        </li>
                        <li>
                          Access type <span>Public</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="social_icons_Sect">
                    <ul className="social_icon_list">
                      <li>
                        <a href="#!">
                          <i className="icon-telegram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="icon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="icon-discord"></i>
                        </a>
                      </li>
                      <li className="medium">
                        <a href="#!">
                          <i className="icon-medium"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="icon-world"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span className="border-shadow shadow-1"></span>
                  <span className="border-shadow shadow-2"></span>
                  <span className="border-shadow shadow-3"></span>
                  <span className="border-shadow shadow-4"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSectionStart;
