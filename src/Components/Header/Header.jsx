import React from "react";
import BtnTransparent from "../ButtonComponent/BtnTransparent/BtnTransparent";
import BtnYellow from "../ButtonComponent/BtnYellow/BtnYellow";
import H2 from "../hComponent/H2";
import brand from '../../assets/images/homeV2/rocket-front-color.png'
import buyTokenlogo1 from '../../assets/images/homeV2/buyTokenlogo1.png'
import buyTokenlogo2 from '../../assets/images/homeV2/buyTokenlogo2.png'
import buyTokenlogo3 from '../../assets/images/homeV2/buyTokenlogo3.png'
import buyTokenlogo4 from '../../assets/images/homeV2/buyTokenlogo4.png'
const Header = () => {
  return (
   <>
    <header className="indexZed headerTop">
      <div className="gamfiV2_HeroSect">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="gamfi_V2_hero_Left">
                <H2
                  title1="Multichain DeFi Web "
                  title2="3.0"
                  title3="Ecosystem"
                />
                <p
                  className=" fadeInUp"

                  style={{
                    visibility: "visible",
                    animationDuration: "0.8s",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  The next generation gaming ecosystem for IGOs and NFT
                </p>

                <div
                  className="gamfi_V2_hero_Btns  fadeInUp"

                  style={{
                    visibility: "visible",
                    animationDuration: "0.9s",
                    animationDelay: "0.6s",
                    animationName: "fadeInUp",
                  }}
                >
                  <BtnYellow btnName="VIEW Projects" btnLink="#!"/>
                  <BtnTransparent btnName="Apply Project" btnLink="#!"/>
                </div>
                <div className="buyTokenlogos">
                  <h6>BUY TOKEN ON</h6>
                  <ul>
                    <li>
                      <a href="#!"> 
                      <img src={buyTokenlogo1} alt="logo" className="img-fluid" />
                      </a>
                    </li>
                    
                    <li>
                      <a href="#!"> 
                      <img src={buyTokenlogo2} alt="logo" className="img-fluid" />
                      </a>
                    </li>
                    <li>
                      <a href="#!"> 
                      <img src={buyTokenlogo3} alt="logo" className="img-fluid" />
                      </a>
                    </li>
                    <li>
                      <a href="#!"> 
                      <img src={buyTokenlogo4} alt="logo" className="img-fluid" />
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="gamfi_V2_hero_right">
                <div className="gamfi_V2_heroRocket">
                  <img src={brand} alt="Logo" />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </header>

   </>
  );
};

export default Header;
