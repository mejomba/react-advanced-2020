import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, settext] = useState('true')
  return <>
  {/* {text || 'hello'} */}
  {/* {text && 'by'} */}

  {text || <h2>if false</h2>}
  {text && <h2>if true</h2>}
  </>;
};

export default ShortCircuit;
