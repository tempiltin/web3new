import React from "react";
import SecHeadingCenter from "../SecHeading/SecHeadingCenter";
import Quest from "./Quest";
// import 'react-accessible-accordion/dist/fancy-example.css';
const Questions = () => {
  return (
    <div className="indexZed gamfi-team-section gamfi_FAQ_Sect gamfi_Our_mentor_section pt-115 pb-85 md-pt-75 md-pb-42">
      <div className="container">
        <SecHeadingCenter
          centerSubTitle="QUESTIONS & ANSWERS"
          titleH2="FREQUENTLY ASKED QUESTIONS"
        />
        <Quest />
      </div>
    </div>
  );
};

export default Questions;
