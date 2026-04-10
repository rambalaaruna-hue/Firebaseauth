import React, { useState } from 'react'
import './ServiceSection.css'
import ServiceCard from './ServiceCard'

import mobile from '../assets/images/mobile.png'
import rent from '../assets/images/rent.png'
import electricity from '../assets/images/electricity.png'
import dth from '../assets/images/dth.png'
import gas from '../assets/images/gas.png'
import credit from '../assets/images/credit-card.png'
import all from '../assets/images/all.png'
import { useParams } from 'react-router-dom'

const ServiceSection = () => {
  const { type } = useParams()   // 🔥 route detect

  const [input, setInput] = useState('')
  const [success, setSuccess] = useState(false)

  const services = [
    { icon: mobile, title: "Recharge\nPrepaid Mobile", type: "mobile" },
    { icon: rent, title: "Pay\nRent Payment", type: "rent" },
    { icon: electricity, title: "Pay\nElectricity Bill", type: "electricity" },
    { icon: dth, title: "Recharge\nDTH Connection", type: "dth" },
    { icon: gas, title: "Book\nGas Cylinder", type: "gas" },
    { icon: credit, title: "Pay\nCredit Card Bill", type: "credit" },
    { icon: all, title: "All\nPayment Services", type: "all" }
  ]

  // 🔥 Titles
  const getTitle = () => {
    switch(type) {
      case 'mobile': return 'Mobile Recharge'
      case 'rent': return 'Rent Payment'
      case 'electricity': return 'Electricity Bill Payment'
      case 'dth': return 'DTH Recharge'
      case 'gas': return 'Gas Booking'
      case 'credit': return 'Credit Card Payment'
      case 'all': return 'All Services'
      default: return ''
    }
  }

  // 🔥 Placeholder
  const getPlaceholder = () => {
    switch(type) {
      case 'mobile': return 'Enter Mobile Number'
      case 'rent': return 'Enter House Details'
      case 'electricity': return 'Enter Consumer Number'
      case 'dth': return 'Enter DTH Number'
      case 'gas': return 'Enter Gas ID'
      case 'credit': return 'Enter Card Number'
      case 'all': return 'Search Service'
      default: return 'Enter Details'
    }
  }

  const handleSubmit = () => {
    if (!input) {
      alert('Please enter details')
      return
    }
    setSuccess(true)
  }

  return (
    <div className="service-section">

      {/* 🔥 HOME UI (NO TYPE) */}
      {!type && (
        <>
          <h2>Recharge & Pay Bills on Paytm</h2>

          <div className="services">
            {services.map((item, index) => (
              <ServiceCard
                key={index}
                icon={item.icon}
                title={item.title}
                type={item.type}
              />
            ))}
          </div>
        </>
      )}

      {/* 🔥 EVENT UI (AFTER CLICK) */}
      {type && !success && (
        <div className="form-box">
          <h2>{getTitle()}</h2>

          <input
            type="text"
            placeholder={getPlaceholder()}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={handleSubmit}>
            Proceed
          </button>
        </div>
      )}

      {/* 🔥 SUCCESS UI */}
      {type && success && (
        <div className="success-box">
          <h2>✅ Success!</h2>
          <p>{getTitle()} completed successfully</p>
        </div>
      )}

    </div>
    
  )
}

export default ServiceSection