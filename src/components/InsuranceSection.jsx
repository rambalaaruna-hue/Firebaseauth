import React from 'react'
import './InsuranceSection.css'

import insuranceImg from '../assets/images/insurance.png'
import insuranceIcon from '../assets/images/insurance-icon.png'


const InsuranceSection = () => {
  return (
    <div className="insurance-section">

      <div className="insurance-container">

        {/* LEFT CONTENT */}
        <div className="insurance-left">

          <div className="insurance-title">
            <img src={insuranceIcon} alt="icon" />
          </div>

          <h1>Insurance made easy.</h1>

          <p>
            Buying insurance does not have to be tedious, time-
            consuming & confusing. Paytm Insurance removes the 
            worry of getting insured by making it simple, 
            convenient & easy-to-understand.
          </p>

          <button>Learn More →</button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="insurance-right">
          <img src={insuranceImg} alt="insurance" />
        </div>

      </div>

    </div>
  )
}

export default InsuranceSection