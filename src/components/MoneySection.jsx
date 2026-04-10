import React from 'react'
import './MoneySection.css'

// ALL from images folder
import moneyImg from '../assets/images/money.png'
import moneyIcon from '../assets/images/money-icon1.png'


const MoneySection = () => {
  return (
   <div className="money-section">

      <div className="money-container">

        {/* LEFT IMAGE */}
        <div className="money-left">
          <img src={moneyImg} alt="money" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="money-right">

          <div className="money-title">
            <img src={moneyIcon} alt="icon" />
          </div>

          <h1>
            Build Long-term <br />
            Wealth & Achieve <br />
            your Goals.
          </h1>

          <p>
            Investing on Paytm Money is transparent, low-cost and 
            commission-free. Buy stocks & mutual funds that can 
            help you create wealth & realise your dreams.
          </p>

          <button>Learn More →</button>

        </div>

      </div>

    </div>
  )
}

export default MoneySection