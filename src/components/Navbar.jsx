import React from 'react'
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/FireBaseConfig";
import { useNavigate } from "react-router-dom";
import './Navbar.css'
import logo from '../assets/images/paytm-logo.png'

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/signin");
  };
  
  return (
    <nav className="navbar fixed-top">

      <div className="nav-left">
        <img src={logo} alt="paytm" className="logo-img" />
      </div>

      <ul className="nav-center">
        <li>Paytm for Consumer</li>
        <li>Paytm for Business</li>
        <li>Company</li>
        <li>Investor Relations</li>
      </ul>

      <div className="nav-right">
        <button className="SignOut-btn" onClick={handleSignOut}>
          Sign Out
          <span className="profile-icon">👤</span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar