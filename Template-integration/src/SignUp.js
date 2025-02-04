import React from 'react'

function SignUp() {
  return (
    <div>
        <div className="user_register d-block" style={{margin:"100px auto", width:"600px"}}>
        <form method="post">
          <label>Username</label>
          <input name="username" type="text" id="username" />
          <br />
          <label>Email Address</label>
          <input name="email" type="email" id="email" />
          <br />
          <label>Password</label>
          <input name="password" type="password" id="password" />
          <br />
          <div className="checkbox">
            <input id="send_updates" type="checkbox" />
            <label htmlFor="send_updates">Send me occasional email updates</label>
          </div>
          <div className="action_btns">
            <div className="one_half"><a href="#" className="btn back_btn"><i className="fa fa-angle-double-left" /> Back</a></div>
            <div className="one_half last"><button type="submit" className="btn btn_red">Register</button></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
