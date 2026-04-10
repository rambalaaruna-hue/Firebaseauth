import React from 'react'
import "./MoneyTravelSection.css";

// LEFT SIDE LOGOS
import paytmMoney from "../assets/images/paytm-money.png";
import paytmTravel from "../assets/images/paytm-travel.png";

// RIGHT SIDE CARDS (already designed images)
import stocks from "../assets/images/stocks.png";
import ipo from "../assets/images/ipo.png";
import etf from "../assets/images/etf.png";
import gold from "../assets/images/gold.png";
import invest from "../assets/images/invest1.png";

import cashback from "../assets/images/cashback.png";
import refund from "../assets/images/refund.png";
import travelSafe from "../assets/images/travel-safe.png";


const MoneyTravelSection = () => {
  return (
    <div className="money-travel">

      {/* ===== PAYTM MONEY ===== */}
      <div className="row-section">

        <div className="left">
          <img src={paytmMoney} alt="Paytm Money" className="logo" />
          <p>
            Get started on wealth creation journey with Zero brokerage fee & no hidden charges.
          </p>
          <span className="learn">Learn More</span>
        </div>

        <div className="right">
          <img src={stocks} alt="" />
          <img src={ipo} alt="" />
          <img src={etf} alt="" />
          <img src={gold} alt="" />
          <img src={invest} alt="" />
        </div>

      </div>

      {/* ===== PAYTM TRAVEL ===== */}
      <div className="row-section">

        <div className="left">
          <img src={paytmTravel} alt="Paytm Travel" className="logo" />
          <p>
            Best travel solutions with quick ticket bookings, great offers and easy refunds.
          </p>
          <span className="learn">Learn More</span>
        </div>

        <div className="right">
          <img src={cashback} alt="" />
          <img src={refund} alt="" />
          <img src={travelSafe} alt="" />
        </div>

      </div>

    </div>
    
  )
}

export default MoneyTravelSection