import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const reset = ()=> setCount(0);
  const complexBtn = ()=> {
    setTimeout(()=> {
      setCount((old)=> {
        return old + 1;
      });
    }, 2000);
  }
  return <>
  <h2>simple counter</h2>
  <h1>{count}</h1>
  <button className='btn' onClick={()=> setCount(count - 1)}>decrease</button>
  <button className='btn' onClick={reset}>reset</button>
  <button className='btn' onClick={()=> setCount(count + 1)}>increase</button>
  
  {/* <h2>complex counter</h2> */}
  {/* <h1>{count}</h1> */}
  <button className='btn' onClick={complexBtn}>increase with delay</button>
  </>;
};

export default UseStateCounter;
