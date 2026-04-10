import React from 'react'
import './UPISection.css'
import upiIcon from '../assets/images/upi1.png'
import upiImage from '../assets/images/upi-full.png'

const UPISection = () => {
  return (
    <div className="upi-section">

      <div className="upi-container">

        {/* LEFT */}
        <div className="upi-left">
          <div className="upi-title">
            <img src={upiIcon} alt="" />
            
          </div>

          <h2>
            Pay anyone directly <br />
            from your bank account.
          </h2>

          <p>
            Pay anyone, everywhere. Make contactless & secure payments
            in-stores or online using Paytm Wallet or directly from your Bank Account.
            Plus, send & receive money from anyone.
          </p>

          <button className="download-btn">
            Download Paytm App
          </button>
        </div>

        {/* RIGHT */}
        <div className="upi-right">
          <img src={upiImage} alt="upi" />
        </div>

      </div>
    </div>

  )
}

export default UPISection