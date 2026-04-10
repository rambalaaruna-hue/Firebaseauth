import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceCard = (props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    const basePath = props.path ? props.path : "service"
    navigate(`/${basePath}/${props.type}`)
  }
  return (
    <div className="service-card" onClick={handleClick}>
      <img src={props.icon} alt="" />
      <p>{props.title}</p>
    </div>
   
    
  )
}

export default ServiceCard