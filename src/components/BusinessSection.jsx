import React from 'react'
import './BusinessSection.css'

import businessImg from '../assets/images/business1.png'

const BusinessSection = () => {
  return (
    <div className="business-section">

      <h2>Business Services by Paytm</h2>

      <div className="business-card">

        <div className="business-container">

         
          <div className="business-left">
            <h3>Accept payments online with ease</h3>

            <p>
              Grow your business with the payment gateway that 
              powers India’s largest brands and even the Paytm App
            </p>

            <button>Learn More →</button>
          </div>

          
          <div className="business-right">
            <img src={businessImg} alt="business" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default BusinessSection