import React from 'react'
import './PaymentSection.css'
import walletIcon from '../assets/images/wallet1.png'
import phone from '../assets/images/phone2.png'


const PaymentSection = () => {
  return (
    <div className="payment-section">

      <h2>Paytm Payment Instruments</h2>

      <div className="payment-container">

        {/* LEFT */}
        <div className="payment-left">
          <div className="wallet-title">
            <img src={walletIcon} alt="wallet" />
          </div>

          <h3>
            The Fastest Way to <br />
            Pay In-store & Online.
          </h3>

          <p>
            Load up your Paytm Wallet for free and make payments
            in a jiffy at over 21 million stores, websites and apps.
          </p>

          <button className="download-btn">
            Download Paytm App
          </button>
        </div>

        {/* RIGHT */}
        <div className="payment-right">
          <img src={phone} alt="phone" />
        </div>

      </div>
    </div>
  )
}

export default PaymentSection