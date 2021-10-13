import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(()=> {
    console.log('hello');
    if (value >= 1) {
      document.title = `پیام جدید ${value}`;
    }
  }, [value]);

  useEffect(()=>{
    console.log('bay bay');
  })
  console.log('render');
  return <>
  <h1>{value}</h1>
  <button className='btn' onClick={()=>setValue(value + 1)}>click</button>
  </>;
};

export default UseEffectBasics;
