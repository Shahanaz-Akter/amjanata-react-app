import React from 'react';
import "../admin_panel/login.css";
const AuthenticationLogin = () => {
    return (
        <>
  <div className="account-pages my-5">
    <div className="container">

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="text-center">
            <a href="index.html">
              <img src="../../assets/images/logo-sm.png" alt="" height="22" className="mx-auto" />
            </a>
            <p className="text-muted mt-2 mb-4">Responsive Admin Dashboard</p>

          </div>
          <div className="card">
            <div className="card-body p-4">

              <div className="text-center mb-4">
                <h4 className="text-uppercase mt-0">Sign In</h4>
              </div>

              <form action="/auth/post_login" method="post">
                    <div className="mb-3 mt-2">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input className="form-control" type="email" id="email" placeholder="John@gmail.com" name="email" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input className="form-control" type="password" id="password" placeholder="Enter your password" name="password" required />
                    </div>

                    <div className="mb-3 d-grid text-center">
                      <button className="btn btn-dark" type="submit"> Log In </button>
                    </div>
              </form>

            </div>
            {/* <!-- end card-body --> */}
          </div>
          {/* <!-- end card --> */}

          <div className="row mt-3 text-dark">
            <div className="col-12 text-center">
              <p> <a className="text-dark fw-bold ms-1" data-bs-toggle="modal" data-bs-target="#forget_password"><i className="fa fa-lock me-1"></i>Forgot your password?</a></p>
              <p className="text-dark fw-bold">Don't have an account? <a href="/auth/register" className="text-dark ms-1"><b>Sign Up</b></a></p>
            </div> 
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}

          {/* <!-- forget password modal --> */}
          <div className="modal fade" id="forget_password" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header">

                  <h4 className="modal-title" id="myCenterModalLabel">Provide Your Valid Email!</h4>

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form action="/auth/post_forget_password" method="post">
                    <div className="row">
                     
                    
                          <div className="col-12 col-md-12 col-lg-12 col-xl-12 mb-3 mt-2">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input className="form-control" type="email" id="email" placeholder="John@gmail.com" name="email" />
                          </div>

                          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                            <button type="submit" className="btn btn-primary" style={{borderRadius: '5px'}}>Reset</button>
                          </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- password Change modal --> */}
          <div className="modal fade" id="change_password" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header">

                  <h4 className="modal-title" id="myCenterModalLabel">Provide Your New Password!</h4>

                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form className="row align-items-center" action="/post_password" method="post">

                    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 d-flex justify-content-center flex-column">
                      <div className="header mb-3">
                        <h2><b>Password Generate</b></h2>
                      </div>

                      <div className="row mb-3">
                        {/* <!-- <div className="my-3"> --> */}
                        <label htmlFor="pin" className=""><b>Pin</b> </label>

                        <div className="first-example">
                          <input type="password" id="password-field" placeholder="**********" name="new_pin"  required />
                          <i id="pass-status" className="fa fa-eye-slash" aria-hidden="true" onClick="viewPassword()"></i>
                        </div>
                      </div>

                      <div className="row mb-3">
                        {/* <!-- <div className="my-3"> --> */}
                        <label htmlFor="confirm_pin" className=""> <b> Confirm Pin</b></label>
                        <div className="first-example">
                          <input type="password" id="password-field1" placeholder="**********" name="confirm_pin" required /> 
                          <i id="pass-status1" className="fa fa-eye-slash" aria-hidden="true" onClick="viewPassword1()"></i>
                        </div>
                      </div>

                      <div className="btn-link mt-4 text-center">
                        <button className="button mb-4" href="">Continue</button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>


        </div>
         {/* end col  */}
      </div>
     {/* end row */}
    </div>
     {/* end container */}
  </div>
        </>
    );
};

export default AuthenticationLogin;