import React, { useEffect, useState } from 'react'

function Register() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => { return res.json() })
      .then((data) => {
        setUsers(data)
      })
  }, [])

  // const handleUser = (e) => {
  //   e.preventDefault();
  //   const newUser = { email, username, address, password };

  //       fetch('http://localhost:5000/users', {
  //         method: "post",
  //         headers: { "content-type": "application/json" },
  //         body: JSON.stringify(newUser)
  //       })
  //       .then((res)=>{return res.json()}) 
  //       .then((data)=>{
  //         setUsers([...users, data]);
  //       }) 
  // }

  const handleUser = (e) => {
    e.preventDefault()
    const newUser = { email, username, address, password };

    const login = users.find((value) => (value.email == email || email == ""))

    if (login) {
      alert("Email Already Used...!")
    }
    else {
      alert("Successfully Added...!")

      fetch('http://localhost:5000/users', {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser)
      })
        .then((res) => { return res.json() })
        .then((data) => { setUsers([...users, data]) })
    }
  }
  return (
    <div className='container'>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" >Email</label>
          <input type="email" className="form-control" id="password" value={email} onChange={((e) => { setEmail(e.target.value) })} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" value={username} onChange={((e) => { setUsername(e.target.value) })} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
          <input type="text" className="form-control" id="username" value={address} onChange={((e) => { setAddress(e.target.value) })} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={((e) => { setPassword(e.target.value) })} />
        </div>
        {/* <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="password" />
  </div> */}
        <button type="submit" className="btn btn-primary" onClick={handleUser}>Register</button>
      </form>

    </div>
  )
}

export default Register
