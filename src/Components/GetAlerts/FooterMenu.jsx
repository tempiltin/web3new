import React from "react";

const FooterMenu = () => {
  return (
    <>
      <div className="footer-mainmenu text-center mb-20">
        <ul>
          <li>
            <a href="#!">Features</a>
          </li>
          <li>
            <a href="#!">How it works</a>
          </li>
          <li>
            <a href="#!">Token info</a>
          </li>
          <li>
            <a href="#!">About us</a>
          </li>
          <li>
            <a href="#!">Social media</a>
          </li>
          <li>
            <a href="#!">Terms of Service</a>
          </li>
          <li>
            <a href="#!">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="copyright-area text-center mb-0">
        <div className="dsc mb-37 md-mb-25">
        Copyright © 2022. All Rights Reserved by
        <a href="#!" className="gafi">Proframmer UZ</a>
        </div>
      </div>
      <div className="scrollup text-center">
        <a href="#!">
            <i className="icon-arrow_up">

            </i>
        </a>
      </div>
    </>
  );
};

export default FooterMenu;
