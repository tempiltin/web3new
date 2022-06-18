import React from "react";
import fram from "../../assets/images/bg/RoadMapV2Fram.png";
import fram2 from "../../assets/images/bg/RoadMapV2Frame2.png";
import SecHeading from "../SecHeading/SecHeading";
import img from "../../assets/images/bg/roadMap_Line.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import SwiperRoad from "./SwiperRoad";
import RoadMapSlide from "./RoadMapSlide";


const RoadMapV2SectionMainProjectArea = () => {

  return (
    <div className="indexZed RoadMapV2_section main-project-area">
      <div className="container">
        <Tabs>
          <TabList className="sec-inner align-items-center d-flex justify-content-between mb-30">
          <SecHeading subTitle="OUR GOALS" title="ROADMAPS" />
          <div className="gamfi-btn-area RoadmapTabBtns">
            <ul>
              <Tab  className="tablinks m-0 " >
             
                <button className="readon white-btn black-shape">
                  <span className="btn-text">2021</span>
                  <span className="hover-shape1"></span>
                  <span className="hover-shape2"></span>
                  <span className="hover-shape3"></span>
                </button>
             
              </Tab>

            <Tab className="tablinks"  >
           
                <button className="readon white-btn black-shape">
                  <span className="btn-text">2022</span>
                  <span className="hover-shape1"></span>
                  <span className="hover-shape2"></span>
                  <span className="hover-shape3"></span>
                </button>
             
            </Tab>

             <Tab className="tablinks" >
           
                <button className="readon white-btn black-shape">
                  <span className="btn-text">2023</span>
                  <span className="hover-shape1"></span>
                  <span className="hover-shape2"></span>
                  <span className="hover-shape3"></span>
                </button>
            
             </Tab>
            </ul>
          </div>
          </TabList>
          <div className="RoadMapV2_TabContentSect">
          <div className="RoadMapShape">
            <img src={img} alt="as" className="img-fluid" />
          </div>
        </div>
          <TabPanel>
              <RoadMapSlide />
          </TabPanel>
          <TabPanel>
              <SwiperRoad />
          </TabPanel>
              <TabPanel>
          <RoadMapSlide />
              </TabPanel>
        </Tabs>
      </div>
      <span className="Frame1">
        <img src={fram} alt="" className="img-fluid" />
      </span>
      <span className="Frame2">
        <img src={fram2} alt="" className="img-fluid" />
      </span>
    </div>
  );
};

export default RoadMapV2SectionMainProjectArea;
