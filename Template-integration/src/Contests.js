import React from 'react'

function Contests() {
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
          <h2>Discover what's currently going on at <em>SnapX</em></h2>
          <p>When you need Free CSS Templates, you just remember our website TemplateMo. We provide you best quality website templates at absolutely free of charge. No hidden cost involved.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="search-form">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <form id="search-form" name="gs" method="submit" role="search" action="#">
            <div className="row">
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="contest" className="form-label">Search Any Contest</label>
                  <input type="text" name="contest" className="searchText" placeholder="Contest Name..." autoComplete="on" required />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="category" className="form-label">Pick Category</label>
                  <select name="category" className="form-select" aria-label="Choose a category" id="category" onchange="this.form.click()">
                    <option selected>Choose a category</option>
                    <option type="checkbox" name="Nature" value="Nature">Nature Photography (220 Contests)</option>
                    <option value="Portrait">Portrait Photography (172 Contests)</option>
                    <option value="Space">Space Photography (92 Contests)</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-lg-2">
                <fieldset>
                  <label htmlFor="chooseprice" className="form-label">Award Price</label>
                  <select name="Price" className="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                    <option selected>Choose a price</option>
                    <option value={500}>$500 to $1,000</option>
                    <option value={1500}>$1,500 to $2,000</option>
                    <option value={2500}>$2,500 to $3000</option>
                    <option value="3500+">$3,500+</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-lg-2">                        
                <fieldset>
                  <button className="main-button">Search Now</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <section className="photos-videos">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading text-center">
            <h6>Photos &amp; Videos At SnapX</h6>
            <h4>Our Featured <em>Photos &amp; Videos</em> At SnapX</h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="item">
            <div className="thumb">
              <img src="assets/images/photo-video-01.jpg" alt="" />
              <div className="top-content">
                <h4>A Walk In Nature</h4>
                <h6><i className="fa fa-eye" /> 840 | <i className="fa fa-heart" /> 160</h6>
              </div>
            </div>
            <div className="down-content">
              <div className="row">
                <div className="col-7">
                  <h2>Ranked: 1st</h2>
                </div>
                <div className="col-5">
                  <h6>Category: Photos</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="item">
            <div className="thumb">
              <img src="assets/images/photo-video-02.jpg" alt="" />
              <div className="play-button">
                <a href="http://youtube.com" target="_blank"><i className="fa fa-play" /></a>
              </div>
              <div className="top-content">
                <h4>Blue Mountain Hill</h4>
                <h6><i className="fa fa-eye" /> 1722 | <i className="fa fa-heart" /> 320</h6>
              </div>
            </div>
            <div className="down-content">
              <div className="row">
                <div className="col-7">
                  <h2>Ranked: 2nd</h2>
                </div>
                <div className="col-5">
                  <h6>Category: Videos</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <img src="assets/images/photo-video-03.jpg" alt="" />
              <div className="top-content">
                <h4>Underwater Turtle</h4>
                <h6><i className="fa fa-eye" /> 1436 | <i className="fa fa-heart" /> 256</h6>
              </div>
            </div>
            <div className="down-content">
              <div className="row">
                <div className="col-7">
                  <h2>Ranked: 3rd</h2>
                </div>
                <div className="col-5">
                  <h6>Category: Photos</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <img src="assets/images/photo-video-04.jpg" alt="" />
              <div className="play-button">
                <a href="http://youtube.com" target="_blank"><i className="fa fa-play" /></a>
              </div>
              <div className="top-content">
                <h4>Greeny Place</h4>
                <h6><i className="fa fa-eye" /> 1596 | <i className="fa fa-heart" /> 512</h6>
              </div>
            </div>
            <div className="down-content">
              <div className="row">
                <div className="col-7">
                  <h2>Ranked: 4th</h2>
                </div>
                <div className="col-5">
                  <h6>Category: Videos</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item">
            <div className="thumb">
              <img src="assets/images/photo-video-05.jpg" alt="" />
              <div className="top-content">
                <h4>Rocky Mountain</h4>
                <h6><i className="fa fa-eye" /> 1596 | <i className="fa fa-heart" /> 768</h6>
              </div>
            </div>
            <div className="down-content">
              <div className="row">
                <div className="col-7">
                  <h2>Ranked: 5th</h2>
                </div>
                <div className="col-5">
                  <h6>Category: Random</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contest-win">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading text-center">
            <h6>Recently Added Contests by Users</h6>
            <h4>Current <em>Contests</em> to Enter Now &amp; <em>Win</em></h4>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="contest-item">
            <div className="top-content">
              <span className="award">Award Price</span>
              <span className="price">$1,200</span>
            </div>
            <img src="assets/images/contest-01.jpg" alt="" />
            <h4>Walk In The Nature Night</h4>
            <div className="info">
              <span className="participants"><img src="assets//images/icon-03.png" alt="" /><br />80 Participants</span>
              <span className="submittions"><img src="assets//images/icon-01.png" alt="" /><br />260 Submissions</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Browse Nature Pic Contests</a>
            </div>
            <span className="info">* Client will pay via Online Payments</span>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="contest-item">
            <div className="top-content">
              <span className="award">Award Price</span>
              <span className="price">$2,400</span>
            </div>
            <img src="assets/images/contest-02.jpg" alt="" />
            <h4>Walk In The Nature Night</h4>
            <div className="info">
              <span className="participants"><img src="assets//images/icon-03.png" alt="" /><br />60 Participants</span>
              <span className="submittions"><img src="assets//images/icon-01.png" alt="" /><br />212 Submissions</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Browse Nature Pic Contests</a>
            </div>
            <span className="info">* Client will pay via Online Payments</span>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="contest-item">
            <div className="top-content">
              <span className="award">Award Price</span>
              <span className="price">$3,600</span>
            </div>
            <img src="assets/images/contest-03.jpg" alt="" />
            <h4>Walk In The Nature Night</h4>
            <div className="info">
              <span className="participants"><img src="assets//images/icon-03.png" alt="" /><br />55 Participants</span>
              <span className="submittions"><img src="assets//images/icon-01.png" alt="" /><br />150 Submissions</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Browse Nature Pic Contests</a>
            </div>
            <span className="info">* Client will pay via Online Payments</span>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="contest-item">
            <div className="top-content">
              <span className="award">Award Price</span>
              <span className="price">$4,800</span>
            </div>
            <img src="assets/images/contest-04.jpg" alt="" />
            <h4>Walk In The Nature Night</h4>
            <div className="info">
              <span className="participants"><img src="assets//images/icon-03.png" alt="" /><br />40 Participants</span>
              <span className="submittions"><img src="assets//images/icon-01.png" alt="" /><br />120 Submissions</span>
            </div>
            <div className="border-button">
              <a href="contest-details.html">Browse Nature Pic Contests</a>
            </div>
            <span className="info">* Client will pay via Online Payments</span>
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

export default Contests
