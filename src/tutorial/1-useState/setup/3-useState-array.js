import React from 'react';
import { data } from '../../../data';


const UseStateArray = () => {
const [people, setpeople] = React.useState(data);

const removeAll = ()=> {
  setpeople([])
}

const remove = (id) => {
  let newperson = people.filter((x)=> x.id !== id)
  setpeople(newperson);
}
  return ( 
  <React.Fragment>
    {people.map((person) => {
      return (
        <div className='item'>
          <h2>{person.name}</h2>
          <button className='btn' onClick={()=>remove(person.id)}>remove</button> 
        </div>
      )
    })}
    
    <button className='btn' onClick={removeAll}>remove all</button>        
  </React.Fragment>
  );
};

export default UseStateArray;
