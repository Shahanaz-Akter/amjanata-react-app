import React, { useState } from 'react';
import Navbar from '../home/Navbar';

function Cart() {
  const [count, setCount] = useState(0);

const handleClick=()=>{
  setCount(count+1);

}

let isLoggedIn=true;

  return (
  <div className="page-content" style={{marginBottom: '100px'}}>
      <div className='cart'>Cart page</div>
       
         <div onClick={handleClick} id='click'> Click</div>

      <div>
              Clicked {count} times
      </div>

    <div>
      { isLoggedIn ? <Navbar /> : null }
</div>

 </div>
  );
}

export default Cart;
