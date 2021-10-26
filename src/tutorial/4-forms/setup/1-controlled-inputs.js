import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const submitHandler = (e)=> {
    e.preventDefault();
    console.log('hell');
  }
  return <>
  <form className="form" onSubmit={submitHandler}>
    <div className="form-control">
      <label htmlFor="firstName">Name : </label>
      <input type="text" id="firstName" name="firstName" />
    </div>
    <div className="form-control">
      <label htmlFor="email">Email : </label>
      <input type="text" id="email" name="email" />
    </div>
    <button type="submit">submit</button>
  </form>
  </>;
};

export default ControlledInputs;
