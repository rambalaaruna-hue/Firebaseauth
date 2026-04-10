import React from 'react'
import './BusinessTools.css'

import posImg from '../assets/images/pos.png'
import appImg from '../assets/images/business-app.png'
import adsImg from '../assets/images/ads.png'
import khataImg from '../assets/images/khata.png'

const BusinessTools = () => {
  return (
    <div className="tools-section">
      <h1>Business Tools to help<br />your business grow</h1>

      <div className="tools-grid">

        <div className="tool-card">
          <img src={posImg} alt="pos" />
          <h3>POS Billing Software</h3>
          <p>Say Hello to Smart Retail Business Management</p>
          <span>Learn More</span>
        </div>

        <div className="tool-card">
          <img src={appImg} alt="app" />
          <h3>Paytm for Business App</h3>
          <p>Everything you need to manage your business on your phone</p>
          <span>Learn More</span>
        </div>

        <div className="tool-card">
          <img src={adsImg} alt="ads" />
          <h3>Advertise on Paytm</h3>
          <p>Grow your business by advertising on India's largest mobile business</p>
          <span>Learn More</span>
        </div>

        <div className="tool-card">
          <img src={khataImg} alt="khata" />
          <h3>Business Khata</h3>
          <p>Managing Khata made easy</p>
          <span>Learn More</span>
        </div>

      </div>
    </div>
  )
}

export default BusinessTools