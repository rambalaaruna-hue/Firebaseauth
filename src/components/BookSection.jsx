import React, { useState } from 'react'
import './BookSection.css'
import ServiceCard from './ServiceCard'
import movie from '../assets/images/movie.png'
import flight from '../assets/images/flight.png'
import bus from '../assets/images/bus.png'
import train from '../assets/images/train.png'
import car from '../assets/images/car.png'
import intl from '../assets/images/intl.png'
import invest from '../assets/images/invest.png'
import { useParams } from 'react-router-dom'


const BookSection = () => {
  const { type } = useParams()

  const [input, setInput] = useState('')
  const [success, setSuccess] = useState(false)

  const books = [
    { icon: movie, title: "Movie\nTickets", type: "movie" },
    { icon: flight, title: "Flight\nTickets", type: "flight" },
    { icon: bus, title: "Bus\nTickets", type: "bus" },
    { icon: train, title: "Train\nTickets", type: "train" },
    { icon: car, title: "Car &\nBikes", type: "car" },
    { icon: intl, title: "International\nFlights", type: "intl" },
    { icon: invest, title: "Invest\nin Stocks", type: "invest" }
  ]

  
  const getTitle = () => {
    switch(type) {
      case 'movie': return 'Movie Ticket Booking'
      case 'flight': return 'Flight Booking'
      case 'bus': return 'Bus Ticket Booking'
      case 'train': return 'Train Ticket Booking'
      case 'car': return 'Car & Bike Booking'
      case 'intl': return 'International Flight Booking'
      case 'invest': return 'Stock Investment'
      default: return ''
    }
  }

  
  const getPlaceholder = () => {
    switch(type) {
      case 'movie': return 'Enter Movie Name / City'
      case 'flight': return 'Enter Source & Destination'
      case 'bus': return 'Enter Boarding Location'
      case 'train': return 'Enter Train Number / Route'
      case 'car': return 'Enter Pickup Location'
      case 'intl': return 'Enter International Route'
      case 'invest': return 'Enter Stock Name'
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
    <div className="book-section">

      {!type && (
        <>
          <h2>Book & Buy on Paytm</h2>

          <div className="services">
            {books.map((item, index) => (
              <ServiceCard
                key={index}
                icon={item.icon}
                title={item.title}
                type={item.type}
                path="book"   
              />
            ))}
          </div>
        </>
      )}

      
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
            Book Now
          </button>
        </div>
      )}

     
      {type && success && (
        <div className="success-box">
          <h2>✅ Booking Successful!</h2>
          <p>{getTitle()} completed successfully</p>
        </div>
      )}

    </div>
    
  )
}

export default BookSection