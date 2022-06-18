import React from "react";

import FooterArea from "./FooterArea";

const GetAlerts = () => {
  return (
  <>
    <div className="gamfi-footer-section indexZed">
      <div className="container">
        <div className="footer-cta-area text-center active-shape hover-shape-inner">
          <h2 className="title mb-15 footer_titleV2">
            GET ALERTS 💌 FOR NEW IGOS & IDOS
          </h2>
          <div className="dsc mb-40 md-mb-30">
            Sign up for newsletter to get more IGO/IDO News and Updates
          </div>
          <div className="gamfisubscriveSect row">
            <div className="col-md-8">
              <input
                type="email"
                placeholder="Email Address"
                className=" fadeInUp"
              />
            </div>
            <div className="col-md-4 mt-sm-4 mt-md-1">
              <a href="#!" className="banner-btn  fadeInUp black-shape">
                SUBSCRIBE
                <span className="btn-text"></span>
                <span className="hover-shape1"></span>
                <span className="hover-shape2"></span>
                <span className="hover-shape3"></span>
                <span className="hover-shape4"></span>
              </a>
            </div>
          </div>
          <span className="border-shadow shadow-1"></span>
          <span className="border-shadow shadow-2"></span>
          <span className="border-shadow shadow-3"></span>
          <span className="border-shadow shadow-4"></span>
          <span className="hover-shape-bg hover_shape1"></span>
          <span className="hover-shape-bg hover_shape2"></span>
          <span className="hover-shape-bg hover_shape3"></span>
        </div>
      </div>
      <FooterArea />
    </div>
  
  </>
  );
};

export default GetAlerts;
