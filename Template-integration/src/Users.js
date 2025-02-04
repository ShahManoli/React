import React from 'react'

function Users() {
  return (
    <div>
<div>
  <div id="modal" className="popupContainer" style={{display: 'none'}}>
    <div className="popupHeader">
      <span className="header_title">Login</span>
      <span className="modal_close"><i className="fa fa-times" /></span>
    </div>
    <section className="popupBody">
      {/* Social Login */}
      <div className="social_login">
        <div>
          <a href="#" className="social_box fb">
            <span className="icon"><i className="fab fa-facebook" /></span>
            <span className="icon_title">Connect with Facebook</span>
          </a>
          <a href="#" className="social_box google">
            <span className="icon"><i className="fab fa-google-plus" /></span>
            <span className="icon_title">Connect with Google</span>
          </a>
        </div>
        <div className="centeredText">
          <span>Or use your Email address</span>
        </div>
        <div className="action_btns">
          <div className="one_half"><a href="#" id="login_form" className="btn">Login</a></div>
          <div className="one_half last"><a href="#" id="register_form" className="btn">Sign up</a></div>
        </div>
      </div>
      {/* Username & Password Login form */}
      <div className="user_login">
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
            <div className="one_half last"><button type="submit" className="btn btn_red">Login</button></div>
          </div>
        </form>
        <a href="#" className="forgot_password">Forgot password?</a>
      </div>
      {/* Register Form */}
      <div className="user_register">
        <form method="post">
          <label>Username</label>
          <input name="username" type="text" id="username1" />
          <br />
          <label>Email Address</label>
          <input name="email" type="email" id="email" />
          <br />
          <label>Password</label>
          <input name="password" type="password" id="password1" />
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
    </section>
  </div>
  <div className="page-heading">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 header-text">
          <h2>View User's Photos and <em>Contest Details</em></h2>
          <p>If you wish to <a rel="nofollow" href="https://templatemo.com/contact" target="_blank">support TemplateMo</a>, you shall make a little amount of contribution via PayPal. We hope this SnapX template is useful for your web development. Thank you.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="user-info">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="avatar">
            <img src="assets/images/user-avatar.jpg" alt="" />
            <h4>#007772 John Walker</h4>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="info">
            <h6>Rank</h6>
            <h4>#121</h4>
            <span>of 1680</span>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="info">
            <h6>Ratings</h6>
            <h4>4.56</h4>
            <span>of 5.00 Stars</span>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="info">
            <h6>Top Rated</h6>
            <h4>Nature</h4>
            <span>Picture Category</span>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="info">
            <h6>Profile Views</h6>
            <h4>8,250</h4>
            <span>Monthly</span>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="info">
            <h6>Contests Won</h6>
            <h4>90</h4>
            <span>of 12,400</span>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="info">
            <h6>Total Earned</h6>
            <h4>$68,000</h4>
            <span>All Time</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="thumb">
            <img src="assets/images/portfolio-01.jpg" alt="" />
            <div className="hover-effect">
              <div className="content">
                <h4>Walk In the Beach</h4>
                <span>Ranked: <em>2nd</em></span>
                <span>Award Won: <em>None</em></span>
                <ul>
                  <li><a href="#"><i className="fa fa-heart" /></a></li>
                  <li><a href="#"><i className="fa fa-eye" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="thumb">
            <img src="assets/images/portfolio-02.jpg" alt="" />
            <div className="hover-effect">
              <div className="content">
                <h4>Walk In The Nature</h4>
                <span>Ranked: <em>3rd</em></span>
                <span>Award Won: <em>EOS R3</em></span>
                <ul>
                  <li><a href="#"><i className="fa fa-heart" /></a></li>
                  <li><a href="#"><i className="fa fa-eye" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="thumb">
            <img src="assets/images/portfolio-03.jpg" alt="" />
            <div className="hover-effect">
              <div className="content">
                <h4>Walk In The Forest</h4>
                <span>Ranked: <em>4th</em></span>
                <span>Award: <em>EOS R7</em></span>
                <ul>
                  <li><a href="#"><i className="fa fa-heart" /></a></li>
                  <li><a href="#"><i className="fa fa-eye" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="thumb">
            <img src="assets/images/portfolio-04.jpg" alt="" />
            <div className="hover-effect">
              <div className="content">
                <h4>Forest Nature</h4>
                <span>Ranked: <em>2nd</em></span>
                <span>Award: <em>EOS R3</em></span>
                <ul>
                  <li><a href="#"><i className="fa fa-heart" /></a></li>
                  <li><a href="#"><i className="fa fa-eye" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="thumb">
            <img src="assets/images/portfolio-05.jpg" alt="" />
            <div className="hover-effect">
              <div className="content">
                <h4>Fly thru the river</h4>
                <span>Ranked: <em>1st</em></span>
                <span>Award: <em>EOS R1</em></span>
                <ul>
                  <li><a href="#"><i className="fa fa-heart" /></a></li>
                  <li><a href="#"><i className="fa fa-eye" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="thumb">
            <img src="assets/images/portfolio-06.jpg" alt="" />
            <div className="hover-effect">
              <div className="content">
                <h4>Rocky Mountain</h4>
                <span>Ranked: <em>2nd</em></span>
                <span>Award Won: <em>None</em></span>
                <ul>
                  <li><a href="#"><i className="fa fa-heart" /></a></li>
                  <li><a href="#"><i className="fa fa-eye" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="thumb">
            <img src="assets/images/portfolio-07.jpg" alt="" />
            <div className="hover-effect">
              <div className="content">
                <h4>Rocky Mountain . Part 2</h4>
                <span>Ranked: <em>2nd</em></span>
                <span>Award Won: <em>None</em></span>
                <ul>
                  <li><a href="#"><i className="fa fa-heart" /></a></li>
                  <li><a href="#"><i className="fa fa-eye" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="thumb">
            <img src="assets/images/portfolio-08.jpg" alt="" />
            <div className="hover-effect">
              <div className="content">
                <h4>Blue Lake Nature</h4>
                <span>Ranked: <em>4th</em></span>
                <span>Award Won: <em>None</em></span>
                <ul>
                  <li><a href="#"><i className="fa fa-heart" /></a></li>
                  <li><a href="#"><i className="fa fa-eye" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="thumb">
            <img src="assets/images/portfolio-09.jpg" alt="" />
            <div className="hover-effect">
              <div className="content">
                <h4>Walk In The Forest</h4>
                <span>Ranked: <em>3rd</em></span>
                <span>Award Won: <em>None</em></span>
                <ul>
                  <li><a href="#"><i className="fa fa-heart" /></a></li>
                  <li><a href="#"><i className="fa fa-eye" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="main-button">
            <a href="#">Load More Photos</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contact-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading text-center">
            <h6>Contact This User</h6>
            <h4>Don't Be Shy <em /> to contact the <em>Photographer Now</em></h4>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-item">
            <i className="fa fa-phone" />
            <h4>Phone Numbers</h4>
            <span><a href="#">010-020-0340</a><br /><a href="#">090-080-0760</a></span>
          </div>  
        </div>
        <div className="col-lg-4">
          <div className="info-item">
            <i className="fa fa-envelope" />
            <h4>Email Addresses</h4>
            <span><a href="#">info@company.com</a><br /><a href="#">SnapX@company.com</a></span>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-item">
            <i className="fa fa-map-marked" />
            <h4>Office Location</h4>
            <span><a href="#">155 Michigan Ave, Chicago,<br />IL 60601, United States</a></span>
          </div>
        </div>
        <div className="col-lg-12">
          <form id="contact" action method="post">
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <input type="text" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <input type="text" name="telephone" id="telephone" placeholder="Your Telephone..." autoComplete="on" required />
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <input type="email" name="email" id="email" placeholder="Your E-mail..." required />
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <input type="text" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <textarea name="message" id="message" placeholder="Your Message" defaultValue={""} />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="orange-button">Send Message Now</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default Users
