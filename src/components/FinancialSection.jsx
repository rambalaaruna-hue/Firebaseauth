import React from 'react'
import './FinancialSection.css'

import bankLogo from '../assets/images/paytm-bank.png'
import phone from '../assets/images/bank-phone.png'

const FinancialSection = () => {
  return (
    <>
    <h1 className="top-heading">Financial Services by Paytm</h1>
    <div className="financial">



      <div className="financial-left">
        <img src={bankLogo} alt="" className="bank-logo" />

        <h1>India's most sincere bank.</h1>

        <p>
          Paytm Payments Bank offers secure, transparent and risk-free banking
          at your fingertips. With instant account opening, virtual debit card
          and zero balance requirements.
        </p>

        <button className="learn-btn">Learn More</button>
      </div>

  
      <div className="financial-right">
        <img src={phone} alt="" />
      </div>

    </div>
    </>

  )
}

export default FinancialSection