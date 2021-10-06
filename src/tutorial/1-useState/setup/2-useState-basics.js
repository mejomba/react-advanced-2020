import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, settitle] = useState('salam');
  const clickHandle = ()=> {
    if (title === 'salam'){
      settitle('hello');
    } else {
      settitle('salam');
    }
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className='btn' onClick={clickHandle}>click</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
