import React from 'react'
import './PostpaidSection.css'

// IMPORT IMAGES (make sure these exist in your folder)
import postpaidIcon from '../assets/images/postpaid-icon1.png'
import postpaidImage from '../assets/images/postpaid-ui1.png'


const PostpaidSection = () => {
  return (
    <div className="postpaid-section">

      <div className="postpaid-card">

        {/* LEFT SIDE */}
        <div className="left">

          <div className="icon-box">
            <img src={postpaidIcon} alt="postpaid" />
            
          </div>

          <h1>
            Want it? No more <br /> waiting for it.
          </h1>

          <p>
            With Paytm Postpaid, your wishlist doesn't have to be on the waitlist.
            Shop for the things you want today and pay for them next month.
          </p>

          <button className="learn-btn">
            Learn More →
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <img src={postpaidImage} alt="postpaid UI" id='main-image'/>
        </div>

      </div>

    </div>
  )
  
  
}

export default PostpaidSection