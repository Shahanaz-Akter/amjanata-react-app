import React, { useState } from 'react';

function Cart() {
  const [count, setCount] = useState(0);

const handleClick=()=>{
  setCount(count+1);

}

  return (
    <div className="page-content" style={{marginBottom: '100px'}}>
      <div className='cart'>Cart page</div>
       
       
         <div onClick={handleClick} id='click'> Click pls</div>

      <div>
              Clicked {count} times
      </div>
    </div>
  );
}

export default Cart;
