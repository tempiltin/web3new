import React from "react";
// import '../../assets/css/style.css'
// import '../../index.scss'
import CountUp from 'react-countup';
const MarketCapSect = () => {
  return (
    <>
      <div className="mainClassCaunt">
        <div className="container">
         <div className="mainCenter">
            <div className="mainCount">
                <h4 className="mainH2">Lorem, ipsum.</h4>
                <h2 className="counter-number">
                    <span className="countplus">
                        <CountUp end={7586} duration={5}/>
                    </span>
                </h2>
            </div>
            
            <div className="mainCount">
                <h4 className="mainH2">Lorem, ipsum.</h4>
                <h2 className="counter-number">
                    <span className="countplus">
                    <CountUp end={75286} duration={2}/>
                    </span>
                </h2>
            </div>
            <div className="mainCount">
                <h4 className="mainH2">Lorem, ipsum.</h4>
                <h2 className="counter-number">
                    <span className="countplus">
                    <CountUp end={55555} duration={3}/>
                    </span>
                </h2>
            </div>
            <div className="mainCount">
                <h4 className="mainH2">Lorem, ipsum.</h4>
                <h2 className="counter-number">
                    <span className="countplus">
                    <CountUp end={9086} duration={3}/>
                    </span>
                </h2>
            </div>

         </div>
        </div>
        <span className="redBordergradient"></span>
        <span className="greenBordergradient"></span>
      </div>
    </>
  );
};

export default MarketCapSect;
