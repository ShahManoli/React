import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <>
            <div className="user_login d-block" style={{margin:"100px auto", width:"600px"}}>
        <form method="post">
          <label>Email / Username</label>
          <input name="username" type="text" id="username" />
          <br />
          <label>Password</label>
          <input name="password" type="password" id="password" />
          <br />
          <div className="checkbox">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Remember me on this computer</label>
          </div>
          <div className="action_btns">
            <div className="one_half"><a href="#" className="btn back_btn"><i className="fa fa-angle-double-left" /> Back</a></div>
            <div className="one_half last"><Link to = "/signup" className="btn btn_red">Login</Link></div>
          </div>
        </form>
        <a href="#" className="forgot_password">Forgot password?</a>
      </div>
    </>
  )
}

export default SignIn
