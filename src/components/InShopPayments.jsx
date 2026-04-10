import React from 'react'
import './InShopPayments.css'
import instoreImg from '../assets/images/inshop1.png'

const InShopPayments = () => {
  return (
    <div className="inshop-section">
      <div className="inshop-container">
        
        <div className="inshop-left">
          <h1>In-shop payments<br />powered by Paytm.</h1>

          <p>
            Millions of small & big businesses use Paytm to accept 
            payments anywhere any time with a wide range of 
            solutions for all kinds of merchants.
          </p>

          <button>Learn More →</button>
        </div>

        <div className="inshop-right">
          <img src={instoreImg} alt="inshop" />
        </div>

      </div>
    </div>
  )
}

export default InShopPayments