import React, { useState, useEffect } from 'react';

const ShowHide = () => {
const [showHide, setshowHide] = useState(false)

  const show = ()=> {
    setshowHide(!showHide)
  }
  return <>
  <button className='btn' onClick={show}>ShowHide</button>
  {showHide ? <Other /> : ''}
  </>;
};

const Other = ()=> {
  const [size, setsize] = useState(window.innerWidth)
  const checkSize = ()=>{
    setsize(window.innerWidth)
  }
  useEffect(()=>{
  window.addEventListener('resize', checkSize)
return ()=>{
  window.removeEventListener('resize', checkSize)
}
},[])

  return <>
    <h2>other component</h2>
    <h3>window: {size}</h3>
  </>
}

export default ShowHide;
