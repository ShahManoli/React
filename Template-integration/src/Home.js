import React from 'react'

function Home() {
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
        <div className = "">
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
          <input name="username" type="text" id="username1" />
          <br />
          <label>Password</label>
          <input name="password" type="password" id="password1" />
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
    </section>
  </div>
  {/* ***** Main Banner Area Start ***** */}
  <div className="main-banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="header-text">
            <h2>Enter a world of <em>Photos</em> &amp; Amazing <em>Awards</em></h2>
            <p>SnapX Photography is a professional website template with 5 different HTML pages for maximum customizations. It is free for commercial usage. This Bootstrap v5.1.3 CSS layout is provided by TemplateMo Free CSS Templates.</p>
            <div className="buttons">
              <div className="big-border-button">
                <a href="contests.html">Explore SnapX Contest</a>
              </div>
              <div className="icon-button">
                <a href="https://youtube.com/templatemo" target="_blank"><i className="fa fa-play" /> Watch Our Video Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ***** Main Banner Area End ***** */}
  <section className="featured-items" id="featured-items">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="owl-features owl-carousel" style={{position: 'relative', zIndex: 5}}>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-01.jpg" alt="" />
                <div className="hover-effect">
                  <div className="content">
                    <h4>Walk In The Nature <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1.000 + Camera Nikon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-02.jpg" alt="" />
                <div className="hover-effect">
                  <div className="content">
                    <h4>Smile In The Nature <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,200 + Canon EOS R7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-03.jpg" alt="" />
                <div className="hover-effect">
                  <div className="content">
                    <h4>Happy In The Nature <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,800 + Canon EOS R6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-01.jpg" alt="" />
                <div className="hover-effect">
                  <div className="content">
                    <h4>Walk In The Nature <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $8,400 + Canon EOS R1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-02.jpg" alt="" />
                <div className="hover-effect">
                  <div className="content">
                    <h4>Run In The Nature <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $5,500 + Canon EOS R3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-03.jpg" alt="" />
                <div className="hover-effect">
                  <div className="content">
                    <h4>Stay In The Nature <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $4,400 + Canon EOS R5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-01.jpg" alt="" />
                <div className="hover-effect">
                  <div className="content">
                    <h4>Walk In The Nature <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $3,800 + Canon EOS R6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-02.jpg" alt="" />
                <div className="hover-effect">
                  <div className="content">
                    <h4>Shoot In The Nature <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $2,400 + Canon EOS R7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="thumb">
                <img src="assets/images/featured-03.jpg" alt="" />
                <div className="hover-effect">
                  <div className="content">
                    <h4>Fly In The Nature <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /> <span>(4.5)</span></h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,200 + Canon EOS R10</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="popular-categories">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h6>Our Categories</h6>
            <h4>Check Out <em>Popular</em> Contest <em>Categories</em></h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <a href="categories.html">Discover All Categories</a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="popular-item">
            <div className="top-content">
              <div className="icon">
                <img src="assets/images/icon-01.png" alt="" />
              </div>
              <div className="right">
                <h4>Nature Pic Contest</h4>
                <span><em>126</em> Available Contests</span>
              </div>
            </div>
            <div className="thumb">
              <img src="assets/images/popular-01.png" alt="" />
              <span className="category">Top Contest</span>
              <span className="likes"><i className="fa fa-heart" /> 256</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Browse Nature Pic Contests</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="popular-item">
            <div className="top-content">
              <div className="icon">
                <img src="assets/images/icon-02.png" alt="" />
              </div>
              <div className="right">
                <h4>Random Pic Contest</h4>
                <span><em>116</em> Available Contests</span>
              </div>
            </div>
            <div className="thumb">
              <img src="assets/images/popular-02.png" alt="" />
              <span className="category">Top Contest</span>
              <span className="likes"><i className="fa fa-heart" /> 256</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Browse Random Pic Contests</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="popular-item">
            <div className="top-content">
              <div className="icon">
                <img src="assets/images/icon-03.png" alt="" />
              </div>
              <div className="right">
                <h4>Portrait Pic Contest</h4>
                <span><em>164</em> Available Contests</span>
              </div>
            </div>
            <div className="thumb">
              <img src="assets/images/popular-03.png" alt="" />
              <span className="category">Top Contest</span>
              <span className="likes"><i className="fa fa-heart" /> 256</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Browse Portrait Pic Contests</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="popular-item">
            <div className="top-content">
              <div className="icon">
                <img src="assets/images/icon-04.png" alt="" />
              </div>
              <div className="right">
                <h4>Space Pic Contest</h4>
                <span><em>135</em> Available Contests</span>
              </div>
            </div>
            <div className="thumb">
              <img src="assets/images/popular-04.png" alt="" />
              <span className="category">Top Contest</span>
              <span className="likes"><i className="fa fa-heart" /> 256</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Browse Space Pic Contests</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="closed-contests">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading text-center">
            <h6>Closed Photography Contests</h6>
            <h4><em>Previous Contests</em> With Handpicked <em>Winners</em></h4>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="owl-features owl-carousel" style={{position: 'relative', zIndex: 5}}>
            <div className="item">
              <div className="closed-item">
                <div className="thumb">
                  <img src="assets/images/closed-01.jpg" alt="" />
                  <span className="winner"><em>Winner:</em> Anthony Soft</span>
                  <span className="price"><em>Award :</em> $1,600</span>
                </div>
                <div className="down-content">
                  <div className="row">
                    <div className="col-7">
                      <h4>88 Participants <br /><span>Number Of Artists</span></h4>
                    </div>
                    <div className="col-5">
                      <h4 className="pics">320 Pictures <br /><span>Submited Pics</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="closed-item">
                <div className="thumb">
                  <img src="assets/images/closed-02.jpg" alt="" />
                  <span className="winner"><em>Winner:</em> Anthony Soft</span>
                  <span className="price"><em>Award :</em> $4,200</span>
                </div>
                <div className="down-content">
                  <div className="row">
                    <div className="col-7">
                      <h4>96 Participants <br /><span>Number Of Artists</span></h4>
                    </div>
                    <div className="col-5">
                      <h4 className="pics">410 Pictures <br /><span>Submited Pics</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="closed-item">
                <div className="thumb">
                  <img src="assets/images/closed-03.jpg" alt="" />
                  <span className="winner"><em>Winner:</em> Anthony Soft</span>
                  <span className="price"><em>Award :</em> $3,200</span>
                </div>
                <div className="down-content">
                  <div className="row">
                    <div className="col-7">
                      <h4>74 Participants <br /><span>Number Of Artists</span></h4>
                    </div>
                    <div className="col-5">
                      <h4 className="pics">284 Pictures <br /><span>Submited Pics</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="border-button text-center">
            <a href="contests.html">Browse Open Contests</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="pricing-plans">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading text-center">
            <h6>Our Pricing</h6>
            <h4>Photography <em>Contest Plans</em> and Price <em>Awards</em></h4>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item">
            <img src="assets/images/pricing-01.jpg" alt="" />
            <h4>Basic Plan</h4>
            <ul className="first-plan">
              <li>Lorem Ipsum Dolores Sonte</li>
              <li>Songe Lorem Ipsum Dol</li>
              <li>Matrios Venga Heptuss</li>
              <li>Denim Sriracha Kogi</li>
              <li>Digital Photography Awards</li>
            </ul>
            <span className="price">$25 USD</span>
            <div className="border-button">
              <a href="#">Choose This Plan</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item">
            <img src="assets/images/pricing-02.jpg" alt="" />
            <h4>Standard Plan</h4>
            <ul className="second-plan">
              <li>Lorem Ipsum Dolores Sonte</li>
              <li>Songe Lorem Ipsum Dol</li>
              <li>Matrios Venga Heptuss</li>
              <li>Denim Sriracha Kogi</li>
              <li>Digital Photography Awards</li>
            </ul>
            <span className="price">$45 USD</span>
            <div className="border-button">
              <a href="#">Choose This Plan</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pricing-item">
            <img src="assets/images/pricing-03.jpg" alt="" />
            <h4>Advanced Plan</h4>
            <ul className="third-plan">
              <li>Lorem Ipsum Dolores Sonte</li>
              <li>Songe Lorem Ipsum Dol</li>
              <li>Matrios Venga Heptuss</li>
              <li>Denim Sriracha Kogi</li>
              <li>Digital Photography Awards</li>
            </ul>
            <span className="price">$85 USD</span>
            <div className="border-button">
              <a href="#">Choose This Plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default Home
