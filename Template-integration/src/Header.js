import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
<header className="header-area header-sticky">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="main-nav">
          {/* ***** Logo Start ***** */}
          <a href="index.html" className="logo">
            <img src="assets/images/logo.png" alt="SnapX Photography Template" />
          </a>
          {/* ***** Logo End ***** */}
          {/* ***** Menu Start ***** */}
          <ul className="nav">
            <li><Link to="/" className="active">Home</Link></li>
            <li className="has-sub">
              <a href="javascript:void(0)">Photos &amp; Videos</a>
              <ul className="sub-menu">
                <li><Link to="contests">Contests</Link></li>
                <li><Link to="singlecontest">Single Contest</Link></li>
              </ul>
            </li> 
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>   
          <div className="border-button">
          <Link to="/signin">SignIn</Link>
          </div>
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
          {/* ***** Menu End ***** */}
        </nav>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default Header
