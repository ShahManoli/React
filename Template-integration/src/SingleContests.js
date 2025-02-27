import React from 'react'

function SingleContests() {
  return (
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
          <h2 className="space-need">A Walk In The Nature <em>Contest</em></h2>
          <h6>Contest Deadline</h6>
          <div className="main-content">
            <div className="counter">
              <div className="days">
                <div className="value">00</div>
                <span>Days</span>
              </div>
              <div className="hours">
                <div className="value">00</div>
                <span>Hours</span>
              </div>
              <div className="minutes">
                <div className="value">00</div>
                <span>Minutes</span>
              </div>
              <div className="seconds">
                <div className="value">00</div>
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contest-details">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="top-content">
            <div className="row">
              <div className="col-lg-4">
                <span className="open">Open Contest</span>
                <span className="wish-list"><i className="fa fa-heart" /> Add To Your Favorites</span>
              </div>
              <div className="col-lg-8">
                <ul>
                  <li><i className="fa fa-medal" /> <span>Award:</span> $2,400</li>
                  <li><span>Time left:</span> 7 Days</li>
                  <li><span>Participants:</span> 118</li>
                  <li><span>Submittions:</span> 280</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="main-content">
            <h4>Requirements Of The Contest</h4>
            <h6>Picture Should Have</h6>
            <p>SnapX Photography is a professional website template with 5 different HTML pages for maximum customizations. This is based on Bootstrap v5.1.3 CSS framework. Please visit TemplateMo website to see more CSS templates.</p>
            <p>You are allowed to 100% freely use this SnapX Template for your commercial websites. You are not allowed to redistribute the template ZIP file on any other Free CSS Template collection websites.</p>
            <h6 className="second-title">Picture Should Not Have</h6>
            <p>We hope this template is very useful for your website development. If you wish to <a rel="nofollow" href="https://templatemo.com/contact" target="_blank">support TemplateMo</a>, you may make a small amount of donation via PayPal.</p>
            <p>If you need the PSD source files of this template, please feel free to contact TemplateMo. Our supporters are welcome.</p>
            <h4 className="second-title">Links To Inspire Your Photo</h4>
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="item">
                  <span>JPG</span>
                  <h5>A Trip In The Rain<br /></h5><h6>Previous Winner</h6>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="item">
                  <span>PNG</span>
                  <h5>A Trip In The Jungle<br /></h5><h6>Previous Winner</h6>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="item">
                  <span>PDF</span>
                  <h5>A Trip In The Mountain<br /></h5><h6>Previous Winner</h6>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="item">
                  <span>AI</span>
                  <h5>A Trip In The Forest<br /></h5><h6>Previous Winner</h6>
                </div>
              </div>
            </div>
            <div className="main-button">
              <a href="#">Submit Your Photo/Video</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="contest-waiting">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h5>Other Contests Waiting For You:</h5>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="waiting-item">
            <img src="assets/images/waiting-01.jpg" alt="" />
            <div className="down-content">
              <h4>Best Mountain Picture Award</h4>
              <p>Lorem ipsum dolor siter and ametters conseietur adipiscing elit.</p>
              <span className="price">Price: <em>$900</em></span>
              <span className="deadline">Deadline: <em>3 Days</em></span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="waiting-item">
            <img src="assets/images/waiting-02.jpg" alt="" />
            <div className="down-content">
              <h4>Nature Walk in the Forest</h4>
              <p>Lorem ipsum dolor siter and ametters conseietur adipiscing elit.</p>
              <span className="price">Price: <em>$1,400</em></span>
              <span className="deadline">Deadline: <em>2 Days</em></span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="waiting-item">
            <img src="assets/images/waiting-03.jpg" alt="" />
            <div className="down-content">
              <h4>The Road to Photograph</h4>
              <p>Lorem ipsum dolor siter and ametters conseietur adipiscing elit.</p>
              <span className="price">Price: <em>$1,250</em></span>
              <span className="deadline">Deadline: <em>4 Days</em></span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="waiting-item">
            <img src="assets/images/waiting-04.jpg" alt="" />
            <div className="down-content">
              <h4>The Lake and Mountain Scenery</h4>
              <p>Lorem ipsum dolor siter and ametters conseietur adipiscing elit.</p>
              <span className="price">Price: <em>$1,600</em></span>
              <span className="deadline">Deadline: <em>10 Days</em></span>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <ul className="pagination">
            <li><a href="#"><i className="fa fa-arrow-left" /></a></li>
            <li><a href="#">1</a></li>
            <li className="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#"><i className="fa fa-arrow-right" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default SingleContests
