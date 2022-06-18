import React from 'react'
import imgLeft from '../../assets/images/icons/steps2.png'
import imgRight from '../../assets/images/icons/steps.png'
import GetFooterLogo from './GetFooterLogo'
import FooterMenu from './FooterMenu'
const FooterArea = () => {
  return (
    <div className='footer-area'>
        <div className="container">
            <div className='sec-heading text-center'>
                <div className='sub-inner mb-52 mb-mb-30'>
                  <img src={imgLeft} alt="" className='heading-right-image' />
                  <span className='sub-title white-color'>FIND US ON SOCIAL </span>
                  <img src={imgRight} className="heading-left-image" alt="" />
                </div>
            </div>
            <div className='footer-listing text-center mb-100 md-mb-70 xs-mb-50'>
                <ul className='footer-icon-list'>
                    <li>
                        <a href="#!">
                            <i className="icon-twitter"></i>
                        </a>
                        <a href="#!">
                           <i className="icon-telegram"></i>
                        </a>
                        <a href="#!">
                            <i className="icon-medium"></i>
                        </a>
                        <a href="#!">
                           <i className="icon-discord"></i>
                        </a>
                        <a href="#!">
                            <i className="icon-linkedin"></i>
                        </a>
                        <a href="#!">
                           <i className="icon-instagram"></i>
                        </a>
                        <a href="#!">
                           <i className="icon-facebook"></i>
                        </a>
                    </li>
                </ul>
            </div>

           <GetFooterLogo />
           <FooterMenu />
        </div>
    </div>
  )
}

export default FooterArea