import React from 'react';

const NumberVerification = () => {
    return (
        <div>
             <form className="container text-center -5" action="/seller/post_number_verification" method="post">
        <h1 className="my-5">NUMBER VERIFICATION</h1>
       
            {/* <div className="fw-bold p-2 bg-light border text-danger text-center w-50 p-2 mt-3 btn text-danger">
               
            </div> */}

                <p>Please enter your phone number to get a code</p>
                <input className="rounded" style={{border: '1px solid #7bb882'}} id="phone" type="tel" name="phone" placeholder="01*********" />

                <div>
                    <button className="w-50 p-2 mt-3 btn text-light" type="submit" style={{backgroundColor: '#3bb44a'}}>
                        Send
                    </button>
                </div>
    </form>

        </div>
    );
};

export default NumberVerification;