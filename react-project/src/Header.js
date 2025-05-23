import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ name }) {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("product")) ?? [])
   
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
            Zay
          </Link>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">Shop</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div className="input-group">
                  <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                  <div className="input-group-text">
                    <i className="fa fa-fw fa-search" />
                  </div>
                </div>
              </div>
              <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                <i className="fa fa-fw fa-search text-dark mr-2" />
              </a>
              <div className="nav-icon position-relative text-decoration-none" href="#">
              <Link to={"/cart"}><i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" /></Link> 
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{cart.reduce((acc, item) => acc + Number(item.qty) , 0)}</span>
              </div>
              <div className="nav-icon position-relative text-decoration-none" href="#">
                {/* <Link to="/login" className="fa fa-fw fa-user text-dark " >Login</Link> */}
                {name ?

                  <span className="fa fa-fw fa-user text-dark ">
                    Welcome, {name}
                  </span>
                  :
                  <Link to="/login" title="login" className="fa fa-fw fa-user text-dark text-decoration-none">
                    {/* Login */}
                  </Link>
                }                
               
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header
