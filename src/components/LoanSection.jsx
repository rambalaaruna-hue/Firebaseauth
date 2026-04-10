import React from 'react'
import './LoanSection.css'

import loanImg from '../assets/images/loan.png'
import loanIcon from '../assets/images/loan-icon.png'


const LoanSection = () => {
  return (
    <div className="loan-section">

      <div className="loan-container">

        {/* LEFT IMAGE */}
        <div className="loan-left">
          <img src={loanImg} alt="loan" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="loan-right">

          <div className="loan-title">
            <img src={loanIcon} alt="icon" />
            
          </div>

          <h1>
            Get a Personal Loan in <br />
            2 Minutes.
          </h1>

          <p>
            Paytm offers India’s quickest multi-purpose, hassle-free loan.
            It is 100% digital, transparent and paperless.
          </p>

          <button>Learn More →</button>

        </div>

      </div>

    </div>
  )
}

export default LoanSection