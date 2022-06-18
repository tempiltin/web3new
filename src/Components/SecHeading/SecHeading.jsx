import React from 'react'
import step from "../../assets/images/icons/steps.png";
const SecHeading = (props) => {
  return (
    <div className="sec-heading">
    <div className="sub-inner mb-15">
      <span className="sub-title">{props.subTitle}</span>
      <img src={step} className="heading-left-image" alt="logo" />
    </div>
    <h2 className="title">{props.title}</h2>
  </div>
  )
}

export default SecHeading