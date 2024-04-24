import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
function UserLogin(props) {

return (
  <div>  
   <Navbar />
      
  <div className="page-content">

    <section className="section-padding">
      <div className="container">

        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
            <div className="card rounded-0">
              <div className="card-body p-4">
                <h4 className="mb-0 fw-bold text-center">User Login</h4>
                <hr />
                <p className="mb-2">Join / Sign In using</p>
                <div className="social-login mb-4">
                  <div className="row g-4">
                    <div className="col-xl-6">
                      <button type="button" className="btn bg-facebook btn-ecomm w-100 text-white"><i className="bi bi-facebook me-2"></i>Facebook</button>
                    </div>
                    <div className="col-xl-6">
                      <button type="button" className="btn bg-pinterest btn-ecomm w-100 text-white"><i className="bi bi-google me-2"></i>Google</button>
                    </div>
                  </div>
                </div>
                <div className="separator mb-2">
                  <div className="line"></div>
                  <p className="mb-0 fw-bold">Or</p>
                  <div className="line"></div>
                </div>
               
                  {/* <div className="text-danger text-center p-2 fw-bold border mb-1">
                  </div> */}
                  

                      <form action="/customer/post_login_customer">
                        <div className="row g-4">
                          <div className="col-12 d-none">
                            <label htmlFor="name" className="form-label">Username</label>
                            <input type="text" className="form-control rounded-0" id="name" name="name" />
                          </div>
                          <div className="col-12">
                            <label htmlFor="mobile" className="form-label">Mobile</label>
                            <input type="text" id="mobile" className="form-control" placeholder="00 000 000 000" name="mobile" style={{background: '#FCFCFC!important'}} required />
                          </div>
                          <div className="col-12 d-none">
                            <a href="javascript:;" className="text-content btn bg-light rounded-0 w-100"><i className="bi bi-lock me-2"></i>Forgot Password</a>
                          </div>
                          <div className="col-12">
                            <hr className="my-0" />
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-dark rounded-0 btn-ecomm w-100">Login</button>
                          </div>
                          <div className="col-12 text-center">
                            <p className="mb-0 rounded-0 w-100">Don't have an account? <a href="/customer/user_register" className="text-danger">Sign Up</a></p>
                          </div>
                        </div>
                        
                        {/* end row */}
                      </form>
              </div>
            </div>
          </div>
        </div>
        {/* end row */}

      </div>
    </section>

  </div>


{/* start footer */}
    <section className="section-padding ms-md-5 invisible">
      <div className="d-none d-md-block">
        <div className="row">
          <div className="col-12 col-md-6 mt-4 col-lg-3 col-xl-3 mt-lg-0" style={{border: '0px solid'}}>
            <div className="" style={{width: '200px', margin: '0px auto'}}>
              <h5 className="mb-3 fw-bold">About Us</h5>
              <div className="list-unstyled text-dark">
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>About Amjanata</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Careers</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>News & Blog</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Amjanata Brands</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Bullseye Shop</a></li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}>Sustainability & Governance</a>
                </li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Press Center</a></li>
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>Advertise with Us</a></li>
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>Investors</a></li>
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>Affiliates & Partners</a></li>
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>Suppliers</a></li>
                <li><a href="" style={{color: 'black', textDecoration:'none'}}>AmjanataPlus</a></li>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-4 col-lg-3 col-xl-3 mt-lg-0" style={{border: '0px solid'}}>
            <div className="" style={{width: '200px', margin: '0px auto'}}>
              <h5 className="mb-3 fw-bold">Help</h5>
              <ul className="list-unstyled">
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Amjanata Help</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Returns</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Track Orders</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Recalls</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Contact Us</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Feedback</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Accessibility</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Security & Fraud</a></li>
                <li><a href="/privacy_policy"  style={{color: 'black', textDecoration:'none'}}>Privacy</a></li>
                <li><a href="/terms_condition"  style={{color: 'black', textDecoration:'none'}}>Terms & Condition</a></li>
                <li><a href=""  style={{color: 'black', textDecoration:'none'}}>Team Member Services</a></li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-4 col-lg-3 col-xl-3 mt-lg-0" style={{border: '0px solid'}}>
            <div className="" style={{width: '200px', margin: '0px auto'}}>
              <h5 className="mb-3 fw-bold">Stores</h5>
              <ul className="list-unstyled">
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-08.svg" alt="" style={{width: '20px'}} />
                    Location</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-4 col-lg-3 col-xl-3 mt-lg-0" style={{border: '0px solid'}}>
            <div className="" style={{width: '200px', margin: '0px auto'}}>
              <h5 className="mb-3 fw-bold">Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-01.svg" alt="" style={{width: '20px'}} />
                    Amjanata Circle</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-03.svg" alt="" style={{width: '20px'}} />
                    RedCard</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-04.svg" alt="" style={{width: '20px'}} />
                    Amjanata App</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-05.svg" alt="" style={{width: '20px'}} />
                    Registry</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-06.svg" alt="" style={{width: '20px'}} />
                    Delivery</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}>
                    <img src="/src/front_assets/img/icons/amjanata icon-07.svg" alt="" style={{width: '20px'}} />
                    Order Pickup</a>
                </li>
                <li>
                  <a href=""  style={{color: 'black', textDecoration:'none'}}><img src="/src/front_assets/img/icons/amjanata icon-02.svg" alt="" style={{width: '20px'}} />
                    Free 2-Day Shipping</a>
                </li>
              </ul>
            </div>
          </div>

          {/* end row */}
        </div>
      </div>

      <div className="accordion accordion-flush d-block d-md-none" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              About Us
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="" style={{width: '200px',margin: '20px auto' }}>
              <div className="list-unstyled">
                <li><a href="">About Amjanata</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">News & Blog</a></li>
                <li><a href="">Amjanata Brands</a></li>
                <li><a href="">Bullseye Shop</a></li>
                <li>
                  <a href="">Sustainability & Governance</a>
                </li>
                <li><a href="">Press Center</a></li>
                <li><a href="">Advertise with Us</a></li>
                <li><a href="">Investors</a></li>
                <li><a href="">Affiliates & Partners</a></li>
                <li><a href="">Suppliers</a></li>
                <li><a href="">AmjanataPlus</a></li>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Help
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="" style={{width: '200px',margin: '20px auto' }}>
              <ul className="list-unstyled">
                <li><a href="">Amjanata Help</a></li>
                <li><a href="">Returns</a></li>
                <li><a href="">Track Orders</a></li>
                <li><a href="">Recalls</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Feedback</a></li>
                <li><a href="">Accessibility</a></li>
                <li><a href="">Security & Fraud</a></li>
                <li><a href="">Team Member Services</a></li>
                <li><a href="/privacy_policy">Privacy</a></li>
                <li><a href="/terms_condition">Terms & Condition</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Stores
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="" style={{width: '200px',margin: '20px auto' }}>
              <ul className="list-unstyled">
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-08.svg" alt="" style={{width: '20px'}} />
                    Location</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              Services
            </button>
          </h2>
          <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div className="pb-1" style={{width: '200px',margin: '20px auto' }}>
              <ul className="list-unstyled">
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-01.svg" alt="" style={{width: '20px'}} />
                    Amjanata Circle</a>
                </li>
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-03.svg" alt="" style={{width: '20px'}} />
                    RedCard</a>
                </li>
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-04.svg" alt="" style={{width: '20px'}} />
                    Amjanata App</a>
                </li>
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-05.svg" alt="" style={{width: '20px'}} />
                    Registry</a>
                </li>
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-06.svg" alt="" style={{width: '20px'}} />
                    Delivery</a>
                </li>
                <li>
                  <a href="">
                    <img src="/src/front_assets/img/icons/amjanata icon-07.svg" alt="" style={{width: '20px'}} />
                    Order Pickup</a>
                </li>
                <li>
                  <a href=""><img src="/src/front_assets/img/icons/amjanata icon-02.svg" alt="" style={{width: '20px'}} />
                    Free 2-Day Shipping</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a href="">
              <img className="d-flex justify-content-center mx-auto my-0"  style={{width: '200px'}} src="/amjanata.png" alt="" />
        </a>
        </div>

    </section>
    {/* end footer */}


 <div>
        <a href="">
              <img className="d-flex justify-content-center mx-auto my-0"  style={{width: '200px'}} src="/amjanata.png" alt="" />
        </a>
        </div>
      <Footer />

  </div>

       
    );

}

export default UserLogin;