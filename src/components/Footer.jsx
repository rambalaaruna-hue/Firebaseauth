import React, { useState } from 'react'
import "./Footer.css";

// images (you must have these)
import playstore from "../assets/images/playstore.png";
import appstore from "../assets/images/appstore.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";


const Footer = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    "Investor Relations",
    "More about Paytm",
    "Company",
    "Career",
    "Recharge & pay bills",
    "Pay Loan EMI, Insurance Premiums & Education Fee",
    "Book Travel & Entertainment",
    "Investments & Miscellaneous",
    "Insurance (Powered by Paytm Insurance Broking Private Limited)",
    "Loans and Credit Cards",
    "Financial Tools & Calculators"
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="footer">

     
      <div className="footer-top">

        <div className="download">
          <p>Download Paytm App to Pay from anywhere</p>

          <div className="store-buttons">
            <img src={playstore} alt="playstore" />
            <img src={appstore} alt="appstore" />
          </div>
        </div>

        <div className="social">
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
        </div>

      </div>

    
      <hr />

      <div className="footer-links">
        {sections.map((item, index) => (
          <div key={index} className="footer-item">
            
            <div className="footer-header" onClick={() => toggle(index)}>
              <span>+ {item}</span>
            </div>

            {openIndex === index && (
              <div className="footer-content">
                <p>Content for {item}</p>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
    
  )
}

export default Footer