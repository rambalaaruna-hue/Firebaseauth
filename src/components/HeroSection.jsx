import React from 'react'
import './HeroSection.css'
import phone from '../assets/images/phone.png'
import logo from '../assets/images/paytm-logo2.png'

const HeroSection = () => {
  return (
  <>
  <div className="hero">

     
      <div className="hero-left">

        <img src={logo} alt="upi" className="hero-logo" />

        <h1>India's Most-loved <br /> Payments App</h1>

        <p>
          Recharge & pay bills, book flights & movie tickets,
          open a savings account, invest in stocks & mutual
          funds, and do a lot more.
        </p>

        <button className="download-btn">
          Download Paytm App
        </button>

      </div>

     
      <div className="hero-right">
        <img src={phone} alt="phone" />
      </div>

    </div>
  </>
  )
}

export default HeroSection