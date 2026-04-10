import React from 'react'
import notfound from '../assets/images/pagenotfound.png'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/")
    }
  return (
    
    <div style={styles.container}>
      <img src={notfound} alt="Page Not Found" />
    
    <button onClick={handleClick} style={styles.btn}>Back to Home</button>
    </div>
  )
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  image: {
    maxWidth: "300px",
    width: "100%",
    height: "auto"
  },
  btn: {
  marginTop: "20px",
  padding: "12px 25px",
  backgroundColor: "#00baf2",   // Paytm blue
  color: "#fff",
  border: "none",
  borderRadius: "25px",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  transition: "0.3s"
}
}

export default PageNotFound