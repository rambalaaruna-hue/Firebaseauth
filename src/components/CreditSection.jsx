import React from 'react'
import './CreditSection.css'

import hdfcCard from '../assets/images/hdfc-card.png'
import sbiCard from '../assets/images/sbi-card.png'

const CreditSection = () => {
  return (
    <div className="credit-section">

      {/* LEFT CARD */}
      <div className="credit-card">
        <h4>Paytm HDFC Bank</h4>
        <h2>Unlimited Cashback Every time.</h2>
        <p>
          Paytm HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers.
        </p>
        <img src={hdfcCard} alt="hdfc" />
      </div>

      <div className="credit-card">
        <h4>Paytm SBI Card</h4>
        <h2>India’s Most Sincere Credit Card</h2>
        <p>
          Paytm SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire
        </p>
        <img src={sbiCard} alt="sbi" />
      </div>

    </div>
  )
}

export default CreditSection