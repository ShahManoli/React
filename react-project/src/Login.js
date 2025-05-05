import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ setname}) {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [login,setLogin] = useState([])

   useEffect(() => {
      fetch('http://localhost:5000/users')
        .then((res) => { return res.json() })
        .then((data) => {
          console.log(data);
          setLogin(data)
      })
  }, [])

  const navigate = useNavigate()

  const hadnleLogin = (e)=>{
    e.preventDefault()  
    console.log(email , password)
 
    const confirmLogin = login.find((value) => (value.email == email && value.password == password))
 
    if(confirmLogin)
    {
     alert("Loged In successfully...!")
    //  setUname(email);
    {login.map((value)=>{
      // console.log(value.username);
      setname(value.username)
    })}
     navigate('/')
    }
    else
    {
     alert("Wrong Username or password...!")
    }
      
 }
     
  
  return (
    <>
    <div className='container'>
<form>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
    <input type="email" className="form-control" id="name" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <button type="submit" onClick={hadnleLogin} className="btn btn-primary">Submit</button>
</form>
    </div>
    <div>
        <Link to="/register">Register Now</Link>
    </div>
    </>
  )
}

export default Login
