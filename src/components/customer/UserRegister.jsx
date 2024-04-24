import React, { useState } from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function UserRegister(props) {
    // State variables to hold form data
    const [registerData, setRegisterData] = useState({});

    const collectRegisteredData=(event)=>{
        const field = event.target.name;
        const value = event.target.value;

        // console.log("Field: ", field, value);
        const allRegisteredeData= {...registerData}
        allRegisteredeData[field] = value;
        setRegisterData(allRegisteredeData);
    }


    // Function to handle form submission
       const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Logic to handle form submission, e.g., sending data to server
        console.log("allRegister data", registerData);
    };

return (


 <div>

<Navbar/>
 <div className="page-content">
    {/* <!--start breadcrumb--> */}
    <div className="py-4 border-bottom">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="javascript:;">Home</a></li>
            <li className="breadcrumb-item"><a href="javascript:;">Authentication</a></li>
            <li className="breadcrumb-item active" aria-current="page">Register</li>
          </ol>
        </nav>
      </div>
    </div>
    {/* <!--end breadcrumb--> */}

    {/* start product details */}
    <section className="section-padding">
      <div className="container">

        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5 col-xxl-5 mx-auto">
            <div className="card rounded-0">
              <div className="card-body p-4">
                <h4 className="mb-0 fw-bold text-center">Registration</h4>
                <hr />
                <p className="mb-2">Join / Sign Up using</p>
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
                <div className="separator mb-4">
                  <div className="line"></div>
                  <p className="mb-0 fw-bold">Or</p>
                  <div className="line"></div>
                </div>

              <form onSubmit={handleSubmit}>
                
               <div className="row g-4">
                <div className="col-12">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control rounded-0" id="name" name="name" placeholder="John Doe" onChange={collectRegisteredData} />
                </div>
                <div className="col-12">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="text" className="form-control rounded-0" placeholder="01*********" id="mobile" name="mobile" onChange={collectRegisteredData} />
                </div>
                <div className="col-12">
                    <label htmlFor="email" className="form-label">Email ID</label>
                    <input type="email" className="form-control rounded-0" id="email" name="email" onChange={collectRegisteredData} />
                </div>
                <div className="col-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control rounded-0" id="password" name="password" onChange={collectRegisteredData} />
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="agree" onChange={collectRegisteredData} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            I agree to Terms and Conditions
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <hr className="my-0" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-dark rounded-0 btn-ecomm w-100">Sign Up</button>
                </div>
                <div className="col-12 text-center">
                    <p className="mb-0 rounded-0 w-100">Already have an account? <a href="/customer/user_login" className="text-danger">Sign In</a></p>
                </div>
            </div>

         </form>

              </div>
            </div>
          </div>
        </div>
        {/* end row */}

      </div>
    </section>


  </div>

 <div>
        <a href="">
              <img className="d-flex justify-content-center mx-auto my-0"  style={{width: '200px'}} src="/amjanata.png" alt="" />
        </a>
        </div>
<Footer/>
   </div>
    );
}

export default UserRegister;