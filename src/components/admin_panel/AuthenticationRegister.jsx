// API_URL it will be kike this Axios.post(API_URL, ....);

import React, {useState } from 'react';

import axios from 'axios';
import { API_URL } from '../../../utils/config';
import Login from './AuthenticationLogin';
function AuthenticationRegister() {

//   const _URL="http:localhost:8000";
// console.log('API_URL: ',_URL);

  const [formData, setFormData]= useState({
    'user_name': '',
    'email': '',
    'password': '',
    'role': '',
  });
 const [showLogin, setShowLogin]=useState(false);


  // useEffect(()=>{
  //   fetch('http://192.168.0.108:8000/api/parent_category')
  //   .then(response=>response.json)
  //   .then(data=>data.setRecords(data))
  //   .catch(err=>console.log(err))


  //   console.log('Hello JS');
  // }, []);

const handleInput=(e)=>{
  //  console.log("Object e: ", e);
  //  let name= e.target.name;
  //   let value= e.target.value;
  //   console.log( name, ': ', value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log('formData: ',formData);

}

const submitRegister = async (e) => {

    e.preventDefault(); // Prevent default form submission
    try {

      // Make POST request to server endpoint
      const response = await axios.post("http://192.168.0.108:8000/auth/post_register", formData);
      console.log('Registration successful:', response);
       
          if(response.data.message=='success'){
               setShowLogin(true);
          }

      // Clear form data
      setFormData({
        user_name: '',
        email: '',
        password: '',
        role: ''
      });



    } catch (error) {
      // Handle errors
      console.log('Registration failed:', error);
    }
  }

  return (
 <div>

{/* <div>{showLogin && <Login/>}</div> */}


<div className="account-pages mt-5 mb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="text-center">
            <a href="index.html">
              <img src="" alt="" height="22" className="mx-auto" />
            </a>
          </div>
          <div className="card">

            <div className="card-body p-4">

              <div className="text-center mb-4">
                <h4 className="text-uppercase mt-0">Register / Signup</h4>
              </div>

              <form  onSubmit={submitRegister}>

                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">User Name</label>
                  <input className="form-control" type="text" id="fullname" name="user_name" placeholder="John" onChange={handleInput} />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input className="form-control" type="email" id="email" name="email" placeholder="John@gmail.com" onChange={handleInput}  required /> 
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input className="form-control" type="text" id="password" name="password" placeholder="******" onChange={handleInput} required />
                </div>


                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Role</label>
                  <input className="form-control" type="text" id="role" name="role" placeholder="superadmin / admin" onChange={handleInput} required />
                </div>


                <div className="mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="checkbox-signup" required checked  onChange={handleInput}   />
                    <label className="form-check-label" htmlFor="checkbox-signup">I accept Terms and Conditions</label>
                  </div>
                </div>


                <div className="mb-3 d-grid text-center">
                  <button className="btn btn-dark" type="submit">Sign Up </button>
                </div>

              </form>


            </div> 
            {/* <!-- end card-body --> */}
          </div>
          {/* <!-- end card --> */}

          <div className="row mt-3">
            <div className="col-12 text-center ">
              <p className="text-dark fw-bold">Already have account? <a href="/auth/login" className="text-dark ms-1"><b>Sign In</b></a></p>
            </div> 
          </div>

        </div> 
      </div>
    </div>
  </div>

  </div>
    );
}

export default AuthenticationRegister;