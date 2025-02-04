import React from 'react'

function Categories() {
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
          <h2>Discover Most Popular Categories on <em>SnapX</em></h2>
          <p>You are allowed to freely use SnapX Photography Template for your commercial websites. You are not allowed to redistribute the template ZIP file on any other Free CSS websites.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="top-categories">
    <div className="container">
      <div className="row">
        <div className="col-lg col-sm-4">
          <div className="item">
            <div className="icon">
              <img src="assets/images/icon-01.png" alt="" />
            </div>
            <h4>Nature Picture</h4>
            <span>Available Contests</span>
            <span className="counter">128</span>
          </div>
        </div>
        <div className="col-lg col-sm-4">
          <div className="item">
            <div className="icon">
              <img src="assets/images/icon-02.png" alt="" />
            </div>
            <h4>Space Contest</h4>
            <span>Available Contests</span>
            <span className="counter">224</span>
          </div>
        </div>
        <div className="col-lg col-sm-4">
          <div className="item">
            <div className="icon">
              <img src="assets/images/icon-03.png" alt="" />
            </div>
            <h4>Portrait Picture</h4>
            <span>Available Contests</span>
            <span className="counter">145</span>
          </div>
        </div>
        <div className="col-lg col-sm-4">
          <div className="item">
            <div className="icon">
              <img src="assets/images/icon-04.png" alt="" />
            </div>
            <h4>Nature Picture</h4>
            <span>Available Contests</span>
            <span className="counter">268</span>
          </div>
        </div>
        <div className="col-lg col-sm-4">
          <div className="item">
            <div className="icon">
              <img src="assets/images/icon-01.png" alt="" />
            </div>
            <h4>Space Picture</h4>
            <span>Available Contests</span>
            <span className="counter">310</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="featured-contests">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading text-center">
            <h6>Featured Contests</h6>
            <h4>View Most <em>Popular</em> Category <em>Contests</em></h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="item">
            <div className="thumb">
              <img src="assets/images/featured-image-02.jpg" alt="" />
              <div className="hover-effect">
                <div className="content">
                  <div className="top-content">
                    <span className="award">Award Price</span>
                    <span className="price">$1,600</span>
                  </div>
                  <h4>Walk In The Nature Night</h4>
                  <div className="info">
                    <span className="participants"><img src="assets//images/icon-03.png" alt="" /><br />60<br />Participants</span>
                    <span className="submittions"><img src="assets//images/icon-01.png" alt="" /><br />188<br />Submissions</span>
                  </div>
                  <div className="border-button">
                    <a href="contest-details.html">Browse Nature Contests</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="item">
            <div className="thumb">
              <img src="assets/images/featured-image-01.jpg" alt="" />
              <div className="hover-effect">
                <div className="content">
                  <div className="top-content">
                    <span className="award">Award Price</span>
                    <span className="price">$3,200</span>
                  </div>
                  <h4>Walk In The Nature Night</h4>
                  <div className="info">
                    <span className="participants"><img src="assets//images/icon-03.png" alt="" /><br />78<br />Participants</span>
                    <span className="submittions"><img src="assets//images/icon-01.png" alt="" /><br />240<br />Submissions</span>
                  </div>
                  <div className="border-button">
                    <a href="contest-details.html">Browse Nature Contests</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <img src="assets/images/featured-image-03.jpg" alt="" />
              <div className="hover-effect">
                <div className="content">
                  <div className="top-content">
                    <span className="award">Award Price</span>
                    <span className="price">$4,100</span>
                  </div>
                  <h4>Walk In The Nature Night</h4>
                  <div className="info">
                    <span className="participants"><img src="assets//images/icon-03.png" alt="" /><br />112<br />Participants</span>
                    <span className="submittions"><img src="assets//images/icon-01.png" alt="" /><br />286<br />Submissions</span>
                  </div>
                  <div className="border-button">
                    <a href="contest-details.html">Browse Nature Contests</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <img src="assets/images/featured-image-04.jpg" alt="" />
              <div className="hover-effect">
                <div className="content">
                  <div className="top-content">
                    <span className="award">Award Price</span>
                    <span className="price">$3,400</span>
                  </div>
                  <h4>Walk In The Nature Night</h4>
                  <div className="info">
                    <span className="participants"><img src="assets//images/icon-03.png" alt="" /><br />54<br />Participants</span>
                    <span className="submittions"><img src="assets//images/icon-01.png" alt="" /><br />140<br />Submissions</span>
                  </div>
                  <div className="border-button">
                    <a href="contest-details.html">Browse Nature Contests</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <img src="assets/images/featured-image-05.jpg" alt="" />
              <div className="hover-effect">
                <div className="content">
                  <div className="top-content">
                    <span className="award">Award Price</span>
                    <span className="price">$2,200</span>
                  </div>
                  <h4>Walk In The Nature Night</h4>
                  <div className="info">
                    <span className="participants"><img src="assets//images/icon-03.png" alt="" /><br />68<br />Participants</span>
                    <span className="submittions"><img src="assets//images/icon-01.png" alt="" /><br />162<br />Submissions</span>
                  </div>
                  <div className="border-button">
                    <a href="contest-details.html">Browse Nature Contests</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="testimonials">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading text-center">
            <h6>What Clients Say</h6>
            <h4>What <em>Website</em> Users Are Saying <em>Topics</em></h4>
          </div>
        </div>
        <div className="col-lg-8 offset-lg-2">
          <div className="owl-testimonials owl-carousel">
            <div className="item">
              <div className="content">
                <div className="left-content">
                  <p>“SnapX Photography is a professional website template for photo and video related businesses. This Bootstrap v5.1.3 HTML CSS template is provided by TemplateMo website.”</p>
                  <h4>Thomas Wilson</h4>
                  <span>User #007704</span>
                </div>
                <div className="image">
                  <img src="assets/images/author.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="left-content">
                  <p>“You may visit Too CSS website for latest collections of great templates. There are a variety of different categories for HTML CSS templates.”</p>
                  <h4>John Walker</h4>
                  <span>User #007772</span>
                </div>
                <div className="image">
                  <img src="assets/images/author.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="left-content">
                  <p>“If you need a working contact form, please visit TemplateMo contact page for more information. You can easily buy and use a simple PHP contact form.”</p>
                  <h4>Vincent Anthon</h4>
                  <span>User #007794</span>
                </div>
                <div className="image">
                  <img src="assets/images/author.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="left-content">
                  <p>“When you need Free CSS Templates, you just remember our website TemplateMo. We provide you best quality website templates at absolutely free of charge. No hidden cost involved.”</p>
                  <h4>Alan Smithee</h4>
                  <span>User #007765</span>
                </div>
                <div className="image">
                  <img src="assets/images/author.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="left-content">
                  <p>“We hope this template is very useful for your website development. If you wish to <a rel="nofollow" href="https://templatemo.com/contact" target="_blank">support TemplateMo</a>, you may make a small amount of donation via PayPal.”</p>
                  <h4>Alan Smithee</h4>
                  <span>User #007724</span>
                </div>
                <div className="image">
                  <img src="assets/images/author.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="clients">
            <div className="row">
              <div className="col-lg-2 col-4">
                <img src="assets/images/contest-01.jpg" alt="" />
              </div>
              <div className="col-lg-2 col-4">
                <img src="assets/images/contest-02.jpg" alt="" />
              </div>
              <div className="col-lg-2 col-4">
                <img src="assets/images/contest-01.jpg" alt="" />
              </div>
              <div className="col-lg-2 col-4">
                <img src="assets/images/contest-02.jpg" alt="" />
              </div>
              <div className="col-lg-2 col-4">
                <img src="assets/images/contest-01.jpg" alt="" />
              </div>
              <div className="col-lg-2 col-4">
                <img src="assets/images/contest-02.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Categories
