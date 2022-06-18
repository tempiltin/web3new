import React from 'react'
import imgLeft from '../../assets/images/icons/steps2.png'
import imgRight from '../../assets/images/icons/steps.png'
const SecHeadingCenter = (props) => {
  return (
    <div className='sec-heading text-center mb-55'>
        <div className='sub-inner  mb-15'>
            <img src={imgLeft} className='heading-left-image' alt="imgLeft" />
            <span className='ml-10 mr-10 sub-title'>{props.centerSubTitle}</span>
            <img src={imgRight} className='heading-right-image' alt={imgRight} />
        </div>
        <h2 className="title">{props.titleH2}</h2>
    </div>
  )
}

export default SecHeadingCenter