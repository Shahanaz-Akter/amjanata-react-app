import React from 'react';

function UserLogin(props) {



    return (
       
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
    {/*start product details */}
  </div>
       
    );
}

export default UserLogin;