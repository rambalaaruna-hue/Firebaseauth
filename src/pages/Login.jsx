import React from 'react'

const Login = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>
      <input type="email" placeholder="Enter Email" /><br /><br />
      <input type="password" placeholder="Enter Password" /><br /><br />
      <button>Login</button>
    </div>
  )
}

export default Login