import React from "react";
import GetAlerts from "../Components/GetAlerts/GetAlerts";
import Header from "../Components/Header/Header";
import KeyPointsSection from "../Components/KeyPointsSection/KeyPointsSection";
import MarketCapSect from "../Components/MarketCapSect/MarketCapSect";
import MultiChainSupportSect from "../Components/Multi_Chain_Support_Sect/MultiChainSupportSect";
import Partiners from "../Components/Partiners/Partiners";
import ProjectSectionStart from "../Components/ProjectSectionStart/ProjectSectionStart";
import Questions from "../Components/QUESTIONS/Questions";
import RoadMapV2SectionMainProjectArea from "../Components/RoadMapV2_section main-project-area/RoadMapV2SectionMainProjectArea";
import Team from "../Components/Teams/Team";
import TyerSystem from '../Components/TyerSystem/TyerSystem';
const Home = () => {
  return (
    <>
      <Header />
      <MarketCapSect />
      <ProjectSectionStart />
      <KeyPointsSection />
      <TyerSystem />
      <MultiChainSupportSect />
      <RoadMapV2SectionMainProjectArea />
      <Team />
      <Partiners />
      <Questions />
      <GetAlerts />
     
    </>
  );
};
export default Home;