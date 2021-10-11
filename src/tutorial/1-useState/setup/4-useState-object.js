import React, { useState } from 'react';
import {data} from '../../../data';

const UseStateObject = () => {
// const [person, setPerson] = useState({name: 'mojtaba', age: 25, message: 'hello'})

const [name, setName] = useState('mejomba');
const [age, setAge] = useState(24);
const [message, setMessage] = useState('hello mojtaba');

const changeBtn = ()=> {
  // setPerson({...person, message: 'hello mojtaba'});
  setName('xxx');
  setAge('yyy');
  setMessage('zzz');
}
return <>
  <h2>{name}</h2>
  <h2>{age}</h2>
  <h2>{message}</h2>
  <button className='btn' onClick={changeBtn}>change</button>
  </>;
};

export default UseStateObject;
