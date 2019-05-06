import React from "react";
import './Person.css'

export const person = props => (
  <div className='Person'>
    <p>
      Nome: {props.name}, idade: {props.age}
    </p>
    <p>{props.children}</p>
    <input type='text' onChange={(e) => props.onChange(e)} value={props.value} ></input>
  </div>
);

export default person;
