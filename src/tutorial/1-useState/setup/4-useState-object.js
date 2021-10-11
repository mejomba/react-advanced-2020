import React, { useState } from 'react';
import {data} from '../../../data';

const UseStateObject = () => {
const [person, setPerson] = useState({name: 'mojtaba', age: 25, 'message': 'hello'})
const changeBtn = ()=> {
  setPerson({...person, message: 'hello mojtaba'});
}
return <>
  <h2>{person.name}</h2>
  <h2>{person.age}</h2>
  <h2>{person.message}</h2>
  <button onClick={changeBtn}>change</button>
  </>;
};

export default UseStateObject;
