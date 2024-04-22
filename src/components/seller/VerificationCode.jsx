import React from 'react';

const VerificationCode = () => {
    return (
        <div>
    <form action="/seller/post_verification_code" method="post" className="container text-center">
        <h4 className="text-center mb-4">VERIFICATION CODE</h4>
        <p>A 4 digit code has been sent
            to +88 ********* </p>
        <div className="d-flex mb-3">
            <input style={{border: '1px solid #7BB882'}} type="tel" maxLength="1" pattern="[0-9]" className="form-control" name="num2" />
            <input style={{border: '1px solid #7BB882'}} type="tel" maxLength="1" pattern="[0-9]" className="form-control" name="num1" />
            <input style={{border: '1px solid #7BB882'}} type="tel" maxLength="1" pattern="[0-9]" className="form-control" name="num3" />
            <input style={{border: '1px solid #7BB882'}} type="tel" maxLength="1" pattern="[0-9]" className="form-control" name="num4" /> 
        </div>
        <a href="/seller/resend/<%=seller_id%>">Did Not Receive the Code? <span className="fw-bold" style={{color: '#3BB44A'}}>RESEND</span></a>
        <div>
            <button type="submit" className="w-75 p-2 mt-3 btn text-light" style={{backgroundColor: '#3BB44A'}}>Verify</button>
        </div>
    </form>
        </div>
    );
};

export default VerificationCode;