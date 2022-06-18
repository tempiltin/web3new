import React from 'react'
import meta from '../../assets/images/icons/meta-mask.png';
import coinbase from '../../assets/images/icons/coinbase.png'
import trust from '../../assets/images/icons/trust.png'
import wallet from '../../assets/images/icons/wallet.png'
import logIMG from '../../assets/images/homeV2/bottomShape-left.png';
import logIMG11 from '../../assets/images/homeV2/bottomShape-right.png';
import roket from '../../assets/images/homeV2/rocket.png'
const ApleForProject = () => {
  return (
    <>
        <div className='indexZed modal fade ' id='exampleModal' tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true" >
            <div className='modal-dialog modal-dialog-centered'>
            <div className="modal-content">
                    <div className="modal-header">
                         <h4 claclassNamess="modals-title  mb-0" id="exampleModalLabel">Connect Wallet</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                    </div>
                    <div className="modal-body">
                        <p className="mb-20">Please select a wallet to connect to this marketplace</p>
                        <div className="connect-section">
                            <ul className="heading-list">
                                <li><a href="!#"><span><img src={meta} alt="" /></span>MetaMask</a></li>
                                <li><a href="!#"><span><img src={coinbase} alt="" /></span>Coinbase</a></li>
                                <li><a href="!#"><span><img src={trust} alt="" /></span>Trust Wallet</a></li>
                                <li><a href="!#"><span><img src={wallet} alt="" /></span>WalletConnect</a></li>
                            </ul>
                        </div>
                        <p>By connecting your wallet, you agree to our <a href="!#">
                            <span className="modal-title">Terms of Service </span></a>and our <a href="!#">
                            <span className="modal-title"> Privacy Policy</span></a>.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Gamfi_footerBtnSect indexZed">
            <div className="Gamfi_footerBtnContent">
                <span className="frameLeft"><img src={logIMG} alt="img" class="img-fluid"/></span>
                <span className="frameright"><img src={logIMG11} alt="img" class="img-fluid"/></span>
                <div className="rocket">
                    <img src={roket} alt="img" class="img-fluid"/>
                </div>
                <a href="#!">APPLY FOR PROJECT</a>
            </div>
        </div>
    </>
  )
}

export default ApleForProject