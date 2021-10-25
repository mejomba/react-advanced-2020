import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  // const [text, settext] = useState('true')
  const [isError, setisError] = useState(false)
  return <>
  {/* {text || 'hello'} */}
  {/* {text && 'by'} */}

  {/* {text || <h2>if false</h2>} */}
  {/* {text && <h2>if true</h2>} */}
  <button className='btn' onClick={()=> {setisError(!isError)}}>toggle error</button>
  
  {isError ? <h2>خطا رخ داد</h2> : <h2>خطا نداریم</h2>}
  </>;
};

export default ShortCircuit;
