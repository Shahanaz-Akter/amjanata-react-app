

import React from 'react';

function SellerRegister() {
    return (
       
     <div className="container d-grid mt-2">
        <h3 className="text-center">Register / Login</h3>
        <div className="mt-3 p-2 btn btn-ghost text-light border" style={{backgroundColor: '#465993'}}>Registration with Facebook</div>
        <div className="mt-3 p-2 btn btn-ghost border">Registration with Google</div>
        <a href="/seller/number_verification" className="mt-3 p-2 btn btn-ghost border">Registration / login Phone Number</a>
    </div> 
       
    );
}

export default SellerRegister;