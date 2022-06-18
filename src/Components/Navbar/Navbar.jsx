import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logo-dark.png";
import {GrClose} from 'react-icons/gr'
const Navbar = () => {
  const [state, setState] = useState(false);

  const Navclick = (e) => {
    e.preventDefault();
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const NavButton = (e) => {
    e.preventDefault();
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };
  return (
  
      <div className="gamfi_header_V2">
        <header id="gamfi-header" className="headerOne gamfi-header-section">
          <div className="menu-area menu-sticky">
            <div className="container">
              <div className="heaader-inner-area d-flex justify-content-between align-items-center">
                <div className="gamfi-logo-area d-flex justify-content-between align-items-center">
                  <div className="logo">
                    <a href="#!">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                  <div className="header-menu d-none d-md-none d-lg-flex">
                    <ul className="nav-menu">
                      <li>
                        <a href="#!">Home</a>
                      </li>
                      <li>
                        <a href="#!">Projects</a>
                      </li>
                      <li>
                        <a href="#!">Staking</a>
                      </li>
                      <li>
                        <a href="#!">About</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="gamfi-btn-area">
                  <ul>
                    <li className="d-lg-none" onClick={Navclick}>
                      <a
                        id="nav-expander"
                        className="nav-expander bar"
                        href="#!"
                      >
                        <div className="bar">
                          <span className="dot1"></span>
                          <span className="dot2"></span>
                          <span className="dot3"></span>
                        </div>
                      </a>
                    </li>
                    <li className="buy-token d-none d-md-none d-lg-flex">
                      <a href="#!" className="readon black-shape">
                        <span className="btn-text">btn-text</span>
                        <span className="hover-shape1"></span>
                        <span className="hover-shape2"></span>
                        <span className="hover-shape3"></span>
                      </a>
                    </li>
                    <li className="d-none d-sm-flex">
                      <button
                        type="button"
                        className="readon white-btn hover-shape"
                        data-bs-togle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <span className="btn-text">Connect</span>
                        <span className="hover-shape1"></span>
                        <span className="hover-shape2"></span>
                        <span className="hover-shape3"></span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav  className={state ? "mobileNavigationRight RightFalse" : "mobileNavigationRight RightTrue  d-lg-none"}>
              <div className="row justify-content-end">
                  <div className="col-auto">
                    <GrClose  className="navbarClose" onClick={NavButton}/>
                  </div>
              </div>
              <div className="sidebar-logo mb-30 hash-has-sub">
                <a href="#!" className="hash"> 
                <img src={logoDark} alt="logo" />
                </a>
              </div>
              <ul className="nav-menu">
                <li className="current-menu-item has-sub hash-has-sub">
                  <a href="#!" className="hash navMenuLi">Home</a>
                </li>
                <li className="current-menu-item has-sub hash-has-sub">
                  <a href="#!" className="hash navMenuLi">Projects</a>
                </li>
                <li className="current-menu-item has-sub hash-has-sub">
                  <a href="#!" className="hash navMenuLi">About</a>
                </li>
                <li className="current-menu-item has-sub hash-has-sub">
                  <a href="#!" className="hash navMenuLi">lorem</a>
                </li>
              </ul>
          </nav>
        </header>
      </div>
   
  );
};

export default Navbar;
